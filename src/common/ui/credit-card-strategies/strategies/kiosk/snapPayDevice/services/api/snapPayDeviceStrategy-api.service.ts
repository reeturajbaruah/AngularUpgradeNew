import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SnapPayDeviceStrategyService {

    constructor(private httpClient: HttpClient){
    }

    async postRequestCard(machineName, sessionKey ): Promise<any> {
        return this.httpClient.post(`/api/sessions/SnapPayConfiguration/RequestCard`,
            { machineName, sessionKey },
            {
                observe: 'response',
                withCredentials: false,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

    }

    async postRequestPinPad(machineName, sessionKey): Promise<any> {
        return this.httpClient.post(`/api/sessions/SnapPayConfiguration/RequestPinPad`,
            { machineName, sessionKey },
            {
                observe: 'response',
                withCredentials: false,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

    }

    async postCreateSession(machineName): Promise<any> {
        return this.httpClient.post(
            `/api/sessions/SnapPayConfiguration/CreateSession`,
            { machineName },
            {
                observe: 'response',
                withCredentials: false,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }

    async postEndSession(machineName, sessionKey): Promise<any> {
        return this.httpClient.post(`/api/sessions/SnapPayConfiguration/EndSession`,
            { machineName , sessionKey },
            {
                observe: 'response',
                withCredentials: false,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }

    async GetStatus(machineName): Promise<any> {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('machineName', machineName);
        const response = await (
            this.httpClient.get(
                `/api/sessions/SnapPayStatus/GetStatus`,
                {
                    observe: 'response',
                    withCredentials: false,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: queryParams
                }));
        return response;
    }
}






 
