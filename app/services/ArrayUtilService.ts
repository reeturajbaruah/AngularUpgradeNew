module HCTRA.Service {
    export interface IArrayUtilService {
        /** Returns the intersect between the two sets "arr1" and "arr2".
        Accepts a predicate function. Two elements are considered "equal" when the predicate returns true.*/
        intersect<T, T2>(arr1: T[], arr2: T2[], predicateFunc: (elem1: T, elem2: T2) => boolean): T[];
        difference<T, T2>(arr1: T[], arr2: T2[], predicateFunc: (elem1: T, elem2: T2) => boolean): T[];
        find<T>(inArr: T[], predicateFunc: (elem: T) => boolean): T;
        toDictionary<T>(inArr: T[], cb: (elem: T) => string | number): { [key: string]: T };
    }
}

module HCTRA.Service {

    export class ArrayUtilService implements IArrayUtilService {
        
        intersect = <T, T2>(arr1: T[], arr2: T2[], predicateFunc: (elem1: T, elem2: T2) => boolean): T[] => {

            return arr1.filter(elem1 => arr2.some(elem2 => predicateFunc(elem1, elem2)));
        }

        difference = <T, T2>(arr1: T[], arr2: T2[], predicateFunc: (elem1: T, elem2: T2) => boolean): T[] => {

            return arr1.filter(elem1 => !arr2.some(elem2 => predicateFunc(elem1, elem2)));
        }

        find = <T>(inArr: T[], predicateFunc: (elem: T) => boolean): T => {

            for (let item of inArr) {
                if (predicateFunc(item)) {
                    return item;
                }
            }
        }

        toDictionary = <T>(inArr: T[], cb: (elem: T) => string | number) => {

            const outObj: { [key: string]: T } = {};
            for (const elem of inArr) {
                outObj[cb(elem).toString()] = elem;
            }

            return outObj;
        }
    }
}

(function () {

    'use strict';

    angular.module('HCTRAModule').service('arrayUtilService', HCTRA.Service.ArrayUtilService);

} ());