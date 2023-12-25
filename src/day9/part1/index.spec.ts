import { expect } from "chai";
import { identity, predictNextValueInHistory } from ".";


describe(`${identity.show}: one line of history`, () => {

  it(`should  '0 3 6 9 12 15' returns 18`, () => {
    expect(predictNextValueInHistory('0 3 6 9 12 15')).to.be.equal(18);
  });

});

