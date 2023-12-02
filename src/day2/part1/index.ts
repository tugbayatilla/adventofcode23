export const Day = "day2"; // <-- change this when you copy
export const SourceFolderPath = `./src/${Day}/part1/`;

export function evaluate(game: { id: number; red?: number | null; green?: number }): number {
  if (game.red !== null && game.red! <= 12) return game.id;
  if (game.green !== null && game.green! <= 13) return game.id;
  
  return 0;
}
