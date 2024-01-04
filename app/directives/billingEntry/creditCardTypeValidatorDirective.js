(function () {
    'use strict';

    angular.module('HCTRAModule').directive("creditCardTypeValidator", ['creditCardTypeService',
        //CreditCardType is convereted to enum in Angular
        function (creditCardTypeService) {
            return {
                require: "ngModel",
                scope: {
                    "creditcard.cardCode": "="
                },
                link: function (scope, element, attributes, ngModel) {                    
                    ngModel.$validators.creditCardTypeValidator = function (modelValue) {
                        var autoFilledCardNumberRegex = /^\*{12}-\d{4}/;

                        if (angular.isUndefined(modelValue) || modelValue == "") {
                            if (scope.$parent.creditCard) {
                                scope.$parent.creditCard.cardCode = "NA";
                            }
                            return false;
                        }

                        if (!autoFilledCardNumberRegex.test(modelValue) && modelValue) {
                            scope.$parent.creditCard.cardCode = creditCardTypeService.findCardCode(modelValue);
                        }
                        if (scope.$parent.creditCard.cardCode === "NA") {
                            return false;
                        }
                        return true;
                    };

                    scope.$watch('creditCard.cardNbr', function () {                       
                        ngModel.$validate();
                    });
                }
            };
        }]);
}());