(function () {
    'use strict';

    angular.module('HCTRAModule').directive("convertToNumber",
		function () {
		    return {
		        restrict: "A",
		        require: 'ngModel',
		        link: function (scope, element, attrs, ngModel) {
		            ngModel.$parsers.push(function (val) {
		                return val && !isNaN(parseInt(val)) ? parseInt(val) : "";
		            });
		            ngModel.$formatters.push(function (val) {
		                return (val || val === 0) && !isNaN(parseInt(val)) ? "" + val : "";
		            });
		        }
		    };
		});

}());