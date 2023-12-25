export const findNumbers = (line: string): number[] => {
    const pattern = /(\d+)\b/g;
    const regex = new RegExp(pattern);
    const matches = line.match(regex);

    if (matches) return matches.map(Number);

    return [];
};

export const findSignedNumbers = (line: string): number[] => {
    const pattern = /-?(\d+)\b/g;
    const regex = new RegExp(pattern);
    const matches = line.match(regex);

    if (matches) return matches.map(Number);

    return [];
};