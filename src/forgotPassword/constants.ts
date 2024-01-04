import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    Future = 'ForgotPassword.**';
    Root = 'ForgotPassword';
    FindAccount = 'ForgotPassword.FindAccount';
    ValidateByPhone = 'ForgotPassword.ValidateByPhone';
    VerifyCode = 'ForgotPassword.VerifyCode';
    ResetPassword = 'ForgotPassword.ResetPassword';
}

@Injectable()
export class Routes {
    Future = '/ForgotPassword';
    Root = '/ForgotPassword';
    FindAccount = '/FindAccount';
    ValidateByPhone = '/ValidateByPhone';
    ResetPassword = '/ResetPassword';
    VerifyCode = '/VerifyCode';
}

@Injectable()
export class CmsIds {
    Root = 'F10EF2D4-8E46-453E-B5DC-F9F10DB8601E';
    FindAccount = '062B458B-F6EF-4A87-99A4-AEA23D17229B';
    ValidateByPhone = '6EB4FB0A-9820-471E-A53C-85BD287EA150';
    VerifyCode = '0DAF3365-1414-4EDF-8DC4-A5089F4C6946';
    ResetPassword = 'E02B7070-4766-4235-B967-C3AA3716C194';
}

@Injectable()
export class FeatureToggles {
}

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
