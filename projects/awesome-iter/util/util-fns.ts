import {AwesomeIter} from '../awesome-iter';

/** @internal */
export function identity<T>(v: T, ..._rest: any[]): T { // eslint-disable-line @typescript-eslint/no-unused-vars
  return v;
}

/** @internal */
export function refEqual(a: any, b: any): boolean {
  return a === b;
}

/** @internal */
export function passthroughOperator<T>(source: Iterator<T>): AwesomeIter<T> {
  return new AwesomeIter(source);
}
