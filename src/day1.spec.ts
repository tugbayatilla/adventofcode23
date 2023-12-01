import { expect } from "chai";
import { sum } from "./day1";

describe("day1: sum of all of the calibration values", () => {
  it("should 1abc2 be 12", () => {
    expect(sum(["1abc2"])).to.equal(12);
  }),
    it("should pqr3stu8vwx be 38", () => {
      expect(sum(["pqr3stu8vwx"])).to.equal(38);
    }),
    it("should a1b2c3d4e5f be 15", () => {
      expect(sum(["a1b2c3d4e5f"])).to.equal(15);
    }),
    it("should treb7uchet be 77", () => {
      expect(sum(["treb7uchet"])).to.equal(77);
    });
});
