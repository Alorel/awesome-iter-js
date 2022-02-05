import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {distinct} from './distinct';
import {skip} from './skip';

describe('pipes/distinct', function () {
  it('Should default to refcheck comparison', () => {
    const it = new AwesomeIter([1, 2, 1, 3, 1, 2, 3, 4])
      .pipe(distinct());
    expect([...it]).to.deep.eq([1, 2, 3, 4]);
  });

  it('Should accept custom ref checker', () => {
    const it = new AwesomeIter([1, 2, 3, 4, 5, 6])
      .pipe(
        skip(1),
        distinct(v => v % 2)
      );
    expect([...it]).to.deep.eq([2, 3]);
  });
});
