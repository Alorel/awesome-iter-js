import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {some} from './some';

describe('consumers/some', function () {
  it('Should return true if predicate passes for at least one value', () => {
    const it = new AwesomeIter([1, 2, 3])
      .consume(some(v => v % 2 === 0));
    expect(it).to.eq(true);
  });

  it('Should return false if predicate never passes', () => {
    const it = new AwesomeIter([1, 2, 3])
      .consume(some(v => v === 0));
    expect(it).to.eq(false);
  });
});
