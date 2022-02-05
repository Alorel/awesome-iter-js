import {AwesomeIter} from '../awesome-iter';
import {tap} from './tap';
import {toArray} from '../consumers';
import {skip} from '../pipes';
import {expect} from 'chai';

describe('pipes/tap', function () {
  let tapValues: string[];
  let result: string[];

  before(() => {
    tapValues = [];
    result = new AwesomeIter(['a', 'b', 'c'])
      .pipe(
        tap(v => {
          tapValues.push(v);

          return v.toUpperCase();
        }),
        skip(1)
      )
      .consume(toArray());
  });

  it('Should have tapped thrice', () => {
    expect(tapValues).to.deep.eq(['a', 'b', 'c']);
  });

  it('Should not modify output', () => {
    expect(result).to.deep.eq(['b', 'c']);
  });
});
