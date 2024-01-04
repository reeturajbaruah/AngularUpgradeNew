import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { siteVerbiage } from '../../../../constants/module';
import { ToasterService } from '../../../services';
import { ToggleButtonsService } from '../../../services/toggleButtons/toggleButtons.service';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

    constructor(
        private toggleButtonsService: ToggleButtonsService,
        private toasterService: ToasterService,
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((response: HttpErrorResponse) => {
                    if (response.status < 400) {
                        return throwError(() => response);
                    }
                    this.toggleButtonsService.enableButtonsGlobal();
                    this.toasterService.show('Error', siteVerbiage.genericErrorMsg, false);
                    return throwError(() => response);
                })
            );
    }
}
