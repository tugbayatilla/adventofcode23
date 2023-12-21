import { Identity, isIdentitySelected } from "../../CurrentDayAndPart";
import { read } from "../../read";
import { write } from "../../write";

export const identity = new Identity(8, 1);

interface data {
    name: string,
    direction: [string, string]
}

export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {

        const directionsStr = lines[0];
        const directions: number[] = [...directionsStr].map(p=> p === 'L' ? 0 : 1);


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
        let currentLocation: string = 'AAA';
        let consoleData: string[] = []
        let directionIndex = 0;
        let currentNode:data|null = null;
        
        while(currentLocation !== 'ZZZ') {

            if(directionIndex === directions.length)
                directionIndex = 0;
            const direction = directions[directionIndex];

            currentNode = dataSet.find(p=>p.name === currentLocation)!;
            
            
            currentLocation = currentNode?.direction[direction]!;
            
            const message = `${JSON.stringify(currentNode)} - ${direction} - ${currentLocation}`
            consoleData.push(message);
            console.log(message);

            countOfSteps++;
            directionIndex++;
        }
        
        write(`${filePath}.console.out`, consoleData);


        return countOfSteps;
    });
}

if (isIdentitySelected(identity)) {
    answer(identity.getTestPath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - test`))

    answer(identity.getPuzzlePath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - puzzle`))
}