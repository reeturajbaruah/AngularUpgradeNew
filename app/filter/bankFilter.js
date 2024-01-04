(function () {
    'use strict';

    angular.module('HCTRAModule').filter('bankAccount', [
        function () {
            return function (bankAccountInput) {
                if (!bankAccountInput) { return ''; }

                var accountLength = bankAccountInput.length;
                var calclength;

                if (accountLength <= 6)
                    calclength = accountLength - 2;
                else
                    calclength = accountLength - 4;

                var value = bankAccountInput.substring(calclength, accountLength);
                var asterix = '';

                for (var i = 0; i < calclength; i++) {
                    asterix = asterix + '*';
                }

                return asterix + value;
            };
        }]);
}());