import { Inject, Injectable } from '@angular/core';
import { ResponseErrorService, HttpService } from 'common/services';


@Injectable()
export class PendingFundsApiService {


    constructor(private httpService: HttpService,
        private responseErrorService: ResponseErrorService) {
    }

    async rebillAmt() {

        const endpoint = '/api/account/makepayment/figurePayment';
        const res = await this.httpService.get(endpoint);

        return this.checkResponse(res);
    }

    async updateAccount(request) {

        const endpoint = '';
        const res = await this.httpService.post(endpoint, request);

        return this.checkResponse(res);
    }

    private checkResponse(res) {

        if (this.responseErrorService.isErrorFree(res)) {
            this.responseErrorService.displayAlertsFromResponse(res);
            return res;
        }
    }

}

