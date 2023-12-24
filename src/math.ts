function greatestCommonDivisor(a: number, b: number): number {
    if (b === 0) return a;
    return greatestCommonDivisor(b, a % b);
}

export function leastCommonMultiple(a: number, b: number): number {
    return (a * b) / greatestCommonDivisor(a, b);
}
