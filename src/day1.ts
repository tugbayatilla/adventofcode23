export function sum(input: string[]): number {
  const line = input[0];
  let numberString = "";

  for (const p of [...line]) {
    if(!isNaN(Number(p))){
      numberString += String(p)
      break;
    }
  }

  for (const p of [...line].reverse()) {
    if(!isNaN(Number(p))){
      numberString += String(p)
      break;
    }
  }
  
  return Number(numberString);
  
}

export function read(path: string): string[] {
  return [];
}