import { expect } from "chai";
import { Day, findNumbers } from ".";

describe(`${Day}: the sum of all of the part numbers in the engine schematic`, () => {
  describe(`${Day}: find numbers in a string (line)`, () => {
    it("should result array contains 467 and 114", () => {
      expect(findNumbers("467..114..")).to.deep.equal([467, 114]);
    });
  });
});
