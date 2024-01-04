(function () {
    'use strict';

    angular.module('HCTRAModule').directive("articleSearchParameter", [
        function () {

            return {
                restrict: "E",
                templateUrl: "/app/directives/articleSearchParameterTemplate.html",
                scope: {
                    userClickedSearch: '&',
                    categories: '=',
                    categoryHolder: '='
                },
                link: function ($scope) {
                    $scope.isItalic = function (member) {
                        if ($scope[member] !== '') {
                            return '';
                        } else {
                            return 'setItalic';
                        }
                    };
                }
            };
        }]);

}());