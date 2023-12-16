
const Day = "day5"; // <-- change this when you copy
const Part = "part1"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;

/*

Almanac part 1 design

 - parse seed list as number[]
 - parse foreach map definitions as Map from file - order is important
 - arrange ranges for a map definition 
 - calculate mapping number using ranges
 - use map list to find location lists
 - find minimum from the location list

type Range = {
    source: number,
    destination: number,
    length: number
}

interface Map {
    from: string,
    to: string,
    ranges: Range[]
}


findLocations(seeds: number[], maps: Map[]): number[] {
    referenceSeed
    foreach seed
        foreach map - map order is important
            referenceSeed = find seed mapping using referenceSeed
        put into the list
}

*/