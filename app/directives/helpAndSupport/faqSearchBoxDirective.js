(function () {
    'use strict';

    angular.module('HCTRAModule').directive("faqSearchBox",
		function () {
		    return {
		        restrict: "E",
		        templateUrl: "/app/directives/helpAndSupport/faqSearchBoxTemplate.html",
		        scope: {
		            onSearch: '&'
		        },
		        link: function (scope) {
		            scope.onSearch = scope.onSearch();
		        }
		    };
		});

}());