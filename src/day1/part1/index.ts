import { read } from "../../read";

export const Day = "day1"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part1/`;

export function sum(input: string[]): number {
  
  let sum: number = 0;

  for (const line of input) {

    let numberString = getNumberAsString([...line]);
    numberString += getNumberAsString([...line].reverse());

    sum += Number(numberString);
  }

  return sum;
}

function getNumberAsString(line: string[]): string {
  for (const p of line) {
    if (!isNaN(Number(p))) {
      return String(p);
    }
  }
  throw Error('no number found')
}


export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => sum(lines));
}

if(process.env.DayAndPart === 'day1(p1)')
answer(`${SourceFolderPath}puzzle.data`)
.then(answer=>console.log(answer))