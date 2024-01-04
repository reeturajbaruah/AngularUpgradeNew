export const compare = (a: string, b: string, returnVal = false) => {
    if (!a || !b) {
        return returnVal;
    }

    return a.toLocaleLowerCase() === b.toLocaleLowerCase();
};
