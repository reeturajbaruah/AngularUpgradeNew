import { Inject, Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { WindowRef } from '../../../providers';
import { LoggingService } from '../../../../logging/loggingService/logging.service';
import { siteVerbiage } from '../../../../constants/module';
import { isObject } from '../../../utilities';
import { AuthenticationService } from '../../../../authentication/authenticationService/authentication.service';
import { ENVIRON_CONFIG } from '../../../upgrades';

@Injectable()
export class HttpResponseErrorLogInterceptor implements HttpInterceptor {
    method: string;

    constructor(
        private loggingService: LoggingService,
        @Inject(WindowRef) private $window: Window,
        private injector: Injector,
        @Inject(ENVIRON_CONFIG) private environConfig
    ) { }

    toLog(errors: []): boolean {
        if (Array.isArray(errors)) {
            const errorMessagesToLog = this.environConfig.errorMessageLogging.messages;
            for (const error of errors) {
                if (errorMessagesToLog[error]) {
                    return true;
                }
            }
        }
        return false;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.method = request.method;

        return next.handle(request)
            .pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        const errorMsg = {
                            method: this.method,
                            url: event.url,
                            message: event.body,
                            status: event.status
                        };

                        if (isObject(event.body) && Array.isArray(event.body.errors) && event.body.errors.length > 0) {
                            if (this.toLog(event.body.errors)) {
                                this.loggingService.logMessage(JSON.stringify(errorMsg));
                            }
                        } else if ([204, 206].includes(event.status)) {
                            this.loggingService.logMessage(JSON.stringify(errorMsg));
                            if (!isObject(event.body)) {
                                return event.clone({ body: { originalResponse: event.body, errors: [], alerts: [] } });
                            }
                            errorMsg.message = siteVerbiage.genericErrorMsg;
                            if (Array.isArray(event.body.errors)) {
                                event.body.errors.push(errorMsg);
                            }
                        }
                    }
                    return event;
                }),
                catchError((response: HttpErrorResponse) => {
                    const errorMsg = {
                        method: this.method,
                        url: response.url,
                        message: response.error,
                        status: response.status
                    };

                    if (isObject(response.error) && Array.isArray(response.error.errors) && response.error.errors.length > 0) {
                        if (this.toLog(response.error.errors)) {
                            this.loggingService.logMessage(JSON.stringify(errorMsg));
                        }
                    } else if (response.status >= 400 || [0, null].includes(response.status)) {

                        if (response.status === 503) {
                            this.$window.location.reload();
                        }

                        if (response.status === 417) {
                            const authenticationService = this.injector.get(AuthenticationService);
                            authenticationService.logOutOnFourOneSeven();
                        }

                        this.loggingService.logMessage(JSON.stringify(errorMsg));

                        let newError;
                        if (!isObject(response.error)) {
                            newError = { originalResponse: response.error, errors: [], alerts: [] };
                        } else {
                            newError = response.error;
                        }

                        const clonedResponse = new HttpErrorResponse({
                            error: newError,
                            headers: response.headers,
                            status: response.status,
                            statusText: response.statusText,
                            url: response.url || undefined,
                        });

                        if (response.status !== 417) {
                            errorMsg.message = siteVerbiage.genericErrorMsg;
                            clonedResponse.error.errors.push(errorMsg);
                        }
                    }

                    return throwError(() => response);
                })
            );
    }
}




