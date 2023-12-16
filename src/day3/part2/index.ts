import { read } from "../../read";

const Day = "day3"; // <-- change this when you copy
const Part = "part2"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;

export type Char = 'dot' | 'digit' | 'symbol';
export type Symbol = "$" | "*" | "+" | "#" | "=" | "%" | "&" | "/" | "-" | "@"
export const SYMBOLS: Symbol[] = ["$", "*", "+", "#", "=", "%", "&", "/", "-", "@"];

export const sum = (lines: string[]): number => {
  let sum: number = 0;

  const items = createItems(lines);
  const numbers = items.filter(p => p.type === 'digit');
  sum = numbers.reduce((acc, crr) => acc + <number>crr.value, 0)

  return sum;
}


export type Item = {
  type: Char,
  value: number | Symbol,
  startIndex: number,
  endIndex: number,
  lineIndex: number
}

export const createItems = (lines: string[]): Item[] => {
  let items: Item[] = [];

  lines.forEach((line, lineIndex) => {
    const chars = [...line];
    let digitFound: boolean = false;
    let digitAsString: string = '';
    let item: Item = { startIndex: -1, endIndex: 0, value: 0, type: 'digit', lineIndex: 0 };
    chars.forEach((char, charIndex) => {
      const charAsInt = parseInt(char)
      const isDigit = !isNaN(charAsInt) && typeof charAsInt === "number";
      if (isDigit) {

        if (item.startIndex < 0) item.startIndex = charIndex;
        digitFound = true;
        digitAsString += char;

      }
      if (digitFound && !isDigit) {
        item.value = Number(digitAsString);
        item.endIndex = charIndex - 1;
        digitAsString = ''
        digitFound = false;

        item.lineIndex = lineIndex;
        items.push(item);
        item = { startIndex: -1, endIndex: 0, value: 0, type: 'digit', lineIndex: 0 };
      }

      if (SYMBOLS.includes(char as Symbol)) {
        item.type = 'symbol'
        item.value = char as Symbol;
        item.startIndex = charIndex;
        item.endIndex = charIndex;
        item.lineIndex = lineIndex;
        items.push(item);
        item = { startIndex: -1, endIndex: 0, value: 0, type: 'digit', lineIndex: 0 };
      }
    });
  });

  return items;
}

export const findNeighbors = (item: Item, items: Item[]): Item[] => {
  const sameLineNeighbors =
    items
      .filter(p => p != item)
      .filter(p => p.lineIndex === item.lineIndex)
      .filter(
        p => isNeighbor(item.startIndex, p.startIndex, p.endIndex)
          || isNeighbor(item.endIndex, p.startIndex, p.endIndex));


  const topLineNeighbors =
    items
      .filter(p => p != item)
      .filter(p => p.lineIndex === item.lineIndex - 1)
      .filter(
        p => isNeighbor(item.startIndex, p.startIndex, p.endIndex)
          || isNeighbor(item.endIndex, p.startIndex, p.endIndex));

  const bottomLineNeighbors =
    items
      .filter(p => p != item)
      .filter(p => p.lineIndex === item.lineIndex + 1)
      .filter(
        p => isNeighbor(item.startIndex, p.startIndex, p.endIndex)
          || isNeighbor(item.endIndex, p.startIndex, p.endIndex));

  const neighbors = [...sameLineNeighbors, ...topLineNeighbors, ...bottomLineNeighbors];

  return neighbors;
};

export const isNeighbor = (pointIndex: number, startIndex: number, endIndex: number): boolean => {
  return isInRange(pointIndex, startIndex - 1, endIndex + 1)
};

function isInRange(num: number, lowerBound: number, upperBound: number): boolean {
  return num >= lowerBound && num <= upperBound;
}

export async function answerPart1(filePath: string): Promise<number> {
  return read(filePath).then((lines) => {

    let sum: number = 0;

    const items = createItems(lines);
    const numbers = items.filter(p => p.type === 'digit');
    const symbols = items.filter(p => p.type === 'symbol');

    let calculatedItems = new Set<Item>();
    symbols
      .forEach(symbol => {
        const neighbors = findNeighbors(symbol, numbers)
          .filter(p => p.type === 'digit');

        for (const neighbor of neighbors) {

          if (!calculatedItems.has(neighbor)) {
            calculatedItems.add(neighbor);
            sum += <number>neighbor.value;
          }
        }
      });
    return sum;

  });
}



export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => {

    let sum: number = 0;

    const items = createItems(lines);
    const numbers = items.filter(p => p.type === 'digit');
    const starSymbols = items.filter(p => p.type === 'symbol' && p.value === '*');

    starSymbols
      .forEach(starSymbol => {
        const neighbors = findNeighbors(starSymbol, numbers)
          .filter(p => p.type === 'digit');

        if(neighbors.length === 2){
          sum += neighbors.reduce((acc, crr)=> acc * <number>crr.value, 1)
        }
        
      });
    return sum;

  });
}
if(process.env.DayAndPart === DayAndPart)
answer(`${SourceFolderPath}puzzle.data`)
.then((sum)=>console.log(`${DayAndPart}: ${sum}`))