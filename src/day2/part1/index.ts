export const Day = "day2"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part1/`;

export function evaluate(game: { id: number; red: number; }): number {
  if(game.red <= 12) return game.id;
  
  return 0;
}
