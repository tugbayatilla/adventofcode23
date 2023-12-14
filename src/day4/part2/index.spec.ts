import { expect } from "chai";
import { DayAndPart, sum } from ".";


describe(`${DayAndPart}: Card creation via line`, () => {
  
  const theories: [line:string, expected:number][] = [
    ['Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53', 5]
  ];
  
  theories.forEach((theory, index) => {
    const line = theory[0]
    const expected = theory[1]
    it(`should card ${index+1} creates ${expected} cards`, () => {
      expect(sum(line)).to.be.equal(expected);
    });
  });

});

