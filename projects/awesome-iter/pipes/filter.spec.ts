import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {filter} from './filter';

describe('pipes/filter', function () {
  it('Should filter values', () => {
    const iter = new AwesomeIter([1, 2, 3, 4, 5]).pipe(
      filter(v => v % 2 !== 0)
    );
    expect([...iter]).to.deep.eq([1, 3, 5]);
  });
});
