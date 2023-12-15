import { findNumbers } from "../../day3/part1";

const Day = "day4"; // <-- change this when you copy
const Part = "part2"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;

export interface Card {
    id: number,
    state: 'original' | 'copy',
    overlap: number
    processed: boolean
}

export const createCard = (line: string): Card => {
    const parts = line.split('|');
    const id: number = findNumbers(parts[0])[0];
    const winners: number[] = findNumbers(parts[0]).slice(1);
    const numbers: number[] = findNumbers(parts[1]);

    const numbersSet = new Set(numbers);
    const overlappingWinners = winners.filter(number => numbersSet.has(number));

    return <Card>{
        id: id,
        state: 'original',
        processed: true,
        overlap: overlappingWinners.length
    };
};
