import { expect } from "chai";
import { DayAndPart, Item, SYMBOLS, createItems, sum } from ".";

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
      endIndex: 2,
      lineIndex: 0
    });
  });

  it("should second item value is 114 on '467..114..' ", () => {
    const data = [
      '467..114..'
    ];
    expect(createItems(data)[1]).to.be.deep.equal(<Item>{
      type: 'digit',
      value: 114,
      startIndex: 5,
      endIndex: 7,
      lineIndex: 0
    });
  });

  it("should line index of item contains 5 be 1", () => {
    const data = [
      '..1....2..',
      '...5......'
    ];
    expect(createItems(data)[2].lineIndex).to.be.equal(1);
  });

  it("should '+' be a symbol", () => {
    const data = [
      '..+..'
    ];
    expect(createItems(data)[0].type).to.be.equal('symbol');
  });


  SYMBOLS.forEach(symbol=>{
    it(`should '${symbol}' be a symbol`, () => {
      const data = [
        `..${symbol}..`
      ];
      expect(createItems(data)[0].type).to.be.equal('symbol');
    });
  });

  it("should line index of item contains + be 1", () => {
    const data = [
      '..........',
      '...+......'
    ];
    expect(createItems(data)[0]).to.be.deep.equal(<Item>{
      type: 'symbol',
      value: '+',
      startIndex: 3,
      endIndex: 3,
      lineIndex: 1
    });
  });


});
