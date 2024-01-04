(function () {
    'use strict';

    angular.module('HCTRAModule').filter('ellipses', ['$filter',
        function ($filter: ng.IFilterService) {
            return function (inString: string, cutoff: number) {

                if (!inString) { return ''; }

                let suffix = '';
                if (inString.length > cutoff) {
                    suffix = '...'
                }

                return `${$filter('limitTo')(inString, cutoff)}${suffix}`;
            };
        }]);
}());