import { expect } from "chai";
import { Card, DayAndPart, SourceFolderPath, convertToCards, createCard, process } from ".";
import { read } from "../../read";


describe(`${DayAndPart}: Card creation via line`, () => {

  const theories: [line: string, expected: Partial<Card>][] = [
    ['Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
      { id: 1, overlap: 4 }]
  ];

  theories.forEach((theory, index) => {
    const line = theory[0]
    const expected = theory[1]
    it(`should card ${index + 1} creates ${expected} card (partially)`, () => {
      expect(createCard(line)).to.be.deep.contain(expected);
    });
  });

});

describe(`${DayAndPart}: Convert lines to cards`, () => {

  it(`should 1 line creates 1 card`, () => {
    const lines: string[] =
      ['Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'];

    expect(convertToCards(lines).length).to.be.equal(1);
  });
});

describe(`${DayAndPart}: process cards`, () => {

  it(`${DayAndPart}: should test.data create 1 instance of card 1`, () => {

    return read(`${SourceFolderPath}test.data`)
      .then((lines) => {
        const cardId = 1;
        const cards = convertToCards(lines);
        const processedCards = process(cards);
        const cardsWithId1 = processedCards.filter(p => p.id === cardId);

        expect(cardsWithId1.length).to.equal(1);
      });

  });

});


