(function () {
    'use strict';
    angular.module('HCTRAModule').filter('homeNewsDate', ['momentDateFilter',
        function (momentDateFilter) {
            return function (dateInput) {
                if (!dateInput) { return ''; }

                var outDate = momentDateFilter(dateInput, 'MMMM DD[,] YYYY', 'YYYYMMDD[T]HHmmssZ');

                return outDate;
            };
        }
    ]);
}());