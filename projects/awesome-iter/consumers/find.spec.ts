import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {find} from './find';

describe('consumers/find', function () {
  it('Should return item if predicate passes for at least one value', () => {
    const it = new AwesomeIter([1, 2, 3])
      .consume(find(v => v % 2 === 0));
    expect(it).to.eq(2);
  });

  it('Should return undefined if predicate never passes', () => {
    const it = new AwesomeIter([1, 2, 3])
      .consume(find(v => v === 0));
    expect(it).to.eq(undefined);
  });
});
