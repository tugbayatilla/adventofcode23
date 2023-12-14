
const Day = "day4"; // <-- change this when you copy
const Part = "part1"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;


/*
    Lets do some design

    interface Card {
        id: number,
        winners: number[],
        numbers: number[]
    }

    read(filePath): string[]
    FOREACH line
    create a card
    split('|') winners and numbers
    for winners: 
        set to card findNumbers(line: string): number[]
    for numbers
        set to card findNumbers(line: string): number[]
    compare winners exist in numbers - findCommon(thisList: number[], inHere: number[]): number[]
    sum += apply formula: lenght + 2^length
    

*/

export const sum = (line: string): number => {
    return 8;
};