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

export const findNeighbor = (
  lines: string[],
  indexOfLine: number,
  number: number,
  direction: "right"
): string => {
  
    if(direction === 'right'){
        const line = lines[indexOfLine];
        const indexOfNumber = findIndex(line, number);

        const startIndex = indexOfNumber + String(number).length;
        return line.substring(startIndex, startIndex + 1)
    }
  
    return "";
};
