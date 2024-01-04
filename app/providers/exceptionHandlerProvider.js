(function () {
    'use strict';
    //This follows http://www.bennadel.com/blog/2542-logging-client-side-errors-with-angularjs-and-stacktrace-js.htm

	// By default, AngularJS will catch errors and log them to
	// the Console. We want to keep that behavior; however, we
	// want to intercept it so that we can also log the errors
	// to the server for later analysis.
	angular.module('HCTRAModule').provider("$exceptionHandler",
		{
		    $get: ["errorLogService", function (errorLogService) {
				return (errorLogService);
			}]
		});
}());