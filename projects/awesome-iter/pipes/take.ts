import type {MonoTypeIterOperator} from '../awesome-iter';

/**
 * Take `count` elements & finish
 * @throws {Error} When `count` < 0
 * @example
 * ```
 * const result = new AwesomeIter([1, 2, 3, 4]).pipe(take(2));
 * expect([...result]).to.deep.eq([1, 2]);
 * ```
 */
export function take<T>(count: number): MonoTypeIterOperator<T> {
  if (count < 0) {
    throw new Error(`Count <0: ${count}`);
  }

  return function *takeOperator(source) {
    let yielded = 0;
    let result: IteratorResult<T>;
    while (yielded < count && !(result = source.next()).done) {
      yield result.value;
      yielded++;
    }
  };
}
