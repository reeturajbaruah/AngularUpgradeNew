(function () {
    'use strict';
    
    angular.module('HCTRAModule').directive("optionalCompareTo", [
    function () {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=optionalCompareTo"
            },
            link: function (scope, element, attributes, ngModel) {

                ngModel.$validators.optionalCompareTo = function (modelValue) {
                    if (angular.isUndefined(scope.otherModelValue) || scope.otherModelValue === "") {
                        return true;
                    } else {
                        return ((modelValue == scope.otherModelValue));
                    }

                };

                scope.$watch('otherModelValue', function () {
                    ngModel.$validate();
                });

                scope.$watch('modelValue', function () {
                    ngModel.$validate();
                });
            }
        };
    }]);
}());