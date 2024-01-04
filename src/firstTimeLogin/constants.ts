import { Injectable } from '@angular/core';;

@Injectable()
export class StateNames {
    Future = 'SetupOnlineAccess.**';
    Root = 'SetupOnlineAccess';
    FindAccount = 'SetupOnlineAccess.FindAccount';
    ValidateByPhone = 'SetupOnlineAccess.ValidateByPhone';
    VerifyCode = 'SetupOnlineAccess.VerifyCode';
    SetupOnlineAccess = 'SetupOnlineAccess.SetupOnlineAccess';
    SetupComplete = 'SetupOnlineAccess.SetupComplete';
}

@Injectable()
export class Routes {
    Future = '/SetupOnlineAccess';
    Root = '/SetupOnlineAccess';
    FindAccount = '/FindAccount';
    ValidateByPhone = '/ValidateByPhone';
    VerifyCode = '/VerifyCode';
    SetupOnlineAccess = '/SetupOnlineAccess';
    SetupComplete = '/SetupComplete';
}

@Injectable()
export class CmsIds {
    Root = 'FA80D874-8856-48D5-B184-D7375B3B2457';
    FindAccount = '84AE9C66-FFE6-46D3-85AE-9D6BC3221BBF';
    SetupComplete = '1F9BDAFD-2DD2-43A2-93CB-1A595A8FF4E5';
    SetupOnlineAccess = 'E52DDB14-E85B-4FEE-BF40-ADF44928230A';
    ValidateByPhone = '447507C7-1616-40B5-8D0E-02F0AECD7B68';
    VerifyCode = 'B72C6909-34D4-49A3-9248-F8F677A8DD4C';
}

@Injectable()
export class FeatureToggles {
}

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
