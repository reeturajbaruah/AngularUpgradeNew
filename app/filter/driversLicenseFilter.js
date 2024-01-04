(function () {
    'use strict';
    angular.module('HCTRAModule').filter('driversLicense', [
        function () {
            return function (driversLicenseInput) {
                if (!driversLicenseInput) { return ''; }

                var value = driversLicenseInput.toString().trim();
                value = value.substring(value.length - 3, value.length);

                var maskedNumber = "***-" + value;

                return maskedNumber;
            };
        }
    ]);
}());