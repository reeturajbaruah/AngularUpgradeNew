import { Inject, Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WebStorageConst } from '../../../../constants/webstorage.constants';
import { SERVER_CONSTANTS } from '../../../upgrades';
import { isObject } from '../../../utilities';
import {
    GlobalVariableService,
    CurrentUserService,
    WebStorageService
} from '../../../services';

@Injectable()
export class GlobalVariableInterceptor implements HttpInterceptor {

    constructor(
        private currentUserService: CurrentUserService,
        private webStorageConst: WebStorageConst,
        private globalVariableService: GlobalVariableService,
        private webStorage: WebStorageService,
        @Inject(SERVER_CONSTANTS) private serverConstants,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        if (event.headers.has(this.serverConstants.latestWebUiVersionHeaderKey)) {
                            this.globalVariableService.latestWebUiVersion.next(event.headers.get(this.serverConstants.latestWebUiVersionHeaderKey));
                        }
                        if (isObject(event.body)) {
                            if (event.body.currentBalanceObj && event.body.currentBalanceObj.currentBalance != null) {
                                const currentBalance = event.body.currentBalanceObj.currentBalance;
                                if (currentBalance) {
                                    this.globalVariableService.currentBalance.next(currentBalance);
                                    this.webStorage.setKeyValue(this.webStorageConst.currentBalance, currentBalance);
                                    const currentUser = this.currentUserService.getCurrentUser();
                                    if (isObject(currentUser) && isObject(currentUser.currentBalanceObj) && currentUser.currentBalanceObj.currentBalance !== currentBalance) {
                                        currentUser.currentBalanceObj.currentBalance = currentBalance;
                                        this.currentUserService.updateCurrentUser(currentUser);
                                    }
                                } else {
                                    this.webStorage.removeEntry(this.webStorageConst.currentBalance);
                                }
                            }
                            if (event.body.currentPaymentPlanBalanceObj) {
                                const currentPaymentPlanBalance = event.body.currentPaymentPlanBalanceObj.currentBalance;
                                if (currentPaymentPlanBalance) {
                                    this.webStorage.setKeyValue(this.webStorageConst.currentPaymentPlanBalance, currentPaymentPlanBalance);
                                } else {
                                    this.webStorage.removeEntry(this.webStorageConst.currentPaymentPlanBalance);
                                }
                                this.currentUserService.updateCurrentUser(Object.assign({}, this.currentUserService.getCurrentUser(), { paymentPlanBalance: currentPaymentPlanBalance }));
                            }
                        }
                    }
                }),
            );
    }
}
