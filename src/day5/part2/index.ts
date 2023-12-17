import { Identity, callAnswerIfSelected } from "../../CurrentDayAndPart";
import { read } from "../../read";

export const identity = new  Identity(5,2);


export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        return 0;
    });
}

callAnswerIfSelected(identity, answer);

export const getSeeds = (line: string): number[] => {
    return [];
}
