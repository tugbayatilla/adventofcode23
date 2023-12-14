import { findNumbers } from "../../day3/part1";

const Day = "day4"; // <-- change this when you copy
const Part = "part2"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;

interface Card {
    id: number,
    state: 'original' | 'copy'
}

export const createCards = (line: string): Card[] => {
    const parts = line.split('|');
    const id: number = findNumbers(parts[0])[0];
    const winners: number[] = findNumbers(parts[0]).slice(1);
    const numbers: number[] = findNumbers(parts[1]);

    const numbersSet = new Set(numbers);
    const overlappingWinners = winners.filter(number => numbersSet.has(number));

    let cards: Card[] = [];
    cards.push({ id: id, state: 'original' })
    overlappingWinners.forEach((_, index) => {
        cards.push({ id: id + index + 1, state: 'copy' })
    });
    return cards;
};

