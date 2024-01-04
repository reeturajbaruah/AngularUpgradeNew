module HCTRA.Directive {

    export class LuhnAlgorithmDirective implements ng.IDirective {
        require = "ngModel";

        constructor() { }

        link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: HCTRA.Model.IBillingInfoDirectiveAttributes, ngModel: any) => {
            ngModel.$validators.luhn = function (modelValue) {

                if (!modelValue) {
                    return true;
                }
                else if (/^\*{12}-\d{4}$/.test(modelValue)) {
                    return true;
                }

                modelValue = modelValue.toString();

                if (/[^0-9-\s]+/.test(modelValue)) return false;

                let nCheck = 0;
                let nDigit = 0;
                let bEven = false;
                modelValue = modelValue.replace(/\D/g, "");

                for (var n = modelValue.length - 1; n >= 0; n--) {
                    let cDigit = modelValue.charAt(n);
                    nDigit = parseInt(cDigit, 10);

                    if (bEven) {
                        if ((nDigit *= 2) > 9) nDigit -= 9;
                    }

                    nCheck += nDigit;
                    bEven = !bEven;
                }

                return (nCheck % 10) == 0;

            };
        };


        static factory(): ng.IDirectiveFactory {
            const directive = () => new LuhnAlgorithmDirective();
            directive.$inject = [];
            return directive
        }
    }

}

(function () {
    'use strict';
    angular.module('HCTRAModule').directive("luhn", HCTRA.Directive.LuhnAlgorithmDirective.factory());
} ());