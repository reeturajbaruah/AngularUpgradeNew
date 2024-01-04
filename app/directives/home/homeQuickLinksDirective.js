(function () {
    'use strict';

    angular.module('HCTRAModule').directive("homeQuickLinks", [
        function () {

            return {
                restrict: "E",
                templateUrl: "SitecoreViewRequestInterceptor_homeQuickLinksTemplate",
                scope: {
                    links: "="
                }
            };
        }]);

}());