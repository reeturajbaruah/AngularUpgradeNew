/*
(function () {

    'use strict';

    angular.module('HCTRAModule').factory('operatingSystemSnifferService', ['sniffrjs', 'bowserService',
		function (sniffrjs, bowserService) {

		    var storedOS = '';

		    var operatingSystem = {
		        MOBILE: 'mobile',
                DESKTOP: 'desktop'
		    };

		    return {		        
		        setupDesktopStyles: function () {
	           
		        },
		        getOS: function () {
		            var op = sniffrjs.os.name.toLowerCase();
		            var device = sniffrjs.device.name.toLowerCase();
                    var isChromeBook = bowserService.bowser.chromeBook;
		            if (op === "windows" || op === "macos" || op === "linux" || device === "ipad" || isChromeBook) {
		                storedOS = operatingSystem.DESKTOP;
		                return operatingSystem.DESKTOP;
		            } else {
		                storedOS = operatingSystem.MOBILE;
		                return operatingSystem.MOBILE;
		            }
		        },
		        isDesktopOs: function () {
		            if ((storedOS === operatingSystem.DESKTOP) || (sessionStorage.getItem('FOOTER_FORCE_DESKTOP_VIEW') === 'true')) {
		                return true;
		            } else {
		                return false;
		            }
		        },
		        getOsFull: function () {
		            return sniffrjs.os.name;
		        },
		        getDeviceFull: function () {
		            return sniffrjs.device.name;
		        }
		    };

		}]);
}());
*/