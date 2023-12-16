import { expect } from "chai";
import { DayAndPart, createMap, createMapRange } from ".";


describe(`${DayAndPart}: Create Range from a line`, () => {

  it(`should '50 98 2' `, () => {
    expect(createMapRange('50 98 2')).to.be.deep.equal(
      { from: 50, to: 98, len: 2 });
  });

  it(`should '52 50 48' `, () => {
    expect(createMapRange('52 50 48')).to.be.deep.equal(
      { from: 52, to: 50, len: 48 });
  });

});


describe(`${DayAndPart}: Create Map from lines`, () => {

  describe(`${DayAndPart}: Seed to soil map`, () => {

    const lines = [
      'seed-to-soil map:',
      '50 98 2',
      '52 50 48'
    ]

    it(`should 'from' be 'seed' `, () => {
      expect(createMap(lines)).to.be.deep.contain(
        { from: 'seed' });
    });

    it(`should 'to' be 'soil' `, () => {
      expect(createMap(lines)).to.be.deep.contain(
        { to: 'soil' });
    });

  });

});