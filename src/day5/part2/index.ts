import { Identity, callAnswerIfSelected } from "../../CurrentDayAndPart";
import { findNumbers } from "../../findNumbers";
import { read } from "../../read";
import { findLocation, findMaps } from "../part1";

export const identity = new  Identity(5,2);


export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        const seeds = getSeeds(lines[0]);

        const maps = findMaps(lines);

        const locations = seeds.map(s => findLocation(s, maps));

        return locations.sort((a, b) => a - b)[0];
    });
}

callAnswerIfSelected(identity, answer);

export const getSeeds = (line: string): number[] => {
    const numberList = findNumbers(line);
    let seeds: number[] = [];

    for (let i = 0; i < numberList.length; i+=2) {
        const start = numberList[i];
        const len = numberList[i+1];
        
        for (let k = start; k < start + len; k++) {
            seeds.push(k);
        }
    }

    return seeds;
}
