import { Identity, isIdentitySelected } from "../../CurrentDayAndPart";
import { findNumbers } from "../../findNumbers";
import { read } from "../../read";

export const identity = new Identity(6, 1);


/*

    
    interface Race {
        time: number,
        distance: number
    }

    - Parse data to Race[]
    - FOREACH race
        - FOREACH race.time
            - calculate distance calculateDistance(duration:number, race: Race): number
        - increase the counter for the race
    - multiply the couters for each race

*/

export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        
        const times = findNumbers(lines[0]);
        const distances = findNumbers(lines[1]);

        let result = 1;
        for (let t = 0; t < times.length; t++) {
            let timeCounter = 0;
            const time = times[t];
            
            for (let ms = 0; ms <= time; ms++) {
                const distance = (time - ms) * ms;
                if(distance > distances[t])
                    timeCounter++;
            }
            result *= timeCounter;
        }

        return result;

    });
}


if (isIdentitySelected(identity))
answer(identity.getPuzzlePath())
.then((sum) => console.log(`(${identity.show}): ${sum}`))