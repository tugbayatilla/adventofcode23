import { expect } from "chai";
import { DayAndPart, sum } from ".";


describe(`${DayAndPart}: Single line worthy calculation`, () => {
  it("should card 1 be worth 8 points", () => {
    const line = 'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'
    expect(sum(line)).to.be.equal(8);
  });
});
