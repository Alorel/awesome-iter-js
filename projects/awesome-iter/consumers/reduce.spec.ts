import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {reduce} from './reduce';

describe('consumers/reduce', function () {
  it('Should reduce values', () => {
    const it = new AwesomeIter([1, 2, 3])
      .consume(reduce(10, (acc, v) => acc + v));
    expect(it).to.eq(16);
  });
});
