import { expect } from "chai";
import { DayAndPart, identifyChar, Dot } from ".";

describe(`${DayAndPart}: identify char`, () => {
  const dot:Dot = '.';

  it(`${DayAndPart}: should dot(.) identified as dot`, () => {
    expect(identifyChar('.')).to.be.equal(dot);
  });
  


});
