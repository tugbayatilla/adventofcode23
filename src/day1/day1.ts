import { read } from "../read";

export const SourceFolderPath = './src/day1/'

export function sum(input: string[]): number {
  
  let sum: number = 0;

  for (const line of input) {
    let numberString = "";

    for (const p of [...line]) {
      if (!isNaN(Number(p))) {
        numberString += String(p);
        break;
      }
    }

    for (const p of [...line].reverse()) {
      if (!isNaN(Number(p))) {
        numberString += String(p);
        break;
      }
    }

    sum += Number(numberString);
  }

  return sum;
}


export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => sum(lines));
}

answer(`${SourceFolderPath}day1.puzzle.data`)
.then(answer=>console.log(answer))