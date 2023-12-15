import { expect } from "chai";
import { Card, DayAndPart, SourceFolderPath, convertToCards, createCard, process } from ".";
import { read } from "../../read";
import { write } from "../../write";


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

  return read(`${SourceFolderPath}test.data`)
    .then((lines) => {

      const cards = convertToCards(lines);
      const processedCards = process(cards);
      return processedCards;
    })
    .then(cards => {
      write(`${SourceFolderPath}test.data.out2`, cards.map(c => JSON.stringify(c)))
      return cards;
    })
    .then(cards => {
      const cardId = 1;
      it(`${DayAndPart}: should test.data create 1 instance of card 1`, () => {
        const cardsWithId1 = cards.filter(p => p.id === cardId);
        expect(cardsWithId1.length).to.equal(1);
      });
    });

});


