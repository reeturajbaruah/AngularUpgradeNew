(function () {

    'use strict';

    // angular.module('HCTRAModule').factory('isInvoicedService', ['webStorage',
	// 	function (webStorage) {

	// 	    var isInvoiced = '';

	// 	    var values = {
	// 	        invoiced: 'invoiced',
	// 	        uninvoiced: 'noninvoiced'
	// 	    };

	// 	    return {

	// 	        /**
    //              * returns true if the account is invoiced or false if not
    //              */
	// 	        isAccountInvoiced: function () {
    //                 //see if the browser has been refreshed, and grab from webstorage if it has
	// 	            if (isInvoiced === '') {
	// 	                var val = webStorage.getValue('inv');
	// 	                if (val) {
	// 	                    isInvoiced = val;
	// 	                } else {
	// 	                    isInvoiced = values.uninvoiced;
	// 	                }
	// 	            }
	// 	            return isInvoiced === values.invoiced;
	// 	        },

	// 	        setAccountInvoiced: function (invoiced) {
	// 	            isInvoiced = invoiced ? values.invoiced : values.uninvoiced;
	// 	            webStorage.setKeyValue('inv', isInvoiced);
	// 	        },

	// 	        removeAccountInvoiced: function () {
	// 	            isInvoiced = '';
	// 	            webStorage.removeEntry('inv');
	// 	        }
	// 	    };
	// 	}]);
}());