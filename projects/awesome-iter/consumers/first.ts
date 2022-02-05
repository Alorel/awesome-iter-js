import type {ConsumingIterOperator} from '../awesome-iter';

function firstOperator<T>(source: Iterator<T>): T | undefined {
  const next = source.next();
  if (!next.done) {
    return next.value;
  }
}

/**
 * Return the first element in the iterable or undefined if it doesn't exist
 * @example
 * ```
 * const result1 = new AwesomeIter(['a', 'b', 'c']).consume(first());
 * const result2 = new AwesomeIter([]).consume(first());
 *
 * expect(result1).to.eq('a');
 * expect(result2).to.eq(undefined);
 * ```
 */
export function first<T>(): ConsumingIterOperator<T, T | undefined> {
  return firstOperator;
}
