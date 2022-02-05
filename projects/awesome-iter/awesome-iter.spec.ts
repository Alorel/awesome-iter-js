import {expect} from 'chai';
import {AwesomeIter} from './awesome-iter';
import {filter, map, skip} from './pipes';

describe('AwesomeIter', function () {
  it('Should be an iterator', () => {
    const it = new AwesomeIter(['a', 'b', 'c']);
    const v = [it.next().value, it.next().value, it.next().value];
    expect(v).to.deep.eq(['a', 'b', 'c']);
  });

  it('Should be an iterable', () => {
    expect([...new AwesomeIter(['a', 'b'])]).to.deep.eq(['a', 'b']);
  });

  describe('Chaining', function () {
    let mapCalls: number;
    let filterCalls: number;
    let result: string[];

    before(() => {
      mapCalls = filterCalls = 0;
      result = [
        ...new AwesomeIter([70, 71, 72, 73]).pipe(
          skip(1),
          filter(v => {
            filterCalls++;
            return v !== 72;
          }),
          map(v => {
            mapCalls++;
            return String.fromCharCode(v);
          })
        )
      ];
    });

    it('Should have 2 map calls', () => {
      expect(mapCalls).to.eq(2);
    });

    it('Should have 3 filter calls', () => {
      expect(filterCalls).to.eq(3);
    });

    it('Should emit char codes', () => {
      expect(result).to.deep.eq(['G', 'I']);
    });
  });
});
