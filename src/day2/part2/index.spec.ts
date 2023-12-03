import { expect } from "chai";
import { Day, findFewest, powerOfMinimum } from ".";

import { parseLine } from "../part1";


describe(`${Day}: find fewest number of cubes of each color`, () => {
  it(`${Day}: find fewest for game 1`, () => {
    const game1 = parseLine('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
    expect(findFewest(game1.sessions)).to.deep
    .equal({ red: 4, green: 2, blue: 6 })
  })
});


describe(`${Day}: find the power of the minimum set of cubes`, () => {
  it(`${Day}: find power of minimum for game 1`, () => {
    const game1 = parseLine('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
    const session = findFewest(game1.sessions)
    expect(powerOfMinimum(session)).to
    .equal(48)
  }),
  it(`${Day}: find power of minimum for game 2`, () => {
    const game2 = parseLine('Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')
    const session = findFewest(game2.sessions)
    expect(powerOfMinimum(session)).to
    .equal(12)
  }),
  it(`${Day}: find power of minimum for game 3`, () => {
    const game3 = parseLine('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red')
    const session = findFewest(game3.sessions)
    expect(powerOfMinimum(session)).to
    .equal(1560)
  })
});