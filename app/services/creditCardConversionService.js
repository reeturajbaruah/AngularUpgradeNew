(function () {
	//do not downgrade. Switch to CreditCardTypeService.cardCodeToName
	'use strict';

	angular.module('HCTRAModule').factory('creditCardConversionService', ['creditCardTypes',
	//CreditCardType is convereted to enum in Angular
		function (creditCardTypes) {
			var serviceFactory = {};

			serviceFactory.convertCodeToString = function (creditCardCode) {
				switch (creditCardCode) {
					case "V":
					    return creditCardTypes.visa;
					case "M":
					    return creditCardTypes.mastercard;
					case "D":
					    return creditCardTypes.discover;
					case "A":
					    return creditCardTypes.amex;
					default:
						return "";
				}
			};

			return serviceFactory;

		}]);
}());