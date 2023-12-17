export class Identity {
    
    constructor(public day: number, public part: number) {}
    get show(): string { return `d${this.day}p${this.part}` }
    getTestPath = () : string => `./src/day${this.day}/part${this.part}/test.data`;
    getPuzzlePath = () : string => `./src/day${this.day}/part${this.part}/puzzle.data`;
}

const SelectedIdentities: Identity[] = [new Identity(5,21)];

export const isIdentitySelected = (identiy: Identity): boolean => {
    const identityJSON = JSON.stringify(identiy);

    for (const selectedIdentity of SelectedIdentities) {
        if(identityJSON == JSON.stringify(selectedIdentity))
            return true;
    }
    return false;
}



export const callAnswerIfSelected = (identity: Identity, answer: (filePath: string) => Promise<number>): void => {

    if (isIdentitySelected(identity)){
        answer(identity.getPuzzlePath())
            .then((sum) => console.log(`(${identity.show}): ${sum}`))
    }
}
