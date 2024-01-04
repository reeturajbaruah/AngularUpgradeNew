(function () {
    'use strict';
    angular.module('HCTRAModule').filter('usPhone', [
        function () {
            return function (telephoneInput) {
                if (!telephoneInput) { return ''; }

                var value = telephoneInput.toString().trim().replace(/-/g, '');

                if (value.match(/[^0-9]/)) {
                    return telephoneInput;
                }

                var city = value.slice(0, 3);
                var number = value.slice(3);

                var outNumber = city + '-' + number.slice(0, 3) + '-' + number.slice(3);

                return outNumber.trim();
            };
        }
    ]);
}());