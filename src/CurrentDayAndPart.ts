process.env.DayAndPart = 'day5(p1)';
const SelectedIdentities: Identity[] = [{ day: 5, part: 1 }];
export type Identity = {
    day: number,
    part: number
}
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
        const filePath = `./src/day${identity.day}/part${identity.part}/puzzle.data`;

        answer(filePath)
            .then((sum) => console.log(`(d${identity.day}p${identity.part}): ${sum}`))
    }
}
