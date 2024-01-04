module HCTRA.Service {
    export interface IObjectUtilService {
        areEqual(firstObj: object, secondObj: object): boolean;
        deepCompare(firstObj: object, secondObj: object): boolean;
        clearShallowObject(objIn: object): void;
        toLowerCaseKeys(objIn: object): object;
        toCapitalizedCaseKeys<T>(objIn: object, keyArray: string[]): T;
        hasAnyOfKeysInList(obj: object, keyArray: string[]): boolean;
    }

    export class ObjectUtilService implements IObjectUtilService {

        static $inject = [];

        constructor() { }

        /**
         * @deprecated 
         * import { isEqual } from 'lodash' instead of using this function
         */
        public areEqual = (firstObj, secondObj) => { // part of service exclusively for unit testing purposes

            if ((firstObj == null) && (secondObj == null)) // neither exists
                return true;
            else if (!(firstObj && secondObj)) // one exists, the other does not
                return false;

            if (angular.isObject(firstObj) && angular.isObject(secondObj)) {

                const localCount = Object.keys(secondObj).length;
                const memCount = Object.keys(firstObj).length;

                if (localCount !== memCount) // not the same number of properties
                    return false;
                else if (localCount === 0 && memCount === 0) // both empty objects
                    return true;

                if (!this.deepCompare(firstObj, secondObj)) // if different
                    return false;
            }

            return true;
        };

        public deepCompare = (firstObj, secondObj) => { // returns true if update is needed, else undefined
            for (const key in firstObj) {
                if (firstObj.hasOwnProperty(key)) {
                    if (angular.isObject(firstObj[key]) && angular.isObject(secondObj[key])) {
                        return this.areEqual(firstObj[key], secondObj[key]);
                    }
                    else {
                        if (firstObj[key] !== secondObj[key]) {
                            return false;
                        }
                    }
                }
            }

            return true;
        };

        public clearShallowObject = (objIn) => {
            for (const prop in objIn) {
                if (objIn.hasOwnProperty(prop)) {
                    delete objIn[prop];
                }
            }
        };

        public toLowerCaseKeys = (objIn) => {
            const objInCopy = angular.copy(objIn);
            for (const prop in objInCopy) {
                if (objInCopy.hasOwnProperty(prop)) {
                    objInCopy[prop.toLowerCase()] = objInCopy[prop];
                    if (prop.toLowerCase() !== prop) {
                        delete objInCopy[prop];
                    }
                }
            }
            return objInCopy;
        };

        /**
         * @deprecated 
         * This is actually a private function for toCapitalizedCaseKeys(objIn, keyArray)
         */
        public replaceKeyWithCapitalized = (obj, prop) => {
            const propCap = prop.charAt(0).toUpperCase() + prop.slice(1);
            obj[propCap] = obj[prop];
            if (propCap !== prop) {
                delete obj[prop];
            }
        };

        /**
         * @deprecated 
         * import { capitalizeKeys } from 'common/utilities' instead of using this function
         */
        public toCapitalizedCaseKeys = (objIn, keyArray) => {
            const objInCopy = angular.copy(objIn);
            if (keyArray) {
                for (const key of keyArray) {
                    if (objInCopy.hasOwnProperty(key)) {
                        this.replaceKeyWithCapitalized(objInCopy, key);
                    }
                }
            } else {
                for (const prop in objInCopy) {
                    if (objInCopy.hasOwnProperty(prop)) {
                        this.replaceKeyWithCapitalized(objInCopy, prop);
                    }
                }
            }
            return objInCopy;
        };

        public hasAnyOfKeysInList = (obj, keyArr) => {
            for (const key of keyArr) {
                if (obj.hasOwnProperty(key)) {
                    return true;
                }
            }
            return false;
        };
    }
}


(function () {
    "use strict";
    angular.module("HCTRAModule").service("objectUtilService", HCTRA.Service.ObjectUtilService);
}());