module HCTRA.Service {
    "use strict";

    export interface ILoggingService {
        logMessage(errorMessage: string, stackTrace: string, cause: string): void;
        checkStringLengthsAndEraseIfNeeded(exceptionObject: any): void;
    }

    export class LoggingService implements ILoggingService {

        static $inject = ["stateStackMemoryService", "$window", "sniffrjs", "serverConstants"];

        private MAX_STRING_LENGTH = 500;
        private STRING_TOO_LONG_MESSAGE = "|| The rest of this string was cutoff to guard against overflow ||";

        constructor(private stateStackMemoryService,
            private $window: angular.IWindowService,
            private sniffrjs,
            private serverConstants) { }


        public logMessage = (errorMessage: string, stackTrace: string, cause: string) => {
            const stateStack = this.stateStackMemoryService.printStack();

            const exceptionObject: any = {
                url: this.$window.location.href,
                cause: (cause || ""),
                opSystemName: this.sniffrjs.os.name,
                opSystemVersion: this.sniffrjs.os.versionString,
                browserName: this.sniffrjs.browser.name,
                browserVersion: this.sniffrjs.browser.versionString,
                deviceName: this.sniffrjs.device.name,
                deviceVersion: this.sniffrjs.device.versionString,
                stateStack: stateStack,
                errorMessage: (errorMessage || "")
            };

            if (stackTrace) {
                exceptionObject.stackTrace = stackTrace;
            }

            //having to use sessionStorage directly to avoid circular reference
            let linfo;
            if (sessionStorage) {
                linfo = angular.fromJson(sessionStorage.getItem("linfo"));
            }

            if (linfo) {
                exceptionObject.licPlate = linfo.licNumber;
                exceptionObject.licState = linfo.licState;
                exceptionObject.invoiceNumber = linfo.invNumber;
            }

            this.checkStringLengthsAndEraseIfNeeded(exceptionObject);

            ////cannot use Angular's $http or genericRepo for this call to prevent circular reference
            const laststate = this.stateStackMemoryService.getLastState();
            const stateName = laststate ? laststate.name : "";

            angular.element.ajax({
                url: "api/sessions/AngularLog/LogAngularExceptions?angularState=" + stateName + "&clientVersion=" + this.serverConstants.currentlyDownloadedWebUiVersion,
                data: exceptionObject,
                method: "POST",
                beforeSend: (request) => {
                    request.setRequestHeader("X-XSRF-TOKEN", this.getCookie("XSRF-TOKEN"));
                }
            });
        }

        public checkStringLengthsAndEraseIfNeeded = (exceptionObject: any) => {
            const endOfSubstringIndex = this.MAX_STRING_LENGTH - this.STRING_TOO_LONG_MESSAGE.length;
            if (exceptionObject) {
                if (exceptionObject.errorMessage && (angular.isString(exceptionObject.errorMessage)) && exceptionObject.errorMessage.length > this.MAX_STRING_LENGTH) {
                    exceptionObject.errorMessage = exceptionObject.errorMessage.substring(0, endOfSubstringIndex) + this.STRING_TOO_LONG_MESSAGE;
                }
                if (exceptionObject.stateStack && (angular.isString(exceptionObject.stateStack)) && exceptionObject.stateStack.length > this.MAX_STRING_LENGTH) {
                    exceptionObject.stateStack = exceptionObject.stateStack.substring(0, endOfSubstringIndex) + this.STRING_TOO_LONG_MESSAGE;
                }
                if (exceptionObject.cause && (angular.isString(exceptionObject.cause)) && exceptionObject.cause.length > this.MAX_STRING_LENGTH) {
                    exceptionObject.cause = exceptionObject.cause.substring(0, endOfSubstringIndex) + this.STRING_TOO_LONG_MESSAGE;
                }
            }
        }

        // Copied from cookie.service.ts because AngularJS unit tests was having issues with the injection of CookieService
        private getCookie(key: string): string {
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
}

(function () {
    "use strict";
    angular.module("HCTRAModule")
        .service("loggingService", HCTRA.Service.LoggingService);
}());