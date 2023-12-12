import { expect } from "chai";
import { DayAndPart, Item, SYMBOLS, createItems, findNeighbors, isNeighbor, sum } from ".";


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


  SYMBOLS.forEach(symbol => {
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

describe(`${DayAndPart}: Find neighbors`, () => {

  it("should '467' has one neighbor '+' ", () => {
    const data = [
      '467..',
      '..+..'
    ];
    const items = createItems(data);
    const item467 = items.filter(p => p.value == 467)[0];

    expect(findNeighbors(item467, items)[0]).to.be.deep.equal(
      <Item>{
        type: 'symbol',
        value: '+',
        startIndex: 2,
        endIndex: 2,
        lineIndex: 1
      }
    );
  });

  const IsNeighborTheorie:
    [startIndex: number, endIndex: number, pointIndex: number, expected: boolean][] = [
      [1, 0, 2, true],
      [3, 0, 2, true]
    ];

  IsNeighborTheorie.forEach(item => {
    const pointIndex = item[0];
    const startIndex = item[1];
    const endIndex = item[2];
    const expected = item[3];

    it(`should ${pointIndex} in [${startIndex}:${endIndex}]${expected ? '' : 'NOT'} be a neighbor`, () => {
      expect(isNeighbor(pointIndex, startIndex, endIndex))
        .to.be.equal(expected);
    });
  });


});