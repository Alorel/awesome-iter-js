import type {ConsumingIterOperator} from '../awesome-iter';

/**
 * Check if any element in the iterable matches the given predicate
 * @example
 * ```
 * const iter = new AwesomeIter([
 *   {foo: 10},
 *   {foo: 20},
 *   {foo: 30},
 * ]);
 * const result = iter.consume(some(val => val.foo === 20));
 * expect(result).to.eq(true);
 * ```
 */
export function some<T>(predicate: (value: T) => any): ConsumingIterOperator<T, boolean> {
  return function someOperator(source) {
    let next: IteratorResult<T>;
    while (!(next = source.next()).done) {
      if (predicate(next.value)) {
        return true;
      }
    }

    return false;
  };
}
