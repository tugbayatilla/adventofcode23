import { expect } from "chai";
import { Day, evaluate  } from ".";


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
  })
});

