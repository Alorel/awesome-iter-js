import type {ConsumingIterOperator} from '../awesome-iter';
import {AwesomeIter} from '../awesome-iter';

class SplitHandler implements Iterator<any> {

  public constructor(
        private readonly source: Iterator<any>,
        private readonly predicate: (item: any) => any,
        private readonly ourQueue: Array<IteratorResult<any>>,
        private readonly otherQueue: Array<IteratorResult<any>>
  ) {}

  /** @inheritDoc */
  public next(): IteratorResult<any> {
    if (this.ourQueue.length) {
      return this.ourQueue.shift()!;
    }

    let next: IteratorResult<any>;
    while (!(next = this.source.next()).done) {
      if (this.predicate(next.value)) {
        return next;
      }
      this.otherQueue.push(next);
    }

    return {done: true, value: undefined};
  }
}

/**
 * Split the iterable in two
 * @param predicate A predicate function to split by. Elements it returns truthy for will be forwarded to the first
 * {@link AwesomeIter}, elements it returns falsy for will be forwarded to the second.
 * @example
 * ```
 * const [small, large] = new AwesomeIter([1, 2, 3, 4, 5, 6])
 *   .consume(split(num => num < 4));
 *
 * const result = small
 *   .pipe(
 *     map(num => num * 100),
 *     concat(
 *       large.pipe(map(num => num * 10))
 *     )
 *   );
 *
 * expect([...result]).to.deep.eq([100, 200, 300, 40, 50, 60]);
 * ```
 */
export function split<A, B = A>(
  predicate: (item: A) => any
): ConsumingIterOperator<A, [AwesomeIter<A>, AwesomeIter<B>]> {
  return function splitOperator(source) {
    const aQueue: Array<IteratorResult<any>> = [];
    const bQueue: Array<IteratorResult<any>> = [];

    const a = new SplitHandler(source, predicate, aQueue, bQueue);
    const b = new SplitHandler(source, predicate, bQueue, aQueue);

    return [new AwesomeIter(a), new AwesomeIter(b)];
  };
}
