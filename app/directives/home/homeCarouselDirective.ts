(function (): void {
    "use strict";

    angular.module("HCTRAModule").directive("homeCarousel", ["$interval",
        function ($interval) {

            return {
                restrict: "E",
                templateUrl: "/app/directives/home/homeCarouselTemplate.html",
                scope: {
                    slides: "=",
                    interval: "="
                },
                link: function ($scope: any) {                    
                    let circularList: HCTRA.Datastructure.ICircularList<HCTRA.Model.CarouselSlide>;
                    
                    let updateSlider = function () {

                        $scope.activeSlide = circularList.peekCurrent();
                        $scope.rightSlide = circularList.peekRight();
                        $scope.leftSlide = circularList.peekLeft();
                    };

                    $scope.cancelRotate = function () {
                        $interval.cancel($scope.autoRotate);
                    };

                    $scope.$watch("slides", function () {
                        if ($scope.slides) {
                            if ($scope.interval > 0) {
                                $scope.autoRotate = $interval($scope.rightClick, $scope.interval);
                            }

                            circularList = new HCTRA.Datastructure.CircularList($scope.slides);

                            updateSlider();
                        }
                    });

                    $scope.leftClick = function () {

                        circularList.moveHeadLeft();
                        updateSlider();
                    };

                    $scope.rightClick = function () {

                        circularList.moveHeadRight();
                        updateSlider();
                    };
                                        
                    $scope.$on("$destroy", () => {
                        $scope.cancelRotate();
                    });
                    
                }
            };
        }]);

}());