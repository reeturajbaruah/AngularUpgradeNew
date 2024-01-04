(function () {
    'use strict';
    angular.module('HCTRAModule').filter('taxId', [
        function () {
            return function (taxIdInput) {
                if (!taxIdInput) { return ''; }

                var value = taxIdInput.toString().trim();
                value = value.substring(value.length - 3, value.length);

                var maskedNumber = "******" + value;

                return maskedNumber;
            };
        }
    ]);
}());