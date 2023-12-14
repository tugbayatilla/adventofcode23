import { findNumbers } from "../../day3/part1";
import { read } from "../../read";

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
    const parts = line.split('|');
    const winners: number[] = findNumbers(parts[0]).slice(1);
    const numbers: number[] = findNumbers(parts[1]);

    const numbersSet = new Set(numbers);
    const overlappingWinners = winners.filter(number => numbersSet.has(number));

    const len = overlappingWinners.length;
    const coefficient = len > 0 ? 1 : 0;
    return coefficient * Math.pow(2, len - 1);
};

export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        return lines.reduce((acc, crr) => acc + sum(crr), 0);
    });
}