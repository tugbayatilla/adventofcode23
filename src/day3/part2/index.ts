const Day = "day3"; // <-- change this when you copy
const Part = "part2"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;

export type ItemType = 'dot' | 'digit' | 'symbol';
export const SYMBOLS: string[] = ["$", "*", "+", "#", "=", "%", "&", "/", "-", "@"];

export const sum = (lines: string[]): number => {
  return 0;
}