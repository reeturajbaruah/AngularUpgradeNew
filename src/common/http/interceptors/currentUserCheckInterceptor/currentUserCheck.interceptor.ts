import { Inject, Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { WindowRef } from '../../../providers';
import { CurrentUserService } from '../../../services/currentUserService/currentUser.service';

@Injectable()
export class CurrentUserCheckInterceptor implements HttpInterceptor {

    constructor(
        private currentUserService: CurrentUserService,
        @Inject(WindowRef) private $window: Window
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.currentUserService.currentUserIsInSyncAcrossTabs()) {
            this.$window.location.reload();
            return EMPTY;
        }
        return next.handle(request);
    }
}
