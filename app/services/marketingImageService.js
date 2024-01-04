(function () {

    'use strict';

    angular.module('HCTRAModule').factory('marketingImageService', ['cmsUtilService',
		function (cmsUtilService) {
		    return {

		        processImagesToObj: function (array) {
		            var nonDefaultImages = [];
		            var defaultImages = [];
		            var obj = {
		                articles: 0,
		                startIndex: 0,
		                maxArticles: 1,
		                maxSmall: 1
		            };

		            for (var i = 0; i < array.length; i++) {
		                array[i].ImageAltText = cmsUtilService.parseAltText(array[i].Image);
		                array[i].Image = cmsUtilService.generateFileSrc(array[i].Image);
		                if (array[i].IsDefault) {
		                    defaultImages.push(array[i]);
		                } else {
		                    nonDefaultImages.push(array[i]);
		                }
		            }

		            obj.logIn = this.getObj(true, nonDefaultImages);
		            obj.logOut = this.getObj(false, nonDefaultImages);
		            obj.defaultObj = this.getDefaultObj(defaultImages);

		            return obj;
		        },

		        getObj: function (loginObj, array) {
		            var obj = {
		                small: [],
		                large: []
		            };
		            for (var i = 0; i < array.length; i++) {
		                if (array[i].ShowInHomePage && (angular.isDefined(array[i].UserLoggedIn) || angular.isDefined(array[i].isLargeImage))) {
		                    if (loginObj && array[i].UserLoggedIn && array[i].isLargeImage) {
		                        obj.large.push(array[i]);
		                    }
		                    else if (loginObj && array[i].UserLoggedIn && !array[i].isLargeImage) {
		                        obj.small.push(array[i]);
		                    }
		                    else if (!loginObj && !array[i].UserLoggedIn && array[i].isLargeImage) {
		                        obj.large.push(array[i]);
		                    }
		                    else if (!loginObj && !array[i].UserLoggedIn && !array[i].isLargeImage) {
		                        obj.small.push(array[i]);
		                    }
		                }
		            }
		            return obj;
		        },

		        getDefaultObj: function (array) {
		            var obj = {
		                small: [],
		                large: []
		            };
		            for (var i = 0; i < array.length; i++) {
		                if (angular.isDefined(array[i].isLargeImage)) {
		                    if (array[i].isLargeImage) {
		                        obj.large.push(array[i]);
		                    } else {
		                        obj.small.push(array[i]);
		                    }
		                }
		            }
		            return obj;
		        },

		        setImages: function (state, obj) {
		            if (obj.articles === obj.startIndex) {
		                // zero articles
		                if (obj[state].large.length > 0) {
		                    return [obj[state].large[0]];
		                }
		                else if (obj[state].small.length > 0) {
		                    var array = [];
		                    for (var i = 0; i < obj.maxSmall && i < obj[state].small.length; i++) {
		                        array.push(obj[state].small[i]);
		                    }
		                    return array;
		                }
		            }
		            else if (obj.articles > obj.startIndex && obj.articles <= obj.maxArticles) {
		                // contains articles
		                if (obj[state].small.length > 0) {
		                    return [obj[state].small[0]];
		                }
		            }
		            if (state === 'defaultObj') {
		                return [];
		            }
		            //else do not display image. full of articles
		            return this.setImages('defaultObj', obj);
		        }
		    };

		}]);
}());