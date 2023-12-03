import { expect } from "chai";
import { Day, SourceFolderPath, answer, evaluateSession, parse, sum  } from ".";


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
  
  it("should the sum of the ids be 1", () => {
    expect(sum(
      ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green']
    )).to.equal(1);
  })
});

describe(`${Day}: finding answer`, () => {
  it(`${Day}: should test.data return 8`, () => {
    return answer(`${SourceFolderPath}test.data`).then((answer) =>
      expect(answer).to.equal(8)
    );
  });
});


describe(`${Day}: evaluate session`, () => {
  it(`${Day}: should more than 12 red cubes be false`, () => {
    expect(evaluateSession({red:13})).to.equal(false)
  }),
  it(`${Day}: should more than 13 green cubes be false`, () => {
    expect(evaluateSession({green:14})).to.equal(false)
  }),
  it(`${Day}: should more than 14 blue cubes be false`, () => {
    expect(evaluateSession({blue:15})).to.equal(false)
  }),
  it(`${Day}: should less than 12 red cubes be false`, () => {
    expect(evaluateSession({red:11})).to.equal(true)
  }),
  it(`${Day}: should less than 13 green cubes be false`, () => {
    expect(evaluateSession({green:12})).to.equal(true)
  }),
  it(`${Day}: should less than 14 blue cubes be false`, () => {
    expect(evaluateSession({blue:13})).to.equal(true)
  })
});

