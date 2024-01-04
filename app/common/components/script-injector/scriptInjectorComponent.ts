module HCTRA.Controller {

    // Dynamically builds a script tag and add it the head tag then the enable attribute turns true

    export class ScriptInjectorController {
        static $inject = [
            "$window",
            "environmentConfig",
            "loggingService",
            "serverConstants"
        ];

        constructor(
            private $window: angular.IWindowService,
            private environmentConfig: HCTRA.Constant.IEnvironmentConfig,
            private loggingService: HCTRA.Service.ILoggingService,
            private serverConstants: HCTRA.Constant.ServerConstants
        ) { }

        // Binding
        private enable: boolean;
        private srcAttempt: string;

        // Properties
        private readonly elementType: string = "text/javascript";
        private scriptIntegrityObj: Constant.ScriptIntegrityToggle;

        public $onInit = () => {
            this.scriptIntegrityObj = this.environmentConfig.scriptIntegrityConfig[this.srcAttempt] || ({} as Constant.ScriptIntegrityToggle);
        }

        public $postLink = () => {
            if (this.enable) {

                const originalElementAttributes: { [attr: string]: string } = {
                    type: this.elementType,
                    src: this.srcAttempt,
                    integrity: this.scriptIntegrityObj.ShaKey,
                    crossorigin: this.scriptIntegrityObj.CrossoriginAttribute,
                    srcFallback: this.scriptIntegrityObj.SrcFallback
                };

                if (this.isValidIntegrityValue(this.scriptIntegrityObj.ShaKey)) {
                    this.addScriptElementToDOM(originalElementAttributes);
                }
            }
        }

        private onError = (newScriptElement: HTMLScriptElement) => {
            this.logSrcThatFailedToLoad(newScriptElement.src);
            newScriptElement.parentNode.removeChild(newScriptElement);

            if (newScriptElement.hasAttribute("srcFallback")) {

                const fallBackScriptPath = this.serverConstants[this.scriptIntegrityObj.SrcFallback] || this.scriptIntegrityObj.SrcFallback;

                const fallbackElementAttributes: { [attr: string]: string } = {
                    type: this.elementType,
                    src: `${fallBackScriptPath}?${this.serverConstants.currentlyDownloadedWebUiVersion.replace(/\./g, "")}`
                };

                this.addScriptElementToDOM(fallbackElementAttributes);
            }
        }



        //TODO: When migrating scriptInjectorComponent to Angular, see if it is possible to simplify addScriptElementToDOM().
        //It was split up this way due to unit test complications.
        private addScriptElementToDOM = (newElementAttributes: { [attr: string]: string }): void => {
            const newScriptElement = this.$window.document.createElement("script");
            Object.keys(newElementAttributes)
                .forEach(attr => newScriptElement.setAttribute(attr, newElementAttributes[attr]));

            newScriptElement.addEventListener("load", () => this.checkElementPresence(this.environmentConfig.mcAfeeIconQuerySelector), false);

            newScriptElement.addEventListener("error", () => this.onError(newScriptElement), false);
            this.$window.document.getElementsByTagName("head")[0].appendChild(newScriptElement);
        }

        private logSrcThatFailedToLoad = (srcThatFailedAndThrewError: string) => {
            this.loggingService.logMessage(`Error from ScriptInjectorComponent. Failed to load from source: '${srcThatFailedAndThrewError}'.`, null, null);
        };

        //TODO: When migrating scriptInjectorComponent to Angular, use RXJS to replace "delay" AND forLoop 
        //(see MatIconAvailabilityService at.pipe(retryWhen())
        private checkElementPresence = async (elementQuerySelector: string) => {
            const delay = ms => new Promise(res => this.$window.setTimeout(res, ms));
            let element;

            //Retry 3 times max
            for (let i = 0; i < 2 && !element; i++) {
                await delay(2500);
                element = this.$window.document.querySelector(elementQuerySelector);
            }

            //Log Error if element is not detected
            //Do nothing if element is detected successfully.
            if (!element) {
                this.loggingService.logMessage(`Error from ScriptInjectorComponent: Unable to locate presence of element with query selector: '${elementQuerySelector}'.`, null, null);

                //TODO: Delete this line. it is only here for testing purposes
                //alert(`failure: ${elementQuerySelector}`);
            }

            //TODO: Delete this line. it is only here for testing purposes
            //else { alert(`success: ${elementQuerySelector}`); }
        };

        private isValidIntegrityValue = (shaKey: string) => {
            return angular.isString(shaKey)
                && ["sha256-", "sha384-", "sha512-"].some(prefix => shaKey.startsWith(prefix));
        }
    }
}

(() => {
    "use strict";
    angular.module('HCTRAModule').component("scriptInjector", {
        bindings: {
            enable: "<",
            srcAttempt: "@"
        },

        controller: HCTRA.Controller.ScriptInjectorController
    });
})();