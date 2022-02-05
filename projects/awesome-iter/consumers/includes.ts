import type {ConsumingIterOperator} from '../awesome-iter';

/**
 * Check whether the iterable includes the given value
 * @example
 * ```
 * const result1 = new AwesomeIter(['a', 'b', 'c']).consume(includes('b'));
 * const result2 = new AwesomeIter(['a', 'b', 'c']).consume(includes('d'));
 *
 * expect(result1).to.eq(true);
 * expect(result2).to.eq(false);
 * ```
 */
export function includes<T>(value: T): ConsumingIterOperator<T, boolean> {
  return function includesOperator(source) {
    let next: IteratorResult<T>;
    while (!(next = source.next()).done) {
      if (next.value === value) {
        return true;
      }
    }

    return false;
  };
}
