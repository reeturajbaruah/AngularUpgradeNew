(function () {

	'use strict';

	angular.module('HCTRAModule').factory('changePaymentMethodService', ['responseErrorService', '$filter',
		function (responseErrorService, $filter) {

			var direction = function (first, second) {
				if (first > second) {
					return "decrease";
				} else {
					return "increase";
				}
			};

			var serviceFactory = {};

			serviceFactory.displayEftToast = function (reqMinRebillAmtForCC, reqMinRebillAmtForEFT, reqLowBalLevelForEFT) {
				responseErrorService.displayToast("Updating the payment method will " + direction(reqMinRebillAmtForCC, reqMinRebillAmtForEFT) + " the minimum payment from " + $filter('currency')(reqMinRebillAmtForCC, '$') + " to " + $filter('currency')(reqMinRebillAmtForEFT, '$') + " and the rebill limit to  " + $filter('currency')(reqLowBalLevelForEFT, '$'), 'warning');
			};
				
			serviceFactory.displayCreditCardToast = function (reqMinRebillAmtForEFT, reqMinRebillAmtForCC, reqLowBalLevelForCC) {
				responseErrorService.displayToast("Updating the payment method will " + direction(reqMinRebillAmtForEFT, reqMinRebillAmtForCC) + " the minimum payment from  " + $filter('currency')(reqMinRebillAmtForEFT, '$') + " to  " + $filter('currency')(reqMinRebillAmtForCC, '$') + " and the rebill limit to  " + $filter('currency')(reqLowBalLevelForCC, '$'), 'warning');
			};

			return serviceFactory;

		}]);
}());