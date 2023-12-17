import { Identity } from "../../CurrentDayAndPart";

export const identity = new Identity(6, 1);


/*

    
    interface Race {
        time: number,
        distance: number
    }

    - Parse data to Race[]
    - FOREACH race
        - FOREACH race.time
            - calculate distance calculateDistance(duration:number, race: Race): number
        - increase the counter for the race
    - multiply the couters for each race

*/
