import { Inject, Injectable } from '@angular/core';
import { ISetupAccountReq } from 'account/create/models/setup-account.model';
import { AccountService, ResponseErrorService, ToasterService, HttpService } from 'common/services';


@Injectable()
export class LoginFacadeApiService {

    baseUrl = '/api/sessions';

    constructor(private httpService: HttpService,
        private responseErrorService: ResponseErrorService,
        private toaster: ToasterService) {
    }

    async setupAccount(request: ISetupAccountReq) {
        const endpoint = '/PersonalBusinessData/SetupAccountStep1';
        const endpointUrl = `${this.baseUrl}${endpoint}`;

        const response: any = await this.httpService.post(endpointUrl, request);

        return this.parseResponse(response);

    }

    async setPersonalInfo(request) {
        const endpoint = '/PersonalBusinessDetails/SetPersonalInfo';
        const endpointUrl = `${this.baseUrl}${endpoint}`;

        const response: any = await this.httpService.post(endpointUrl, request);

        return this.parseResponse(response);

    }

    private parseResponse(response) {
        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        } else {
            this.toaster.show('Error', response.errors[0].message);

        }
    }

}
