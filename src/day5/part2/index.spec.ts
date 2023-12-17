import { expect } from "chai";
import { answer, getSeeds, identity } from ".";

describe.skip(`${identity.show}: using test data`, () => {

  it(`${identity.show}: should test.data return 35`, () => {
    return answer(identity.getTestPath())
      .then((answer) => expect(answer).to.equal(35));
  });

});

describe(`${identity.show}: finding seeds in ranges`, () => {

  it(`${identity.show}: should lenght be 27`, () => {
    expect(getSeeds('seeds: 79 14 55 13')).to.equal(27);
  });

});
