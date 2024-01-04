(function () {

    'use strict';

    angular.module('HCTRAModule').factory('violationSortService', [

		function () {

		    var violationSort = {};

		    violationSort.sortViolationInvoices = function (inInvoices, onField) {
		        var arr;
		        for (var agencies in inInvoices) {
		            arr = inInvoices[agencies];
		            arr.sort(function (obj1, obj2) {
		                if (obj1[onField] < obj2[onField]) {
		                    return -1;
		                } else if (obj1[onField] === obj2[onField]) {
		                    return 0;
		                } else {
		                    return 1;
		                }
		            });
		            inInvoices[agencies] = arr;
		        }
		    };
		    return violationSort;

		}]);
}());