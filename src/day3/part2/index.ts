const Day = "day3"; // <-- change this when you copy
const Part = "part2"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;

export type Char = 'dot' | 'digit' | 'symbol';
export const SYMBOLS: string[] = ["$", "*", "+", "#", "=", "%", "&", "/", "-", "@"];

export const sum = (lines: string[]): number => {
  let sum: number = 0;

  lines.forEach(line => {
    const chars = [...line];
    let digitFound: boolean = false;
    let digitAsString: string = '';
    chars.forEach(char => {
      const charAsInt = parseInt(char)
      const isDigit = !isNaN(charAsInt) && typeof charAsInt === "number";
      if (isDigit) {
        digitFound = true;
        digitAsString += char;
      }
      if (digitFound && !isDigit) {
        sum += Number(digitAsString);
        digitAsString = ''
        digitFound = false;
      }
    });
  });

  return sum;
}

export type Item = {
  type: 'digit',
  value: number,
  startIndex: number,
  endIndex: number,
  lineIndex: number
}

export const createItems = (lines: string[]): Item[] => {
  let items: Item[] = [];

  lines.forEach(line => {
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

        items.push(item);
        item = { startIndex: -1, endIndex: 0, value: 0, type: 'digit', lineIndex: 0 };
      }
    });
  });

  return items;
}