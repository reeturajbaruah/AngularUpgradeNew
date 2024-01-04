import { Injectable } from '@angular/core';


export const phoneKeys =  ['phoneNumber', 'workPhoNbr', 'mobilePhoNbr'];

export const emailKeys =  ['emailAddress', 'altEmailAddress'];

export enum MFATypes {
    TEXT = 'text',
    CALL = 'call',
    EMAIL = 'email'
}

export const source = 'LOGIN';


export enum mfaStateNames {

    Future = 'MultiFactorAuthentication.**',
    MultiFactorAuthentication = 'MultiFactorAuthentication',
    VerifyCode = 'VerifyCode',
    SecurityQuestion = 'SecurityQuestion'
}


export enum mfaRoutes {
    Future = '/MultiFactorAuthentication',
    MultiFactorAuthentication = '/MultiFactorAuthentication',
    VerifyCode = '/MultiFactorAuthentication/VerifyCode',
    SecurityQuestion = '/MultiFactorAuthentication/SecurityQuestion'

}

@Injectable()
export class CmsIds {
    MFAPageCMS = 'EFABC02F-9D3F-476C-9506-0D2EBF8A1E51';
    VerifyCode = '4B2D0D6A-0609-47B5-8249-2F86BB985F31';
    SecurityQuestionCMS = '13A43362-0AF2-4BF8-9A5A-1958EB76CA4E';
}

export const cmsIds = new CmsIds();

