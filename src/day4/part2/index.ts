import { findNumbers } from "../../day3/part1";

const Day = "day4"; // <-- change this when you copy
const Part = "part2"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;



export const sum = (line: string): number => {
    const parts = line.split('|');
    const winners: number[] = findNumbers(parts[0]).slice(1);
    const numbers: number[] = findNumbers(parts[1]);

    const numbersSet = new Set(numbers);
    const overlappingWinners = winners.filter(number => numbersSet.has(number));

    const len = overlappingWinners.length;
    const coefficient = 1;
    return coefficient + len;
};

