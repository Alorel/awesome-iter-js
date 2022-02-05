export type ConsumingIterOperator<I, O> = (source: Iterator<I>) => O;

export type IterOperator<I, O> = ConsumingIterOperator<I, Iterable<O>>;
export type MonoTypeIterOperator<T> = IterOperator<T, T>;

function isIterable(v: any): v is Iterable<any> {
  return Symbol.iterator in v;
}

/** Provides Iterables & Iterators with utility functions */
export class AwesomeIter<T> implements IterableIterator<T> {
  protected readonly source: Iterator<T>;

  public constructor(source: Iterable<T> | Iterator<T>) {
    this.source = isIterable(source) ? source[Symbol.iterator]() : source;
  }

  /**
   * Consume the source iterable & produce a result.
   * @param consumer The consumer operator for producing the result.
   * @example
   * ```
   * import {some} from '@aloreljs/awesome-iter/consumers';
   *
   * const hasFreeItems: boolean = awesomeIter.consume(some(item => item.price === 0));
   * ```
   */
  public consume<O>(consumer: ConsumingIterOperator<T, O>): O {
    return consumer(this);
  }

  /** @inheritDoc */
  public next(): IteratorResult<T> {
    return this.source.next();
  }

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe(): this;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe<A>(op1: IterOperator<T, A>): AwesomeIter<A>;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe<A, B>(op1: IterOperator<T, A>, op2: IterOperator<A, B>): AwesomeIter<B>;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe<A, B, C>(op1: IterOperator<T, A>, op2: IterOperator<A, B>, op3: IterOperator<B, C>): AwesomeIter<C>;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe<A, B, C, D>(
        op1: IterOperator<T, A>,
        op2: IterOperator<A, B>,
        op3: IterOperator<B, C>,
        op4: IterOperator<C, D>
    ): AwesomeIter<D>;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe<A, B, C, D, E>(
        op1: IterOperator<T, A>,
        op2: IterOperator<A, B>,
        op3: IterOperator<B, C>,
        op4: IterOperator<C, D>,
        op5: IterOperator<D, E>
    ): AwesomeIter<E>;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe<A, B, C, D, E, F>(
        op1: IterOperator<T, A>,
        op2: IterOperator<A, B>,
        op3: IterOperator<B, C>,
        op4: IterOperator<C, D>,
        op5: IterOperator<D, E>,
        op6: IterOperator<E, F>
    ): AwesomeIter<F>;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe<A, B, C, D, E, F, G>(
        op1: IterOperator<T, A>,
        op2: IterOperator<A, B>,
        op3: IterOperator<B, C>,
        op4: IterOperator<C, D>,
        op5: IterOperator<D, E>,
        op6: IterOperator<E, F>,
        op7: IterOperator<F, G>
    ): AwesomeIter<G>;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe<A, B, C, D, E, F, G, H>(
        op1: IterOperator<T, A>,
        op2: IterOperator<A, B>,
        op3: IterOperator<B, C>,
        op4: IterOperator<C, D>,
        op5: IterOperator<D, E>,
        op6: IterOperator<E, F>,
        op7: IterOperator<F, G>,
        op8: IterOperator<G, H>
    ): AwesomeIter<H>;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe<A, B, C, D, E, F, G, H, II>(
        op1: IterOperator<T, A>,
        op2: IterOperator<A, B>,
        op3: IterOperator<B, C>,
        op4: IterOperator<C, D>,
        op5: IterOperator<D, E>,
        op6: IterOperator<E, F>,
        op7: IterOperator<F, G>,
        op8: IterOperator<G, H>,
        op9: IterOperator<H, II>
    ): AwesomeIter<II>;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe<A, B, C, D, E, F, G, H, II>(
        op1: IterOperator<T, A>,
        op2: IterOperator<A, B>,
        op3: IterOperator<B, C>,
        op4: IterOperator<C, D>,
        op5: IterOperator<D, E>,
        op6: IterOperator<E, F>,
        op7: IterOperator<F, G>,
        op8: IterOperator<G, H>,
        op9: IterOperator<H, II>,
        ...operations: Array<IterOperator<any, any>>
    ): AwesomeIter<unknown>;

  /**
   * Pipe the source iterable through transformation & filtering functions
   * @example
   * ```
   * import {map} from '@aloreljs/awesome-iter/pipes';
   * import {AwesomeIter} from '@aloreljs/awesome-iter';
   *
   * const iter = new AwesomeIter(['a', 'b', 'c']);
   * const result = iter.pipe(map(a => a.toUpperCase()));
   *
   * expect([...result]).to.deep.eq(['A', 'B', 'C']);
   * ```
   */
  public pipe(...operators: Array<IterOperator<any, any>>): AwesomeIter<any> {
    if (!operators.length) {
      return this;
    }

    let source: Iterator<any> = operators[0](this.source)[Symbol.iterator]();
    for (let i = 1; i < operators.length; i++) {
      source = operators[i](source)[Symbol.iterator]();
    }

    return new AwesomeIter(source);
  }

  /** @inheritDoc */
  public [Symbol.iterator](): this {
    return this;
  }
}

