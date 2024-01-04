(function () {
    "use strict";

    angular.module('HCTRAModule').factory("applicationLoggingService", ["$log", "loggingService",
	    function ($log, loggingService) {

	        var log = function (message, type) {
	            // preserve default behaviour
	            $log.log.apply($log, arguments);
	            loggingService.logMessage(message, null, type);
	        };

	        return ({
	            error: function (message) {
	                log(message, "error");
	            },
	            debug: function (message) {
	                log(message, "debug");
	            },
	            interceptorError: function (message) {
	                loggingService.logMessage(message, null, "InterceptorError");
	            }
	        });
	    }
    ]);
}());