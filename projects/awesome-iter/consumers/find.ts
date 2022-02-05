import type {ConsumingIterOperator} from '../awesome-iter';

/**
 * Find an element matching the given predicate in the iterable
 * @example
 *
 * ```
 * const iter1 = new AwesomeIter(['a', 'b', 'c']);
 * const iter2 = new AwesomeIter(['a', 'b', 'c']);
 *
 * const result1 = iter1.consume(find(v => v === 'b'));
 * const result2 = iter2.consume(find(v => v === 'd'));
 *
 * expect(result1).to.eq(true);
 * expect(result2).to.eq(false);
 * ```
 */
export function find<T>(predicate: (value: T) => any): ConsumingIterOperator<T, T | undefined> {
  return function findOperator(source) {
    let next: IteratorResult<T>;
    while (!(next = source.next()).done) {
      if (predicate(next.value)) {
        return next.value;
      }
    }
  };
}
