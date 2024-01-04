
import { Inject, Injectable } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { ResponseErrorService, HttpService } from 'common/services';
import { AccountSearchRequest, AccountSearchResponse, OnlineAccessLoginInfo, SetupDataResponse } from '../interfaces';


@Injectable()
export class WebApiService {

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService
    ) { }

    readonly SETUP_URL = 'api/firstTimeLogin/setup';
    readonly GET_ACCOUNT = 'api/firstTimeLogin/getAccount';

    private get baseUrl() {
        return '';
    }

    public async searchData(): Promise<SetupDataResponse> {
        //todo: fix this!
        const url = '/api/sessions/ForgotPassword/SetupForgotPasswordAccount';

        const response: SetupDataResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async setupAccount(request: OnlineAccessLoginInfo): Promise<BaseResponse> {
        const url = this.SETUP_URL;

        const response: BaseResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
        }

        return response;
    }

    public async accountSearch(request: AccountSearchRequest): Promise<AccountSearchResponse> {
        const url = this.GET_ACCOUNT;

        const response: AccountSearchResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);            
            return response;
        } else {
            response.hasError = true;
        }

        return response;
    }
}
