export interface Game {
    id: number,
    red?: number | null,
    green?: number| null,
    blue?: number | null,
    sessions?: Session[]
}

export interface Session{
    red?: number | null,
    green?: number| null,
    blue?: number | null,
}