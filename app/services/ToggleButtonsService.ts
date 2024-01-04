/*
module HCTRA.Service {

    export interface IToggleButtonsService {

        disableButtonsGlobal(): void;
        enableButtonsGlobal(): void;
        disableUntilResolved(inProm: ng.IPromise<any>): ng.IPromise<any>;
    }

    export class ToggleButtonsService implements IToggleButtonsService {

        static $inject = ["hctraSpinnerService", "$document"]

        constructor(private hctraSpinnerService: HCTRA.Service.IHctraSpinnerService, private $document) { }

        private static locked: boolean = false;

        //this is not exposed through the interface, it is for testing only
        public resetLock = (): void => {
            ToggleButtonsService.locked = false;
        }

        public disableButtonsGlobal = (): void => {

            if (!ToggleButtonsService.locked) {
                this.disableButtons();
            }
        };

        public enableButtonsGlobal = (): void => {

            if (!ToggleButtonsService.locked) {
                this.enableButtons();
            }
        };

        public disableUntilResolved = (inProm: ng.IPromise<any>): ng.IPromise<any> => {

            ToggleButtonsService.locked = true;
            this.disableButtons();
            return inProm.finally(() => {
                ToggleButtonsService.locked = false;
                this.enableButtons();
            });
        };

        public disableButtons = (): void => {

            this.hctraSpinnerService.startSpinner();
            angular.element("button:not(#nav-expander):not(.exclude-global-disable)").prop("disabled", true);
            angular.forEach(this.$document[0].getElementsByClassName("disable-on-api-call"), toDisable => angular.element(toDisable).addClass("disabled"));
        };

        public enableButtons = (): void => {

            this.hctraSpinnerService.stopSpinner();
            angular.element("button:not(.exclude-global-disable)").prop("disabled", false);
            angular.element("disable-on-api-call").prop("disabled", false);
            angular.forEach(this.$document[0].getElementsByClassName("disable-on-api-call"), toDisable => angular.element(toDisable).removeClass("disabled"));

        };
    }
}

(function () {

    "use strict";

    angular.module("HCTRAModule").service("toggleButtonsService", HCTRA.Service.ToggleButtonsService);
}());
 */