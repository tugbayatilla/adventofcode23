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
  return 48;
}