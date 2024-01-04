(function () {
    'use strict';

    angular.module('HCTRAModule').config(['$analyticsProvider',
        function ($analyticsProvider) {

            $analyticsProvider.virtualPageviews(false);
            $analyticsProvider.firstPageview(false); /* Records pages that don't use $state or $route */
            $analyticsProvider.withBase(false);
            $analyticsProvider.withAutoBase(false);
        }]);
})();