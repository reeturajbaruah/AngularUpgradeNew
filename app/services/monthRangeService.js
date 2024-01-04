(function () {

    'use strict';

    angular.module('HCTRAModule').factory('monthRangeService', [
		function () {
		    return {
                /**
                 * Get a range of 3-letter month abbreviations starting from the current month and going backwards for
                 *  numberOfMonths months.
                 */
		        getMonths: function (numberOfMonths) {
		            var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
		            var monthNumArr = [];
		            var monthArr = [];
		            var date = new Date();
		            var currentMonth = date.getMonth();

		            currentMonth = 7;

		            for (var a = numberOfMonths; a > 0; a--) {
		                monthNumArr.push(currentMonth);
		                currentMonth--;
		                if (currentMonth < 0) {
		                    currentMonth = 11;
		                }
		            }
		            for (var x = 0; x < monthNumArr.length; x++) {
		                monthArr.push(months[monthNumArr[x]]);
		            }
		            return monthArr;
		        }
		    };
		}]);
}());