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
    const regexBlue = /(\d+)\s+blue/;
    const matchBlue = regexBlue.exec(p);

    if (matchBlue && matchBlue[1]) {
      game.blue = parseInt(matchBlue[1], 10);
    }

    // find red
    const regexRed = /(\d+)\s+red/;
    const matchRed = regexRed.exec(p);

    if (matchRed && matchRed[1]) {
      game.red = parseInt(matchRed[1], 10);
    }

    // find green
    const regexGreen = /(\d+)\s+green/;
    const matchGreen = regexGreen.exec(p);

    if (matchGreen && matchGreen[1]) {
      game.green = parseInt(matchGreen[1], 10);
    }

    result.push(game);
  });

  return result;
}

export function sum(lines: string[]): number {

  let totalSum: number = 0;

  for (const line of lines) {
    let games = parse(line);


    const consolidatedGames: Game[] = Array.from(games.reduce((acc: Map<number, Game>, item: Game) => {
      if (!acc.has(item.id)) {
        acc.set(item.id, { ...item });
      } else {
        let existingGame = acc.get(item.id);
        existingGame!.red! += item.red ?? 0;
        existingGame!.green! += item.green ?? 0;
        existingGame!.blue! += item.blue ?? 0;
      }
      return acc;
    }, new Map<number, Game>()).values());

    for (const game of consolidatedGames) {
      totalSum += evaluate(game);
    }
  }

  return totalSum;

}