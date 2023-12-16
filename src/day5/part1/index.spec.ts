import { expect } from "chai";
import { DayAndPart, createMapRange } from ".";


describe(`${DayAndPart}: Create Range from a line`, () => {
  
    it(`should '50 98 2' `, () => {
      expect(createMapRange('50 98 2')).to.be.deep.equal(
        {from: 50, to: 98, len:2});
    });

    it(`should '52 50 48' `, () => {
      expect(createMapRange('52 50 48')).to.be.deep.equal(
        {from: 52, to: 50, len:48});
    });
  
});
