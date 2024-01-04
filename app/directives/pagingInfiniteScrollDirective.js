(function () {
    'use strict';

    angular.module('HCTRAModule').directive("pagingInfiniteScroll",
        function () {

            return {
                restrict: "E",
                templateUrl: "/app/directives/pagingInfiniteScrollTemplate.html",
                scope: {
                    search: '&',
                    infiniteScrollIsDisabled: '=',
                    titleType: '=',
                    totalItems: '=',
                    articleArray: '=',
                    pagingObject: '=',
                    titleId: '=',
                    archiveTypeChecker: '=',
                    form: '=',
                    articleNotFoundText: '=',
                    navigationUrls: '=',
                    mobileSearch: '&'
                },
                link: function ($scope) {
                    var checkForArticles = function (items) {
                        return items === 0 ? false : true;
                    };

                    var unwatch = $scope.$watch('totalItems', function () {
                        if (angular.isDefined($scope.totalItems)) {
                            $scope.hasArticles = checkForArticles($scope.totalItems);

                            // Not sure why the line below exists
                            // eslint-disable-next-line no-self-assign
                            $scope.articleNotFoundText = $scope.articleNotFoundText;
                        }
                    });

                    $scope.$on('$destroy', function () {
                        unwatch();
                    });
                }
            };
        });

}());