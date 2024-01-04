(function () {
    'use strict';

    angular.module('HCTRAModule').directive("moduleButton", [
        function () {

            return {
                transclude: true,
                restrict: "E",
                templateUrl: "/app/directives/moduleButtonTemplate.html",
                scope: {
                    onModuleClick: '&'
                }
            };
        }]);

}());