import type {ConsumingIterOperator} from '../awesome-iter';
import {reduce} from './reduce';

function reducer<T>(acc: T[], item: T): T[] {
  acc.push(item);

  return acc;
}

/**
 * A consuming utility to collect iterable elements into an array.
 * @example
 * ```
 * const iter1 = new AwesomeIter(['a', 'b']).pipe(concat(['c', 'd']));
 * const iter2 = new AwesomeIter(['a', 'b']).pipe(concat(['c', 'd']));
 *
 * const result1 = iter.consume(toArray());
 * const result2 = [...iter];
 *
 * expect(result1).to.deep.eq(result2);
 * ```
 */
export function toArray<T>(): ConsumingIterOperator<T, T[]> {
  return reduce<T, T[]>([], reducer);
}
