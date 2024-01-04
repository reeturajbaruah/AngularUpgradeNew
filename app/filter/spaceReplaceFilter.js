(function () {
    'use strict';
    angular.module('HCTRAModule').filter('spaceReplace', [
        function () {
            return function (input, charReplacer) {
                if (!input) { return ''; }
                if (!charReplacer) { charReplacer = ''; }
                return input.toString().trim().replace(/\s/g, charReplacer);
            };
        }
    ]);
}());