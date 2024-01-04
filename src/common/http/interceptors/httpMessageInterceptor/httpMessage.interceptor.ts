import { StateService } from '@uirouter/core';
import { Inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { stateNames as LoginStates } from 'login/constants';
import { AUTH_EVENTS } from '../../../upgrades';
import { SessionService } from '../../../services';

@Injectable()
export class HttpMessageInterceptor implements HttpInterceptor {

    constructor(
        @Inject('$rootScope') private rootScope,
        @Inject(AUTH_EVENTS) private authEvents,
        private sessionService: SessionService,
        private stateService: StateService,
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((response: HttpErrorResponse) => {
                    switch (response.status) {
                        case 401:
                            this.sessionService.destroy();
                            this.rootScope.$broadcast(this.authEvents.notAuthenticated);
                            this.stateService.go(LoginStates.Login);
                            return throwError(() => response);
                        case 403:
                            this.sessionService.destroy();
                            this.rootScope.$broadcast(this.authEvents.notAuthorized);
                            this.stateService.go(LoginStates.Login);
                            return throwError(() => response);
                        default:
                            return throwError(() => response);
                    };
                })
            );
    }
}

