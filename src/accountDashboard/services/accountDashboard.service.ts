import { Inject, Injectable } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { ResponseErrorService, HttpService, AccountSummaryAlertFilterService } from 'common/services';

export interface CurrentBalanceObj {
    currentBalance: number;
}

export interface GetAccountDataResponse extends BaseResponse {
    username: string;
    currentBalance: CurrentBalanceObj;
    emailAddress: string;
}

export interface GetAccountSummaryResponse extends BaseResponse {

    monthly: number;

    daily: number;

    yearlyAverage: number;

    acctSummary: SummaryGraphMonth[];
}

export interface SummaryGraphMonth {
    amt: number;
    amtType: string;
}

export interface EmailConfirmationRequest {
    emailValidationId: number;
}

export enum EmailConfirmationConstants {
    NOT_CONFIRMED = 1,
    JUST_CONFIRMED = 2,
    PREVIOUSLY_CONFIRMED = 3
}

export interface EmailConfirmationResponse extends BaseResponse {
    emailConfirmationStatus: EmailConfirmationConstants;
}

export interface CommonVehicleInfo {
    nickname: string;
    plateState: string;
    plateNumber: string;
    status: string;
}

export interface SimpleEzTag {
    vehicleInfo: CommonVehicleInfo;
    make: string;
    model: string;
    year: string;
}

export interface SimpleEzPlate {
    vehicleInfo: CommonVehicleInfo;
    startDate: Date;
    endDate: Date;
}

export interface VehicleSectionData {
    ezTags: SimpleEzTag[];
    ezPlates: SimpleEzPlate[];
    totalEzTagCount: number;
    totalEzPlateCount: number;
}

export interface GetVehiclesDataResponse extends BaseResponse {
    vehicleData: VehicleSectionData;
}

export interface TransactionRecord {
    trxnDate: Date;
    postedDate: Date;
    licensePlate: string;
    licenseState: string;
    licenseStateAndPlate: string;
    vehicleClassCode: string;
    transType: string;
    vehicleNickName: string;
    amount: number;
    locationName: string;
    laneName: string;
    latitude: number;
    longitude: number;
    initialIndex: string;
    agencyName: string;
    agencyContact: string;
    agencyWebsite?: string;
    agencyPhoneNumber?: string;
    agencyFullName?: string;
    hasLocationCoordinates: boolean;
    facilityName: string;
    plazaName: string;
    direction: string;
    customKey?: string;
}

export interface TransactionsSectionData {
    transactions: TransactionRecord[];
}

export interface GetTransactionsDataResponse extends BaseResponse {
    transactionsData: TransactionsSectionData;
}

@Injectable()
export class AccountDashboardService {

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService,
        private accountSummaryAlertFilterService: AccountSummaryAlertFilterService
    ) { }

    private get baseUrl() {
        return `/api/sessions/`;
    }

    public async getAccountData(): Promise<GetAccountDataResponse> {

        const url = `${this.baseUrl}AccountData/GetAccountData`;

        const response: GetAccountDataResponse = await this.httpService.get(url);

        return this.repoResponseHandler(response);
    }

    public async emailConfirmation(request: EmailConfirmationRequest): Promise<EmailConfirmationResponse> {

        const url = `${this.baseUrl}EmailConfirmation/EmailConfirmation`;

        const response: EmailConfirmationResponse = await this.httpService.post(url, request);

        return this.repoResponseHandler(response);
    }

    public async getVehiclesData(): Promise<GetVehiclesDataResponse> {

        const url = `${this.baseUrl}VehiclesData/GetVehiclesData`;

        const response: GetVehiclesDataResponse = await this.httpService.get(url);

        return this.repoResponseHandler(response);

    }

    public async getTransactionsData(): Promise<GetTransactionsDataResponse> {

        const url = `${this.baseUrl}TransactionsData/GetTransactionsData`;

        const response: GetTransactionsDataResponse = await this.httpService.get(url);

        return this.repoResponseHandler(response);
    }

    public async getAccountSummary(data: EmailConfirmationRequest): Promise<GetAccountSummaryResponse> {

        const url = `${this.baseUrl}AccountSummary/GetAccountSummary`;

        const response: GetAccountSummaryResponse = await this.httpService.post(url, data);

        if (response.alerts && response.alerts.length > 0) {
            await this.accountSummaryAlertFilterService.filterAccountSummaryAlerts(response.alerts);
        }

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
