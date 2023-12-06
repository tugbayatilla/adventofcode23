export function range(start: number, end: number, step: number = 1): number[] {
    const length = Math.max(Math.ceil((end - start) / step), 0);
    const range = Array(length);

    for (let idx = 0; idx < length; idx++, start += step) {
        range[idx] = start;
    }

    return range;
}