(function () {
    'use strict';

    angular.module('HCTRAModule').directive("desktopViewMessage", ['toggleFullWebsiteService',
        function (toggleFullWebsiteService) {
            return {
                restrict: 'E',
                templateUrl: "/app/directives/desktopViewMessageTemplate.html",
                link: function (scope) {

                    scope.onMobileClick = toggleFullWebsiteService.onMobileClick;

                }
            };
        }
    ]);
}());