import type {ConsumingIterOperator} from '../awesome-iter';
import {reduce} from './reduce';

type MapTypeOf<T> = T extends [infer K, infer V]
    ? Map<K, V>
    : T extends Array<infer KV>
        ? Map<KV, KV>
        : never;

function reducer<T extends any[]>(acc: MapTypeOf<T>, item: T): MapTypeOf<T> {
  return acc.set(item[0], item[1]);
}

/**
 * Collect the iterable's elements into a {@link Map}. Only usable when values come in chunks of 2 or more.
 * @example
 * ```
 * const result = new AwesomeIter([1, 'a', 2, 'b', 3, 'c'])
 *   .pipe(chunk(2))
 *   .consume(toMap());
 *
 * expect(result).to.deep.eq(new Map([
 *   [1, 'a'],
 *   [2, 'b'],
 *   [3, 'c'],
 * ]));
 * ```
 */
export function toMap<T extends any[]>(): ConsumingIterOperator<T, MapTypeOf<T>> {
  return reduce(new Map() as any, reducer);
}
