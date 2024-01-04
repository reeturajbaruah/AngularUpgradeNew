import { Injectable, OnDestroy } from '@angular/core';
import { WebStorageConst } from 'constants/module';
import { CookieService } from '../cookieService/cookie.service';
import { isEqual } from 'lodash';
import { isUndefined } from 'common/utilities';
import { Subject } from 'rxjs';
import { SessionService } from '../session/session.service';
import { WebStorageService } from '../webStorageService/webStorage.service';

export interface CurrentUser {
    accountStatus: string;
    acctActivity: string;
    acctId: number;
    alerts: [];
    claimSessionCredential: string;
    companyName: string;
    currentBalance: number;
    currentBalanceObj: { currentBalance: number };
    driverLic: string;
    driverLicState: string;
    emailIsMissing: boolean;
    environment: string;
    errors: [];
    exception: string;
    extraLargeAccountFlag: boolean;
    firstName: string;
    hasPaymentPlans: boolean;
    invalidAccountSource: boolean;
    isCorporateAccount: boolean;
    isExpressAccount: boolean;
    isExpressPlan: boolean;
    isInvoiced: boolean;
    largeAccountFlag: boolean;
    lastName: string;
    newAccountStep: string;
    passwordNeedsReset: boolean;
    paymentPlanBalance: number;
    securityIssue: boolean;
    securityQuestionIsMissing: boolean;
    sessionTimedOut: boolean;
    username: string;
    webVersion: string;
    isFlexPay: boolean;
    rebillOptIn: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class CurrentUserService implements OnDestroy {
    userRoles: any;

    constructor(
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst,
        private session: SessionService,
        private cookieService: CookieService
    ) { }

    private memCurrentUser: any;
    private readonly cookieName = 'currentUserAcctId';
    private authorizationChangeSubject = new Subject<void>();
    private currentUserSubject = new Subject<any>();
    
    public get authorizationChange$() {
        return this.authorizationChangeSubject.asObservable();
    }

    public get currentUser$() {
        return this.currentUserSubject.asObservable();
    }

    ngOnDestroy(): void {
        this.authorizationChangeSubject.complete();
        this.currentUserSubject.complete();
    }

    public get hasPaymentPlans(): boolean {
        const actualCurrentUser = this.getCurrentUser();
        return !!(actualCurrentUser?.hasPaymentPlans);
    }

    public setCurrentUser() {
        const actualCurrentUser = this.getCurrentUser();
        if(actualCurrentUser) {
            actualCurrentUser.acctActivity = this.session.getAcctActivity();
            this.webStorage.setKeyValue(this.webStorageConst.currentUser, actualCurrentUser);
            this.cookieService.put(this.cookieName, actualCurrentUser.acctId);
        }
        this.currentUserSubject.next(actualCurrentUser);
        this.authorizationChangeSubject.next();
    };

    public updateCurrentUser(loginProfile: any) {
        if (loginProfile) {
            this.memCurrentUser = loginProfile;
            this.webStorage.setKeyValue(this.webStorageConst.currentUser, loginProfile);
            this.setCurrentUser();
            this.cookieService.put(this.cookieName, this.memCurrentUser.acctId);
        }
    };

    public destroyCurrentUser() {
        if (!this.memCurrentUser) {
            this.memCurrentUser = {};
        } else {
            Object.getOwnPropertyNames(this.memCurrentUser)
                .forEach(name => delete this.memCurrentUser[name]);
        }

        this.memCurrentUser.acctId = 0;

        this.webStorage.setKeyValue(this.webStorageConst.currentUser, this.memCurrentUser);
        
        this.cookieService.put(this.cookieName, this.memCurrentUser.acctId);
        this.currentUserSubject.next(this.memCurrentUser);
        this.authorizationChangeSubject.next();
    };

    public getCurrentUser() {
        const fromLocal = this.webStorage.getValue(this.webStorageConst.currentUser);

        if (!isEqual(this.memCurrentUser, fromLocal)) {
            this.memCurrentUser = fromLocal;
        }

        return this.memCurrentUser;
    };

    getCurrentUserBalance(): number {
        const currentUserData = this.getCurrentUser();
        if (currentUserData.currentBalanceObj) {
            return currentUserData.currentBalanceObj.currentBalance;
        } else {
            return this.webStorage.getValue(this.webStorageConst.currentBalance);
        }
    }

    public currentUserIsInSyncAcrossTabs() {
        const cookieVal = this.cookieService.get(this.cookieName);
        
        if (cookieVal
            && this.memCurrentUser
            && !isUndefined(this.memCurrentUser.acctId)
            && this.memCurrentUser.acctId !== null) {

            const parsedCookieVal = parseInt(cookieVal, 10);
            const parsedCurrentUserVal = parseInt(this.memCurrentUser.acctId, 10);
            if (parsedCookieVal !== parsedCurrentUserVal) {
                return false;
            }
        }
        return true;
    }

    makeSessionActive(accountStatus: string, role: string) {
        const currentUser = this.getCurrentUser();
        currentUser.acctActivity = 'A';
        currentUser.accountStatus = accountStatus;
        currentUser.newAccountStep = null;

        this.session.setAcctActivity('A');
        this.session.userRole = role;
        this.session.removeCurrentStep();

        this.updateCurrentUser(currentUser);
    }

    updateAutoReplenishmentStatus(rebillOptIn: boolean) {
        const currentUser = this.getCurrentUser();
        currentUser.rebillOptIn = rebillOptIn;
        this.updateCurrentUser(currentUser);
    }
}
