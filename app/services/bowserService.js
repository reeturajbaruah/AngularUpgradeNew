(function () {
    "use strict";

    angular.module("HCTRAModule").factory("bowserService", ["bowserjs",

        function (bowserjs) {
            var bowserFactory = {};

            bowserFactory.bowser = bowserjs;
            bowserFactory.getUserBrowserInfo = function () {
                var browserSummary = "";
                for (var property in bowserjs) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (bowserjs.hasOwnProperty(property)) {
                        if (!angular.isFunction(bowserjs[property])) {
                            browserSummary = browserSummary + property + "=" + bowserjs[property] + "; ";
                        }
                    }
                }
                return browserSummary;
            };

            return bowserFactory;

        }]);
}());