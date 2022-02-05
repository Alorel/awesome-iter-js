import type {ConsumingIterOperator} from '../awesome-iter';

function countOperator<T>(source: Iterator<T>): number {
  let out = 0;
  while (!source.next().done) {
    out++;
  }

  return out;
}

/**
 * Count the number of elements in the iterable
 * @example
 *
 * ```
 * const result = new AwesomeIter(['a', 'b', 'c']).consume(count());
 * expect(result).to.eq(3);
 * ```
 */
export function count<T>(): ConsumingIterOperator<T, number> {
  return countOperator;
}
