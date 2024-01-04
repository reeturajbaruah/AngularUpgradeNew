(function () {

    'use strict';
    //This follows http://www.bennadel.com/blog/2542-logging-client-side-errors-with-angularjs-and-stacktrace-js.htm

    // The error log service is our wrapper around the core error
    // handling ability of AngularJS. Notice that we pass off to
    // the native "$log" method and then handle our additional
    // server-side logging.
    angular.module('HCTRAModule').factory("errorLogService", ['$log', '$window', 'stacktraceService', 'environmentConfig', 'loggingService',
		function ($log, $window, stacktraceService, environmentConfig, loggingService) {
			var canLogError = true;

		    // I log the given error to the remote server.
		    function log(exception, cause) {

		        // Pass off the error to the default error handler
		        // on the AngualrJS logger. This will output the
		        // error to the console (and let the application
		        // keep running normally for the user).
		        $log.error.apply($log, arguments);
		        // Now, we need to try and log the error to the server.
		        try {
		            //hack to fix uncatchable SecurityException in Chrome when all data setting is blocked
		            if (exception.message === "Failed to read the 'sessionStorage' property from 'Window': Access is denied for this document.") {
		                $window.location = '/app/indexNoCookieStorage.html';
		                return;
		            }

		            var errorMessage = exception.toString();
		            var stackTrace = stacktraceService.print({ e: exception });

					if (canLogError) {
						loggingService.logMessage(errorMessage, stackTrace, cause);
						canLogError = false;

						// eslint-disable-next-line angular/timeout-service
						setTimeout(() => { canLogError = true; }, 10000);
					}

		            if (environmentConfig.angularExPopUpEnabled === 'true') {
		                $window.alert(errorMessage + "\n" + stackTrace);
		            }

		        } catch (loggingError) {
		            // For Developers - log the log-failure.
		            $log.warn("Error logging failed");
		            $log.log(loggingError);
		        }
		    }
		    // Return the logging function.
		    return (log);
		}]);
}());