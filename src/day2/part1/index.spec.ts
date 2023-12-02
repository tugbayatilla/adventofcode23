import { expect } from "chai";
import { Day, evaluate  } from ".";


describe(`${Day}: evaluate parsed data`, () => {
  it("should 13 red cubes reeturns 0 for impossible", () => {
    expect(evaluate({id:1, red: 13})).to.equal(0);
  })
});
