(function () {
    "use strict";

    angular.module("HCTRAModule").service("responsiveService", ["$window",
        function ($window) {
            this.isMobile = function () {
                return ($window.innerWidth < 768);
            };
            this.isDesktop = function () {
                return !this.isMobile();
            };
            this.isIPadPortrait = function () {
                return ($window.innerWidth === 768);
            };
        }
    ]);
}());