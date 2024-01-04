/* eslint-disable no-useless-escape */
angular.module('HCTRAModule').directive("emailValid", function () {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function (scope, element, attributes, ngModel) {

            ngModel.$validators.emailValid = function (modelValue) {

                if (!modelValue) {
                    return true;
                }

                modelValue = modelValue.toString();

                var match = modelValue.match(/^(([^<>()[\]\\.,;:\s@&\*\"]+(\.[^<>()[\]\\.,;:\s@&\*\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                if (!match) {
                    return false;
                } else {
                    return true;
                }

            };
        }
    };
});