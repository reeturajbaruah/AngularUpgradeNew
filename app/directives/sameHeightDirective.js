(function () {
    'use strict';

    angular.module('HCTRAModule').directive('sameHeight', ['operatingSystemSnifferService', '$timeout',
        function (operatingSystemSnifferService, $timeout) {
            return {
                restrict: 'A',
                scope: {
                    containers: '=sameHeight'
                },
                link: function (scope, element) {

                    var jElem = angular.element(element);

                    scope.containers.push(jElem);

                    angular.element(window).resize(adjustContainerSize);

                    function adjustContainerSize() {

                        if (operatingSystemSnifferService.isDesktopOs()) {

                            var largestHeight = 0;

                            for (var i = 0; i < scope.containers.length; i++) {

                                scope.containers[i].removeAttr('style');

                                if (scope.containers[i].innerHeight() > largestHeight)
                                    largestHeight = scope.containers[i].innerHeight();
                            }

                            for (var j = 0; j < scope.containers.length; j++) {

                                scope.containers[j].css('height', largestHeight);
                            }
                        }
                        else {
                            jElem.removeAttr('style');
                        }
                    }

                    $timeout(function () {
                        adjustContainerSize();
                    }, 500);
                }
            };
        }]);
}());