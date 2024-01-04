(function () {
    'use strict';
    angular.module('HCTRAModule').filter('charReplace', [
        function () {
            return function (input, charReplaced, charReplacer) {
                if (!input) { return ''; }
                return input.toString().trim().replace(charReplaced, charReplacer);
            };
        }
    ]);
}());