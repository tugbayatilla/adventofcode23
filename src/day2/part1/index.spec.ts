import { expect } from "chai";
import { Day, SourceFolderPath, answer } from ".";
import { read } from "../../read";

describe.skip(`${Day}: sum of all of the calibration values`, () => {
  // it("should 1abc2 be 12", () => {
  //   expect(sum(["1abc2"])).to.equal(12);
  // }),
    
});

describe.skip(`${Day}: read data from file`, () => {
  it("should return empty array", () => {
    read("arbitrary").then((lines) => expect(lines).to.deep.equal([]));
  }),
    it(`${Day}: should test.data be an array contains 4 elements`, () => {
      return read(`${SourceFolderPath}test.data`).then((lines) => {
        expect(lines.length).to.equal(4);
      });
    });
});


describe.skip(`${Day}: finding answer`, () => {
  it("should day1.test.data return xxx", () => {
    return answer(`${SourceFolderPath}test.data`)
    .then((answer) => expect(answer).to.equal(142));
  })
});
