import { Inject, Injectable } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/core';
import { WindowRef } from 'common/module';
import { ThirdPartyDowngrades } from 'common/thirdPartyDowngrades';
import { SERVER_CONSTANTS, ENVIRON_CONFIG } from 'common/upgrades';
import { isString } from 'lodash';


//TODO: Can we merge this with applicationLoggingService (wraps loggingServie). Not sure why they are different services.
@Injectable()
export class LoggingService {

    private sniffrjs;

    constructor(
        @Inject(WindowRef) private $window: Window,
        private thirdPartyDowngrades: ThirdPartyDowngrades,
        @Inject(SERVER_CONSTANTS) private serverConstants,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private uiRouterGlobals: UIRouterGlobals
    ) {
        this.sniffrjs = this.thirdPartyDowngrades.Sniffr;
    }

    private readonly MAX_STRING_LENGTH = 500;
    private readonly STRING_TOO_LONG_MESSAGE = '|| The rest of this string was cutoff to guard against overflow ||';


    public logMessage(message: string) {
        this.logException(new Error(message));
    }

    public logException(exception: Error) {
        const exceptionObject: { [key: string]: string } = {
            url: this.$window.location.href,
            opSystemName: this.sniffrjs.os.name,
            opSystemVersion: this.sniffrjs.os.versionString,
            browserName: this.sniffrjs.browser.name,
            browserVersion: this.sniffrjs.browser.versionString,
            deviceName: this.sniffrjs.device.name,
            deviceVersion: this.sniffrjs.device.versionString,
            errorMessage: (exception.message || ''),
            stackTrace: (exception.stack || '')
        };

        // Having to use sessionStorage directly to avoid circular reference
        let linfo;
        if (this.$window.sessionStorage) {
            linfo = JSON.parse(this.$window.sessionStorage.getItem('linfo'));
        }

        if (linfo) {
            exceptionObject.licPlate = linfo.licNumber;
            exceptionObject.licState = linfo.licState;
            exceptionObject.invoiceNumber = linfo.invNumber;
        }

        this.checkStringLengthsAndEraseIfNeeded(exceptionObject);

        const stateName = this.uiRouterGlobals.current.name;

        // Cannot use Angular's HTTP service because of circular reference
        const postLogPromise = this.httpPostLog(
            `api/sessions/AngularLog/LogAngularExceptions?angularState=${stateName}&clientVersion=${this.serverConstants.currentlyDownloadedWebUiVersion}`,
            exceptionObject
        );

        if (this.environmentConfig.angularExPopUpEnabled === 'true') {
            this.$window.alert(`${exception.message}\n${exception.stack}`);
        }
    }


    private httpPostLog(url: string, body: { [key: string]: string }) {
        return this.$window.fetch(url, {
            body: JSON.stringify(body),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': this.getCookie('XSRF-TOKEN')
            }
        });
    }

    private checkStringLengthsAndEraseIfNeeded(exceptionObject: { [key: string]: string }) {
        const endOfSubstringIndex = this.MAX_STRING_LENGTH - this.STRING_TOO_LONG_MESSAGE.length;
        if (exceptionObject) {
            if (exceptionObject.errorMessage && (isString(exceptionObject.errorMessage)) && exceptionObject.errorMessage.length > this.MAX_STRING_LENGTH) {
                exceptionObject.errorMessage = exceptionObject.errorMessage.substring(0, endOfSubstringIndex) + this.STRING_TOO_LONG_MESSAGE;
            }
            if (exceptionObject.stackTrace && (isString(exceptionObject.stackTrace)) && exceptionObject.stackTrace.length > this.MAX_STRING_LENGTH) {
                exceptionObject.stackTrace = exceptionObject.stackTrace.substring(0, endOfSubstringIndex) + this.STRING_TOO_LONG_MESSAGE;
            }
        }
    }

    // Copied from cookie.service.ts to prevent circular references
    private getCookie(key: string) {
        if (!this.$window.document.cookie) {
            return '';
        }

        const pairs: string[] = this.$window.document.cookie.split(/;\s*/);

        const prefix = `${encodeURIComponent(key)}=`;

        for (const pair of pairs) {
            if (pair.indexOf(prefix) === 0) {
                return decodeURIComponent(pair.substring(prefix.length));
            }
        }
        return '';
    }
}
