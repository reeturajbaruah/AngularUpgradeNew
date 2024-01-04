import { Inject, Injectable } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { ResponseErrorService, HttpService } from 'common/services';

export interface SimplePaymentMethod {

    lastFour: string;
    expirationDate: Date;
    isExpired: boolean;
    bigImage: string;
    smallImage: string;
    paymentType: string;
    isBlocked: boolean;
}

export interface GetPaymentMethodDataResponse extends BaseResponse {
    primaryPaymentMethod: SimplePaymentMethod;
    hasPrimary: boolean;
    hasPaymentMethod: boolean;
}

@Injectable()
export class PaymentMethodService {

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService
    ) { }

    private get baseUrl() {
        return `/api/sessions/`;
    }

    public async getPaymentMethodData(): Promise<GetPaymentMethodDataResponse> {

        const url = `${this.baseUrl}PaymentMethodData/GetPaymentMethodData`;

        const response: GetPaymentMethodDataResponse = await this.httpService.get(url);

        return this.repoResponseHandler(response);
    }

    private repoResponseHandler = <T extends BaseResponse>(res: T) => {

        this.displayAlerts(res);
        this.displayErrors(res);

        return res;
    };

    private displayAlerts(res: BaseResponse) {
        if (Array.isArray(res.alerts) && res.alerts.length > 0) {
            this.responseErrorService.displayAlertsFromResponse(res);
        }
    };

    private displayErrors(res: BaseResponse) {
        if (Array.isArray(res.errors) && res.errors.length > 0) {
            this.responseErrorService.displayErrorsFromResponse(res);
        }
    };
}
