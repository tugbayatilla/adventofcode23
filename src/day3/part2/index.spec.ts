import { expect } from "chai";
import { DayAndPart, findItem, identifyChar, SYMBOLS } from ".";
import { range } from "../../range";

describe(`${DayAndPart}: identify char`, () => {

  it(`${DayAndPart}: should dot(.) identified as dot`, () => {
    expect(identifyChar(".")).to.be.deep.equal(['dot', '.']);
  });

  range(0, 9).map(String).forEach((number) => {
    it(`${DayAndPart}: should ${number} identified as number`, () => {
      expect(identifyChar(number)).to.be.deep.equal(['digit', Number(number)]);
    });
  });


  SYMBOLS.forEach((symbol) => {
    it(`${DayAndPart}: should ${symbol} identified as symbol`, () => {
      expect(identifyChar(symbol)).to.be.deep.equal(['symbol', symbol]);
    });
  });

});

describe(`${DayAndPart}: find item from char`, () => {

  it(`${DayAndPart}: should '.' be dot`, () => {
    const item = findItem('.');

    expect(item.value).to.be.equal('.')
    expect(item.type).to.be.equal('dot')

  });

  it(`${DayAndPart}: should '9' be digit`, () => {
    const item = findItem('9');

    expect(item.value).to.be.equal(9)
    expect(item.type).to.be.equal('digit')

  });


  SYMBOLS.forEach((symbol) => {
    it(`${DayAndPart}: should ${symbol} be symbol`, () => {
      const item = findItem(symbol);
      expect(item.value).to.be.equal(symbol)
      expect(item.type).to.be.equal('symbol')
      expect(item.length).to.be.equal(1)
    });
  });

  it(`${DayAndPart}: should '937' length be 3`, () => {
    const item = findItem('937');

    expect(item.length).to.be.equal(3)

  });

});



