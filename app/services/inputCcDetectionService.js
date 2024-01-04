(function () {

    'use strict';

    angular.module('HCTRAModule').factory('inputCcDetectionService', [
		function () {

		    return {
		        nameIsCc: nameIsCc,
		        zipIsCc: zipIsCc
		    };

		    function nameIsCc(name) {
		        var patt = /\b\D*\d{6,}\D*\b/;
		        return patt.test(name);
		    }

		    function zipIsCc(zip) {
		        var patt = /\b\D*\d{10,}\D*\b/;
		        return patt.test(zip);
		    }
		}]);
}());