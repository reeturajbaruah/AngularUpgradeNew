// (function () {
// 	'use strict';

//     angular.module('HCTRAModule').factory('AuthResolver', ['$q', '$rootScope', '$state', 'AuthService',
//         'USER_ROLES', 'addMissingInformationService', 'loginStates', 'authenticateRedirectService','StorefrontUtilityService',
//         function ($q, $rootScope, $state, AuthService, USER_ROLES, addMissingInformationService, loginStates, authenticateRedirectService,
//             StorefrontUtilityService) {

//     	return {
//     		resolve: function (authorizedRoles) {
//     			var deferred = $q.defer();
//     			if (authorizedRoles.indexOf(USER_ROLES.anonymous) > -1 &&
//                     !addMissingInformationService.missingInformationIsAnIssue() && addMissingInformationService.returnProfileCallHasOccured()) { //profileCallHasOccured needed to accurately check missinginformation
//     				deferred.resolve("success");
//     			} else {
//     				var unwatch = $rootScope.$watch('currentUser', function (currentUser) {
//     					if (currentUser != null) {
//     						if (AuthService.isAuthorized(authorizedRoles) || // need rest of if statement in order to verify that missing information is not an issue
//                                 (authorizedRoles.indexOf(USER_ROLES.anonymous) > -1 && (!addMissingInformationService.missingInformationIsAnIssue()
//                                 || !AuthService.isAuthenticated()))
//                                ) {
//     							deferred.resolve("success");
//     						} else {
//     							if (!AuthService.isAuthenticated()) {
//     								deferred.reject('notAuthenticated');
//                                 } else if (addMissingInformationService.missingInformationIsAnIssue()) {
//                                     const isKiosk = StorefrontUtilityService.isRunningAsKiosk;
//                                     const isFullSiteMode = StorefrontUtilityService.webStoreData
//                                         ? StorefrontUtilityService.webStoreData.fullSiteMode
//                                         : false;
//                                     //don't block kiosk from navigating away in kiosk mode
//                                     if (isKiosk && !isFullSiteMode) {
//                                         deferred.resolve("success");
//                                     } else {
//                                         addMissingInformationService.showBlockUserNavModal();
//                                         deferred.reject(USER_ROLES.missingRequiredInformation);
//                                     } 

//     							} else {
//     								deferred.reject('notAuthorized');
//     							}
//     						}
							
//     						unwatch && unwatch();
//     					}
//     				});
//                 }

//     			deferred.promise.then(function () {
//     				//only enters this code if deferred.resolve is called
//     			}, function (res) {
//     				//$location.replace();
//     				if (res === "notAuthenticated") {                        
//                         authenticateRedirectService.saveToState();
//                         return $state.go(loginStates.Login);
//     				} else if (res === USER_ROLES.missingRequiredInformation) {
//                         return $state.go(loginStates.AddMissingInformation);
//     				} else if (res === "notAuthorized") {
//     					// Handled automatically by ui-router.
//     					// User will be sent back to last successfully loaded state.
//     					// If a url was entered, the last successfully loaded state is "".
//     					// This case is handled in the app.js callback $stateChangeError.
//     				}
//     			});

//     			return deferred.promise;
//     		}
//     	};
//     }]);
// }());