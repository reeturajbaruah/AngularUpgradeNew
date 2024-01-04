import { Injectable } from '@angular/core';

//TODO: update these to match old route states to make backwards compat with omniture
@Injectable()
export class StateNames {
    Future = 'SuspendedAccount.**';
    Root = 'SuspendedAccount';
    Landing = 'SuspendedAccount.Landing';
    ViolationsLanding = 'SuspendedAccount.ViolationsLanding';
    RequiredPayment = 'SuspendedAccount.RequiredPayment';
    Payment = 'SuspendedAccount.Payment';
    Confirm = 'SuspendedAccount.Confirm';
    Receipt = 'SuspendedAccount.Receipt';
}


@Injectable()
export class Routes {
    Future = '/SuspendedAccount';
    Landing = '/SuspendedAccount/NoViolations';
    ViolationsLanding = '/SuspendedAccount/Violations';
    RequiredPayment = '/SuspendedAccount/NoViolations/RequiredPayment';
    Payment = '/SuspendedAccount/Payment';
    Confirm = '/SuspendedAccount/Confirm';
    Receipt = '/SuspendedAccount/Receipt';
    contactUs = '/HelpAndSupport#email-us';

}

@Injectable()
export class CmsIds {
    Root = '09508092-B6BE-4BEF-B257-AFAE8C4A22B4';
    ViolationsLanding = '36B2A0EF-9FEB-4FC3-AFD3-954D0D5D9444';
    MakePayment = 'CBA2ED90-B87A-4102-987E-CA717D23695C';
    Receipt = 'A679DBFD-D40A-4DD3-BD03-7FCD2622409B';
    suspendedAccountWithoutViolationsCms = 'CC7255CD-8E05-433D-B6B4-AA7E09C10A76';
    RequiredPayment = 'BF27CC23-CFAE-49D7-93A0-770BF5A69AAA';
    Confirmation = '4FC06A2D-5620-4A4A-AA63-3FAC6C70465F';
}

@Injectable()
export class FeatureToggles {
    
}

export const SuspendedAccountCurrentStepKey = 'SuspendedAccountRefreshCurrentStepKey';
export const SuspendedAccountUserStatusKey = 'SuspendedAccountUserStatusKey';

export const SuspendedAccountPaymentInfoKey = 'SuspendedAccountPaymentInfoKey';

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
