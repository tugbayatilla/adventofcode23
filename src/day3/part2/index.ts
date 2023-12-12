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
      }
    });
  });

  return items;
}

export const findNeighbors = (items: Item[], item: Item): Item[] => {
  return [];
};

export const isNeighbor = (pointIndex: number, startIndex: number, endIndex: number): boolean => {
  return isInRange(pointIndex, startIndex - 1, endIndex + 1)
};

function isInRange(num: number, lowerBound: number, upperBound: number): boolean {
  return num >= lowerBound && num <= upperBound;
}