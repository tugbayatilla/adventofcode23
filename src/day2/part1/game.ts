export interface Game {
    id: number,
    sessions: Session[]
}

export interface Session{
    red?: number | null,
    green?: number| null,
    blue?: number | null,
}