import type {ConsumingIterOperator} from '../awesome-iter';
import {reduce} from './reduce';

type ObjTypeOf<T> = T extends [infer K, infer V]
    ? K extends PropertyKey
        ? Record<K, V>
        : never
    : T extends Array<infer KV>
        ? KV extends PropertyKey
            ? Record<KV, KV>
            : never
        : never;

function reducer<T extends any[]>(acc: ObjTypeOf<T>, item: T): ObjTypeOf<T> {
  (acc as any)[item[0]] = item[1];

  return acc;
}

/**
 * Collect the iterable's elements into a plain object. Only usable when values come in chunks of 2 or more.
 * @example
 * ```
 * const result = new AwesomeIter(['a', 1, 'b', 2, 'c', 3])
 *   .pipe(chunk(2))
 *   .consume(toObject());
 *
 * expect(result).to.deep.eq({
 *     a: 1,
 *     b: 2,
 *     c: 3,
 * });
 * ```
 */
export function toObject<T extends any[]>(): ConsumingIterOperator<T, ObjTypeOf<T>> {
  return reduce({} as any, reducer);
}
