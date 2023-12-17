import { expect } from "chai";
import { answer, identity } from ".";

describe(`${identity.show}: using test data`, () => {

  it(`${identity.show}: should test.data return 35`, () => {
    return answer(identity.getTestPath())
      .then((answer) => expect(answer).to.equal(35));
  });

});

