export interface Game {
    id: number,
    red?: number | null,
    green?: number| null,
    blue?: number | null,
    sessions?: {red?: number | null,
        green?: number| null,
        blue?: number | null,}[]
}