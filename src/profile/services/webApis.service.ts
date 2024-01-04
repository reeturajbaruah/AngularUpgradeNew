import { Inject, Injectable } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { WebStorageConst } from 'constants/module';
import { ResponseErrorService, HttpService } from '../../common/services';
import { AddressInfo, PaymentMethodInfo, BankDetails, CreditCardDetails } from 'common/models';

export interface PersonalInfo {
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    altEmailAddress: string;
    city: string;
    companyName: string;
    companyTaxId: string;
    country: string;
    displayCountry: string;
    driverLicNbr: string;
    driverLicState: string;
    emailAddress: string;
    firstName: string;
    homePhoNbr: string;
    lastName: string;
    loginId: string;
    plus4: string;
    securityQuestionID: number;
    state: string;
    workPhoExt: string;
    workPhoNbr: string;
    workPhonePlusExt: string;
    zip: string;
    accountInfoExists: boolean;
}

export interface ContactInfo {
    phoneNumber: string;
    phoneExt: string;
    altPhoneNumber: string;
    altPhoneNumberExt: string;
    emailAddress: string;
    altEmailAddress: string;
    mobilePhoNbr: string;
    mobilePhoExt: string;
    smsAlertsOptIn: boolean;
    workPhoExt: string;
    workPhoNbr: string;
    plus4: string;
    workPhonePlusExt: string;
}

export interface AuthorizedContact {
    firstName: string;
    lastName: string;
    accessCode: string;
    contactId: string;
}

export interface UpdateReplenishmentAmount {
    accountType: string;
    currentRebillAmount: number;
    minimumBalance: number;
    minimumBalanceMultiplier: number;
    rebillAmount: number;
}

export interface GetAccountInformationResponse extends BaseResponse {
    personalInfo: PersonalInfo;
    contactInfo: ContactInfo;
    billingInfo: any;
    rebillAmount: number;
    minimumBalance: number;
    userName: string;
    minBalEFT: number;
    minBalCC: number;
    depositAmtEFT: number;
    depositAmtCC: number;
    acctTypeCode: string;
    stateList: any;
    countryList: any;
    creditCardTypes: any;
    acctId: number;
    isFlexPay: boolean;
    rebillOptIn: boolean;
}

export interface GetAuthContactResponse extends BaseResponse {
    contactNames: string[];
    authorizedContactList: AuthorizedContact[];
    authContactLimit: number;
}

export interface AuthorizedContactDetails {
    authorizedContacts: AuthorizedContact[];
    currentPassword: string;
}

export interface SetAuthContactResponse extends BaseResponse {
    contactNames: string[];
    authorizedContactList: AuthorizedContact[];
    authContactLimit: number;
}

export interface ComPreferences {
    monthlyStatementsAreByMail: boolean;
    monthlyStatementsAreByEmail: boolean;
    importantUpdatesAreByEmail: boolean;
    importantUpdatesAreByMail: boolean;
}

export interface UnblockPaymentMethodRequest {
    accountBillingMethodId: number;
}

export interface GetComPreferenceResponse extends BaseResponse, ComPreferences { }

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

export interface SetContactInfoRequest {
    mailingAddress: AddressInfo;
    contactInfo: ContactInfo;
    personalInfo: PersonalInfo;
    shouldSaveExpressAddress: boolean;
}

export interface SetContactAddressInfoRequest extends SetContactInfoRequest {
    saveContactInfoOnly: boolean;
}

export interface GetContactInfoResponse extends GetAuthContactResponse, PersonalInfo, ComPreferences {
    mailingAddress: AddressInfo;
    contactInfo: ContactInfo;
    personalInfo: PersonalInfo;
}

export interface RemovePaymentMethodRequest {
    creditCardPaymentMethod: CreditCardDetails & AddressInfo;
    eFTPaymentMethod: BankDetails & AddressInfo;
    isCreditCard: boolean;
}

@Injectable()
export class WebApisService {

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService
    ) { }

    private get baseUrl() {
        return `/api/sessions/`;
    }

    public async getAccountInfo(): Promise<GetAccountInformationResponse> {

        const url = `${this.baseUrl}AccountInformation/GetAccountInformation`;

        const response: GetAccountInformationResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async getAuthContacts(): Promise<GetAuthContactResponse> {

        const url = `${this.baseUrl}AccountInformation/GetAuthorizedContacts`;

        const response: GetAuthContactResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
        throw response;
    }

    public async setAuthContacts(request: AuthorizedContactDetails): Promise<SetAuthContactResponse> {

        const url = `${this.baseUrl}AccountInformation/ModifyAuthorizedContact`;

        const response: SetAuthContactResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }

        throw response;
    }

    public async getComPreferences(): Promise<GetComPreferenceResponse> {

        const url = `${this.baseUrl}AccountInformation/GetAccountPreferences`;

        const response: GetComPreferenceResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async setComPreferences(request: ComPreferences): Promise<BaseResponse> {

        const url = `${this.baseUrl}AccountInformation/ModifyAccountPreferences`;

        const response: BaseResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async getPaymentMethodData(): Promise<GetPaymentMethodDataResponse> {

        const url = `${this.baseUrl}PaymentMethodData/GetPaymentMethodData`;

        const response: GetPaymentMethodDataResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async setContactInfo(request: SetContactInfoRequest): Promise<BaseResponse> {

        const url = `${this.baseUrl}PersonalInfo/UpdatePersonalInfo`;

        const response: BaseResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async updateContactInfo(request: ContactInfo): Promise<BaseResponse> {

        const url = `${this.baseUrl}PersonalInfo/UpdateContactInfo`;

        const response: BaseResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async updateMailingInfo(request: AddressInfo): Promise<BaseResponse> {

        const url = `${this.baseUrl}PersonalInfo/UpdateMailingInfo`;

        const response: BaseResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async updateRebillAmount(request: UpdateReplenishmentAmount): Promise<BaseResponse> {

        const url = `${this.baseUrl}UpdateRebillAmount/UpdateRebillAmount`;

        const response: BaseResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async unblockPaymentMethod(request: UnblockPaymentMethodRequest): Promise<BaseResponse> {

        const url = `/api/account/manageBilling/unblockBillingMethod`;

        const response: BaseResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async removePaymentMethod(request: RemovePaymentMethodRequest): Promise<BaseResponse> {

        const url = `/api/account/manageBilling/removeBillingMethod`;

        const response: BaseResponse = await this.httpService.post(url, request);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }
}


