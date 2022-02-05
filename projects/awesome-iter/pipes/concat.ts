import type {IterOperator} from '../awesome-iter';
import {passthroughOperator} from '../util/util-fns';

/**
 * Concatenate output with that of one or more other iterables
 * @example
 * ```
 * const source1 = ['a', 'b', 'c'];
 * const source2 = new Set(['d', 'e', 'f']);
 * const source3 = new Map([['g', 1], ['h', 2], ['i', 3]]);
 *
 * const iter = new AwesomeIter(source1)
 *   .pipe(concat(source2, source3.keys()));
 *
 * expect([...iter]).to.deep.eq(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
 * ```
 */
function concat<T, A>(a: Iterable<A>): IterOperator<T, T | A>;

/**
 * Concatenate output with that of one or more other iterables
 * @example
 * ```
 * const source1 = ['a', 'b', 'c'];
 * const source2 = new Set(['d', 'e', 'f']);
 * const source3 = new Map([['g', 1], ['h', 2], ['i', 3]]);
 *
 * const iter = new AwesomeIter(source1)
 *   .pipe(concat(source2, source3.keys()));
 *
 * expect([...iter]).to.deep.eq(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
 * ```
 */
function concat<T, A, B>(a: Iterable<A>, b: Iterable<B>): IterOperator<T, T | A | B>;

/**
 * Concatenate output with that of one or more other iterables
 * @example
 * ```
 * const source1 = ['a', 'b', 'c'];
 * const source2 = new Set(['d', 'e', 'f']);
 * const source3 = new Map([['g', 1], ['h', 2], ['i', 3]]);
 *
 * const iter = new AwesomeIter(source1)
 *   .pipe(concat(source2, source3.keys()));
 *
 * expect([...iter]).to.deep.eq(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
 * ```
 */
function concat<T, A, B, C>(a: Iterable<A>, b: Iterable<B>, c: Iterable<C>): IterOperator<T, T | A | B | C>;

/**
 * Concatenate output with that of one or more other iterables
 * @example
 * ```
 * const source1 = ['a', 'b', 'c'];
 * const source2 = new Set(['d', 'e', 'f']);
 * const source3 = new Map([['g', 1], ['h', 2], ['i', 3]]);
 *
 * const iter = new AwesomeIter(source1)
 *   .pipe(concat(source2, source3.keys()));
 *
 * expect([...iter]).to.deep.eq(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
 * ```
 */
function concat<T, A, B, C, D>(
    a: Iterable<A>,
    b: Iterable<B>,
    c: Iterable<C>,
    d: Iterable<D>
): IterOperator<T, T | A | B | C | D>;

/**
 * Concatenate output with that of one or more other iterables
 * @example
 * ```
 * const source1 = ['a', 'b', 'c'];
 * const source2 = new Set(['d', 'e', 'f']);
 * const source3 = new Map([['g', 1], ['h', 2], ['i', 3]]);
 *
 * const iter = new AwesomeIter(source1)
 *   .pipe(concat(source2, source3.keys()));
 *
 * expect([...iter]).to.deep.eq(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
 * ```
 */
function concat<T, A, B, C, D, E>(
    a: Iterable<A>,
    b: Iterable<B>,
    c: Iterable<C>,
    d: Iterable<D>,
    e: Iterable<E>
): IterOperator<T, T | A | B | C | D | E>;

/**
 * Concatenate output with that of one or more other iterables
 * @example
 * ```
 * const source1 = ['a', 'b', 'c'];
 * const source2 = new Set(['d', 'e', 'f']);
 * const source3 = new Map([['g', 1], ['h', 2], ['i', 3]]);
 *
 * const iter = new AwesomeIter(source1)
 *   .pipe(concat(source2, source3.keys()));
 *
 * expect([...iter]).to.deep.eq(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
 * ```
 */
function concat<T, A, B, C, D, E, F>(
    a: Iterable<A>,
    b: Iterable<B>,
    c: Iterable<C>,
    d: Iterable<D>,
    e: Iterable<E>,
    f: Iterable<F>
): IterOperator<T, T | A | B | C | D | E | F>;

/**
 * Concatenate output with that of one or more other iterables
 * @example
 * ```
 * const source1 = ['a', 'b', 'c'];
 * const source2 = new Set(['d', 'e', 'f']);
 * const source3 = new Map([['g', 1], ['h', 2], ['i', 3]]);
 *
 * const iter = new AwesomeIter(source1)
 *   .pipe(concat(source2, source3.keys()));
 *
 * expect([...iter]).to.deep.eq(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
 * ```
 */
function concat<T, A, B, C, D, E, F, G>(
    a: Iterable<A>,
    b: Iterable<B>,
    c: Iterable<C>,
    d: Iterable<D>,
    e: Iterable<E>,
    f: Iterable<F>,
    g: Iterable<G>
): IterOperator<T, T | A | B | C | D | E | F | G>;

/**
 * Concatenate output with that of one or more other iterables
 * @example
 * ```
 * const source1 = ['a', 'b', 'c'];
 * const source2 = new Set(['d', 'e', 'f']);
 * const source3 = new Map([['g', 1], ['h', 2], ['i', 3]]);
 *
 * const iter = new AwesomeIter(source1)
 *   .pipe(concat(source2, source3.keys()));
 *
 * expect([...iter]).to.deep.eq(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
 * ```
 */
function concat<T, A, B, C, D, E, F, G, H>(
    a: Iterable<A>,
    b: Iterable<B>,
    c: Iterable<C>,
    d: Iterable<D>,
    e: Iterable<E>,
    f: Iterable<F>,
    g: Iterable<G>,
    h: Iterable<H>
): IterOperator<T, T | A | B | C | D | E | F | G | H>;

/**
 * Concatenate output with that of one or more other iterables
 * @example
 * ```
 * const source1 = ['a', 'b', 'c'];
 * const source2 = new Set(['d', 'e', 'f']);
 * const source3 = new Map([['g', 1], ['h', 2], ['i', 3]]);
 *
 * const iter = new AwesomeIter(source1)
 *   .pipe(concat(source2, source3.keys()));
 *
 * expect([...iter]).to.deep.eq(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
 * ```
 */
function concat<T, A, B, C, D, E, F, G, H, I>(
    a: Iterable<A>,
    b: Iterable<B>,
    c: Iterable<C>,
    d: Iterable<D>,
    e: Iterable<E>,
    f: Iterable<F>,
    g: Iterable<G>,
    h: Iterable<H>,
    i: Iterable<I>
): IterOperator<T, T | A | B | C | D | E | F | G | H | I>;

/**
 * Concatenate output with that of one or more other iterables
 * @example
 * ```
 * const source1 = ['a', 'b', 'c'];
 * const source2 = new Set(['d', 'e', 'f']);
 * const source3 = new Map([['g', 1], ['h', 2], ['i', 3]]);
 *
 * const iter = new AwesomeIter(source1)
 *   .pipe(concat(source2, source3.keys()));
 *
 * expect([...iter]).to.deep.eq(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
 * ```
 */
function concat<T, A, B, C, D, E, F, G, H, I>(
    a: Iterable<A>,
    b: Iterable<B>,
    c: Iterable<C>,
    d: Iterable<D>,
    e: Iterable<E>,
    f: Iterable<F>,
    g: Iterable<G>,
    h: Iterable<H>,
    i: Iterable<I>,
    ...iterables: Array<Iterable<any>>
): IterOperator<T, T | A | B | C | D | E | F | G | H | I | unknown>;

function concat(...iterables: Array<Iterable<any>>): IterOperator<any, any> {
  if (!iterables.length) {
    return passthroughOperator;
  }

  return function *concatOperator(source) {
    let result: IteratorResult<any>;
    while (!(result = source.next()).done) {
      yield result.value;
    }

    for (const iter of iterables) {
      for (const value of iter) {
        yield value;
      }
    }
  };
}

export {concat};
