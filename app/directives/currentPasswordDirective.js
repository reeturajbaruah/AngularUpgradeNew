(function () {
    'use strict';

    angular.module('HCTRAModule').directive("currentPassword", ['validationService',
        function (validationService) {

            return {
                restrict: "E",
                templateUrl: "/app/directives/currentPasswordTemplate.html",
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