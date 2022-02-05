import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {map} from '../pipes';
import {toObject} from './to-object';

describe('consumers/toObject', function () {
  it('should collect elements', () => {
    const result = new AwesomeIter([80, 81, 82])
      .pipe(map((charCode): [string, number] => [String.fromCharCode(charCode), charCode]))
      .consume(toObject());

    expect(result).to.deep.eq({
      P: 80,
      Q: 81,
      R: 82
    });
  });
});
