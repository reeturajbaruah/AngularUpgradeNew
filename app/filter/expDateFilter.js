(function () {
    'use strict';
    angular.module('HCTRAModule').filter('expDate', [
        function () {
            return function (expDate) {
                if (!expDate) { return ''; }

                var dateArr = expDate.split("/");
                var monthDigits = dateArr[0].length;

                if (monthDigits == 1)
                    expDate = "0" + expDate;

                return expDate;
            };
        }
    ]);
}());