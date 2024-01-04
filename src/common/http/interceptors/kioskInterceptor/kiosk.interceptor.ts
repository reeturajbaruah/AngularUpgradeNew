import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../providers';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

@Injectable()
export class KioskInterceptor implements HttpInterceptor {

    constructor(
        private storefrontUtilityService: StorefrontUtilityService,
        @Inject(WindowRef) private windowRef
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url;

        if (!url) {
            return next.handle(req);
        }

        const host = this.windowRef.location.host.toLowerCase();
        const testHost = (new URL(url, this.windowRef.location.origin)).host.toLowerCase();

        if (host !== testHost) {
            return next.handle(req);
        }

        const kioskWebStorage = this.storefrontUtilityService?.webStoreData;
        const kioskToken = kioskWebStorage?.kioskToken;

        if (this.storefrontUtilityService?.isRunningAsKiosk) {
            const setHeaders = kioskToken
                ? { 'hctra-kiosk-token': kioskToken }
                : {};

            const clonedRequest = req.clone({ setHeaders });
            return next.handle(clonedRequest);
        }

        return next.handle(req);
    }
}
