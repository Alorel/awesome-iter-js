import {expect} from 'chai';
import {AwesomeIter} from '../awesome-iter';
import {chunk} from './chunk';

describe('pipes/chunk', function () {
  let iter: AwesomeIter<string>;
  beforeEach(() => {
    iter = new AwesomeIter(['a', 'b', 'c', 'D', 'E', 'F', 'g', 'h']);
  });

  it('Should throw on chunk size < 1', () => {
    expect(() => iter.pipe(chunk(0))).to
      .throw('Chunk size <1: 0');
  });

  it('Should chunk & yield leftovers', () => {
    expect([...iter.pipe(chunk(3))]).to
      .deep.eq([['a', 'b', 'c'], ['D', 'E', 'F'], ['g', 'h']]);
  });

  it('Should chunk & skip leftovers', () => {
    expect([...iter.pipe(chunk(3, false))]).to
      .deep.eq([['a', 'b', 'c'], ['D', 'E', 'F']]);
  });
});
