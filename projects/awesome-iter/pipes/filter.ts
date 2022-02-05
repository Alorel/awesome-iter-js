import type {IterOperator} from '../awesome-iter';

/**
 * Filter the iterable to only yield values passing the predicate function
 * @example
 * ```
 * const result = new AwesomeIter([1, 2, 3, 4, 5]).pipe(
 *   filter(v => (v > 3))
 * );
 * expect([...result]).to.deep.eq([4, 5]);
 * ```
 */
function filter<I, O extends I>(filterFn: (value: I) => value is O): IterOperator<I, O>;

/**
 * Filter the iterable to only yield values passing the predicate function
 * @example
 * ```
 * const result = new AwesomeIter([1, 2, 3, 4, 5]).pipe(
 *   filter(v => (v > 3))
 * );
 * expect([...result]).to.deep.eq([4, 5]);
 * ```
 */
function filter<I, O extends I = I>(filterFn: (value: I) => any): IterOperator<I, O>;

/**
 * Filter the iterable to only yield values passing the predicate function
 * @example
 * ```
 * const result = new AwesomeIter([1, 2, 3, 4, 5]).pipe(
 *   filter(v => (v > 3))
 * );
 * expect([...result]).to.deep.eq([4, 5]);
 * ```
 */
function filter<I, O extends I= I>(filterFn: (value: I) => any): IterOperator<I, O> {
  return function *filterOperator(source) {
    let result: IteratorResult<I>;
    while (!(result = source.next()).done) {
      if (filterFn(result.value)) {
        yield result.value as unknown as O;
      }
    }
  };
}

export {filter};
