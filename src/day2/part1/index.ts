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

  // find game id
  // the number between space and : at the first element
  var spaceIndex = rawData[0].indexOf(' ');
  var colonIndex = rawData[0].indexOf(':');
  var id = Number(rawData[0].substring(spaceIndex, colonIndex));

  rawData.forEach((p) => {
    let game: Game = { id: id };

    // find blue
    const regex = /(\d+)\s+blue/;
    const match = regex.exec(p);

    if (match && match[1]) {
      game.blue = parseInt(match[1], 10);
    }
    result.push(game);
  });

  return result;
}