import { Injectable } from '@angular/core';
import { INewsCms } from 'news/models/news.interface';

@Injectable()
export class NewsCmsHelper {

    private cmsData: INewsCms;
    private keys: string[];

    constructor() { }

    initialize(data: INewsCms) {
        this.cmsData = data;
        this.keys = Object.keys(this.cmsData);
    }

    getVal(param: string) {
        const keyName = this.keys.find(key => key === param);
        if (keyName) {
            return this.cmsData[keyName];
        }
        return '';

    }

    reset() {
        this.cmsData = {} as INewsCms;
        this.keys = [];
    }

}
