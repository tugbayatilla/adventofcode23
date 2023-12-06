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

export const findIndex = (line: string, number: number): number => {
  const numbers = findNumbers(line);
  let startingIndex: number = 0;

  for (const n of numbers) {
    if (n === number) break;
    startingIndex = line.indexOf(String(n), startingIndex) + String(n).length;
  }

  return line.indexOf(String(number), startingIndex);
};

export type Direction = "right" | "left" | "top" | "bottom";

export const findNeighbor = (lines: string[], indexOfLine: number, number: number, direction: Direction): string => {
  const line = lines[indexOfLine];
  const indexOfNumber = findIndex(line, number);

  let startIndex: number = 0;
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

    // prettier-ignore
    numbers.forEach((number) => {
      let partNumber = getNumberIfNeighborHasSymbol(lines,lineIndex,number,"left");
      if (partNumber === 0)
        partNumber = getNumberIfNeighborHasSymbol(lines,lineIndex,number,"right");
      if (partNumber === 0)
        partNumber = getNumberIfNeighborHasSymbol(lines,lineIndex,number,"top");
      if (partNumber === 0)
        partNumber = getNumberIfNeighborHasSymbol(lines,lineIndex,number,"bottom");

      const numberLength = String(number).length;
      const numberIndex = findIndex(line, number);
      for (let index = 0; index < numberLength; index++) {
        line = replaceCharAt(line, numberIndex + index, 'X')
      }
      lines[lineIndex] = line

      allNumbers.push([lineIndex + 1,number,partNumber !== 0,partNumber === 0 ? "<-- ignored" : ""]);
      totalSum += partNumber;
    });

  });
  return totalSum;
}

function getNumberIfNeighborHasSymbol(  lines: string[],  lineIndex: number,  number: number,  direction: Direction): number {
  const neighbor = findNeighbor(lines, lineIndex, number, direction);
  if (hasSymbol(neighbor)) return number;
  return 0;
}

answer(`${SourceFolderPath}puzzle.data`)
  .then((answer) => console.log(`${SourceFolderPath}: ${answer}`))
  .then(() => write(`${SourceFolderPath}validNumbers.out`, allNumbers));


function replaceCharAt(originalString: string, index: number, replacement: string): string {
  if (index < 0 || index >= originalString.length) {
      return originalString;
  }

  return (
      originalString.substring(0, index) + replacement + originalString.substring(index + 1)
  );
}