import { Identity, callAnswerIfSelected } from "../../CurrentDayAndPart";
import { findNumbers } from "../../findNumbers";
import { read } from "../../read";
import { findLocation, findMaps } from "../part1";

export const identity = new Identity(5, 2);


export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        const seeds = getSeeds(lines[0]);

        const maps = findMaps(lines);

        console.log('maps and seeds found')

        let minLocation = 63043399100;
        for (const seed of seeds) {

            const location = findLocation(seed, maps);

            if (location < minLocation) {
                console.log(`min location changed from ${minLocation} to ${location}`)
                minLocation = location;
            }
        }

        return minLocation;
    });
}

callAnswerIfSelected(identity, answer);

export function* getSeeds(line: string): Generator<number> {
    const numberList = findNumbers(line);

    for (let i = 0; i < numberList.length; i += 2) {
        const start = numberList[i];
        const len = numberList[i + 1];

        for (let k = start; k < start + len; k++) {
            yield k;
        }
    }
}
