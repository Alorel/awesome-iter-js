import type {MonoTypeIterOperator} from '../awesome-iter';

/**
 * Inspect values being yielded without modifying them
 * @example
 * ```
 * const result = new AwesomeIter(['a', 'b', 'c'])
 *   .pipe(tap(v => console.log(v)))
 *   .consume(toArray());
 * // Logs a, then b, then c
 * expect(result).to.deep.eq(['a', 'b', 'c']);
 * ```
 */
export function tap<T>(tapper: (value: T) => any): MonoTypeIterOperator<T> {
  return function *tapOperator(source) {
    let next: IteratorResult<T>;
    while (!(next = source.next()).done) {
      tapper(next.value);
      yield next.value;
    }
  };
}
