import type {IterOperator} from '../awesome-iter';

/**
 * Group and yield elements in chunks of `chunkSize`
 * @param chunkSize How many elements to put into each chunk
 * @param [yieldIncompleteChunk=true] Whether to yield the last chunk if it has < `chunkSize` elements in it or not
 * @throws {Error} When `chunkSize` < 1
 * @example
 * ```
 * const iter1 = new AwesomeIter(['a', 'b', 'c', 'd', 'e']);
 * const iter2 = new AwesomeIter(['a', 'b', 'c', 'd', 'e']);
 *
 * const result1 = [...iter1.pipe(chunk(2))]; // or chunk(2, true)
 * const result2 = [...iter2.pipe(chunk(2, false))];
 *
 * expect(result1).to.deep.eq([['a', 'b'], ['c', 'd'], ['e']]);
 * expect(result2).to.deep.eq([['a', 'b'], ['c', 'd']]);
 * ```
 */
export function chunk<T>(chunkSize: number, yieldIncompleteChunk = true): IterOperator<T, T[]> {
  if (chunkSize < 1) {
    throw new Error(`Chunk size <1: ${chunkSize}`);
  }

  return function *chunkOperator(source) {
    let next: IteratorResult<T>;
    let out: T[];

    while (true) {
      out = [];

      for (let i = 0; i < chunkSize; i++) {
        if ((next = source.next()).done) {
          break;
        }
        out.push(next.value);
      }

      if (out.length === chunkSize) {
        yield out;
      } else {
        if (yieldIncompleteChunk) {
          yield out;
        }
        break;
      }
    }
  };
}
