import { DatePipe } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import {
    GetYearlySummaryInfoRequest,
    GetYearlySummaryInfoResponse,
    InvoiceMonths,
    MonthlyInvoiceResponse,
    LocationCoordinatesRequest,
    LocationCoordinatesResponse,
    MonthlyInvoiceRequest,
    MonthlyStatementRequest,
    MonthlyStatementResponse,
    ReceiptDetailsRequest,
    ReceiptDetailsResponse,
    SearchAccountActivityRequest,
    SearchAccountActivityResponse,
    SetupReceiptRequest,
    SetupReceiptsResponse,
    SetUpStatementsPageResponse,
    SetupYearlyPageResponse,
    ISearchTransactionsResponse
} from 'accountActivity/interfaces';
import { HttpService, ResponseErrorService } from 'common/services';
import { cloneDeep } from 'lodash';


@Injectable()
export class WebApisService {

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService,
        private datePipe: DatePipe
    ) { }

    private get baseUrl() {
        return `/api/sessions/AccountActivity/`;
    }


    public async setupYearlyPage() {
        const url = `${this.baseUrl}SetupYearlyPage`;
        const response: SetupYearlyPageResponse = await this.httpService.get(url);
        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async getYearlySummary(data: GetYearlySummaryInfoRequest) {
        const url = `${this.baseUrl}GetYearlySummary`;
        const response: GetYearlySummaryInfoResponse = await this.httpService.post(url, data);
        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async setUpStatementsPage() {

        const url = `${this.baseUrl}SetupStatementPage`;

        const response: SetUpStatementsPageResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async getMonthlyStatement(data: MonthlyStatementRequest) {

        const url = `${this.baseUrl}GetStatement`;

        const response: MonthlyStatementResponse = await this.httpService.post(url, data);
        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async searchAccountActivity(data: SearchAccountActivityRequest) {
        const url = `${this.baseUrl}SearchAccountActivity`;

        const request = cloneDeep(data);
        request.dateFrom = request.dateFrom;
        request.dateTo = request.dateTo;

        const response: SearchAccountActivityResponse = await this.httpService.post(url, request);
        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async locationCoordinates(data: LocationCoordinatesRequest) {
        const url = '/api/LocationCoordinates';
        const response: LocationCoordinatesResponse = await this.httpService.post(url, data);

        const responseHasErrors = Array.isArray(response.errors) && response.errors.length > 0;
        if (!responseHasErrors) {
            // If there are errors from this call, it should not alert the user
            return response;
        }
    }


    public async setupReceipts(data: SetupReceiptRequest) {

        const url = `${this.baseUrl}setupReceipts`;

        const response: SetupReceiptsResponse = await this.httpService.post(url, data);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }


    public async receiptDetails(data: ReceiptDetailsRequest) {

        const url = `${this.baseUrl}getReceipt`;

        const response: ReceiptDetailsResponse = await this.httpService.post(url, data);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async setupInvoicesPage() {
        const url = `${this.baseUrl}SetupInvoicesPage`;
        const response: InvoiceMonths = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async getMonthlyInvoice(data: MonthlyInvoiceRequest) {
        const url = `${this.baseUrl}GetInvoice`;
        const response: MonthlyInvoiceResponse = await this.httpService.post(url, data);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async setupSearchTransactions(data: SearchAccountActivityRequest) {
        const url = `${this.baseUrl}GetAccountActivityVM`;
        const response: ISearchTransactionsResponse = await this.httpService.post(url, data);
        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }
}
