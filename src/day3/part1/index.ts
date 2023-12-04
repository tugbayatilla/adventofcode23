import { read } from "../../read";

export const Day = "day3"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part1/`; // <-- change this when you copy

/* to prevent prettier to format this section
read(filePath:string): string[] -- line
FOREACH line
    findNumbers(line:string): number[]
    FOREACH number
        findIndex(line: string, num: number): number
        getNeighbor('top'|'botton'|'left','right':string, index: number): string
        FOREACH neighbor - 'top'|'botton'|'left','right'
            hasSymbol(neighbor: string): boolean 
            IF(hasSymbol) 
                addSumTotal();
*/

export const findNumbers = (line: string): number[] => {
  const pattern = /\d+/g;
  const regex = new RegExp(pattern);
  const matches = line.match(regex);

  if (matches) return matches.map(Number);

  return [];
};

export const findIndex = (line: string, num: number): number => {
  return line.indexOf(String(num));
};

export type Direction = "right" | "left" | "top" | 'bottom';

export const findNeighbor = (
  lines: string[],
  indexOfLine: number,
  number: number,
  direction: Direction
): string => {
  if (direction === "right") {
    const line = lines[indexOfLine];
    const indexOfNumber = findIndex(line, number);

    const startIndex = indexOfNumber + String(number).length;
    return line.substring(startIndex, startIndex + 1);
  }
  if (direction === "left") {
    const line = lines[indexOfLine];
    const indexOfNumber = findIndex(line, number);

    return line.substring(indexOfNumber, indexOfNumber - 1);
  }
  if (direction === "top") {
    const topLine = lines[indexOfLine - 1];
    if (!topLine) return "";

    const line = lines[indexOfLine];
    const indexOfNumber = findIndex(line, number);

    const startIndex = indexOfNumber - 1;
    const endIndex = indexOfNumber + String(number).length + 1;

    return topLine.substring(startIndex, endIndex);
  }
  if (direction === "bottom") {
    const bottomLine = lines[indexOfLine + 1];
    if (!bottomLine) return "";

    const line = lines[indexOfLine];
    const indexOfNumber = findIndex(line, number);

    const startIndex = indexOfNumber - 1;
    const endIndex = indexOfNumber + String(number).length + 1;

    return bottomLine.substring(startIndex, endIndex);
  }

  return "";
};


export const hasSymbol = (line: string): boolean => {
    const symbols = ['$', '*', '+', '?', '#'];

    const escapedSymbols = symbols.join('|');
    const regex = new RegExp(`[${escapedSymbols}]`);

    return regex.test(line);
}

export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
      let totalSum: number = 0;
  
      lines.forEach((line, lineIndex)=>{
        const numbers = findNumbers(line);
        
        numbers.forEach((number, idx)=>{

            const leftNeighbor = findNeighbor(lines, lineIndex, number, 'left');
            if(hasSymbol(leftNeighbor))
            {
                totalSum += number;
                return;
            }
            
            const rightNeighbor = findNeighbor(lines, lineIndex, number, 'right');
            if(hasSymbol(rightNeighbor))
            {
                totalSum += number;
                return;
            }

            const topNeighbor = findNeighbor(lines, lineIndex, number, 'top');
            if(hasSymbol(topNeighbor))
            {
                totalSum += number;
                return;
            }

            const bottomNeighbor = findNeighbor(lines, lineIndex, number, 'bottom');
            if(hasSymbol(bottomNeighbor))
            {
                totalSum += number;
                return;
            }
        });
        
      });
  
      return totalSum;
    });
  }
