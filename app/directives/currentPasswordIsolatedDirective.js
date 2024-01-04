(function () {
    'use strict';

    angular.module('HCTRAModule').directive("currentPasswordIsolated", ['validationService',
        function (validationService) {

            return {
                restrict: "E",
                templateUrl: "/app/directives/currentPasswordIsolatedTemplate.html",
                scope: {
                    password: '=',
                    confirmPassword: '=',
                    currentPassword: '=',
                    showCurrentPassword: '=',
                    parentForm: '=',
                    tabOrderingIndex: '='
                },
                link: function ($scope) {

                    $scope.validation = validationService($scope.parentForm);
                }
            };
        }]);

}());