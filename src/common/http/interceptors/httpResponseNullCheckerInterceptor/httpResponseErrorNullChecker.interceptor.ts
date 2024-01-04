import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { isObject } from '../../../utilities';

@Injectable()
export class HttpResponseErrorNullCheckerInterceptor implements HttpInterceptor {

    constructor(
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        let clonedEvent;
                        if (!event.body) {
                            clonedEvent = event.clone({ body: {} });
                        } else {
                            clonedEvent = event.clone();
                        }
                        if (isObject(clonedEvent.body)) {
                            if (!clonedEvent.body.errors) {
                                clonedEvent.body.errors = [];
                            }
                            if (!clonedEvent.body.alerts) {
                                clonedEvent.body.alerts = [];
                            }
                        }
                        return clonedEvent;
                    }
                    return event;
                }),
                catchError((response: HttpErrorResponse) => {
                    if (response.status >= 400 || [0, null].includes(response.status)) {
                        let body;
                        if (!response.error) {
                            body = {};
                        } else {
                            body = response.error;
                        }
                        if (isObject(body)) {
                            if (!body.errors) {
                                body.errors = [];
                            }
                            if (!body.alerts) {
                                body.alerts = [];
                            }
                        }

                        const clonedResponse = new HttpErrorResponse({
                            error: body,
                            headers: response.headers,
                            status: response.status,
                            statusText: response.statusText,
                            url: response.url || undefined,
                        });

                        return throwError(() => clonedResponse);
                    }

                    return throwError(() => response);
                })
            );
    }
}


