import { read } from "../../read";
import { write } from "../../write";

export const Day = "day3"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part1/`; // <-- change this when you copy

/* to prevent prettier to format this section
read(filePath:string): string[] -- line
FOREACH line
    findNumbers(line:string): number[]
    FOREACH number
        findIndex(line: string, number: number): number
        getNeighbor('top'|'botton'|'left','right':string, index: number): string
        FOREACH neighbor - 'top'|'botton'|'left','right'
            hasSymbol(neighbor: string): boolean 
            IF(hasSymbol) 
                addSumTotal();
*/

export const findNumbers = (line: string): number[] => {
  const pattern = /(\d+)\b/g;
  const regex = new RegExp(pattern);
  const matches = line.match(regex);

  if (matches) return matches.map(Number);

  return [];
};

export const findIndex = (line: string, number: number, startingIndex: number = 0): number => {
  const numbers = findNumbers(line);

  for (const n of numbers) {
    if (n === number) break;
    startingIndex = line.indexOf(String(n), startingIndex) + String(n).length;
  }

  return line.indexOf(String(number), startingIndex);
};

export type Direction = "right" | "left" | "top" | "bottom";

export const findNeighbor = (lines: string[], indexOfLine: number, number: number, direction: Direction, startIndex: number = 0): string => {
  const line = lines[indexOfLine];
  const indexOfNumber = findIndex(line, number, startIndex);

  let endIndex: number = 0;

  switch (direction) {
    case "right":
      startIndex = indexOfNumber + String(number).length;
      return line.substring(startIndex, startIndex + 1);
    case "left":
      return line.substring(indexOfNumber, indexOfNumber - 1);
    case "top":
      const topLine = lines[indexOfLine - 1];
      if (!topLine) return "";

      startIndex = indexOfNumber - 1;
      endIndex = indexOfNumber + String(number).length + 1;

      return topLine.substring(startIndex, endIndex);
    case "bottom":
      const bottomLine = lines[indexOfLine + 1];
      if (!bottomLine) return "";

      startIndex = indexOfNumber - 1;
      endIndex = indexOfNumber + String(number).length + 1;

      return bottomLine.substring(startIndex, endIndex);
  }
};

export const hasSymbol = (line: string): boolean => {
  const symbols = ["$", "*", "+", "#", "=", "%", "&", "/", "-", "@"];

  const escapedSymbols = symbols.map((symbol) => `\\${symbol}`).join("|");
  const regex = new RegExp(`[${escapedSymbols}]`);

  return regex.test(line);
};

export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => {
    const totalSum = sum(lines);

    return totalSum;
  });
}

export let allNumbers: [index: number, number: number, isValid: boolean, info: string][] = [];

export function sum(lines: string[]): number {
  let totalSum: number = 0;

  lines.forEach((line, lineIndex) => {
    const numbers = findNumbers(line);
    let currentIndexOfNumber: number = 0;

    // prettier-ignore
    numbers.forEach((number) => {
      console.log(`number: ${number} -- current index: ${currentIndexOfNumber}`)

      let partNumber = getNumberIfNeighborHasSymbol(lines,lineIndex,number,"left", currentIndexOfNumber);
      if (partNumber === 0)
        partNumber = getNumberIfNeighborHasSymbol(lines,lineIndex,number,"right", currentIndexOfNumber);
      if (partNumber === 0)
        partNumber = getNumberIfNeighborHasSymbol(lines,lineIndex,number,"top", currentIndexOfNumber);
      if (partNumber === 0)
        partNumber = getNumberIfNeighborHasSymbol(lines,lineIndex,number,"bottom", currentIndexOfNumber);

      if(partNumber === number)
        currentIndexOfNumber = findIndex(line, number, currentIndexOfNumber) + String(number).length;
      
      allNumbers.push([lineIndex + 1,number,partNumber !== 0,partNumber === 0 ? "<-- ignored" : ""]);
      totalSum += partNumber;
    });
  });
  return totalSum;
}

// prettier-ignore
function getNumberIfNeighborHasSymbol(  lines: string[],  lineIndex: number,  number: number,  direction: Direction, startIndex: number = 0): number {
  const neighbor = findNeighbor(lines, lineIndex, number, direction, startIndex);
  if (hasSymbol(neighbor)) return number;
  return 0;
}

answer(`${SourceFolderPath}puzzle.data`)
  .then((answer) => console.log(`${SourceFolderPath}: ${answer}`))
  .then(() => write(`${SourceFolderPath}validNumbers.out`, allNumbers));
// 526731 - wrong
// 527446 - right : +715
// 46,3,false,<-- ignored should NOT be ignored

