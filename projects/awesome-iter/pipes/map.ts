import type {IterOperator} from '../awesome-iter';

/**
 * Map elements through the given function
 * @example
 * ```
 * const result = new AwesomeIter(['a', 'b', 'c']).pipe(
 *   map(v => v.toUpperCase())
 * );
 * expect([...result]).to.deep.eq(['A', 'B', 'C']);
 * ```
 */
export function map<I, O>(mapFn: (value: I) => O): IterOperator<I, O> {
  return function *mapOperator(source) {
    let result: IteratorResult<I>;
    while (!(result = source.next()).done) {
      yield mapFn(result.value);
    }
  };
}
