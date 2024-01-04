(function () {

    'use strict';

    angular.module('HCTRAModule').factory('conditionalStylesService', [

		function () {
		    var factory = {};

		    factory.formWidth = function (isHidden) {
		        return isHidden ? "" : "form-entry-width";
		    };

		    return factory;

		}]);
}());