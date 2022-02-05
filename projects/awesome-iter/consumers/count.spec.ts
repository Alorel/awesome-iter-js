import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {count} from './count';
import {concat} from '../pipes';

describe('consumers/count', function () {
  it('Should count yields', () => {
    const it = new AwesomeIter([1, 2, 3])
      .pipe(concat(['a', 'b', 'c']))
      .consume(count());
    expect(it).to.eq(6);
  });
});
