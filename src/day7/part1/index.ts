import { Identity, isIdentitySelected } from "../../CurrentDayAndPart";
import { read } from "../../read";

export const identity = new Identity(7, 1);


/*

   interface Hand {
    text: string,
    bid: number,
    type?: HandType,
    typePower?: number
    cardPower?: number
   }
   interface Card {
    label: CardLabel,
    location: number,
    power: number
   }

   type HandType = {name: 'Five of a kind', power: 8} | 
   type CardLabel = 'A' | 'K'
   const LABELS: string[] = ['A', 'K']

   getLabelPower(label: CardLabel): number {
    return length - index
   }

   - findHands(lines: string[]):Hand[] {}
   - findHandType(hand: Hand): HandType {}
   - Arrange CardLabel and its power map
   - Arrange HandType and its power map
   - findHandPower(hand: Hand): number {}


*/

const CARDS: string[] = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const CARDS_VALUES: number[] = [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {

        let handAndPower: [hand: string, bid: number, power: number][] = [];

        for (const line of lines) {
            const lineSplit = line.split(' ');
            const hand = lineSplit[0];
            const bid = Number(lineSplit[1]);

        
            const handLabelCount = findHandLabelCounts(hand);

            let handPower = apple(handLabelCount);

            [...hand].forEach((card, index) => {

                const cardIndex = CARDS.indexOf(card);
                const getValue = CARDS_VALUES[cardIndex];
                // const cardLocationPower = getValue ** ([...hand].length - index) + (CARDS.length + [...hand].length - index);
                const cardPosPower = [...hand].length - index;
                const cardLocationPower = cardPosPower * getValue ** cardPosPower;

                handPower += cardLocationPower;
            });

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

        return sum;
    });
}

function apple(handLabelCount: [label: string, count: number][]) {
    
    const fiveOfAKind = handLabelCount.filter(p => p[1] === 5);
    if (fiveOfAKind.length === 1) {
        return 1000000000000;
    }
    const fourOfAKind = handLabelCount.filter(p => p[1] === 4);
    if (fourOfAKind.length === 1) {
        return 900000000000;
    }
    const fullHause2 = handLabelCount.filter(p => p[1] === 2);
    const fullHause3 = handLabelCount.filter(p => p[1] === 3);
    if (fullHause2.length === 1 && fullHause3.length === 1) {
        return 800000000000;
    }
    const threeOfAKind = handLabelCount.filter(p => p[1] === 3);
    if (threeOfAKind.length === 1) {
        return 700000000000;
    }
    const twoPairs = handLabelCount.filter(p => p[1] === 2);
    if (twoPairs.length === 2) {
        return 600000000000;
    }
    const onePair = handLabelCount.filter(p => p[1] === 2);
    if (onePair.length === 1) {
        return 500000000000;
    }
    const highNumber = handLabelCount.filter(p => p[1] === 1);
    if (highNumber.length === 5) {
        return 400000000000;
    }

    return -1;
}

function findHandLabelCounts(input: string): [label: string, count: number][] {
    const counts: [string, number][] = [];

    [...input].forEach(char => {

        let labelAndCount = counts.find(p => p[0] === char)
        if (labelAndCount) {
            labelAndCount[1]++;
        } else {
            counts.push([char, 1]);
        }
    });

    return counts;
}

if (isIdentitySelected(identity)) {
    answer(identity.getTestPath())
        .then((sum) => console.log(`(${identity.show}): ${sum} - test`))

        answer(identity.getPuzzlePath())
        .then((sum) => console.log(`(${identity.show}): ${sum} puzzle`))
// 251232593 too low
// 251412864 
// 251983066 too high
// 251412864 wrong answer
// 251405536 wrong
// 251674863 wrong
// 251405536 wrong
// 251384246 wrong
}