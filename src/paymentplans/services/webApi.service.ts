import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../../common/services/httpService/http.service';
import { PaymentRequest, PaymentResponse, PlateSearchResponse, PlateSearchRequest } from '../interfaces';

@Injectable()
export class WebApiService {

    constructor(private httpService: HttpService) { }


    private get baseUrl(): string {
        return '/api/sessions/PaymentPlan';
    }


    private get baseAccountUrl(): string {
        return '/api/sessions/PaymentPlanAccount';
    }


    public ezTagPayment(paymentPlanRequest: PaymentRequest): Promise<PaymentResponse> {
        const url = `${this.baseAccountUrl}/MakePayment`;
        return this.httpService.post(url, paymentPlanRequest);
    }


    public violationsPayment(paymentPlanRequest: PaymentRequest): Promise<PaymentResponse> {
        const url = `${this.baseUrl}/MakePayment`;
        return this.httpService.post(url, paymentPlanRequest);
    }


    public ezTagSearchPaymentPlans(): Promise<PlateSearchResponse> {
        const url = `${this.baseAccountUrl}/PaymentPlanAccountSearch`;
        return this.httpService.get(url);
    }


    public violationsPaymentPlansSearch(request: PlateSearchRequest): Promise<PlateSearchResponse> {
        const url = `${this.baseUrl}/PaymentPlanSearch`;
        return this.httpService.post(url, request);
    }

}
