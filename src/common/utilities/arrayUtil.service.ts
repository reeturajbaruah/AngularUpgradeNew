export const intersect = <T, T2>(arr1: T[], arr2: T2[], predicateFunc: (elem1: T, elem2: T2) => boolean): T[] => arr1.filter(elem1 => arr2.some(elem2 => predicateFunc(elem1, elem2)));

//This doesn't get used and should be removed
export const difference = <T, T2>(arr1: T[], arr2: T2[], predicateFunc: (elem1: T, elem2: T2) => boolean): T[] => arr1.filter(elem1 => !arr2.some(elem2 => predicateFunc(elem1, elem2)));

export const find = <T>(inArr: T[], predicateFunc: (elem: T) => boolean): T => {

    for (const item of inArr) {
        if (predicateFunc(item)) {
            return item;
        }
    }
};

export const toDictionary = <T>(inArr: T[], cb: (elem: T) => string | number) => {

    const outObj: { [key: string]: T } = {};
    for (const elem of inArr) {
        outObj[cb(elem).toString()] = elem;
    }

    return outObj;
};
