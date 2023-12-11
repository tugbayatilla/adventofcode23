import { expect } from "chai";
import { DayAndPart, sum } from ".";

describe(`${DayAndPart}: identify char`, () => {
  it("should sum '467..114..' be 581", () => {
    const data = [
      '467..114..'
    ];
    expect(sum(data)).to.be.equal(581);
  });
});
