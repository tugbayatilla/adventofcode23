import { expect } from "chai";
import { Card, DayAndPart, createCard } from ".";


describe(`${DayAndPart}: Card creation via line`, () => {
  
  const theories: [line:string, expected: Partial<Card> ][] = [
    ['Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53', 
    { id: 1, overlap: 4 }]
  ];
  
  theories.forEach((theory, index) => {
    const line = theory[0]
    const expected = theory[1]
    it(`should card ${index+1} creates ${expected} card (partially)`, () => {
      expect(createCard(line)).to.be.deep.contain(expected);
    });
  });

});


