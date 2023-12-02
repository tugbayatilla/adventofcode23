import { read } from "../../read";

export const Day = "day2"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part1/`;

export function evaluate(game: { id: number; red: number; }): number {
  return 0;
}



export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => 1);
}

answer(`${SourceFolderPath}puzzle.data`)
.then(answer=>console.log(answer))