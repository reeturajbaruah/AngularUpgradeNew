import { Inject, Injectable } from '@angular/core';
import { ResponseErrorService, ToasterService, HttpService } from 'common/services';

@Injectable()
export class DeliveryMethodApiService {
    baseUrl = '/api/sessions';

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService,
        private toaster: ToasterService
    ) { }

    async updateMailingInfo(request) {
        const endpoint = '/NewAccountPersonalInfo/UpdateMailingInfo';
        const endpointUrl = `${this.baseUrl}${endpoint}`;

        const response: any = await this.httpService.post(endpointUrl, request);

        return this.parseResponse(response);
    }

    private parseResponse(response) {
        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
        else {
            this.toaster.show('Error', response.errors[0].message);
        }
    }
}
