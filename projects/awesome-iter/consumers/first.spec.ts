import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {first} from './first';

describe('consumers/first', function () {
  it('Should return the first item', () => {
    expect(new AwesomeIter(['a', 'b']).consume(first())).to.eq('a');
  });

  it('Should return undefined if nothing is yielded', () => {
    expect(new AwesomeIter([]).consume(first())).to.eq(undefined);
  });
});
