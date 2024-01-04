import { Inject, Injectable } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { authEvents } from 'constants/module';
import { CurrentUserService } from 'common/services/currentUserService/currentUser.service';
import { AccountSummaryAlertFilterService } from 'common/services';

@Injectable({
    providedIn: 'root',
})

export class AuthChannelService {
    constructor(
        private accountSummaryAlertFilterService: AccountSummaryAlertFilterService,
        private currentUser: CurrentUserService
    ) { }

    // This is a global singleton and will not be garbage collected until the whole application is destroyed/shut down.
    // Please remember to manually perform clean up and unsubscribe when subscribing to these Subjects, unless...  
    // it is a singleton service that is referencing this (i.e currentUserService.
    // i.e. If a component subscribes to any of these, please UNSUBSCRIBE to avoid memory leaks.
    public authEventStatuses = {
        [authEvents.loginSuccess]: new Subject(),
        [authEvents.logoutSuccess]: new Subject<boolean>(),
        [authEvents.sessionTimedOut]: new Subject(),
        [authEvents.securityIssue]: new Subject(),
        [authEvents.notAuthenticated]: new Subject(),
        [authEvents.notAuthorized]: new Subject(),
        [authEvents.restoredUserState]: new Subject(),
        [authEvents.setNavBarLogin]: new Subject()
    };

    public logIn(loginApiResponse) {
        this.currentUser.updateCurrentUser(loginApiResponse);

        //This communicates from AngularJS to Angular of the broadcast. Angular App uses this.
        this.authEventStatuses[authEvents.loginSuccess].next(loginApiResponse); //Set user data and declares user logged in.
        this.authEventStatuses[authEvents.logoutSuccess].next(false); 

    }

    public logOut() {
        //Destory User
        [authEvents.logoutSuccess,
            authEvents.sessionTimedOut,
            authEvents.securityIssue,
            authEvents.notAuthorized,
            authEvents.notAuthenticated
        ].forEach(authEvent => {
            this.authEventStatuses[authEvent]
                .subscribe(val => val ? this.currentUser.destroyCurrentUser() : EMPTY);
        });

        //This communicates from AngularJS to Angular of the broadcast. Angular App uses this.
        this.authEventStatuses[authEvents.loginSuccess].next(undefined); //Clears user's data that was stored on logIn()
        this.authEventStatuses[authEvents.logoutSuccess].next(true); //Declare user logged out

        this.accountSummaryAlertFilterService.removeAccountSummaryAlerts();
    }
    
    public onlogOut(...args) {
       //nop
    }
}
