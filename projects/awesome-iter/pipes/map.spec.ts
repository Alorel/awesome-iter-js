import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {map} from './map';

describe('pipes/map', function () {
  it('Should map values', () => {
    const it = new AwesomeIter([1, 2, 3]).pipe(
      map(v => v * 10)
    );
    expect([...it]).to.deep.eq([10, 20, 30]);
  });
});
