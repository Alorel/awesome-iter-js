import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {take} from './take';
import {skip} from './skip';

describe('pipes/take', function () {
  it('Should throw if count is < 0', () => {
    expect(() => new AwesomeIter([]).pipe(take(-1)))
      .to.throw('Count <0: -1');
  });

  it('Should take n items', () => {
    const it = new AwesomeIter([1, 2, 3, 4, 5]).pipe(skip(1), take(2));
    expect([...it]).to.deep.eq([2, 3]);
  });

  it('Should terminate early if we there are few elements', () => {
    const it = new AwesomeIter([1, 2]).pipe(take(3));
    expect([...it]).to.deep.eq([1, 2]);
  });
});
