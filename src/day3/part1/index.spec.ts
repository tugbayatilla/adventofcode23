import { expect } from "chai";
import { Day, SourceFolderPath, findIndex, findNeighbor, findNumbers } from ".";
import { read } from "../../read";

describe(`${Day}: the sum of all of the part numbers in the engine schematic`, async () => {
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
      });
  });

  let allLines: string[] = [];
  await read(`${SourceFolderPath}test.data`).then(
    (lines) => (allLines = lines)
  );

  describe(`${Day}: find neighbors of given index on the line '${allLines[0]}'`, () => {
    const indexOfLine = 0;
    const theories: ["right" | "left", number, string][] = [
      ["right", 467, "."],
      ["left", 467, ""],
      ["right", 114, "."],
      ["left", 114, "."],
    ];

    theories.forEach(([direction, number, expected]) => {
      it(`should '${direction}' neighbor of ${number} be ${
        expected === "" ? "empty string" : expected
      }`, () => {
        expect(
          findNeighbor(allLines, indexOfLine, number, direction)
        ).to.deep.equal(expected);
      });
    });
  });
});
