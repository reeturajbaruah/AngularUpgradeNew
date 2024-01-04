import { Injectable } from '@angular/core';
import { WebStorageConst } from '../../../constants/webstorage.constants';
import { Location } from '@angular/common';

export interface IWebStorageService {
    setKeyValue(key: string, value: any): void;
    getValue(key: string): any;
    validateOnValue(key: string, inRoute: string): void | boolean;
    removeEntry(key: string): void;
    addEmailAddressToViolationsData(email: string): void;
}

@Injectable()
export class WebStorageService {

    constructor(
        private webStorageConst: WebStorageConst,
        private location: Location
    ) { }

    public setKeyValue(key: string, value: any) {
        if (sessionStorage) {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    }

    public getValue(key: string) {
        let val = null;
        if (sessionStorage) {
            val = JSON.parse(sessionStorage.getItem(key));
        }
        return val;
    }

    public validateOnValue(key: string, inRoute: string) { 
        if (this.getValue(key) === null && sessionStorage) {
            this.location.replaceState(inRoute);   
        } else {
            return true;
        }
    }

    public removeEntry(key: string) {
        if (sessionStorage) {
            sessionStorage.removeItem(key);
        }
    }

    public addEmailAddressToViolationsData(email: string) {
        const violationsData = this.getValue(this.webStorageConst.violationsLogData);
        violationsData.violationsEmail = email;
        this.setKeyValue(this.webStorageConst.violationsLogData, violationsData);
    }
}


