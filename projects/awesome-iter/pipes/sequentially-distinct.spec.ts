import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {sequentiallyDistinct} from './sequentially-distinct';

describe('pipes/sequentiallyDistinct', function () {
  it('Should default to refcheck comparison', () => {
    const it = new AwesomeIter([1, 1, 0, 0, 1, 1])
      .pipe(sequentiallyDistinct());
    expect([...it]).to.deep.eq([1, 0, 1]);
  });

  it('Should accept custom comparator', () => {
    const it = new AwesomeIter(['a', 'A', 'B', 'b', 'A', 'a'])
      .pipe(sequentiallyDistinct((a, b) => a.toUpperCase() === b.toUpperCase()));
    expect([...it]).to.deep.eq(['a', 'B', 'A']);
  });
});
