(function () {
    'use strict';

    var compareTo = function () {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function (scope, element, attributes, ngModel) {

                ngModel.$validators.compareTo = function (modelValue) {

                    if (isFalsy(modelValue) && isFalsy(scope.otherModelValue))
                        return true;

                    if (modelValue && scope.otherModelValue && attributes && ("caseInsensitive" in attributes))
                        return ((modelValue.toLowerCase() == scope.otherModelValue.toLowerCase()));
                    else
                        return ((modelValue == scope.otherModelValue));
                };

                scope.$watch('otherModelValue', function () {
                    ngModel.$validate();
                });

                //scope.$watch('modelValue', function () {
                //    ngModel.$validate();
                //});
            }
        };

        function isFalsy(val) { return !val; }
    };

    angular.module('HCTRAModule').directive("compareTo", compareTo);
})();