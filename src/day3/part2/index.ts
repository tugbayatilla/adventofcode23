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
      if(digitFound && !isDigit){
        sum += Number(digitAsString);
        digitAsString = ''
        digitFound = false;
      }
    });
  });

  return sum;
}