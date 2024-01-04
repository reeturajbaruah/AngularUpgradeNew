(function () {

    'use strict';

    angular.module('HCTRAModule').factory('safariPrivateService', ['errorDisplayService',

		function (errorDisplayService) {
		    var dataFactory = {};

		    dataFactory.checkIfSafariPrivateMode = function () {
		        if ((!navigator.cookieEnabled) || (!sessionStorage)) {
		            errorDisplayService.displayToasts(['Current browser configuration is not supported. Both cookies and local storage need to be enabled to use this site'], 'Error');
		        }
		    };

		    return dataFactory;

		}]);
}());