import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SnapPayIframeStrategyService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getSnapPayConfiguration(styles): Observable<any> {
        const url = '/api/sessions/SnapPayConfiguration/GetConfiguration';
     
        const urlParams = {
            observe: 'response' as 'body',
            withCredentials: false
        };
        return this.httpClient.post(url, styles, urlParams);
    };
}

