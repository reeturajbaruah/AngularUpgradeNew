import { Inject, Injectable } from '@angular/core';
import { ResponseErrorService, ToasterService, HttpService } from 'common/services';


@Injectable()
export class RebillApiService {

    private urlForUpdateRebillAmount = '/api/sessions/UpdateRebillAmount/';

    constructor(private httpService: HttpService,
        private responseErrorService: ResponseErrorService,
        private toasterService: ToasterService) {
    }

    async updateRebillAmount(payload) {
        const endpoint = `${this.urlForUpdateRebillAmount}UpdateRebillAmount`;
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
