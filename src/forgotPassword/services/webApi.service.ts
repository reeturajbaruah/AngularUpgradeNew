import { DatePipe } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ResponseErrorService, HttpService } from 'common/services';
import { BaseResponse } from '../../common/interfaces';
import {
    ForgotPasswordAccountSearchRequest, ForgotPasswordAccountSearchResponse,
    ForgotPasswordSetupResponse,
    ResetPasswordRequest, ResetPasswordResponse
} from '../interfaces';

@Injectable()
export class WebApiService {

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService
    ) { }

    private get baseUrl() {
        return `/api/forgotPassword`;
    }

    public async setup(): Promise<ForgotPasswordSetupResponse> {
        const url = `/api/sessions/ForgotPassword/SetupForgotPasswordAccount`;

        const response: ForgotPasswordSetupResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async resetPassword(request: ResetPasswordRequest): Promise<ResetPasswordResponse> {
        const url = `${this.baseUrl}/reset`;

        const response: ResetPasswordResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async forgotPasswordAccountSearch(request: ForgotPasswordAccountSearchRequest): Promise<ForgotPasswordAccountSearchResponse> {
        const url = `${this.baseUrl}/getAccount`;

        const response: ForgotPasswordAccountSearchResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);            
            return response;
        } else {
            response.hasError = true;
        }

        return response;
    }
}
