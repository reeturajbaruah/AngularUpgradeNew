/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { cloneDeep as lodashCloneDeep, isEqual as lodashIsEqual } from 'lodash';

export function isEmpty(obj): boolean {
    return Object.entries(obj) && obj.constructor === Object;
}

export function isObject(obj): boolean {
    return obj !== null && (obj instanceof Object);
}

export function capitalizeKeys(obj, keyArray?: string[]): { [key: string]: any } {
    if (!isObject(obj)) { return obj; }

    const objCopy = lodashCloneDeep(obj);
    if (keyArray) {
        for (const key of keyArray) {
            replaceKeyWithCapitalized(objCopy, key);
        }
    } else {
        for (const prop in objCopy) {
            if (objCopy.hasOwnProperty(prop)) {
                replaceKeyWithCapitalized(objCopy, prop);
            }
        }
    }
    return objCopy;
}

function replaceKeyWithCapitalized(obj: { [key: string]: any }, prop: string): void {
    const propCap = prop.charAt(0).toUpperCase() + prop.slice(1);
    if ((obj[propCap] === undefined || obj[propCap] === null)
        && (obj[prop] !== undefined && obj[prop] !== null)) {
        obj[propCap] = obj[prop];
    }
    if (propCap !== prop) {
        delete obj[prop];
    }
}

export function isUndefined(o) {
    return typeof o === 'undefined';
}

/*
 * a Typed deep clone
 */
export function cloneDeep<T>(obj: T): T {
    return lodashCloneDeep(obj) as T;
}

/**
 * Object compare of same type
 * 
 * @param objA 
 * @param objB 
 * @returns boolean
 */
export function isEqual<T>(objA: T, objB: T): boolean {
    return lodashIsEqual(objA, objB);
}
