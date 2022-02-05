import type {ConsumingIterOperator} from '../awesome-iter';

function lastOperator<T>(source: Iterator<T>): T | undefined {
  let value: T | undefined;
  let next: IteratorResult<T>;
  while (!(next = source.next()).done) {
    value = next.value;
  }

  return value;
}

/**
 * Return the last element in the iterable or undefined if it doesn't exist
 * @example
 * ```
 * const result1 = new AwesomeIter(['a', 'b', 'c']).consume(last());
 * const result2 = new AwesomeIter([]).consume(last());
 *
 * expect(result1).to.eq('c');
 * expect(result2).to.eq(undefined);
 * ```
 */
export function last<T>(): ConsumingIterOperator<T, T | undefined> {
  return lastOperator;
}
