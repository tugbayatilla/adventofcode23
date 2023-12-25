import { Identity, isIdentitySelected } from "../../CurrentDayAndPart";
import { findSignedNumbers } from "../../findNumbers";
import { read } from "../../read";
import { write } from "../../write";

export const identity = new Identity(9, 1);


export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        let logs: string[] = [];

        const numbers = lines.map(line => {
            const number = predictNextValueInHistory(line);
            logs.push(`${line} : ${number}`);
            return number;
        });

        write(`${filePath}.out`, logs.map(p => JSON.stringify(p)));

        return numbers.reduce((a, c) => a + c, 0);
    });
}


if (isIdentitySelected(identity)) {
    answer(identity.getTestPath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - test`))

    answer(identity.getPuzzlePath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - puzzle`))
}
// 2573716094 to high

export const predictNextValueInHistory = (line: string): number => {

    const numbers = findSignedNumbers(line);

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

    const result = lastItems.reduce((a, c) => a + c, 0);

    return result;
}