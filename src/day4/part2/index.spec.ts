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

describe(`${DayAndPart}: process cards`, async () => {

  async function getTestCards(): Promise<Card[]> {
    return read(`${SourceFolderPath}test.data`)
      .then((lines) => {

        const cards = convertToCards(lines);
        const processedCards = process(cards);
        return processedCards;
      });
  }

  const theories: [id: number, expected: number][] = [
    [1, 1],
    [2, 2],
    [3, 4],
  ];

  theories.forEach((theorie) => {
    const id = theorie[0];
    const expected = theorie[1];
    it(`${DayAndPart}: should test.data create '${expected} instance of card ${id}'`, () => {
      return getTestCards().then((cards) => {
        const cardsWithId1 = cards.filter(p => p.id === id);
        expect(cardsWithId1.length).to.equal(expected);
      });
    });
  });

});


