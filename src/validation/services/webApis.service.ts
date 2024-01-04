import { Injectable, Inject } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { HttpService } from '../../common/services/httpService/http.service';

export interface BaseBankAccountRequest {
    accountType: string;
    routingNumber: string;
    accountNumber: string;
}

@Injectable()
export class WebApisService {

    constructor(
        private httpService: HttpService
    ) { }
    
    public validateRoutingNumber(request: BaseBankAccountRequest): Promise<BaseResponse> {
        const url = 'api/sessions/Billing/ValidateEFTRouting';
        return this.httpService.post(url, request);
    }
}
