(function () {
	'use strict';

	angular.module('HCTRAModule').directive("bankInfo",
		function () {

			return {
			    restrict: "E",
			    transclude: true,
				templateUrl: "/app/directives/billingInfo/bankInfo.html",
				scope: {
					bank: '=',
					onEdit: '&',
					hideEdit: '=?',
                    isAccountInformation: "="
				},
				link: function ($scope, elem, attrs, ctrl, $transclude) {
				    $scope.showEdit = !!attrs.onEdit;
				    $scope.noTransHeader = false;
				    $scope.headerText = "Update Billing Information";
					$scope.showAccountNumber = 'showAccountNumber' in attrs;
					$scope.guaranteedPrimary = 'guaranteedPrimary' in attrs;

					var unwatch = $scope.$watch('bank', function () {
						if ($scope.bank && $scope.bank.accountNumber) {

							$scope.bankDetails = {};
							$scope.bankDetails = $scope.bank;
							if (!$scope.bankDetails.accountType) {
								$scope.bankDetails.accountType = $scope.bankDetails.accountTypeDisplay;
							}
							unwatch();
						}
					});

				    // Checks if there is a transcluded header or not
                    $transclude(function(header) {
                        if (!header.length) {
                            $scope.noTransHeader = true;
                        }
                    });
				}
			};
		});

}());