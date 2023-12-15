import { findNumbers } from "../../day3/part1";


const Day = "day4"; // <-- change this when you copy
const Part = "part2"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;

export interface Card {
    id: number,
    state: 'original' | 'copy',
    overlap: number
    processed: boolean,
    log?: string
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
        overlap: overlappingWinners.length
    };
};

export const convertToCards = (lines: string[]): Card[] => {
    return lines.map(line => createCard(line));
};

export const process = (cards: Card[]): Card[] => {

    let i: number = 0;
    do {
        const card = cards[i];

        for (let k = 0; k < card.overlap; k++) {
            const foundCards = cards.filter(c => !c.processed && c.id === card.id + k + 1)
            if (foundCards.length > 0){
                const item = <Card>{ ...foundCards[0], state: 'copy', 
                log: `${i} - card:${card.id}` };
                cards.push(item);
            }
        }
        card.processed = true;
        
        i++;
    } while (cards.filter(c => !c.processed).length > 0);


    return cards;
};
