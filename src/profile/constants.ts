import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable()
export class StateNames {
    //Inform Omniture and Google analytics team about state name change
    AccountDetails = 'AccountInformation';
    ChangePassword = 'ChangePassword';
    ChangeUsername = 'ChangeUsername';
    CloseAccountFrame = 'CloseAccount';
    CloseAccountAgreement = 'CloseAccount.Agreement';
    CloseAccountRefund = 'CloseAccount.Refund';
    CloseAccountCheckInformation = 'CloseAccount.Check';
    CloseAccountReview = 'CloseAccount.PendingReview' ;
    UpdateAuthorizedContacts = 'UpdateAuthorizedContact';
    UpdateBillingInformation = 'ManageBillingInformation';
    UpdateFlexpayBillingInformation = 'ManageFlexpayBillingInformation';
    UpdateContactInformation = 'updatePersonalInformation';//This stateName starts with a lower case u (not a typo)
    UpdateMailingAddress = 'UpdateMailingAddress';//This stateName doesn't exist in legacy; it used to be a part of Contact Info
    UpdateReplenishmentAmount = 'UpdateReplenishAmount';
    UpdateSecurityQuestion = 'ChangeSecurityQuestion';
}

@Injectable()
export class Routes {
    AccountDetails = '/AccountInformation';
    ChangePassword = '/ChangePassword';
    ChangeUsername = '/ChangeUsername';
    CloseAccountFrame = '/CloseAccount';
    CloseAccountAgreement = '/Agreement';
    CloseAccountRefund = '/Refund';
    CloseAccountCheckInformation = '/CheckInformation';
    CloseAccountReview = '/Review';
    UpdateAuthorizedContacts = '/UpdateAuthorizedContact';
    UpdateBillingInformation = '/ManageBillingInformation';
    UpdateFlexpayBillingInformation = '/ManageFlexpayBillingInformation';
    UpdateContactInformation = '/UpdatePersonalInformation';
    UpdateMailingAddress = '/UpdateMailingAddress';
    UpdateReplenishmentAmount = '/UpdateReplenishAmount';
    UpdateSecurityQuestion = '/ChangeSecurityQuestion';
    Future = '/AccountInformation';
}

@Injectable()
export class CmsIds {
    closeAccountFrame = '60A694AF-7BA8-4BC6-8C6F-9BDEFDDA3B88';
    closeAccountAgreement = '6332D1A3-3BFB-4B40-84F3-81F84FA134BA';
    closeAccountRefund = 'B8B6B239-F311-454E-9930-AA3DC61DFD20';
    closeAccountReview = '19D32F5E-0A1B-41C0-A96F-2294CEFE9D8C';
    closeAccountPopup = '9B697B12-E450-4035-B7AE-729FD067AF93';
    changeUsername = '26CF29A7-62D4-4589-931B-F1479A3F40C1';
    changePassword = '0DB70EE2-DF45-43D3-9700-FA4B25E68A1C';
    updateAuthorizedContacts = '74107A3F-7096-4694-992A-E23154F3FF25';
    profileDashboard = 'B37BF34C-6010-41A1-AC8D-01FD9A1807F5';
    BillingNoData = '969BA325-F57B-42EB-B955-003038229EDE';
    updateMailingAddress = 'A8540829-F990-4B7C-8E47-8DA64FB11C97';
    updateSecurityQuestion = '065EC93F-4DF8-4ABA-B121-1C4388279063';
    updateReplenishmentAmount = '595433F4-7B21-4972-9A6B-CBD7F1CADF09';
    updateContactInfo = 'DFA39E76-BE7C-435D-9ACE-6D4DC704FF90';
    updateBillingInfo = '679EC3FB-B513-4A77-8080-CDDEE8C6B13E';
    updateFlexPayBillingInfo = '1297561C-479B-443B-8E71-30B79DD090EC';
    optInModal = '8EEF403B-0593-4B24-9C96-5249A42E63D6';
    paymentConfirmModal = '1A9A8E13-774E-4218-870E-3B2ED21DA713';
    autoReplenishIndicator = '7E373655-06C6-4A67-A2D4-4428021531D7';
    contactInfoCard = '337EE2C5-878F-4083-AE5F-3D8ACD524A6A';
}

@Injectable()
export class ChildCmsIds {
    CompletionModal = 'C51A17AC-FA91-4748-8E16-9C3A04407533';
    FlexPayUpdateReplenishment = 'D28D334B-FF6B-4EE4-BFA6-11F73E960E1C';
    InvoicedAccountsReplenishmentAmountError ='62B35CE6-F1C5-433C-9B0F-60A94DBFAFE7';
    PendingClosureReplenishmentAmountError = '9D30A05E-345C-469B-A0F6-D80EA12A5C88';
    ReplenishmentAmount = '3EAAFEC8-DDCA-48A5-B0CC-63A73955912B';
    OptOutCompletionModal = '5AA601CE-673F-44DF-A270-BD22379CEE09';
}

@Injectable()
export class FeatureToggles {
    //TODO: This feature toggle has not been changed for a long time now.
    //We might be able to remove this toggle
    //HideRefundMethodSelection = 'HideRefundMethodSelection';
}

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
export const childCmsIds = new ChildCmsIds();
