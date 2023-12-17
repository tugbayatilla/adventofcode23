import { Identity, callAnswerIfSelected } from "../../CurrentDayAndPart";
import { findNumbers } from "../../findNumbers";
import { read } from "../../read";

export const identity = new  Identity(5,2);


export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        return 0;
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
