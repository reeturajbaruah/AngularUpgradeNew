/* eslint-disable no-useless-escape */
(function () {
    "use strict";

    angular.module('HCTRAModule').directive("doubles", [
        function () {
            return {
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {

                    ngModel.$validators.doubles = function (modelValue) {
                        // console.log("Inside remove doubles directive");
                        // console.log("Model value: " + modelValue);

                        var regexChecks = [/@@/g, /\s\s/g, /\.\./g, /\-\-/g, /\_\_/g, /\s\s/g, /[\<\>\'\"]/g];

                        // make sure the model is not empty and thus not a string
                        if (modelValue.match) {
                            var thisCheck;
                            for (var x = 0; x < regexChecks.length; x++) {
                                thisCheck = modelValue.match(regexChecks[x]);
                                if (thisCheck) {
                                    //failing characters found
                                    return false;
                                }
                            }
                            // no failing double characters found
                            return true;
                        } else {
                            return true;
                        }
                    };
                }
            };
        }]);
}());