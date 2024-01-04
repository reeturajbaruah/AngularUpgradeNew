(function () {
	'use strict';

	angular.module('HCTRAModule').directive("personalInfo",
		function () {
			
			return {
				transclude: true,
				restrict: "E",
				templateUrl: "/app/directives/personalInfoPartial.html",
				scope: {
					personalInfo: '=data',
					onEdit: '&',
					hideEdit: '=?',
					hideContactInfo: '=?',
					hideAddressInfo: '=?',
                    isAccountInformation: '='
				},
				link: function ($scope, elem, attrs) {
					$scope.showEdit = !!attrs.onEdit;
					$scope.hideContactInfo = !!attrs.hideContactInfo;
					$scope.hideAddressInfo = !!attrs.hideAddressInfo;
					$scope.isFirstSection = 'isFirst' in attrs;
										
					var unwatch = $scope.$watch('personalInfo', function (personalInfo) {

						if (angular.isDefined(personalInfo) && personalInfo.firstName) {
							personalInfo.accountType = "Personal";
							unwatch();
						}
					});
				}
			};
		});

}());