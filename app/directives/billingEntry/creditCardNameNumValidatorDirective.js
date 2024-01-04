(function () {
    'use strict';

    angular.module('HCTRAModule').directive('creditCardNameNumValidator', [
        function () {
            return {
                scope: {
                    "creditCardNameNumValidator": '@'
                },
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.creditCardNameNumValidator = function (modelValue) {
                        if (angular.isUndefined(modelValue)) { return false; }

                        if (angular.isDefined(scope.$parent.creditCard.cardNbr)) {
                            var nameOnCard = modelValue;

                            if (nameOnCard.search(/\d{10}/) !== -1) { return false; }
                        }
                        return true;
                    };
                    scope.$watch('creditCardNameNumValidator', function () {
                        ngModel.$validate();
                    });
                }
            };
        }]);
}());