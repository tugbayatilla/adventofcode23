const Day = "day3"; // <-- change this when you copy
const Part = "part2"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;

/* to prevent prettier to format this section
read(filePath:string): string[] -- line

check each char one by one
if char is a dot, next
if char is a symbol, create item
if char is a number, check the next one iteratively to find the actual number

interface Item {
    coordinates: {
        lineIndex:number,
        startIndex: number,
        endIndex: number
    },
    length: number
    type: Symbol | 'number',
    value: Symbol | number,
    neighbors: Item[]
}

type Symbol = '$' | '*' | '+' | '#' | '=' | '%' | '&' | '/' | '-' | '@' ;

find out every object and it's neighbors one by one

finding the number is the key, we need to go left and right until there is no number is found

number, or symbol

*/

export type ItemType = 'dot' | 'digit' | 'symbol';
export const SYMBOLS: string[] = ["$", "*", "+", "#", "=", "%", "&", "/", "-", "@"];


export const identifyChar = (char: string): [ItemType, string|number] => {
  if (char === ".") return ['dot', '.'];
  const charAsInt = parseInt(char)
  if (!isNaN(charAsInt) && typeof charAsInt === "number") return ['digit', charAsInt];

  return ['symbol', char];
};


export const findItem = (char: string): Item => {
  const [type, value] = identifyChar(char);

  return <Item>{
    type: type,
    value: value
  };
};



interface Item {
  type: ItemType;
  value: string | number;
}
