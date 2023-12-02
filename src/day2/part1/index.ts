import { Game } from "./game";

export const Day = "day2"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part1/`;

export function evaluate(game: Game): number {
  if (game.red !== null && game.red! <= 12) return game.id;
  if (game.green !== null && game.green! <= 13) return game.id;
  if (game.blue !== null && game.blue! <= 14) return game.id;

  return 0;
}

export function parse(line: string): Game[] {
  let result: Game[] = [];

  let rawData = line.split(';');
  rawData.forEach(p=>  result.push({id:1} as Game));

  return result;
}