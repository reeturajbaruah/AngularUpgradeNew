(function () {
    'use strict';
    angular.module('HCTRAModule').directive("capitalizeAll", ['$parse',
        function ($parse) {
            return {
                restrict: 'A',
                require: "ngModel",
                link: function (scope, element, attrs, ctrl) {
                    var capitalizeAll = function (inputValue) {
                        if (angular.isUndefined(inputValue)) {
                            inputValue = '';
                        }

                        var capitalized = inputValue.toUpperCase();
                        if (capitalized !== inputValue) {
                            ctrl.$setViewValue(capitalized);
                            ctrl.$render();
                        }
                        return capitalized;
                    };

                    ctrl.$parsers.push(capitalizeAll);
                    capitalizeAll($parse(attrs.ngModel)(scope));
                }
            };
        }]);
}());