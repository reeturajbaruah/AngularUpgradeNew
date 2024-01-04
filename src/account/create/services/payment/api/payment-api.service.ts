import { Inject, Injectable } from '@angular/core';
import { ResponseErrorService, ToasterService, HttpService } from 'common/services';

@Injectable()
export class PaymentApiService {

    private url = '/api/sessions/AddPaymentDetails/';
    private urlForRemoveBillingMethod = '/api/account/manageBilling/';

    constructor(private httpService: HttpService,
        private responseErrorService: ResponseErrorService,
        private toasterService: ToasterService) {

    }

    async addCreditCard(payload) {
        const endpoint = `${this.url}AddPaymentCreditCard`;
        return await this.post(payload, endpoint);
    }

    async updateCreditCard(payload) {
        const endpoint = `${this.url}UpdatePaymentCreditCard`;
        return await this.post(payload, endpoint);
    }

    async addBankAccount(payload) {
        const endpoint = `${this.url}AddPaymentBankAccount`;
        return await this.post(payload, endpoint);
    }

    async updateBankAccout(payload) {
        const endpoint = `${this.url}UpdatePaymentBankAccount`;
        return await this.post(payload, endpoint);
    }

    async removeBillingMethod(payload) {
        const endpoint = `${this.urlForRemoveBillingMethod}removeBillingMethod`;
        return await this.post(payload, endpoint);
    }

    private async post(payload, endpoint) {
        const response: any = await this.httpService.post(endpoint, payload);
        return this.checkError(response);
    }

    private checkError(response) {
        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        } else {
            this.toasterService.show('Error', response.errors[0].message);
        }
    }

}
