import type {ConsumingIterOperator} from '../awesome-iter';

/**
 * Much like `Array.prototype.reduce`; Passes iterable elements through the reducer function, returns result when done.
 * @example
 * ```
 * const result = new AwesomeIter(['a', 'b', 'c'])
 *   .consume(
 *     reduce(0, (accumulator, letter) => accumulator + letter.charCodeAt(0))
 *   );
 *
 * expect(result).to.eq(294); // 97 + 98 + 99 = 294
 * ```
 */
export function reduce<I, O>(
  starterValue: O,
  reducer: (accumulator: O, value: I) => O
): ConsumingIterOperator<I, O> {
  return function reduceOperator(source) {
    let out = starterValue;
    let next: IteratorResult<I>;
    while (!(next = source.next()).done) {
      out = reducer(out, next.value);
    }

    return out;
  };
}
