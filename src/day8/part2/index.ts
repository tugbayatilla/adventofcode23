import { Identity, isIdentitySelected } from "../../CurrentDayAndPart";
import { read } from "../../read";
import { write } from "../../write";

export const identity = new Identity(8, 2);

interface data {
    name: string,
    direction: [string, string]
}

export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {

        const directionsStr = lines[0];
        const directions: number[] = [...directionsStr].map(p => p === 'L' ? 0 : 1);


        const dataSet: data[] = [];
        lines.splice(1).forEach(line => {

            const regex = new RegExp('(\\w+)\\s*=\\s*\\((\\w+),\\s*(\\w+)\\)');
            const matches = line.match(regex);


            if (matches) {
                const data1: data = { name: matches[1], direction: [matches[2], matches[3]] };

                dataSet.push(data1);
            }
        });

        write(`${filePath}.out`, dataSet.map(p => JSON.stringify(p)));

        let countOfSteps = 0;
        let currentLocations: string[] = dataSet.filter(p => p.name.endsWith('A')).map(p => p.name);
        let directionIndex = 0;

        while (!currentLocations.every(p => p.endsWith('Z'))) {
            
            //console.log(currentLocations)

            if (directionIndex === directions.length)
                directionIndex = 0;
            const direction = directions[directionIndex];

            currentLocations = currentLocations.map(cl => dataSet.find(p => p.name === cl)!.direction[direction])

            countOfSteps++;
            directionIndex++;

            if(countOfSteps%100000===0)
                console.log(countOfSteps)
        }

        return countOfSteps;
    });
}

if (isIdentitySelected(identity)) {
    answer(identity.getTestPath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - test`))

    answer(identity.getPuzzlePath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - puzzle`))
}