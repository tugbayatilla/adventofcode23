import { read } from "../../read";
import { parseLine } from "../part1";
import { Session } from "../part1/game";

export const Day = "day2"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part2/`; // <-- change this when you copy

export function findFewest(sessions: Session[]): Required<Session> {
  let resultSession: Required<Session> = { red:0, green:0, blue: 0 };

  sessions.forEach(session=>{

    Object.keys(session).forEach(key => {
        const valueOfKey = session[key as keyof Session] ?? 0;

        if(resultSession[key as keyof Session]! < valueOfKey)
        {
          resultSession[key as keyof Session] = valueOfKey;
        }
    });

  });

  return resultSession;
}

export function powerOfMinimum(session: Required<Session>): number {
  return Object.keys(session).reduce((acc, key)=> acc * (session[key as keyof Session] ?? 1),1)
}

export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => {
    let totalSum: number = 0;

    lines.forEach((line)=>{
      const game = parseLine(line);
      const session = findFewest(game.sessions)
      totalSum += powerOfMinimum(session)
    });

    return totalSum;
  });
}

answer(`${SourceFolderPath}puzzle.data`)
.then(answer=> console.log(`${SourceFolderPath} - ${answer}`));