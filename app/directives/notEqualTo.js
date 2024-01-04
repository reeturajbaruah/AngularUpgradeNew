(function () {
    'use strict';

    angular.module('HCTRAModule').directive("notEqualTo", [
    function () {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=notEqualTo"
            },
            link: function (scope, element, attributes, ngModel) {

                ngModel.$validators.notEqualTo = function (modelValue) {
                    if (angular.isUndefined(scope.otherModelValue) || scope.otherModelValue === "") {
                        return true;
                    } else {
                        return (!(modelValue == scope.otherModelValue));
                    }
                };

                scope.$watch('otherModelValue', function () {
                    ngModel.$validate();
                }, true);

                scope.$watch('modelValue', function () {
                    ngModel.$validate();
                });
            }
        };
    }]);
}());