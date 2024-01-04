import { Inject, Injectable } from '@angular/core';
import { ResponseErrorService, HttpService } from 'common/services';

@Injectable()
export class CheckoutApiService {

    private url = '/api/sessions/Checkout/';

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService) {
    }


    async checkout(req) {

        const endpoint = `${this.url}CheckoutPayment`;
        const res = await this.httpService.post(endpoint, req);
        return this.checkError(res);
    }

    async makePaymentOnWeb(req) {
        const endpoint = `${this.url}MakeAccountCreationPayment`;
        const res = await this.httpService.post(endpoint, req);
        return this.checkError(res);

    }

    async makePaymentOnKiosk(req) {
        const endpoint = `${this.url}MakeKioskPayment`;
        const res = await this.httpService.post(endpoint, req);
        return this.checkError(res);

    }

    private async post(endpoint, req) {
        return await this.httpService.post(endpoint, req);

    }

    private checkError(res) {
        if (this.responseErrorService.isErrorFree(res)) {
            this.responseErrorService.displayAlertsFromResponse(res);
            return res;
        }
    }
}
