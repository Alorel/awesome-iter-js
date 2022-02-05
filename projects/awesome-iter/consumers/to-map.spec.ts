import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {map} from '../pipes';
import {toMap} from './to-map';

describe('consumers/toMap', function () {
  it('should collect elements', () => {
    const result = new AwesomeIter([80, 81, 82])
      .pipe(map(charCode => [charCode, String.fromCharCode(charCode)]))
      .consume(toMap());

    expect(result).to.deep.eq(new Map([
      [80, 'P'],
      [81, 'Q'],
      [82, 'R']
    ]));
  });
});
