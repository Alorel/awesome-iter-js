import type {ConsumingIterOperator} from '../awesome-iter';
import {reduce} from './reduce';

function reducer<T>(acc: Set<T>, item: T): Set<T> {
  return acc.add(item);
}

/**
 * Collect the iterable's elements into a {@link Set}.
 * @example
 * ```
 * const result = new AwesomeIter([1, 2, 3, 1, 2, 3])
 *   .consume(toSet());
 *
 * expect(result).to.deep.eq(new Set([1, 2, 3]));
 * ```
 */
export function toSet<T>(): ConsumingIterOperator<T, Set<T>> {
  return reduce(new Set(), reducer);
}
