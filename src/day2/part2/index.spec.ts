import { expect } from "chai";
import { Day, findFewest } from ".";

import { parseLine } from "../part1";


describe(`${Day}: find fewest number of cubes of each color`, () => {
  it(`${Day}: find fewest for game 1`, () => {
    const game1 = parseLine('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
    expect(findFewest(game1.sessions)).to.deep
    .equal({ red: 4, green: 2, blue: 6 })
  })
});


