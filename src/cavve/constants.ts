import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    Future = 'CreateAccountFromViolations.**';
    Root = 'CreateAccountFromViolations';
    Offer = 'CreateAccountFromViolations.CreateAccountFromViolationsLanding';
    Personal = 'CreateAccountFromViolations.CreateAccountFromViolationsEZTag';
    Billing = 'CreateAccountFromViolations.CreateAccountFromViolationsBillingInfo';
    Confirm = 'CreateAccountFromViolations.CreateAccountFromViolationsSummary';
    Receipt = 'CreateAccountFromViolations.CreateAccountFromViolationsReceipt';

}

@Injectable()
export class Routes {
    Future = '/CreateAccountFromViolations';
    Offer = '/CreateAccountFromViolationsLanding';
    Personal = '/CreateAccountFromViolationsEZTag';
    Billing = '/CreateAccountFromViolationsBillingInfo';
    Confirm = '/CreateAccountFromViolationsSummary';
    Receipt = '/CreateAccountFromViolationsReceipt';

}

@Injectable()
export class CmsIds {
    Root = 'A094E2FF-B302-497C-9966-B2A9C869A7DF';
    Billing = 'BDEC0DC6-90C5-44A4-B797-8546AF6B6CF1';

    CancelMessages = '9040DE1F-235C-45C7-839B-148E8ECF7BEB';
    PersonalInfoPage = 'F0B91DB5-1053-496F-A336-790FEBCDA7D8';
    Offer = '31067B57-437B-43DF-B07A-B63A648B50FB';

    Confirm = '8A9DE2AC-177D-4E17-913B-93FDA1D28AE2';
    ConfirmOrderSummarySection = 'AF201212-B99B-4F96-AF75-E08997736302';
    
    Receipt = '2F4645DD-683F-427D-AC5B-5E531C7922AE';
    ReceiptThankYouSection = '9367C798-4B61-4270-8C75-9A0968659FBF';

}

@Injectable()
export class AnimationStates {
    Open = 'Open';
    Closed = 'Closed';
}

@Injectable()
export class WebStorageConstants {

    uninvoiced = 'uninvoiced';
    createAccountFromViolationsTotals = 'createAccountFromViolationsTotals';
    remainingPlateTotalBeforeDiscount = 'remainingPlateTotalBeforeDiscount';
    serviceFee = 'serviceFee';

}


export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const animationStates = new AnimationStates();
export const webStorageConstants = new WebStorageConstants();
