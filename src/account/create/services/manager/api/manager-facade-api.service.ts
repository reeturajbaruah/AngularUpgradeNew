import { Inject, Injectable } from '@angular/core';
import { ResponseErrorService, HttpService } from 'common/services';

@Injectable()
export class ManagerFacadeApiService {


    private baseUrl = '/api/sessions';

    constructor(private httpService: HttpService,
        private responseErrorService: ResponseErrorService) {
    }

    async getVehicles() {
        const endpoint = '/AddEZTag/GetAccountTags';
        const endpointUrl = `${this.baseUrl}${endpoint}`;

        return this.get(endpointUrl);

    }

    async getPersonalInfo() {

        const endpoint = '/PersonalInfo/GetPersonalInfo';
        const endpointUrl = `${this.baseUrl}${endpoint}`;

        return this.get(endpointUrl);

    }

    async getBillingInfo() {

        const endpoint = '/AddPaymentDetails/GetBillingInfo';
        const endpointUrl = `${this.baseUrl}${endpoint}`;
        return this.get(endpointUrl);

    }

    private async get(url: string) {

        const response: any = await this.httpService.get(url);
        // todo: move it to base error service

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }

    }


}

