(function () {
    'use strict';

    angular.module('HCTRAModule').directive("billingAddress",
		function () {

		    return {
		        restrict: "E",
		        templateUrl: "/app/directives/billingInfo/billingAddress.html",
		        scope: {
		            internationalIn: '=international',
		            creditCard: '=',
		            noH4: '='
		        },
		        link: function ($scope) {

		            // $scope.internationalIn could be a bool or an object
		            if ($scope.internationalIn === true) {
		                $scope.international = $scope.internationalIn;
		            } else if (angular.isObject($scope.internationalIn) && angular.isDefined($scope.internationalIn.value)) {
		                $scope.international = $scope.internationalIn.value;
		            }
		        }
		    };
		});

}());