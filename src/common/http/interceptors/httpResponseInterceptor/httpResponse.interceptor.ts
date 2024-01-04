import { Inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FILE_HEADER, NO_SPIN, ResponseErrorService } from 'common/services';
import { ToggleButtonsService } from '../../../services/toggleButtons/toggleButtons.service';
import { isObject } from '../../../utilities';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

    constructor(
        private toggleButtonsService: ToggleButtonsService,
        private responseErrorService: ResponseErrorService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const noSpin = request.context.get(NO_SPIN);
        const fileHeader = request.context.get(FILE_HEADER);

        return next.handle(request)
            .pipe(
                map((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        const body = event.body;
                        
                        if (noSpin === false) {
                            this.toggleButtonsService.enableButtonsGlobal();
                        }
                        if (isObject(body)) {
                            if (fileHeader === true) {
                                body.headers = event.headers;
                            }
                            if (body.errors && body.errors.length > 0) {
                                this.responseErrorService.handleMaintenanceErrors(body);
                            }
                        }

                        return event.clone({ body });
                    }

                    return event;
                }),
                catchError((response: HttpErrorResponse) => {
                    const body = response.error;
                    if (noSpin === false) {
                        this.toggleButtonsService.enableButtonsGlobal();
                    }

                    if (isObject(response.error)) {
                        if (fileHeader === true) {
                            body.headers = response.headers;
                        }
                        if (body.errors && body.errors.length > 0) {
                            this.responseErrorService.handleMaintenanceErrors(body);
                        }
                    }

                    return throwError(() => response);
                })
            );
    }
}
