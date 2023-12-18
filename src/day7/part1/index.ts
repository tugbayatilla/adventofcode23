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

export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        
        return 0;

    });
}


if (isIdentitySelected(identity))
answer(identity.getPuzzlePath())
.then((sum) => console.log(`(${identity.show}): ${sum}`))