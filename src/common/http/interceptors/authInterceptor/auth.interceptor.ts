import { StateService } from '@uirouter/core';
import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { stateNames as LoginStates } from 'login/constants';
import { tap } from 'rxjs/operators';
import { AUTH_EVENTS } from '../../../upgrades';
import {
    SessionService,
    CurrentUserService
} from '../../../services';
import { AuthChannelService } from '../../../../authentication/authChannelService/authChannel.service';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        @Inject('$rootScope') private rootScope,
        @Inject(AUTH_EVENTS) private authEvents,
        private sessionService: SessionService,
        private stateService: StateService,
        private currentUserService: CurrentUserService,
        private authChannelService: AuthChannelService,
        private storefrontUtilityService: StorefrontUtilityService
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        if (typeof event.body === 'object') {
                            if (event.body.sessionTimedOut === true || event.body.securityIssue === true) {
                                if (event.body.sessionTimedOut === true) {
                                    this.rootScope.$broadcast(this.authEvents.sessionTimedOut);
                                }
                                if (event.body.securityIssue === true) {
                                    this.rootScope.$broadcast(this.authEvents.securityIssue);
                                }
                                if (this.storefrontUtilityService.isRunningAsKiosk) {
                                    this.sessionService.destroy();
                                }
                                else {
                                    this.sessionService.destroy();
                                    this.currentUserService.destroyCurrentUser();
                                    this.authChannelService.logOut();
                                    this.stateService.go(LoginStates.Login);
                                }
                            }
                        }
                    }
                }),
            );
    }
}
