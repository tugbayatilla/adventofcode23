import { Identity, isIdentitySelected } from "../../CurrentDayAndPart";
import { read } from "../../read";
import { write } from "../../write";

export const identity = new Identity(7, 2);



const CARDS: string[] = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const CARDS_VALUES: number[] = [14, 13, 12, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2];
export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {

        let handAndPower: [hand: string, bid: number, power: number][] = [];

        for (const line of lines) {
            const lineSplit = line.split(' ');
            const hand = lineSplit[0];
            const bid = Number(lineSplit[1]);


            
            const handCardCount = findHandCardCounts(hand);

            let handPower = apple(handCardCount);

            let cardPowerStr = '9';
            [...hand].forEach((card) => {

                const cardIndex = CARDS.indexOf(card);
                const getValue = CARDS_VALUES[cardIndex];

                cardPowerStr += (getValue < 10 ? '0' : '') + (getValue.toString())
            });

            if (cardPowerStr.length !== 11) {
                console.log(cardPowerStr)
                throw Error('not 12!!!');
            }

            handPower += Number(cardPowerStr);

            console.log([hand, bid, handPower]);

            handAndPower.push([hand, bid, handPower]);

        }

        const sortedHandAndPower = handAndPower.sort((a, b) => a[2] - b[2]); //desc
        console.log('sorted');
        console.log(sortedHandAndPower);


        let sum = 0;
        sortedHandAndPower.forEach((item, index) => {
            sum += item[1] * (index + 1)
            console.log(`${item} - ${index + 1} -- ${sum}`)
        });

        write(`${identity.getTestPath()}.out`, sortedHandAndPower);

        return sum;
    });
}

function apple(handCardCount: [card: string, count: number][]) {

    const fiveOfAKind = handCardCount.filter(p => p[1] === 5);
    if (fiveOfAKind.length === 1) {
        return 1000000000000;
    }
    const fourOfAKind = handCardCount.filter(p => p[1] === 4);
    if (fourOfAKind.length === 1) {
        return 900000000000;
    }
    const fullHause2 = handCardCount.filter(p => p[1] === 2);
    const fullHause3 = handCardCount.filter(p => p[1] === 3);
    if (fullHause2.length === 1 && fullHause3.length === 1) {
        return 800000000000;
    }
    const threeOfAKind = handCardCount.filter(p => p[1] === 3);
    if (threeOfAKind.length === 1) {
        return 700000000000;
    }
    const twoPairs = handCardCount.filter(p => p[1] === 2);
    if (twoPairs.length === 2) {
        return 600000000000;
    }
    const onePair = handCardCount.filter(p => p[1] === 2);
    if (onePair.length === 1) {
        return 500000000000;
    }
    const highNumber = handCardCount.filter(p => p[1] === 1);
    if (highNumber.length === 5) {
        return 400000000000;
    }

    return -1;
}

function findHandCardCounts(input: string): [card: string, count: number][] {
    const counts: [string, number][] = [];

    [...input].forEach(char => {

        let cardAndCount = counts.find(p => p[0] === char)
        if (cardAndCount) {
            cardAndCount[1]++;
        } else {
            counts.push([char, 1]);
        }
    });

    if (input.includes('J')) {
        let inputWithoutJ = input;
        // find highes number  
        const highestOccurance = counts.filter(p => p[0] !== 'J').sort((a, b) => b[1] - a[1])[0];
        inputWithoutJ = inputWithoutJ.replace('J', highestOccurance[0]);
        return findHandCardCounts(inputWithoutJ)
    }

    return counts;
}

if (isIdentitySelected(identity)) {
    answer(identity.getTestPath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - test`))

    // answer(identity.getPuzzlePath())
    //     .then((sum) => console.log(`(${identity.show}): ${sum} puzzle`))
}