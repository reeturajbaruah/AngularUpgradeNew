(function () {
    'use strict';

    angular.module('HCTRAModule').directive("homeModule", ['$state', 'stateNames',
        function ($state, stateNames) {

            return {
                restrict: "E",
                templateUrl: "/app/directives/home/homeModuleTemplate.html",
                //templateUrl: "/SitecoreViewRequestInterceptor_homeModuleTemplate",
                scope: {
                    moduleObject: "=",
                    onModuleClick: '&'
                },
                link: function ($scope) {
                    $scope.$watch('moduleObject', function () {
                        if ($scope.moduleObject) {
                            if ($scope.moduleObject.LinkTitle && $scope.moduleObject.LinkTitle.toLowerCase().indexOf('login') > -1
                                && $scope.moduleObject.TitleURL && $scope.moduleObject.TitleURL.toLowerCase().indexOf('login') > -1) {
                                $scope.isLoginModule = true;
                                $scope.goToFirstTimeLogin = function ($event) {
                                    // Prevents the ng-click of parent module
                                    $event.stopPropagation();
                                    $state.go(stateNames.setupOnlineAccessIdentification);
                                };
                            }
                            // Must watch when user logs out and is on Home Page
                            //unwatch();
                        }
                    });

                }
            };
        }]);

}());