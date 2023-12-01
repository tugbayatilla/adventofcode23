import { expect } from "chai";
import { sum, answer, SourceFolderPath, Day } from ".";

describe(`${Day}: sum of all of the calibration values`, () => {
  const theories: [string, number][] = [
    ["two1nine", 29],
    // ["eightwothree", 83],
    // ["abcone2threexyz", 13],
    // ["xtwone3four", 24],
    // ["4nineeightseven2", 42],
    // ["zoneight234", 14],
    // ["7pqrstsixteen", 76],
  ];

  theories.forEach(([line, expected]) => {
    it(`should ${line} be ${expected}`, () => {
      expect(sum([line])).to.equal(expected);
    });
  });

  describe.skip(`${Day}: finding answer`, () => {
    it(`${Day}: should test.data return 281`, () => {
      return answer(`${SourceFolderPath}test.data`).then((answer) =>
        expect(answer).to.equal(281)
      );
    });
  });
});
