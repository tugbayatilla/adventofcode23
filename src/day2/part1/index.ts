import { read } from "../../read";
import { Game, Session } from "./game";

export const Day = "day2"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part1/`;

export function evaluateSession(session: Session): boolean {

  return ((session.red === undefined) || session.red! <= 12) &&
    ((session.green === undefined) || session.green! <= 13) &&
    ((session.blue === undefined) || session.blue! <= 14);
}

export function parseLine(line: string): Game {

  let rawSessions = line.split(';');

  let game: Game = { id: findGameId(line), sessions: [] };

  rawSessions.forEach((p) => {

    let session: Session = {};

    session = find(p, session, 'blue');
    session = find(p, session, 'green');
    session = find(p, session, 'red');

    game.sessions.push(session);

  });

  return game;
}

function find<T extends keyof Session>(line: string, session: Session, color: T): Session {
  const regexExpression = `(\\d+)\\s+${color}`;
  const regex = new RegExp(regexExpression);

  const matches = line.match(regex);

  if (matches && matches[1]) {
    session[color] = parseInt(matches[1], 10);
  }

  return session;
}

function findGameId(line: string): number {
  const regexExpression = /Game (\d+)/;
  const regex = new RegExp(regexExpression);

  const matches = line.match(regex);

  if (matches && matches[1]) {
    return parseInt(matches[1], 10);
  }

  throw Error('unable to find game id');
}

export function sum(lines: string[]): number {

  let possibleGames: Game[] = [];

  for (const line of lines) {
    let game = parseLine(line);

    if (game.sessions?.every(s => evaluateSession(s)))
      possibleGames.push(game);

  }
  return possibleGames.reduce((acc, cur) => acc + cur.id, 0);
}


export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => sum(lines));
}

if(process.env.DayAndPart === 'day2(p1)')
answer(`${SourceFolderPath}puzzle.data`)
  .then(answer => console.log(answer))