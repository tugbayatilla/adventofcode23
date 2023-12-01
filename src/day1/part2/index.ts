import { read } from "../../read";

export const Day = "day1"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part2/`;

export function sum(input: string[]): number {
  let sum: number = 0;

  for (const line of input) {
    let numberString = getNumberAsString([...line]);
    numberString += getNumberAsString([...line].reverse(), true);

    sum += Number(numberString);
  }

  return sum;
}

const stringRepresentationOfNumbers: string[] = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function getNumberAsString(
  line: string[],
  isReversed: boolean = false
): string {
  let accumulatedString: string = "";

  for (const p of line) {
    if (!isNaN(Number(p))) {
      return String(p);
    }

    accumulatedString += p;

    const searchString = isReversed
      ? [...accumulatedString].reverse().join("")
      : accumulatedString;

    const index = stringRepresentationOfNumbers.findIndex((element) =>
      searchString.includes(element)
    );

    if (index !== -1) {
      return String(index + 1);
    }
  }

  throw Error("no number found");
}

export async function answer(filePath: string): Promise<number> {
  return read(filePath).then((lines) => sum(lines));
}

answer(`${SourceFolderPath}puzzle.data`)
.then(answer=>console.log(answer))
