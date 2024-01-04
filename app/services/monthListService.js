(function () {

	'use strict';

	angular.module('HCTRAModule').factory('monthListService', [

		function () {
		    var dataFactory = {};

		    var monthList = {
		        'January': 1,
		        'February': 2,
		        'March': 3,
		        'April': 4,
		        'May': 5,
		        'June': 6,
		        'July': 7,
		        'August': 8,
		        'September': 9,
		        'October': 10,
		        'November': 11,
                'December': 12
		    };

			dataFactory.months = [
				{ value: 1, label: 'January' },
				{ value: 2, label: 'February' },
				{ value: 3, label: 'March' },
				{ value: 4, label: 'April' },
				{ value: 5, label: 'May' },
				{ value: 6, label: 'June' },
				{ value: 7, label: 'July' },
				{ value: 8, label: 'August' },
				{ value: 9, label: 'September' },
				{ value: 10, label: 'October' },
				{ value: 11, label: 'November' },
				{ value: 12, label: 'December' }
			];

			dataFactory.getMonthNumber = function (monthString) {
			    return monthList[monthString];
			};

			return dataFactory;

		}]);
}());