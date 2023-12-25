import { Identity, isIdentitySelected } from "../../CurrentDayAndPart";
import { findNumbers } from "../../findNumbers";
import { read } from "../../read";

export const identity = new Identity(9, 1);


export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        return 0;
    });
}


if (isIdentitySelected(identity)) {
    answer(identity.getTestPath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - test`))

    // answer(identity.getPuzzlePath())
    //     .then((sum) => console.log(`(${identity.show}): ${sum} - puzzle`))
}

export const predictNextValueInHistory = (line: string): number => {

    const numbers = findNumbers(line);

    let lastItems: number[] = [];
    let startList = [...numbers];
    
    do {
        let subList: number[] = [];
        for (let i = 0; i < startList.length - 1; i++) {
            const number1 = startList[i];
            const number2 = startList[i + 1];

            subList.push(number2 - number1);
        }
        lastItems.push(startList[startList.length - 1]);
        startList = subList;
    } while (!startList.every(p => p === 0))

    return lastItems.reduce((a, c) => a + c, 0);
}