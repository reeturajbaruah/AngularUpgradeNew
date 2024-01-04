(function () {

	'use strict';

	angular.module('HCTRAModule').factory("stacktraceService",
		function () {
			// "StackTrace" is a global object.
			return ({
				//get: StackTrace.get,
				//fromError: StackTrace.fromError,
				//deinstrument : StackTrace.deinstrument,
				//instrument: StackTrace.instrument,
				//generateArtificially: StackTrace.generateArtificially,
				//report: StackTrace.report
				print: printStackTrace
		   	});
		   }
	   );
}());