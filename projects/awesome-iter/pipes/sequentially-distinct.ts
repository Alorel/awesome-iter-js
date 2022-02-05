import type {MonoTypeIterOperator} from '../awesome-iter';
import {refEqual} from '../util/util-fns';

/**
 * Prevents a value from being yielded if it's the same as the previous value.
 * @param compareBy By default, values are compared using `===`; you can specify a custom comparison function, e.g.
 * `_.isEqual` from `lodash`, which should return a truthy value if `a === b` and a falsy value if `a !== b`.
 * @example
 * ```
 * const iter1 = new AwesomeIter([1, 2, 2, 3, 2]);
 * const iter2 = new AwesomeIter([1, 2, 4, 6, 1, 3, 5, 10]);
 *
 * const result1 = iter1.pipe(sequentiallyDistinct());
 * const result2 = iter2.pipe(sequentiallyDistinct((a, b) => a % 2 === b % 2));
 *
 * expect([...result1]).to.deep.eq([1, 2, 3, 2]);
 * expect([...result2]).to.deep.eq([1, 2, 1, 10]);
 * ```
 */
export function sequentiallyDistinct<T>(compareBy: (a: T, b: T) => any = refEqual): MonoTypeIterOperator<T> {
  return function *sequentiallyDistinctOperator(source) {
    let next: IteratorResult<T>;
    let prev: T;

    if ((next = source.next()).done) {
      return;
    }
    yield (prev = next.value);


    while (!(next = source.next()).done) {
      if (!compareBy(next.value, prev)) {
        yield next.value;
      }
      prev = next.value;
    }
  };
}
