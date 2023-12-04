import { expect } from "chai";
import { Day, findIndex, findNeighbor, findNumbers } from ".";

describe(`${Day}: the sum of all of the part numbers in the engine schematic`, () => {
  describe(`${Day}: find numbers in a string (line)`, () => {
    it("should result array contains 467 and 114", () => {
      expect(findNumbers("467..114..")).to.deep.equal([467, 114]);
    });
  });

  describe(`${Day}: find index of number in given string`, () => {
    it("should index of 467 be 0", () => {
      expect(findIndex("467..114..", 467)).to.deep.equal(0);
    }),
    it("should index of 114 be 5", () => {
      expect(findIndex("467..114..", 114)).to.deep.equal(5);
    })
  });

  describe(`${Day}: find neighbors of given index on the line`, () => {
    it("should 'right' neighbor of 467 be . (dot)", () => {
      const allLines: string[] = [
        '467..114..'
      ]
      const indexOfLine = 0;
      const direction = 'right'
      const number = 467;
      expect(findNeighbor(allLines, indexOfLine, number, direction))
      .to.deep.equal('.');
    }),
    it("should 'left' neighbor of 467 be empty string", () => {
      const allLines: string[] = [
        '467..114..'
      ]
      const indexOfLine = 0;
      const direction = 'left'
      const number = 467;
      expect(findNeighbor(allLines, indexOfLine, number, direction))
      .to.deep.equal('');
    });
  });


});
