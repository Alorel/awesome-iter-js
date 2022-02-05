import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {last} from './last';

describe('consumers/last', function () {
  it('Should return the last item', () => {
    expect(new AwesomeIter(['a', 'b']).consume(last())).to.eq('b');
  });

  it('Should return undefined if nothing is yielded', () => {
    expect(new AwesomeIter([]).consume(last())).to.eq(undefined);
  });
});
