import { findNumbers } from "../../day3/part1";
import { read } from "../../read";


const Day = "day4"; // <-- change this when you copy
const Part = "part2"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;

export interface Card {
    id: number,
    state: 'original' | 'copy',
    overlap: number
    processed: boolean,
    log?: string,
    copy: number
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
        processed: false,
        overlap: overlappingWinners.length,
        copy: 1
    };
};

export const convertToCards = (lines: string[]): Card[] => {
    return lines.map(line => createCard(line));
};

export const processCards = (cards: Card[]): Card[] => {

    let i: number = 0;
    do {
        const card = cards[i];

        for (let x = 1; x <= card.copy; x++)
        for (let k = 1; k <= card.overlap; k++) {
            const foundCards = cards.filter(c => c.id === card.id + k)
            if (foundCards.length > 0)
                foundCards[0].copy += 1;
        }
        card.processed = true;

        i++;
    } while (cards.filter(c => !c.processed).length > 0);

    return cards;
};


export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        const cards = convertToCards(lines);
        const processedCards = processCards(cards);
        return processedCards.reduce((acc, crr)=> acc + crr.copy, 0);
    });
}


if(process.env.DayAndPart === DayAndPart)
answer(`${SourceFolderPath}puzzle.data`)
.then((sum)=>console.log(`${DayAndPart}: ${sum}`))