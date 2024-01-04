import type { SiteCoreItem } from 'cms/cms.module';
import { BaseResponse } from 'common/interfaces';

export interface AccountSearchRequest {
    emailAddress: string;
    phoneNumber: string;
    tagNumber: string;
    eztagAgency: string;
    accountNumber: string;
}

export interface SetupAccessCms extends SiteCoreItem {
    CANCEL_TITLE: string;
    CANCEL_CONTEXT: string;
}

export interface AccountSearchResponse extends BaseResponse {
    acctId: number;
    loginId: string;
    dbSessionId: string;
    emailAddress: string;
    phoneNumber: string;
    multipleAccountsFound: boolean;
    hasError?: boolean;
}

export interface SetupDataResponse extends BaseResponse {
    authorities: { authorityCode: string }[];
}

export interface OnlineAccessLoginInfo {
    username: string;
    password: string;
    email: string;
    securityQuestionID: string;
    securityQuestionAnswer: string;
    alternateEmail: string;
    acctId: number;
    dbSessionId: string;
}
