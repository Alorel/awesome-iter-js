import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {map} from '../pipes';
import {toSet} from './to-set';

describe('consumers/toSet', function () {
  it('should collect elements', () => {
    const result = new AwesomeIter([1, 2, 3, 2])
      .pipe(map(a => a + 1))
      .consume(toSet());

    expect(result).to.deep.eq(new Set([2, 3, 4]));
  });
});
