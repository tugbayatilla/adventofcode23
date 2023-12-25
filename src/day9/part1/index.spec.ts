import { expect } from "chai";
import { answer, identity, predictNextValueInHistory } from ".";


describe(`${identity.show}: one line of history`, () => {

  it(`should  '0 3 6 9 12 15' returns 18`, () => {
    expect(predictNextValueInHistory('0 3 6 9 12 15')).to.be.equal(18);
  });

});

describe(`${identity.show}: use test data`, () => {

  it(`should  test.data returns 114`, () => {
    return answer(identity.getTestPath()).then(sum=>{
      expect(sum).to.be.equal(114);
    });
    
  });

});

