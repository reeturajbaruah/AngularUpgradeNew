(function () {
    'use strict';

    angular.module('HCTRAModule').directive('printLink', ['$window', function ($window) {
        return {
            scope: {
                printMessage: "="
            },
            templateUrl: '/app/directives/printLinkTemplate.html',
            link: function ($scope, elem, attrs) {
               
                $scope.msg = attrs.printMessage ? $scope.printMessage : "Print";

                $scope.clickedPrint = function () {
                    $window.print();
                };
            }
        };
    }]);
}());