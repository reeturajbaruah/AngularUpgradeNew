import { BaseResponse } from 'common/interfaces';
import type { SiteCoreItem } from 'cms/cms.module';

export interface ResetPasswordRequest {
    password: string;
    password2: string;
    dbSessionId: string;
    userName: string;
    accountId: string;
    email: string;
    securityQuestionAnswer: string;
    securityQuestionID: string;
}

export interface ResetPasswordResponse extends BaseResponse {
    fromMobileApp: boolean;
    acctId: string;
    acctActivity: string;
    newAccountStep: NewAccountStep;
    isInvoiced: boolean;
    isExpressAccount: boolean;
    driverLic: string;
    driverLicState: string;
    firstName: string;
    lastName: string;
}

export interface NewAccountStep {
    currentStep: string;
    accountComplete: boolean;
}

export interface ForgotPasswordAccountSearchRequest {
    emailAddress: string;
    phoneNumber: string;
    tagNumber: string;
    eztagAgency: string;
    accountNumber: string;
}

export interface ForgotPasswordAccountSearchResponse extends BaseResponse {
    acctId: number;
    loginId: string;
    dbSessionId: string;
    emailAddress: string;
    phoneNumber: string;
    multipleAccountsFound: boolean;
    hasError?: boolean;
    isMissingEmail?: boolean;
}

export interface ForgotPasswordSetupResponse extends BaseResponse {
    authorities: { authorityCode: string }[];
}
