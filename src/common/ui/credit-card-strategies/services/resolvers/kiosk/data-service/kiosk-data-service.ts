import { Injectable } from '@angular/core';

@Injectable()
export class KioskDataService {

    private data: any;

    setData(data) {
        this.data = data;
    }

    getData() {
        return { ...this.data };
    }

}
