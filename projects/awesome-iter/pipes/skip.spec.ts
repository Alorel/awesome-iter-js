import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {skip} from './skip';

describe('pipes/skip', function () {
  it('Should throw if count is < 1', () => {
    expect(() => new AwesomeIter([]).pipe(skip(0)))
      .to.throw('Count <1: 0');
  });

  it('Should continue after skip', () => {
    const it = new AwesomeIter([1, 2, 3, 4, 5]).pipe(skip(2));
    expect([...it]).to.deep.eq([3, 4, 5]);
  });

  it('Should terminate early if we there are few elements', () => {
    const it = new AwesomeIter([1, 2]).pipe(skip(3));
    expect([...it]).to.deep.eq([]);
  });
});
