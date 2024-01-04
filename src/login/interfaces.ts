import { BaseResponse } from '../common/interfaces';

export interface MissingInformationFlags {
    passwordNeedsReset: boolean;
    emailIsMissing: boolean;
    securityQuestionIsMissing: boolean;
    profileCallHasOccured: boolean;
}

export interface IClaimSessionResponse extends BaseResponse {
    firebaseId: string;
}
