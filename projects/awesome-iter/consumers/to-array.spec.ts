import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {map} from '../pipes';
import {toArray} from './to-array';

describe('consumers/toArray', function () {
  it('should collect elements', () => {
    const result = new AwesomeIter([1, 2, 3])
      .pipe(map(a => a + 1))
      .consume(toArray());

    expect(result).to.deep.eq([2, 3, 4]);
  });
});
