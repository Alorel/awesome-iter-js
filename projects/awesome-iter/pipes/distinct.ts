import type {MonoTypeIterOperator} from '../awesome-iter';
import {identity} from '../util/util-fns';

/**
 * Ensures only distinct elements are yielded. The elements must be distinct as far as {@link Set} is concerned.
 * @param compareBy By default, values are compared using `===`; you can specify a function to extract a different value
 * to compare by.
 * @example
 * ```
 * const iter1 = new AwesomeIter([1, 0, 1, 0, 2, 1, 0, 2]);
 * const iter2 = new AwesomeIter([1, 2, 3, 4, 5]);
 *
 * const result1 = iter1.pipe(distinct());
 * const result2 = iter2.pipe(distinct(v => v % 2));
 *
 * expect([...result1]).to.deep.eq([1, 0, 2]);
 * expect([...result2]).to.deep.eq([1, 2]);
 * ```
 */
export function distinct<T>(compareBy: (value: T) => any = identity): MonoTypeIterOperator<T> {
  return function *distinctOperator(source) {
    let next: IteratorResult<T>;
    let hash: any;
    const hashes = new Set<any>();

    while (!(next = source.next()).done) {
      hash = compareBy(next.value);
      if (!hashes.has(hash)) {
        yield next.value;
        hashes.add(hash);
      }
    }
  };
}
