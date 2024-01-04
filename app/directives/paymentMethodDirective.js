(function () {
	'use strict';

	angular.module('HCTRAModule').directive("paymentMethod",
		function () {

			return {
				restrict: "E",
				templateUrl: "/app/directives/paymentMethod.html",
				scope: {
					billingtypeParent: '=',
					changeType: '&',
                    lockType: '='
				},
				link: function ($scope) {
				    
				    $scope.isItalic = function () {
				        if (!$scope.billingtypeParent.billingType) {
				            return 'setItalic';
				        } else {
				            return '';
				        }
				    };
				}
			};
		});

}());