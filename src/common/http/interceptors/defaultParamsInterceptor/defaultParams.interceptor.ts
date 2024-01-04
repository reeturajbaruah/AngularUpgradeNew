import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/core';
import { SERVER_CONSTANTS } from 'common/upgrades';
import { Observable } from 'rxjs';
import { CookieService, NO_SPIN, OperatingSystemSnifferService } from 'common/services';
import { ToggleButtonsService } from '../../../services/toggleButtons/toggleButtons.service';
import { WindowRef } from '../../../providers';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';

@Injectable()
export class DefaultParamsInterceptor implements HttpInterceptor {

    constructor(
        private uiRouterGlobals: UIRouterGlobals,
        @Inject(SERVER_CONSTANTS) private serverConstants,
        private toggleButtonsService: ToggleButtonsService,
        private cookieService: CookieService,
        private operatingSystemSnifferService: OperatingSystemSnifferService,
        private storefrontUtilityService: StorefrontUtilityService,
        @Inject(WindowRef) private windowRef: Window
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //only add extra headers if the host of req is the same as hctra domain
        const url = req.url;

        if (!url) {
            return next.handle(req);
        }

        const host = this.windowRef.location.host.toLowerCase();
        const testHost = (new URL(url, this.windowRef.location.origin)).host.toLowerCase();

        if (host !== testHost) {
            return next.handle(req);
        }

        const setHeaders = {
            clientVersion: this.serverConstants.currentlyDownloadedWebUiVersion,
        };

        //If the request is made using httpService, it will have the NO_SPIN context prope
        if (req.context.has(NO_SPIN)) {
            const appName = this.serverConstants.appNameHeaderKey;
            if (this.storefrontUtilityService.isRunningAsKiosk) {
                setHeaders[appName] = this.serverConstants.appNameWebsiteStorefrontHeaderValue;
            } else {
                this.operatingSystemSnifferService.getOS();

                if (this.operatingSystemSnifferService.isDesktopOs()) {
                    setHeaders[appName] = this.serverConstants.appNameWebsiteDesktopHeaderValue;
                } else {
                    setHeaders[appName] = this.serverConstants.appNameWebsiteMobileHeaderValue;
                }
            }

            setHeaders[this.serverConstants.versionHeaderKey] = this.serverConstants.currentlyDownloadedWebUiVersion.split('.').slice(0, 3).join('.');

            if (req.context.get(NO_SPIN) === false) {
                this.toggleButtonsService.disableButtonsGlobal();
            }
        }

        if (req.method === 'GET') {
            setHeaders['X-XSRF-TOKEN'] = this.cookieService.get('XSRF-TOKEN');
        }

        //do not include angularState if falsy. 
        //F5 performs HTTP checks and if an empty header is seen, it no likey
        if (this.uiRouterGlobals.current.name) {
            setHeaders['angularState'] = this.uiRouterGlobals.current.name;
        }

        const clonedRequest = req.clone({ setHeaders });

        return next.handle(clonedRequest);
    }

}

