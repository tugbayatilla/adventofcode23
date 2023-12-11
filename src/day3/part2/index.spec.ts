import { expect } from "chai";
import { DayAndPart, createItems, sum } from ".";

describe(`${DayAndPart}: Sum of number in a line`, () => {
  it("should sum '467..114..' be 581", () => {
    const data = [
      '467..114..'
    ];
    expect(sum(data)).to.be.equal(581);
  });
});

describe(`${DayAndPart}: create item for each number in a line`, () => {
  it("should '467..114..' creates 2 items", () => {
    const data = [
      '467..114..'
    ];
    expect(createItems(data).length).to.be.equal(2);
  });
});
