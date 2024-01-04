import { Inject, Injectable } from '@angular/core';
import { ResponseErrorService, ToasterService, HttpService } from 'common/services';

@Injectable()
export class KioskApiService {

    private url = '/api/sessions/AddPaymentDetails/';

    constructor(private httpService: HttpService,
        private responseErrorService: ResponseErrorService,
        private toasterService: ToasterService) {
    }

    async getKioskStoreConfig(machineName) {
        const endpoint = `${this.url}GetKioskStoreConfig?machineName=` + machineName;
        const response = await this.get(endpoint);
        return response;
    }
     
    private async get(endpoint) {
        const response: any = await this.httpService.get(endpoint);
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
