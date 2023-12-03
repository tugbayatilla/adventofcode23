import { read } from "../../read";
import { Game, Session } from "./game";

export const Day = "day2"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part1/`;

export function evaluate(game: Game): number {
  const requiredGame: Required<Game> = {
    id: game.id,
    red: game.red === undefined ? 0 : game.red,
    green: game.green === undefined ? 0 : game.green,
    blue: game.blue === undefined ? 0 : game.blue,
    sessions: []
  };
  if (
    requiredGame.red! <= 12 &&
    requiredGame.green! <= 13 &&
    requiredGame.blue! <= 14
  ) { return game.id; }

  return 0;
}

export function evaluateSession(session: Session): boolean {
  
  return ((session.red === undefined) || session.red! <= 12) &&
    ((session.green === undefined) || session.green! <= 13) &&
    ((session.blue === undefined) || session.blue! <= 14);
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
    let session: Session = {};

    // find blue
    const regexBlue = /(\d+)\s+blue/;
    const matchBlue = regexBlue.exec(p);

    if (matchBlue && matchBlue[1]) {
      game.blue = parseInt(matchBlue[1], 10);
      session.blue = parseInt(matchBlue[1], 10);
    }

    // find red
    const regexRed = /(\d+)\s+red/;
    const matchRed = regexRed.exec(p);

    if (matchRed && matchRed[1]) {
      game.red = parseInt(matchRed[1], 10);
      session.red = parseInt(matchRed[1], 10);
    }

    // find green
    const regexGreen = /(\d+)\s+green/;
    const matchGreen = regexGreen.exec(p);

    if (matchGreen && matchGreen[1]) {
      game.green = parseInt(matchGreen[1], 10);
      session.green = parseInt(matchGreen[1], 10);
    }

    game.sessions?.push(session);
    result.push(game);
  });

  return result;
}

export function sum(lines: string[]): number {

  let totalSum: number = 0;


  for (const line of lines) {
    let games = parse(line);
    let ignoredIdList: number[] = [];

    // ignored id list
    games.forEach(g => { if (evaluate(g) == 0) ignoredIdList.push(g.id) });

    if (ignoredIdList.indexOf(games[0].id) >= 0)
      continue;

    totalSum += games[0].id;
  }

  return totalSum;

}


export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => sum(lines));
}

answer(`${SourceFolderPath}puzzle.data`)
  .then(answer => console.log(answer))