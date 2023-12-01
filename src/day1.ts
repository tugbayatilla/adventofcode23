export function sum(input: string[]): number {
  const line = input[0];
  let numberString = "";

  for (const p of [...line]) {
    if(!isNaN(Number(p))){
      numberString += String(p)
      break;
    }
  }

  for (const p of [...line].reverse()) {
    if(!isNaN(Number(p))){
      numberString += String(p)
      break;
    }
  }
  
  return Number(numberString);
  
}

import * as fs from 'fs';
import * as readline from 'readline';
export async function read(path: string): Promise<string[]> {
  
  return new Promise((resolve, reject) => {
    const lines: string[] = [];
    const fileStream = fs.createReadStream(path);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      if(line !== "")
        lines.push(line);
    });

    rl.on('close', () => {
      resolve(lines);
    });

    rl.on('error', reject);
  });
}