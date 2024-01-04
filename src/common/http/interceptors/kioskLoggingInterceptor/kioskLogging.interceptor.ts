import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { CoreViolationsData, PushStorefrontRequest } from '../../../models';
import { GenericRepoService, WebStorageService } from '../../../services';
import { whitelistUrls } from 'storefront/constants';
import { WebStorageConst } from 'constants/webstorage.constants';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';
import { WindowRef } from '../../../providers';

@Injectable()
export class KioskLoggingInterceptor implements HttpInterceptor {

    constructor(
        private storefrontUtilityService: StorefrontUtilityService,
        private webStorage: WebStorageService,
        private webStorageConst: WebStorageConst,
        @Inject(WindowRef) private window
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request)
            .pipe(
                tap(async (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {

                        const kioskWebStorage = this.storefrontUtilityService?.webStoreData;
                        if (!this.storefrontUtilityService.isRunningAsKiosk || !kioskWebStorage || !kioskWebStorage.sessionId) { //
                            return;
                        }

                        const path = this.window.location.pathname;
                        const url = event.url;


                        if (!['/Storefront', '/Storefront/Select'].includes(path) && (this.whitelistItemSearch(url, whitelistUrls))) {
                            let violationsData = new CoreViolationsData();
                            const pushSessionRequest = {} as PushStorefrontRequest;

                            pushSessionRequest.uRL = url;
                            pushSessionRequest.storefrontSessionID = kioskWebStorage.sessionId;
                            pushSessionRequest.alert = event.body.alerts.length !== 0 ? JSON.stringify(event.body.alerts) : null;
                            pushSessionRequest.error = event.body.errors.length !== 0 ? JSON.stringify(event.body.errors) : null;
                            pushSessionRequest.angularState = request.params.get('angularState');

                            const reqBody = request.body;
                            if (reqBody) {
                                if (reqBody['violationsData']) {
                                    violationsData = reqBody['violationsData'];
                                }
                                if (violationsData.licensePlate) {
                                    pushSessionRequest.lP = violationsData.licensePlate || null;
                                    pushSessionRequest.licensePlateState = violationsData.licensePlate || null;
                                    pushSessionRequest.invoice = violationsData.invoiceNumber || null;
                                }
                                if (reqBody['userName']) {
                                    pushSessionRequest.loginID = reqBody['userName'];
                                }
                                const violationsLogData = this.webStorage.getValue(this.webStorageConst.violationsLogData);
                                if (violationsLogData) {
                                    pushSessionRequest.email = violationsLogData.violationsEmail || null;
                                    pushSessionRequest.lP = violationsLogData.licensePlate || pushSessionRequest.lP;
                                    pushSessionRequest.licensePlateState = violationsLogData.licenseState || pushSessionRequest.licensePlateState;
                                    pushSessionRequest.invoice = violationsLogData.invoiceNumber || pushSessionRequest.invoice;
                                }


                                await fetch('/api/sessions/Storefront/PushToStorefrontDB', {
                                    method: 'POST',
                                    body: JSON.stringify(pushSessionRequest),
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json'
                                    }
                                });
                            }
                        }

                    }
                })

            );
    }

    private whitelistItemSearch(path, whitelist) {
        for (const item of whitelist) {
            if (path.indexOf(item) >= 0 || item.indexOf(path) >= 0) {
                return true;
            }
        }
        return false;
    }
}


