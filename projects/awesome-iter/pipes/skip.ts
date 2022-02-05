import type {MonoTypeIterOperator} from '../awesome-iter';

/**
 * Skip `count` elements, continue yielding the rest
 * @throws {Error} When `count` < 1
 * @example
 * ```
 * const result = new AwesomeIter([1, 2, 3, 4]).pipe(skip(2));
 * expect([...result]).to.deep.eq([3, 4]);
 * ```
 */
export function skip<T>(count: number): MonoTypeIterOperator<T> {
  if (count < 1) {
    throw new Error(`Count <1: ${count}`);
  }

  return function skipOperator(source) {
    for (let i = 0; i < count; i++) {
      if (source.next().done) {
        return [];
      }
    }

    return {
      [Symbol.iterator]() {
        return source;
      }
    };
  };
}
