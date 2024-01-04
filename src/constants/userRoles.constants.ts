import { Injectable } from '@angular/core';

@Injectable()
export class UserRoles {
    anonymous = 'anonymous'; // any user, logged in or not
    notAuthenticated = 'notAuthenticated'; // only users who aren't logged in
    notAuthenticatedMf = 'notAuthenticatedMF'; // only users who aren't mfa authenticated
    active = 'active';
    incomplete = 'incomplete';
    pendingClosure = 'pendingClosure';
    suspended = 'suspended';
    missingRequiredInformation = 'missingRequiredInformation';
    toggledLinks = 'toggled';
    pendingFunds = 'pendingFunds'; // added during CA-Phase2 for FlexPay Cash Accounts
}
