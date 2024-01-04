(function () {
    'use strict';

    angular.module('HCTRAModule').directive("homeNews", ["$location", "routes", "cmsUtilService", "AuthService", "$rootScope", "AUTH_EVENTS", "APP_LIFECYCLE_EVENTS", "marketingImageService", "rssService", "$window",
        function ($location, routes, cmsUtilService, AuthService, $rootScope, AUTH_EVENTS, APP_LIFECYCLE_EVENTS, marketingImageService, rssService, $window) {

            return {
                restrict: "E",
                transclude: true,
                templateUrl: "/app/directives/home/homeNewsTemplate.html",
                scope: {
                    newsList: "=",
                    marketingImages: "="
                    //maxSegments: "="
                },
                link: function ($scope) {
                    $scope.shownNews = [];
                    $scope.shownMarketingImages = [];
                    var imageObj;

                    var maxSegments = 10000; // 10000 is basically unlimited

                    $scope.goToNewsArticle = function (articleID) {
                        $window.open(routes.newsFeed + "#" + articleID, "_blank");
                    };

                    $scope.goToUrl = function (imageURL) {
                        $location.url(imageURL);
                    };

                    $scope.goToRssFeedNews = function () {
                        rssService.goToRssFeed(rssService.rssHomeNewsKey);
                    };

                    var unwatch = $scope.$watchGroup(["newsList", "marketingImages"], function () {

                        if ($scope.newsList) {
                            $scope.shownNews = $scope.newsList.slice(0, maxSegments);

                            for (var i = 0; i < $scope.newsList.length; i++) {
                                $scope.newsList[i].imageSrc = cmsUtilService.generateFileSrc($scope.newsList[i].Image);
                            }
                        }

                        if ($scope.newsList && $scope.marketingImages) {
                            //initialize object
                            imageObj = angular.copy(marketingImageService.processImagesToObj($scope.marketingImages));
                            //set max articles before no images
                            imageObj.articles = $scope.newsList.length;
                            //check login state
                            useImagesByLoggedInState();
                            unwatch();
                        }
                    });

                    var useImagesByLoggedInState = function () {
                        if (AuthService.isAuthenticated()) {
                            $scope.shownMarketingImages = marketingImageService.setImages('logIn', imageObj);
                        } else {
                            $scope.shownMarketingImages = marketingImageService.setImages('logOut', imageObj);
                        }
                    };

                    var destroyLogoutSuccessListener = $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
                        useImagesByLoggedInState();
                    });

                    var destroySessionTimedOutListener = $rootScope.$on(AUTH_EVENTS.sessionTimedOut, function () {
                        useImagesByLoggedInState();
                    });

                    var destroySecurityIssueListener = $rootScope.$on(AUTH_EVENTS.destroySecurityIssueListener, function () {
                        useImagesByLoggedInState();
                    });

                    var destroySetNavBarLoginListener = $rootScope.$on(APP_LIFECYCLE_EVENTS.setNavBarLogin, function () {
                        useImagesByLoggedInState();
                    });

                    var destroyRestoredUserStateListener = $rootScope.$on(APP_LIFECYCLE_EVENTS.restoredUserState, function () {
                        useImagesByLoggedInState();
                    });

                    $scope.$on("$destroy", function () {
                        destroyLogoutSuccessListener();
                        destroySessionTimedOutListener();
                        destroySecurityIssueListener();
                        destroySetNavBarLoginListener();
                        destroyRestoredUserStateListener();
                    });
                }
            };
        }]);

}());