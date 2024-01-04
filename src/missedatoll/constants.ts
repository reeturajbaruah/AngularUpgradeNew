import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    Future = 'MissedAToll.**';
    Root = 'MissedAToll';
    Landing = 'MissedAToll.Landing';
    Grid = 'MissedAToll.Grid';
    Billing = 'MissedAToll.Billing';
    Confirm = 'MissedAToll.Confirm';
    Receipt = 'MissedAToll.Receipt';
}

@Injectable()
export class Routes {
    Future = '/MissedAToll';
    Landing = '/MissedAToll';
    Grid = '/MissedATollViolationInformation';
    Billing = '/MissedATollBillingInformation';
    Confirm = '/MissedATollConfirmPayment';
    Receipt = '/MissedATollReceipt';
}

@Injectable()
export class CmsIds {
    Root = '6A65B8A9-2F55-4F98-9E58-91B719C8B650';
    LandingSection1 = 'F8BDB63D-8B74-43CD-AD24-E2EBBBF974FE';
    LandingSection2 = 'AFC50DED-7935-4C03-9BFB-7AE9684083F6';
    GridSection1 = '7D1F15D7-7095-41FE-B21B-2D2D8D312823';
    GridSection2 = 'B7D980B1-AB43-43CB-A205-E7E8A1EBB03C';
    Confirm = '43181609-2769-4E8F-B4A6-C33F64E1CAD4';
    ReceiptThankYou = '46FDA1A4-5CD8-49D5-ADE0-7B0622707628';
    ReceiptBilling = 'AB9DFA05-4C43-46FB-9B5C-5BC3A967FA0E';
    ReceiptGotInvoicePopup = '654A6D5A-96AB-4317-A69E-79ACF4A64A7F';
    ReceiptImportantInfo = 'B624774B-EF6B-4EE9-A483-6BCECBBA8913';
}

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
