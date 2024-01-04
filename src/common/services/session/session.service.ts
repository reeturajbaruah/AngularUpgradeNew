import { Inject, Injectable } from '@angular/core';
import { is } from '@uirouter/core';
import { WebStorageConst, stateNames, userRoles } from '../../../constants/module';
import { WebStorageService } from '../webStorageService/webStorage.service';

@Injectable()
export class SessionService {

    acctId: number;
    userRole: string;
    currentStep: number;

    constructor(
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst
    ) { }

    default() {
        this.acctId = 0;
        this.userRole = userRoles.notAuthenticated;
    }
    create(acctId: number, acctActivity: string, currentStep: number, missingInformation: boolean, accountStaus: string = null): void {
        this.acctId = acctId;

        if (sessionStorage) {
            sessionStorage.setItem(this.webStorageConst.sessionAccountActivity, acctActivity);
            this.userRole = this.mapAcctActivityToUserRole(sessionStorage.getItem(this.webStorageConst.sessionAccountActivity), accountStaus);
        }

        if (this.userRole === userRoles.incomplete) {
            if (sessionStorage && currentStep != null) {
                sessionStorage.setItem(this.webStorageConst.sessionCurrentStep, currentStep.toString());
                this.currentStep = currentStep;
            }
        }

        if (sessionStorage && missingInformation && acctActivity != null && this.userRole !== userRoles.notAuthenticated) {
            this.userRole = userRoles.missingRequiredInformation;
        }
    }

    setAcctActivity(acctActivity: string): void {
        if (sessionStorage && acctActivity != null) {
            sessionStorage.setItem(this.webStorageConst.sessionAccountActivity, acctActivity);
        }

        this.userRole = this.mapAcctActivityToUserRole(sessionStorage.getItem(this.webStorageConst.sessionAccountActivity));
    }

    setCurrentStep(currentStep: string): void {
        if (sessionStorage && currentStep != null) {
            sessionStorage.setItem(this.webStorageConst.sessionCurrentStep, currentStep);
        }

        this.currentStep = Number(sessionStorage.getItem(this.webStorageConst.sessionCurrentStep));
    }

    destroy(): void {
        this.acctId = 0;
        this.webStorage.removeEntry(this.webStorageConst.sessionAccountActivity);
        this.webStorage.removeEntry(this.webStorageConst.sessionCurrentStep);
        this.userRole = userRoles.notAuthenticated;
    }

    getAcctActivity(): string {
        let val: string = null;

        if (sessionStorage) {
            val = sessionStorage.getItem(this.webStorageConst.sessionAccountActivity);
        }

        return val;
    }

    getCurrentStep(): string {
        let val: string = null;

        if (sessionStorage) {
            val = sessionStorage.getItem(this.webStorageConst.sessionCurrentStep);
        }

        return val;
    }

    removeCurrentStep(): void {
        this.webStorage.removeEntry(this.webStorageConst.sessionCurrentStep);
    }

    stepToStateName(currentStep: number): string { // Account Creation wizard step to its state name
        switch (currentStep) {
            case 1:
                return stateNames.createAccount;
            case 3:
                return stateNames.vehicleInformation;
            case 4:
                return stateNames.choosePaymentMethod;
            case 5:
                return stateNames.createAccountSummary;
            default:
                return stateNames.createAccount;
        }
    }

    mapAcctActivityToUserRole(acctActivity: string, accountStatus: string = null): string {
        switch (acctActivity) {
            case 'A':
                if (accountStatus === 'PF') { return userRoles.pendingFunds; };
                return userRoles.active;
            case 'P':
                return userRoles.incomplete;
            case 'I':
                return userRoles.pendingClosure;
            case 'S':
                return userRoles.suspended;
            case 'PMFA':
                return userRoles.notAuthenticatedMf;
            default:
                return userRoles.notAuthenticated;
        }
    }

}
