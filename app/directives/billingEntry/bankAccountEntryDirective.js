/* eslint-disable no-useless-escape */
(function () {
    'use strict';

    angular.module('HCTRAModule').directive('bankAccountEntry', ['validationService', '$window', 'routes', 'linkLookupService',
        function (validationService, $window, routes, linkLookupService) {
            return {
                scope: {
                    bankDetails: "=",
                    paymentsform: "=",
                    validate: "="
                },
                templateUrl: '/app/directives/billingEntry/bankAccountEntryTemplate.html',
                link: function ($scope, elem, attrs) {

                    $scope.showNameField = 'showName' in attrs;
                    $scope.nameOnBankAccountValidation = new RegExp(/^(?=.*[a-zA-Z])([a-zA-Z0-9\-\,\.\'\s]{0,80})$/);
                    $scope.bankRoutingNumberValidation = new RegExp(/^\d{9}$/);
                    $scope.bankAccountNumberValidation = new RegExp(/^(\d{1,17}|\*{12}\d{4})$/);

                    if (!$scope.bankDetails)
                        $scope.bankDetails = {};

                    $scope.clearReq = function (obj, prop, field) {
                        if ($scope[obj][prop]) {
                            $scope.paymentsform[field].$setValidity('required', true);
                        }
                    };

                    $scope.clickedHelp = function () {
                        $window.open(linkLookupService.articleLookupById(routes.eftHelp));
                    };

                    $scope.validation = validationService($scope.paymentsform);
                }
            };
        }
    ]);
}());