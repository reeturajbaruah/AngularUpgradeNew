import { Injectable } from '@angular/core';
import { ResponseErrorService, ToasterService, HttpService } from 'common/services';
import { IAccountInfo, IEmailUsPayload } from '../../models/email-us.models';


@Injectable()
export class EmailUsApiService {

    private url = '/api/sessions/HelpAndSupport/';

    constructor(private httpService: HttpService,
        private responseErrorService: ResponseErrorService,
        private toasterService: ToasterService)
    { }

    async getAccountInfo(): Promise<IAccountInfo> {
        const endpoint = `${this.url}GetHelpAndSupportInformation`;
        const response = await this.httpService.get(endpoint) as IAccountInfo;
        return this.checkError(response);
    }

    async sendHelpAndSupportEmail(request: IEmailUsPayload) {
        const endpoint = `${this.url}SendHelpAndSupportEmail`;
        return await this.post(request, endpoint);
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
