import { Identity, callAnswerIfSelected } from "../../CurrentDayAndPart";
import { findNumbers } from "../../findNumbers";
import { inRange } from "../../range";
import { read } from "../../read";


const Day = "day5"; // <-- change this when you copy
const Part = "part1"; // <-- change this when you copy
export const DayAndPart = `${Day}(${Part[0]}${Part[Part.length - 1]})`;
export const SourceFolderPath = `./src/${Day}/${Part}/`;
const identity = new Identity(5, 1);
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

export interface MapRange {
    src: number,
    dest: number,
    len: number
}

export interface Map {
    from: string,
    to: string,
    ranges: MapRange[]
}

export const createMapRange = (line: string): MapRange => {
    const numbers = findNumbers(line);
    return { src: numbers[1], dest: numbers[0], len: numbers[2] };
}

export const createMap = (lines: string[]): Map => {
    const mapLine = lines[0];

    const regex = new RegExp('(\\w+)-to-(\\w+)');
    const matches = mapLine.match(regex);

    const map: Map = { from: '', to: '', ranges: [] };

    if (matches) {
        map.from = matches[1];
        map.to = matches[2];
    }

    lines.slice(1).map(line => map.ranges.push(createMapRange(line)));

    return map;
}

export const findMaps = (lines: string[]): Map[] => {
    const mapsArray = lines.slice(1);

    let maps: Map[] = [];
    let mapLines: string[] = []

    mapsArray.forEach(line => {

        if (line.includes('map:')) {

            if (mapLines.length > 0) {
                const map = createMap(mapLines);
                maps.push(map);
                mapLines = [];
            }
        }

        mapLines.push(line);
    });
    if (mapLines.length > 0) {
        const map = createMap(mapLines);
        maps.push(map);
        mapLines = [];
    }



    return maps;
}


export const findMappingValue = (seed: number, map: Map): number => {
    for (const range of map.ranges) {
        const isInRange = inRange(seed, range.src, range.src + range.len - 1);
        if (isInRange[0]) {
            return range.dest + isInRange[1];
        }

    }
    return seed;
}

export function findLocation(seed: number, maps: Map[]): number {

    let currentSeed = seed;
    maps.forEach(map => {
        const nextValue = findMappingValue(currentSeed, map);
        currentSeed = nextValue;
    });
    return currentSeed;
}

export async function answer(filePath: string): Promise<number> {
    return read(filePath).then((lines) => {
        const seeds = findNumbers(lines[0]);

        const maps = findMaps(lines);

        const locations = seeds.map(s => findLocation(s, maps));

        return locations.sort((a, b) => a - b)[0];
    });
}

callAnswerIfSelected(identity, answer);