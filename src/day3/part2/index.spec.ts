import { expect } from "chai";
import { CharType, DayAndPart, identifyChar } from ".";
import { range } from "../../range";

describe(`${DayAndPart}: identify char`, () => {

  it(`${DayAndPart}: should dot(.) identified as dot`, () => {
    expect(identifyChar(".")).to.be.equal(CharType.dot);
  });

  range(0, 9).forEach((number) => {
    it(`${DayAndPart}: should ${number} identified as number`, () => {
      expect(identifyChar(number)).to.be.equal(CharType.number);
    });
  });

});
