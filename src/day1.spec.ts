import { expect } from "chai";
import { sum, read } from "./day1";

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

describe("day1: read data from file", () => {
  it("should return empty array", () => {
    read("arbitrary").then((lines) => expect(lines).to.deep.equal([]));
  }),
    it("should day1.read.test.data be an array contains one string value 1abc2", () => {
      return read("./src/day1.read.test.data").then((lines) => {
        expect(lines).to.deep.equal(["1abc2"]);
      });
    }),
    it("should day1.test.data be an array contains 4 elements", () => {
      return read("./src/day1.test.data").then((lines) => {
        expect(lines.length).to.equal(4);
      });
    });

});
