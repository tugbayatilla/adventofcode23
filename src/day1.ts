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

import * as fs from "fs";
import * as readline from "readline";
export async function read(path: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    const lines: string[] = [];
    const fileStream = fs.createReadStream(path);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      if (line !== "") lines.push(line);
    });

    rl.on("close", () => {
      resolve(lines);
    });

    rl.on("error", reject);
  });
}

export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => sum(lines));
}

answer('./src/day1.puzzle.data')
.then(answer=>console.log(answer))