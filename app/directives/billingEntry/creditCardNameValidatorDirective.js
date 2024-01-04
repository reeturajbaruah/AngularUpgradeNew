/* eslint-disable no-useless-escape */
(function () {
    'use strict';

    angular.module('HCTRAModule').directive("creditCardNameValidator", ['responseErrorService',
        function (responseErrorService) {
            return {
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    var cardPrefixLengthRegex = /.*\d{5}.*/;
                    var validCardNameRegex = /^[0-9a-zA-Z\-\,\.\'\s\/]*$/;

                    ngModel.$validators.creditCardNameValidator = function (modelValue) {
                        if (angular.isUndefined(modelValue)) { return false; }

                        if (validCardNameRegex.test(modelValue)) {
                            if (cardPrefixLengthRegex.test(modelValue)) {
                                if (!scope.$parent.toasterVisible) {
                                    responseErrorService.displayToast("Please verify the name on the credit card is correct.", 'warning');
                                    scope.$parent.toasterVisible = true;
                                }
                            } else {
                                scope.$parent.toasterVisible = false;
                            }
                            return true;
                        }
                        return false;
                    };
                    scope.$watch('modelValue', function () {
                        ngModel.$validate();
                    });
                }
            };
        }]);
}());