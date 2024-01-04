module HCTRA.Service {

    // export interface IStringUtils {
    //     includes(inString, search, start): boolean;
    //     getUrlParameter(searchKey, queryString): string;
    //     getParameterArray(queryString: string): string[][];
    //     getParameterObject(queryString: string): { [key: string]: string };
    // }

    // export class StringUtils implements IStringUtils {
    //     public includes = (inString: string, search: string, start: number) => {

    //         if (!angular.isNumber(start)) {
    //             start = 0;
    //         }

    //         if (!search) {
    //             return false;
    //         }
    //         else if (start + search.length > inString.length) {
    //             return false;
    //         }
    //         else {
    //             return inString.indexOf(search, start) !== -1;
    //         }
    //     }

    //     public getUrlParameter = (searchKey: string, queryString: string) => {

    //         searchKey = searchKey.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    //         var regex = new RegExp("[\\?&]" + searchKey + "=([^&#]*)");
    //         var results = regex.exec("?" + queryString);
    //         return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    //     }

    //     public getParameterArray = (queryString: string): string[][] => {

    //         var decodedQueryString = decodeURIComponent(queryString);
    //         var queryArray = decodedQueryString.split("&");
    //         var results: string[][] = [];

    //         for (var index = 0; index < queryArray.length; index++) {
    //             var paramKeyValue = queryArray[index].split("=");
    //             results.push(paramKeyValue);
    //         }

    //         return results;
    //     }

    //     public getParameterObject = (queryString: string): { [key: string]: string } => {

    //         if (queryString === '') // if empty string an empty object is expected
    //             return {};

    //         const paramDictionary = {};
    //         const paramArray = queryString.split("&");

    //         for (var i = 0; i < paramArray.length; i++) {
    //             const keyValueSplitArr = paramArray[i].split("=");
    //             const decodedKey = decodeURIComponent(keyValueSplitArr[0]);
    //             const decodedValue = decodeURIComponent(keyValueSplitArr[1]);
    //             paramDictionary[decodedKey] = !keyValueSplitArr[1] ? null : decodedValue; // so params with no value come out as null
    //         }
    //         return paramDictionary;
    //     }
    // }
}

(function () {

    "use strict";

    // angular.module("HCTRAModule").service("stringUtils", HCTRA.Service.StringUtils);
}());