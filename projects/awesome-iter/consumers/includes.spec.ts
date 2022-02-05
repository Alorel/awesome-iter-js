import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {includes} from './includes';

describe('consumers/includes', function () {
  it('Should return true if the value is contained', () => {
    const it = new AwesomeIter([0, 1])
      .consume(includes(1));
    expect(it).to.eq(true);
  });

  it('Should return false if the value is not contained', () => {
    const it = new AwesomeIter([0, 1])
      .consume(includes(-1));
    expect(it).to.eq(false);
  });
});
