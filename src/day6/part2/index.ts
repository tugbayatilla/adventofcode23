import { Identity, isIdentitySelected } from "../../CurrentDayAndPart";
import { findNumbers } from "../../findNumbers";
import { read } from "../../read";

export const identity = new Identity(6, 2);


export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {

        const times = findNumbers(lines[0]);
        const distances = findNumbers(lines[1]);

        const time = Number(times.join(''))
        const dist = Number(distances.join(''))
        
        let timeCounter = 0;
        for (let ms = 0; ms <= time; ms++) {
            const distance = (time - ms) * ms;
            if (distance > dist)
                timeCounter++;
        }

        return timeCounter;

    });
}


if (isIdentitySelected(identity)) {
    answer(identity.getTestPath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - Test Data`))

    answer(identity.getPuzzlePath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - Puzzle Data`))
}