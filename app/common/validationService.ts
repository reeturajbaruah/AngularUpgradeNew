module HCTRA.Service {
    export interface IValidationService {
        (form: angular.IFormController): IValidationInnerService;
    }

    export interface IValidationInnerService {
        isErrorTriggered(input: string): boolean;
        getErrorStatusClass(input: string): string;
        getErrorList(input: string): any;
        hasSubmitted(): boolean;
        isValid(input: string): boolean;
        getErrorStatusClassForDateRange(input: string): string;
        getErrorStatusClassFastWithNullCheck(input: string): string;
        getErrorListWithNullCheck(input: string): any[];
        isValidWithNullCheck(input: string): boolean;
        isInvalidWithNullCheck(input: string): boolean;
        setPristine(): void;
    }

    //no need to export, this concrete class willnever be exposed outside of ValidationService
    class Validator implements IValidationInnerService {

        constructor(private formObj: angular.IFormController) {}

        isErrorTriggered = (input: string) => {
            return !this.formObj[input].$valid && this.formObj.$submitted;
        };

        getErrorStatusClass = (input: string) => {
            return this.isErrorTriggered(input) ? "has-error" : "";
        };

        getErrorList = (input: string) => {
            return this.formObj[input].$error;
        };

        hasSubmitted = () => {
            return this.formObj.$submitted;
        };

        isValid = (input: string) => {
            return this.formObj[input].$valid;
        };

        getErrorStatusClassForDateRange = (input: string) => {
            return !this.formObj[input].$valid ? "has-error" : "";
        };

        getErrorStatusClassFastWithNullCheck = (input: string) => {
            if (this.formObj[input]) {
                return !this.formObj[input].$valid ? "has-error" : "";
            } else {
                return "";
            }
        };

        getErrorListWithNullCheck = (input: string) => {
            if (this.formObj[input]) {
                return this.formObj[input].$error;
            } else {
                return [];
            }
        };

        isValidWithNullCheck = (input: string) => {
            return this.formObj[input] && this.formObj[input].$valid;
        };

        isInvalidWithNullCheck = (input: string) => {
            return this.formObj[input] && this.formObj[input].$invalid;
        };

        setPristine = () => {
            this.formObj.$setPristine();
        }
    }

    // Does not explicitly implement IValidationService because constructors cannot return functions
    export class ValidationService /*implements IValidationService*/ {
        static $inject = [];

        constructor() {
            return <any>this.serviceFunction;
        }

        private serviceFunction = (form: angular.IFormController) => {
            return new Validator(form);
        };


        // TODO: Try to consolidate all validation to one service location
        //var messages = {

        //    generic: {
        //        errors: ["required", "pattern", "maxlength", "minlength"],
        //        text: function (inText) {

        //            return buildMessage(validationMessages.genericPre, inText, validationMessages.genericPost);
        //        }
        //    },

        //    genericAlt: {
        //        errors: ["required", "pattern", "maxlength", "minlength"],
        //        text: function (inText) {

        //            return buildMessage(validationMessages.genericPreAlt, inText, validationMessages.genericPost);
        //        }
        //    },

        //    confirm: {
        //        errors: ["compareTo"],
        //        text: function (inText) {

        //            return buildMessage(validationMessages.confirmPre, inText, validationMessages.confirmPost);
        //        }
        //    },

        //    alphaNum: {
        //        errors: ["pattern"],
        //        text: function (inText) {

        //            return buildMessage(validationMessages.alphaNumPre, inText, validationMessages.alphaNumPost);
        //        }
        //    },

        //    alphaNumAlt: {
        //        errors: ["pattern"],
        //        text: function (inText) {

        //            return buildMessage(validationMessages.alphaNumPre, inText, validationMessages.alphaNumPostAlt);
        //        }
        //    },

        //    minLength: {
        //        errors: ["minlength"],
        //        text: function (inText) {

        //            return buildMessage(validationMessages.minLengthPre, inText, validationMessages.minLengthPost);
        //        }
        //    },

        //    maxLength: {
        //        errors: ["maxlength"],
        //        text: function (inText) {

        //            return buildMessage(validationMessages.maxLengthPre, inText, validationMessages.maxLengthPost);
        //        }
        //    },
        //};

        //function buildMessage(preMessage, inText, postMessage) {
        //    inText = inText || "";

        //    return preMessage + inText + postMessage;
        //}
    }
}

(function () {
    "use strict";
    angular.module("HCTRAModule").service("validationService", HCTRA.Service.ValidationService);
}());