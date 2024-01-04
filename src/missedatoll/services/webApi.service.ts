import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../../common/services/httpService/http.service';

@Injectable()
export class WebApiService {

    constructor(private httpService: HttpService) { }


    private readonly baseUrl = '/api/sessions/MissedAToll';


    public async checkMatEligibility(request: any): Promise<any> {
        const url = `${this.baseUrl}/CheckEligibility`;
        return await this.httpService.post(url, request);
    }

    public async matMakePayment(request: any): Promise<any> {
        const url = `${this.baseUrl}/MakePayment`;
        return await this.httpService.post(url, request);
    }
}
