(function () {
    'use strict';

    angular.module('HCTRAModule').directive("checkbox",['validationService',
        function (validationService) {

            return {
                transclude: true,
                restrict: "E",
                templateUrl: "/app/directives/checkboxTemplate.html",
                scope: {
                    checkboxIsTruthy: '=',
                    parentForm: '=',
                    errorMessage: '='
                },
                link: function ($scope) {

                    $scope.validation = validationService($scope.parentForm);
                }
            };
        }]);

}());