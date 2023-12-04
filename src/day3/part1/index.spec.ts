import { expect } from "chai";
import { Day, findIndex, findNumbers } from ".";

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


});
