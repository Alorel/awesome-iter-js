import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {concat} from './concat';

describe('pipes/concat', function () {
  it('Should concat iterators', () => {
    const syms = [Symbol('X'), Symbol('Y')];

    const it = new AwesomeIter([1, 2, 3]).pipe(
      concat(['a', 'b', 'c'], syms)
    );

    expect([...it]).to.deep.eq([1, 2, 3, 'a', 'b', 'c', ...syms]);
  });
});
