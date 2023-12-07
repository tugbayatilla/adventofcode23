import { expect } from "chai";
import { CharType, DayAndPart, findItem, identifyChar, SYMBOLS } from ".";
import { range } from "../../range";

describe(`${DayAndPart}: identify char`, () => {

  it(`${DayAndPart}: should dot(.) identified as dot`, () => {
    expect(identifyChar(".")).to.be.equal(CharType.dot);
  });

  range(0, 9).forEach((number) => {
    it(`${DayAndPart}: should ${number} identified as number`, () => {
      expect(identifyChar(number)).to.be.equal(CharType.number);
    });
  });

  
  SYMBOLS.forEach((symbol) => {
    it(`${DayAndPart}: should ${symbol} identified as symbol`, () => {
      expect(identifyChar(symbol)).to.be.equal(CharType.symbol);
    });
  });

});

describe(`${DayAndPart}: find item from char`, () => {

  it(`${DayAndPart}: should '.' be the Item having CharType as dot`, () => {
    const item = findItem('.');
    
    expect(item.value).to.be.equal('.')
    expect(item.type).to.be.equal(CharType.dot)
    
  });

});