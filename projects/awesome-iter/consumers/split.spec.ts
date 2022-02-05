import {AwesomeIter} from '../awesome-iter';
import {split} from './split';
import {expect} from 'chai';

describe('consumers/split', function () {
  let filterCalls: string[];
  let result1: string[];
  let result2: string[];

  before(() => {
    filterCalls = [];
    const [passing, notPassing] = new AwesomeIter(['a', 'b', 'c', 'd'])
      .consume(
        split(v => {
          filterCalls.push(v);

          return v === 'b' || v === 'c';
        })
      );
    result1 = [...passing];
    result2 = [...notPassing];
  });

  it('Should have filtered every value only once', () => {
    expect(filterCalls).to.deep.eq(['a', 'b', 'c', 'd']);
  });

  it('First array should have b & c', () => {
    expect(result1).to.deep.eq(['b', 'c']);
  });

  it('Second array should have a & d', () => {
    expect(result2).to.deep.eq(['a', 'd']);
  });
});
