import { expect } from "chai";
import { Day, Direction, SourceFolderPath, answer, findIndex, findNeighbor, findNumbers, hasSymbol, sum } from ".";
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
      }),
      it("should index of 3 be 5", () => {
        expect(findIndex("937..3..", 3)).to.deep.equal(5);
      });
  });

  let allLines: string[] = [];
  await read(`${SourceFolderPath}test.data`).then((lines) => (allLines = lines));

  describe(`${Day}: find neighbors of given index on the line '${allLines[0]}'`, () => {
    const indexOfLine = 0;
    const theories: [Direction, number, string][] = [
      ["right", 467, "."],
      ["left", 467, ""],
      ["right", 114, "."],
      ["left", 114, "."],
      ["top", 467, ""],
    ];

    theories.forEach(([direction, number, expected]) => {
      it(`should '${direction}' neighbor of ${number} be ${expected === "" ? "empty string" : expected}`, () => {
        expect(findNeighbor(allLines, indexOfLine, number, direction)).to.equal(expected);
      });
    });

    describe(`${Day}: find neighbors of given index on the line '${allLines[2]}'`, () => {
      const indexOfLine = 2;
      const theories: [Direction, number, string][] = [
        ["top", 35, "..*."],
        ["top", 633, "....."],
        ["bottom", 35, "...."],
        ["bottom", 633, ".#..."],
      ];

      theories.forEach(([direction, number, expected]) => {
        it(`should '${direction}' neighbor of ${number} be ${expected === "" ? "empty string" : expected}`, () => {
          expect(findNeighbor(allLines, indexOfLine, number, direction)).to.deep.equal(expected);
        });
      });
    });

    describe(`${Day}: find neighbors of given index on the line '${allLines[2]}'`, () => {
      const indexOfLine = 4;
      const theories: [Direction, number, string][] = [["right", 617, "*"]];

      theories.forEach(([direction, number, expected]) => {
        it(`should '${direction}' neighbor of ${number} be ${expected === "" ? "empty string" : expected}`, () => {
          expect(findNeighbor(allLines, indexOfLine, number, direction)).to.deep.equal(expected);
        });
      });
    });
  });

  describe(`${Day}: string has symbol`, () => {
    const theories: [line: string, expected: boolean][] = [
      ["...", false],
      ["...*", true],
      ["...#", true],
      ["...+", true],
      ["...$", true],
    ];
    theories.forEach(([line, expected]) => {
      it(`should '${line}' be ${expected}`, () => {
        expect(hasSymbol(line)).to.equal(expected);
      });
    });
  });

  describe(`${Day}: finding answer with test data`, () => {
    it(`${Day}: should test.data return 4361`, () => {
      return answer(`${SourceFolderPath}test.data`).then((answer) => expect(answer).to.equal(4361));
    });
  });

  describe(`${Day}: finding neighbor with edge cases`, () => {
    it(`${Day}: first number in seconds line`, () => {
      var lines: string[] = ["4.........", "123.......", "5........."];

      expect(findNeighbor(lines, 1, 123, "top")).to.be.equal("4...");
      expect(findNeighbor(lines, 1, 123, "bottom")).to.be.equal("5...");
    }),
      it(`${Day}: last number in seconds line`, () => {
        var lines: string[] = [".........4", ".......123", ".........5"];

        expect(findNeighbor(lines, 1, 123, "top")).to.be.equal("...4");
        expect(findNeighbor(lines, 1, 123, "bottom")).to.be.equal("...5");
      });
  });

  describe(`${Day}: finding neighbor with edge cases`, () => {
    it(`${Day}: first number in seconds line`, () => {
      var lines: string[] = ["4.........", "123.......", "5........."];

      expect(findNeighbor(lines, 1, 123, "top")).to.be.equal("4...");
      expect(findNeighbor(lines, 1, 123, "bottom")).to.be.equal("5...");
    }),
      it(`${Day}: first bug with number 3`, () => {
        var lines: string[] = [".......", "...3...", "..=...."];

        expect(sum(lines)).to.be.equal(3);
      });
  });

  describe(`${Day}: sum of given lines`, () => {
    it(`${Day}: should be consequtive two numbers (3...3*.) with second has a symbol`, () => {
      var lines: string[] = [".......", "3...3*.", "..=...."];

      expect(sum(lines)).to.be.equal(3);
    });
  });
});
