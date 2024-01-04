import { Injectable, Inject } from '@angular/core';
import { BaseResponse } from 'common/interfaces';
import { AddressInfo, IMailingInfo, PaymentMethodInfo } from 'common/models';
import { ResponseErrorService, HttpService } from 'common/services';

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

export interface Vehicle {
    tagId: string;
    fullTagId: string;
    acctTagSeq: number;
    acctTagSeqSpecified: boolean;
    licPlate: string;
    licState: string;
    motorcycle: boolean;
    nickname: string;
    temporaryLicPlate: boolean;
    vehicleClassCode: string;
    vehicleClassDesc: string;
    vehicleColor: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleYear: string;
    acctTagStatus: string;
    tagStatusDesc: string;
    pbpStartDate: Date;
    pbpEndDate: Date;
    tagTypeCode: string;
    activePbpTagExist: boolean;
    tagless_Desc: string;
}

export interface ManageEzTagResponse extends BaseResponse {
    accountTags: Vehicle[];
    pbpTags: Vehicle[];
    currentBalance: number;
    acctId: number;
    isSwitchError: boolean;
    multiVehicleAllowed: boolean;
    maxEzPlatesAllowed: number;
}

export interface AddMissingInformationResponse extends BaseResponse {
    accountId: number;
    accountActivity: string;
    newAccountStep: { currentStep: number; accountComplete: boolean };
    firstName: string;
    lastName: string;
    driverLic: string;
    driverLicState: string;
    companyName: string;
    isInvoiced: boolean;
}

export enum TagStatus {
    INACTIVE = 'inactive',
    EXPIRED = 'expired'
}

export interface SecurityQuestionInfo {
    securityQuestionID: number;
    securityQuestion: string;
}

export interface SecurityQuestionsResponse extends BaseResponse {
    securityQuestions: SecurityQuestionInfo[];
}

export interface ComPreferences {
    monthlyStatementsAreByMail: boolean;
    monthlyStatementsAreByEmail: boolean;
    importantUpdatesAreByEmail: boolean;
    importantUpdatesAreByMail: boolean;
}

export interface AuthorizedContact {
    firstName: string;
    lastName: string;
    accessCode: string;
    contactId: string;
}

export interface GetAuthContactResponse extends BaseResponse {
    contactNames: string[];
    authorizedContactList: AuthorizedContact[];
    authContactLimit: number;
}

export interface GetContactInfoResponse extends GetAuthContactResponse, PersonalInfo, ComPreferences {
    mailingAddress: AddressInfo;
    contactInfo: ContactInfo;
    personalInfo: PersonalInfo;
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
}

export interface SetContactInfoRequest {
    mailingAddress: AddressInfo;
    contactInfo: ContactInfo;
    personalInfo: PersonalInfo;
    shouldSaveExpressAddress: boolean;
}

@Injectable()
export class AccountService {

    constructor(
        private httpService: HttpService,
        private responseErrorService: ResponseErrorService
    ) { }

    private get baseUrl() {
        return `/api/sessions/`;
    }

    public async getEZTagInfo(): Promise<ManageEzTagResponse> {

        const url = `${this.baseUrl}ManageVehicles/GetEzTagsAndAccountInfo`;

        const response: ManageEzTagResponse = await this.httpService.get(url);

        return response;
    }

    public async saveInformation(data: any): Promise<AddMissingInformationResponse> {

        const url = `${this.baseUrl}AddMissingInformation/saveMissingInformation`;

        const response: AddMissingInformationResponse = await this.httpService.post(url, data);

        return response;
    }

    //public async updateLoginID(data: any): Promise<any> {

    //    const url = `${this.baseUrl}ChangeUsername/UpdateLoginID`;

    //    const response: any = await this.httpService.post(url, data);

    //    return response;
    //}

    public async getSecurityQuestions(): Promise<SecurityQuestionsResponse> {

        const url = `${this.baseUrl}PersonalBusinessData/GetSecurityQuestions`;

        const response: any = await this.httpService.get(url);

        return response;
    }

    public async getAllPaymentMethods(): Promise<PaymentMethodInfo> {
        const response = await this.httpService.get('/api/GetAllPaymentMethods');

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async getContactInfo(): Promise<GetContactInfoResponse> {

        const url = `${this.baseUrl}PersonalInfo/GetPersonalInfo`;

        const response: GetContactInfoResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            return response;
        }
    }

    public async getMailingInfo(): Promise<IMailingInfo> {
        const res = await this.getContactInfo();

        if (res) {
            return { ...res.mailingAddress } as IMailingInfo;
        }
    }

    public async getAccountInfo(): Promise<GetAccountInformationResponse> {

        const url = `${this.baseUrl}AccountInformation/GetAccountInformation`;

        const response: GetAccountInformationResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
            return response;
        }
    }

    public async getAccountInformation2fa(): Promise<GetAccountInformationResponse> {

        const url = `${this.baseUrl}AccountInformation/GetAccountInformation2fa`;

        const response: GetAccountInformationResponse = await this.httpService.get(url);

        if (this.responseErrorService.isErrorFree(response)) {
            this.responseErrorService.displayAlertsFromResponse(response);
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

    async setMailingInfoAtAcctLevel(address: AddressInfo) {

        const contact = await this.getContactInfo();

        const req = {
            mailingAddress: address,
            contactInfo: contact.contactInfo,
            personalInfo: contact.personalInfo
        } as SetContactInfoRequest;

        return await this.setContactInfo(req);
    }
}
