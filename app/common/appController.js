(function () {
	'use strict';

	angular.module('HCTRAModule').controller('AppController', ['$scope', 'USER_ROLES', 'AuthService', '$rootScope', 'routes', '$window', 'responsiveService', 'bowserService', 'operatingSystemSnifferService', 'stateStackMemoryService', '$location', 'metadataManagerService', 'genericRepo', 'responseErrorService', 'focusExclusionService', 'wildCardUrlCheckerService', 'rssService', 'maintenanceService', 'serverConstants', 'StorefrontService', '$transitions',
		function ($scope, USER_ROLES, AuthService, $rootScope, routes, $window, responsiveService, bowserService, operatingSystemSnifferService, stateStackMemoryService, $location, metadataManagerService, genericRepo, responseErrorService, focusExclusionService, wildCardUrlCheckerService, rssService, maintenanceService, serverConstants, StorefrontService, $transitions) {

			$rootScope.currentUser = null;
			$scope.isAuthorized = AuthService.isAuthorized;
			$scope.isAuthenticated = AuthService.isAuthenticated;
			$scope.userRoles = USER_ROLES;
			$scope.remoteObj = {};
			$scope.isMobile = responsiveService.isMobile();
			$scope.metaData = {};
			$scope.rssData = {};

			$scope.isDesktopMode = true;

			if (StorefrontService.isEnabled()) {
				$scope.isDesktopMode = false;
			}
			//call the service to set the correct OS for reference 
			operatingSystemSnifferService.getOS();

			//$scope.focusFirstField = function () {
			//    var locationPath = $location.path();
			//    if ( $scope.remoteObj.focusFirstField && !focusExclusionService.dictByUrl[locationPath]
			//        && !wildCardUrlCheckerService.wildCardUrlisMatch(locationPath, focusExclusionService.dictByWildCard)) {
			//        $scope.remoteObj.focusFirstField();
			//    }
			//};


			$scope.focusFirstField = function () {
				var locationPath = $location.path();
				if (!focusExclusionService.dictByUrl[locationPath]
					&& !wildCardUrlCheckerService.wildCardUrlisMatch(locationPath, focusExclusionService.dictByWildCard)) {
					var jqFields = angular.element('input[required], input[required="required"], select[required], select[required="required"], textarea[required], textarea[required="required"]');
					if (jqFields.length > 0) {
						var jqFirst = jqFields.eq(0);
						if (jqFirst.attr('id') === 'inputSearch') {
							jqFirst = jqFields.eq(1);
						}
						if (jqFirst.focus) {
							angular.element(jqFirst).focus();
						}
					}
				}
			};


			$scope.$on('$viewContentLoaded', function () {
				if (serverConstants.currentlyDownloadedWebUiVersion && $rootScope.latestWebUiVersion &&
					$rootScope.latestWebUiVersion !== serverConstants.currentlyDownloadedWebUiVersion) {

					if (StorefrontService.isEnabled()) {
						StorefrontService.hardReset();
					} else {
						$window.location.reload(true);
					}

				}
			});

			/**
			 * Event-Listener for Back-Button
			 */

			

			/** Event-listener for state changes for addition to logging*/
			//		$scope.$on('$stateChangeStart', function (evt, toState) {
			//			var stateSub = toState.name.substr(0, 10);
			//			if (stateSub === 'SectionalC' || stateSub === 'NonSection') {
			//				stateStackMemoryService.addStateToStackMemory($location.url(), 'url');
			//			} else {
			//				stateStackMemoryService.addStateToStackMemory(toState.name, 'state');
			//			}
			//		});

			$transitions.onStart({}, function(transition) {
				var stateSub = transition.to().name.substr(0, 10);
				if (stateSub === 'SectionalC' || stateSub === 'NonSection') {
					stateStackMemoryService.addStateToStackMemory($location.url(), 'url');
				} else {
					stateStackMemoryService.addStateToStackMemory(transition.to().name, 'state');
				}
			});




			$scope.executeMetadataInjection = function (path) {
				metadataManagerService.injectMetaDataIfNeeded(path).then(
					function (metaDataGetResponse) {
						$scope.metaData = angular.copy(metaDataGetResponse);
					}, function (rejectedResponse) {
						responseErrorService.displayErrorsFromResponse(rejectedResponse);
					}
				);
			};

			$scope.executeRssInjection = function () {
				rssService.injectRssData().then(
					function (rssDataResponse) {
						$scope.rssData = angular.copy(rssDataResponse);
					}
				);
			};

			/* Fix for Bug 5049: */
			// Issue exists with incorporating SVGs and Prototype.js in IE11 because XPath feature isn't supported by IE11
			// As such Prototype.js uses hasClassName for DOM elements, but SVG isn't a basic DOM element
			// Runs into "Object doesn't support property or method 'match'" error
			if (bowserService.bowser.name == 'Internet Explorer' && bowserService.bowser.version >= 10) {
				if (angular.isUndefined(SVGAnimatedString.prototype.match)) {
					SVGAnimatedString.prototype.match = function () { return String.prototype.match.apply(this.baseVal, arguments); };
				}
				if (angular.isUndefined(SVGElement.prototype.className)) {
					SVGElement.prototype.className = (function () {
						if (this && this.attributes && this.attributes.length > 0) {
							for (var i = 0; this.attributes.length; i++) {
								var attr = this.attributes[i];
								if (attr.name && attr.name === 'class') {
									return attr.name;
								}
							}
						}
						return '';
					}());
				}
			}
			/* End Fix for Bug 5049 */

			// Footer CMS call
			var request = {
				itemId: routes.footerLinksCms,
				fields: "URL,SitecorePagePath,OpenNewTab,ShowInMobile,ShortDescription,Title,SitecoreSectionName"
			};

			genericRepo.dataFactory.getCmsPageById(request).then(function (res) {

				if (res.errors.length == 0) {

					var parsedRes = angular.fromJson(res.cmsResponse);

					$scope.footerCopyright = parsedRes.Children[1];
					$scope.footerLinkList = parsedRes.Children[0].Children[0].Children;
				} else {
					responseErrorService.displayErrorsFromResponse(res);
				}
			});

			maintenanceService.considerMaintenancePopup();
		}]);
}());