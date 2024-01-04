import { SiteCoreItem } from 'cms/cms.module';
import { BaseResponse } from 'common/interfaces';

export enum Channel {
    Sms,
    Email,
    Phone
}

export interface TwoFactorAuthSendRequest {
    //to - the email or phone number
    to: string;
    language: string;
    accountId: number;
    //source - the feature (forgot password)
    source: string;
    channel?: Channel;
}

export interface TwoFactorAuthVerifyRequest {
    code: string;
    source: string;
}

export interface TwoFactorAuthSendResponse extends BaseResponse {
    verificationSent: boolean;
}

export interface TwoFactorAuthVerifyResponse extends BaseResponse {
    isVerified: boolean;
}


export enum LoginResetOption {
    Email = 1, Phone
}

export enum AccountIdentificationOption {
    AccountNumber = 1, EzTagNumber
}

export interface AdditionalInfoData extends SiteCoreItem {
    identificationOption: string;
    enterAccountNumber: string;
    enterEzTagNumber: string;
    selectAgency: string;
}

export type FindAccountChild = SiteCoreItem | AdditionalInfoData;

export interface FindAccountCmsData extends SiteCoreItem {
    selectResetOption: string;
    resetOptionRequired?: string;
    phoneNumber: string;
    Children: FindAccountChild[];
}

export interface AccountSearchData {
    to: string;
    loginResetOption?: LoginResetOption;
    accountIdentificationOption?: AccountIdentificationOption;
    selectedAgency: string;
    accountNumber: string;
    ezTagNumber: string;
    moreInfoNeeded: boolean;
}

export interface PhoneVerificationCMS extends SiteCoreItem {
    TextRadio: string;
    TextRadioSubtext: string;
    CallRadio: string;
}

export interface VerifyCodeCMS extends SiteCoreItem {
    EMAIL_DESC: string;
    PHONE_DESC: string;
    RESEND_SUCCESS: string;
    RESEND_FAIL: string;
    VERIFY_FAIL: string;
    SAVE_FAIL: string;
    SUGGEST_PHONE: string;
    SUGGEST_EMAIL: string;
    REMEMBER_CHECHBOX_LABEL: string;
    REMEMBER_CHECHBOX_DESC: string;
    SERVICE_UNAVAL_MSG: string;
}

export interface ValidateSecurityAnsResponse extends BaseResponse {
    successStatus: boolean;
}