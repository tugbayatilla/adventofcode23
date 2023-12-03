import { read } from "../../read";
import { Game, Session } from "./game";

export const Day = "day2"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part1/`;

export function evaluateSession(session: Session): boolean {

  return ((session.red === undefined) || session.red! <= 12) &&
    ((session.green === undefined) || session.green! <= 13) &&
    ((session.blue === undefined) || session.blue! <= 14);
}

export function parse(line: string): Game[] {
  let games: Game[] = [];

  let rawData = line.split(';');

  // find game id
  // the number between space and : at the first element
  var spaceIndex = rawData[0].indexOf(' ');
  var colonIndex = rawData[0].indexOf(':');
  var id = Number(rawData[0].substring(spaceIndex, colonIndex));

  rawData.forEach((p) => {
    let game: Game = { id: id, sessions: [] };
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
    games.push(game);
  });

  return games;
}

export function parseLine(line: string): Game {

  let rawSessions = line.split(';');

  // find game id
  // the number between space and : at the first element
  var spaceIndex = rawSessions[0].indexOf(' ');
  var colonIndex = rawSessions[0].indexOf(':');
  var id = Number(rawSessions[0].substring(spaceIndex, colonIndex));

  let game: Game = { id: id, sessions: [] };

  rawSessions.forEach((p) => {

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

  });

  return game;
}

export function sum(lines: string[]): number {

  let possibleGames: Game[] = [];

  for (const line of lines) {
    let game = parseLine(line);

    if(game.sessions?.every(s => evaluateSession(s)))
      possibleGames.push(game); 
        
  }
  return possibleGames.reduce((acc, cur) => acc + cur.id, 0);
}


export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => sum(lines));
}

answer(`${SourceFolderPath}puzzle.data`)
  .then(answer => console.log(answer))