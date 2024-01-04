(function () {

    "use strict";

    angular.module("HCTRAModule").service("errorInterceptorService", ["perfToggle",
        function (perfToggle) {

            var errorMessageDictionary = {};

            var init = function () {
                if (perfToggle.messagesToLogDictionary) {
                    errorMessageDictionary = angular.fromJson(perfToggle.messagesToLogDictionary);
                }
            };
            init();

            this.shouldMessageTriggerLogging = function (message) {
                return errorMessageDictionary[message] ? true : false;
            };

        }]);
}());