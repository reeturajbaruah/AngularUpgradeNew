(function () {
    'use strict';

    angular.module('HCTRAModule').directive("faqBrowseCategory",
		function () {
		    return {
		        restrict: "E",
		        templateUrl: "/app/directives/helpAndSupport/faqBrowseCategoryTemplate.html",
		        scope: {
		            onSearch: '&',
		            categories: '='
		        },
		        link: function (scope) {
		            scope.onSearch = scope.onSearch();
		        }
		    };
		});

}());