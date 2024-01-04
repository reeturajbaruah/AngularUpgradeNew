(function () {
    'use strict';

    angular.module('HCTRAModule').directive("faqSearch", [
		function () {
		    return {
		        restrict: "E",
		        templateUrl: "/app/directives/helpAndSupport/faqSearchTemplate.html",
		        scope: {
		            goToFaq: '&',
		            searchFaqKeyword: '&',
		            searchFaqCategory: '&',
		            categories: '='
		        },
		        link: function (scope, elem, attrs) {
		            scope.hideViewAll = angular.isUndefined(attrs.hideViewAll);
		        }
		    };
		}]);

}());