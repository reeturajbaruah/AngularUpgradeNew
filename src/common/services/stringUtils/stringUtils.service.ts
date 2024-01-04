import { Injectable } from '@angular/core';

@Injectable()
export class StringUtilsService {

  constructor() { }

  public includes(inString: string, search: string, start: number): boolean {
    if (!isNaN(Number(start))) {
      start = 0;
    }

    if (!search) {
      return false;
    }
    else if (start + search.length > inString.length) {
      return false;
    }
    else {
      return inString.indexOf(search, start) !== -1;
    }
  }

  public getUrlParameter(searchKey: string, queryString: string): string {
    searchKey = searchKey.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

    const regex = new RegExp('[\\?&]' + searchKey + '=([^&#]*)');
    const results = regex.exec('?' + queryString);

    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  public getParameterArray(queryString: string): string[][] {
    const decodedQueryString = decodeURIComponent(queryString);
    const queryArray = decodedQueryString.split('&');
    const results: string[][] = [];

    for (const query of queryArray) {
      const paramKeyValue = query.split('=');
      results.push(paramKeyValue);
    }

    return results;
  }

  public getParameterObject(queryString: string): { [key: string]: string } {
    if (queryString === '') { // if empty string an empty object is expected
      return {};
    }

    const paramDictionary = {};
    const paramArray = queryString.split('&');

    for (const param of paramArray) {
      const keyValueSplitArr = param.split('=');
      const decodedKey = decodeURIComponent(keyValueSplitArr[0]);
      const decodedValue = decodeURIComponent(keyValueSplitArr[1]);
      paramDictionary[decodedKey] = !keyValueSplitArr[1] ? null : decodedValue; // so params with no value come out as null
    }
    return paramDictionary;
  }
}
