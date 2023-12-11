import { expect } from "chai";
import { DayAndPart, Item, createItems, sum } from ".";

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

  it("should first item value is 467 on '467..114..' ", () => {
    const data = [
      '467..114..'
    ];
    expect(createItems(data)[0]).to.be.deep.equal(<Item>{
      type: 'digit',
      value: 467,
      startIndex: 0,
      endIndex: 2
    });
  });
});
