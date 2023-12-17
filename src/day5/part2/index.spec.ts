import { expect } from "chai";
import { answer, getSeeds, identity } from ".";

describe(`${identity.show}: using test data`, () => {

  it(`${identity.show}: should test.data return 46`, () => {
    return answer(identity.getTestPath())
      .then((answer) => expect(answer).to.equal(46));
  });

});

describe(`${identity.show}: finding seeds in ranges`, () => {

  it(`${identity.show}: should lenght be 27`, () => {
    expect(getSeeds('seeds: 79 14 55 13').length).to.equal(27);
  });

});
