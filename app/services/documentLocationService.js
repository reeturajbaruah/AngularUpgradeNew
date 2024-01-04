(function () {
    "use strict";

    angular.module("HCTRAModule").factory("documentLocationService", ["$document",
		function ($document) {

		    function goToHref(url) {
		        $document[0].location.href = url;
		    }

		    return {
		        goToHref: goToHref
		    };

		}]);
}());