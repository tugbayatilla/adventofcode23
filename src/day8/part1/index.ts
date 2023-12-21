import { Identity, isIdentitySelected } from "../../CurrentDayAndPart";
import { read } from "../../read";

export const identity = new Identity(8, 1);

export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {

        const directionsStr = lines[0];
        const directions: number[] = [...directionsStr].map(p=> p === 'L' ? 0 : 1);
    

        return 0;
    });
}

if (isIdentitySelected(identity)) {
    answer(identity.getTestPath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - test`))

    answer(identity.getPuzzlePath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - puzzle`))
}