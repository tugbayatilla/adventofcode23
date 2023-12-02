import { expect } from "chai";
import { Day, evaluate, parse, sum  } from ".";


describe(`${Day}: evaluate parsed data`, () => {
  it("should 13 red cubes returns 0 for impossible", () => {
    expect(evaluate({id:1, red: 13})).to.equal(0);
  }),
  it("should 12 red cubes returns the id of the game for possible", () => {
    expect(evaluate({id:1, red: 12})).to.equal(1);
  }),
  it("should 14 green cubes returns 0 for impossible", () => {
    expect(evaluate({id:1, green: 14})).to.equal(0);
  }),
  it("should 13 or less green cubes returns the id of the game for possible situation", () => {
    expect(evaluate({id:1, green: 13})).to.equal(1);
  }),
  it("should 15 blue cubes returns 0 for impossible", () => {
    expect(evaluate({id:1, blue: 15})).to.equal(0);
  }),
  it("should 14 or less green cubes returns the id of the game for possible situation", () => {
    expect(evaluate({id:1, blue: 14})).to.equal(1);
  })
});

describe(`${Day}: parse a line`, () => {
  const testLine = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';

  it("should the size of the result array be 3", () => {
    expect(parse(testLine).length).to.equal(3);
  }),
  it("should all ids be 1", () => {
    expect(parse(testLine))
    .to
    .be
    .an('array')
    .that
    .satisfies((arr: {id:number}[]) => (arr).every(obj => obj.id === 1));
  }),
  it("should all ids be 2", () => {
    const testLineOverriden = 'Game 2: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';
    expect(parse(testLineOverriden))
    .to
    .be
    .an('array')
    .that
    .satisfies((arr: {id:number}[]) => (arr).every(obj => obj.id === 2));
  }),
  it("should all ids be 1122", () => {
    const testLineOverriden = 'Game 1122: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';
    expect(parse(testLineOverriden))
    .to
    .be
    .an('array')
    .that
    .satisfies((arr: {id:number}[]) => (arr).every(obj => obj.id === 1122));
  }),
  it("should first item have 3 blue", () => {
    expect(parse(testLine)[0].blue).to.equal(3);
  }),
  it("should first item have 4 red", () => {
    expect(parse(testLine)[0].red).to.equal(4);
  }),
  it("should second item have 2 green", () => {
    expect(parse(testLine)[1].green).to.equal(2);
  })
});


describe(`${Day}: the sum of the IDs of those games`, () => {
  
  it("should the size of the result array be 3", () => {
    expect(sum(
      ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green']
    )).to.equal(1);
  })
});

