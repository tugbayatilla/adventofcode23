import { expect } from "chai";
import { answer, identity, predictNextValueInHistory } from ".";


describe(`${identity.show}: one line of history`, () => {

  it(`should  '0 3 6 9 12 15' returns 18`, () => {
    expect(predictNextValueInHistory('0 3 6 9 12 15')).to.be.equal(18);
  });

  it(`should  '"4 -1 -6 -11 -16 -21 -26 -31 -36 -41 -46 -51 -56 -61 -66 -71 -76 -81 -86 -91 -96' returns -101`, () => {
    expect(predictNextValueInHistory("4 -1 -6 -11 -16 -21 -26 -31 -36 -41 -46 -51 -56 -61 -66 -71 -76 -81 -86 -91 -96")).to.be.equal(-101);
  });

  
});

describe(`${identity.show}: use test data`, () => {

  it(`should  test.data returns 114`, () => {
    return answer(identity.getTestPath()).then(sum=>{
      expect(sum).to.be.equal(114);
    });
    
  });

});

