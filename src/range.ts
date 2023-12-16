export function range(start: number, end: number, step: number = 1): number[] {
    const length = Math.max(Math.ceil((end - start) / step), 0);
    const range = Array(length);

    for (let idx = 0; idx < length; idx++, start += step) {
        range[idx] = start;
    }

    return range;
}

export function findRange(start: number, end: number, step: number = 1): number[] {
    const length = Math.max(Math.ceil((end - start) / step), 0);
    const range = Array(length);

    for (let idx = 0; idx < length; idx++, start += step) {
        range[idx] = start;
    }

    return range;
}

export function inRange(num: number, lowerBound: number, upperBound: number): [inRange: boolean, index: number] {
    return [num >= lowerBound && num <= upperBound, num - lowerBound];
}