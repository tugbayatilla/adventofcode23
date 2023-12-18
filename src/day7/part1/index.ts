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
export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {

        let handAndPower: [hand:string, bid:number, power:number][] = [];

        for (const line of lines) {
            const lineSplit = line.split(' ');
            const hand = lineSplit[0];
            const bid = Number(lineSplit[1]);

            let handPower = 0;
            [...hand].forEach(card => {

                const cardIndex = CARDS.indexOf(card);
                const cardLocationPower = CARDS.length - cardIndex;

                handPower += cardLocationPower;
            });

            const handLabelCount = findHandLabelCounts(hand);

            const fiveOfAKind = handLabelCount.filter(p => p[1] === 5);
            if (fiveOfAKind.length === 1) {
                handPower += 2 ** 7;
            }
            const fourOfAKind = handLabelCount.filter(p => p[1] === 4);
            if (fourOfAKind.length === 1) {
                handPower += 2 ** 6;
            }
            const fullHause = handLabelCount.filter(p => p[1] === 2 || p[1] === 3);
            if (fullHause.length === 2) {
                handPower += 2 ** 5;
            }
            const threeOfAKind = handLabelCount.filter(p => p[1] === 3);
            if (threeOfAKind.length === 1) {
                handPower += 2 ** 4;
            }
            const twoPairs = handLabelCount.filter(p => p[1] === 2);
            if (twoPairs.length === 2) {
                handPower += 2 ** 3;
            }
            const onePair = handLabelCount.filter(p => p[1] === 2);
            if (onePair.length === 1) {
                handPower += 2 ** 2;
            }
            const highNumber = handLabelCount.filter(p => p[1] === 1);
            if (highNumber.length === 5) {
                handPower += 2 ** 2;
            }

            handAndPower.push([hand, bid, handPower]);

        }

        const sortedHandAndPower = handAndPower.sort((a,b)=> a[2]-b[2]); //desc

        let sum=0;
        sortedHandAndPower.forEach((item,index)=>{
            sum += item[1] * (index+1)
        });

        return sum;
    });
}

function findHandLabelCounts(input: string): [label: string, count: number][] {
    const counts: [string, number][] = [];
    const regex = /\d/g;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(input)) !== null) {
        const label = match[0];
        let labelAndCount = counts.find(p => p[0] === label)
        if (labelAndCount) {
            labelAndCount[1]++;
        } else {
            counts.push([label, 1]);
        }
    }

    return counts;
}

if (isIdentitySelected(identity))
    answer(identity.getTestPath())
        .then((sum) => console.log(`(${identity.show}): ${sum}`))