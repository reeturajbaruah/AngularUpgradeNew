(function () {
    'use strict';

    angular.module('HCTRAModule').filter('capitalize', [
        function () {
            return function (input) {
                var inputBool = !!input;
                if (inputBool) {
                    return input.replace(/([^\W_]+[^\s-]*) */g,
                        function (txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        });
                } else {
                    return '';
                }
            };
        }]);
}());