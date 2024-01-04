(function () {
    angular.module("HCTRAModule", [
        'ngFileUpload',
        'ngRoute', 'ui.router', 'ui.router.upgrade', 'ngAnimate', 'angulartics', 'angulartics.adobe.analytics',
        'infinite-scroll', 'ngMessages', 'ui.bootstrap', 'ngAria',
        'ngSanitize'
    ]);
    var angularJsModule = angular.module("HCTRAModule");
    //get imported references from Angular code base!
    // eslint-disable-next-line angular/module-getter
    angularJsModule
        .factory('sniffrjs', ['thirdPartyDowngrades', function (thirdPartyDowngrades) { return thirdPartyDowngrades.Sniffr; }])
        .factory('bowserjs', ['thirdPartyDowngrades', function (thirdPartyDowngrades) { return thirdPartyDowngrades.Bowser; }])
        .factory('momentjs', ['thirdPartyDowngrades', function (thirdPartyDowngrades) { return thirdPartyDowngrades.Moment; }])
        .factory('vimeoPlayer', ['thirdPartyDowngrades', function (thirdPartyDowngrades) { return thirdPartyDowngrades.Vimeo; }]);
    // eslint-disable-next-line angular/module-getter
    angularJsModule.config(['$urlServiceProvider', function ($urlServiceProvider) { return $urlServiceProvider.deferIntercept(); }])
        .run(['$rootScope', 'AuthService', 'SessionService',
        'responseErrorService', 'addMissingInformationService', '$state',
        'homeStates', 'APP_LIFECYCLE_EVENTS', 'browserExtensionHandlerService',
        'templateCacheHelper', 'experienceEditorHelper', 'router',
        'eventTrackingService', '$transitions', '$window',
        'sniffrjs', 'StorefrontUtilityService',
        function ($rootScope, AuthService, SessionService, responseErrorService, addMissingInformationService, $state, homeStates, APP_LIFECYCLE_EVENTS, browserExtensionHandlerService, templateCacheHelper, experienceEditorHelper, router, eventTrackingService, $transitions, $window, sniffrjs, StorefrontUtilityService) {
            //even though 'router' is not used, it needs to be loaded here to initialize the routes!
            if (!router) {
                throw "router provider was not initialized";
            }
            SessionService.default();
            var data = {
                isCurrentBalanceStored: !!sessionStorage.getItem('currentBalance')
            };
            AuthService.profile(data).then(function (response) {
                if (response.errors.length == 0) {
                    var missingInformationFlags = addMissingInformationService.isMissingInfo(response.passwordNeedsReset, response.emailIsMissing, response.securityQuestionIsMissing);
                    addMissingInformationService.setMissingInformation(response.passwordNeedsReset, response.emailIsMissing, response.securityQuestionIsMissing);
                    SessionService.create(response.acctId, response.acctActivity, null, missingInformationFlags);
                    $rootScope.environment = response.environment;
                    $rootScope.$broadcast(APP_LIFECYCLE_EVENTS.restoredUserState, response);
                }
                else {
                    responseErrorService.displayErrorsFromResponse(response);
                }
            });
            eventTrackingService.initGlobalEventTracking();
            experienceEditorHelper.anchorTagInterceptor();
            var unregisterStateChangeSuccess = $transitions.onSuccess({}, function (transition) {
                $rootScope.previousState = transition.from().name; // save the state we are transitioning from
                browserExtensionHandlerService.sendTag(transition.to()); // [Omniture]: Tracks path on page change
            });
            var unregisterStateChangeError = $transitions.onError({}, function (transition) {
                if (transition.from().url === "^" && transition.error().detail === "notAuthorized") {
                    $state.go(homeStates.Frame);
                }
            });
            //disabled backspace navigation in IE
            angular.element($window.document)
                .on("keydown", function (e) {
                //if backspace pressed and the source element is not an input/textarea...
                if (e.keyCode === 8 && !angular.element(e.target).is(":input")) {
                    //..then stop everything from happening!
                    e.preventDefault();
                }
            });
            $rootScope.$on("$destroy", function () {
                unregisterStateChangeSuccess();
                unregisterStateChangeError();
                unregisterStateChangeStart();
            });
            //initial style sheet
            var operatingSystem = {
                MOBILE: 'mobile',
                DESKTOP: 'desktop'
            };
            var getOS = function () {
                var op = sniffrjs.os.name.toLowerCase();
                var device = sniffrjs.device.name.toLowerCase();
                if (op === "windows" || op === "macos" || op === "linux" || device === "ipad") {
                    return operatingSystem.DESKTOP;
                }
                else {
                    return operatingSystem.MOBILE;
                }
            };
            var css;
            if (sniffrjs.os.name == "android") {
                css = '.hide-android{display:none;}';
            }
            else if (sniffrjs.os.name == "ios") {
                css = '.hide-ios{display:none;}';
            }
            var head = $window.document.head || $window.document.getElementsByTagName('head')[0];
            var style = $window.document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            }
            else {
                style.appendChild($window.document.createTextNode(css));
            }
            head.appendChild(style);
            var os = getOS();
            //below triggers on start of new state transition..            
            var angularjsCssLoaded = false;
            var unregisterStateChangeStart = $transitions.onStart({}, function (transition) {
                templateCacheHelper.removeUncachedFromCache();
                experienceEditorHelper.onStateChangeStart();
                if (!angularjsCssLoaded) {
                    var toState = transition.to();
                    //...if it is tagged as an angularjs state...
                    if ('angularjs' in toState && toState['angularjs']) {
                        var $link = $window.document.createElement('link');
                        var $link2 = $window.document.createElement('link');
                        $link.setAttribute('rel', 'stylesheet');
                        $link2.setAttribute('rel', 'stylesheet');
                        //..it will lazyly load the legacy CSS at that time, avoiding costly load time
                        //on init page load. Once loaded, it will not attempt to reload CSS again.
                        if ((os === operatingSystem.DESKTOP) || (sessionStorage.getItem('FOOTER_FORCE_DESKTOP_VIEW') === 'true')) {
                            //$link.attr('href', hctraGlobalFromIndexCshtml.bootDesktopcss); 
                            $link.setAttribute('href', hctraGlobalFromIndexCshtml.bootDesktopcss);
                            $link2.setAttribute('href', hctraGlobalFromIndexCshtml.siteDesktopcss);
                        }
                        else {
                            //$link.attr('href', hctraGlobalFromIndexCshtml.bootcss); 
                            $link.setAttribute('href', hctraGlobalFromIndexCshtml.bootcss);
                            $link2.setAttribute('href', hctraGlobalFromIndexCshtml.sitecss);
                        }
                        var end = $window.document.querySelector('#coreCssLinkId');
                        end.insertAdjacentElement('beforebegin', $link2);
                        $link2.insertAdjacentElement('beforebegin', $link);
                        angularjsCssLoaded = true;
                    }
                }
            });
            if ((os === operatingSystem.DESKTOP) || (sessionStorage.getItem('FOOTER_FORCE_DESKTOP_VIEW') === 'true')) {
                if (StorefrontUtilityService.isRunningAsKiosk) {
                    $window.document.body.setAttribute('device-type', 'desktop kiosk');
                    //if it is kiosk, load the legacy CSS immediately and flag as loaded.                   
                    var $link = $window.document.createElement('link');
                    var $link2 = $window.document.createElement('link');
                    $link.setAttribute('rel', 'stylesheet');
                    $link2.setAttribute('rel', 'stylesheet');
                    $link.setAttribute('href', hctraGlobalFromIndexCshtml.bootDesktopcss);
                    $link2.setAttribute('href', hctraGlobalFromIndexCshtml.siteDesktopcss);
                    var end = $window.document.querySelector('#coreCssLinkId');
                    end.insertAdjacentElement('beforebegin', $link2);
                    $link2.insertAdjacentElement('beforebegin', $link);
                    angularjsCssLoaded = true;
                }
                else {
                    $window.document.body.setAttribute('device-type', 'desktop');
                }
            }
            else {
                $window.document.body.setAttribute('device-type', 'mobile');
            }
        }]);
})();
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
                    }
                    else {
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
            $transitions.onStart({}, function (transition) {
                var stateSub = transition.to().name.substr(0, 10);
                if (stateSub === 'SectionalC' || stateSub === 'NonSection') {
                    stateStackMemoryService.addStateToStackMemory($location.url(), 'url');
                }
                else {
                    stateStackMemoryService.addStateToStackMemory(transition.to().name, 'state');
                }
            });
            $scope.executeMetadataInjection = function (path) {
                metadataManagerService.injectMetaDataIfNeeded(path).then(function (metaDataGetResponse) {
                    $scope.metaData = angular.copy(metaDataGetResponse);
                }, function (rejectedResponse) {
                    responseErrorService.displayErrorsFromResponse(rejectedResponse);
                });
            };
            $scope.executeRssInjection = function () {
                rssService.injectRssData().then(function (rssDataResponse) {
                    $scope.rssData = angular.copy(rssDataResponse);
                });
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
                }
                else {
                    responseErrorService.displayErrorsFromResponse(res);
                }
            });
            maintenanceService.considerMaintenancePopup();
        }]);
}());
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        // Dynamically builds a script tag and add it the head tag then the enable attribute turns true
        var ScriptInjectorController = /** @class */ (function () {
            function ScriptInjectorController($window, environmentConfig, loggingService, serverConstants) {
                var _this = this;
                this.$window = $window;
                this.environmentConfig = environmentConfig;
                this.loggingService = loggingService;
                this.serverConstants = serverConstants;
                // Properties
                this.elementType = "text/javascript";
                this.$onInit = function () {
                    _this.scriptIntegrityObj = _this.environmentConfig.scriptIntegrityConfig[_this.srcAttempt] || {};
                };
                this.$postLink = function () {
                    if (_this.enable) {
                        var originalElementAttributes = {
                            type: _this.elementType,
                            src: _this.srcAttempt,
                            integrity: _this.scriptIntegrityObj.ShaKey,
                            crossorigin: _this.scriptIntegrityObj.CrossoriginAttribute,
                            srcFallback: _this.scriptIntegrityObj.SrcFallback
                        };
                        if (_this.isValidIntegrityValue(_this.scriptIntegrityObj.ShaKey)) {
                            _this.addScriptElementToDOM(originalElementAttributes);
                        }
                    }
                };
                this.onError = function (newScriptElement) {
                    _this.logSrcThatFailedToLoad(newScriptElement.src);
                    newScriptElement.parentNode.removeChild(newScriptElement);
                    if (newScriptElement.hasAttribute("srcFallback")) {
                        var fallBackScriptPath = _this.serverConstants[_this.scriptIntegrityObj.SrcFallback] || _this.scriptIntegrityObj.SrcFallback;
                        var fallbackElementAttributes = {
                            type: _this.elementType,
                            src: fallBackScriptPath + "?" + _this.serverConstants.currentlyDownloadedWebUiVersion.replace(/\./g, "")
                        };
                        _this.addScriptElementToDOM(fallbackElementAttributes);
                    }
                };
                //TODO: When migrating scriptInjectorComponent to Angular, see if it is possible to simplify addScriptElementToDOM().
                //It was split up this way due to unit test complications.
                this.addScriptElementToDOM = function (newElementAttributes) {
                    var newScriptElement = _this.$window.document.createElement("script");
                    Object.keys(newElementAttributes)
                        .forEach(function (attr) { return newScriptElement.setAttribute(attr, newElementAttributes[attr]); });
                    newScriptElement.addEventListener("load", function () { return _this.checkElementPresence(_this.environmentConfig.mcAfeeIconQuerySelector); }, false);
                    newScriptElement.addEventListener("error", function () { return _this.onError(newScriptElement); }, false);
                    _this.$window.document.getElementsByTagName("head")[0].appendChild(newScriptElement);
                };
                this.logSrcThatFailedToLoad = function (srcThatFailedAndThrewError) {
                    _this.loggingService.logMessage("Error from ScriptInjectorComponent. Failed to load from source: '" + srcThatFailedAndThrewError + "'.", null, null);
                };
                //TODO: When migrating scriptInjectorComponent to Angular, use RXJS to replace "delay" AND forLoop 
                //(see MatIconAvailabilityService at.pipe(retryWhen())
                this.checkElementPresence = function (elementQuerySelector) { return __awaiter(_this, void 0, void 0, function () {
                    var delay, element, i;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                delay = function (ms) { return new Promise(function (res) { return _this.$window.setTimeout(res, ms); }); };
                                i = 0;
                                _a.label = 1;
                            case 1:
                                if (!(i < 2 && !element)) return [3 /*break*/, 4];
                                return [4 /*yield*/, delay(2500)];
                            case 2:
                                _a.sent();
                                element = this.$window.document.querySelector(elementQuerySelector);
                                _a.label = 3;
                            case 3:
                                i++;
                                return [3 /*break*/, 1];
                            case 4:
                                //Log Error if element is not detected
                                //Do nothing if element is detected successfully.
                                if (!element) {
                                    this.loggingService.logMessage("Error from ScriptInjectorComponent: Unable to locate presence of element with query selector: '" + elementQuerySelector + "'.", null, null);
                                    //TODO: Delete this line. it is only here for testing purposes
                                    //alert(`failure: ${elementQuerySelector}`);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); };
                this.isValidIntegrityValue = function (shaKey) {
                    return angular.isString(shaKey)
                        && ["sha256-", "sha384-", "sha512-"].some(function (prefix) { return shaKey.startsWith(prefix); });
                };
            }
            ScriptInjectorController.$inject = [
                "$window",
                "environmentConfig",
                "loggingService",
                "serverConstants"
            ];
            return ScriptInjectorController;
        }());
        Controller.ScriptInjectorController = ScriptInjectorController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module('HCTRAModule').component("scriptInjector", {
        bindings: {
            enable: "<",
            srcAttempt: "@"
        },
        controller: HCTRA.Controller.ScriptInjectorController
    });
})();
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        "use strict";
        var DateService = /** @class */ (function () {
            function DateService(objectUtilService, momentService) {
                var _this = this;
                this.objectUtilService = objectUtilService;
                this.momentService = momentService;
                this.getDaysAgo = function (diffDays, date) {
                    var newDate = angular.copy(date) || _this.momentService.moment().toDate();
                    newDate.setDate(newDate.getDate() - diffDays);
                    return newDate;
                };
                this.isBefore = function (dateFrom, dateTo, compareFn) {
                    return _this.compareDates(dateFrom, dateTo, compareFn) > 0;
                };
                this.isAfter = function (dateFrom, dateTo, compareFn) {
                    return _this.compareDates(dateFrom, dateTo, compareFn) < 0;
                };
                this.isExpiredFilterForCms = function (articleParam) {
                    var article = _this.objectUtilService.toCapitalizedCaseKeys(articleParam, ["isPermanent", "endDate", "startDate"]);
                    return _this.shouldShowArticle(article.IsPermanent, article.EndDate);
                };
                this.isDate = function (dateinStringFormat) {
                    // TODO: Use the momentService to convert to Date
                    var potentialDate = new Date(dateinStringFormat);
                    if (angular.isDate(potentialDate)) {
                        // it is a date
                        if (!isNaN(potentialDate.getTime())) {
                            return true;
                        }
                    }
                    return false;
                };
                this.pickerFormat = "MM/dd/yyyy";
                this.getDateOptions = function (minDate, today) {
                    return {
                        formatDay: "d",
                        showWeeks: false,
                        minDate: _this.momentService.moment(minDate).toDate(),
                        maxDate: _this.momentService.moment(today).toDate()
                    };
                };
                this.compareDates = function (dateFrom, dateTo, compareFn) {
                    if (!dateFrom || !dateTo)
                        return 0;
                    return angular.isFunction(compareFn) ? compareFn(dateFrom, dateTo) : _this.daysBetween(dateFrom, dateTo);
                };
                this.daysBetween = function (first, second) {
                    var date1 = Date.UTC(first.getFullYear(), first.getMonth(), first.getDate());
                    var date2 = Date.UTC(second.getFullYear(), second.getMonth(), second.getDate());
                    var millisPerDay = 1000 * 60 * 60 * 24;
                    var millisBetween = date2 - date1;
                    var days = millisBetween / millisPerDay;
                    return Math.round(days);
                };
                this.specificTimeBetween = function (first, second) {
                    var date1 = Date.UTC(first.getFullYear(), first.getMonth(), first.getDate(), first.getHours(), first.getMinutes(), first.getSeconds(), first.getMilliseconds());
                    var date2 = Date.UTC(second.getFullYear(), second.getMonth(), second.getDate(), second.getHours(), second.getMinutes(), second.getSeconds(), second.getMilliseconds());
                    return date2 - date1;
                };
                this.shouldShowArticle = function (isPermanent, endDate) {
                    var showPermanently = isPermanent === "1";
                    var noEndDate = endDate === null || endDate === "";
                    var hasNotReachedEndDate = false;
                    if (!noEndDate && angular.isDefined(endDate)) {
                        hasNotReachedEndDate = _this.isBefore(_this.momentService.moment().toDate(), endDate, _this.specificTimeBetween);
                    }
                    return showPermanently || noEndDate || hasNotReachedEndDate;
                };
            }
            DateService.$inject = ["objectUtilService", "momentService"];
            return DateService;
        }());
        Service.DateService = DateService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("dateService", HCTRA.Service.DateService);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').service('desktopAutoRedirect', ['$document', 'responsiveService', 'responseErrorService',
        function ($document, responsiveService, responseErrorService) {
            var viewport = $document.find("meta[name=viewport]")[0];
            var setDesktop = function () {
                sessionStorage.setItem("FOOTER_FORCE_DESKTOP_VIEW", true);
                viewport.setAttribute('content', 'width=768');
            };
            this.isForcedDesktopView = function () {
                return sessionStorage.getItem("FOOTER_FORCE_DESKTOP_VIEW") === "true";
            };
            this.forceDesktopView = function () {
                if (responsiveService.isMobile()) {
                    setDesktop();
                }
            };
            this.forceAutoRedirectDesktopView = function () {
                if (responsiveService.isMobile()) {
                    setDesktop();
                    responseErrorService.displayToast('You have been automatically redirected to the desktop view in order to see this page. To revert back to the mobile view, please click "Show Mobile View" at the bottom of the page.', 'warning', true);
                }
            };
            this.revertDesktopView = function () {
                sessionStorage.setItem("FOOTER_FORCE_DESKTOP_VIEW", false);
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
            };
        }]);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        'use strict';
        //Migrated to angular already common\services\downloadService
        //Use new DownloadService when considering migration
        var FileDownloadService = /** @class */ (function () {
            function FileDownloadService($window, $state, serverConstants, CurrentUser, $document, $timeout) {
                var _this = this;
                this.$window = $window;
                this.$state = $state;
                this.serverConstants = serverConstants;
                this.CurrentUser = CurrentUser;
                this.$document = $document;
                this.$timeout = $timeout;
                this.downloadFile = function (url, queryDict) {
                    var apiUrl = _this.getUrl(url, queryDict);
                    if (_this.CurrentUser.currentUserIsInSyncAcrossTabs()) {
                        _this.$window.open(apiUrl, '_blank');
                    }
                    else {
                        location.reload();
                    }
                };
                this.getUrl = function (url, queryDict) {
                    var queryDictIsObject = angular.isObject(queryDict);
                    var mandatoryQueries = {
                        angularState: _this.$state.current.name,
                        clientVersion: _this.serverConstants.currentlyDownloadedWebUiVersion
                    };
                    var fullQueryDict = queryDictIsObject ? angular.extend(queryDict, mandatoryQueries) : mandatoryQueries;
                    var queryString = _this.queryDictToString(fullQueryDict);
                    return (url + '?' + queryString);
                };
                this.downloadPdf = function (data, fileName) {
                    //pdf specification required for proper iOS download
                    var file = new Blob([data], { type: 'application/pdf' });
                    _this.downloadBlob(file, fileName);
                };
                this.downloadExcel = function (data, fileName) {
                    var file = new Blob([data], { type: 'application' });
                    _this.downloadBlob(file, fileName);
                };
                this.downloadBlob = function (file, fileName) {
                    if (navigator['msSaveOrOpenBlob']) {
                        navigator['msSaveOrOpenBlob'](file, fileName);
                    }
                    else {
                        var body_1 = angular.element(_this.$document[0].getElementsByTagName('body'));
                        var fileURL_1 = URL.createObjectURL(file);
                        _this.$timeout(function () {
                            var a = angular.element("<a></a>")[0];
                            a.href = fileURL_1;
                            a.download = fileName;
                            body_1.append(a);
                            a.click();
                            a.remove();
                        }, 0);
                    }
                };
                this.queryDictToString = function (queryDict) {
                    var queryArray = [];
                    for (var key in queryDict) {
                        if (queryDict.hasOwnProperty(key)) {
                            var addString = key;
                            if (angular.isDefined(queryDict[key]) && queryDict[key] !== null) {
                                addString += "=" + queryDict[key].toString();
                            }
                            queryArray.push(addString);
                        }
                    }
                    return queryArray.join('&');
                };
                this.getFileNameFromHeader = function (headers) {
                    var fileName = "";
                    var disposition = headers('Content-Disposition');
                    if (disposition && disposition.indexOf('attachment') !== -1) {
                        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                        var matches = filenameRegex.exec(disposition);
                        if (matches != null && matches[1]) {
                            fileName = matches[1].replace(/['"]/g, '');
                        }
                    }
                    return fileName;
                };
            }
            FileDownloadService.$inject = ['$window', '$state', 'serverConstants', 'CurrentUser', '$document', '$timeout'];
            return FileDownloadService;
        }());
        Service.FileDownloadService = FileDownloadService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("fileDownloadService", HCTRA.Service.FileDownloadService);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('focusExclusionService', ['routes',
        function (routes) {
            var dictByUrl = {};
            dictByUrl[routes.faq] = true;
            dictByUrl[routes.closuresArchive] = true;
            dictByUrl[routes.newsArchive] = true;
            var dictByWildCard = {};
            dictByWildCard[routes.faq] = { expectedSegments: 4, path: routes.faq };
            dictByWildCard[routes.closuresArchive] = { expectedSegments: 4, path: routes.closuresArchive };
            dictByWildCard[routes.newsArchive] = { expectedSegments: 4, path: routes.newsArchive };
            return {
                dictByUrl: dictByUrl,
                dictByWildCard: dictByWildCard
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').service('hctraSessionLogin', ['SessionService', function (SessionService) {
            this.login = function (acctId, acctActivity, currentStep) {
                SessionService.create(acctId, acctActivity, currentStep, false);
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').service('javaObjectUtilService', [
        function () {
            this.isEmpty = function (obj) {
                for (var key in obj) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (obj.hasOwnProperty(key))
                        return false; // object is not empty
                }
                return true; // object is empty
            };
        }
    ]);
}());
(function () {
    "use strict";
    var manageBillingInformationResolver = function (environmentConfig, $q, $state, stateNames, $location, profileStates) {
        var resolve = function (alternateStateName, valid) {
            var replaceLocation = $state.current.url !== $location.url();
            return valid
                ? $q.resolve()
                : $q.reject().catch(function () {
                    return $state.go(alternateStateName, null, replaceLocation
                        ? { location: 'replace' }
                        : {});
                });
        };
        return {
            resolveManagePayment: function () {
                return resolve(profileStates.UpdateBillingInformation, !environmentConfig.billingInformation.UseUpdatedPage);
            },
            resolveUpdateBillingInformation: function () {
                return resolve(stateNames.managePayment, environmentConfig.billingInformation.UseUpdatedPage);
            }
        };
    };
    angular.module("HCTRAModule").factory("manageBillingInformationResolver", [
        "environmentConfig",
        "$q",
        "$state",
        "stateNames",
        "$location",
        "profileStates",
        manageBillingInformationResolver
    ]);
})();
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        "use strict";
        var MapperService = /** @class */ (function () {
            function MapperService(releaseToggle, momentService) {
                var _this = this;
                this.releaseToggle = releaseToggle;
                this.momentService = momentService;
                this.mapToAccountActivityDTO = function (data, vehicleData) {
                    var accountActivityDTO = new HCTRA.Model.AccountActivityDTO();
                    accountActivityDTO.page = data.page;
                    accountActivityDTO.dateFrom = _this.momentService.moment(data.dateFrom).format("L");
                    accountActivityDTO.dateTo = _this.momentService.moment(data.dateTo).format("L");
                    accountActivityDTO.vehicle = vehicleData.text ? vehicleData.text : "";
                    accountActivityDTO.vehicleNickNameType = vehicleData.value ? vehicleData.value : "";
                    accountActivityDTO.transaction = data.transaction ? data.transaction : "";
                    accountActivityDTO.dateRangeType = data.dateRangeType ? data.dateRangeType : "";
                    // console.log(accountActivityDTO);
                    return accountActivityDTO;
                };
                this.mapToViolationsData = function (invoice, paymentAmount) {
                    var violationsData = {
                        adjustmentEligible: invoice.adjustmentEligible,
                        adminFee: invoice.adminFee,
                        agency: invoice.agency,
                        alreadyPaid: invoice.alreadyPaid,
                        amountAlreadyPaid: invoice.amountAlreadyPaid,
                        amountDue: (_this.releaseToggle.r2p3_rtvIsActive === "true" ?
                            (invoice.totalDue - invoice.amountAlreadyPaid) :
                            (invoice.totalDue - invoice.amountAlreadyPaid - invoice.paymentsPending)),
                        collectionFee: invoice.collectionFee,
                        currentAmountDue: invoice.currentAmountDue,
                        dueDate: invoice.dueDate,
                        finalAmountDue: invoice.finalAmountDue,
                        invoiceDate: invoice.invoiceDate,
                        invoiceDue: invoice.invoiceDue,
                        invoiceId: invoice.invoiceId,
                        invoiceNumber: invoice.invoiceId,
                        issueDate: invoice.issueDate,
                        itemType: invoice.itemType,
                        onlineDiscountEligible: invoice.onlineDiscountEligible,
                        otherFee: invoice.otherFee,
                        pastPayments: invoice.pastPayments,
                        payment: parseFloat(invoice.payment ? invoice.payment : paymentAmount),
                        paymentsPending: invoice.paymentsPending,
                        paymentType: invoice.paymentType ?
                            invoice.paymentType :
                            parseFloat(invoice.currentAmountDue) - parseFloat(invoice.payment) < 0.009 ? "PAY_IN_FULL" : "SPECIFY_AMOUNT",
                        payNow: parseFloat(invoice.payment ? invoice.payment : paymentAmount),
                        remainingBalance: parseFloat(invoice.currentAmountDue) - parseFloat(invoice.payment),
                        totalDue: invoice.totalDue,
                        waiverEligible: invoice.waiverEligible,
                        invoicePreviousPayment: undefined
                    };
                    if (violationsData.agency === "HCTRA") {
                        violationsData.agency = "h";
                    }
                    else if (violationsData.agency === "MCTRA") {
                        violationsData.agency = "m";
                    }
                    else if (violationsData.agency === "FBGPTRA") {
                        violationsData.agency = "f";
                    }
                    if ("invoicePreviousPayment" in invoice) {
                        violationsData.invoicePreviousPayment = invoice.invoicePreviousPayment;
                    }
                    return violationsData;
                };
            }
            MapperService.$inject = ["releaseToggle", "momentService"];
            return MapperService;
        }());
        Service.MapperService = MapperService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("mapperService", HCTRA.Service.MapperService);
}());
var HCTRA;
(function (HCTRA) {
    var HctraMath = /** @class */ (function () {
        function HctraMath() {
        }
        /** Returns dividend mod divisor; both must be integers */
        HctraMath.mod = function (dividend, divisor) {
            if (!HCTRA.HctraMath.isInteger(dividend) || !HCTRA.HctraMath.isInteger(divisor))
                return;
            var remainder = dividend % divisor;
            var moddedValue;
            if (!HCTRA.HctraMath.isBetweenBaseAndZero(remainder, divisor))
                moddedValue = remainder + divisor;
            else
                moddedValue = remainder;
            return moddedValue;
        };
        HctraMath.isInteger = function (value) {
            return typeof value === 'number' &&
                isFinite(value) &&
                window.Math.floor(value) === value;
        };
        HctraMath.isBetweenBaseAndZero = function (value, base) {
            if (HCTRA.HctraMath.isNegative(base))
                return value > base && value <= 0;
            else
                return value < base && value >= 0;
        };
        HctraMath.isNegative = function (value) {
            return value < 0;
        };
        return HctraMath;
    }());
    HCTRA.HctraMath = HctraMath;
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        "use strict";
        var ModalService = /** @class */ (function () {
            function ModalService($uibModal, osSniffer, $q, $rootScope, responsiveService, modalServiceModalNames, errorDisplayService) {
                var _this = this;
                this.$uibModal = $uibModal;
                this.osSniffer = osSniffer;
                this.$q = $q;
                this.$rootScope = $rootScope;
                this.responsiveService = responsiveService;
                this.modalServiceModalNames = modalServiceModalNames;
                this.errorDisplayService = errorDisplayService;
                //track all open modals
                this.modalServiceInstances = {};
                //track all destruction listener methods
                this.listeners = [];
                this.modalDefaults = {
                    backdrop: true,
                    keyboard: true,
                    modalFade: true,
                    templateUrl: '/app/templates/common/modal.html'
                };
                this.alertModalDefaults = {
                    backdrop: true,
                    keyboard: true,
                    modalFade: true,
                    templateUrl: '/app/templates/common/modalAlert.html'
                };
                this.currentModalSettings = this.modalDefaults;
                this.currentAlertModalSettings = this.alertModalDefaults;
                this.maintenanceModalOptions = {
                    backdrop: true,
                    keyboard: true,
                    modalFade: true,
                    templateUrl: '/app/templates/common/modalMaintenance.html',
                    windowClass: 'maintenance-modal-window'
                };
                this.modalOptions = {
                    closeButtonText: 'Close',
                    actionButtonText: 'OK',
                    headerText: 'Proceed?',
                    bodyText: 'Perform this action?'
                };
                this.showModal = function (customModalDefaults, customModalOptions, modalName) {
                    if (modalName === void 0) { modalName = null; }
                    if (!customModalDefaults) {
                        customModalDefaults = {};
                    }
                    customModalDefaults.backdrop = 'static';
                    return _this.show(customModalDefaults, customModalOptions, angular.isDefined(modalName) && modalName !== null ? modalName : _this.modalServiceModalNames.GenericAlert);
                };
                this.showSlidingModal = function (componentName, resolveObject, modalName) {
                    if (modalName === void 0) { modalName = null; }
                    var modalDefaults = {
                        backdrop: true,
                        keyboard: true,
                        modalFade: true,
                        component: componentName,
                        windowClass: "side-drawer",
                        resolve: resolveObject
                    };
                    return _this.showModal(modalDefaults, {}, modalName !== null ? modalName : componentName);
                };
                this.show = function (customModalDefaults, customModalOptions, modalName) {
                    if (modalName === void 0) { modalName = null; }
                    modalName = modalName || customModalDefaults.templateUrl;
                    //Create temp objects to work with since we're in a singleton service
                    //Map angular-ui modal custom defaults to modal defaults defined in service
                    var tempModalDefaults = angular.extend({}, _this.currentModalSettings);
                    //Map modal.html $scope custom properties to defaults defined in service
                    var tempModalOptions = angular.extend({}, _this.modalOptions);
                    tempModalDefaults = angular.extend({}, tempModalDefaults, customModalDefaults);
                    tempModalOptions = angular.extend({}, tempModalOptions, customModalOptions);
                    if (_this.listeners) {
                        //allow listeners to alter the modal's settings or cancel it altogether
                        var event_1 = {
                            currentScope: _this.$rootScope,
                            targetScope: _this.$rootScope,
                            name: "ModalOpening",
                            stopPropagation: angular.noop,
                            preventDefault: null,
                            defaultPrevented: false
                        };
                        event_1.preventDefault = function () { return event_1.defaultPrevented = true; };
                        var listenerPromises = _this.listeners
                            .map(function (listener) { return listener(event_1, modalName, tempModalDefaults, tempModalOptions); })
                            .filter(function (p) { return p; });
                        if (event_1.defaultPrevented) {
                            //race
                            var settled_1 = false;
                            var winner_1 = _this.$q.defer();
                            listenerPromises.forEach(function (listenerPromise) { return listenerPromise
                                .then(function (v) { return !settled_1 && (settled_1 = true) && winner_1.resolve(v); }, function (e) { return !settled_1 && (settled_1 = true) && winner_1.reject(e); }); });
                            if (listenerPromises.length === 0) {
                                winner_1.resolve();
                            }
                            return winner_1.promise;
                        }
                    }
                    //add and allow additional resolves to be added for modal controller's constructor injection
                    tempModalDefaults.resolve = angular.extend({}, _this.currentModalSettings.resolve || {}, {
                        "modalOptions": function () { return tempModalOptions; },
                        "modalName": function () { return modalName; }
                    }, tempModalDefaults.resolve || {});
                    if (!tempModalDefaults.controller) {
                        tempModalDefaults.controller = ["$scope", "$uibModalInstance", "modalOptions",
                            function ($scope, $uibModalInstance, modalOptions) {
                                $scope.$uibModalInstance = $uibModalInstance;
                                $scope.modalOptions = modalOptions;
                                $scope.modalOptions.ok = function (result) {
                                    $uibModalInstance.close(result);
                                };
                                $scope.modalOptions.close = function () {
                                    $uibModalInstance.dismiss('cancel');
                                };
                            }
                        ];
                    }
                    //track modal
                    var modalServiceInstance = _this.$uibModal.open(tempModalDefaults);
                    if (!_this.modalServiceInstances[modalName]) {
                        _this.modalServiceInstances[modalName] = [];
                    }
                    _this.modalServiceInstances[modalName].push(modalServiceInstance);
                    return modalServiceInstance.result
                        .finally(function () {
                        //untrack modal when closed
                        if (_this.modalServiceInstances[modalName]) {
                            var mIndex = _this.modalServiceInstances[modalName].indexOf(modalServiceInstance);
                            if (mIndex >= 0) {
                                _this.modalServiceInstances[modalName].splice(mIndex, 1);
                            }
                        }
                    });
                };
                this.showUpdateSuccessModal = function (topic, updatedValue) {
                    _this.showModal(_this.currentAlertModalSettings, {
                        closeButtonText: 'Ok',
                        headerText: topic + ' Confirmation',
                        bodyText: 'Your ' + updatedValue + ' has been successfully updated.'
                    }, _this.modalServiceModalNames.UpdateSuccess);
                };
                this.showMaintenanceModal = function () {
                    var imageSrc = "-/media/B820D13393F34580A738639AA0291EA5.ashx";
                    var altText = "Website Mobile Maintenance Image";
                    if (_this.osSniffer.isDesktopOs()) {
                        imageSrc = "-/media/4C541629D7D64FA6B8DA2DB8243ACC89.ashx";
                        altText = "Website Desktop Maintenance Image";
                    }
                    return _this.showModal(_this.maintenanceModalOptions, {
                        closeButtonText: 'Close',
                        bodyText: "<img alt=\"" + altText + "\" src=\"" + imageSrc + "\" />"
                    }, _this.modalServiceModalNames.Maintenance);
                };
                this.violationsThisInvoicePaidModal = function () {
                    return _this.showModal(_this.currentAlertModalSettings, {
                        closeButtonText: 'Close',
                        headerText: 'Violation Invoice Already Paid',
                        bodyText: 'Only violation invoices with an outstanding balance are displayed. Please use a desktop computer to view all violation invoices associated with this license plate.'
                    }, _this.modalServiceModalNames.ViolationsInvoicePaid);
                };
                this.violationsPaymentPlanModal = function () {
                    return _this.showModal(_this.currentAlertModalSettings, {
                        closeButtonText: 'Close',
                        headerText: 'Payment Plan',
                        bodyText: 'A payment plan already exists for this license plate. Please contact <a target="_blank" href="/HelpAndSupport#email-us">Customer Service</a>.'
                    }, _this.modalServiceModalNames.ViolationsPaymentPlan);
                };
                this.violationsBelowMinimumPaymentModal = function (minPayment) {
                    return _this.showModal(_this.currentAlertModalSettings, {
                        closeButtonText: 'Close',
                        headerText: 'Minimum Payment',
                        bodyText: 'The amount entered is less than the minimum required amount. Please enter a value greater than or equal to ' + minPayment + '.'
                    }, _this.modalServiceModalNames.VioloationsBelowMinimumPayment);
                };
                this.violationsPaymentWillLeaveLowBalanceModal = function (defaultAmount) {
                    var popUpMessage = 'The amount entered will leave a remaining balance that is below the minimum payment required. Please enter the full amount of ' + defaultAmount + '.';
                    return _this.showModal(_this.currentAlertModalSettings, {
                        closeButtonText: 'Close',
                        headerText: 'Minimum Payment',
                        bodyText: popUpMessage
                    }, _this.modalServiceModalNames.ViolationsPaymentWillLeaveLowBalance);
                };
                this.violationsPaymentCouldLeaveLowBalanceModal = function (defaultAmount, minimumPayment, defaultMinusMinimum) {
                    var popUpMessage = 'The amount entered will leave a remaining balance that is below the minimum payment required. Please enter an amount between ' + minimumPayment + ' and ' + defaultMinusMinimum + ' or the full amount of ' + defaultAmount;
                    return _this.showModal(_this.currentAlertModalSettings, {
                        closeButtonText: 'Close',
                        headerText: 'Minimum Payment',
                        bodyText: popUpMessage
                    }, _this.modalServiceModalNames.ViolationsPaymentCouldLeaveLowBalance);
                };
                this.violationsOverpaymentModal = function (defaultAmount) {
                    var popUpMessage = 'The amount entered is greater than what is due. Please enter a value less than or equal to ' + defaultAmount + '.';
                    return _this.showModal(_this.currentAlertModalSettings, {
                        closeButtonText: 'Close',
                        headerText: 'Violation Overpayment',
                        bodyText: popUpMessage
                    }, _this.modalServiceModalNames.ViolationsOverpayment);
                };
                this.invoicePaymentModal = function (headerText, paymentPostDelayMsg) {
                    return _this.showModal(_this.currentAlertModalSettings, {
                        closeButtonText: "Close",
                        headerText: headerText,
                        bodyText: paymentPostDelayMsg
                    }, _this.modalServiceModalNames.InvoicePayment);
                };
                this.closeAccountInfoUpdatePromptModal = function (headerText, bodyText) {
                    return _this.showModal(_this.currentAlertModalSettings, {
                        closeButtonText: "Edit",
                        headerText: headerText,
                        bodyText: bodyText
                    }, _this.modalServiceModalNames.CloseAccountUpdateInfo);
                };
                this.resetSettings();
            }
            Object.defineProperty(ModalService.prototype, "modalNames", {
                get: function () { return this.modalServiceModalNames; },
                enumerable: true,
                configurable: true
            });
            ModalService.prototype.newModalScope = function (initState) {
                return angular.extend(this.$rootScope.$new(), initState || {});
            };
            ModalService.prototype.clearListeners = function () {
                this.listeners = [];
            };
            ModalService.prototype.resetSettings = function () {
                var _this = this;
                this.clearListeners();
                //add a defult listener that will 'deny' a modal called 'ViolationsCannotAddVehicle' from opening
                this.listeners.push(function (evt, name, modalSettings, modalTextOptions) {
                    switch (name) {
                        //general supressed modals
                        case _this.modalServiceModalNames.ViolationsCannotAddVehicle:
                            evt.preventDefault();
                            break;
                        //non-mobile supressed modals: only show these is the web is in mobile mode
                        case _this.modalServiceModalNames.ViolationsInvoicePaid:
                        case _this.modalServiceModalNames.ViolationsPaymentPlan:
                        case _this.modalServiceModalNames.ViolationsNoInviocesFound:
                            if (!_this.responsiveService.isMobile()) {
                                evt.preventDefault();
                            }
                            break;
                        case _this.modalServiceModalNames.ViolationsNoViolationFoundWithInvoice:
                            if (!_this.responsiveService.isMobile()) {
                                evt.preventDefault();
                                _this.errorDisplayService.displayToasts([modalTextOptions.bodyText], "error");
                            }
                            break;
                        default:
                    }
                    return undefined;
                });
            };
            ModalService.prototype.onOpening = function (listener) {
                this.listeners.push(listener);
            };
            ModalService.prototype.isModalOpen = function (name) {
                return this.modalServiceInstances[name] && this.modalServiceInstances[name].length > 0;
            };
            ModalService.prototype.closeAll = function (dismiss) {
                for (var name_1 in this.modalServiceInstances) {
                    if (this.modalServiceInstances.hasOwnProperty(name_1) && this.modalServiceInstances[name_1]) {
                        for (var _i = 0, _a = this.modalServiceInstances[name_1]; _i < _a.length; _i++) {
                            var m = _a[_i];
                            if (dismiss) {
                                m.dismiss();
                            }
                            else {
                                m.close();
                            }
                        }
                        delete this.modalServiceInstances[name_1];
                    }
                }
            };
            ModalService.prototype.closeByName = function (name, dismiss) {
                if (this.modalServiceInstances[name]) {
                    for (var _i = 0, _a = this.modalServiceInstances[name]; _i < _a.length; _i++) {
                        var m = _a[_i];
                        if (dismiss) {
                            m.dismiss();
                        }
                        else {
                            m.close();
                        }
                    }
                    delete this.modalServiceInstances[name];
                }
            };
            ModalService.prototype.violationsCannotAddVehicleModal = function () {
                var popUpMessage = '';
                return this.showModal(this.currentAlertModalSettings, {
                    closeButtonText: 'Close',
                    headerText: 'Your vehicle has a violation and cannot be added at this time.',
                    bodyText: popUpMessage
                }, this.modalServiceModalNames.ViolationsCannotAddVehicle);
            };
            ModalService.prototype.violationsNoViolationFound = function (information) {
                return this.showModal(this.currentAlertModalSettings, {
                    closeButtonText: 'Close',
                    headerText: 'No violations found',
                    bodyText: information
                }, this.modalServiceModalNames.ViolationsNoViolationFound);
            };
            ModalService.prototype.violationsNoInviocesFound = function () {
                return this.showModal({
                    backdrop: true,
                    keyboard: true,
                    modalFade: true,
                    templateUrl: '/app/templates/common/modalAlert.html'
                }, {
                    closeButtonText: 'Close',
                    headerText: 'No Invoices Found',
                    bodyText: 'No violation invoices with an outstanding balance were found.'
                }, this.modalServiceModalNames.ViolationsNoInviocesFound);
            };
            ModalService.prototype.violationsNoViolationFoundWithInvoice = function (information) {
                return this.showModal(this.currentAlertModalSettings, {
                    closeButtonText: 'Close',
                    headerText: 'No violations found with provided invoice',
                    bodyText: information
                }, this.modalServiceModalNames.ViolationsNoViolationFoundWithInvoice);
            };
            ModalService.prototype.addEZPlateModal = function (modalOptions) {
                return this.showModal(this.currentAlertModalSettings, modalOptions, this.modalServiceModalNames.AddEZPlate);
            };
            ModalService.prototype.creditCardPromptModal = function (scope) {
                var settings = angular.extend({}, this.currentAlertModalSettings);
                settings.scope = scope;
                settings.templateUrl = "/app/templates/storefront/StorefrontCreditCardPromptTemplate.html";
                settings.backdrop = "static";
                return this.showModal(settings, {
                    closeButtonText: null,
                    headerText: null,
                    bodyText: null
                }, this.modalServiceModalNames.CreditCardPrompt);
            };
            ModalService.$inject = ["$uibModal", "operatingSystemSnifferService", "$q", "$rootScope", "responsiveService", "ModalServiceModalNames", "errorDisplayService"];
            return ModalService;
        }());
        Service.ModalService = ModalService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule")
        .service("modalService", HCTRA.Service.ModalService)
        .constant("ModalServiceModalNames", {
        "UpdateSuccess": "UpdateSuccess",
        "Maintenance": "Maintenance",
        "ViolationsInvoicePaid": "ViolationsInvoicePaid",
        "ViolationsPaymentPlan": "ViolationsPaymentPlan",
        "VioloationsBelowMinimumPayment": "VioloationsBelowMinimumPayment",
        "ViolationsPaymentWillLeaveLowBalance": "ViolationsPaymentWillLeaveLowBalance",
        "ViolationsPaymentCouldLeaveLowBalance": "ViolationsPaymentCouldLeaveLowBalance",
        "ViolationsOverpayment": "ViolationsOverpayment",
        "InvoicePayment": "InvoicePayment",
        "ViolationsCannotAddVehicle": "ViolationsCannotAddVehicle",
        "ViolationsNoViolationFound": "ViolationsNoViolationFound",
        "ViolationsNoInviocesFound": "ViolationsNoInviocesFound",
        "ViolationsNoViolationFoundWithInvoice": "ViolationsNoViolationFoundWithInvoice",
        "AddEZPlate": "AddEZPlate",
        "CreditCardPrompt": "CreditCardPrompt",
        "GenericAlert": "GenericAlert",
        "ViolationsLandingLogin": "ViolationsLandingLogin",
        "PaymentModal": "PaymentModal",
        "VehicleInfoSlidingPanel": "vehicleInfoSlidingPanel",
        "MailingAddressInfoSlidingPanel": "mailingAddressInfoSlidingPanel",
        "PhoneEmailInfoSlidingPanel": "phoneEmailInfoSlidingPanel",
        "CancelSlidingPanel": "cancelSlidingPanel",
        "EditBillingInfoSlidingPanel": "editBillingInfoSlidingPanel",
        "InvoiceListSlidingPanel": "invoiceListSlidingPanel",
        "CloseAccountUpdateInfo": "closeAccountUpdateInfo"
    });
})();
/* eslint-disable no-useless-escape */
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('removeDoubleCharService', function () {
        return {
            removeDoubleChar: function (val) {
                //once a field reaches past its max length, no val sent
                if (!val) {
                    return;
                }
                val = val.toString();
                val = val.replace(/@@/g, '@');
                val = val.replace(/\s+/g, ' ');
                val = val.replace(/\.+/g, '.');
                val = val.replace(/\-+/g, '-');
                val = val.replace(/\_+/g, '_');
                val = val.replace(/[\<\>\'\"]/g, '');
                return val;
            }
        };
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('serverErrorService', ['errorDisplayService', 'siteVerbiage',
        function (errorDisplayService, siteVerbiage) {
            return {
                handleServerError: function () {
                    var level = 'error';
                    var msgArr = [siteVerbiage.genericErrorMsg];
                    errorDisplayService.displayToasts(msgArr, level);
                }
            };
        }]);
}());
(function () {
    'use strict';
    // angular.module('HCTRAModule').service('Session', ['USER_ROLES', 'webStorage', 'stateNames', function (USER_ROLES, webStorage, stateNames) {
    //     this.default = function () {
    //         this.acctId = 0;
    //         this.userRole = USER_ROLES.notAuthenticated;
    //     };
    //     this.create = function (acctId, acctActivity, currentStep, missingInformation, accountStaus = null) {
    //         this.acctId = acctId;
    //         if (sessionStorage) {
    //             sessionStorage.setItem("acctActivity", acctActivity);
    //             this.userRole = mapAcctActivityToUserRole(sessionStorage.getItem("acctActivity"), accountStaus);
    //         }
    //         if (this.userRole == USER_ROLES.incomplete) {
    //             if (sessionStorage && currentStep != null) {
    //                 sessionStorage.setItem("currentStep", currentStep);
    //                 this.currentStep = currentStep;
    //             }
    //         }
    //         if (sessionStorage && missingInformation && acctActivity != null && this.userRole !== USER_ROLES.notAuthenticated) {
    //             this.userRole = USER_ROLES.missingRequiredInformation;
    //         }
    //     };
    //     this.setAcctActivity = function (acctActivity) {
    //         if (sessionStorage && acctActivity != null) {
    //             sessionStorage.setItem("acctActivity", acctActivity);
    //         }
    //         this.userRole = mapAcctActivityToUserRole(sessionStorage.getItem("acctActivity"));
    //     };
    //     this.setCurrentStep = function (currentStep) {
    //         if (sessionStorage && currentStep != null) {
    //             sessionStorage.setItem("currentStep", currentStep);
    //         }
    //         this.currentStep = sessionStorage.getItem("currentStep");
    //     };
    //     this.destroy = function () {
    //         this.acctId = 0;
    //         webStorage.removeEntry("acctActivity");
    //         webStorage.removeEntry("currentStep");
    //         this.userRole = USER_ROLES.notAuthenticated;
    //     };
    //     this.getAcctActivity = function () {
    //         var val = null;
    //         if (sessionStorage) {
    //             val = sessionStorage.getItem("acctActivity");
    //         }
    //         return val;
    //     };
    //     this.getCurrentStep = function () {
    //         var val = null;
    //         if (sessionStorage) {
    //             val = sessionStorage.getItem("currentStep");
    //         }
    //         return val;
    //     };
    //     this.removeCurrentStep = function () {
    //         webStorage.removeEntry("currentStep");
    //     };
    //     this.stepToStateName = function (currentStep) { // Account Creation wizard step to its state name
    //         switch (currentStep) {
    //             case 1:
    //                 return stateNames.createAccount;
    //             case 3:
    //                 return stateNames.vehicleInformation;
    //             case 4:
    //                 return stateNames.choosePaymentMethod;
    //             case 5:
    //                 return stateNames.createAccountSummary;
    //             default:
    //                 return stateNames.createAccount;
    //         }
    //     };
    //     var mapAcctActivityToUserRole = function (acctActivity, accountStaus = null) {
    //         switch (acctActivity) {
    //             case "A":
    //                 if (accountStaus === "PF")
    //                     return USER_ROLES.pendingFunds;
    //                 return USER_ROLES.active;
    //             case "P":
    //                 return USER_ROLES.incomplete;
    //             case "I":
    //                 return USER_ROLES.pendingClosure;
    //             case "S":
    //                 return USER_ROLES.suspended;
    //             default:
    //                 return USER_ROLES.notAuthenticated;
    //         }
    //     };
    // }]);
}());
angular.module('HCTRAModule').service('stringCheckService', [
    function () {
        this.isFloat = function (numberString) {
            if (numberString && !isNaN(parseFloat(numberString)) && isFinite(numberString)) {
                return true;
            }
            else {
                return false;
            }
        };
    }
]);
(function () {
    'use strict';
    angular.module('HCTRAModule').service('toggleFullWebsiteService', ['$window', '$document', 'webStorage',
        function ($window, $document, webStorage) {
            // TODO: Make unit tests for this service
            var init = function () {
                var viewport = $document.find("meta[name=viewport]")[0];
                var forceDesktopView = webStorage.getValue("FOOTER_FORCE_DESKTOP_VIEW") === "true";
                if (forceDesktopView && angular.isDefined(viewport)) {
                    viewport.setAttribute('content', 'width=1200');
                }
            };
            this.onMobileClick = function () {
                webStorage.setKeyValue("FOOTER_FORCE_DESKTOP_VIEW", true);
                //scope.forceDesktopView = true;
                //viewport.setAttribute('content', 'width=768');
                $window.location.reload();
            };
            this.onDesktopClick = function () {
                webStorage.setKeyValue("FOOTER_FORCE_DESKTOP_VIEW", false);
                //scope.forceDesktopView = false;
                //viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
                $window.location.reload();
            };
            init();
        }
    ]);
}());
(function () {
    'use strict';
    // angular.module('HCTRAModule').service('urlManagerService', ['javaObjectUtilService', '$q', 'genericRepo',
    // function (javaObjectUtilService, $q, genericRepo) {
    //     var self = this;
    //     var deferred = $q.defer();
    //     var promise = deferred.promise;
    //     this.metadataDictionary = null;
    //     this.newRoutes = {
    //         //states
    //         //cmsPathDictionary
    //         //cmsIdDictionary
    //     };
    //     this.megaMenuStructure = null;
    //     this.footerCmsResponse = null;
    //     // this function should start running before all other public functions
    //     this.getStartingRoutes = function (angularStatesObject) {
    //         return $q(function (fulfill) {
    //             if (javaObjectUtilService.isEmpty(self.newRoutes)) {
    //                 const request = Object.assign({getMin: true}, angularStatesObject);
    //                 genericRepo.dataFactory.GetAllMenuUrlMetadata(request).then(function (response) {
    //                     if (response.errors.length === 0) {
    //                         self.metadataDictionary = response.metadata;
    //                         const rekeyed = Object.keys(response.metadata).reduce((acc, key)=> {
    //                             const obj = response.metadata[key];
    //                             acc.articleLookupByPath[obj.itemPath] = obj;
    //                             acc.articleLookupById[obj.itemID] = obj;
    //                             return acc;                               
    //                         }, {articleLookupByPath: {}, articleLookupById: {}});
    //                         const { articleLookupByPath, articleLookupById } = rekeyed;
    //                         self.newRoutes = {
    //                             states: response.states,
    //                             articleLookupByPath,
    //                             articleLookupById
    //                         };
    //                         self.megaMenuStructure = response.navBar;
    //                         self.footerCmsResponse = response.footerURls;
    //                         deferred.resolve();
    //                         fulfill(self.newRoutes);
    //                     } else {
    //                         deferred.reject();
    //                         fulfill({ errors: response.errors });
    //                     }
    //                 });
    //             } else {
    //                 fulfill(self.newRoutes);
    //             }
    //         });
    //     };
    //     this.getMegaMenu = function () {
    //         return $q(function (fulfill) {
    //             if (self.megaMenuStructure === null) {
    //                 promise.then(function () { // success
    //                     fulfill({ navBar: self.megaMenuStructure });
    //                 }, function () {//failure
    //                     fulfill({ errors: true });
    //                 });
    //             } else {
    //                 fulfill({ navBar: self.megaMenuStructure });
    //             }
    //         });
    //     };
    //     this.getMetadata = function () {
    //         return $q(function (fulfill) {
    //             if (self.metadataDictionary === null) {
    //                 promise.then(function () {// success
    //                     fulfill({ metadata: self.metadataDictionary });
    //                 }, function () {//failure
    //                     fulfill({ errors: true });
    //                 });
    //             } else {
    //                 fulfill({ metadata: self.metadataDictionary });
    //             }
    //         });
    //     };
    //     this.getFooterdata = function () {
    //         return $q(function (fulfill) {
    //             if (self.footerCmsResponse === null) {
    //                 promise.then(function () {// success
    //                     fulfill({ footerCmsResponse: self.footerCmsResponse });
    //                 }, function () {//failure
    //                     fulfill({ errors: true });
    //                 });
    //             } else {
    //                 fulfill(self.footerCmsResponse);
    //             }
    //         });
    //     };
    // }]);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        'use strict';
        var ValidatePrimaryEmailService = /** @class */ (function () {
            function ValidatePrimaryEmailService(accountSummaryAlertFilterService, responseErrorService, emailConfirmationConstants) {
                var _this = this;
                this.accountSummaryAlertFilterService = accountSummaryAlertFilterService;
                this.responseErrorService = responseErrorService;
                this.emailConfirmationConstants = emailConfirmationConstants;
                this.setEmailValidationId = function (id) {
                    _this.emailValidationId = id;
                };
                this.getEmailValidationId = function () {
                    return _this.emailValidationId;
                };
                this.destroyEmailValidationId = function () {
                    _this.emailValidationId = null;
                };
                this.setEmailSent = function (isSent) {
                    _this.emailSent = isSent;
                };
                this.getEmailSent = function () {
                    return _this.emailSent;
                };
                this.destroyEmailSent = function () {
                    _this.emailSent = null;
                };
                this.processEmailConfirmationStatus = function (emailConfirmationStatus, emailAddress, previousState) {
                    if (_this.accountSummaryAlertFilterService.filterEmailConfirmationAlert(emailAddress, emailConfirmationStatus)) {
                        var msg, type;
                        if (emailConfirmationStatus == _this.emailConfirmationConstants.NOT_CONFIRMED && previousState != "SendEmailConfirmation") {
                            var url = "'/SendEmailConfirmation'";
                            msg = "Your email address " + emailAddress + " has not been verified. <a href=" + url + ">Please confirm your email address.</a>";
                            type = "warning";
                            _this.responseErrorService.displayToast(msg, type);
                        }
                        else if (emailConfirmationStatus == _this.emailConfirmationConstants.JUST_CONFIRMED) {
                            msg = "Thank you for confirming your email address" + (emailAddress ? ", " + emailAddress + "." : ".");
                            type = "success";
                            _this.responseErrorService.displayToast(msg, type);
                        }
                        // else it's "previouslyConfirmed" and we do nothing
                    }
                };
            }
            ValidatePrimaryEmailService.$inject = ['accountSummaryAlertFilterService', 'responseErrorService', 'emailConfirmationConstants'];
            return ValidatePrimaryEmailService;
        }());
        Service.ValidatePrimaryEmailService = ValidatePrimaryEmailService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').service('validatePrimaryEmailService', HCTRA.Service.ValidatePrimaryEmailService);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        //no need to export, this concrete class willnever be exposed outside of ValidationService
        var Validator = /** @class */ (function () {
            function Validator(formObj) {
                var _this = this;
                this.formObj = formObj;
                this.isErrorTriggered = function (input) {
                    return !_this.formObj[input].$valid && _this.formObj.$submitted;
                };
                this.getErrorStatusClass = function (input) {
                    return _this.isErrorTriggered(input) ? "has-error" : "";
                };
                this.getErrorList = function (input) {
                    return _this.formObj[input].$error;
                };
                this.hasSubmitted = function () {
                    return _this.formObj.$submitted;
                };
                this.isValid = function (input) {
                    return _this.formObj[input].$valid;
                };
                this.getErrorStatusClassForDateRange = function (input) {
                    return !_this.formObj[input].$valid ? "has-error" : "";
                };
                this.getErrorStatusClassFastWithNullCheck = function (input) {
                    if (_this.formObj[input]) {
                        return !_this.formObj[input].$valid ? "has-error" : "";
                    }
                    else {
                        return "";
                    }
                };
                this.getErrorListWithNullCheck = function (input) {
                    if (_this.formObj[input]) {
                        return _this.formObj[input].$error;
                    }
                    else {
                        return [];
                    }
                };
                this.isValidWithNullCheck = function (input) {
                    return _this.formObj[input] && _this.formObj[input].$valid;
                };
                this.isInvalidWithNullCheck = function (input) {
                    return _this.formObj[input] && _this.formObj[input].$invalid;
                };
                this.setPristine = function () {
                    _this.formObj.$setPristine();
                };
            }
            return Validator;
        }());
        // Does not explicitly implement IValidationService because constructors cannot return functions
        var ValidationService = /** @class */ (function () {
            function ValidationService() {
                this.serviceFunction = function (form) {
                    return new Validator(form);
                };
                return this.serviceFunction;
            }
            ValidationService.$inject = [];
            return ValidationService;
        }());
        Service.ValidationService = ValidationService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("validationService", HCTRA.Service.ValidationService);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        "use strict";
        var WildCardDictionaryElement = /** @class */ (function () {
            function WildCardDictionaryElement(_expectedSegments, _path) {
                this.expectedSegments = _expectedSegments;
                this.path = _path;
            }
            return WildCardDictionaryElement;
        }());
        Service.WildCardDictionaryElement = WildCardDictionaryElement;
        var WildCardUrlCheckerService = /** @class */ (function () {
            function WildCardUrlCheckerService(routes) {
                var _this = this;
                this.wildCardDictionary = {};
                this.findParentUrlInWildCardDict = function (relativeUrl) {
                    return _this.findMatch(relativeUrl, _this.wildCardDictionary);
                };
                this.wildCardUrlisMatch = function (relativeUrl, wilcardDict) {
                    return _this.findMatch(relativeUrl, wilcardDict) !== null;
                };
                this.findMatch = function (relativeUrl, wilcardDict) {
                    if (relativeUrl == null || angular.isUndefined(relativeUrl) || relativeUrl.search("/") === -1) {
                        return null;
                    }
                    var numberofUrlSegments = relativeUrl.match(/\//g).length;
                    var locationArray = relativeUrl.split("/");
                    return wilcardDict["/" + locationArray[1]] && wilcardDict["/" + locationArray[1]].expectedSegments >= numberofUrlSegments ?
                        wilcardDict["/" + locationArray[1]].path : null;
                };
                this.wildCardDictionary[routes.faq] = new WildCardDictionaryElement(4, routes.faq);
                //this.wildCardDictionary[routes.closuresArchive] = new WildCardDictionaryElement(4, routes.closuresArchive);
                this.wildCardDictionary[routes.newsArchive] = new WildCardDictionaryElement(4, routes.newsArchive);
            }
            WildCardUrlCheckerService.$inject = ["routes"];
            return WildCardUrlCheckerService;
        }());
        Service.WildCardUrlCheckerService = WildCardUrlCheckerService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("wildCardUrlCheckerService", HCTRA.Service.WildCardUrlCheckerService);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('wizardStepperService', function () {
        return function () {
            return {
                checkStep: function (inStep) {
                    //if (currentStep.value === inStep) {
                    if (this.currentStep == inStep) {
                        return "stepOn";
                    }
                    else {
                        return "step";
                    }
                },
                currentStep: 0
            };
        };
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').config(['$urlServiceProvider', '$locationProvider', '$httpProvider', 'routes', 'urlAliasProvider', '$urlMatcherFactoryProvider', '$qProvider',
        function routeConfigurator($urlServiceProvider, $locationProvider, $httpProvider, routes, urlAliasProvider, $urlMatcherFactoryProvider, $qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
            $urlMatcherFactoryProvider.caseInsensitive(true);
            $httpProvider.defaults.withCredentials = true;
            urlAliasProvider.$get(routes).forEach(function (alias) {
                $urlServiceProvider.rules.when(alias.url, alias.redirectTo);
            });
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: true
            }).hashPrefix('!');
            //appears to not be used, and shouldn't!!
            //// Attaches the toState and fromState properties to the $state service.
            ////  These properties will update on $stateChangeStart to the current 'toState' and 'fromState'
            //$provide.decorator('$state', ['$delegate', '$rootScope', function ($delegate, $rootScope) {
            //    var unregisterStateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
            //        $delegate.toState = toState;
            //        $delegate.fromState = fromState;
            //        //$delegate.toParams = params;
            //    });
            //    $rootScope.$on("$destroy", function () {
            //        unregisterStateChangeStart();
            //    });
            //    return $delegate;
            //}]);
        }]);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        function assignNullDataDefaults(response) {
            if (angular.isObject(response) && !response.data)
                response.data = {};
            if (angular.isObject(response.data)) {
                if (!response.data.errors)
                    response.data.errors = [];
                if (!response.data.alerts)
                    response.data.alerts = [];
            }
            return response;
        }
        Service.assignNullDataDefaults = assignNullDataDefaults;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").factory("assignNullDataDefaults", [function () { return HCTRA.Service.assignNullDataDefaults; }]);
})();
(function () {
    "use strict";
    angular.module("HCTRAModule").config(["$httpProvider",
        function ($httpProvider) {
            // Set HTTP interceptors
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("ServerErrorInterceptor");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("AuthInterceptor");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("HttpMessageInterceptor");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("GlobalVariableInterceptor");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("HttpResponseErrorLogInterceptor");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("HttpResponseErrorNullChecker");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("HtmlTemplateRequestIntercepter");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("SitecoreViewRequestIntercepter");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("CurrentUserCheckIntercepter");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("StorefrontHttpLoggingInterceptor");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("FingerPrintIdInterceptor");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("KioskInterceptor");
                }
            ]);
            $httpProvider.interceptors.push(["$injector",
                function ($injector) {
                    return $injector.get("CaptchaInterceptor");
                }
            ]);
        }
    ]);
    angular.module("HCTRAModule").factory('FingerPrintIdInterceptor', ['environmentConfig', 'fingerPrintIdService', function (environmentConfig, fingerPrintIdService) {
            return {
                request: function ($config) {
                    //only add the fingerprintid to request to this server and
                    //not external servers
                    //get request URL
                    var url = $config.url;
                    if (!url) {
                        return $config;
                    }
                    //get server host
                    var host = window.location.host.toLowerCase();
                    //get request host - if url is relative, it will use base url host.
                    //  if url is absolute, the url's host will override the base url
                    var testHost = (new URL(url, window.location.origin)).host.toLowerCase();
                    //if they mismatch, this is an external request
                    if (host !== testHost) {
                        return $config;
                    }
                    //since they match, this is an internal request, this is ok to add
                    if (environmentConfig.useFingerPrintId) {
                        var fingerPrintId = fingerPrintIdService.getFingerprintId();
                        $config.headers['FingerPrintId'] = fingerPrintId;
                    }
                    return $config;
                }
            };
        }
    ]);
    angular.module("HCTRAModule").factory('KioskInterceptor', ['$q', 'StorefrontUtilityService', function ($q, StorefrontUtilityService) {
            return {
                request: function ($config) {
                    var url = $config.url;
                    if (!url) {
                        return $config;
                    }
                    var storefrontWebStorage = StorefrontUtilityService.webStoreData;
                    var isKiosk = (StorefrontUtilityService.isRunningAsKiosk && storefrontWebStorage && storefrontWebStorage.sessionId);
                    if (isKiosk) {
                        $config.headers["hctra-kiosk-token"] = storefrontWebStorage.kioskToken;
                    }
                    return $config;
                }
            };
        }
    ]);
    angular.module("HCTRAModule").factory('CaptchaInterceptor', ['$q', 'environmentConfig', 'captchaService', function ($q, environmentConfig, captchaService) {
            return {
                request: function ($config) {
                    var url = $config.url;
                    if (!url) {
                        return $config;
                    }
                    var host = window.location.host.toLowerCase();
                    var testUrl = new URL(url, window.location.origin);
                    var testHost = (testUrl).host.toLowerCase();
                    if (host !== testHost) {
                        return $config;
                    }
                    var path = testUrl.pathname;
                    if (environmentConfig.reCaptchaConfig.enabled) {
                        return captchaService
                            .assess(path)
                            .then(function (assessmentRequest) {
                            var configured = assessmentRequest.configured;
                            var token = assessmentRequest.token;
                            var abort = assessmentRequest.abort;
                            if (abort) {
                                return $q.reject();
                            }
                            if (configured) {
                                $config.headers["hctra-captcha-token"] = token;
                            }
                            return $config;
                        });
                    }
                    return $config;
                }
            };
        }
    ]);
    angular.module("HCTRAModule").factory("CurrentUserCheckIntercepter", ["$q", "CurrentUser",
        function ($q, CurrentUser) {
            return {
                request: function (request) {
                    if (!CurrentUser.currentUserIsInSyncAcrossTabs()) {
                        location.reload();
                        return $q.reject();
                    }
                    return request;
                }
            };
        }
    ]);
    angular.module("HCTRAModule").factory("SitecoreViewRequestIntercepter", ['environmentConfig', 'sitecoreTemplateMap',
        function (environmentConfig, sitecoreTemplateMap) {
            return {
                request: function (request) {
                    var interceptMatch = request.url.match(/SitecoreViewRequestInterceptor_(.*)/);
                    if (interceptMatch !== null) {
                        var htmlPageKey = interceptMatch[1];
                        var urlContainer = sitecoreTemplateMap[htmlPageKey];
                        if (environmentConfig.useSitecoreDirectly) {
                            request.url = urlContainer.sitecore;
                            request.url += '?isWeb=true'; // used by Sitecore to determine whether the request is coming from the website
                        }
                        else {
                            request.url = urlContainer.dotNet;
                        }
                    }
                    return request;
                }
            };
        }
    ]);
    angular.module("HCTRAModule").factory("HtmlTemplateRequestIntercepter", ["serverConstants",
        function (serverConstants) {
            return {
                request: function (request) {
                    if (request.method === "GET" // HTML will only be a get
                        && (request.url.indexOf(".htm") !== -1
                            || request.url.indexOf(".cshtml") !== -1) // only care about HTML requests (not API)
                        && request.url.indexOf("/app") !== -1 // only care about custom HTML created by us (problems occur if we do so for 3rd party HTML)
                    ) {
                        request.url =
                            request.url +
                                "?" + serverConstants.currentlyDownloadedWebUiVersion; // "versioning" HTML request so that every release gets newest file
                        if (request.headers.Accept) {
                            delete request.headers.Accept;
                        }
                        request.headers.Accept = 'application/json, text/plain, */*';
                    }
                    return request;
                }
            };
        }
    ]);
    angular.module("HCTRAModule").factory("ServerErrorInterceptor", ["$q", "serverErrorService", "toggleButtonsService",
        function ($q, serverErrorService, toggleButtonsService) {
            return {
                responseError: function (response) {
                    toggleButtonsService.enableButtonsGlobal();
                    serverErrorService.handleServerError();
                    return $q.reject(response);
                }
            };
        }
    ]);
    angular.module("HCTRAModule")
        .factory("AuthInterceptor", ["$state", "loginStates", "SessionService", "AUTH_EVENTS", "$rootScope", "$q", "StorefrontUtilityService", "authChannel", "CurrentUser",
        function ($state, loginStates, SessionService, AUTH_EVENTS, $rootScope, $q, StorefrontUtilityService, authChannel, CurrentUser) {
            return {
                response: function (response) {
                    if (response.data) {
                        if (response.data.sessionTimedOut === true || response.data.securityIssue === true) {
                            if (response.data.sessionTimedOut === true)
                                $rootScope.$broadcast(AUTH_EVENTS.sessionTimedOut);
                            if (response.data.securityIssue === true)
                                $rootScope.$broadcast(AUTH_EVENTS.securityIssue);
                            if (StorefrontUtilityService.isRunningAsKiosk) {
                                return StorefrontUtilityService.lockStateChanging(function () {
                                    SessionService.destroy();
                                    return $q.resolve(response);
                                });
                            }
                            else {
                                SessionService.destroy();
                                CurrentUser.destroyCurrentUser();
                                authChannel.logOut();
                                return $state
                                    .go(loginStates.Login)
                                    .catch(function () { return response; })
                                    .then(function () { return response; });
                            }
                        }
                        else {
                            return $q.resolve(response);
                        }
                    }
                    else {
                        return $q.resolve(response);
                    }
                }
            };
        }
    ]);
    angular.module("HCTRAModule").factory("HttpMessageInterceptor", ["$state", "loginStates", "SessionService", "AUTH_EVENTS", "$rootScope", "$q",
        function ($state, loginStates, SessionService, AUTH_EVENTS, $rootScope, $q) {
            return {
                responseError: function (response) {
                    switch (response.status) {
                        case 401:
                            SessionService.destroy();
                            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                            return $state
                                .go(loginStates.Login)
                                .catch(function () { return $q.reject(response); })
                                .then(function () { return $q.reject(response); });
                        case 403:
                            SessionService.destroy();
                            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                            return $state
                                .go(loginStates.Login)
                                .catch(function () { return $q.reject(response); })
                                .then(function () { return $q.reject(response); });
                        default:
                            return response;
                    }
                }
            };
        }
    ]);
    angular.module("HCTRAModule").factory("StorefrontHttpLoggingInterceptor", ["webStorage", "storefrontWhitelist", "StorefrontUtilityService",
        function (webStorage, storefrontWhitelist, StorefrontUtilityService) { return ({
            response: function (response) {
                var storefrontWebStorage = StorefrontUtilityService.webStoreData;
                if (!StorefrontUtilityService.isRunningAsKiosk || !storefrontWebStorage || !storefrontWebStorage.sessionId) {
                    return response;
                }
                var path = webStorage.location.path();
                var url = response.config.url;
                if (!(path === "/storefront" || path === "/Storefront/Select") && (whitelistItemSearch(url, storefrontWhitelist.whitelistUrls))) {
                    var violationsObj = new HCTRA.Model.CoreViolationsData();
                    var pushSessionRequest = new HCTRA.Model.PushStorefrontRequest();
                    pushSessionRequest.uRL = url;
                    pushSessionRequest.storefrontSessionID = StorefrontUtilityService.webStoreData.sessionId;
                    pushSessionRequest.alert = toArray(response.data.alerts);
                    pushSessionRequest.error = toArray(response.data.errors);
                    pushSessionRequest.angularState = response.config.params.angularState;
                    var dataObj = response.config.data || false;
                    if (dataObj) {
                        if (angular.isDefined(dataObj["violationsData"])) {
                            violationsObj = dataObj["violationsData"];
                        }
                        else if (angular.isDefined(angular.fromJson(dataObj)["violationsData"])) {
                            violationsObj = (angular.fromJson(dataObj)["violationsData"]);
                        }
                        if (angular.isDefined(violationsObj.licensePlate)) {
                            pushSessionRequest.lP = violationsObj.licensePlate || null;
                            pushSessionRequest.licensePlateState = violationsObj.licenseState || null;
                            pushSessionRequest.invoice = violationsObj.invoiceNumber || null;
                        }
                        if (angular.isDefined(dataObj["userName"])) {
                            pushSessionRequest.loginID = dataObj["userName"];
                        }
                    }
                    if (angular.isDefined(sessionStorage.violationsLogData)) {
                        var violationsLogData = (angular.fromJson(sessionStorage.violationsLogData));
                        pushSessionRequest.email = angular.isDefined(violationsLogData.violationsEmail) ? violationsLogData.violationsEmail : null;
                        pushSessionRequest.lP = violationsLogData.licensePlate || pushSessionRequest.lP;
                        pushSessionRequest.licensePlateState = violationsLogData.licenseState || pushSessionRequest.licensePlateState;
                        pushSessionRequest.invoice = violationsLogData.invoiceNumber || pushSessionRequest.invoice;
                    }
                    ////cannot use Angular's $http or genericRepo for this call to prevent circular reference
                    angular.element.ajax({
                        url: '/api/sessions/Storefront/PushToStorefrontDB',
                        data: pushSessionRequest,
                        method: "POST"
                    });
                }
                return response;
            }
        }); }
    ]);
    angular.module("HCTRAModule").factory("HttpResponseErrorNullChecker", ["assignNullDataDefaults",
        function (assignNullDataDefaults) {
            return {
                response: assignNullDataDefaults
            };
        }
    ]);
    function whitelistItemSearch(path, whitelist) {
        for (var _i = 0, whitelist_1 = whitelist; _i < whitelist_1.length; _i++) {
            var item = whitelist_1[_i];
            if (path.indexOf(item) >= 0 || item.indexOf(path) >= 0)
                return true;
        }
        return false;
    }
    function toArray(data) {
        return data && data.length && data.length > 0 ? angular.toJson(data) : null;
    }
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').config(['$analyticsProvider',
        function ($analyticsProvider) {
            $analyticsProvider.virtualPageviews(false);
            $analyticsProvider.firstPageview(false); /* Records pages that don't use $state or $route */
            $analyticsProvider.withBase(false);
            $analyticsProvider.withAutoBase(false);
        }]);
})();
(function () {
    "use strict";
    angular.module('HCTRAModule')
        .config(['$provide', function ($provide) {
            //forces window.open to broadcast an open event, allowing the app to prevent default 'open' behaviour
            $provide.decorator('$window', ["$delegate", function $windowDecorator($delegate) {
                    //refence to old open
                    var oldOpen = $delegate.open;
                    //open window broadcase event name. although it needs to be unique, with exposing the 'listen' function
                    //through the open call, we do not need to expose this key
                    var windowOpenEventName = "APP_WINDOW_OPEN";
                    var newOpen = function (href, name, options, replace) {
                        //event arguments. reflect values to be used and possibly modified before window opens
                        var args = { href: href, name: name, options: options, replace: replace, onOpen: null };
                        var e = angular.element($delegate.document.body).scope().$root
                            .$broadcast(windowOpenEventName, args);
                        var win = null;
                        //if no one is blocking the opening..
                        if (!e.defaultPrevented) {
                            //.. call window.open with the possibly modified parameters
                            win = oldOpen.apply(this, arguments);
                        }
                        //if an onOpen callback was defined in the arguments, call it with the new window as a parameter, enabling
                        //consumers to manipulate window some more
                        return args.onOpen ? (args.onOpen(win) || win) : win;
                    };
                    //create registration method for open
                    newOpen["listen"] = function (callback) {
                        return angular.element($delegate.document.body).scope().$root.$on(windowOpenEventName, callback);
                    };
                    //replace open
                    $delegate.open = newOpen;
                    return $delegate;
                }]);
            //force documentLocationService to be cancelable
            $provide.decorator("documentLocationService", ["$delegate", "$rootScope", function ($delegate, $rootScope) {
                    //reference to old goToHref
                    var oldGoToHref = $delegate.goToHref;
                    //gotoHref broadcast event name. although it needs to be unique, with exposing the 'listen' function
                    //through the goToHref call, we do not need to expose this key
                    var locationHrefChangedEventName = "APP_LOCATION_HREF_CHANGE";
                    //new gotoHref call
                    var newGoToHref = function (url) {
                        var e = $rootScope.$broadcast(locationHrefChangedEventName, { url: url });
                        //if not blocked
                        if (!e.defaultPrevented) {
                            //make call like normal
                            return oldGoToHref.apply(this, Array.prototype.slice.call(arguments));
                        }
                    };
                    //create registration method
                    newGoToHref["listen"] = function (callback) {
                        var cleanup = $rootScope.$on(locationHrefChangedEventName, callback);
                        return cleanup;
                    };
                    //replace goToHref method
                    $delegate.goToHref = newGoToHref;
                    return $delegate;
                }]);
        }
    ]);
})();
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var GlobalVariableInterceptor = /** @class */ (function () {
            function GlobalVariableInterceptor(CurrentUser, $rootScope, webStorage, webStorageConst, serverConstants) {
                var _this = this;
                this.CurrentUser = CurrentUser;
                this.$rootScope = $rootScope;
                this.webStorage = webStorage;
                this.webStorageConst = webStorageConst;
                this.serverConstants = serverConstants;
                this.response = function (response) {
                    if (response.headers(_this.serverConstants.latestWebUiVersionHeaderKey)) {
                        _this.$rootScope.latestWebUiVersion = response.headers(_this.serverConstants.latestWebUiVersionHeaderKey);
                    }
                    //This updates current balance on the menu
                    if (angular.isObject(response.data) && response.data.currentBalanceObj && response.data.currentBalanceObj.currentBalance != null) {
                        var currentBalance = response.data.currentBalanceObj.currentBalance;
                        if (currentBalance) {
                            _this.webStorage.setKeyValue(_this.webStorageConst.currentBalance, currentBalance);
                            var tempCurrentUser = _this.CurrentUser.getCurrentUser();
                            if (angular.isObject(tempCurrentUser) && angular.isObject(tempCurrentUser.currentBalanceObj)
                                && tempCurrentUser.currentBalanceObj.currentBalance !== response.data.currentBalanceObj.currentBalance) {
                                tempCurrentUser.currentBalanceObj.currentBalance = response.data.currentBalanceObj.currentBalance;
                                _this.CurrentUser.updateCurrentUser(tempCurrentUser);
                            }
                            _this.webStorage.setKeyValue(_this.webStorageConst.currentBalance, currentBalance);
                        }
                        else {
                            _this.webStorage.removeEntry(_this.webStorageConst.currentBalance);
                        }
                        _this.$rootScope.currentBalance = currentBalance;
                    }
                    //This updates payment plan current balance on the menu
                    if (angular.isObject(response.data) && response.data.currentPaymentPlanBalanceObj) {
                        var currentPaymentPlanBalance = response.data.currentPaymentPlanBalanceObj.currentBalance;
                        if (currentPaymentPlanBalance) {
                            _this.webStorage.setKeyValue(_this.webStorageConst.currentPaymentPlanBalance, currentPaymentPlanBalance);
                        }
                        else {
                            _this.webStorage.removeEntry(_this.webStorageConst.currentPaymentPlanBalance);
                        }
                        _this.CurrentUser.updateCurrentUser(angular.extend({}, _this.CurrentUser.getCurrentUser(), { paymentPlanBalance: currentPaymentPlanBalance }));
                    }
                    return response;
                };
            }
            GlobalVariableInterceptor.$inject = ["CurrentUser", "$rootScope", "webStorage", "webStorageConst", "serverConstants"];
            return GlobalVariableInterceptor;
        }());
        Service.GlobalVariableInterceptor = GlobalVariableInterceptor;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .service("GlobalVariableInterceptor", HCTRA.Service.GlobalVariableInterceptor);
})();
var HttpResponseErrorLogInterceptor = /** @class */ (function () {
    function HttpResponseErrorLogInterceptor($q, applicationLoggingService, siteVerbiage, $injector, errorInterceptorService, assignNullDataDefaults, $window) {
        var _this = this;
        this.$q = $q;
        this.applicationLoggingService = applicationLoggingService;
        this.siteVerbiage = siteVerbiage;
        this.$injector = $injector;
        this.errorInterceptorService = errorInterceptorService;
        this.assignNullDataDefaults = assignNullDataDefaults;
        this.$window = $window;
        this.response = function (response) {
            var firstNumber = response.status && response.status.toString().substring(0, 1);
            if (response.data && angular.isArray(response.data.errors) && response.data.errors.length > 0) {
                if (response.data.errors
                    .filter(function (error) { return _this.errorInterceptorService.shouldMessageTriggerLogging(error.message); })
                    .length > 0) {
                    _this.applicationLoggingService.interceptorError(angular.toJson({
                        method: response.config.method,
                        url: response.config.url,
                        message: response.data,
                        status: response.status
                    }));
                }
            }
            else if (response.status === null
                || firstNumber === "5"
                || response.status === 0
                || firstNumber === "4"
                || response.status === 204
                || response.status === 206) {
                // F5 responded with sticky note .png
                if (response.status === 503) {
                    _this.$window.location.reload(true); // reload so they will be served the stickynote png
                }
                //Log out user and navigating to login component on status code 417 and displays 417 message
                if (response.status === 417) {
                    var authService = _this.$injector.get('AuthService');
                    authService.logOutOnFourOneSeven();
                }
                var error = {
                    method: response.config.method,
                    url: response.config.url,
                    message: response.data,
                    status: response.status
                };
                _this.applicationLoggingService.error(angular.toJson(error));
                if (!angular.isObject(response.data)) {
                    response.data = { originalResponse: response.data };
                }
                _this.assignNullDataDefaults(response);
                //Stop adding other errors on status code 417 
                if (response.status !== 417) {
                    error.message = _this.siteVerbiage.genericErrorMsg;
                    if (angular.isArray(response.data.errors)) {
                        response.data.errors.push(error);
                    }
                }
            }
            return response;
        };
        this.responseError = function (response) { return _this.response(response); };
    }
    HttpResponseErrorLogInterceptor.$inject = ["$q", "applicationLoggingService", "siteVerbiage", "$injector", "errorInterceptorService", "assignNullDataDefaults", "$window"];
    return HttpResponseErrorLogInterceptor;
}());
angular.module("HCTRAModule").service("HttpResponseErrorLogInterceptor", HttpResponseErrorLogInterceptor);
(function () {
    'use strict';
    angular.module('HCTRAModule').constant('actionDefaultFilter', {
        defaultFilter: ['cardNbr', 'card', 'username', 'userName', 'password', 'authorizedContactList', 'authorizedContacts']
    });
}());
var HCTRA;
(function (HCTRA) {
    var Constant;
    (function (Constant) {
        "use strict";
        var AppLifecycleEventsConst = /** @class */ (function () {
            function AppLifecycleEventsConst() {
            }
            Object.defineProperty(AppLifecycleEventsConst, "Default", {
                get: function () {
                    return {
                        restoredUserState: "restored-user-state",
                        setNavBarLogin: "set-nav-bar-login",
                        newAccountNameEntered: "new-account-name-entered",
                        currentUserHeaderInfomation: "current-user-header-infomation"
                    };
                },
                enumerable: true,
                configurable: true
            });
            return AppLifecycleEventsConst;
        }());
        Constant.AppLifecycleEventsConst = AppLifecycleEventsConst;
    })(Constant = HCTRA.Constant || (HCTRA.Constant = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").constant("APP_LIFECYCLE_EVENTS", HCTRA.Constant.AppLifecycleEventsConst.Default);
}());
//Migrated
(function () {
    'use strict';
    angular.module('HCTRAModule').constant('cmsMediaLibrary', {
        mvuInstructions: 'F6E5148CC5504D919B33B17166E77D8E',
        mvuTemplate: 'A46C6509C4794F12821598AC861641A1'
    });
}());
//just one cookieName used just by current user service.
//should this be in a separate constants file?
(function () {
    'use strict';
    angular.module('HCTRAModule').constant('creditCardTypes', {
        visa: 'VISA',
        mastercard: 'MASTERCARD',
        amex: 'AMERICAN EXPRESS',
        discover: 'DISCOVER'
    });
}());
var HCTRA;
(function (HCTRA) {
    var Constant;
    (function (Constant) {
        var EmailConfirmationConstants;
        (function (EmailConfirmationConstants) {
            EmailConfirmationConstants[EmailConfirmationConstants["NOT_CONFIRMED"] = 1] = "NOT_CONFIRMED";
            EmailConfirmationConstants[EmailConfirmationConstants["JUST_CONFIRMED"] = 2] = "JUST_CONFIRMED";
            EmailConfirmationConstants[EmailConfirmationConstants["PREVIOUSLY_CONFIRMED"] = 3] = "PREVIOUSLY_CONFIRMED";
        })(EmailConfirmationConstants = Constant.EmailConfirmationConstants || (Constant.EmailConfirmationConstants = {}));
    })(Constant = HCTRA.Constant || (HCTRA.Constant = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').constant('emailConfirmationConstants', HCTRA.Constant.EmailConfirmationConstants);
}());
(function () {
    'use strict';
    // Have to do this here so the constant can be injected into config.route.js
    var initUrl = window.location.href; // eslint-disable-line angular/window-service
    var urlResult = initUrl.match(/sc_itemid/);
    var isSitecore = !!urlResult && !!urlResult[0];
    angular.module('HCTRAModule').constant('environments', {
        isSitecore: isSitecore,
        isExperienceEditor: false
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').constant('minimumPaymentAmount', {
        minimumPaymentAmount: 5.00
    });
}());
//Migrated
var HCTRA;
(function (HCTRA) {
    var Constant;
    (function (Constant) {
        "use strict";
    })(Constant = HCTRA.Constant || (HCTRA.Constant = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').constant('sitecoreTemplateMap', {
        homeQuickLinksTemplate: {
            sitecore: '/sitecore/9BD5E5DB-03CF-4B79-8CD3-75C87E675262',
            dotNet: '/app/directives/home/homeQuickLinksTemplate.html'
        },
        desktopHome: {
            sitecore: '/sitecore/0F89086A-8B3B-4170-98E8-3578F45800C0',
            dotNet: '/app/templates/home/desktopHome.html'
        },
        footerCopyright: {
            sitecore: '/sitecore/DC3D277D-C715-4459-8524-100382DAA52E',
            dotNet: '/app/templates/menu/footerCopyright.html'
        },
        homeCarouselTemplate: {
            sitecore: '/sitecore/F2AEBDC0-F015-4D90-9FF3-6C152B8DFB72',
            dotNet: '/app/directives/home/homeCarouselTemplate.html'
        },
        homeModuleTemplate: {
            sitecore: '/sitecore/77AE0153-7E1E-4153-A71A-A9BB5448A3B6',
            dotNet: '/app/directives/home/homeModuleTemplate.html'
        },
        footerLinkList: {
            sitecore: '/sitecore/228426D3-4884-469F-BFC9-E1D2D9F08479',
            dotNet: '/app/templates/menu/footerLinkList.html'
        }
    });
}());
var HCTRA;
(function (HCTRA) {
    var Constant;
    (function (Constant) {
        "use strict";
    })(Constant = HCTRA.Constant || (HCTRA.Constant = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Constant;
    (function (Constant) {
        "use strict";
    })(Constant = HCTRA.Constant || (HCTRA.Constant = {}));
})(HCTRA || (HCTRA = {}));
//migrated to Angular
(function () {
    'use strict';
    angular.module('HCTRAModule').constant('validationMessages', {
        genericPre: 'Please enter a valid ',
        genericPreAlt: 'Please enter your ',
        genericPost: '',
        confirmPre: 'Does not match ',
        confirmPost: '',
        alphaNumPre: 'Characters must be alphanumeric',
        alphaNumPost: '',
        alphaNumPostAlt: ' or @_.-',
        minLengthPre: 'Must be at least ',
        minLengthPost: ' characters',
        maxLengthPre: 'Must be at most ',
        maxLengthPost: ' characters'
    });
}());
var HCTRA;
(function (HCTRA) {
    var Constant;
    (function (Constant) {
        "use strict";
    })(Constant = HCTRA.Constant || (HCTRA.Constant = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Constant;
    (function (Constant) {
        "use strict";
        // Must match the PaymentType enum in BosWebServices
        var PaymentType;
        (function (PaymentType) {
            PaymentType[PaymentType["CREDIT"] = 0] = "CREDIT";
            PaymentType[PaymentType["EFT"] = 1] = "EFT";
            PaymentType[PaymentType["INVOICE"] = 2] = "INVOICE";
            PaymentType[PaymentType["NON_REVENUE"] = 3] = "NON_REVENUE";
            PaymentType[PaymentType["CASH"] = 4] = "CASH";
        })(PaymentType = Constant.PaymentType || (Constant.PaymentType = {}));
    })(Constant = HCTRA.Constant || (HCTRA.Constant = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Constant;
    (function (Constant) {
        "use strict";
        var StorefrontWhitelist = /** @class */ (function () {
            function StorefrontWhitelist() {
            }
            Object.defineProperty(StorefrontWhitelist, "Default", {
                get: function () {
                    return {
                        whitelistUrls: [
                            "api/sessions/MissedAToll",
                            "api/sessions/Login",
                            "api/sessions/AddMissingInformation",
                            "api/sessions/AccountActivity",
                            "api/sessions/ManageVehicles",
                            "api/sessions/ActivateEzTag",
                            "api/sessions/AccountSummary",
                            "api/sessions/Storefront",
                            "api/sessions/Violations",
                            "api/sessions/AccountInformation",
                            "api/sessions/MakeOneTimePayment",
                            "api/sessions/ManagePayment",
                            "api/sessions/PersonalInfo",
                            "api/sessions/UpdateRebillAmount",
                            "api/sessions/SentALetter",
                            "api/sessions/PersonalBusinessData",
                            "api/sessions/PersonalBusinessDetails",
                            "api/sessions/PersonalInfo",
                            "api/sessions/AddPaymentDetails",
                            "api/sessions/AddEZTag",
                            "api/sessions/CreateAccountSummary",
                            "api/sessions/Checkout",
                            "api/sessions/CreateAccountReceipt",
                            "api/sessions/GetCurrentStep",
                            "api/sessions/MultiVehicleUpload"
                        ]
                    };
                },
                enumerable: true,
                configurable: true
            });
            return StorefrontWhitelist;
        }());
        Constant.StorefrontWhitelist = StorefrontWhitelist;
    })(Constant = HCTRA.Constant || (HCTRA.Constant = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").constant("storefrontWhitelist", HCTRA.Constant.StorefrontWhitelist.Default);
}());
var HCTRA;
(function (HCTRA) {
    var Datastructure;
    (function (Datastructure) {
        "use strict";
        var CircularList = /** @class */ (function () {
            function CircularList(inArray) {
                var _this = this;
                this.headPosition = 0;
                this.moveHeadLeft = function () {
                    _this.shiftHeadPosition(-1);
                    return _this.peekCurrent();
                };
                this.moveHeadRight = function () {
                    _this.shiftHeadPosition(1);
                    return _this.peekCurrent();
                };
                this.peekCurrent = function () {
                    return _this.baseArray[_this.headPosition];
                };
                this.peekLeft = function () {
                    var oldPosition = _this.headPosition;
                    var value = _this.moveHeadLeft();
                    _this.headPosition = oldPosition;
                    return value;
                };
                this.peekRight = function () {
                    var oldPosition = _this.headPosition;
                    var value = _this.moveHeadRight();
                    _this.headPosition = oldPosition;
                    return value;
                };
                this.shiftHeadPosition = function (relativePosition) {
                    var newHeadPosition = (relativePosition + _this.headPosition);
                    // Check intended to prevent unneeded use of expensive mod operation
                    if (newHeadPosition < 0 || newHeadPosition >= _this.baseArray.length) {
                        // Should keep the headPosition between 0 and (length - 1)
                        newHeadPosition = HCTRA.HctraMath.mod(newHeadPosition, _this.baseArray.length);
                    }
                    _this.headPosition = newHeadPosition;
                    return _this.headPosition;
                };
                if (!inArray || !angular.isArray(inArray)) {
                    throw new TypeError("Circular list requires an array");
                }
                else {
                    this.baseArray = [].concat(inArray);
                }
            }
            return CircularList;
        }());
        Datastructure.CircularList = CircularList;
    })(Datastructure = HCTRA.Datastructure || (HCTRA.Datastructure = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Datastructure;
    (function (Datastructure) {
        'use strict';
        var Paginator = /** @class */ (function () {
            function Paginator(initArray, itemsPerPage) {
                var _this = this;
                this.itemsPerPage = itemsPerPage;
                this.getPage = function (pageNum) {
                    return _this.paginatedArr[pageNum - 1];
                };
                this.setPageSize = function (newPageSize) {
                    _this.itemsPerPage = newPageSize;
                    _this.paginatedArr = _this.divideIntoPages(_this.flatArr, newPageSize);
                };
                this.divideIntoPages = function (flatArr, itemsPerPage) {
                    var flatArrCopy = flatArr.slice(); // if not for this copy line, the method would be destructive to the input array
                    var outArr = [];
                    do {
                        outArr.push(flatArrCopy.splice(0, itemsPerPage));
                    } while (flatArrCopy.length > 0);
                    return outArr;
                };
                this.flatArr = initArray.slice(); // only use the copy
                this.paginatedArr = this.divideIntoPages(this.flatArr, itemsPerPage);
            }
            Object.defineProperty(Paginator.prototype, "itemCount", {
                get: function () {
                    return this.flatArr.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Paginator.prototype, "pageCount", {
                get: function () {
                    return this.paginatedArr.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Paginator.prototype, "pageSize", {
                get: function () {
                    return this.itemsPerPage;
                },
                enumerable: true,
                configurable: true
            });
            return Paginator;
        }());
        Datastructure.Paginator = Paginator;
    })(Datastructure = HCTRA.Datastructure || (HCTRA.Datastructure = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Decorator;
    (function (Decorator) {
        var GenericRepoVantivDecorator = /** @class */ (function () {
            function GenericRepoVantivDecorator($delegate, webStorage, webStorageConst) {
                var _this = this;
                this.$delegate = $delegate;
                this.webStorage = webStorage;
                this.webStorageConst = webStorageConst;
                // VantivLog/LogVantivRequestData
                var LogVantivRequestFn = $delegate.dataFactory.LogVantivRequest;
                var newLogVantivRequestFn = function (data) {
                    // Get violations data from webStorage and set in data
                    data.violationsData = _this.webStorage.getValue(_this.webStorageConst.violationsLogData);
                    return LogVantivRequestFn.call($delegate, data);
                };
                $delegate.dataFactory.LogVantivRequest = newLogVantivRequestFn;
                // VantivLog/LogVantivResponseData
                var LogVantivResponseFn = $delegate.dataFactory.LogVantivResponse;
                var newLogVantivResponseFn = function (data) {
                    // Get violations data from webStorage and set in data
                    data.violationsData = _this.webStorage.getValue(_this.webStorageConst.violationsLogData);
                    return LogVantivResponseFn.call($delegate, data);
                };
                $delegate.dataFactory.LogVantivResponse = newLogVantivResponseFn;
                return $delegate;
            }
            GenericRepoVantivDecorator.$inject = ["$delegate", "webStorage", "webStorageConst"];
            return GenericRepoVantivDecorator;
        }());
        Decorator.GenericRepoVantivDecorator = GenericRepoVantivDecorator;
    })(Decorator = HCTRA.Decorator || (HCTRA.Decorator = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").decorator("genericRepo", HCTRA.Decorator.GenericRepoVantivDecorator);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("addMultipleVehicles", ['localDataRepo',
        function (localDataRepo) {
            return {
                restrict: "E",
                templateUrl: "/app/directives/addMultipleVehiclesTemplate.html",
                scope: {
                    vehicleList: '=',
                    editFunction: '&',
                    deleteFunction: '&',
                    hideDelete: '=?',
                    title: '=?'
                },
                link: function ($scope) {
                    if (!$scope.hideDelete) {
                        $scope.hideDelete = false;
                    }
                    if (!$scope.title) {
                        $scope.title = "EZ TAGs Requested";
                    }
                    $scope.onEdit = function (index) {
                        var functionFromParentController = $scope.editFunction();
                        functionFromParentController(index);
                    };
                    var classList = localDataRepo.getClasses(); // Axle classifications
                    $scope.classIdToLabel = function (id) {
                        var label;
                        classList.forEach(function (elem) {
                            if (elem.value == id) {
                                label = elem.label;
                                return;
                            }
                        });
                        return label;
                    };
                    $scope.onDelete = function (index) {
                        var functionFromParentController = $scope.deleteFunction();
                        functionFromParentController(index);
                    };
                }
            };
        }]);
}());
//migrated
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("articleSearchParameter", [
        function () {
            return {
                restrict: "E",
                templateUrl: "/app/directives/articleSearchParameterTemplate.html",
                scope: {
                    userClickedSearch: '&',
                    categories: '=',
                    categoryHolder: '='
                },
                link: function ($scope) {
                    $scope.isItalic = function (member) {
                        if ($scope[member] !== '') {
                            return '';
                        }
                        else {
                            return 'setItalic';
                        }
                    };
                }
            };
        }
    ]);
}());
/* eslint-disable no-useless-escape */
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('bankAccountEntry', ['validationService', '$window', 'routes', 'linkLookupService',
        function (validationService, $window, routes, linkLookupService) {
            return {
                scope: {
                    bankDetails: "=",
                    paymentsform: "=",
                    validate: "="
                },
                templateUrl: '/app/directives/billingEntry/bankAccountEntryTemplate.html',
                link: function ($scope, elem, attrs) {
                    $scope.showNameField = 'showName' in attrs;
                    $scope.nameOnBankAccountValidation = new RegExp(/^(?=.*[a-zA-Z])([a-zA-Z0-9\-\,\.\'\s]{0,80})$/);
                    $scope.bankRoutingNumberValidation = new RegExp(/^\d{9}$/);
                    $scope.bankAccountNumberValidation = new RegExp(/^(\d{1,17}|\*{12}\d{4})$/);
                    if (!$scope.bankDetails)
                        $scope.bankDetails = {};
                    $scope.clearReq = function (obj, prop, field) {
                        if ($scope[obj][prop]) {
                            $scope.paymentsform[field].$setValidity('required', true);
                        }
                    };
                    $scope.clickedHelp = function () {
                        $window.open(linkLookupService.articleLookupById(routes.eftHelp));
                    };
                    $scope.validation = validationService($scope.paymentsform);
                }
            };
        }
    ]);
}());
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        var CreditCardEntry = /** @class */ (function () {
            function CreditCardEntry(validationService, expirationDateService, monthListService, creditCardInputService) {
                var _this = this;
                this.validationService = validationService;
                this.expirationDateService = expirationDateService;
                this.monthListService = monthListService;
                this.creditCardInputService = creditCardInputService;
                this.templateUrl = "/app/directives/billingEntry/creditCardEntryTemplate.html";
                this.scope = {
                    creditCard: "=",
                    paymentsform: "=",
                    nameSuffix: "=",
                    useExistingCard: "=?",
                    disableValidation: "=?"
                };
                this.link = function ($scope, element, attr) {
                    var updateValidity = function (property, criteria, valid) {
                        return $scope.paymentsform[$scope.addSuffix(property)].$setValidity(criteria, valid);
                    };
                    var validateAndUpdateExpirationDate = function () {
                        updateValidity("expMonth", "required", _this.expirationDateService.isMonthValid($scope.creditCard.expMonth, $scope.creditCard.selectedYear));
                        updateValidity("expYear", "required", _this.expirationDateService.isYearValid($scope.creditCard.selectedYear));
                        $scope.creditCard.cardExpires = $scope.creditCard.expMonth + "/" + $scope.creditCard.selectedYear;
                    };
                    angular.extend($scope, {
                        toasterVisible: false,
                        useExistingCard: null,
                        months: _this.monthListService.months,
                        addSuffix: function (cardItem) { return cardItem + $scope.nameSuffix; },
                        update: function () { return _this.creditCardInputService.update($scope); },
                        strategyUsed: 17,
                        strategies: HCTRA.Model.CreditCardInputStrategyEnum,
                        autoUpdate: angular.isDefined(attr.autoUpdate),
                        creditCardNameDisabled: true,
                        creditCardNumberDisabled: true,
                        creditCardExpYearDisabled: true,
                        creditCardExpMothDisabled: true
                    });
                    _this.creditCardInputService.setup($scope);
                    $scope.$watch("creditCard.expMonth", function (expMonth) {
                        expMonth && validateAndUpdateExpirationDate();
                    });
                    $scope.$watch("creditCard.selectedYear", function (selectedYear) {
                        $scope.yearList = _this.expirationDateService.getExpirationYearList(selectedYear, 20);
                        selectedYear && validateAndUpdateExpirationDate();
                    });
                    $scope.$on($scope.nameSuffix, function (event, deferred) {
                        _this.creditCardInputService
                            .submit($scope)
                            .then(function () { return deferred.resolve(); })
                            .catch(function () { return deferred.reject(); });
                    });
                    $scope.validation = _this.validationService($scope.paymentsform);
                };
            }
            CreditCardEntry.$inject = ["validationService", "expirationDateService", "monthListService", "creditCardInputService"];
            return CreditCardEntry;
        }());
        Directive.CreditCardEntry = CreditCardEntry;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    function genericDirectiveFactory(functionConstructor) {
        var directive = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new (functionConstructor.bind.apply(functionConstructor, [null].concat(args)))();
        };
        directive.$inject = functionConstructor.$inject;
        return directive;
    }
    angular.module("HCTRAModule")
        .directive("creditCardEntry", genericDirectiveFactory(HCTRA.Directive.CreditCardEntry));
})();
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('creditCardNameNumValidator', [
        function () {
            return {
                scope: {
                    "creditCardNameNumValidator": '@'
                },
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.creditCardNameNumValidator = function (modelValue) {
                        if (angular.isUndefined(modelValue)) {
                            return false;
                        }
                        if (angular.isDefined(scope.$parent.creditCard.cardNbr)) {
                            var nameOnCard = modelValue;
                            if (nameOnCard.search(/\d{10}/) !== -1) {
                                return false;
                            }
                        }
                        return true;
                    };
                    scope.$watch('creditCardNameNumValidator', function () {
                        ngModel.$validate();
                    });
                }
            };
        }
    ]);
}());
/* eslint-disable no-useless-escape */
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("creditCardNameValidator", ['responseErrorService',
        function (responseErrorService) {
            return {
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    var cardPrefixLengthRegex = /.*\d{5}.*/;
                    var validCardNameRegex = /^[0-9a-zA-Z\-\,\.\'\s\/]*$/;
                    ngModel.$validators.creditCardNameValidator = function (modelValue) {
                        if (angular.isUndefined(modelValue)) {
                            return false;
                        }
                        if (validCardNameRegex.test(modelValue)) {
                            if (cardPrefixLengthRegex.test(modelValue)) {
                                if (!scope.$parent.toasterVisible) {
                                    responseErrorService.displayToast("Please verify the name on the credit card is correct.", 'warning');
                                    scope.$parent.toasterVisible = true;
                                }
                            }
                            else {
                                scope.$parent.toasterVisible = false;
                            }
                            return true;
                        }
                        return false;
                    };
                    scope.$watch('modelValue', function () {
                        ngModel.$validate();
                    });
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("creditCardTypeValidator", ['creditCardTypeService',
        //CreditCardType is convereted to enum in Angular
        function (creditCardTypeService) {
            return {
                require: "ngModel",
                scope: {
                    "creditcard.cardCode": "="
                },
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.creditCardTypeValidator = function (modelValue) {
                        var autoFilledCardNumberRegex = /^\*{12}-\d{4}/;
                        if (angular.isUndefined(modelValue) || modelValue == "") {
                            if (scope.$parent.creditCard) {
                                scope.$parent.creditCard.cardCode = "NA";
                            }
                            return false;
                        }
                        if (!autoFilledCardNumberRegex.test(modelValue) && modelValue) {
                            scope.$parent.creditCard.cardCode = creditCardTypeService.findCardCode(modelValue);
                        }
                        if (scope.$parent.creditCard.cardCode === "NA") {
                            return false;
                        }
                        return true;
                    };
                    scope.$watch('creditCard.cardNbr', function () {
                        ngModel.$validate();
                    });
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("bankInfo", function () {
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
                $transclude(function (header) {
                    if (!header.length) {
                        $scope.noTransHeader = true;
                    }
                });
            }
        };
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("billingAddress", function () {
        return {
            restrict: "E",
            templateUrl: "/app/directives/billingInfo/billingAddress.html",
            scope: {
                internationalIn: '=international',
                creditCard: '=',
                noH4: '='
            },
            link: function ($scope) {
                // $scope.internationalIn could be a bool or an object
                if ($scope.internationalIn === true) {
                    $scope.international = $scope.internationalIn;
                }
                else if (angular.isObject($scope.internationalIn) && angular.isDefined($scope.internationalIn.value)) {
                    $scope.international = $scope.internationalIn.value;
                }
            }
        };
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("creditCardInfo", ["arrayUtilService", "cmsUtilService",
        function (arrayUtilService, cmsUtilService) {
            return {
                restrict: "E",
                templateUrl: "/app/directives/billingInfo/creditCardInfo.html",
                transclude: true,
                scope: {
                    creditcard: '=',
                    onEdit: '&',
                    onCreditCardEdit: '&',
                    addSecondaryPayment: '&',
                    multiplecards: '&',
                    hideEdit: '=?',
                    international: '=',
                    isAccountInformation: '=',
                    numCards: '=',
                    isPrimarySet: '=',
                    cardCmsContent: '<?'
                },
                link: function ($scope, elem, attrs, ctrl, $transclude) {
                    var multipleCreditCards = $scope.multiplecards();
                    $scope.showEdit = !!attrs.onEdit && !multipleCreditCards;
                    $scope.noTransHeader = false;
                    $scope.headerText = "Update Billing Information";
                    $scope.showAddSecondaryPayment = 'addSecondaryPayment' in attrs && !multipleCreditCards;
                    $scope.showNameOnCard = 'showNameOnCard' in attrs;
                    $scope.hideTitle = 'card2' in attrs;
                    $scope.showCardEdit = multipleCreditCards && 'multiplecards' in attrs;
                    $scope.hideAddress = 'hideAddress' in attrs;
                    $scope.guaranteedPrimary = 'guaranteedPrimary' in attrs;
                    $scope.creditCard = $scope.creditcard === null ? {} : $scope.creditcard;
                    var unwatch = $scope.$watch('creditcard', function () {
                        if ($scope.creditcard && $scope.creditcard.cardNbr) {
                            $scope.creditCard = $scope.creditcard === null ? {} : $scope.creditcard;
                            if (multipleCreditCards && !$scope.guaranteedPrimary) {
                                $scope.creditCard.orderDisplay = $scope.creditCard.primary ? "Primary" : "Secondary";
                            }
                            else if ($scope.guaranteedPrimary) {
                                $scope.creditCard.orderDisplay = 'Primary';
                            }
                            else {
                                $scope.creditCard.orderDisplay = '';
                            }
                            assignCardImage($scope.cardCmsContent, $scope.creditCard.cardCode);
                            unwatch();
                        }
                    });
                    var unwatch2 = $scope.$watch('cardCmsContent', function () {
                        if ($scope.cardCmsContent) {
                            assignCardImage($scope.cardCmsContent, $scope.creditCard.cardCode);
                            unwatch2();
                        }
                    });
                    $scope.$watch('isPrimarySet', function (newValue) {
                        $scope.showAddSecondaryPayment = 'addSecondaryPayment' in attrs && !multipleCreditCards && newValue;
                    });
                    // Checks if there is a transcluded header or not
                    $transclude(function (header) {
                        if (!header.length) {
                            $scope.noTransHeader = true;
                        }
                    });
                    function assignCardImage(cardCmsContent, cardCode) {
                        if (cardCmsContent && cardCode) {
                            var paymentMethodImageDict = arrayUtilService.toDictionary(cardCmsContent, function (u) { return u.Label[0].toUpperCase(); });
                            $scope.imageSrc = cmsUtilService.generateFileSrc(paymentMethodImageDict[cardCode].Image);
                        }
                    }
                }
            };
        }]);
}());
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        var BillingInfoDirective = /** @class */ (function () {
            //CreditCardType is convereted to enum in Angular
            function BillingInfoDirective(creditCardTypes, billingInfoUtilitiesService) {
                var _this = this;
                this.creditCardTypes = creditCardTypes;
                this.billingInfoUtilitiesService = billingInfoUtilitiesService;
                this.transclude = true;
                this.restrict = "E";
                this.templateUrl = "/app/directives/billingInfoPartial.html";
                this.scope = {
                    billingInfo: "=data",
                    onEdit: "&",
                    addSecondaryPayment: "&",
                    billingtype: "=?",
                    hideEdit: "=?",
                    intitle: "=?"
                };
                this.link = function ($scope, elem, attrs) {
                    $scope.showEdit = !!attrs.onEdit;
                    $scope.hideAddress = "hideAddress" in attrs;
                    $scope.showAddSecondaryPayment = "addSecondaryPayment" in attrs;
                    $scope.showNameOnCard = "showNameOnCard" in attrs;
                    $scope.showAccountNumber = "showAccountNumber" in attrs;
                    $scope.billingtypeAvailable = !!attrs.billingtype;
                    if (!$scope.intitle) {
                        $scope.intitle = "Billing Information";
                    }
                    var cardCodeToName = function (code) {
                        switch (code) {
                            case "V":
                                return _this.creditCardTypes.visa;
                            case "M":
                                return _this.creditCardTypes.mastercard;
                            case "D":
                                return _this.creditCardTypes.discover;
                            case "A":
                                return _this.creditCardTypes.amex;
                        }
                    };
                    var transHeaders = angular.element("#accountSetupHeaderTransclude > :header").first();
                    if (transHeaders.length > 0) { // They included a header tag
                        $scope.transcludeIncluded = true;
                    }
                    else {
                        $scope.transcludeIncluded = false;
                    }
                    if ($scope.billingtypeAvailable && $scope.billingtype === "EFT") {
                        $scope.bankDetails = $scope.billingInfo.eft;
                        $scope.billingtypeDisplay = "Bank Account";
                    }
                    else if ($scope.billingtypeAvailable && $scope.billingtype === "CREDIT") {
                        $scope.creditCard = $scope.billingInfo.cards[0] === null ? {} : $scope.billingInfo.cards[0];
                        $scope.secondaryCreditCard = $scope.billingInfo.cards[1] === null ? {} : $scope.billingInfo.cards[1];
                        $scope.cardType = cardCodeToName($scope.creditCard.cardCode);
                        $scope.billingtypeDisplay = "Credit Card";
                        $scope.creditCard.international = _this.billingInfoUtilitiesService.isInternationalAddress($scope.creditCard);
                    }
                    var unwatch = $scope.$watch("billingInfo", function () {
                        if ($scope.billingInfo && $scope.billingInfo.billingType === HCTRA.Constant.PaymentType.EFT && $scope.billingInfo.eft && $scope.billingInfo.eft.accountNumber && !$scope.billingtypeAvailable) {
                            $scope.bankDetails = {};
                            $scope.bankDetails = $scope.billingInfo.eft;
                            $scope.bankDetails.accountType = $scope.bankDetails.accountType ? "Business" : "Personal";
                            $scope.billingtypeDisplay = "Bank Account";
                            $scope.billingtype = $scope.billingInfo.billingTypeDisplay;
                            unwatch();
                        }
                        if ($scope.billingInfo && $scope.billingInfo.billingType === HCTRA.Constant.PaymentType.CREDIT && $scope.billingInfo.cards && $scope.billingInfo.cards[0] && $scope.billingInfo.cards[0].cardNbr && !$scope.billingtypeAvailable) {
                            $scope.creditCard = $scope.billingInfo.cards[0] === null ? {} : $scope.billingInfo.cards[0];
                            $scope.secondaryCreditCard = $scope.billingInfo.cards[1] === null ? {} : $scope.billingInfo.cards[1];
                            // Hide Add secondary link if the only card returned is non-primary
                            // This directive isn't currently (6/2/17) used anywhere where the secondary credit card would be added so no need for this change yet
                            //if ($scope.billingInfo.cards.length === 1 && !$scope.billingInfo.cards[0].primary) {
                            //    $scope.showAddSecondaryPayment = false;
                            //}
                            $scope.cardType = cardCodeToName($scope.creditCard.cardCode);
                            if ($scope.secondaryCreditCard)
                                $scope.secondaryCardType = cardCodeToName($scope.secondaryCreditCard.cardCode);
                            $scope.billingtype = $scope.billingInfo.billingTypeDisplay;
                            $scope.billingtypeDisplay = "Credit Card";
                            $scope.creditCard.international = _this.billingInfoUtilitiesService.isInternationalAddress($scope.creditCard);
                            unwatch();
                        }
                    });
                };
            }
            BillingInfoDirective.factory = function () {
                var directive = function (creditCardTypes, billingInfoUtilitiesService) { return new BillingInfoDirective(creditCardTypes, billingInfoUtilitiesService); };
                directive.$inject = ["creditCardTypes",
                    "billingInfoUtilitiesService"];
                return directive;
            };
            return BillingInfoDirective;
        }());
        Directive.BillingInfoDirective = BillingInfoDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").directive("billingInfo", HCTRA.Directive.BillingInfoDirective.factory());
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("borderBottomButtons", [
        function () {
            return {
                transclude: true,
                restrict: "E",
                templateUrl: "/app/directives/borderBottomButtonsTemplate.html",
                scope: {
                    previousText: '@',
                    onContinueSave: '&',
                    onCancel: '&',
                    onPrevious: '&',
                    cancelText: '@',
                    isDisabled: '=',
                    excludeGlobalDisable: '=',
                    formComplete: '=?',
                    form: '=' // pass in the form if the directive is outside the form tag
                },
                link: function ($scope, elem, attrs) {
                    $scope.hideContinueSave = 'hideContinueSave' in attrs;
                    $scope.preserveWorkItem = 'preserveWorkItem' in attrs;
                    $scope.showCancel = 'showCancel' in attrs;
                    $scope.showPrevious = 'showPrevious' in attrs;
                    //this attr can be used to determine of user is at an exit point of the current 'wizard'
                    if (angular.isDefined(attrs['formComplete']) && attrs['formComplete'] === '') {
                        $scope.formComplete = true;
                    }
                    else if (angular.isUndefined(attrs['formComplete'])) {
                        $scope.formComplete = false;
                    }
                    if (angular.isDefined(attrs['storefrontOnly']) && attrs['storefrontOnly'] === '') {
                        $scope.storefrontOnly = true;
                    }
                    if (!('cancelText' in attrs) || angular.isUndefined(attrs.cancelText)) {
                        $scope.cancelText = 'Cancel';
                    }
                    $scope.continueSaveInvoked = function () {
                        var returnValue = $scope.onContinueSave(); //TODO: needto redirect for suspended accounts
                        $scope.setSubmitted();
                        if ($scope.onClick)
                            $scope.onClick();
                        return returnValue;
                    };
                    // sets submitted property for validation purposes
                    $scope.setSubmitted = function () {
                        if ($scope.form) {
                            $scope.form.$setSubmitted();
                        }
                    };
                    //$scope.onClick = function () {
                    //    $scope.permanentDisable = true;
                    //};
                    // Extracts the transcluded button text
                    // TODO: Need to fix commented code for /NewAccount/AddEZTAG
                    //$transclude(function (buttonText) {
                    //    if (buttonText.text().trim().length > 0) {
                    //        $scope.buttonText = buttonText.text();
                    //    }
                    //});
                }
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("capitalizeAll", ['$parse',
        function ($parse) {
            return {
                restrict: 'A',
                require: "ngModel",
                link: function (scope, element, attrs, ctrl) {
                    var capitalizeAll = function (inputValue) {
                        if (angular.isUndefined(inputValue)) {
                            inputValue = '';
                        }
                        var capitalized = inputValue.toUpperCase();
                        if (capitalized !== inputValue) {
                            ctrl.$setViewValue(capitalized);
                            ctrl.$render();
                        }
                        return capitalized;
                    };
                    ctrl.$parsers.push(capitalizeAll);
                    capitalizeAll($parse(attrs.ngModel)(scope));
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("checkbox", ['validationService',
        function (validationService) {
            return {
                transclude: true,
                restrict: "E",
                templateUrl: "/app/directives/checkboxTemplate.html",
                scope: {
                    checkboxIsTruthy: '=',
                    parentForm: '=',
                    errorMessage: '='
                },
                link: function ($scope) {
                    $scope.validation = validationService($scope.parentForm);
                }
            };
        }]);
}());
(function () {
    'use strict';
    var compareTo = function () {
        return {
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function (scope, element, attributes, ngModel) {
                ngModel.$validators.compareTo = function (modelValue) {
                    if (isFalsy(modelValue) && isFalsy(scope.otherModelValue))
                        return true;
                    if (modelValue && scope.otherModelValue && attributes && ("caseInsensitive" in attributes))
                        return ((modelValue.toLowerCase() == scope.otherModelValue.toLowerCase()));
                    else
                        return ((modelValue == scope.otherModelValue));
                };
                scope.$watch('otherModelValue', function () {
                    ngModel.$validate();
                });
                //scope.$watch('modelValue', function () {
                //    ngModel.$validate();
                //});
            }
        };
        function isFalsy(val) { return !val; }
    };
    angular.module('HCTRAModule').directive("compareTo", compareTo);
})();
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('compileTemplate', ["$compile", "$parse",
        function ($compile, $parse) {
            return {
                link: function (scope, element, attr) {
                    var parsed = $parse(attr.ngBindHtml);
                    function getStringValue() { return (parsed(scope) || '').toString(); }
                    //Recompile if the template changes
                    scope.$watch(getStringValue, function () {
                        $compile(element, null, -9999)(scope); //The -9999 makes it skip directives so that we do not recompile ourselves
                    });
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("convertToNumber", function () {
        return {
            restrict: "A",
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function (val) {
                    return val && !isNaN(parseInt(val)) ? parseInt(val) : "";
                });
                ngModel.$formatters.push(function (val) {
                    return (val || val === 0) && !isNaN(parseInt(val)) ? "" + val : "";
                });
            }
        };
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("currentPassword", ['validationService',
        function (validationService) {
            return {
                restrict: "E",
                templateUrl: "/app/directives/currentPasswordTemplate.html",
                scope: {
                    password: '=',
                    confirmPassword: '=',
                    currentPassword: '=',
                    showCurrentPassword: '=',
                    parentForm: '=',
                    tabOrderingIndex: '='
                },
                link: function ($scope) {
                    $scope.validation = validationService($scope.parentForm);
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("currentPasswordIsolated", ['validationService',
        function (validationService) {
            return {
                restrict: "E",
                templateUrl: "/app/directives/currentPasswordIsolatedTemplate.html",
                scope: {
                    password: '=',
                    confirmPassword: '=',
                    currentPassword: '=',
                    showCurrentPassword: '=',
                    parentForm: '=',
                    tabOrderingIndex: '='
                },
                link: function ($scope) {
                    $scope.validation = validationService($scope.parentForm);
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("hctraDateRangeMax", ['environmentConfig', 'momentService',
        function (environmentConfig, momentService) {
            return {
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    var dateToModelName = attributes.hctraDateRangeMax;
                    scope.$watch(dateToModelName, function () {
                        ngModel.$validate();
                    });
                    ngModel.$validators.hctraDateRangeMax = function (modelValue) {
                        var dateToFromModel = scope.$eval(dateToModelName);
                        //return valid for invalid dates to avoid calling toISOString() on a string.
                        //Valid Date validator will catch it later on so it's ok to set to true.
                        if (!dateToFromModel || !angular.isDate(dateToFromModel))
                            return true;
                        var dateToISOString = dateToFromModel.toISOString().replace(/[\\"]/g, "");
                        var dateFrom = momentService.moment(modelValue);
                        var dateTo = momentService.moment(dateToISOString);
                        var diffDays = dateTo.diff(dateFrom, 'days');
                        return diffDays <= environmentConfig.accountActivityMaxDaysInSearch;
                    };
                }
            };
        }]);
})();
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        var DesktopUiDirective = /** @class */ (function () {
            function DesktopUiDirective(angularEnvironment, $window, $timeout, $transitions) {
                var _this = this;
                this.angularEnvironment = angularEnvironment;
                this.$window = $window;
                this.$timeout = $timeout;
                this.$transitions = $transitions;
                this.legacyMenuBreakpoint = 768;
                this.legacyMobileHeaderHeight = 54;
                this.eventThrottleDelay = 250;
                this.restrict = 'AE';
                this.scope = false;
                this.link = function (scope, element, attrs) {
                    var forceFullscreen = angular.isDefined(attrs.forceFullscreen);
                    if (forceFullscreen) {
                        angular.element(_this.$window).resize(function () { return _this.resize(element); });
                        _this.resize(element);
                    }
                    var unregisterStateChangeSuccess = _this.$transitions.onSuccess({}, function (transition) {
                        var currentState = transition.to();
                        _this.modifyStateForRefresh(currentState);
                    });
                    _this.modifySiteForRefresh();
                    scope.$on('$destroy', function () {
                        unregisterStateChangeSuccess();
                        angular.element(_this.$window).off('scroll', _this.mobileTopHeaderOnScroll);
                        angular.element(_this.$window).off('resize', _this.topHeaderOnResize);
                    });
                };
                this.modifySiteForRefresh = function () {
                    // These elements exist in this directive's template so they will already be on the DOM
                    var mainContainerElement = angular.element('#special-redesign');
                    if (_this.$window.outerWidth < _this.legacyMenuBreakpoint) {
                        mainContainerElement.css('margin-top', _this.legacyMobileHeaderHeight + "px");
                    }
                    _this.prevScrollPos = _this.$window.pageYOffset;
                    angular.element(_this.$window).on('scroll', _this.throttle(_this.mobileTopHeaderOnScroll, _this.eventThrottleDelay));
                    angular.element(_this.$window).on('resize', _this.throttle(_this.topHeaderOnResize, _this.eventThrottleDelay));
                };
                this.modifyStateForRefresh = function (state) {
                    // Refresh Hybrid view
                    var bodyElement = angular.element('body');
                    var topMenuContainerElement = angular.element('#top-menu-container');
                    var footerContentContainerElement = angular.element('#footer-content-container > div');
                    var desktopUiViewRootElement = angular.element('#desktopUiViewRoot');
                    var footerCopyrightElement = angular.element('[device-type=\'desktop\'] .footerCopyright div p');
                    if (state.settings && state.settings.isHybrid) {
                        bodyElement.addClass('refresh-hybrid-background');
                        topMenuContainerElement.css('background-color', '#ffffff');
                        footerContentContainerElement.addClass('refresh-hybrid-container');
                        footerContentContainerElement.css('padding-bottom', '4px');
                        desktopUiViewRootElement.addClass('refresh-hybrid-container');
                        footerCopyrightElement.css('color', '#ffffff');
                    }
                    else {
                        bodyElement.removeClass('refresh-hybrid-background');
                        topMenuContainerElement.css('background-color', '');
                        footerContentContainerElement.removeClass('refresh-hybrid-container');
                        footerContentContainerElement.css('padding-bottom', '');
                        desktopUiViewRootElement.removeClass('refresh-hybrid-container');
                        footerCopyrightElement.css('color', '');
                    }
                    bodyElement.css('margin-bottom', '0px');
                    desktopUiViewRootElement.css('margin-top', '0px');
                    desktopUiViewRootElement.css('background-color', '#ffffff');
                    var storefrontFullSite = angular.element('.storefrontFullSite');
                    if (storefrontFullSite) {
                        storefrontFullSite.css('padding-bottom', '0px');
                        storefrontFullSite.css('background-color', state.settings && state.settings.isHybrid ? '' : '#ffffff');
                    }
                    var exitButton = angular.element('.storefrontSmallButton.exit-button');
                    if (exitButton) {
                        exitButton.css('border', 'none');
                        exitButton.css('float', 'unset');
                        exitButton.css('margin-left', 'unset');
                        //@purple-heart-purple
                        exitButton.attr('style', exitButton.attr('style') + ';background-color: #611eb8 !important;');
                    }
                };
                this.mobileTopHeaderOnScroll = function () {
                    var mobileHeaderElement = angular.element('#hctra-header.header');
                    var hiddenClassName = 'header--hidden';
                    var currentScrollPos = _this.$window.pageYOffset;
                    var scrollDiff = _this.prevScrollPos - currentScrollPos;
                    if (currentScrollPos <= 0) {
                        // scrolled to the very top; element sticks to the top
                        mobileHeaderElement.removeClass(hiddenClassName);
                    }
                    else if (scrollDiff > 0 && mobileHeaderElement.hasClass(hiddenClassName)) {
                        // scrolled up; element slides in
                        mobileHeaderElement.removeClass(hiddenClassName);
                    }
                    else if (scrollDiff < 0) {
                        // scrolled down; element slides out
                        mobileHeaderElement.addClass(hiddenClassName);
                    }
                    _this.prevScrollPos = currentScrollPos;
                };
                this.topHeaderOnResize = function () {
                    var currentViewWidth = _this.$window.outerWidth;
                    // if we shrink the window, header must be displayed
                    if (currentViewWidth < _this.legacyMenuBreakpoint) {
                        angular.element('#hctra-header').removeClass('header--hidden');
                        angular.element('#special-redesign').css('margin-top', _this.legacyMobileHeaderHeight + "px");
                    }
                    // if we grow the window, we want to drop any margin-top that might've been added during scrolling in mobile window
                    if (currentViewWidth >= _this.legacyMenuBreakpoint) {
                        angular.element('#special-redesign').css('margin-top', '0');
                    }
                };
                this.resize = function (element) {
                    var win = angular.element(_this.$window);
                    element.outerHeight(win.height());
                    element.outerWidth(win.width());
                };
                // TODO: Replace with lodash throttle once this directive is migrated to Angular
                this.throttle = function (fn, delay) {
                    var last;
                    var timerPromise;
                    return function () {
                        var now = +new Date();
                        if (last && now < last + delay) {
                            _this.$timeout.cancel(timerPromise);
                            timerPromise = _this.$timeout(function () {
                                last = now;
                                fn();
                            }, delay);
                        }
                        else {
                            last = now;
                            fn();
                        }
                    };
                };
                this.templateUrl = "/app/directives/desktopUi/DesktopUiTemplateAlpha.html";
            }
            DesktopUiDirective.factory = function () {
                var directive = function (angularEnvironment, $window, $timeout, $transitions) {
                    return new DesktopUiDirective(angularEnvironment, $window, $timeout, $transitions);
                };
                directive.$inject = ['angularEnvironment', '$window', '$timeout', '$transitions'];
                return directive;
            };
            return DesktopUiDirective;
        }());
        Directive.DesktopUiDirective = DesktopUiDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('desktopUi', HCTRA.Directive.DesktopUiDirective.factory());
})();
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("desktopViewMessage", ['toggleFullWebsiteService',
        function (toggleFullWebsiteService) {
            return {
                restrict: 'E',
                templateUrl: "/app/directives/desktopViewMessageTemplate.html",
                link: function (scope) {
                    scope.onMobileClick = toggleFullWebsiteService.onMobileClick;
                }
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("donutChart", ['operatingSystemSnifferService',
        function (operatingSystemSnifferService) {
            var width, //width of box the chart is contained in.
            height, //height for radius
            svgHeight, //height of box the chart is contained in.
            translateHeight, //height used to position chart in box
            radius, innerRadius, outerRadius;
            // Label lines and label positioning assistant
            var pieChartRotation = 180, //Rotate chart so 0 is at the bottom
            pastOuterRadius = 10; //How far the line extends from the chart to the label
            // Graph Label Positoins
            var LABEL_11_TO_1 = 1, // Label is at the 11, 12 or 1 o'clock position
            LABEL_10_OR_2 = 2, // Label is in the 10 or 2 o'clock position
            LABEL_3_TO_9 = 3; // All labels are in the 3,4,5,6,7,8, or 9 o'clock 
            // Text Colors
            var innerArchBorderColor = "gray", outerArchBorderColor = "gray", currentLabel = "current", monthlyLabel = "monthly", minimum = "minimum", rebill = "rebill", bufferLabel = "buffer", startingpoint = "startingpoint", pointerLineColor = "#989898", currentBalanceRed = 0, minimumBalanceYellow = 1, currentBalanceGreen = 2, rebillWhite = 3, avgSpendGrey = 4;
            // Text Sizes
            var defaultAmountTextLength = 6, defaultAmountTextSize = 20, defaultAmountTextSizeForDesktop = 30, defaultAmountTextLengthForDesktop = 7, defaultLabelTextSize = 10, defaultLabelTextSizeForDesktop = 15, defaultCircularLabelSize = "12", defaultCircularLabelSizeForDesktop = "15";
            return {
                restrict: "E",
                replace: false,
                template: "<div class='chartBilling'></div>",
                scope: {
                    data: '='
                },
                link: function ($scope) {
                    $scope.isMobile = !operatingSystemSnifferService.isDesktopOs();
                    var setGraphParameters = function (data, isMobile) {
                        var amountObj = getAmountValues(data);
                        var graphLabelPosition = getGraphLabelPosition(amountObj.totalAmount, amountObj.minimumTotal, amountObj.rebillTotal);
                        if (isMobile) {
                            setMobileParameters(graphLabelPosition);
                        }
                        else {
                            setDesktopParameters(graphLabelPosition);
                        }
                    };
                    var setMobileParameters = function (graphLabelPosition) {
                        width = 295; //width of box the chart is contained in.
                        height = 375; //height for radius
                        radius = Math.min(width, height) / 2;
                        innerRadius = radius - 95;
                        outerRadius = radius - 65;
                        if (graphLabelPosition === LABEL_11_TO_1) {
                            svgHeight = 248;
                            translateHeight = 235;
                        }
                        else if (graphLabelPosition === LABEL_10_OR_2) {
                            svgHeight = 232;
                            translateHeight = 199;
                        }
                        else {
                            svgHeight = 275;
                            translateHeight = 280;
                        }
                    };
                    var setDesktopParameters = function (graphLabelPosition) {
                        width = 370; //width of box the chart is contained in.
                        height = 375; //height for radius
                        radius = Math.min(width, height) / 2;
                        innerRadius = radius - 110;
                        outerRadius = radius - 65;
                        if (graphLabelPosition === LABEL_11_TO_1) {
                            svgHeight = 375;
                            translateHeight = 390; // svgHeight + 5
                        }
                        else if (graphLabelPosition === LABEL_10_OR_2) {
                            svgHeight = 348;
                            translateHeight = 335; // svgHeight - 13
                        }
                        else {
                            svgHeight = 332;
                            translateHeight = 299; // svgHeight - 33
                        }
                    };
                    var getAmountValues = function (data) {
                        var amountObj = {};
                        for (var index = 0; index < data.length; index++) {
                            if (data[index].amountType == rebill) {
                                amountObj.rebillTotal = data[index].amount;
                            }
                            if (data[index].amountType == minimum) {
                                amountObj.minimumTotal = data[index].amount;
                            }
                        }
                        amountObj.totalAmount = data[data.length - 2].amount;
                        return amountObj;
                    };
                    var getGraphLabelPosition = function (totalAmount, minimumTotal, rebillTotal) {
                        if ((minimumTotal >= (totalAmount * .45) && minimumTotal <= (totalAmount * .65)) ||
                            (rebillTotal >= (totalAmount * .45) && rebillTotal <= (totalAmount * .65))) {
                            return LABEL_11_TO_1;
                        }
                        else if ((rebillTotal > (totalAmount * 0.4) && rebillTotal < (totalAmount * 0.7)) ||
                            (minimumTotal > (totalAmount * 0.4) && minimumTotal < (totalAmount * 0.7))) {
                            return LABEL_10_OR_2;
                        }
                        else {
                            return LABEL_3_TO_9;
                        }
                    };
                    var runChart = function (data, centerLabel, noLabels, currentBelowMinumum) {
                        setGraphParameters(data, $scope.isMobile);
                        var innerArcBorder = d3.svg.arc()
                            .innerRadius(innerRadius - 1)
                            .outerRadius(innerRadius);
                        var outerArcBorder = d3.svg.arc()
                            .innerRadius(outerRadius)
                            .outerRadius(outerRadius + 1);
                        var arc = d3.svg.arc()
                            .outerRadius(outerRadius)
                            .innerRadius(innerRadius);
                        var pie = d3.layout.pie()
                            .sort(null)
                            .value(function (d) { return d.calculatedAmount; });
                        var svg = d3.select(".chartBilling").append("svg")
                            .attr("width", width)
                            .attr("height", svgHeight)
                            .append("g")
                            .attr("transform", "translate(" + width / 2 + "," + translateHeight / 2 + ")");
                        data2(data, centerLabel, noLabels);
                        function data2(data, centerLabel, noLabels) {
                            var piedata = pie(data);
                            var g = svg.selectAll(".arc")
                                .data(piedata)
                                .enter()
                                .append("g")
                                .attr("class", "arc");
                            // ToDo: If client decides to change chart outline, here is where it would change
                            g.append("path")
                                .attr("fill", innerArchBorderColor)
                                .attr("d", innerArcBorder);
                            g.append("path")
                                .attr("fill", outerArchBorderColor)
                                .attr("d", outerArcBorder);
                            g.append("path")
                                .attr("d", arc)
                                .attr("transform", "rotate(" + pieChartRotation + ")")
                                .style("fill", function (d) {
                                //console.log(d.data.color);
                                switch (d.data.color) {
                                    case (currentBalanceRed): return "#c13e3e";
                                    case (minimumBalanceYellow): return "#faf4a3";
                                    case (currentBalanceGreen): return "#92cb7a";
                                    case (rebillWhite): return "#ffffff";
                                    case (avgSpendGrey): return "#e5e5e5";
                                    default: //console.log("Should not have reached here."); return "#ff69b4";
                                }
                            });
                            //console.log(!noLabels);
                            if (!noLabels) {
                                g.append("text")
                                    .attr("transform", function (d) {
                                    var a = (d.endAngle + 3.14159265) - Math.PI / 2;
                                    //console.log(a);
                                    var v = pointdot(a, outerRadius + pastOuterRadius);
                                    var degrees = d.endAngle * (180 / Math.PI) + pieChartRotation;
                                    var rotation = 0;
                                    //var startpoint = 0;
                                    if (degrees > 360) {
                                        rotation = degrees - 90;
                                    }
                                    else if (degrees >= 180) {
                                        rotation = degrees + 90;
                                    }
                                    else {
                                        rotation = degrees - 90;
                                    }
                                    //if (degrees > 180) {
                                    //    startpoint = rotation;
                                    //} else {
                                    //    startpoint = -rotation;
                                    //}
                                    var g = "translate(" + v.x + "," + v.y + ") , rotate(" + rotation + ")";
                                    //console.log(g);
                                    return g;
                                })
                                    .style("text-anchor", function (d) {
                                    var a = d.endAngle * (180 / Math.PI) + pieChartRotation;
                                    var l;
                                    if (a > 360) {
                                        l = "start";
                                    }
                                    else if (a >= 180) {
                                        l = "end";
                                    }
                                    else {
                                        l = "start";
                                    }
                                    return l;
                                })
                                    .text(function (d) {
                                    return d.data.label;
                                });
                                g.selectAll("text").attr("fill", "#666666");
                                g.selectAll("text").style("fill", "#666666");
                                g.selectAll("text").style("font-family", "'Avenir LT Std 45 Book Regular'");
                                if ($scope.isMobile) {
                                    g.selectAll("text").style("font-size", defaultCircularLabelSize + "px");
                                }
                                else {
                                    g.selectAll("text").style("font-size", defaultCircularLabelSizeForDesktop + "px");
                                }
                                var pointers = svg.append("defs")
                                    .append("marker")
                                    .attr("id", "circ")
                                    .attr("markerWidth", 6)
                                    .attr("markerHeight", 6)
                                    .attr("refX", 3)
                                    .attr("refY", 3)
                                    .append("circle")
                                    .attr("cx", 3)
                                    .attr("cy", 3)
                                    .attr("r", 3);
                                pointers = g.selectAll("path.pointer")
                                    .data(piedata);
                                //"stroke-dasharray"
                                pointers
                                    .enter()
                                    .append("path")
                                    .attr("class", "pointer")
                                    .style("stroke-dasharray", function (d) {
                                    if (d.data.amountType == startingpoint) {
                                        // making starting $0.00 a solid line
                                        return ("100, 100");
                                    }
                                    else {
                                        // making all other labels dashed
                                        return ("8, 8");
                                    }
                                })
                                    .style("fill", "none")
                                    .style("stroke", pointerLineColor)
                                    .attr("marker-end", "url(#circ)")
                                    .attr("d", function (d) {
                                    if (d.data.amountType !== currentLabel && d.data.amountType !== monthlyLabel && d.data.amountType !== bufferLabel) {
                                        var a = (d.endAngle + 3.14159265) - Math.PI / 2;
                                        var outerD = pointdot(a, outerRadius + pastOuterRadius);
                                        var innerD = pointdot(a, innerRadius);
                                        var s = "M" + innerD.x + "," + innerD.y + "L" + innerD.x + "," + innerD.y + " " + outerD.x + "," + outerD.y;
                                        //console.log(s);
                                        return s;
                                    }
                                    else {
                                        return "";
                                    }
                                });
                            }
                            var legend = svg.selectAll('.legend')
                                .data(centerLabel)
                                .enter()
                                .append('g')
                                .attr('class', function (d, i) {
                                //console.log(d);
                                var className;
                                if (i === 0) {
                                    // making center label containing the user's current balance adhere to the rules contained in Site.css
                                    className = currentBelowMinumum ? 'negative legendAmount' : 'legendAmount'; //for css coloring
                                }
                                else {
                                    // making center label containing the "current balance" text adhere to the rules contained in Site.css
                                    className = 'legendLabel'; //for css coloring
                                }
                                return className;
                            })
                                .attr('transform', function (d, i) {
                                //console.log(d);
                                //console.log(i);
                                var height = 20;
                                var offset = height * 1;
                                var vert = i * offset;
                                return 'translate(' + 0 + ',' + vert + ')';
                            })
                                // allowing for dynamic text adjustment for the current balance label
                                .style('font-size', function (d, i) {
                                var standardSize;
                                var standardLength;
                                if ($scope.isMobile) {
                                    standardSize = defaultAmountTextSize;
                                    standardLength = defaultAmountTextLength;
                                }
                                else {
                                    standardSize = defaultAmountTextSizeForDesktop;
                                    standardLength = defaultAmountTextLengthForDesktop;
                                }
                                if (i == 0) {
                                    if (d.length) {
                                        var adjustmentLength = d.length - standardLength;
                                        var adjustmentSize = standardSize;
                                        while (adjustmentLength != 0) {
                                            if (adjustmentLength > 0) {
                                                adjustmentLength--;
                                                adjustmentSize--;
                                            }
                                            else {
                                                adjustmentLength++;
                                                adjustmentSize++;
                                            }
                                        }
                                        return adjustmentSize + 'px';
                                    }
                                    else {
                                        return standardSize + 'px';
                                    }
                                }
                                else {
                                    if ($scope.isMobile) {
                                        return defaultLabelTextSize;
                                    }
                                    else {
                                        return defaultLabelTextSizeForDesktop;
                                    }
                                }
                            });
                            legend.append('text')
                                .attr('text-anchor', 'middle')
                                .text(function (centerLabel) {
                                return centerLabel;
                            });
                        }
                    };
                    var pointdot = function (angle, radius) {
                        var d = {};
                        d.x = radius * Math.cos(angle);
                        d.y = radius * Math.sin(angle);
                        //console.log(d);
                        return d;
                    };
                    $scope.$watch('data', function () {
                        if ($scope.data) {
                            d3.select(".chartBilling").select("svg").remove();
                            runChart($scope.data.chartData, $scope.data.centerLabel, $scope.data.noLabels, $scope.data.currentBelowMinumum);
                        }
                    }, true);
                }
            };
        }]);
}());
/* eslint-disable no-useless-escape */
angular.module('HCTRAModule').directive("emailValid", function () {
    return {
        restrict: 'A',
        require: "ngModel",
        link: function (scope, element, attributes, ngModel) {
            ngModel.$validators.emailValid = function (modelValue) {
                if (!modelValue) {
                    return true;
                }
                modelValue = modelValue.toString();
                var match = modelValue.match(/^(([^<>()[\]\\.,;:\s@&\*\"]+(\.[^<>()[\]\\.,;:\s@&\*\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                if (!match) {
                    return false;
                }
                else {
                    return true;
                }
            };
        }
    };
});
angular.module('HCTRAModule').directive("enterKey", function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('keypress', function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.enterKey);
                    });
                    event.preventDefault();
                }
            });
            scope.$on('$destroy', function () {
                element.unbind('keypress');
            });
        }
    };
});
var HCTRA;
(function (HCTRA) {
    var Constant;
    (function (Constant) {
        "use strict";
        var EntryDropdownConstants = /** @class */ (function () {
            function EntryDropdownConstants() {
            }
            Object.defineProperty(EntryDropdownConstants, "Default", {
                get: function () {
                    return {
                        entryDropdownItemIdPrefix: "#entryDropdownItem",
                        entryDropdownBoxId: "#inputDropdownBox",
                        preSubmitValidationErrorKey: "inputError",
                        postSubmitValidationErrorKey: "submissionError"
                    };
                },
                enumerable: true,
                configurable: true
            });
            return EntryDropdownConstants;
        }());
        Constant.EntryDropdownConstants = EntryDropdownConstants;
    })(Constant = HCTRA.Constant || (HCTRA.Constant = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").constant("entryDropdownConstants", HCTRA.Constant.EntryDropdownConstants.Default);
}());
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        var EzTagRequestedDirective = /** @class */ (function () {
            function EzTagRequestedDirective() {
                this.transclude = true;
                this.restrict = "E";
                this.templateUrl = "/app/directives/ezTagRequestedTemplate.html";
                this.scope = {
                    vehicleList: "=data",
                    onEdit: "&" //TODO: Optional Attribute
                };
                // for logic
                this.controller = EzTagRequestedDirectiveController;
                // for DOM manipulation
                this.link = function ($scope, elem, attrs) {
                    $scope.showEdit = !!attrs.onEdit;
                    $scope.hideClassCode = "hideClassCode" in attrs;
                };
            }
            EzTagRequestedDirective.factory = function () {
                var directive = function () { return new EzTagRequestedDirective(); };
                directive.$inject = [];
                return directive;
            };
            return EzTagRequestedDirective;
        }());
        Directive.EzTagRequestedDirective = EzTagRequestedDirective;
        var EzTagRequestedDirectiveController = /** @class */ (function () {
            function EzTagRequestedDirectiveController($scope, localDataRepo) {
                this.$scope = $scope;
                this.localDataRepo = localDataRepo;
                $scope.classIdToLabel = function (id) {
                    var label;
                    localDataRepo.getClasses().forEach(function (elem) {
                        if (elem && parseInt(elem.value, 10) === parseInt(id, 10)) {
                            label = elem.label;
                            return;
                        }
                    });
                    return label;
                };
                var unwatch = $scope.$watch("vehicleList", function (vehicleList) {
                    if (angular.isArray(vehicleList) && vehicleList.length > 0) {
                        vehicleList.forEach(function (elem) {
                            if (elem && elem.nickname === (elem.licState + "-" + elem.licPlate)) {
                                elem.nickname = null;
                            }
                        });
                        unwatch();
                    }
                });
            }
            EzTagRequestedDirectiveController.$inject = ["$scope", "localDataRepo"];
            return EzTagRequestedDirectiveController;
        }());
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").directive("ezTagRequested", HCTRA.Directive.EzTagRequestedDirective.factory());
})();
((function () {
    "use strict";
    angular.module("HCTRAModule").directive("filesUpload", [
        function () { return ({
            restrict: "E",
            templateUrl: "/app/directives/filesUploadTemplate.html",
            scope: {
                files: "=",
                validations: "=",
                form: "="
            },
            link: function ($scope) {
                var runningIdCount = 0;
                var idPrefix = "fileUploadIdentification";
                $scope.internalFiles = [];
                $scope.internalFiles.push(createNewInitialFileObj());
                $scope.updateFunc = function () {
                    if ($scope.validations.FileMaxUploads > $scope.internalFiles.length) {
                        addNewEntry();
                    }
                    assignCurrentFileSet();
                };
                $scope.processDelete = function (id) {
                    $scope.internalFiles = $scope.internalFiles.filter(function (file) {
                        return file.id !== id;
                    });
                    addNewEntry();
                    assignCurrentFileSet();
                };
                function assignCurrentFileSet() {
                    $scope.files = $scope.internalFiles.filter(function (file) {
                        return file.extension !== null;
                    });
                }
                function addNewEntry() {
                    var hasOpenEntry = false;
                    $scope.internalFiles.some(function (file) {
                        hasOpenEntry = file.extension === null;
                        return hasOpenEntry;
                    });
                    if (!hasOpenEntry) {
                        $scope.internalFiles.push(createNewInitialFileObj());
                    }
                }
                function createNewInitialFileObj() {
                    runningIdCount++;
                    var newFile = {
                        data: null,
                        extension: null,
                        id: idPrefix + runningIdCount
                    };
                    return newFile;
                }
            }
        }); }
    ]);
})());
((function () {
    "use strict";
    angular.module("HCTRAModule").directive("fileUpload", ["validationService",
        function (validationService) { return ({
            restrict: "E",
            templateUrl: "/app/directives/fileUploadTemplate.html",
            scope: {
                file: "=",
                validations: "=",
                form: "=",
                deleteFunc: "=?onDelete",
                shouldShowDelete: "=?",
                updateFunc: "&?onUpdate",
                id: "=?"
            },
            link: function ($scope) {
                var BYTES_PER_MEGABYTE = 1048576;
                var invalidKey = "AttachmentInvalid";
                $scope.showTypeValidationMessage = false;
                $scope.showSizeValidationMessage = false;
                $scope.showDeleteButton = false;
                if (!$scope.id)
                    $scope.id = "fileUploadIdentifier0";
                $scope.fileName = "";
                $scope.validation = validationService($scope.form);
                $scope.submitFile = function (file) {
                    if (!file) // this is needed because this function is triggered incorrectly after the first time a user hits upload and selects a file
                        return;
                    $scope.showDeleteButton = $scope.shouldShowDelete === true;
                    var indexOfExtension = file.name.lastIndexOf(".");
                    var extension = (indexOfExtension === -1 ? "" : file.name.substring(indexOfExtension)).toLowerCase();
                    $scope.fileName = file.name;
                    if (!isValid(file, extension))
                        return;
                    updateFile(file, extension);
                };
                function updateFile(file, extension) {
                    $scope.showTypeValidationMessage = false;
                    $scope.showSizeValidationMessage = false;
                    $scope.form[$scope.id].$setValidity(invalidKey, true);
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = function () {
                        $scope.$apply(function () {
                            $scope.file.data = reader.result;
                            $scope.file.extension = extension;
                            if ($scope.updateFunc)
                                $scope.updateFunc();
                        });
                    };
                }
                function isValid(file, extension) {
                    // FileUploadSize [megabytes] * BYTES_PER_MEGABYTE [bytes/megabytes]
                    var maxFileSizeInBytes = $scope.validations.FileUploadSize * BYTES_PER_MEGABYTE;
                    if ($scope.validations.FileExtensions.indexOf(extension) === -1) {
                        $scope.showSizeValidationMessage = false;
                        $scope.showTypeValidationMessage = true;
                        invalidateFile();
                        return false;
                    }
                    if (file.size > maxFileSizeInBytes) {
                        $scope.showTypeValidationMessage = false;
                        $scope.showSizeValidationMessage = true;
                        invalidateFile();
                        return false;
                    }
                    return true;
                }
                function invalidateFile() {
                    $scope.file.data = null;
                    $scope.file.extension = null;
                    $scope.form[$scope.id].$setValidity(invalidKey, false);
                }
                $scope.onDelete = function () {
                    $scope.form[$scope.id].$setValidity(invalidKey, true);
                    $scope.file.data = null;
                    $scope.file.extension = null;
                    $scope.deleteFunc($scope.id);
                };
            }
        }); }]);
})());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("firstFieldFocus", ['$timeout',
        function ($timeout) {
            return {
                restrict: "E",
                scope: {
                    remote: '='
                },
                link: function ($scope) {
                    $scope.remote.focusFirstField = function () {
                        $timeout(function () {
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
                        }, 300);
                    };
                }
            };
        }]);
}());
// (function () {
//     'use strict';
//     angular.module('HCTRAModule').directive("footerDesktopView", ['toggleFullWebsiteService', 'desktopAutoRedirect',
//         function (toggleFullWebsiteService, desktopAutoRedirect) {
//             return {
//                 restrict: 'E',
//                 templateUrl: "/app/directives/footerDesktopViewTemplate.html",
//                 link: function (scope) {
//                     scope.forceDesktopView = desktopAutoRedirect.isForcedDesktopView();
//                     scope.onMobileClick = toggleFullWebsiteService.onMobileClick;
//                     scope.onDesktopClick = toggleFullWebsiteService.onDesktopClick;
//                 }
//             };
//         }
//     ]);
// }());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('genericPagingControl', [
        function () {
            return {
                scope: {
                    config: "=",
                    showRecordCount: "=?",
                    invoiceCount: "=?",
                    suspendedFlow: "=?"
                },
                templateUrl: '/app/directives/genericPagingControlTemplate.html',
                controller: GenericPagingControlController,
                controllerAs: 'vm'
            };
        }
    ]);
    function GenericPagingControlController($scope, $attrs) {
        var vm = this;
        var DEFAULT_PAGE_NUMBER = 1;
        var lastVisiblePageNumber = DEFAULT_PAGE_NUMBER;
        vm.$onInit = function () {
            vm.hideSelector = angular.isDefined($attrs.hideSelector);
            vm.showItemCount = angular.isDefined($attrs.showItemCount);
            vm.itemCountLabel = $attrs.itemCountLabel;
            var unwatch = $scope.$watch('config', function () {
                if ($scope.config) {
                    vm.visiblePageNumber = DEFAULT_PAGE_NUMBER;
                    vm.pageSize = $scope.config.initPageSize;
                    vm.numberOfPages = calculateNumberOfPages($scope.config.totalItems, vm.pageSize); //Math.ceil($scope.config.totalItems / vm.pageSize);
                    vm.totalItems = $scope.config.totalItems;
                    vm.showRecordCount = $scope.showRecordCount;
                    vm.invoiceCount = $scope.invoiceCount;
                    vm.suspendedFlow = $scope.suspendedFlow;
                    unwatch();
                }
            });
            vm.onBackAll = function () {
                //vm.visiblePageNumber = 1;
                setVisiblePageNumber(1);
                if ($scope.config && $scope.config.onBackAll) {
                    $scope.config.onBackAll(vm.visiblePageNumber);
                }
            };
            vm.onBack = function () {
                if (vm.visiblePageNumber > 1) {
                    //vm.visiblePageNumber--;
                    setVisiblePageNumber(vm.visiblePageNumber - 1);
                }
                if ($scope.config && $scope.config.onBack) {
                    $scope.config.onBack(vm.visiblePageNumber);
                }
            };
            vm.onForward = function () {
                if (vm.visiblePageNumber < vm.numberOfPages) {
                    //vm.visiblePageNumber++;
                    setVisiblePageNumber(vm.visiblePageNumber + 1);
                }
                if ($scope.config && $scope.config.onForward) {
                    $scope.config.onForward(vm.visiblePageNumber);
                }
            };
            vm.onForwardAll = function () {
                //vm.visiblePageNumber = vm.numberOfPages;
                setVisiblePageNumber(vm.numberOfPages);
                if ($scope.config && $scope.config.onForwardAll) {
                    $scope.config.onForwardAll(vm.visiblePageNumber);
                }
            };
            vm.onPageSizeChange = function () {
                vm.numberOfPages = calculateNumberOfPages($scope.config.totalItems, vm.pageSize);
                if (vm.visiblePageNumber > vm.numberOfPages) {
                    setVisiblePageNumber(vm.numberOfPages);
                }
                if ($scope.config && $scope.config.onPageSizeChange) {
                    $scope.config.onPageSizeChange(vm.visiblePageNumber, vm.pageSize);
                }
            };
            vm.onPageNumberEntered = function () {
                if (Math.floor(vm.visiblePageNumber) === vm.visiblePageNumber) { // if integer
                    if (vm.visiblePageNumber < 1) { // out of bound: below
                        vm.visiblePageNumber = 1;
                    }
                    else if (vm.visiblePageNumber > vm.numberOfPages) { // out of bounds: above
                        vm.visiblePageNumber = vm.numberOfPages;
                    }
                    lastVisiblePageNumber = vm.visiblePageNumber; // set lastVisiblePageNumber to the appropriate bound
                }
                else {
                    vm.visiblePageNumber = lastVisiblePageNumber;
                }
                if ($scope.config && $scope.config.onPageNumberEntered) {
                    $scope.config.onPageNumberEntered(vm.visiblePageNumber);
                }
            };
            vm.lowerItemIndex = function () {
                return (vm.visiblePageNumber - 1) * vm.pageSize + 1;
            };
            vm.upperItemIndex = function () {
                return Math.min(vm.visiblePageNumber * vm.pageSize, vm.totalItems);
            };
            function setVisiblePageNumber(inNumber) {
                lastVisiblePageNumber = vm.visiblePageNumber;
                vm.visiblePageNumber = inNumber;
            }
            function calculateNumberOfPages(totalItems, pageSize) {
                return Math.ceil(totalItems / pageSize);
            }
        };
    }
    GenericPagingControlController.$inject = ['$scope', '$attrs'];
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("faqBrowseCategory", function () {
        return {
            restrict: "E",
            templateUrl: "/app/directives/helpAndSupport/faqBrowseCategoryTemplate.html",
            scope: {
                onSearch: '&',
                categories: '='
            },
            link: function (scope) {
                scope.onSearch = scope.onSearch();
            }
        };
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("faqSearchBox", function () {
        return {
            restrict: "E",
            templateUrl: "/app/directives/helpAndSupport/faqSearchBoxTemplate.html",
            scope: {
                onSearch: '&'
            },
            link: function (scope) {
                scope.onSearch = scope.onSearch();
            }
        };
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("faqSearch", [
        function () {
            return {
                restrict: "E",
                templateUrl: "/app/directives/helpAndSupport/faqSearchTemplate.html",
                scope: {
                    goToFaq: '&',
                    searchFaqKeyword: '&',
                    searchFaqCategory: '&',
                    categories: '='
                },
                link: function (scope, elem, attrs) {
                    scope.hideViewAll = angular.isUndefined(attrs.hideViewAll);
                }
            };
        }
    ]);
}());
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        var MostFaqDirective = /** @class */ (function () {
            function MostFaqDirective(routes, genericRepo, $location, linkLookupService) {
                var _this = this;
                this.routes = routes;
                this.genericRepo = genericRepo;
                this.$location = $location;
                this.linkLookupService = linkLookupService;
                this.restrict = "E";
                this.templateUrl = "/app/directives/helpAndSupport/mostFaqTemplate.html";
                this.scope = {};
                this.link = function ($scope) {
                    var requestTopFaq = {
                        itemId: _this.routes.faqTopFaqCms,
                        fields: "Query"
                    };
                    _this.genericRepo.dataFactory.getCmsPageById(requestTopFaq).then(function (res) {
                        var parsedRes = angular.fromJson(res.cmsResponse);
                        $scope.mostFaq = parsedRes.Query.Results.slice(0, 5);
                    });
                    $scope.searchMostFaq = function (article) {
                        if (angular.isObject(article)) {
                            _this.$location.url(_this.linkLookupService.articleLookupById(article.ItemID));
                        }
                    };
                };
            }
            MostFaqDirective.factory = function () {
                var directive = function (routes, genericRepo, $location, linkLookupService) { return new MostFaqDirective(routes, genericRepo, $location, linkLookupService); };
                directive.$inject = ["routes", "genericRepo", "$location", "linkLookupService"];
                return directive;
            };
            return MostFaqDirective;
        }());
        Directive.MostFaqDirective = MostFaqDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").directive("mostFaq", HCTRA.Directive.MostFaqDirective.factory());
}());
(function () {
    "use strict";
    angular.module("HCTRAModule").directive("homeCarousel", ["$interval",
        function ($interval) {
            return {
                restrict: "E",
                templateUrl: "/app/directives/home/homeCarouselTemplate.html",
                scope: {
                    slides: "=",
                    interval: "="
                },
                link: function ($scope) {
                    var circularList;
                    var updateSlider = function () {
                        $scope.activeSlide = circularList.peekCurrent();
                        $scope.rightSlide = circularList.peekRight();
                        $scope.leftSlide = circularList.peekLeft();
                    };
                    $scope.cancelRotate = function () {
                        $interval.cancel($scope.autoRotate);
                    };
                    $scope.$watch("slides", function () {
                        if ($scope.slides) {
                            if ($scope.interval > 0) {
                                $scope.autoRotate = $interval($scope.rightClick, $scope.interval);
                            }
                            circularList = new HCTRA.Datastructure.CircularList($scope.slides);
                            updateSlider();
                        }
                    });
                    $scope.leftClick = function () {
                        circularList.moveHeadLeft();
                        updateSlider();
                    };
                    $scope.rightClick = function () {
                        circularList.moveHeadRight();
                        updateSlider();
                    };
                    $scope.$on("$destroy", function () {
                        $scope.cancelRotate();
                    });
                }
            };
        }]);
}());
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        var HomeClosuresController = /** @class */ (function () {
            function HomeClosuresController($location, routes, cmsUtilService, AuthService, marketingImageService, rssService, $window, momentService, genericRepo, stringUtilsService, $rootScope, AUTH_EVENTS, APP_LIFECYCLE_EVENTS) {
                var _this = this;
                this.$location = $location;
                this.routes = routes;
                this.cmsUtilService = cmsUtilService;
                this.AuthService = AuthService;
                this.marketingImageService = marketingImageService;
                this.rssService = rssService;
                this.$window = $window;
                this.momentService = momentService;
                this.genericRepo = genericRepo;
                this.stringUtilsService = stringUtilsService;
                this.$rootScope = $rootScope;
                this.AUTH_EVENTS = AUTH_EVENTS;
                this.APP_LIFECYCLE_EVENTS = APP_LIFECYCLE_EVENTS;
                this.maxSegments = 10000; // 10000 is basically unlimited
                this.shownClosures = [];
                this.shownMarketingImages = [];
                this.destroyLogoutSuccessListener = this.$rootScope.$on(this.AUTH_EVENTS.logoutSuccess, function () {
                    _this.useImagesByLoggedInState();
                });
                this.destroySessionTimedOutListener = this.$rootScope.$on(this.AUTH_EVENTS.sessionTimedOut, function () {
                    _this.useImagesByLoggedInState();
                });
                this.destroySecurityIssueListener = this.$rootScope.$on(this.AUTH_EVENTS.securityIssue, function () {
                    _this.useImagesByLoggedInState();
                });
                this.destroySetNavBarLoginListener = this.$rootScope.$on(this.APP_LIFECYCLE_EVENTS.setNavBarLogin, function () {
                    _this.useImagesByLoggedInState();
                });
                this.destroyRestoredUserStateListener = this.$rootScope.$on(this.APP_LIFECYCLE_EVENTS.restoredUserState, function () {
                    _this.useImagesByLoggedInState();
                });
                this.$postLink = function () {
                    if (_this.closures) {
                        var c = _this.closures;
                        var segmentCount = 0;
                        for (var _i = 0, c_1 = c; _i < c_1.length; _i++) {
                            var x = c_1[_i];
                            var segmentAddValue = 1; // the text itself counts as a segment
                            x.image = _this.cmsUtilService.generateFileSrc(x.Image);
                            x.alt = _this.cmsUtilService.parseAltText(x.Image);
                            x.closureDates = _this.momentService.moment(x.StartDate, 'YYYYMMDD').format('MMMM DD, YYYY');
                            if (x.EndDate) {
                                x.closureDates = x.closureDates + " - " + _this.momentService.moment(x.EndDate, 'YYYYMMDD').format('MMMM DD, YYYY');
                            }
                            if (x.image) // images count as two other segments
                                segmentAddValue += 2;
                            if ((segmentCount + segmentAddValue) <= _this.maxSegments) { // Lane closures not overflowing
                                _this.shownClosures.push(x);
                                segmentCount += segmentAddValue;
                            }
                            else // No room for more closures
                                break;
                        }
                    }
                    if (_this.closures && _this.marketingImages) {
                        //initialize object
                        _this.imageObj = angular.copy(_this.marketingImageService.processImagesToObj(_this.marketingImages));
                        //check for Transtar
                        if (angular.isDefined(_this.closures) && _this.closures.length > 0 && _this.closures[0].Title === "Transtar Map") {
                            _this.imageObj.startIndex = 1;
                        }
                        //set max articles before no images
                        _this.imageObj.articles = _this.closures.length;
                        _this.imageObj.maxArticles = _this.imageObj.startIndex + 2;
                        _this.imageObj.maxSmall = 2;
                        //check login state
                    }
                    _this.useImagesByLoggedInState();
                    _this.updateClosureTitle();
                };
                this.goToClosureArticle = function (articleID) {
                    _this.$window.open(_this.routes.closures + "#" + articleID, "_blank");
                };
                this.goToUrl = function (imageURL) {
                    _this.$location.url(imageURL);
                };
                this.goToRssFeedClosures = function () {
                    _this.rssService.goToRssFeed(_this.rssService.rssMajorClosuresKey);
                };
                this.updateClosureTitle = function () {
                    _this.genericRepo.dataFactory.getCmsPageById({
                        ItemId: _this.routes.majorClosureSection
                    }).then(_this.parseClosureTitle);
                };
                this.parseClosureTitle = function (response) {
                    var parsedRes = angular.fromJson(response.cmsResponse);
                    _this.closureTitle = parsedRes.ShortDescription;
                    var paramObjs = _this.stringUtilsService.getParameterObject(parsedRes.Parameters);
                    if (paramObjs.isRSSshow === "true") {
                        _this.showRSSClosure = true;
                    }
                };
                this.useImagesByLoggedInState = function () {
                    _this.shownMarketingImages = [];
                    if (_this.AuthService.isAuthenticated()) {
                        _this.shownMarketingImages = _this.marketingImageService.setImages('logIn', _this.imageObj);
                    }
                    else {
                        _this.shownMarketingImages = _this.marketingImageService.setImages('logOut', _this.imageObj);
                    }
                };
                this.$onDestroy = function () {
                    _this.destroyLogoutSuccessListener();
                    _this.destroySessionTimedOutListener();
                    _this.destroySecurityIssueListener();
                    _this.destroySetNavBarLoginListener();
                    _this.destroyRestoredUserStateListener();
                };
            }
            HomeClosuresController.$inject = [
                '$location',
                'routes',
                'cmsUtilService',
                'AuthService',
                'marketingImageService',
                'rssService',
                "$window",
                'momentService',
                'genericRepo',
                'stringUtilsService',
                '$rootScope',
                'AUTH_EVENTS',
                'APP_LIFECYCLE_EVENTS'
            ];
            return HomeClosuresController;
        }());
        Controller.HomeClosuresController = HomeClosuresController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').component("homeClosures", {
        templateUrl: '/app/directives/home/homeClosuresTemplate.html',
        bindings: {
            closures: "=",
            marketingImages: "="
        },
        controller: HCTRA.Controller.HomeClosuresController
    });
})();
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("homeModule", ['$state', 'stateNames',
        function ($state, stateNames) {
            return {
                restrict: "E",
                templateUrl: "/app/directives/home/homeModuleTemplate.html",
                //templateUrl: "/SitecoreViewRequestInterceptor_homeModuleTemplate",
                scope: {
                    moduleObject: "=",
                    onModuleClick: '&'
                },
                link: function ($scope) {
                    $scope.$watch('moduleObject', function () {
                        if ($scope.moduleObject) {
                            if ($scope.moduleObject.LinkTitle && $scope.moduleObject.LinkTitle.toLowerCase().indexOf('login') > -1
                                && $scope.moduleObject.TitleURL && $scope.moduleObject.TitleURL.toLowerCase().indexOf('login') > -1) {
                                $scope.isLoginModule = true;
                                $scope.goToFirstTimeLogin = function ($event) {
                                    // Prevents the ng-click of parent module
                                    $event.stopPropagation();
                                    $state.go(stateNames.setupOnlineAccessIdentification);
                                };
                            }
                            // Must watch when user logs out and is on Home Page
                            //unwatch();
                        }
                    });
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("homeNews", ["$location", "routes", "cmsUtilService", "AuthService", "$rootScope", "AUTH_EVENTS", "APP_LIFECYCLE_EVENTS", "marketingImageService", "rssService", "$window",
        function ($location, routes, cmsUtilService, AuthService, $rootScope, AUTH_EVENTS, APP_LIFECYCLE_EVENTS, marketingImageService, rssService, $window) {
            return {
                restrict: "E",
                transclude: true,
                templateUrl: "/app/directives/home/homeNewsTemplate.html",
                scope: {
                    newsList: "=",
                    marketingImages: "="
                    //maxSegments: "="
                },
                link: function ($scope) {
                    $scope.shownNews = [];
                    $scope.shownMarketingImages = [];
                    var imageObj;
                    var maxSegments = 10000; // 10000 is basically unlimited
                    $scope.goToNewsArticle = function (articleID) {
                        $window.open(routes.newsFeed + "#" + articleID, "_blank");
                    };
                    $scope.goToUrl = function (imageURL) {
                        $location.url(imageURL);
                    };
                    $scope.goToRssFeedNews = function () {
                        rssService.goToRssFeed(rssService.rssHomeNewsKey);
                    };
                    var unwatch = $scope.$watchGroup(["newsList", "marketingImages"], function () {
                        if ($scope.newsList) {
                            $scope.shownNews = $scope.newsList.slice(0, maxSegments);
                            for (var i = 0; i < $scope.newsList.length; i++) {
                                $scope.newsList[i].imageSrc = cmsUtilService.generateFileSrc($scope.newsList[i].Image);
                            }
                        }
                        if ($scope.newsList && $scope.marketingImages) {
                            //initialize object
                            imageObj = angular.copy(marketingImageService.processImagesToObj($scope.marketingImages));
                            //set max articles before no images
                            imageObj.articles = $scope.newsList.length;
                            //check login state
                            useImagesByLoggedInState();
                            unwatch();
                        }
                    });
                    var useImagesByLoggedInState = function () {
                        if (AuthService.isAuthenticated()) {
                            $scope.shownMarketingImages = marketingImageService.setImages('logIn', imageObj);
                        }
                        else {
                            $scope.shownMarketingImages = marketingImageService.setImages('logOut', imageObj);
                        }
                    };
                    var destroyLogoutSuccessListener = $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
                        useImagesByLoggedInState();
                    });
                    var destroySessionTimedOutListener = $rootScope.$on(AUTH_EVENTS.sessionTimedOut, function () {
                        useImagesByLoggedInState();
                    });
                    var destroySecurityIssueListener = $rootScope.$on(AUTH_EVENTS.destroySecurityIssueListener, function () {
                        useImagesByLoggedInState();
                    });
                    var destroySetNavBarLoginListener = $rootScope.$on(APP_LIFECYCLE_EVENTS.setNavBarLogin, function () {
                        useImagesByLoggedInState();
                    });
                    var destroyRestoredUserStateListener = $rootScope.$on(APP_LIFECYCLE_EVENTS.restoredUserState, function () {
                        useImagesByLoggedInState();
                    });
                    $scope.$on("$destroy", function () {
                        destroyLogoutSuccessListener();
                        destroySessionTimedOutListener();
                        destroySecurityIssueListener();
                        destroySetNavBarLoginListener();
                        destroyRestoredUserStateListener();
                    });
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("homeQuickLinks", [
        function () {
            return {
                restrict: "E",
                templateUrl: "SitecoreViewRequestInterceptor_homeQuickLinksTemplate",
                scope: {
                    links: "="
                }
            };
        }
    ]);
}());
var HCTRA;
(function (HCTRA) {
    var Constant;
    (function (Constant) {
        "use strict";
        var InputDropdownConstants = /** @class */ (function () {
            function InputDropdownConstants() {
            }
            Object.defineProperty(InputDropdownConstants, "Default", {
                get: function () {
                    return {
                        inputDropdownItemIdPrefix: "#inputDropdownItem",
                        inputDropdownBoxId: "#inputDropdownBox",
                        preSubmitValidationErrorKey: "inputError",
                        postSubmitValidationErrorKey: "submissionError"
                    };
                },
                enumerable: true,
                configurable: true
            });
            return InputDropdownConstants;
        }());
        Constant.InputDropdownConstants = InputDropdownConstants;
    })(Constant = HCTRA.Constant || (HCTRA.Constant = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").constant("inputDropdownConstants", HCTRA.Constant.InputDropdownConstants.Default);
}());
((function () {
    "use strict";
    angular.module("HCTRAModule").directive("inputDropdown", ['validationService', 'inputDropdownHelper', 'inputDropdownConstants',
        function (validationService, inputDropdownHelper, inputDropdownConstants) { return ({
            restrict: "E",
            templateUrl: "/app/directives/inputDropdown/inputDropdownTemplate.html",
            scope: {
                requiredBindings: "=",
                optionalBindings: "="
            },
            link: function ($scope) {
                // local variables
                var upKeyFocus = {
                    boundaryType: "top",
                    comparisonSwitch: 1,
                    scrollType: true
                };
                var downKeyFocus = {
                    boundaryType: "bottom",
                    comparisonSwitch: -1,
                    scrollType: false
                };
                // Scope variable assignments
                $scope.validationService = validationService;
                $scope.isFocused = false;
                $scope.inputDropdownItemIdPrefix = inputDropdownConstants.inputDropdownItemIdPrefix.substring(1);
                $scope.inputDropdownBoxId = inputDropdownConstants.inputDropdownBoxId.substring(1);
                if ($scope.optionalBindings) {
                    $scope.placeholder = $scope.optionalBindings.placeholder ? $scope.optionalBindings.placeholder : null;
                    $scope.tabIndex = $scope.optionalBindings.tabIndex ? $scope.optionalBindings.tabIndex : null;
                    $scope.title = $scope.optionalBindings.title ? $scope.optionalBindings.title : null;
                }
                $scope.dropdownVisible = false;
                $scope.activeItemIndex = 0;
                $scope.userInput = "";
                $scope.keyActions = {
                    upAction: function () {
                        var prevIndex = $scope.activeItemIndex - 1;
                        if (prevIndex >= 0) {
                            inputDropdownHelper.ensureElementFocus(prevIndex, upKeyFocus);
                            $scope.setActive(prevIndex);
                        }
                    },
                    downAction: function () {
                        var nextIndex = $scope.activeItemIndex + 1;
                        if (nextIndex < $scope.filteredItems.length) {
                            inputDropdownHelper.ensureElementFocus(nextIndex, downKeyFocus);
                            $scope.setActive(nextIndex);
                        }
                    },
                    enterAction: function (event) {
                        if (!$scope.dropdownVisible) {
                            return;
                        }
                        event.preventDefault();
                        if ($scope.activeItemIndex >= 0 && $scope.activeItemIndex < $scope.filteredItems.length) {
                            $scope.selectItem($scope.filteredItems[$scope.activeItemIndex]);
                        }
                    }
                };
                // Watches
                var unWatchitems = $scope.$watch("requiredBindings.items", function () {
                    if (angular.isArray($scope.requiredBindings.items) && $scope.requiredBindings.items.length > 0) {
                        $scope.filteredItems = angular.copy($scope.requiredBindings.items);
                        $scope.requiredBindings.selectedItem = $scope.requiredBindings.getDefaultItem($scope.requiredBindings.items);
                        unWatchitems();
                    }
                    else {
                        $scope.filteredItems = [];
                    }
                });
                // Scope methods
                $scope.setWidth = function () {
                    var inputWidth = angular.element("#" + $scope.requiredBindings.id);
                    return { "width": inputWidth[0].getBoundingClientRect().width + "px" };
                };
                $scope.inputDropdownClass = function () {
                    var classes = "input-dropdown";
                    if ($scope.showValidation()) {
                        classes = classes + " " + validationService($scope.requiredBindings.form).getErrorStatusClassFastWithNullCheck($scope.requiredBindings.name);
                        $scope.dropdownVisible = false;
                    }
                    return classes;
                };
                $scope.selectedItemClass = function (index) {
                    return { "active": $scope.activeItemIndex === index };
                };
                $scope.setActive = function (itemIndex) {
                    $scope.activeItemIndex = itemIndex;
                };
                $scope.selectItem = function (item) {
                    $scope.requiredBindings.selectedItem = item;
                    $scope.userInput = $scope.requiredBindings.getItemDisplayName(item);
                    $scope.dropdownVisible = false;
                    $scope.filteredItems = [item];
                    inputDropdownHelper.setFormValidity(null, $scope);
                };
                $scope.inputFocus = function () {
                    $scope.isFocused = true;
                    if ($scope.filteredItems.length == 0 || $scope.requiredBindings.getExactItemMatch($scope.userInput, $scope.filteredItems)) {
                        $scope.dropdownVisible = false;
                        return;
                    }
                    $scope.dropdownVisible = true;
                    $scope.setActive(0);
                };
                $scope.inputChange = function () {
                    $scope.requiredBindings.selectedItem = null;
                    $scope.dropdownVisible = true;
                    if (!$scope.userInput) {
                        inputDropdownHelper.runProcessesWhenInputIsEmpty($scope);
                    }
                    else if ($scope.optionalBindings && $scope.optionalBindings.shouldValidate) {
                        inputDropdownHelper.runValidationProcesses($scope);
                    }
                    else {
                        inputDropdownHelper.runProcessesForInputChangeWithNoValidation($scope);
                    }
                };
                $scope.inputBlur = function () {
                    $scope.isFocused = false;
                    $scope.dropdownVisible = false;
                };
                $scope.showValidation = function () {
                    var innerValidationService = validationService($scope.requiredBindings.form);
                    return $scope.requiredBindings.form && innerValidationService.isInvalidWithNullCheck($scope.requiredBindings.name) &&
                        (innerValidationService.getErrorList($scope.requiredBindings.name)[inputDropdownConstants.preSubmitValidationErrorKey] ||
                            (innerValidationService.getErrorList($scope.requiredBindings.name)[inputDropdownConstants.postSubmitValidationErrorKey] &&
                                innerValidationService.hasSubmitted() && !$scope.isFocused));
                };
            }
        }); }]);
})());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        "use strict";
        var InputDropdownHelper = /** @class */ (function () {
            function InputDropdownHelper(inputDropdownConstants) {
                var _this = this;
                this.inputDropdownConstants = inputDropdownConstants;
                this.setFormValidityInternal = function (validationKey, directiveScope) {
                    directiveScope.requiredBindings.form[directiveScope.requiredBindings.name].$setValidity(_this.inputDropdownConstants.preSubmitValidationErrorKey, _this.inputDropdownConstants.preSubmitValidationErrorKey !== validationKey);
                    directiveScope.requiredBindings.form[directiveScope.requiredBindings.name].$setValidity(_this.inputDropdownConstants.postSubmitValidationErrorKey, _this.inputDropdownConstants.postSubmitValidationErrorKey !== validationKey);
                };
                this.assignPartialMatches = function (directiveScope) {
                    var matches = directiveScope.requiredBindings.getPartialItemMatches(directiveScope.userInput, directiveScope.requiredBindings.items);
                    if (!angular.isArray(matches))
                        matches = [];
                    directiveScope.filteredItems = matches;
                };
                this.preSubmitValidationIsValid = function (directiveScope) {
                    _this.assignPartialMatches(directiveScope);
                    if (directiveScope.filteredItems.length == 0) {
                        directiveScope.dropdownVisible = false;
                        _this.setFormValidityInternal(_this.inputDropdownConstants.preSubmitValidationErrorKey, directiveScope);
                        return false;
                    }
                    return true;
                };
                this.setFormValidity = function (validationKey, directiveScope) {
                    _this.setFormValidityInternal(validationKey, directiveScope);
                };
                this.runProcessesForInputChangeWithNoValidation = function (directiveScope) {
                    _this.setFormValidityInternal(null, directiveScope);
                    _this.assignPartialMatches(directiveScope);
                    if (directiveScope.filteredItems.length == 0)
                        directiveScope.dropdownVisible = false;
                    else if (directiveScope.filteredItems.length == 1 && directiveScope.requiredBindings.getExactItemMatch(directiveScope.userInput, directiveScope.filteredItems)) {
                        directiveScope.requiredBindings.selectedItem = directiveScope.requiredBindings.getExactItemMatch(directiveScope.userInput, directiveScope.filteredItems);
                        directiveScope.dropdownVisible = false;
                        return;
                    }
                    directiveScope.requiredBindings.selectedItem = directiveScope.optionalBindings.getItemFromNoList(directiveScope.userInput);
                };
                this.runProcessesWhenInputIsEmpty = function (directiveScope) {
                    _this.setFormValidityInternal(null, directiveScope);
                    directiveScope.requiredBindings.selectedItem = directiveScope.requiredBindings.getDefaultItem(directiveScope.requiredBindings.items);
                    directiveScope.filteredItems = angular.copy(directiveScope.requiredBindings.items);
                    directiveScope.setActive(0);
                };
                this.runValidationProcesses = function (directiveScope) {
                    if (!_this.preSubmitValidationIsValid(directiveScope))
                        return;
                    var exactMatch = directiveScope.requiredBindings.getExactItemMatch(directiveScope.userInput, directiveScope.filteredItems);
                    if (!exactMatch) {
                        _this.setFormValidityInternal(_this.inputDropdownConstants.postSubmitValidationErrorKey, directiveScope);
                    }
                    else if (directiveScope.filteredItems.length > 1) {
                        _this.setFormValidityInternal(_this.inputDropdownConstants.postSubmitValidationErrorKey, directiveScope);
                    }
                    else {
                        directiveScope.requiredBindings.selectedItem = exactMatch;
                        _this.setFormValidityInternal(null, directiveScope);
                        directiveScope.dropdownVisible = false;
                    }
                };
                this.ensureElementFocus = function (elementIndex, keyType) {
                    var findElementQuery = angular.element(_this.inputDropdownConstants.inputDropdownItemIdPrefix + elementIndex);
                    var findDropdownQuery = angular.element(_this.inputDropdownConstants.inputDropdownBoxId);
                    if (!findElementQuery || !findDropdownQuery || findElementQuery.length < 1 || findDropdownQuery.length < 1)
                        return;
                    var element = findElementQuery[0];
                    var elementBound = keyType.comparisonSwitch * element.getBoundingClientRect()[keyType.boundaryType];
                    var dropdownBound = keyType.comparisonSwitch * findDropdownQuery[0].getBoundingClientRect()[keyType.boundaryType];
                    if (dropdownBound - elementBound > 0) {
                        element.scrollIntoView(keyType.scrollType);
                    }
                };
            }
            InputDropdownHelper.$inject = ["inputDropdownConstants"];
            return InputDropdownHelper;
        }());
        Service.InputDropdownHelper = InputDropdownHelper;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("inputDropdownHelper", HCTRA.Service.InputDropdownHelper);
}());
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        var LuhnAlgorithmDirective = /** @class */ (function () {
            function LuhnAlgorithmDirective() {
                this.require = "ngModel";
                this.link = function (scope, element, attributes, ngModel) {
                    ngModel.$validators.luhn = function (modelValue) {
                        if (!modelValue) {
                            return true;
                        }
                        else if (/^\*{12}-\d{4}$/.test(modelValue)) {
                            return true;
                        }
                        modelValue = modelValue.toString();
                        if (/[^0-9-\s]+/.test(modelValue))
                            return false;
                        var nCheck = 0;
                        var nDigit = 0;
                        var bEven = false;
                        modelValue = modelValue.replace(/\D/g, "");
                        for (var n = modelValue.length - 1; n >= 0; n--) {
                            var cDigit = modelValue.charAt(n);
                            nDigit = parseInt(cDigit, 10);
                            if (bEven) {
                                if ((nDigit *= 2) > 9)
                                    nDigit -= 9;
                            }
                            nCheck += nDigit;
                            bEven = !bEven;
                        }
                        return (nCheck % 10) == 0;
                    };
                };
            }
            LuhnAlgorithmDirective.factory = function () {
                var directive = function () { return new LuhnAlgorithmDirective(); };
                directive.$inject = [];
                return directive;
            };
            return LuhnAlgorithmDirective;
        }());
        Directive.LuhnAlgorithmDirective = LuhnAlgorithmDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("luhn", HCTRA.Directive.LuhnAlgorithmDirective.factory());
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("moduleButton", [
        function () {
            return {
                transclude: true,
                restrict: "E",
                templateUrl: "/app/directives/moduleButtonTemplate.html",
                scope: {
                    onModuleClick: '&'
                }
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("notEqualTo", [
        function () {
            return {
                require: "ngModel",
                scope: {
                    otherModelValue: "=notEqualTo"
                },
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.notEqualTo = function (modelValue) {
                        if (angular.isUndefined(scope.otherModelValue) || scope.otherModelValue === "") {
                            return true;
                        }
                        else {
                            return (!(modelValue == scope.otherModelValue));
                        }
                    };
                    scope.$watch('otherModelValue', function () {
                        ngModel.$validate();
                    }, true);
                    scope.$watch('modelValue', function () {
                        ngModel.$validate();
                    });
                }
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("optionalCompareTo", [
        function () {
            return {
                require: "ngModel",
                scope: {
                    otherModelValue: "=optionalCompareTo"
                },
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.optionalCompareTo = function (modelValue) {
                        if (angular.isUndefined(scope.otherModelValue) || scope.otherModelValue === "") {
                            return true;
                        }
                        else {
                            return ((modelValue == scope.otherModelValue));
                        }
                    };
                    scope.$watch('otherModelValue', function () {
                        ngModel.$validate();
                    });
                    scope.$watch('modelValue', function () {
                        ngModel.$validate();
                    });
                }
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('paginatedList', [
        function () {
            return {
                scope: {
                    inList: '=flatList',
                    beforePageChange: '=',
                    afterPageChange: '=',
                    initPageSize: '<',
                    invoiceCount: '=?',
                    showRecordCount: '=?'
                },
                controller: PaginatedListController,
                templateUrl: function (tElement, tAttrs) {
                    return tAttrs.templateUrl;
                },
                controllerAs: 'vm',
                bindToController: true,
                transclude: true
            };
        }
    ]);
    function PaginatedListController($scope, genericPagingControlService) {
        var vm = this;
        vm.$onInit = function () {
            var unwatchInList = $scope.$watch('vm.inList', function () {
                if (vm.inList) {
                    vm.itemCount = vm.inList.length;
                    var initPageSize = vm.initPageSize || 25;
                    var paginator = new HCTRA.Datastructure.Paginator(vm.inList, initPageSize);
                    vm.config = genericPagingControlService.generateSimpleConfig(paginator, function (newPage) {
                        if (vm.beforePageChange)
                            vm.beforePageChange();
                        vm.currentPage = newPage;
                        if (vm.afterPageChange)
                            vm.afterPageChange();
                    });
                    vm.currentPage = paginator.getPage(1);
                    unwatchInList();
                }
            });
        };
    }
    PaginatedListController.$inject = ['$scope', 'genericPagingControlService'];
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('pagingControl', ['validationService', '$state', 'stateNames',
        function (validationService, $state, stateNames) {
            return {
                scope: {
                    data: '=',
                    searchFunction: '&',
                    form: '=',
                    navigationUrls: '=' // needed for prerender javascript timeout
                },
                templateUrl: '/app/directives/pagingControlTemplate.html',
                link: function (scope) {
                    // init
                    scope.userInputData = { visiblePageNumber: 1 };
                    // init
                    scope.validations = validationService(scope.form);
                    // watches
                    scope.$watch('data.currentPage', function () {
                        if (scope.data && angular.isNumber(scope.data.currentPage)) {
                            scope.userInputData.visiblePageNumber = ((scope.data.currentPage) + 1);
                        }
                    });
                    scope.$watch('data.pageSize', function () {
                        if (scope.data && scope.data.pageSize === "" && ($state.is(stateNames.faq) || $state.is(stateNames.faqChild))) {
                            scope.data.pageSize = 50;
                        }
                    });
                    // watches
                    // on change
                    scope.adjustPageSize = function () {
                        scope.data.currentPage = 0;
                        scope.searchFunction();
                    };
                    scope.lastPage = function () {
                        if ((scope.data.currentPage) === ((scope.data.numberOfPages) - 1)) {
                            return;
                        }
                        scope.data.currentPage = ((scope.data.numberOfPages) - 1);
                        scope.searchFunction();
                    };
                    scope.firstPage = function () {
                        if ((scope.data.currentPage) === 0) {
                            return;
                        }
                        scope.data.currentPage = 0;
                        scope.searchFunction();
                    };
                    scope.manualPageUpdate = function () {
                        if (scope.form.currentVisiblePageNumber.$valid) {
                            scope.data.currentPage = angular.copy(scope.userInputData.visiblePageNumber - 1);
                            scope.searchFunction();
                            angular.element(':focus').blur(); // the search function automatically sets the page back up to the title. focus needs to be manually removed from the
                            // input box becuase the input will no longer be visible after the search. if the user attempts to scroll after a successful search and focus is still on the input,
                            // then the number will change instead of the screen scrolling
                        }
                    };
                    // on change
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("pagingInfiniteScroll", function () {
        return {
            restrict: "E",
            templateUrl: "/app/directives/pagingInfiniteScrollTemplate.html",
            scope: {
                search: '&',
                infiniteScrollIsDisabled: '=',
                titleType: '=',
                totalItems: '=',
                articleArray: '=',
                pagingObject: '=',
                titleId: '=',
                archiveTypeChecker: '=',
                form: '=',
                articleNotFoundText: '=',
                navigationUrls: '=',
                mobileSearch: '&'
            },
            link: function ($scope) {
                var checkForArticles = function (items) {
                    return items === 0 ? false : true;
                };
                var unwatch = $scope.$watch('totalItems', function () {
                    if (angular.isDefined($scope.totalItems)) {
                        $scope.hasArticles = checkForArticles($scope.totalItems);
                        // Not sure why the line below exists
                        // eslint-disable-next-line no-self-assign
                        $scope.articleNotFoundText = $scope.articleNotFoundText;
                    }
                });
                $scope.$on('$destroy', function () {
                    unwatch();
                });
            }
        };
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("paymentMethod", function () {
        return {
            restrict: "E",
            templateUrl: "/app/directives/paymentMethod.html",
            scope: {
                billingtypeParent: '=',
                changeType: '&',
                lockType: '='
            },
            link: function ($scope) {
                $scope.isItalic = function () {
                    if (!$scope.billingtypeParent.billingType) {
                        return 'setItalic';
                    }
                    else {
                        return '';
                    }
                };
            }
        };
    });
}());
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        //directive for rendering a pdf inline onto a webpage
        var PdfViewerDirective = /** @class */ (function () {
            function PdfViewerDirective(pdfService, $window, $q) {
                var _this = this;
                this.pdfService = pdfService;
                this.$window = $window;
                this.$q = $q;
                this.restrict = "A";
                this.scope = {
                    pdfData: "=",
                    pdfLoaded: "=",
                    pdfError: "=" //event called if pdf rendering failed
                };
                this.link = function (scope, element) {
                    //watch when pdfData changes
                    scope.$watch("pdfData", function (oldVal, newVal, innerScope) {
                        if (!newVal) {
                            return;
                        }
                        //clear any previous renderings
                        element.empty();
                        if (angular.isUndefined(newVal.worker)) {
                            newVal.worker = _this.pdfService.createWorker();
                        }
                        //get document
                        _this.pdfService.getDocument(newVal)
                            //render into element
                            .then(function (doc) { return _this.renderPdfDocument(doc, element); })
                            .then(function (canvases) {
                            //if successful rendering, signal it with the generated data
                            if (innerScope.pdfLoaded) {
                                innerScope.pdfLoaded(canvases.map(function (c) {
                                    return {
                                        width: c.canvas.width,
                                        height: c.canvas.height,
                                        data: c.raw
                                    };
                                }));
                            }
                        })
                            //if something went wrong..
                            .catch(function (e) {
                            //..attempt to signal it
                            if (innerScope.pdfError) {
                                innerScope.pdfError(e);
                            }
                            return _this.$q.resolve([]);
                        })
                            .finally(function () {
                            if (newVal && newVal.worker) {
                                newVal.worker.destroy();
                            }
                        });
                    });
                };
                //calculate pixel density of screen
                this.backingScale = function (ctx) {
                    var dpr = _this.$window.devicePixelRatio || 1;
                    var bsr = ctx.webkitBackingStorePixelRatio ||
                        ctx.mozBackingStorePixelRatio ||
                        ctx.msBackingStorePixelRatio ||
                        ctx.oBackingStorePixelRatio ||
                        ctx.backingStorePixelRatio || 1;
                    return dpr / bsr;
                };
                this.renderPdfDocument = function (pdfDocument, element) {
                    var promises = [];
                    var width = element.width();
                    var _loop_1 = function (pageNum) {
                        var index = pageNum + 1;
                        //..get page..
                        promises.push(pdfDocument.getPage(index)
                            .then(function (page) {
                            //..then build a canvas element
                            var canvas = _this.$window.document.createElement("canvas");
                            //element.append(canvas);
                            var context = canvas.getContext('2d');
                            //set the proper scaling
                            var ratio = 2;
                            var viewPort = page.getViewport({ scale: ratio });
                            var elmRatio = viewPort.width ? width / viewPort.width : 0;
                            //set dimensions
                            canvas.width = Math.floor(viewPort.width * ratio);
                            canvas.height = Math.floor(viewPort.height * ratio);
                            canvas.style.width = Math.floor(viewPort.width * elmRatio) + "px";
                            canvas.style.height = Math.floor(viewPort.height * elmRatio) + "px";
                            context.setTransform(ratio, 0, 0, ratio, 0, 0);
                            //and render: once for the visable elements, the other a raw high res for printing
                            return (page.render({ canvasContext: context, viewport: viewPort }).promise
                                //when rendered return rendered canvas of original index of page
                                .then(function () { return ({ index: index, canvas: canvas, raw: canvas.toDataURL() }); }));
                        }));
                    };
                    //for each page..
                    for (var pageNum = 0; pageNum < pdfDocument.numPages; pageNum++) {
                        _loop_1(pageNum);
                    }
                    //wrap up all promises
                    return _this.$q.all(promises)
                        //when all have finished rendering
                        .then(function (canvases) {
                        //when correctly order them
                        canvases.sort(function (a, b) { return a.index - b.index; });
                        //append rendered canvas
                        canvases.forEach(function (c) { return element.append(c.canvas); });
                        return canvases;
                    })
                        .finally(function () {
                        pdfDocument.destroy();
                    });
                };
            }
            PdfViewerDirective.factory = function () {
                var directive = function (pdfService, $window, $q) { return new PdfViewerDirective(pdfService, $window, $q); };
                directive.$inject = ["PdfService", "$window", "$q"];
                return directive;
            };
            return PdfViewerDirective;
        }());
        Directive.PdfViewerDirective = PdfViewerDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("pdfViewer", HCTRA.Directive.PdfViewerDirective.factory());
})();
(function () {
    'use strict';
    angular.module('HCTRAModule').directive("personalInfo", function () {
        return {
            transclude: true,
            restrict: "E",
            templateUrl: "/app/directives/personalInfoPartial.html",
            scope: {
                personalInfo: '=data',
                onEdit: '&',
                hideEdit: '=?',
                hideContactInfo: '=?',
                hideAddressInfo: '=?',
                isAccountInformation: '='
            },
            link: function ($scope, elem, attrs) {
                $scope.showEdit = !!attrs.onEdit;
                $scope.hideContactInfo = !!attrs.hideContactInfo;
                $scope.hideAddressInfo = !!attrs.hideAddressInfo;
                $scope.isFirstSection = 'isFirst' in attrs;
                var unwatch = $scope.$watch('personalInfo', function (personalInfo) {
                    if (angular.isDefined(personalInfo) && personalInfo.firstName) {
                        personalInfo.accountType = "Personal";
                        unwatch();
                    }
                });
            }
        };
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('printLink', ['$window', function ($window) {
            return {
                scope: {
                    printMessage: "="
                },
                templateUrl: '/app/directives/printLinkTemplate.html',
                link: function ($scope, elem, attrs) {
                    $scope.msg = attrs.printMessage ? $scope.printMessage : "Print";
                    $scope.clickedPrint = function () {
                        $window.print();
                    };
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('sameHeight', ['operatingSystemSnifferService', '$timeout',
        function (operatingSystemSnifferService, $timeout) {
            return {
                restrict: 'A',
                scope: {
                    containers: '=sameHeight'
                },
                link: function (scope, element) {
                    var jElem = angular.element(element);
                    scope.containers.push(jElem);
                    angular.element(window).resize(adjustContainerSize);
                    function adjustContainerSize() {
                        if (operatingSystemSnifferService.isDesktopOs()) {
                            var largestHeight = 0;
                            for (var i = 0; i < scope.containers.length; i++) {
                                scope.containers[i].removeAttr('style');
                                if (scope.containers[i].innerHeight() > largestHeight)
                                    largestHeight = scope.containers[i].innerHeight();
                            }
                            for (var j = 0; j < scope.containers.length; j++) {
                                scope.containers[j].css('height', largestHeight);
                            }
                        }
                        else {
                            jElem.removeAttr('style');
                        }
                    }
                    $timeout(function () {
                        adjustContainerSize();
                    }, 500);
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('selectOnClick', ['$window',
        function ($window) {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    element.on('click', function () {
                        if (!$window.getSelection().toString()) {
                            this.setSelectionRange(0, this.value.length);
                        }
                    });
                }
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('spinnerRemote', function () {
        return {
            scope: {
                remot: '='
            },
            link: function (scope) {
                angular.element('#spinnerBlock').show();
                var showing = false;
                if (scope.remot) {
                    scope.remot.openSpinnerBlock = function () {
                        // console.log("Spinner start called with " + showing + "!");
                        angular.element('#spinnerBlock').hide();
                        showing = true;
                    };
                    scope.remot.closeSpinnerBlock = function () {
                        // console.log("Spinner stop called with " + showing + "!");
                        if (showing) {
                            // console.log("Actually called the jQuery hide()");
                            angular.element('#spinnerBlock').show();
                        }
                    };
                }
            }
        };
    });
}());
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        //define the store front directive, its template and controller
        var StorefrontAppConfigDirective = /** @class */ (function () {
            function StorefrontAppConfigDirective(storefrontService) {
                var _this = this;
                this.storefrontService = storefrontService;
                this.restrict = "A";
                this.link = function () {
                    if (_this.storefrontService.isEnabled()) {
                        angular.element("html")
                            .addClass("storefrontView")
                            .removeAttr("storefront-app-config");
                        var viewport = angular.element("html > head > meta[name='viewport']");
                        viewport.attr("content", "");
                    }
                };
            }
            StorefrontAppConfigDirective.factory = function () {
                var directive = function (storefrontService) { return new StorefrontAppConfigDirective(storefrontService); };
                directive.$inject = ["StorefrontService"];
                return directive;
            };
            return StorefrontAppConfigDirective;
        }());
        Directive.StorefrontAppConfigDirective = StorefrontAppConfigDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontAppConfig", HCTRA.Directive.StorefrontAppConfigDirective.factory());
})();
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        //define directive to hide transculded content if storefront is enabled
        var StorefrontHideIfEnabledDirective = /** @class */ (function () {
            function StorefrontHideIfEnabledDirective(storefrontService) {
                var _this = this;
                this.storefrontService = storefrontService;
                this.restrict = "A";
                this.scope = {
                    storefrontHideIfEnabled: '='
                };
                this.transclude = true;
                this.template = "<div ng-transclude></div>";
                this.link = function (scope, element) {
                    var disableForAll = angular.isDefined(scope.storefrontHideIfEnabled) && scope.storefrontHideIfEnabled;
                    if (_this.storefrontService.isEnabled() && (!_this.storefrontService.fullSiteMode || disableForAll)) {
                        angular.element(element).remove();
                    }
                };
            }
            StorefrontHideIfEnabledDirective.factory = function () {
                var directive = function (storefrontService) { return new StorefrontHideIfEnabledDirective(storefrontService); };
                directive.$inject = ["StorefrontService"];
                return directive;
            };
            return StorefrontHideIfEnabledDirective;
        }());
        Directive.StorefrontHideIfEnabledDirective = StorefrontHideIfEnabledDirective;
        //define directive to hide transculded content if storefront is enabled
        var StorefrontShowIfEnabledDirective = /** @class */ (function () {
            function StorefrontShowIfEnabledDirective(storefrontService) {
                var _this = this;
                this.storefrontService = storefrontService;
                this.restrict = "A";
                this.scope = {
                    storefrontShowIfEnabled: '='
                };
                this.transclude = true;
                this.template = "<div ng-transclude></div>";
                this.link = function (scope, element) {
                    var enableForAll = angular.isDefined(scope.storefrontShowIfEnabled) && scope.storefrontShowIfEnabled;
                    if (!_this.storefrontService.isEnabled() || (_this.storefrontService.fullSiteMode && !enableForAll)) {
                        angular.element(element).remove();
                    }
                };
            }
            StorefrontShowIfEnabledDirective.factory = function () {
                var directive = function (storefrontService) { return new StorefrontShowIfEnabledDirective(storefrontService); };
                directive.$inject = ["StorefrontService"];
                return directive;
            };
            return StorefrontShowIfEnabledDirective;
        }());
        Directive.StorefrontShowIfEnabledDirective = StorefrontShowIfEnabledDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontHideIfEnabled", HCTRA.Directive.StorefrontHideIfEnabledDirective.factory())
        .directive("storefrontShowIfEnabled", HCTRA.Directive.StorefrontShowIfEnabledDirective.factory());
})();
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        //define navigation for storefront on storefront specific templates that require a custom navigation button
        var StorefrontLinkStripperDirective = /** @class */ (function () {
            function StorefrontLinkStripperDirective(storefrontEventService) {
                var _this = this;
                this.storefrontEventService = storefrontEventService;
                this.restrict = "A";
                this.transclude = false;
                this.link = function (scope, element) {
                    _this.storefrontEventService.addMutationObserver(element[0]);
                };
            }
            StorefrontLinkStripperDirective.factory = function () {
                var directive = function (storefrontEventService) { return new StorefrontLinkStripperDirective(storefrontEventService); };
                directive.$inject = ["StorefrontEventService"];
                return directive;
            };
            return StorefrontLinkStripperDirective;
        }());
        Directive.StorefrontLinkStripperDirective = StorefrontLinkStripperDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontLinkStripper", HCTRA.Directive.StorefrontLinkStripperDirective.factory());
})();
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        //define the store front menu directive
        var StorefrontMenuDirective = /** @class */ (function () {
            function StorefrontMenuDirective(storefrontService, storefrontModalService, $q, $state, stateNames) {
                var _this = this;
                this.storefrontService = storefrontService;
                this.storefrontModalService = storefrontModalService;
                this.$q = $q;
                this.$state = $state;
                this.stateNames = stateNames;
                this.restrict = "AE";
                this.templateUrl = "/app/directives/storefront/storefrontMenuTemplate.html";
                this.link = function (scope) {
                    scope.skipToItem = function (item) { return _this.skipToItem(item); };
                    scope.currentItem = function () { return _this.storefrontService.currentWorkItem(true); };
                    scope.workItems = _this.storefrontService.workItems;
                    scope.taskCompleteIcon = _this.storefrontService.getTaskCompleteIcon();
                    scope.taskNotCompleteIcon = _this.storefrontService.getTaskNotCompleteIcon();
                    scope.isItemCurrent = function (item) { return _this.isItemActive(item); };
                };
                //skips to the given workitem
                this.skipToItem = function (item) {
                    if (!_this.storefrontService.isWorkflowActive())
                        return;
                    if (!_this.storefrontService.currentWorkItem() || !_this.storefrontService.currentWorkItem().isSkippable || !item)
                        return;
                    if (_this.storefrontService.currentWorkItem().id === item.id || item.isCompleted)
                        return;
                    //show skip modal
                    _this.storefrontModalService
                        .skipTaskMessage()
                        .then(function (skip) { return skip ? _this.storefrontService.skip(item.id) : _this.$q.reject(null); })
                        .then(function (nextState) {
                        _this.$state.go(nextState || _this.stateNames.storefrontSurvey);
                    });
                };
            }
            StorefrontMenuDirective.factory = function () {
                var directive = function (storefrontService, storefrontModalService, $q, $state, stateNames) {
                    return new StorefrontMenuDirective(storefrontService, storefrontModalService, $q, $state, stateNames);
                };
                directive.$inject = ["StorefrontService", "StorefrontModalService", "$q", "$state", "stateNames"];
                return directive;
            };
            //determines if given item is the current workitem
            StorefrontMenuDirective.prototype.isItemActive = function (item) {
                var current = this.storefrontService.currentWorkItem(true);
                if (!current)
                    return false;
                return current.id === item.id;
            };
            return StorefrontMenuDirective;
        }());
        Directive.StorefrontMenuDirective = StorefrontMenuDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontMenu", HCTRA.Directive.StorefrontMenuDirective.factory());
})();
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        //define the store front modal close directive
        var StorefrontModalCloseDirective = /** @class */ (function () {
            function StorefrontModalCloseDirective(storefrontService) {
                var _this = this;
                this.storefrontService = storefrontService;
                this.restrict = "A";
                this.templateUrl = "/app/directives/storefront/storefrontModalCloseTemplate.html";
                this.scope = {};
                this.link = function (scope) {
                    scope.modalCloseIcon = _this.storefrontService.getCloseModalImg();
                };
            }
            StorefrontModalCloseDirective.factory = function () {
                var directive = function (storefrontService) { return new StorefrontModalCloseDirective(storefrontService); };
                directive.$inject = ["StorefrontService"];
                return directive;
            };
            return StorefrontModalCloseDirective;
        }());
        Directive.StorefrontModalCloseDirective = StorefrontModalCloseDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontModalClose", HCTRA.Directive.StorefrontModalCloseDirective.factory());
})();
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        //define the store front modal close directive
        var StorefrontModalGoBackDirective = /** @class */ (function () {
            function StorefrontModalGoBackDirective(storefrontService) {
                var _this = this;
                this.storefrontService = storefrontService;
                this.restrict = "A";
                this.templateUrl = "/app/directives/storefront/storefrontModalGoBackTemplate.html";
                this.scope = {
                    storefrontModalGoBack: "="
                };
                this.link = function (scope) {
                    scope.modalBackIcon = _this.storefrontService.getBackArrowImg();
                };
            }
            StorefrontModalGoBackDirective.factory = function () {
                var directive = function (storefrontService) { return new StorefrontModalGoBackDirective(storefrontService); };
                directive.$inject = ["StorefrontService"];
                return directive;
            };
            return StorefrontModalGoBackDirective;
        }());
        Directive.StorefrontModalGoBackDirective = StorefrontModalGoBackDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontModalGoBack", HCTRA.Directive.StorefrontModalGoBackDirective.factory());
})();
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        //define navigation for storefront on storefront specific templates that require a custom navigation button
        var StorefrontNavigationDirective = /** @class */ (function () {
            function StorefrontNavigationDirective(storefrontService, $q, $state, storefrontModalService, stateNames) {
                var _this = this;
                this.storefrontService = storefrontService;
                this.$q = $q;
                this.$state = $state;
                this.storefrontModalService = storefrontModalService;
                this.stateNames = stateNames;
                this.restrict = "AE";
                this.transclude = true;
                this.templateUrl = "/app/directives/storefront/storefrontNavigationTemplate.html";
                this.scope = {
                    onProceed: "&",
                    preserveWorkItem: "=",
                    onCancel: "&",
                    onPrevious: "&",
                    hideProceed: "=",
                    showCancel: '=',
                    showPrevious: '=',
                    isProceedDisabled: '=',
                    isFormCompletion: '=',
                    excludeGlobalDisable: '='
                };
                this.link = function (scope, element, attrs) {
                    // var proceedIncluded = angular.isDefined(attrs.onProceed);
                    //  var cancelIncluded = angular.isDefined(attrs.onCancel);
                    scope.showLoginHelp = angular.isDefined(attrs.showLoginHelp);
                    var blockActions = false;
                    var classes = attrs.transcludedClasses ? attrs.transcludedClasses.split(" ").filter(function (x) { return x; }) : [];
                    if (scope.excludeGlobalDisable) {
                        classes.push('exclude-global-disable');
                    }
                    scope.transcludedClasses = classes;
                    var containingForm = element.parents("form");
                    //only active if service is enabled and is not in full site mode
                    if (_this.storefrontService.isEnabled() && !_this.storefrontService.fullSiteMode) {
                        scope.showLoginHelpMessage = function () {
                            if (blockActions)
                                return _this.$q.reject();
                            blockActions = true;
                            return _this.storefrontModalService
                                .showGotoCsr()
                                .then(function (imDone) { return !imDone || _this.$state.go(_this.stateNames.storefrontSurvey); })
                                .finally(function () {
                                blockActions = false;
                            });
                        };
                        var currentItem = _this.storefrontService.currentWorkItem();
                        if (currentItem) {
                            scope.showCancel = scope.showCancel && currentItem.isSkippable;
                        }
                        scope.continueAction = function () {
                            if (containingForm.is(".ng-invalid")) {
                                blockActions = false;
                                return _this.$q.reject();
                            }
                            if (blockActions)
                                return _this.$q.reject();
                            blockActions = true;
                            var action = scope.isFormCompletion
                                ? _this.completeWorkItem(scope)
                                : _this.should(scope.onProceed && scope.onProceed());
                            return action.finally(function () {
                                blockActions = false;
                            });
                        };
                        scope.cancelAction = function () {
                            if (blockActions)
                                return _this.$q.reject();
                            blockActions = true;
                            return (scope.preserveWorkItem
                                ? _this.should(scope.onCancel && scope.onCancel())
                                : _this.cancelWorkItem(scope)).finally(function () { blockActions = false; });
                        };
                        scope.gotoPrevious = function () {
                            if (blockActions)
                                return _this.$q.reject();
                            blockActions = true;
                            return _this.should(scope.onPrevious && scope.onPrevious())
                                .finally(function () { blockActions = false; });
                        };
                    }
                    else {
                        //completely remove element if not needed
                        angular.element(element).remove();
                    }
                };
            }
            StorefrontNavigationDirective.factory = function () {
                var directive = function (storefrontService, $q, $state, storefrontModalService, stateNames) { return new StorefrontNavigationDirective(storefrontService, $q, $state, storefrontModalService, stateNames); };
                directive.$inject = ["StorefrontService", "$q", "$state", "StorefrontModalService", "stateNames"];
                return directive;
            };
            //rejects on falsy defined values, calls 'when' on truthy values. resolved undefined values
            StorefrontNavigationDirective.prototype.should = function (value) {
                //is 'thenable'
                if (value && 'then' in value) {
                    return this.$q.when(value);
                }
                else if (angular.isUndefined(value)) {
                    return this.$q.resolve();
                }
                else {
                    return value ? this.$q.resolve(value) : this.$q.reject(value);
                }
            };
            StorefrontNavigationDirective.prototype.completeWorkItem = function (scope) {
                var _this = this;
                return this.performAction(false, function () { return scope.onProceed(); }, function () { return _this.storefrontService.completeWorkItem(); });
            };
            StorefrontNavigationDirective.prototype.cancelWorkItem = function (scope) {
                var _this = this;
                var currentWorkItem = this.storefrontService.currentWorkItem();
                if (currentWorkItem) {
                    var initialState_1 = this.storefrontService.getWorkItemInitState(currentWorkItem);
                    //if cancelling on the initial state, it should cancel the whole work item, so don't perform cancel logic in this case
                    if (initialState_1 && this.$state.current.name !== initialState_1) {
                        return this.performAction(false, function () { return scope.onCancel(); }, function () {
                            //check to see if the 'cancel' already redirected to the init state, if so, don't do it again.
                            if (_this.$state.current.name !== initialState_1) {
                                return _this.$state.go(initialState_1, {}, { reload: true });
                            }
                            else {
                                return _this.$q.resolve();
                            }
                        });
                    }
                }
                return this.performAction(true, function () { return scope.onCancel(); }, function () { return _this.storefrontService.completeWorkItem(); });
            };
            StorefrontNavigationDirective.prototype.performAction = function (warnLeavingTask, action, postAction) {
                var _this = this;
                return this.$q
                    .when(!warnLeavingTask || this.storefrontModalService.skipTaskMessage())
                    .then(function (skip) {
                    if (skip) {
                        return _this.storefrontService.lockStateChanging(function () {
                            var result;
                            try {
                                result = action();
                            }
                            catch (e) {
                                result = _this.$q.reject(e);
                            }
                            return _this.should(result);
                        })
                            .catch(function (e) { return (e && e.detail && e.detail.storefrontTransitionBlocked)
                            ? _this.$q.resolve()
                            : _this.$q.reject(e); })
                            .then(postAction);
                    }
                });
            };
            return StorefrontNavigationDirective;
        }());
        Directive.StorefrontNavigationDirective = StorefrontNavigationDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontNavigation", HCTRA.Directive.StorefrontNavigationDirective.factory());
})();
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        //define the store front directive, its template and controller
        var StorefrontUiDirective = /** @class */ (function () {
            function StorefrontUiDirective() {
                this.restrict = "AE";
                this.controller = "StorefrontController";
                this.templateUrl = "/app/directives/storefront/storefrontUiTemplate.html";
                //transclude = true;
                this.scope = false;
                this.priority = 400;
            }
            StorefrontUiDirective.factory = function () {
                var directive = function () { return new StorefrontUiDirective(); };
                directive.$inject = [];
                return directive;
            };
            return StorefrontUiDirective;
        }());
        Directive.StorefrontUiDirective = StorefrontUiDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontUi", HCTRA.Directive.StorefrontUiDirective.factory());
})();
((function () {
    "use strict";
    angular.module("HCTRAModule").directive("upDownEnterInterceptor", [
        function () { return ({
            restrict: "A",
            scope: {
                actions: "=upDownEnterInterceptor"
            },
            link: function ($scope, element) {
                var UP = 38;
                var DOWN = 40;
                var RETURN = 13;
                element.bind("keydown keypress", function (event) {
                    switch (event.which) {
                        case UP: {
                            $scope.$apply($scope.actions.upAction);
                            break;
                        }
                        case DOWN: {
                            $scope.$apply($scope.actions.downAction);
                            break;
                        }
                        case RETURN: {
                            $scope.$apply(function () { $scope.actions.enterAction(event); });
                            break;
                        }
                        default: break;
                    }
                });
            }
        }); }
    ]);
})());
/* eslint-disable no-useless-escape */
(function () {
    "use strict";
    angular.module('HCTRAModule').directive("doubles", [
        function () {
            return {
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.doubles = function (modelValue) {
                        // console.log("Inside remove doubles directive");
                        // console.log("Model value: " + modelValue);
                        var regexChecks = [/@@/g, /\s\s/g, /\.\./g, /\-\-/g, /\_\_/g, /\s\s/g, /[\<\>\'\"]/g];
                        // make sure the model is not empty and thus not a string
                        if (modelValue.match) {
                            var thisCheck;
                            for (var x = 0; x < regexChecks.length; x++) {
                                thisCheck = modelValue.match(regexChecks[x]);
                                if (thisCheck) {
                                    //failing characters found
                                    return false;
                                }
                            }
                            // no failing double characters found
                            return true;
                        }
                        else {
                            return true;
                        }
                    };
                }
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').directive('validateDriverLicense', [function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                scope: {
                    driverLicenseState: '=validateDriverLicense'
                },
                link: function (scope, elem, attrs, ngModel) {
                    scope.$watch('driverLicenseState', function () {
                        ngModel.$validate();
                    });
                    ngModel.$validators.alphaNumeric = function (value) {
                        return /^[a-zA-Z0-9]*$/.test(value || '');
                    };
                    ngModel.$validators.numericTexasDl = function (value) {
                        return scope.driverLicenseState !== 'TX' || /^[0-9]*$/.test(value || '');
                    };
                    ngModel.$validators.firstDigitLessThanFiveTexasDl = function (value) {
                        return scope.driverLicenseState !== 'TX' || /^$|^[0-4]/.test(value || '');
                    };
                    ngModel.$validators.eightDigitTexasDl = function (value) {
                        return scope.driverLicenseState !== 'TX' || /^$|^[0-9]{8}$/.test(value || '');
                    };
                }
            };
        }]);
})();
(function () {
    'use strict';
    //TODO: duplicated in Angular. remove this when migration complete
    angular.module('HCTRAModule').directive("validationFocus", [
        function () {
            return {
                restrict: "A",
                link: function ($scope, elem) {
                    // set up event handler on the form element
                    elem.on('submit', function () {
                        // find the first invalid element
                        var firstInvalid = elem[0].querySelector('.ng-invalid');
                        // if we find one, set focus
                        if (firstInvalid) {
                            firstInvalid.focus();
                        }
                    });
                }
            };
        }
    ]);
}());
var HCTRA;
(function (HCTRA) {
    var Directive;
    (function (Directive) {
        var VehicleInformationDirective = /** @class */ (function () {
            function VehicleInformationDirective(validationService, responseErrorService, genericRepo, localDataRepo, manageVehiclesPaperPlateService, environmentConfig) {
                var _this = this;
                this.validationService = validationService;
                this.responseErrorService = responseErrorService;
                this.genericRepo = genericRepo;
                this.localDataRepo = localDataRepo;
                this.manageVehiclesPaperPlateService = manageVehiclesPaperPlateService;
                this.environmentConfig = environmentConfig;
                this.transclude = true;
                this.restrict = "E";
                this.templateUrl = "/app/directives/vehicleInformationTemplate.html";
                this.scope = {
                    vehicleInfo: "=",
                    parentForm: "=",
                    tabOrderingIndex: "=",
                    isEdit: "=",
                    hideTempPlate: "=?"
                };
                this.link = function ($scope) {
                    Object.defineProperty($scope.vehicleInfo, 'isPaperPlate', {
                        get: function () { return this.temporaryLicPlate; },
                        set: function (value) { this.temporaryLicPlate = value; }
                    });
                    if (!$scope.vehicleInfo) {
                        $scope.vehicleInfo = {};
                    }
                    var oldLicPlate = $scope.vehicleInfo.licPlate;
                    // TODO: Cleanup so vehicleClassCode is a string
                    $scope.vehicleInfo.vehicleClassCode = Number($scope.vehicleInfo.vehicleClassCode);
                    $scope.validation = _this.validationService($scope.parentForm);
                    $scope.classList = _this.localDataRepo.getClasses(); // Axle classifications
                    $scope.yearsList = _this.localDataRepo.getModelYears(); // Years from 1900 to present year + 1
                    $scope.allDataHasBeenLoaded = false;
                    $scope.hasSelectedTwoAxle = function () {
                        return $scope.vehicleInfo.vehicleClassCode.toString() === "2";
                    };
                    $scope.classChange = function () {
                        $scope.disableMotorcycle = ($scope.vehicleInfo.vehicleClassCode.toString() !== "2");
                        if ($scope.disableMotorcycle)
                            $scope.vehicleInfo.motorcycle = false;
                    };
                    $scope.classChange(); // Run once on controller creation
                    if (!$scope.hideTempPlate) {
                        $scope.onBlur = function () {
                            if (oldLicPlate !== $scope.vehicleInfo.licPlate) {
                                oldLicPlate = $scope.vehicleInfo.licPlate;
                                $scope.vehicleInfo.temporaryLicPlate = null;
                            }
                        };
                    }
                    else {
                        $scope.onBlur = angular.noop;
                    }
                    _this.genericRepo.dataFactory.getEditEzTagData().then(function (response) {
                        if (_this.responseErrorService.isErrorFree(response)) {
                            $scope.statesList = response.states;
                            $scope.makesList = response.vehicleMakes;
                        }
                        _this.responseErrorService.displayAlertsFromResponse(response);
                        $scope.allDataHasBeenLoaded = true;
                    });
                    _this.manageVehiclesPaperPlateService.getPaperPlateCms().then(function (cms) {
                        $scope.paperPlateAcknowledgement = cms.paperPlateAcknowledgement;
                        $scope.paperPlateQuestion = cms.paperPlateQuestion;
                        $scope.paperPlateValidationText = cms.paperPlateValidationText;
                    });
                };
            }
            VehicleInformationDirective.factory = function () {
                var directive = function (validationService, responseErrorService, genericRepo, localDataRepo, manageVehiclesPaperPlateService, environmentConfig) {
                    return new VehicleInformationDirective(validationService, responseErrorService, genericRepo, localDataRepo, manageVehiclesPaperPlateService, environmentConfig);
                };
                directive.$inject = ["validationService", "responseErrorService", "genericRepo", "localDataRepo", "manageVehiclesPaperPlateService", "environmentConfig"];
                return directive;
            };
            return VehicleInformationDirective;
        }());
        Directive.VehicleInformationDirective = VehicleInformationDirective;
    })(Directive = HCTRA.Directive || (HCTRA.Directive = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").directive("vehicleInformation", HCTRA.Directive.VehicleInformationDirective.factory());
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('bankAccount', [
        function () {
            return function (bankAccountInput) {
                if (!bankAccountInput) {
                    return '';
                }
                var accountLength = bankAccountInput.length;
                var calclength;
                if (accountLength <= 6)
                    calclength = accountLength - 2;
                else
                    calclength = accountLength - 4;
                var value = bankAccountInput.substring(calclength, accountLength);
                var asterix = '';
                for (var i = 0; i < calclength; i++) {
                    asterix = asterix + '*';
                }
                return asterix + value;
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('capitalize', [
        function () {
            return function (input) {
                var inputBool = !!input;
                if (inputBool) {
                    return input.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    });
                }
                else {
                    return '';
                }
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('charReplace', [
        function () {
            return function (input, charReplaced, charReplacer) {
                if (!input) {
                    return '';
                }
                return input.toString().trim().replace(charReplaced, charReplacer);
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('cmsTextInsert', ['cmsTextInsertionService',
        function (cmsTextInsertionService) {
            return function (cmsString, insertionValues) {
                if (!cmsString) {
                    return '';
                }
                return cmsTextInsertionService.insertValues(insertionValues, cmsString);
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('creditCard', [
        function () {
            return function (creditCardInput, creditCardType) {
                if (!creditCardInput) {
                    return '';
                }
                var value = creditCardInput.toString().trim().replace(/\D/g, '');
                value = value.substring(value.length - 4, value.length);
                var maskedCard;
                switch (creditCardType.toLowerCase().replace(' ', '')) {
                    case 'visa': // ****-****-****-####
                    case 'v':
                    case 'mastercard':
                    case 'm':
                    case 'discover':
                    case 'd':
                        maskedCard = '****-****-****-' + value;
                        break;
                    case 'americanexpress': //****-******-*####
                    case 'a':
                        maskedCard = '****-******-*' + value;
                        break;
                    default:
                        break;
                }
                return maskedCard;
            };
        }
    ]);
    angular.module('HCTRAModule').filter('creditCardCode', [
        function () {
            return function (creditCardInput, creditCardCode) {
                if (!creditCardInput) {
                    return '';
                }
                var value = creditCardInput.toString().trim().replace(/\D/g, '');
                value = value.substring(value.length - 4, value.length);
                var maskedCard;
                switch (creditCardCode.toLowerCase()) {
                    case 'v': // ****-****-****-####
                    case 'm':
                    case 'd':
                        maskedCard = '****-****-****-' + value;
                        break;
                    case 'a': //****-******-*####
                        maskedCard = '****-******-*' + value;
                        break;
                    default:
                        break;
                }
                return maskedCard;
            };
        }
    ]);
    //CreditCardType is convereted to enum in Angular
    angular.module('HCTRAModule').filter('creditCardCodeToName', ["creditCardTypes",
        function (creditCardTypes) {
            return function (code) {
                switch (code) {
                    case "V":
                        return creditCardTypes.visa;
                    case "M":
                        return creditCardTypes.mastercard;
                    case "D":
                        return creditCardTypes.discover;
                    case "A":
                        return creditCardTypes.amex;
                }
            };
        }
    ]);
}());
//migrated to Angular
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('driversLicense', [
        function () {
            return function (driversLicenseInput) {
                if (!driversLicenseInput) {
                    return '';
                }
                var value = driversLicenseInput.toString().trim();
                value = value.substring(value.length - 3, value.length);
                var maskedNumber = "***-" + value;
                return maskedNumber;
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('ellipses', ['$filter',
        function ($filter) {
            return function (inString, cutoff) {
                if (!inString) {
                    return '';
                }
                var suffix = '';
                if (inString.length > cutoff) {
                    suffix = '...';
                }
                return "" + $filter('limitTo')(inString, cutoff) + suffix;
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('expDate', [
        function () {
            return function (expDate) {
                if (!expDate) {
                    return '';
                }
                var dateArr = expDate.split("/");
                var monthDigits = dateArr[0].length;
                if (monthDigits == 1)
                    expDate = "0" + expDate;
                return expDate;
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('fileSize', [
        function () {
            return function (fileSizeInput) {
                if (!fileSizeInput || !(!isNaN(parseFloat(fileSizeInput)) && isFinite(fileSizeInput))) {
                    return '';
                }
                var sizeValue = parseFloat(fileSizeInput);
                var kilobytes = sizeValue / 1024;
                var megabytes = kilobytes / 1024;
                var gigabytes = megabytes / 1024;
                var fileSize;
                if (gigabytes >= 1) {
                    fileSize = Math.floor(gigabytes) + ' GB';
                }
                else if (megabytes >= 1) {
                    fileSize = Math.floor(megabytes) + ' MB';
                }
                else if (kilobytes >= 1) {
                    fileSize = Math.floor(kilobytes) + ' KB';
                }
                else {
                    fileSize = sizeValue + ' B';
                }
                return fileSize;
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('homeNewsDate', ['momentDateFilter',
        function (momentDateFilter) {
            return function (dateInput) {
                if (!dateInput) {
                    return '';
                }
                var outDate = momentDateFilter(dateInput, 'MMMM DD[,] YYYY', 'YYYYMMDD[T]HHmmssZ');
                return outDate;
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('insertion', ['cmsTextInsertionService', 'environments', function (cmsTextInsertionService, environments) {
            return function (input, insertionValues, optional) {
                if (!environments.isSitecore) {
                    if (optional) {
                        return input ? cmsTextInsertionService.checkOptional(insertionValues, input) : '';
                    }
                    else {
                        return input ? cmsTextInsertionService.insertValues(insertionValues, input) : '';
                    }
                }
                else {
                    return input || ''; // do not go through insertion service if in Sitecore
                }
            };
        }]);
}());
(function () {
    "use strict";
    angular.module("HCTRAModule").filter("momentDate", ["momentService",
        function (momentService) {
            return function (dateInput, outFormat, inFormat) {
                if (!dateInput) {
                    return "";
                }
                var outDate = momentService.moment(dateInput, inFormat).format(outFormat);
                return outDate;
            };
        }
    ]);
}());
(function () {
    "use strict";
    angular.module("HCTRAModule").filter('secondsToDateTime', [function () { return function (seconds) { return new Date(1970, 0, 1).setSeconds(seconds); }; }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('spaceReplace', [
        function () {
            return function (input, charReplacer) {
                if (!input) {
                    return '';
                }
                if (!charReplacer) {
                    charReplacer = '';
                }
                return input.toString().trim().replace(/\s/g, charReplacer);
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('taxId', [
        function () {
            return function (taxIdInput) {
                if (!taxIdInput) {
                    return '';
                }
                var value = taxIdInput.toString().trim();
                value = value.substring(value.length - 3, value.length);
                var maskedNumber = "******" + value;
                return maskedNumber;
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('telephone', [
        function () {
            return function (telephoneInput) {
                if (!telephoneInput) {
                    return '';
                }
                var value = telephoneInput.toString().trim().replace(/^\+/, '');
                if (value.match(/[^0-9]/)) {
                    return telephoneInput;
                }
                var country, city, number;
                switch (value.length) {
                    case 10: // PPP####### -> (PPP) ###-####
                        country = 1;
                        city = value.slice(0, 3);
                        number = value.slice(3);
                        break;
                    case 11: // +CPPP####### -> C (PPP) ###-#### unless C is 1
                        country = value[0];
                        city = value.slice(1, 4);
                        number = value.slice(4);
                        break;
                    case 12: // +CCCPP####### -> CCC (PP) ###-####
                        country = value.slice(0, 3);
                        city = value.slice(3, 5);
                        number = value.slice(5);
                        break;
                    default:
                        return telephoneInput;
                }
                if (country == 1) {
                    country = "";
                }
                number = number.slice(0, 3) + '-' + number.slice(3);
                return (country + " (" + city + ") " + number).trim();
            };
        }
    ]);
}());
(function () {
    "use strict";
    angular.module("HCTRAModule").
        filter("telephoneWithExt", ["$filter", function ($filter) {
            return function (numberWithExt) {
                if (!numberWithExt) {
                    return "";
                }
                var captureArr = /(.*)(\sext.*)/g.exec(numberWithExt);
                var numberWithoutExt, extension;
                if (angular.isDefined(captureArr) && captureArr !== null) {
                    numberWithoutExt = captureArr[1];
                    extension = captureArr[2];
                }
                else {
                    numberWithoutExt = numberWithExt;
                    extension = "";
                }
                var maskedNumber = $filter("telephone")(numberWithoutExt);
                return maskedNumber + extension;
            };
        }]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('trusted', ['$sce',
        function ($sce) {
            return function (html) {
                if (angular.isString(html)) {
                    if (html.startsWith("https"))
                        return $sce.trustAsResourceUrl(html);
                    return $sce.trustAsHtml(html);
                }
                else {
                    return html;
                }
            };
        }
    ]);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').filter('usPhone', [
        function () {
            return function (telephoneInput) {
                if (!telephoneInput) {
                    return '';
                }
                var value = telephoneInput.toString().trim().replace(/-/g, '');
                if (value.match(/[^0-9]/)) {
                    return telephoneInput;
                }
                var city = value.slice(0, 3);
                var number = value.slice(3);
                var outNumber = city + '-' + number.slice(0, 3) + '-' + number.slice(3);
                return outNumber.trim();
            };
        }
    ]);
}());
(function redirectBrowserOutdated() {
    function isPrivateBrowser() {
        /* Related to Bug 4068 */
        // There needs to be a separate start-up message for "in private" browsing
        //   particularly on iPhone
        try {
            if (!navigator.cookieEnabled) {
                return true;
            }
        }
        catch (e) {
            console.log('Please enable cookie support.');
            return true;
        }
        try {
            if (!sessionStorage) {
                return true;
            }
            sessionStorage.setItem('TEST_KEY', 'TEST_KEY');
            sessionStorage.removeItem('TEST_KEY');
        }
        catch (e) {
            console.log('This browser doesn\'t support session Storage.');
            return true;
        }
        return false;
    }
    if (isPrivateBrowser()) {
        window.location = '/app/indexNoCookieStorage.html';
    }
})();
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var Alert = /** @class */ (function () {
            function Alert() {
            }
            return Alert;
        }());
        Model.Alert = Alert;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var BaseResponse = /** @class */ (function () {
            function BaseResponse() {
                this.errors = [];
                this.alerts = [];
            }
            return BaseResponse;
        }());
        Model.BaseResponse = BaseResponse;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var Country = /** @class */ (function () {
            function Country() {
            }
            return Country;
        }());
        Model.Country = Country;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var IUpDownEnterInterceptorActions = /** @class */ (function () {
            function IUpDownEnterInterceptorActions() {
            }
            return IUpDownEnterInterceptorActions;
        }());
        Model.IUpDownEnterInterceptorActions = IUpDownEnterInterceptorActions;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var FeatureToggleResponse = /** @class */ (function (_super) {
            __extends(FeatureToggleResponse, _super);
            function FeatureToggleResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return FeatureToggleResponse;
        }(Model.BaseResponse));
        Model.FeatureToggleResponse = FeatureToggleResponse;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var Listener = /** @class */ (function () {
            function Listener() {
            }
            return Listener;
        }());
        Model.Listener = Listener;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var CmsBlockMessages = /** @class */ (function () {
            function CmsBlockMessages() {
            }
            return CmsBlockMessages;
        }());
        Model.CmsBlockMessages = CmsBlockMessages;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        // THIS MUST MATCH WITH MaintenanceFeatureEnum.cs
        // todo: duplicated in Angular; remove this when migration is complete
        var MaintenanceFeature;
        (function (MaintenanceFeature) {
            MaintenanceFeature[MaintenanceFeature["MobileApp"] = 0] = "MobileApp";
            MaintenanceFeature[MaintenanceFeature["MobileAppEzTag"] = 1] = "MobileAppEzTag";
            MaintenanceFeature[MaintenanceFeature["Account"] = 2] = "Account";
            MaintenanceFeature[MaintenanceFeature["Violations"] = 3] = "Violations";
            MaintenanceFeature[MaintenanceFeature["MultipleVehicleUpload"] = 4] = "MultipleVehicleUpload";
            MaintenanceFeature[MaintenanceFeature["CA"] = 5] = "CA";
        })(MaintenanceFeature = Model.MaintenanceFeature || (Model.MaintenanceFeature = {}));
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var MaintenanceResponse = /** @class */ (function (_super) {
            __extends(MaintenanceResponse, _super);
            function MaintenanceResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MaintenanceResponse;
        }(Model.BaseResponse));
        Model.MaintenanceResponse = MaintenanceResponse;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var State = /** @class */ (function () {
            function State() {
            }
            return State;
        }());
        Model.State = State;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var StateListResponse = /** @class */ (function (_super) {
            __extends(StateListResponse, _super);
            function StateListResponse() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return StateListResponse;
        }(Model.BaseResponse));
        Model.StateListResponse = StateListResponse;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var CmsDbId = /** @class */ (function () {
            function CmsDbId() {
            }
            return CmsDbId;
        }());
        Model.CmsDbId = CmsDbId;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var CmsState = /** @class */ (function () {
            function CmsState() {
            }
            return CmsState;
        }());
        Model.CmsState = CmsState;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var EndStorefrontSessionRequest = /** @class */ (function () {
            function EndStorefrontSessionRequest() {
            }
            return EndStorefrontSessionRequest;
        }());
        Model.EndStorefrontSessionRequest = EndStorefrontSessionRequest;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var PushStorefrontRequest = /** @class */ (function () {
            function PushStorefrontRequest() {
            }
            return PushStorefrontRequest;
        }());
        Model.PushStorefrontRequest = PushStorefrontRequest;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var SelectedOptions;
        (function (SelectedOptions) {
            SelectedOptions[SelectedOptions["Unknown"] = 0] = "Unknown";
            SelectedOptions[SelectedOptions["MTOLL"] = 1] = "MTOLL";
            SelectedOptions[SelectedOptions["GINV"] = 2] = "GINV";
            SelectedOptions[SelectedOptions["OACC"] = 3] = "OACC";
            SelectedOptions[SelectedOptions["UBI"] = 4] = "UBI";
            SelectedOptions[SelectedOptions["UCI"] = 5] = "UCI";
            SelectedOptions[SelectedOptions["UAC"] = 6] = "UAC";
            SelectedOptions[SelectedOptions["URAMT"] = 7] = "URAMT";
            SelectedOptions[SelectedOptions["ARTAG"] = 8] = "ARTAG";
            SelectedOptions[SelectedOptions["MKPAY"] = 9] = "MKPAY";
            SelectedOptions[SelectedOptions["WEBST"] = 10] = "WEBST";
            SelectedOptions[SelectedOptions["CSR"] = 11] = "CSR";
            //shadow ids
            SelectedOptions[SelectedOptions["SUSACCT"] = 12] = "SUSACCT";
            SelectedOptions[SelectedOptions["SUSVIOL"] = 13] = "SUSVIOL";
            SelectedOptions[SelectedOptions["MISSINFO"] = 14] = "MISSINFO";
            SelectedOptions[SelectedOptions["LOGIN"] = 15] = "LOGIN";
            SelectedOptions[SelectedOptions["FINISHSETUP"] = 16] = "FINISHSETUP";
            SelectedOptions[SelectedOptions["EO"] = 17] = "EO";
        })(SelectedOptions = Model.SelectedOptions || (Model.SelectedOptions = {}));
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var ServiceType;
        (function (ServiceType) {
            ServiceType[ServiceType["Unknown"] = 0] = "Unknown";
            ServiceType[ServiceType["MTOLL"] = 1] = "MTOLL";
            ServiceType[ServiceType["GINV"] = 2] = "GINV";
            ServiceType[ServiceType["OACC"] = 3] = "OACC";
            ServiceType[ServiceType["UBI"] = 4] = "UBI";
            ServiceType[ServiceType["UCI"] = 5] = "UCI";
            ServiceType[ServiceType["UAC"] = 6] = "UAC";
            ServiceType[ServiceType["URAMT"] = 7] = "URAMT";
            ServiceType[ServiceType["ARTAG"] = 8] = "ARTAG";
            ServiceType[ServiceType["MKPAY"] = 9] = "MKPAY";
            ServiceType[ServiceType["WEBST"] = 10] = "WEBST";
            ServiceType[ServiceType["CSR"] = 11] = "CSR";
        })(ServiceType = Model.ServiceType || (Model.ServiceType = {}));
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var StartStorefrontSessionRequest = /** @class */ (function () {
            function StartStorefrontSessionRequest() {
            }
            return StartStorefrontSessionRequest;
        }());
        Model.StartStorefrontSessionRequest = StartStorefrontSessionRequest;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var Status;
        (function (Status) {
            Status[Status["Unknown"] = 0] = "Unknown";
            Status[Status["InProgress"] = 1] = "InProgress";
            Status[Status["Success"] = 2] = "Success";
            Status[Status["Need"] = 3] = "Need";
        })(Status = Model.Status || (Model.Status = {}));
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var StorefrontLogOffType;
        (function (StorefrontLogOffType) {
            StorefrontLogOffType[StorefrontLogOffType["Manual"] = 0] = "Manual";
            StorefrontLogOffType[StorefrontLogOffType["Auto"] = 1] = "Auto";
            StorefrontLogOffType[StorefrontLogOffType["Forced"] = 2] = "Forced";
        })(StorefrontLogOffType = Model.StorefrontLogOffType || (Model.StorefrontLogOffType = {}));
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var StorefrontSurveyRequest = /** @class */ (function () {
            function StorefrontSurveyRequest() {
            }
            return StorefrontSurveyRequest;
        }());
        Model.StorefrontSurveyRequest = StorefrontSurveyRequest;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var StoreLocations;
        (function (StoreLocations) {
            StoreLocations[StoreLocations["UKN"] = 0] = "UKN";
            StoreLocations[StoreLocations["TNO"] = 1] = "TNO";
            StoreLocations[StoreLocations["TWS"] = 2] = "TWS";
            StoreLocations[StoreLocations["TNE"] = 3] = "TNE";
            StoreLocations[StoreLocations["TEA"] = 4] = "TEA";
            StoreLocations[StoreLocations["TSW"] = 5] = "TSW";
            StoreLocations[StoreLocations["DATS"] = 6] = "DATS";
        })(StoreLocations = Model.StoreLocations || (Model.StoreLocations = {}));
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        //defines the template 'keys' workitems can use for their completion templates
        var StorefrontModalTemplatesEnum;
        (function (StorefrontModalTemplatesEnum) {
            StorefrontModalTemplatesEnum[StorefrontModalTemplatesEnum["ThankYouViolationsPayment"] = 0] = "ThankYouViolationsPayment";
            StorefrontModalTemplatesEnum[StorefrontModalTemplatesEnum["ThankYouNewAccount"] = 1] = "ThankYouNewAccount";
            StorefrontModalTemplatesEnum[StorefrontModalTemplatesEnum["VehicalViolationSuspendedAccountMessage"] = 2] = "VehicalViolationSuspendedAccountMessage";
            StorefrontModalTemplatesEnum[StorefrontModalTemplatesEnum["None"] = 3] = "None";
            StorefrontModalTemplatesEnum[StorefrontModalTemplatesEnum["FinishSetup"] = 4] = "FinishSetup";
        })(StorefrontModalTemplatesEnum = Model.StorefrontModalTemplatesEnum || (Model.StorefrontModalTemplatesEnum = {}));
        //defines static definition for a workitem defined in sitecore
        var StorefrontCmsWorkItem = /** @class */ (function () {
            function StorefrontCmsWorkItem() {
            }
            return StorefrontCmsWorkItem;
        }());
        Model.StorefrontCmsWorkItem = StorefrontCmsWorkItem;
        //defines properties of a workitem's active fields
        var WorkItem = /** @class */ (function (_super) {
            __extends(WorkItem, _super);
            function WorkItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return WorkItem;
        }(StorefrontCmsWorkItem));
        Model.WorkItem = WorkItem;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var VantivDto = /** @class */ (function () {
            function VantivDto(lastFour, paypageRegistrationId) {
                this.lastFour = lastFour;
                this.paypageRegistrationId = paypageRegistrationId;
            }
            return VantivDto;
        }());
        Model.VantivDto = VantivDto;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var VantivRequestLog = /** @class */ (function () {
            function VantivRequestLog() {
            }
            return VantivRequestLog;
        }());
        Model.VantivRequestLog = VantivRequestLog;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var VantivResponse = /** @class */ (function () {
            function VantivResponse() {
            }
            return VantivResponse;
        }());
        Model.VantivResponse = VantivResponse;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var VantivResponseLog = /** @class */ (function () {
            function VantivResponseLog() {
            }
            return VantivResponseLog;
        }());
        Model.VantivResponseLog = VantivResponseLog;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var VantivTriPosConfiguration = /** @class */ (function (_super) {
            __extends(VantivTriPosConfiguration, _super);
            function VantivTriPosConfiguration() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return VantivTriPosConfiguration;
        }(HCTRA.Model.BaseResponse));
        Model.VantivTriPosConfiguration = VantivTriPosConfiguration;
        var VantivTriPosStatus = /** @class */ (function (_super) {
            __extends(VantivTriPosStatus, _super);
            function VantivTriPosStatus() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return VantivTriPosStatus;
        }(HCTRA.Model.BaseResponse));
        Model.VantivTriPosStatus = VantivTriPosStatus;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var VantivTriPosRequest = /** @class */ (function () {
            function VantivTriPosRequest() {
            }
            return VantivTriPosRequest;
        }());
        Model.VantivTriPosRequest = VantivTriPosRequest;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var VantivTriPosCreateOmniTokenResponse = /** @class */ (function () {
            function VantivTriPosCreateOmniTokenResponse() {
            }
            return VantivTriPosCreateOmniTokenResponse;
        }());
        Model.VantivTriPosCreateOmniTokenResponse = VantivTriPosCreateOmniTokenResponse;
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
/*** Array.prototype.find ***/
(function () {
    'use strict';
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    if (!Array.prototype.find) {
        Object.defineProperty(Array.prototype, 'find', {
            value: function (predicate) {
                // 1. Let O be ? ToObject(this value).
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }
                var o = Object(this);
                // 2. Let len be ? ToLength(? Get(O, "length")).
                var len = o.length >>> 0;
                // 3. If IsCallable(predicate) is false, throw a TypeError exception.
                if (typeof predicate !== 'function') { // eslint-disable-line angular/typecheck-function
                    throw new TypeError('predicate must be a function');
                }
                // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
                var thisArg = arguments[1];
                // 5. Let k be 0.
                var k = 0;
                // 6. Repeat, while k < len
                while (k < len) {
                    // a. Let Pk be ! ToString(k).
                    // b. Let kValue be ? Get(O, Pk).
                    // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                    // d. If testResult is true, return kValue.
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return kValue;
                    }
                    // e. Increase k by 1.
                    k++;
                }
                // 7. Return undefined.
                return undefined;
            }
        });
    }
}());
/*** Array.prototype.findIndex ***/
(function () {
    'use strict';
    // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
    if (!Array.prototype.findIndex) {
        Object.defineProperty(Array.prototype, 'findIndex', {
            value: function (predicate) {
                // 1. Let O be ? ToObject(this value).
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }
                var o = Object(this);
                // 2. Let len be ? ToLength(? Get(O, "length")).
                var len = o.length >>> 0;
                // 3. If IsCallable(predicate) is false, throw a TypeError exception.
                if (typeof predicate !== 'function') { // eslint-disable-line angular/typecheck-function
                    throw new TypeError('predicate must be a function');
                }
                // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
                var thisArg = arguments[1];
                // 5. Let k be 0.
                var k = 0;
                // 6. Repeat, while k < len
                while (k < len) {
                    // a. Let Pk be ! ToString(k).
                    // b. Let kValue be ? Get(O, Pk).
                    // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                    // d. If testResult is true, return k.
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return k;
                    }
                    // e. Increase k by 1.
                    k++;
                }
                // 7. Return -1.
                return -1;
            }
        });
    }
}());
(function () {
    'use strict';
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function (search, pos) {
            return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
        };
    }
}());
(function () {
    'use strict';
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function (search, this_len) {
            if (this_len === undefined || this_len > this.length) { // eslint-disable-line angular/definedundefined
                this_len = this.length;
            }
            return this.substring(this_len - search.length, this_len) === search;
        };
    }
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        //this provider allows other angularjs providers to register async actions
        //that Angular will wait to complete before completing bootstrapping.
        var AsyncActionsProvider = /** @class */ (function () {
            function AsyncActionsProvider() {
                this.$get = ['$q', function ($q) {
                        var promises = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            promises[_i - 1] = arguments[_i];
                        }
                        return $q.all(promises);
                    }];
            }
            //register a provider; the provider must define it's $get method to return a promise        
            AsyncActionsProvider.prototype.register = function (asyncActionProviderName) {
                //adds to resolution array
                this.$get.splice(-1, 0, asyncActionProviderName);
            };
            return AsyncActionsProvider;
        }());
        Service.AsyncActionsProvider = AsyncActionsProvider;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    angular.module('HCTRAModule').provider('asyncActions', HCTRA.Service.AsyncActionsProvider);
})();
(function () {
    'use strict';
    //This follows http://www.bennadel.com/blog/2542-logging-client-side-errors-with-angularjs-and-stacktrace-js.htm
    // By default, AngularJS will catch errors and log them to
    // the Console. We want to keep that behavior; however, we
    // want to intercept it so that we can also log the errors
    // to the server for later analysis.
    angular.module('HCTRAModule').provider("$exceptionHandler", {
        $get: ["errorLogService", function (errorLogService) {
                return (errorLogService);
            }]
    });
}());
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
(function () {
    'use strict';
    angular.module('HCTRAModule').provider('router', [
        '$stateProvider',
        'routes', 'stateNames',
        'USER_ROLES',
        'quickLinkNav',
        'environmentConfig',
        function RouterProvider($stateProvider, routes, stateNames, USER_ROLES, quickLinkNav, environmentConfig) {
            //TODO: these resolves are duplicated in Angular. delete these once all routing is migrated over    
            var authResolve = ['AuthResolver', "$transition$", function (AuthResolver, $transition$) {
                    return AuthResolver.resolve($transition$.$to().data.authorizedRoles);
                }];
            var maintenanceResolve = ['maintenanceService', "$transition$", function (maintenanceService, $transition$) {
                    return maintenanceService.resolveMaintenanceStatus($transition$.$to().data.maintenanceFeaturePool, $transition$.$from().name);
                }];
            var cmsResolver = function (options) {
                //set default selector. selector selects which property to deserialize from.
                var selector = (options && options.selector) || (function (r) { return angular.fromJson(r.cmsResponse); });
                //set default lookup. lookup is a map function that chooses how to read from the cms settings obj.
                var lookup = (options && options.lookup) || (function (state) { return state["cms"]; });
                //set merge params option. mergeParams allows merging URL parameters defined in the parameters property to
                //be merged directly in to the base object, removing the need to parse this field later.
                var mergeParams = options && options.mergeParams;
                return ['genericRepo', '$q', '$transition$', 'stringUtilsService', function (genericRepo, $q, $transition$, stringUtilsService) {
                        var spreadAndMerge = function (obj) {
                            var Children = obj.Children, baseObj = __rest(obj, ["Children"]);
                            return __assign({}, baseObj, stringUtilsService.getParameterObject(baseObj.Parameters), { Children: (Children || []).map(spreadAndMerge) });
                        };
                        var request = lookup($transition$.$to());
                        if (request) {
                            //send request for cms data
                            return genericRepo.dataFactory
                                .getCmsPageById(request)
                                .then(selector) //map to the desired data
                                .then(mergeParams ? spreadAndMerge : function (i) { return i; }); //merge data or return data
                        }
                        return $q.resolve(null);
                    }];
            };
            var resolveUpdateBillingInformation = ['manageBillingInformationResolver', function (manageBillingInformationResolver) {
                    return manageBillingInformationResolver.resolveUpdateBillingInformation();
                }];
            //HCTRA.ORG defined routes.
            function createRoutes() {
                var urls = routes;
                var states = stateNames;
                var userRoles = USER_ROLES;
                var t = [
                    {
                        name: states.EZTAGExpressApp,
                        config: {
                            url: urls.cmsEZTAGExpressAppPage,
                            settings: {
                                isHybrid: true
                            },
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            quickLink: {
                                nav: quickLinkNav.EZTAGExpressApp,
                                content: 'EZ TAG Express App',
                                hideWhenAuthenticated: true,
                                isCmsUrl: true
                            },
                            resolve: {
                                authResolve: authResolve
                            }
                        }
                    },
                    {
                        name: states.vehicleEzTags,
                        config: {
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            settings: {
                                navlevel: 1,
                                parent: states.eZTagAccount,
                                nav: 4,
                                content: 'Vehicles and EZ TAGs',
                                defaultOpenId: 'vehicleEzTags',
                                isHybrid: true
                            }
                        }
                    },
                    {
                        name: states.travelTools,
                        config: {
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            settings: {
                                navlevel: 0,
                                nav: 6,
                                content: "<img src='../Content/icons/menu/hm_travel_tools.png' alt='Click for travel tools'>   Travel Tools",
                                isHybrid: true
                            }
                        }
                    }, {
                        name: states.CALLROADSIDEASSISTANCE,
                        config: {
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            settings: {
                                navlevel: 0,
                                nav: 7,
                                content: "<img src='../Content/icons/menu/hm_roadside_assistance.png' alt='Click to call roadside assistance'>   Call Roadside Assistance",
                                phone: 'tel: ' + urls.roadSideAssistPhoneNumber,
                                isHybrid: true
                            }
                        }
                    }, {
                        name: states.validatePrimaryEmail,
                        config: {
                            url: urls.validatePrimaryEmail,
                            controller: 'ValidatePrimaryEmailController',
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            resolve: {
                                authResolve: authResolve
                            },
                            settings: {
                                isHybrid: true
                            }
                        }
                    }, {
                        name: states.sendEmailConfirmation,
                        config: {
                            url: urls.sendEmailConfirmation,
                            controller: 'SendEmailConfirmationController',
                            template: '<div></div>',
                            data: {
                                authorizedRoles: [userRoles.active, userRoles.pendingClosure]
                            },
                            resolve: {
                                authResolve: authResolve
                            },
                            settings: {
                                isHybrid: true
                            }
                        }
                    },
                    {
                        name: states.newsArchiveChild,
                        config: {
                            url: urls.archiveUrlPattern,
                            controller: 'SearchArticleChildController',
                            title: 'News Archive Child',
                            params: {
                                category: null,
                                page: {
                                    value: null,
                                    squash: true
                                },
                                size: {
                                    value: null,
                                    squash: true
                                }
                            },
                            template: "<div ui-view></div>",
                            settings: {
                                isHybrid: true
                            },
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            resolve: {
                                authResolve: authResolve
                            },
                            cms: {
                                pageTitleId: urls.newsArchiveCmsTitleId,
                                pageTitleFields: "Title",
                                categoriesId: urls.newsArchiveCmsCategoriesAllId,
                                categoriesFolderId: urls.newsArchiveCmsCategoriesFolderId,
                                categoriesFields: "Title,QueryId,DisplayName,ItemPath,ItemName",
                                titleType: "News"
                            }
                        }
                    }, {
                        name: states.closures,
                        config: {
                            url: urls.closures,
                            title: 'Closures',
                            settings: {
                                nav: 2,
                                parent: states.travelTools,
                                content: "Closures",
                                isHybrid: true
                            },
                            data: {
                                authorizedRoles: [userRoles.anonymous]
                            },
                            resolve: {
                                authResolve: authResolve
                            },
                            cms: {},
                            quickLink: {
                                nav: quickLinkNav.closures,
                                content: 'Closures',
                                external: true
                            }
                        }
                    }
                ];
                var manageBillingInformationRoutes = (function () { return [
                    "editCreditCardInformation",
                    "editBankAccountInformation",
                    "editCreditCardAddress",
                    "addCreditCardInformation",
                    "addBankAccountInformation",
                    "makePaymentMethodPrimary"
                    //,
                    //"deletePaymentMethod"
                ]; })()
                    .map(function (state) { return ({
                    name: states[state],
                    config: {
                        url: urls[state],
                        template: '',
                        controller: "ManageBillingInformationSubController",
                        title: states[state].replace(".", " -").split(/(?=[A-Z])/).join(" "),
                        settings: {
                            isHybrid: true
                        },
                        data: {
                            authorizedRoles: [userRoles.active]
                        },
                        quickLink: {},
                        resolve: {
                            authResolve: authResolve,
                            resolveUpdateBillingInformation: resolveUpdateBillingInformation
                        }
                    }
                }); });
                var storefrontRoutes = [
                    {
                        name: states.storefrontSelection,
                        config: {
                            url: urls.storefrontSelection,
                            views: {
                                "storefront": {
                                    templateUrl: "/app/templates/storefront/StorefrontOptionSelectionTemplate.html",
                                    controller: 'StorefrontOptionSelectionController'
                                }
                            },
                            settings: {},
                            data: {
                                authorizedRoles: [userRoles.anonymous],
                                maintenanceFeaturePool: [HCTRA.Model.MaintenanceFeature.Account]
                            },
                            quickLink: {},
                            resolve: {
                                authResolve: authResolve,
                                maintenanceResolve: maintenanceResolve
                            },
                            cms: {
                                taskSelectionPageId: urls.storefrontTaskSelectionPageId,
                                hoverIconId: urls.storefrontHoverIconId,
                                defaultIconId: urls.storefrontDefaultIconId,
                                selectedIconId: urls.storefrontSelectedIconId
                            }
                        }
                    },
                    {
                        name: states.storefrontSurvey,
                        config: {
                            url: urls.storefrontSurvey,
                            views: {
                                "storefront": {
                                    templateUrl: '/app/templates/storefront/StorefrontSurveyTemplate.html',
                                    controller: 'StorefrontSurveyController'
                                }
                            },
                            settings: {},
                            data: {
                                authorizedRoles: [userRoles.anonymous],
                                maintenanceFeaturePool: [HCTRA.Model.MaintenanceFeature.Account]
                            },
                            quickLink: {},
                            resolve: {
                                authResolve: authResolve,
                                maintenanceResolve: maintenanceResolve
                            },
                            cms: {
                                surveyId: urls.storefrontSurveyId,
                                surveyFields: '',
                                surveyThankYouModalId: urls.storefrontThankYouSurveyModal,
                                surveyThankYouModalFields: ''
                            }
                        }
                    }
                ];
                var storefrontVersion = environmentConfig.storefrontConfigs.version || '1.0.0';
                var rawRoutes = t
                    .concat((+storefrontVersion.split('.')[0]) > 1 ? [] : storefrontRoutes)
                    .concat(manageBillingInformationRoutes);
                rawRoutes.forEach(function (r) {
                    r.config['angularjs'] = true;
                    $stateProvider.state(r.name, r.config);
                });
                return rawRoutes;
            }
            //define provider factory 'get' method
            this.$get = [function () {
                    return createRoutes();
                }
            ];
        }
    ]);
})();
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var DynamicRoutesAsyncActionProvider = /** @class */ (function () {
            function DynamicRoutesAsyncActionProvider(asyncActionsProvider) {
                this.$get = ['urlManagerService', 'templateCacheHelper', 'linkLookupService', 'responseErrorService', '$state',
                    function (urlManagerService, templateCacheHelper, linkLookupService, responseErrorService, $state) {
                        if (!this.readyPromise) {
                            var authResolve_1 = ['AuthResolver', "$transition$", function (AuthResolver, $transition$) {
                                    return AuthResolver.resolve($transition$.$to().data.authorizedRoles);
                                }];
                            this.readyPromise = urlManagerService
                                .getStartingRoutes()
                                .then(function (response) {
                                if (!response.errors && response.states.length !== 0) {
                                    response.states.forEach(function (element) {
                                        element.config.resolve.authResolve = authResolve_1;
                                        element.config.settings = __assign({}, (element.config.settings || {}), { isHybrid: true });
                                        var newState = __assign({}, element.config, { name: element.name, angularjs: true });
                                        $state.router.stateRegistry.register(newState);
                                    });
                                    linkLookupService.cmsPathDictionary = response.articleLookupByPath;
                                    linkLookupService.cmsIdDictionary = response.articleLookupById;
                                }
                                else {
                                    responseErrorService.displayErrorsFromResponse(response, true);
                                }
                            })
                                .then(function () {
                                templateCacheHelper.constructUncachedList();
                            });
                        }
                        return this.readyPromise;
                    }];
                asyncActionsProvider.register(DynamicRoutesAsyncActionProvider.angularJsRegistrationName);
            }
            DynamicRoutesAsyncActionProvider.$inject = ['asyncActionsProvider'];
            DynamicRoutesAsyncActionProvider.angularJsRegistrationName = 'routerBootstrapReady';
            return DynamicRoutesAsyncActionProvider;
        }());
        Service.DynamicRoutesAsyncActionProvider = DynamicRoutesAsyncActionProvider;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    angular.module('HCTRAModule')
        .provider(HCTRA.Service.DynamicRoutesAsyncActionProvider.angularJsRegistrationName, HCTRA.Service.DynamicRoutesAsyncActionProvider);
})();
(function () {
    'use strict';
    angular.module('HCTRAModule').provider('urlAlias', function () {
        var aliases = function () {
            return [
                { url: '/about_locations', redirectTo: '/HelpAndSupport#customer-service' },
                { url: '/about_locations/', redirectTo: '/HelpAndSupport#customer-service' },
                // 
                { url: '/FrequentlyAskedQuestions/:param/:param2/:param3?', redirectTo: '/FAQ/:param/:param2/:param3' },
                { url: '/FrequentlyAskedQuestions/:param/:param2?', redirectTo: '/FAQ/:param/:param2' },
                { url: '/FrequentlyAskedQuestions/:param?', redirectTo: '/FAQ/:param' },
                { url: '/FrequentlyAskedQuestions', redirectTo: '/FAQ/' },
                //
                { url: '/AccountSummary', redirectTo: '/AccountOverview' },
                { url: '/AccountSummary/', redirectTo: '/AccountOverview' }
            ];
        };
        return {
            $get: aliases
        };
    });
})();
//Migrated
//(function () {
//    "use strict";
//
//    angular.module("HCTRAModule").factory("stateChangeStartChannel", ["$rootScope","$transitions",
//		function ($rootScope,$transitions) {
//
//		    //event is published by UI-Router
//
//		    // subscribe to event		    
//		    var onStateChangeStart = function ($scope, handler) {
//		        var destroyStateChangeStart = $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, options) {
//		            handler(event, toState, toParams, fromState, options);
//		        });
//
//		        $rootScope.$on("$destroy", function () {
//		            destroyStateChangeStart();
//		        });
//
//		        return destroyStateChangeStart;
//		    };
//
//		    return {
//		        onStateChangeStart: onStateChangeStart
//		    };
//		}]);
//}());
//
////http://eburley.github.io/2013/01/31/angularjs-watch-pub-sub-best-practices.html
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var ApiDateStringToJsObjectService = /** @class */ (function () {
            function ApiDateStringToJsObjectService($filter) {
                var _this = this;
                this.$filter = $filter;
                this.convertApiDateToJsObject = function (records, propIn, propOut) {
                    angular.forEach(records, function (record) {
                        if (angular.isString(record[propIn])) {
                            record[propOut] = _this.$filter("dateWithTimeZone")(record[propIn], "dateTimeFull");
                        }
                    });
                    return records;
                };
            }
            ApiDateStringToJsObjectService.$inject = ["$filter"];
            return ApiDateStringToJsObjectService;
        }());
        Service.ApiDateStringToJsObjectService = ApiDateStringToJsObjectService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("apiDateStringToJsObjectService", HCTRA.Service.ApiDateStringToJsObjectService);
})();
(function () {
    "use strict";
    angular.module('HCTRAModule').factory("applicationLoggingService", ["$log", "loggingService",
        function ($log, loggingService) {
            var log = function (message, type) {
                // preserve default behaviour
                $log.log.apply($log, arguments);
                loggingService.logMessage(message, null, type);
            };
            return ({
                error: function (message) {
                    log(message, "error");
                },
                debug: function (message) {
                    log(message, "debug");
                },
                interceptorError: function (message) {
                    loggingService.logMessage(message, null, "InterceptorError");
                }
            });
        }
    ]);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var ArrayUtilService = /** @class */ (function () {
            function ArrayUtilService() {
                this.intersect = function (arr1, arr2, predicateFunc) {
                    return arr1.filter(function (elem1) { return arr2.some(function (elem2) { return predicateFunc(elem1, elem2); }); });
                };
                this.difference = function (arr1, arr2, predicateFunc) {
                    return arr1.filter(function (elem1) { return !arr2.some(function (elem2) { return predicateFunc(elem1, elem2); }); });
                };
                this.find = function (inArr, predicateFunc) {
                    for (var _i = 0, inArr_1 = inArr; _i < inArr_1.length; _i++) {
                        var item = inArr_1[_i];
                        if (predicateFunc(item)) {
                            return item;
                        }
                    }
                };
                this.toDictionary = function (inArr, cb) {
                    var outObj = {};
                    for (var _i = 0, inArr_2 = inArr; _i < inArr_2.length; _i++) {
                        var elem = inArr_2[_i];
                        outObj[cb(elem).toString()] = elem;
                    }
                    return outObj;
                };
            }
            return ArrayUtilService;
        }());
        Service.ArrayUtilService = ArrayUtilService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').service('arrayUtilService', HCTRA.Service.ArrayUtilService);
}());
(function () {
    "use strict";
    angular.module("HCTRAModule").factory("bowserService", ["bowserjs",
        function (bowserjs) {
            var bowserFactory = {};
            bowserFactory.bowser = bowserjs;
            bowserFactory.getUserBrowserInfo = function () {
                var browserSummary = "";
                for (var property in bowserjs) {
                    // eslint-disable-next-line no-prototype-builtins
                    if (bowserjs.hasOwnProperty(property)) {
                        if (!angular.isFunction(bowserjs[property])) {
                            browserSummary = browserSummary + property + "=" + bowserjs[property] + "; ";
                        }
                    }
                }
                return browserSummary;
            };
            return bowserFactory;
        }]);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var BroadcastSubmissionService = /** @class */ (function () {
            function BroadcastSubmissionService($q, $rootScope) {
                var _this = this;
                this.$q = $q;
                this.$rootScope = $rootScope;
                this.broadcast = function (submissionIdentifier) {
                    var deferred = _this.$q.defer();
                    _this.$rootScope.$broadcast(submissionIdentifier, deferred);
                    return deferred.promise;
                };
            }
            BroadcastSubmissionService.$inject = ["$q", "$rootScope"];
            return BroadcastSubmissionService;
        }());
        Service.BroadcastSubmissionService = BroadcastSubmissionService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').service('broadcastSubmissionService', HCTRA.Service.BroadcastSubmissionService);
})();
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('changePaymentMethodService', ['responseErrorService', '$filter',
        function (responseErrorService, $filter) {
            var direction = function (first, second) {
                if (first > second) {
                    return "decrease";
                }
                else {
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
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('conditionalStylesService', [
        function () {
            var factory = {};
            factory.formWidth = function (isHidden) {
                return isHidden ? "" : "form-entry-width";
            };
            return factory;
        }
    ]);
}());
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
/* eslint-disable no-unused-vars */
var HCTRA;
(function (HCTRA) {
    var Model;
    (function (Model) {
        var CreditCardInputStrategyEnum;
        (function (CreditCardInputStrategyEnum) {
            CreditCardInputStrategyEnum[CreditCardInputStrategyEnum["Tripos"] = 0] = "Tripos";
            CreditCardInputStrategyEnum[CreditCardInputStrategyEnum["Iframe"] = 1] = "Iframe";
            CreditCardInputStrategyEnum[CreditCardInputStrategyEnum["Litel"] = 2] = "Litel";
        })(CreditCardInputStrategyEnum = Model.CreditCardInputStrategyEnum || (Model.CreditCardInputStrategyEnum = {}));
        var CreditCardPromptEnum;
        (function (CreditCardPromptEnum) {
            CreditCardPromptEnum[CreditCardPromptEnum["Wait"] = 0] = "Wait";
            CreditCardPromptEnum[CreditCardPromptEnum["Success"] = 1] = "Success";
            CreditCardPromptEnum[CreditCardPromptEnum["Failure"] = 2] = "Failure";
        })(CreditCardPromptEnum = Model.CreditCardPromptEnum || (Model.CreditCardPromptEnum = {}));
    })(Model = HCTRA.Model || (HCTRA.Model = {}));
})(HCTRA || (HCTRA = {}));
/* eslint-enable no-unused-vars */ 
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var CreditCardInputService = /** @class */ (function () {
            function CreditCardInputService($q, vantivIFrameStrategy, litelStrategy, triPosStrategy) {
                var _this = this;
                this.$q = $q;
                this.vantivIFrameStrategy = vantivIFrameStrategy;
                this.litelStrategy = litelStrategy;
                this.triPosStrategy = triPosStrategy;
                this.getStrategy = function ($scope, strategies) {
                    return _this.$q(function (resolve, reject) {
                        var strat = strategies[0];
                        if (strat) {
                            strat
                                .canUse($scope)
                                .then(function () { return strat; })
                                .catch(function () { return _this.getStrategy($scope, strategies.slice(1)); })
                                .then(resolve, reject);
                        }
                        else {
                            reject();
                        }
                    });
                };
                //don't ever ever change this. order is super important!!!
                this.chainOfResponsibility = [triPosStrategy, vantivIFrameStrategy, litelStrategy];
            }
            CreditCardInputService.prototype.setup = function ($scope) {
                var _this = this;
                return this.getStrategy($scope, this.chainOfResponsibility)
                    .then(function (strategy) { return (_this.seletedInputStrategy = strategy).setup($scope); })
                    .then(function () { return $scope.autoUpdate && _this.seletedInputStrategy.update($scope); });
            };
            CreditCardInputService.prototype.update = function ($scope) {
                return this.seletedInputStrategy ? this.seletedInputStrategy.update($scope) : this.$q.reject();
            };
            CreditCardInputService.prototype.submit = function ($scope) {
                return this.seletedInputStrategy ? this.seletedInputStrategy.submit($scope) : this.$q.reject();
            };
            CreditCardInputService.$inject = ["$q", "vantivIFrameStrategy", "litelStrategy", "triPosStrategy"];
            return CreditCardInputService;
        }());
        Service.CreditCardInputService = CreditCardInputService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule")
        .service("creditCardInputService", HCTRA.Service.CreditCardInputService);
})();
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var LitelStrategy = /** @class */ (function () {
            function LitelStrategy(pciInfoService, vantivPaymentService, creditCardConversionService, $q) {
                this.pciInfoService = pciInfoService;
                this.vantivPaymentService = vantivPaymentService;
                this.creditCardConversionService = creditCardConversionService;
                this.$q = $q;
            }
            LitelStrategy.prototype.canUse = function () {
                return this.$q(function (resolve) { return resolve(); });
            };
            LitelStrategy.prototype.setup = function ($scope) {
                return this.$q(function (res) {
                    angular.extend($scope, {
                        visaImage: "../../../Content/icons/visa.png",
                        mastercardImage: "../../../Content/icons/mastercard.png",
                        amexImage: "../../../Content/icons/amex.png",
                        discoverImage: "../../../Content/icons/discover.png",
                        strategyUsed: HCTRA.Model.CreditCardInputStrategyEnum.Litel,
                        creditCardNameDisabled: false,
                        creditCardNumberDisabled: false,
                        creditCardExpYearDisabled: false,
                        creditCardExpMothDisabled: false
                    });
                    var unwatchCreditCard = $scope.$watch("creditCard", function (creditCard) {
                        if (!creditCard) {
                            return;
                        }
                        if ($scope.creditCard.expMonth === null) {
                            $scope.creditCard.expMonth = 1;
                            $scope.creditCard.selectedYear = new Date().getFullYear();
                        }
                        unwatchCreditCard();
                    });
                    $scope.$watch("creditCard.cardCode", function (cardCode) {
                        if (cardCode) {
                            $scope.isVisa = $scope.creditCard.cardCode === "V";
                            $scope.isMastercard = $scope.creditCard.cardCode === "M";
                            $scope.isDiscover = $scope.creditCard.cardCode === "D";
                            $scope.isAmex = $scope.creditCard.cardCode === "A";
                        }
                    });
                    if ($scope.creditCard.cardNbr) {
                        $scope.creditCard.cardNbr = "************-" + $scope.creditCard.cardNbr.slice(-4);
                    }
                    res();
                });
            };
            LitelStrategy.prototype.update = function () {
                return this.$q(function (resolve) { return resolve(); });
            };
            LitelStrategy.prototype.submit = function ($scope) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    if (_this.pciInfoService.isMasked($scope.creditCard.cardNbr)) {
                        resolve();
                    }
                    else {
                        _this.vantivPaymentService.vantivPay($scope.creditCard.cardNbr)
                            .then(function (response) {
                            angular.extend($scope.creditCard, {
                                cardNbr: "************-" + response.lastFour,
                                paypageRegistrationId: response.paypageRegistrationId,
                                cardTypeDisplay: _this.creditCardConversionService.convertCodeToString($scope.creditCard.cardCode),
                                isNewCard: true
                            });
                            resolve();
                        })
                            .catch(reject);
                    }
                });
            };
            LitelStrategy.$inject = ["pciInfoService", "vantivPaymentService", "creditCardConversionService", "$q"];
            return LitelStrategy;
        }());
        Service.LitelStrategy = LitelStrategy;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule")
        .service("litelStrategy", HCTRA.Service.LitelStrategy);
})();
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var TriPosStrategy = /** @class */ (function () {
            function TriPosStrategy(vantivPaymentService, $q, storefrontUtilityService, modalService, responseErrorService, genericRepo, $timeout, routes, environmentConfig, creditCardConversionService) {
                this.vantivPaymentService = vantivPaymentService;
                this.$q = $q;
                this.storefrontUtilityService = storefrontUtilityService;
                this.modalService = modalService;
                this.responseErrorService = responseErrorService;
                this.genericRepo = genericRepo;
                this.$timeout = $timeout;
                this.routes = routes;
                this.environmentConfig = environmentConfig;
                this.creditCardConversionService = creditCardConversionService;
            }
            TriPosStrategy.prototype.canUse = function () {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    //this logic will need to be updated if we allow cc input devices at machines other than kiosks
                    if (!_this.storefrontUtilityService.isRunningAsKiosk) {
                        reject();
                        return;
                    }
                    //if this is a default config machine
                    if (_this.storefrontUtilityService.machineName === _this.storefrontUtilityService.defaultMachineName) {
                        var config = _this.environmentConfig.storefrontConfigs.KioskConfigs[_this.storefrontUtilityService.defaultMachineName];
                        _this.isActive = false;
                        _this.allowCcInput = config.AllowCreditCardInputWhenDeviceDisabled;
                        _this.getCardNameFromTriPos = false;
                        _this.allowCcInput ? reject() : resolve();
                        return;
                    }
                    _this.genericRepo.dataFactory
                        .TriPosStatus(_this.storefrontUtilityService.machineName || _this.environmentConfig.storefrontConfigs.DefaultMachineName)
                        .then(function (vantiveConfig) {
                        _this.isActive = vantiveConfig.active;
                        _this.allowCcInput = vantiveConfig.allowCreditCardInputWhenDeviceDisabled;
                        _this.getCardNameFromTriPos = vantiveConfig.getCardNameFromTriPos;
                        !vantiveConfig.active && vantiveConfig.allowCreditCardInputWhenDeviceDisabled ? reject() : resolve();
                    });
                });
            };
            TriPosStrategy.prototype.setup = function ($scope) {
                var _this = this;
                return this.$q(function (res) {
                    angular.extend($scope, {
                        strategyUsed: HCTRA.Model.CreditCardInputStrategyEnum.Tripos,
                        creditCardNameDisabled: false,
                        creditCardNumberDisabled: true,
                        creditCardExpYearDisabled: true,
                        creditCardExpMothDisabled: true,
                        editPencilId: _this.routes.triposEditCreditCardId,
                        useExistingCard: true,
                        detectedCreditCardNameChange: false
                    });
                    //detects pre-swipe change in name to not allow tripos response to override it
                    var cancelNameWatcher = $scope.$watch("creditCard.nameOnCard", function (newValue, oldValue) {
                        if (newValue !== oldValue) {
                            $scope.detectedCreditCardNameChange = true;
                            cancelNameWatcher();
                        }
                    });
                    //detect change in card number to signal card has changed to the scope
                    var cancelCcNumberWatcher = $scope.$watch("creditCard.cardNbr", function (newValue, oldValue) {
                        if (newValue !== oldValue) {
                            $scope.useExistingCard = false;
                            cancelCcNumberWatcher();
                        }
                    });
                    if (!_this.isActive && !_this.allowCcInput) {
                        _this.responseErrorService.displayToast("Credit card input is disabled", "warning", false);
                    }
                    _this.inUse = false;
                    res();
                });
            };
            TriPosStrategy.prototype.update = function ($scope) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    if (!_this.isActive) {
                        _this.inUse = false;
                        _this.responseErrorService.displayToast("Terminal cannot accept credit card info at this time", "warning", false);
                        reject();
                        return;
                    }
                    if (_this.inUse) {
                        reject();
                        return;
                    }
                    _this.inUse = true;
                    var modalTimeoutPromise = null;
                    var modalScope = _this.modalService.newModalScope({
                        readerState: HCTRA.Model.CreditCardPromptEnum.Wait,
                        successId: _this.routes.triposCreditCardSwipeSuccessId,
                        failureId: _this.routes.triposCreditCardSwipeFailId,
                        promptId: _this.routes.triposCreditCardSwipePromptId,
                        promptAltId: _this.routes.triposCreditCardSwipePromptAltId,
                        creditCardPromptStates: HCTRA.Model.CreditCardPromptEnum,
                        close: function () {
                            _this.inUse = false;
                            if (modalTimeoutPromise) {
                                _this.$timeout.cancel(modalTimeoutPromise);
                                modalTimeoutPromise = null;
                            }
                            _this.modalService.closeByName(_this.modalService.modalNames.CreditCardPrompt);
                        },
                        tryAgain: function () {
                            _this.inUse = false;
                            _this.modalService.closeByName(_this.modalService.modalNames.CreditCardPrompt);
                            _this.$timeout(function () {
                                _this.update($scope);
                            }, 250);
                        }
                    });
                    _this.modalService.creditCardPromptModal(modalScope);
                    _this.genericRepo.dataFactory
                        .TriPosConfiguration(_this.storefrontUtilityService.machineName ||
                        _this.environmentConfig.storefrontConfigs.DefaultMachineName)
                        .then(function (config) { return _this.vantivPaymentService.getTokenizedCreditCardData(config, false); })
                        .then(function (response) {
                        //if modal is closed before swipe is completed, throw away result
                        if (!_this.modalService.isModalOpen(_this.modalService.modalNames.CreditCardPrompt)) {
                            resolve();
                            return;
                        }
                        if (response.cancelledByUser) {
                            resolve();
                            if (modalTimeoutPromise) {
                                _this.$timeout.cancel(modalTimeoutPromise);
                                modalTimeoutPromise = null;
                            }
                            _this.modalService.closeByName(_this.modalService.modalNames.CreditCardPrompt);
                            return;
                        }
                        modalScope.readerState = HCTRA.Model.CreditCardPromptEnum.Success;
                        //splits the lastname/firstname input from vantiv and reverses order
                        var cardName = _this.getCardNameFromTriPos
                            ? (response.cardHolderName || "").split(/[\/\\]+/).reverse().join(" ")
                            : "";
                        angular.extend($scope.creditCard, {
                            omniToken: response.tokenId,
                            cardNbr: response.accountNumber,
                            cardCode: response.cardLogo.toUpperCase().slice(0, 1),
                            cardTypeDisplay: _this.creditCardConversionService.convertCodeToString(response.cardLogo.toUpperCase().slice(0, 1)),
                            isNewCard: true,
                            expMonth: +response.expirationMonth,
                            selectedYear: (response.expirationYear.length === 2 ? '20' : '').concat('' + response.expirationYear)
                        });
                        if (!$scope.detectedCreditCardNameChange) {
                            $scope.creditCard.nameOnCard = cardName;
                        }
                        //$scope.creditCardNameDisabled = (response.entryMode || "").toLowerCase() !== "keyed";
                        resolve();
                        modalTimeoutPromise =
                            _this.$timeout(function () { return _this.modalService.closeByName(_this.modalService.modalNames.CreditCardPrompt); }, _this.storefrontUtilityService.delay.long);
                    })
                        .catch(function (e) {
                        modalScope.readerState = HCTRA.Model.CreditCardPromptEnum.Failure;
                        reject();
                    })
                        .finally(function () { return _this.inUse = false; });
                });
            };
            TriPosStrategy.prototype.submit = function () {
                var _this = this;
                return this.$q(function (resolve, reject) { return _this.isActive ? resolve() : reject("terminal cannot accept credit card info at this time"); });
            };
            TriPosStrategy.$inject = ["vantivPaymentService", "$q", "StorefrontUtilityService", "modalService", "responseErrorService", "genericRepo", "$timeout", "routes", "environmentConfig", "creditCardConversionService"];
            return TriPosStrategy;
        }());
        Service.TriPosStrategy = TriPosStrategy;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule")
        .service("triPosStrategy", HCTRA.Service.TriPosStrategy);
})();
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var VantivIFrameStrategy = /** @class */ (function () {
            function VantivIFrameStrategy($interval, $document, creditCardConversionService, $filter, environmentConfig, $q, iFrameService) {
                this.$interval = $interval;
                this.$document = $document;
                this.creditCardConversionService = creditCardConversionService;
                this.$filter = $filter;
                this.environmentConfig = environmentConfig;
                this.$q = $q;
                this.iFrameService = iFrameService;
                this.iframeInstance = iFrameService.getIFrameServiceInstance();
            }
            VantivIFrameStrategy.prototype.loadNewIframe = function ($scope) {
                $scope.creditCard.cardNbr = $scope.creditCard.cardNbr ? $scope.creditCard.cardNbr.slice(-4) : "";
                this.iframePlaceholder = $scope.creditCard.cardNbr ? this.$filter('creditCard')($scope.creditCard.cardNbr, $scope.creditCard.cardCode) : "";
                this.iframeInstance.loadIFrame("focusedplaceholdertransparent", "51", $scope.addSuffix("payframe"), this.iframePlaceholder);
            };
            VantivIFrameStrategy.prototype.canUse = function () {
                var _this = this;
                return this.$q(function (resolve, reject) { return _this.environmentConfig.vantivConfig.IFrameEnabled ? resolve() : reject(); });
            };
            VantivIFrameStrategy.prototype.setup = function ($scope) {
                var _this = this;
                return this.$q(function (res) {
                    angular.extend($scope, {
                        strategyUsed: HCTRA.Model.CreditCardInputStrategyEnum.Iframe,
                        creditCardNameDisabled: false,
                        creditCardNumberDisabled: false,
                        creditCardExpYearDisabled: false,
                        creditCardExpMothDisabled: false
                    });
                    var unwatchCreditCard = $scope.$watch("creditCard", function (creditCard) {
                        if (!creditCard) {
                            return;
                        }
                        var emptyCreditCardCheck = _this.$interval(function () {
                            return _this.iframePlaceholder && _this.iframeInstance.creditCardFieldEmpty()
                                .then(function (isEmpty) { return $scope.useExistingCard = isEmpty; });
                        }, 100);
                        $scope.$on("$destroy", function () {
                            _this.$interval.cancel(emptyCreditCardCheck);
                        });
                        var unwatch = $scope.$watch(function () {
                            if (_this.$document[0].getElementById($scope.addSuffix("payframe"))) {
                                _this.loadNewIframe($scope);
                                unwatch();
                            }
                            return true;
                        });
                        if ($scope.creditCard.expMonth === null) {
                            $scope.creditCard.expMonth = 1;
                            $scope.creditCard.selectedYear = new Date().getFullYear();
                        }
                        unwatchCreditCard();
                    });
                    res();
                });
            };
            VantivIFrameStrategy.prototype.update = function () {
                return this.$q(function (resolve) { return resolve(); });
            };
            VantivIFrameStrategy.prototype.submit = function ($scope) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    if ($scope.useExistingCard) {
                        resolve();
                    }
                    else {
                        _this.iframeInstance.getPaypageRegistrationId()
                            .then(function (response) {
                            angular.extend($scope.creditCard, {
                                cardNbr: response.lastFour,
                                paypageRegistrationId: response.paypageRegistrationId,
                                cardCode: response.type.slice(0, 1),
                                isNewCard: true
                            });
                            $scope.creditCard.cardTypeDisplay = _this.creditCardConversionService.convertCodeToString($scope.creditCard.cardCode);
                            _this.loadNewIframe($scope);
                            resolve();
                        })
                            .catch(reject);
                    }
                });
            };
            VantivIFrameStrategy.$inject = ["$interval", "$document", "creditCardConversionService", "$filter", "environmentConfig", "$q", "iFrameService"];
            return VantivIFrameStrategy;
        }());
        Service.VantivIFrameStrategy = VantivIFrameStrategy;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule")
        .service("vantivIFrameStrategy", HCTRA.Service.VantivIFrameStrategy);
})();
// module HCTRA.Service {
//     export interface IDateWithTimeZoneService {
//         //unexpected behavior when called with  date with an offset
//         withoutOffsetToCentral(date: string, format: string): string;
//         //unexpected behavior when called with a date without an offset
//         withOffsetToCentral(date: string, format: string): string;
//     }
// }
// module HCTRA.Service {
//     export class DateWithTimeZoneService implements IDateWithTimeZoneService {
//         static $inject = ["momentService"];
//         constructor(private momentService: HCTRA.Service.IMomentService, ) { }
//         private standardize = (date: string, format: string): string =>
//             this.momentService.moment(new Date(date)).format(format);
//         private toCentral = (date: string, format: string): string =>
//             this.momentService.moment.tz(date, "America/Chicago").format(format);
//         public withoutOffsetToCentral = (date: string, format: string):string =>
//             this.toCentral(this.standardize(date, "YYYY-MM-DDTHH:mm:ss"), format);
//         public withOffsetToCentral = (date: string, format: string): string =>
//             this.toCentral(this.standardize(date, "YYYY-MM-DDTHH:mm:ssZ"), format);   
//     }  
// }
(function () {
    'use strict';
    // angular.module('HCTRAModule').service('dateWithTimeZoneService', HCTRA.Service.DateWithTimeZoneService);
})();
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var DesktopMenuRouteService = /** @class */ (function () {
            function DesktopMenuRouteService(accountActivityRoutes, profileRoutes, $rootScope, $q, $state, urlManagerService, MegaMenuCache, responseErrorService, AuthService, routes, isInvoicedService, USER_ROLES, paymentPlansRoutes, futureRoutes) {
                var _this = this;
                this.accountActivityRoutes = accountActivityRoutes;
                this.profileRoutes = profileRoutes;
                this.$rootScope = $rootScope;
                this.$q = $q;
                this.$state = $state;
                this.urlManagerService = urlManagerService;
                this.MegaMenuCache = MegaMenuCache;
                this.responseErrorService = responseErrorService;
                this.AuthService = AuthService;
                this.routes = routes;
                this.isInvoicedService = isInvoicedService;
                this.USER_ROLES = USER_ROLES;
                this.paymentPlansRoutes = paymentPlansRoutes;
                this.futureRoutes = futureRoutes;
                //The following 6 methods are responsible for returning authorized routes
                this.authorizeRoute = function (route) {
                    return _this.AuthService.isAuthorized(route.authorizedRoles) || route.authorizedRoles.indexOf(_this.USER_ROLES.anonymous) > -1;
                };
                this.isInvoicedAndLinkUpdateReplenishAmount = function (linkUrl) {
                    return _this.AuthService.isAuthenticated() && _this.isInvoicedService.isAccountInvoiced() && linkUrl === _this.profileRoutes.UpdateReplenishmentAmount;
                };
                this.notInvoicedAndLinkAccountActivityInvoices = function (linkUrl) {
                    return _this.AuthService.isAuthenticated() && !_this.isInvoicedService.isAccountInvoiced() && linkUrl === _this.accountActivityRoutes.accountActivityInvoices;
                };
                this.isAccountPaymentPlanUrlAndNoPaymentPlansAvailable = function (linkUrl) {
                    return _this.AuthService.isAuthenticated() && linkUrl === _this.paymentPlansRoutes.accountOverviewSummary && !_this.$rootScope.currentUser.hasPaymentPlans;
                };
                this.isLinkAuthorized = function (link) {
                    return _this.authorizeRoute(link) && !_this.isInvoicedAndLinkUpdateReplenishAmount(link.url) && !_this.notInvoicedAndLinkAccountActivityInvoices(link.url) && !_this.isAccountPaymentPlanUrlAndNoPaymentPlansAvailable(link.url);
                };
                this.getAuthorizedMegaMenuHelper = function (megaMenu) {
                    //callback passed to filter is invoked with three arguments:
                    //the value of the element
                    //the index of the element
                    //the Array object being traversed
                    //we only use the first for this.authorizeRoute and this.isLinkAuthorized
                    var authorizedMegaMenu = angular.copy(megaMenu.filter(_this.authorizeRoute));
                    angular.forEach(authorizedMegaMenu, function (megaMenuItem) {
                        angular.forEach(megaMenuItem.menuColumns, function (column) {
                            angular.forEach(column.subMenus, function (subMenu) {
                                subMenu.links = subMenu.links.filter(_this.isLinkAuthorized);
                            });
                            column.subMenus = column.subMenus.filter(function (subMenu) { return subMenu.links.length > 0; });
                        });
                        megaMenuItem.menuColumns = megaMenuItem.menuColumns.filter(function (column) { return column.subMenus.length > 0; });
                    });
                    return authorizedMegaMenu;
                };
                this.getAuthorizedMegaMenu = function (routesIn) {
                    if (!routesIn) {
                        return routesIn;
                    }
                    return _this.getAuthorizedMegaMenuHelper(routesIn);
                };
                //:category/:page /:size
                // Checkout
                // the following 4 methods add authorized roles to megaMenu
                this.getFullUrl = function (name, statesWithNames) {
                    var findUrl = function (namePart) { return (statesWithNames.find(function (potentialMatch) { return potentialMatch.name === namePart; }) || {}).url; };
                    var splitName = name.split('.');
                    var fullName = '';
                    var fullUrl = '';
                    for (var _i = 0, splitName_1 = splitName; _i < splitName_1.length; _i++) {
                        var part = splitName_1[_i];
                        fullName += part;
                        fullUrl += findUrl(fullName) || '';
                        fullName += '.';
                    }
                    return fullUrl;
                };
                this.getAuthorizedRoles = function (_a) {
                    var data = _a.data, resolve = _a.resolve;
                    var angularAuthRoles = angular.isArray(resolve)
                        && resolve
                            .map(function (x) { return x.authorizedRoles; })
                            .find(function (authorizedRoles) { return angular.isArray(authorizedRoles); });
                    var angularjsAuthRoles = angular.isObject(data)
                        && angular.isArray(data.authorizedRoles)
                        && data.authorizedRoles;
                    return angular.copy(angularAuthRoles || angularjsAuthRoles || []);
                };
                this.getFullUrlToAuthorizedRolesDictionary = function (statesWithNames) {
                    return statesWithNames
                        .filter(function (currentState) { return currentState.url; })
                        .map(function (currentState) { return ({
                        fullUrl: _this.getFullUrl(currentState.name, statesWithNames),
                        authorizedRoles: _this.getAuthorizedRoles(currentState)
                    }); })
                        .filter(function (urlRolesObject) { return urlRolesObject.authorizedRoles.length > 0; })
                        .map(function (_a) {
                        var fullUrl = _a.fullUrl, authorizedRoles = _a.authorizedRoles;
                        var _b;
                        return (_b = {},
                            _b[fullUrl] = authorizedRoles,
                            _b);
                    })
                        .reduce(function (acc, curr) { return angular.extend(acc, curr); }, {});
                };
                this.getMegaMenuNavRoutesWithAuthorizedRoles = function (megaMenuRoutes, fullUrlToAuthorizedRolesDictionary, routes) {
                    var megaMenuRoutesCopy = angular.copy(megaMenuRoutes);
                    angular.forEach(megaMenuRoutesCopy, function (topLevelRoute) {
                        topLevelRoute.authorizedRoles = fullUrlToAuthorizedRolesDictionary[topLevelRoute.url] || [_this.USER_ROLES.anonymous];
                        angular.forEach(topLevelRoute.menuColumns, function (currentMenuColumn) {
                            angular.forEach(currentMenuColumn.subMenus, function (currentSubMenu) {
                                angular.forEach(currentSubMenu.links, function (currentLink) {
                                    currentLink.target = currentLink.openNewTab ? routes.openTabTarget : routes.selfTarget;
                                    currentLink.authorizedRoles = fullUrlToAuthorizedRolesDictionary[currentLink.url] || [_this.USER_ROLES.anonymous];
                                });
                            });
                        });
                    });
                    return megaMenuRoutesCopy;
                };
                this.getMegaMenu = function (response) {
                    _this.responseErrorService.displayAlertsFromResponse(response);
                    if (!response.errors) {
                        return response.navBar;
                    }
                    else {
                        return [];
                    }
                };
                this.getMegaMenuNavRoutes = function () {
                    var deferred = _this.$q.defer();
                    var cachedMegaMenu = _this.MegaMenuCache.getCachedMegaMenu();
                    if (cachedMegaMenu.length === 0) {
                        _this.urlManagerService.getMegaMenu().then(function (response) {
                            var megaMenuFromUrlManagerService = _this.getMegaMenu(response);
                            var fullUrlToAuthorizedRolesDictionary = _this.getFullUrlToAuthorizedRolesDictionary(_this.$state.get().concat(_this.futureRoutes.get()));
                            var megaMenuNavRoutesWithAuthorizedRoles = _this.getMegaMenuNavRoutesWithAuthorizedRoles(megaMenuFromUrlManagerService, fullUrlToAuthorizedRolesDictionary, _this.routes);
                            cachedMegaMenu = _this.MegaMenuCache.cacheMegaMenu(megaMenuNavRoutesWithAuthorizedRoles);
                            deferred.resolve(_this.getAuthorizedMegaMenu(cachedMegaMenu));
                        });
                    }
                    else {
                        deferred.resolve(_this.getAuthorizedMegaMenu(cachedMegaMenu));
                    }
                    return deferred.promise;
                };
            }
            DesktopMenuRouteService.$inject = ['accountActivityRoutes', 'profileRoutes', '$rootScope', '$q', '$state', 'urlManagerService', 'MegaMenuCache', 'responseErrorService', 'AuthService', 'routes', 'isInvoicedService', 'USER_ROLES', 'paymentPlansRoutes', 'futureRoutes'];
            return DesktopMenuRouteService;
        }());
        Service.DesktopMenuRouteService = DesktopMenuRouteService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').service('desktopMenuRouteService', HCTRA.Service.DesktopMenuRouteService);
})();
(function () {
    "use strict";
    angular.module("HCTRAModule").factory("documentLocationService", ["$document",
        function ($document) {
            function goToHref(url) {
                $document[0].location.href = url;
            }
            return {
                goToHref: goToHref
            };
        }]);
}());
(function () {
    "use strict";
    // angular.module("HCTRAModule").service("domUtilService", HCTRA.Service.DomUtilService);
}());
(function () {
    'use strict';
    // angular.module('HCTRAModule').factory('editInvoicedMessageService', ['modalService',
    //     function (modalService) {
    //         return function (phoneNumberDisplay) {
    //             return {
    //                 invoicedMessage: function () {
    //                     modalService.showModal({
    //                         backdrop: true,
    //                         keyboard: true,
    //                         modalFade: true,
    //                         templateUrl: '/app/templates/common/modalAlert.html'
    //                     }, {
    //                         closeButtonText: 'Close',
    //                         headerText: 'Invoiced Account',
    //                         bodyText: 'Billing related information cannot be modified because the account is invoiced, please call ' + phoneNumberDisplay + ' for further assistance.'
    //                     });
    //                 }
    //             };
    //         };
    //     }]);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var EprotectIframeClientService = /** @class */ (function () {
            function EprotectIframeClientService() {
                /*eslint-disable */
                this.EprotectIframeClient = EprotectIframeClient;
                /*eslint-enable */
            }
            EprotectIframeClientService.$inject = [];
            return EprotectIframeClientService;
        }());
        Service.EprotectIframeClientService = EprotectIframeClientService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').service('eprotectIframeClientService', HCTRA.Service.EprotectIframeClientService);
})();
(function () {
    "use strict";
    angular.module("HCTRAModule").service("errorInterceptorService", ["perfToggle",
        function (perfToggle) {
            var errorMessageDictionary = {};
            var init = function () {
                if (perfToggle.messagesToLogDictionary) {
                    errorMessageDictionary = angular.fromJson(perfToggle.messagesToLogDictionary);
                }
            };
            init();
            this.shouldMessageTriggerLogging = function (message) {
                return errorMessageDictionary[message] ? true : false;
            };
        }]);
}());
(function () {
    'use strict';
    //This follows http://www.bennadel.com/blog/2542-logging-client-side-errors-with-angularjs-and-stacktrace-js.htm
    // The error log service is our wrapper around the core error
    // handling ability of AngularJS. Notice that we pass off to
    // the native "$log" method and then handle our additional
    // server-side logging.
    angular.module('HCTRAModule').factory("errorLogService", ['$log', '$window', 'stacktraceService', 'environmentConfig', 'loggingService',
        function ($log, $window, stacktraceService, environmentConfig, loggingService) {
            var canLogError = true;
            // I log the given error to the remote server.
            function log(exception, cause) {
                // Pass off the error to the default error handler
                // on the AngualrJS logger. This will output the
                // error to the console (and let the application
                // keep running normally for the user).
                $log.error.apply($log, arguments);
                // Now, we need to try and log the error to the server.
                try {
                    //hack to fix uncatchable SecurityException in Chrome when all data setting is blocked
                    if (exception.message === "Failed to read the 'sessionStorage' property from 'Window': Access is denied for this document.") {
                        $window.location = '/app/indexNoCookieStorage.html';
                        return;
                    }
                    var errorMessage = exception.toString();
                    var stackTrace = stacktraceService.print({ e: exception });
                    if (canLogError) {
                        loggingService.logMessage(errorMessage, stackTrace, cause);
                        canLogError = false;
                        // eslint-disable-next-line angular/timeout-service
                        setTimeout(function () { canLogError = true; }, 10000);
                    }
                    if (environmentConfig.angularExPopUpEnabled === 'true') {
                        $window.alert(errorMessage + "\n" + stackTrace);
                    }
                }
                catch (loggingError) {
                    // For Developers - log the log-failure.
                    $log.warn("Error logging failed");
                    $log.log(loggingError);
                }
            }
            // Return the logging function.
            return (log);
        }]);
}());
(function () {
    'use strict';
    // angular.module('HCTRAModule').service('eventTrackingService', HCTRA.Service.EventTrackingService);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var ExperienceEditorHelper = /** @class */ (function () {
            function ExperienceEditorHelper($rootScope, $window) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.$window = $window;
                this.templateLoadStructs = [];
                this.onStateChangeStart = function () {
                    if (_this.isExperienceEditor) {
                        var editingBoxElem = angular.element('#scWebEditRibbon').contents().find('span[data-sc-command=EnableEditing] > input');
                        if (editingBoxElem)
                            editingBoxElem = editingBoxElem[0];
                        if (editingBoxElem && editingBoxElem.checked) {
                            editingBoxElem.click();
                        }
                    }
                };
                this.signalResolution = function (templateUrl) {
                    if (_this.isExperienceEditor) {
                        var foundIndex = _this.templateLoadStructs.findIndex(function (u) { return u.templateUrl === templateUrl; });
                        if (Number.isInteger(foundIndex) && foundIndex !== -1) {
                            var templateLoadStruct = _this.templateLoadStructs.splice(foundIndex, 1)[0];
                            templateLoadStruct.deferred.resolve();
                        }
                    }
                };
                this.anchorTagInterceptor = function () {
                    if (_this.isExperienceEditor) {
                        var anchorEvents = 'click dblclick keydown keypress keyup mousedown tap touchstart touchend'.replace(/(\S+)/g, "$1" + '.ExperienceEditor');
                        angular.element(_this.$window.document).on(anchorEvents, 'a[href]', function (ev) {
                            var elem = angular.element(ev.target);
                            var href = elem.attr('href');
                            if (angular.isDefined(href) && !_this.isExternalLink(href) && href.indexOf('#!') === -1) {
                                var superThing = _this.$window.location.origin + _this.$window.location.search + '#!' + href;
                                elem.attr('href', superThing);
                            }
                        });
                    }
                };
            }
            Object.defineProperty(ExperienceEditorHelper.prototype, "isExperienceEditor", {
                get: function () {
                    return !!this.$window.Sitecore; // if the Sitecore global object exists, we're in Experience Editor
                },
                enumerable: true,
                configurable: true
            });
            //determine if url is outside orgin
            ExperienceEditorHelper.prototype.isExternalLink = function (url) {
                //TODO: this needs to update to include api services once they are hosted outside of web project
                if (/^(http|https):\/\/.*/i.test(url)) {
                    return !url.startsWith(this.$window.location.origin);
                }
                else {
                    return false;
                }
            };
            ExperienceEditorHelper.$inject = ['$rootScope', '$window'];
            return ExperienceEditorHelper;
        }());
        Service.ExperienceEditorHelper = ExperienceEditorHelper;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("experienceEditorHelper", HCTRA.Service.ExperienceEditorHelper);
}());
//Migrated
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        'use strict';
        var GenericPagingControlService = /** @class */ (function () {
            function GenericPagingControlService() {
                this.generateSimpleConfig = function (paginator, vmAssignmentCb) {
                    var onPageChange = onPageChangeFactory(paginator, vmAssignmentCb);
                    var onPageSizeChange = onPageSizeChangeFactory(paginator, vmAssignmentCb);
                    return {
                        onBackAll: onPageChange,
                        onBack: onPageChange,
                        onForward: onPageChange,
                        onForwardAll: onPageChange,
                        onPageSizeChange: onPageSizeChange,
                        onPageNumberEntered: onPageChange,
                        initPageSize: paginator.pageSize,
                        totalItems: paginator.itemCount
                    };
                    function onPageChangeFactory(paginator, vmAssignmentCb) {
                        return function (visiblePageNumber) {
                            var newPageArray = paginator.getPage(visiblePageNumber);
                            vmAssignmentCb(newPageArray); // vm/$scope assignment must be done lexically, so we call a callback and pass in the info to assign
                        };
                    }
                    function onPageSizeChangeFactory(paginator, vmAssignmentCb) {
                        return function (visiblePageNumber, pageSize) {
                            paginator.setPageSize(pageSize);
                            var newPageArray = paginator.getPage(visiblePageNumber);
                            vmAssignmentCb(newPageArray); // vm/$scope assignment must be done lexically, so we call a callback and pass in the info to assign
                        };
                    }
                };
            }
            return GenericPagingControlService;
        }());
        Service.GenericPagingControlService = GenericPagingControlService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').service('genericPagingControlService', HCTRA.Service.GenericPagingControlService);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var IFrameService = /** @class */ (function () {
            function IFrameService($q, responseErrorService, eprotectIframeClientService, environmentConfig, genericRepo, siteVerbiage, $timeout, toggleButtonsService) {
                var _this = this;
                this.$q = $q;
                this.responseErrorService = responseErrorService;
                this.eprotectIframeClientService = eprotectIframeClientService;
                this.environmentConfig = environmentConfig;
                this.genericRepo = genericRepo;
                this.siteVerbiage = siteVerbiage;
                this.$timeout = $timeout;
                this.toggleButtonsService = toggleButtonsService;
                this.getConfiguration = function (style, height, iFrameDiv, existingCreditCardNumber, payframeClientCallback, inputsEmptyCallback) { return ({
                    "paypageId": _this.environmentConfig.vantivConfig.PayPageID,
                    "reportGroup": _this.environmentConfig.vantivConfig.ReportGroup,
                    "style": style,
                    "height": height,
                    "timeout": _this.environmentConfig.vantivConfig.TimeoutMilliSeconds,
                    "div": iFrameDiv,
                    "callback": payframeClientCallback,
                    "inputsEmptyCallback": inputsEmptyCallback,
                    "showCvv": false,
                    "htmlTimeout": _this.environmentConfig.vantivConfig.TimeoutMilliSeconds,
                    "placeholderText": {
                        "accountNumber": existingCreditCardNumber
                    },
                    "enhancedUxFeatures": {
                        "inlineFieldValidations": true,
                        "numericInputsOnly": true
                    }
                }); };
                //Not testable
                this.generateSeedDate = function () { return new Date(); };
                this.generatePseudoRandomNumber = function (seedDate) {
                    return Date.UTC(seedDate.getUTCFullYear(), seedDate.getUTCMonth(), seedDate.getUTCDate(), seedDate.getUTCHours(), seedDate.getUTCMinutes(), seedDate.getUTCSeconds(), seedDate.getMilliseconds());
                };
                this.getMessage = function (randomNumber) { return ({
                    "id": "T" + randomNumber.toString(),
                    "orderId": randomNumber
                }); };
                this.logRequest = function (message) {
                    if (!_this.environmentConfig.vantivConfig.InfoToggle)
                        return;
                    _this.genericRepo.dataFactory.LogVantivRequest({
                        "paypageId": _this.environmentConfig.vantivConfig.PayPageID,
                        "reportGroup": _this.environmentConfig.vantivConfig.ReportGroup,
                        "requestId": message.id,
                        "orderId": message.orderId,
                        "url": _this.environmentConfig.vantivConfig.IFrameUrl
                    });
                };
                this.isSuccess = function (_a) {
                    var response = _a.response;
                    return response === "870";
                };
                this.isTimeoutError = function (response) {
                    return response.response === "884" || response.timeout || false;
                };
                this.isResponseToBeLogged = function (response) {
                    return _this.environmentConfig.vantivConfig.InfoToggle || _this.environmentConfig.vantivConfig.ErrorToggle && !_this.isSuccess(response) || false;
                };
                this.logResponse = function (response, message) {
                    if (!_this.isResponseToBeLogged(response))
                        return;
                    _this.genericRepo.dataFactory.LogVantivResponse({
                        "id": message.id,
                        "orderId": message.orderId,
                        "reportGroup": _this.environmentConfig.vantivConfig.ReportGroup,
                        "response": response.response,
                        "message": response.timeout ? "Request for Paypage Registration Id Timed Out" : response.message,
                        "responseTime": response.responseTime,
                        "vantivTxnId": response.vantivTxnId,
                        "paypageRegistrationId": response.paypageRegistrationId,
                        "targetServer": response.targetServer,
                        "type": response.type,
                        "isError": !_this.isSuccess(response),
                        "violationsData": null
                    });
                };
                this.getIFrameServiceInstance = function () {
                    var iFrameServiceInstance = {
                        isBlocked: true,
                        message: {},
                        deferGetPaypageRegistrationId: _this.$q.defer(),
                        deferInputsEmpty: undefined,
                        payframeClient: undefined,
                        inputsEmptyCallback: function (_a) {
                            var allInputsEmpty = _a.allInputsEmpty;
                            return iFrameServiceInstance.deferInputsEmpty.resolve(allInputsEmpty);
                        },
                        creditCardFieldEmpty: function () {
                            if (iFrameServiceInstance.isBlocked)
                                return _this.$q.defer().promise;
                            iFrameServiceInstance.deferInputsEmpty = _this.$q.defer();
                            iFrameServiceInstance.payframeClient.allInputsEmpty();
                            return iFrameServiceInstance.deferInputsEmpty.promise;
                        },
                        loadIFrame: function (style, height, iFrameDiv, existingCreditCardNumber) {
                            //iframe reload means the previous request for paypage registration will never be resolved, the old iframe window will be discarded so it can't return a message 
                            iFrameServiceInstance.isBlocked = false;
                            var configuration = _this.getConfiguration(style, height, iFrameDiv, existingCreditCardNumber, iFrameServiceInstance.callbackWithLogger, iFrameServiceInstance.inputsEmptyCallback);
                            iFrameServiceInstance.payframeClient = new _this.eprotectIframeClientService.EprotectIframeClient(configuration);
                        },
                        callbackWithLogger: function (response) {
                            _this.logResponse(response, iFrameServiceInstance.message);
                            if (_this.isTimeoutError(response) || ["875", "889"].indexOf(response.response) > 0)
                                _this.responseErrorService.displayToast(_this.siteVerbiage.genericErrorMsg, "error", false);
                            if (_this.isSuccess(response))
                                iFrameServiceInstance.deferGetPaypageRegistrationId.resolve(response);
                            else
                                iFrameServiceInstance.deferGetPaypageRegistrationId.reject();
                            iFrameServiceInstance.isBlocked = false;
                        },
                        getPaypageRegistrationId: function () {
                            if (iFrameServiceInstance.isBlocked)
                                return _this.$q.reject();
                            iFrameServiceInstance.isBlocked = true;
                            var seedDate = _this.generateSeedDate();
                            var randomNumber = _this.generatePseudoRandomNumber(seedDate);
                            iFrameServiceInstance.message = _this.getMessage(randomNumber);
                            _this.logRequest(iFrameServiceInstance.message);
                            iFrameServiceInstance.payframeClient.getPaypageRegistrationId(angular.copy(iFrameServiceInstance.message));
                            iFrameServiceInstance.deferGetPaypageRegistrationId = _this.$q.defer();
                            return _this.toggleButtonsService.disableUntilResolved(iFrameServiceInstance.deferGetPaypageRegistrationId.promise);
                        }
                    };
                    return iFrameServiceInstance;
                };
            }
            IFrameService.$inject = [
                "$q",
                "responseErrorService",
                "eprotectIframeClientService",
                "environmentConfig",
                "genericRepo",
                "siteVerbiage",
                "$timeout",
                "toggleButtonsService"
            ];
            return IFrameService;
        }());
        Service.IFrameService = IFrameService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').service('iFrameService', HCTRA.Service.IFrameService);
})();
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('inputCcDetectionService', [
        function () {
            return {
                nameIsCc: nameIsCc,
                zipIsCc: zipIsCc
            };
            function nameIsCc(name) {
                var patt = /\b\D*\d{6,}\D*\b/;
                return patt.test(name);
            }
            function zipIsCc(zip) {
                var patt = /\b\D*\d{10,}\D*\b/;
                return patt.test(zip);
            }
        }
    ]);
}());
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
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        "use strict";
        var LoggingService = /** @class */ (function () {
            function LoggingService(stateStackMemoryService, $window, sniffrjs, serverConstants) {
                var _this = this;
                this.stateStackMemoryService = stateStackMemoryService;
                this.$window = $window;
                this.sniffrjs = sniffrjs;
                this.serverConstants = serverConstants;
                this.MAX_STRING_LENGTH = 500;
                this.STRING_TOO_LONG_MESSAGE = "|| The rest of this string was cutoff to guard against overflow ||";
                this.logMessage = function (errorMessage, stackTrace, cause) {
                    var stateStack = _this.stateStackMemoryService.printStack();
                    var exceptionObject = {
                        url: _this.$window.location.href,
                        cause: (cause || ""),
                        opSystemName: _this.sniffrjs.os.name,
                        opSystemVersion: _this.sniffrjs.os.versionString,
                        browserName: _this.sniffrjs.browser.name,
                        browserVersion: _this.sniffrjs.browser.versionString,
                        deviceName: _this.sniffrjs.device.name,
                        deviceVersion: _this.sniffrjs.device.versionString,
                        stateStack: stateStack,
                        errorMessage: (errorMessage || "")
                    };
                    if (stackTrace) {
                        exceptionObject.stackTrace = stackTrace;
                    }
                    //having to use sessionStorage directly to avoid circular reference
                    var linfo;
                    if (sessionStorage) {
                        linfo = angular.fromJson(sessionStorage.getItem("linfo"));
                    }
                    if (linfo) {
                        exceptionObject.licPlate = linfo.licNumber;
                        exceptionObject.licState = linfo.licState;
                        exceptionObject.invoiceNumber = linfo.invNumber;
                    }
                    _this.checkStringLengthsAndEraseIfNeeded(exceptionObject);
                    ////cannot use Angular's $http or genericRepo for this call to prevent circular reference
                    var laststate = _this.stateStackMemoryService.getLastState();
                    var stateName = laststate ? laststate.name : "";
                    angular.element.ajax({
                        url: "api/sessions/AngularLog/LogAngularExceptions?angularState=" + stateName + "&clientVersion=" + _this.serverConstants.currentlyDownloadedWebUiVersion,
                        data: exceptionObject,
                        method: "POST",
                        beforeSend: function (request) {
                            request.setRequestHeader("X-XSRF-TOKEN", _this.getCookie("XSRF-TOKEN"));
                        }
                    });
                };
                this.checkStringLengthsAndEraseIfNeeded = function (exceptionObject) {
                    var endOfSubstringIndex = _this.MAX_STRING_LENGTH - _this.STRING_TOO_LONG_MESSAGE.length;
                    if (exceptionObject) {
                        if (exceptionObject.errorMessage && (angular.isString(exceptionObject.errorMessage)) && exceptionObject.errorMessage.length > _this.MAX_STRING_LENGTH) {
                            exceptionObject.errorMessage = exceptionObject.errorMessage.substring(0, endOfSubstringIndex) + _this.STRING_TOO_LONG_MESSAGE;
                        }
                        if (exceptionObject.stateStack && (angular.isString(exceptionObject.stateStack)) && exceptionObject.stateStack.length > _this.MAX_STRING_LENGTH) {
                            exceptionObject.stateStack = exceptionObject.stateStack.substring(0, endOfSubstringIndex) + _this.STRING_TOO_LONG_MESSAGE;
                        }
                        if (exceptionObject.cause && (angular.isString(exceptionObject.cause)) && exceptionObject.cause.length > _this.MAX_STRING_LENGTH) {
                            exceptionObject.cause = exceptionObject.cause.substring(0, endOfSubstringIndex) + _this.STRING_TOO_LONG_MESSAGE;
                        }
                    }
                };
            }
            // Copied from cookie.service.ts because AngularJS unit tests was having issues with the injection of CookieService
            LoggingService.prototype.getCookie = function (key) {
                if (!this.$window.document.cookie) {
                    return '';
                }
                var pairs = this.$window.document.cookie.split(/;\s*/);
                var prefix = encodeURIComponent(key) + "=";
                for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
                    var pair = pairs_1[_i];
                    if (pair.indexOf(prefix) === 0) {
                        return decodeURIComponent(pair.substring(prefix.length));
                    }
                }
                return '';
            };
            LoggingService.$inject = ["stateStackMemoryService", "$window", "sniffrjs", "serverConstants"];
            return LoggingService;
        }());
        Service.LoggingService = LoggingService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule")
        .service("loggingService", HCTRA.Service.LoggingService);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        "use strict";
        // export interface IMaintenanceService {
        //     resolveMaintenanceStatus(navFeatures: Model.MaintenanceFeature[], previousStateName: string): angular.IPromise<any>;
        //     considerMaintenancePopup(): void;
        //     getMostRecentFeatureMainenanceList(): Model.FeatureState[];
        // }
        // export class MaintenanceService implements IMaintenanceService {
        //     static $inject = ["serverConstants",
        //         "responseErrorService",
        //         "$state",
        //         "homeStates",
        //         "$q",
        //         "arrayUtilService",
        //         "genericRepo",
        //         "modalService"];
        //     constructor(private serverConstants: any,
        //         private responseErrorService: HCTRA.Service.IResponseErrorService,
        //         private $state: ng.ui.IStateService,
        //         private homeStates,
        //         private $q: ng.IQService,
        //         private arrayUtilService: IArrayUtilService,
        //         private genericRepo: HCTRA.Service.IGenericRepo,
        //         private modalService: HCTRA.Service.IModalService) { }
        //     private mostRecentResolvedFeatures: Model.FeatureState[] = null;
        //     public getMostRecentFeatureMainenanceList(): Model.FeatureState[] {
        //         return (this.mostRecentResolvedFeatures || []).slice();
        //     }
        //     public resolveMaintenanceStatus = (navFeatures: Model.MaintenanceFeature[], previousStateName: string) => {
        //         return this.genericRepo.dataFactory.getMaintenanceDetails().then((response: HCTRA.Model.MaintenanceResponse) => {
        //             if (response.errors && response.errors.length === 0) {
        //                 const featuresInMaintenance: Model.FeatureState[] =
        //                     response.featureStates.filter((val: Model.FeatureState) => val.inMaintenance);
        //                 this.mostRecentResolvedFeatures = featuresInMaintenance;
        //                 // intersect of features-in-maintenance and features of the state we're navigating to
        //                 const blockedFeatures: Model.FeatureState[] =
        //                     this.arrayUtilService.intersect(featuresInMaintenance, navFeatures,
        //                         (m: Model.FeatureState, n: Model.MaintenanceFeature) => m.feature === n);
        //                 if (blockedFeatures && blockedFeatures.length > 0) {
        //                     const baseResponse: Model.IBaseResponse = this.featureStatesToBaseResponse(blockedFeatures);
        //                     let delayFlag = false;
        //                     // previous state's name is "" on reload, direct navigation to URL, bookmark, etc
        //                     if (angular.isString(previousStateName) && previousStateName !== "") {
        //                         this.$state.go(previousStateName);
        //                     } else {
        //                         this.$state.go(this.homeStates.Frame);
        //                         delayFlag = true;
        //                     }
        //                     this.responseErrorService.displayErrorsFromResponse(baseResponse, delayFlag);
        //                     return this.$q.reject();
        //                 }
        //             } else {
        //                 this.responseErrorService.displayErrorsFromResponse(response);
        //                 return this.$q.reject();
        //             }
        //         });
        //     };
        //     public considerMaintenancePopup = () => {
        //         this.genericRepo.dataFactory.getMaintenanceDetails().then((response: HCTRA.Model.MaintenanceResponse) => {
        //             if (response.showMaintenancePopup) {
        //                 this.modalService.showMaintenanceModal();
        //             }
        //         });
        //     };
        //     private featureStatesToBaseResponse = (features: Model.FeatureState[]): HCTRA.Model.IBaseResponse => {
        //         const newResponse: Model.IBaseResponse = new HCTRA.Model.BaseResponse();
        //         const errors: Model.ErrorMessage[] = features.map((val: Model.ErrorMessage) => {
        //             return {
        //                 key: this.serverConstants.maintenanceKey,
        //                 message: val.message
        //             };
        //         });
        //         newResponse.errors = errors;
        //         return newResponse;
        //     };
        // }
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    // angular.module("HCTRAModule").service("maintenanceService", HCTRA.Service.MaintenanceService);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var ManageVehiclesPaperPlateService = /** @class */ (function () {
            function ManageVehiclesPaperPlateService(modalService, $q, genericRepo, stringUtilsService, responseErrorService, routes) {
                var _this = this;
                this.modalService = modalService;
                this.$q = $q;
                this.genericRepo = genericRepo;
                this.stringUtilsService = stringUtilsService;
                this.responseErrorService = responseErrorService;
                this.routes = routes;
                this.getPaperPlateCms = function () {
                    return _this.genericRepo.dataFactory.getCmsPageById({
                        path: null,
                        fields: 'Parameters',
                        itemId: _this.routes.addTagCms
                    }).then(function (res) {
                        if (_this.responseErrorService.isErrorFree(res)) {
                            var addEzTagItem = angular.fromJson(res.cmsResponse);
                            var params = _this.stringUtilsService.getParameterObject(addEzTagItem.Parameters);
                            var paperPlateQuestion = params.paperPlateQuestion;
                            var paperPlateAcknowledgement = params.paperPlateAcknowledgement;
                            var paperPlateValidationText = params.paperPlateValidationText;
                            return { paperPlateAcknowledgement: paperPlateAcknowledgement, paperPlateQuestion: paperPlateQuestion, paperPlateValidationText: paperPlateValidationText };
                        }
                    });
                };
            }
            ManageVehiclesPaperPlateService.$inject = ['modalService', '$q', 'genericRepo', 'stringUtilsService', 'responseErrorService', 'routes'
            ];
            return ManageVehiclesPaperPlateService;
        }());
        Service.ManageVehiclesPaperPlateService = ManageVehiclesPaperPlateService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').service('manageVehiclesPaperPlateService', HCTRA.Service.ManageVehiclesPaperPlateService);
}());
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
                        }
                        else {
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
                            }
                            else {
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
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('MegaMenuCache', function () {
        var megaMenuRouteCache = [];
        return {
            cacheMegaMenu: function (megaMenu) {
                megaMenuRouteCache = megaMenu;
                return megaMenuRouteCache;
            },
            getCachedMegaMenu: function () {
                if (!megaMenuRouteCache)
                    megaMenuRouteCache = [];
                return megaMenuRouteCache;
            }
        };
    });
}());
// module HCTRA.Service {
//     export interface IMobileMenuRouteService {
//         //getNavRoutes(): any[]
// 		getNavRoutes(): angular.IPromise<any[]>;
//     }
// }
// (() => {
//     'use strict';
//     class MobileMenuRouteService implements HCTRA.Service.IMobileMenuRouteService {
//         static $inject = ['routes', '$rootScope', '$state', 'AuthService', 'featureToggleResolver', 'USER_ROLES', "$q", 'paymentPlansRoutes', 'desktopMenuRouteService', 'futureRoutes'];
//         constructor(private routes: HCTRA.Constant.IRoutes, private $rootScope: angular.IRootScopeService | any, private $state, private AuthService, private featureToggleResolver, private USER_ROLES, private $q: angular.IQService, private paymentPlansRoutes, private desktopMenuRouteService, private futureRoutes) { }
//         isAuthorized = ({ config }): boolean => {
//             const authorizedRoles = this.desktopMenuRouteService.getAuthorizedRoles(config);
//             return this.AuthService.isAuthorized(authorizedRoles) || authorizedRoles.indexOf(this.USER_ROLES.anonymous) > -1;
// 		}
//         isResolved = (route): angular.IPromise<any> => {		
//             if (route.config.url === this.paymentPlansRoutes.accountOverviewSummary) {
//                 return this.$q.resolve<any>(angular.extend(route, { toggleResolved: this.$rootScope.currentUser.hasPaymentPlans }));
//             }
//             if (angular.isUndefined(route.config.data) || angular.isUndefined(route.config.data.toggle)) {
//                 return this.$q.resolve<any>(angular.extend(route, { toggleResolved: true }));
//             }	
//             return this.featureToggleResolver.isResolvedFeatureToggle(route.config.data.toggle)
//                 .then(res => angular.extend(route, { toggleResolved: res }));
// 		}
//         getAuthorizedRoutes = (flatRoutes: any[]): any[] =>
// 			angular.copy(flatRoutes).filter(this.isAuthorized)
// 		getResolvedRoutes = (flatRoutes: any[]): angular.IPromise<[any, boolean]>[] =>
// 			angular.copy(flatRoutes).map(this.isResolved)
//         getHierarchicalRoutes = (theRouter: any[]): any[] => {
//             const routerCopy = angular.copy(theRouter.filter(x => x.config.settings));
//             //two separate forEach on same list to aid readability and simple code
//             angular.forEach(routerCopy, (currentRoute) => currentRoute.config.settings.children = []);
//             angular.forEach(routerCopy, (childRoute) => {
//                 const parent = (routerCopy as any).find((potentialParent) => potentialParent.name === childRoute.config.settings.parent);
//                 if (parent) {
//                     parent.config.settings.children.push(childRoute);
//                 }
//             });
//             return routerCopy;
//         }
//         compareNavOrder = (firstRoute, secondRoute) => firstRoute.config.settings.nav - secondRoute.config.settings.nav;
//         sortChildren = (routes) => {
//             const sortedRoutes = angular.copy(routes);
//             angular.forEach(sortedRoutes, (currentRoute) =>
//                 currentRoute.config.settings.children.sort(this.compareNavOrder));
//             return sortedRoutes;
//         }
//         mergeRoutes = (loadedRoutes, futureRoutes) => {
//             const missingFutureRoutes = futureRoutes.filter(route => !loadedRoutes.some(x => x.name === route.name));
//             return [...loadedRoutes, ...missingFutureRoutes];
//         }
// 		getNavRoutes = (): angular.IPromise<any[]> => {
// 			//let authorizedRoutes = this.getAuthorizedRoutes(this.router);
// 			//let hierarchicalRoutes = this.getHierarchicalRoutes(authorizedRoutes);
// 			//let withSortedChildren = this.sortChildren(hierarchicalRoutes);
// 			//return withSortedChildren
// 			//    .filter((currentRoute) => currentRoute.config.settings.navlevel === 0)
// 			//    .sort(this.compareNavOrder);
//             const mergedRoutes = this.mergeRoutes(this.$state.get(), this.futureRoutes.get());
//             const authorizedRoutes = this.getAuthorizedRoutes(mergedRoutes.map(state => ({ name: state.name, config: state })));
//             return this.$q.all<any>(this.getResolvedRoutes(authorizedRoutes))
//                 .then(routes =>
//                     routes
//                         .filter(x => angular.isDefined(x))
//                         .filter(x => x.toggleResolved))
//                 .then(this.getHierarchicalRoutes)
//                 .then(this.sortChildren)
//                 .then(routes =>
//                     routes
//                         .filter((currentRoute) => currentRoute.config.settings.navlevel === 0)
//                         .sort(this.compareNavOrder));
// 		}
//     }
//     angular.module('HCTRAModule').service('mobileMenuRouteService', MobileMenuRouteService);
// })();
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        "use strict";
        var MomentService = /** @class */ (function () {
            function MomentService(momentjs) {
                this.momentjs = momentjs;
                this.moment = momentjs;
            }
            MomentService.$inject = ["momentjs"];
            return MomentService;
        }());
        Service.MomentService = MomentService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("momentService", HCTRA.Service.MomentService);
}());
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
        }
    ]);
}());
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
        }
    ]);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var ObjectUtilService = /** @class */ (function () {
            function ObjectUtilService() {
                var _this = this;
                /**
                 * @deprecated
                 * import { isEqual } from 'lodash' instead of using this function
                 */
                this.areEqual = function (firstObj, secondObj) {
                    if ((firstObj == null) && (secondObj == null)) // neither exists
                        return true;
                    else if (!(firstObj && secondObj)) // one exists, the other does not
                        return false;
                    if (angular.isObject(firstObj) && angular.isObject(secondObj)) {
                        var localCount = Object.keys(secondObj).length;
                        var memCount = Object.keys(firstObj).length;
                        if (localCount !== memCount) // not the same number of properties
                            return false;
                        else if (localCount === 0 && memCount === 0) // both empty objects
                            return true;
                        if (!_this.deepCompare(firstObj, secondObj)) // if different
                            return false;
                    }
                    return true;
                };
                this.deepCompare = function (firstObj, secondObj) {
                    for (var key in firstObj) {
                        if (firstObj.hasOwnProperty(key)) {
                            if (angular.isObject(firstObj[key]) && angular.isObject(secondObj[key])) {
                                return _this.areEqual(firstObj[key], secondObj[key]);
                            }
                            else {
                                if (firstObj[key] !== secondObj[key]) {
                                    return false;
                                }
                            }
                        }
                    }
                    return true;
                };
                this.clearShallowObject = function (objIn) {
                    for (var prop in objIn) {
                        if (objIn.hasOwnProperty(prop)) {
                            delete objIn[prop];
                        }
                    }
                };
                this.toLowerCaseKeys = function (objIn) {
                    var objInCopy = angular.copy(objIn);
                    for (var prop in objInCopy) {
                        if (objInCopy.hasOwnProperty(prop)) {
                            objInCopy[prop.toLowerCase()] = objInCopy[prop];
                            if (prop.toLowerCase() !== prop) {
                                delete objInCopy[prop];
                            }
                        }
                    }
                    return objInCopy;
                };
                /**
                 * @deprecated
                 * This is actually a private function for toCapitalizedCaseKeys(objIn, keyArray)
                 */
                this.replaceKeyWithCapitalized = function (obj, prop) {
                    var propCap = prop.charAt(0).toUpperCase() + prop.slice(1);
                    obj[propCap] = obj[prop];
                    if (propCap !== prop) {
                        delete obj[prop];
                    }
                };
                /**
                 * @deprecated
                 * import { capitalizeKeys } from 'common/utilities' instead of using this function
                 */
                this.toCapitalizedCaseKeys = function (objIn, keyArray) {
                    var objInCopy = angular.copy(objIn);
                    if (keyArray) {
                        for (var _i = 0, keyArray_1 = keyArray; _i < keyArray_1.length; _i++) {
                            var key = keyArray_1[_i];
                            if (objInCopy.hasOwnProperty(key)) {
                                _this.replaceKeyWithCapitalized(objInCopy, key);
                            }
                        }
                    }
                    else {
                        for (var prop in objInCopy) {
                            if (objInCopy.hasOwnProperty(prop)) {
                                _this.replaceKeyWithCapitalized(objInCopy, prop);
                            }
                        }
                    }
                    return objInCopy;
                };
                this.hasAnyOfKeysInList = function (obj, keyArr) {
                    for (var _i = 0, keyArr_1 = keyArr; _i < keyArr_1.length; _i++) {
                        var key = keyArr_1[_i];
                        if (obj.hasOwnProperty(key)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
            ObjectUtilService.$inject = [];
            return ObjectUtilService;
        }());
        Service.ObjectUtilService = ObjectUtilService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("objectUtilService", HCTRA.Service.ObjectUtilService);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var OmnitureService = /** @class */ (function () {
            function OmnitureService($analytics, $location) {
                var _this = this;
                this.$analytics = $analytics;
                this.$location = $location;
                this.sendTag = function (toState, suffix) {
                    var path = _this.$location.absUrl();
                    if (path != "/") { // $routeChangeSuccess calls on url "/" at login
                        var trackTag = toState.name + "_" + path;
                        if (suffix)
                            trackTag += "[" + suffix + "]";
                        _this.$analytics.pageTrack(trackTag);
                    }
                };
            }
            OmnitureService.$inject = ['$analytics', '$location'];
            return OmnitureService;
        }());
        Service.OmnitureService = OmnitureService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').service('omnitureService', HCTRA.Service.OmnitureService);
}());
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
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        //concrete class that wraps the globally defined PDFJS object
        var PdfService = /** @class */ (function () {
            function PdfService($window) {
                var _this = this;
                this.$window = $window;
                this.getDocument = function (params) {
                    return _this.pdfJs.getDocument(params.url || params).promise;
                };
                if ('pdfjsLib' in $window) {
                    this.pdfJs = $window["pdfjsLib"];
                }
                else if ('PDFJS' in $window) {
                    this.pdfJs = $window["PDFJS"];
                }
            }
            PdfService.prototype.createWorker = function () {
                return new this.pdfJs.PDFWorker('pdfWorker');
            };
            PdfService.$inject = ["$window"];
            return PdfService;
        }());
        Service.PdfService = PdfService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .service("PdfService", HCTRA.Service.PdfService);
})();
(function () {
    'use strict';
    // angular.module('HCTRAModule').service('readMoreOrLessService', HCTRA.Service.ReadMoreOrLessService);
})();
(function () {
    "use strict";
    angular.module("HCTRAModule").service("responsiveService", ["$window",
        function ($window) {
            this.isMobile = function () {
                return ($window.innerWidth < 768);
            };
            this.isDesktop = function () {
                return !this.isMobile();
            };
            this.isIPadPortrait = function () {
                return ($window.innerWidth === 768);
            };
        }
    ]);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        "use strict";
        var RssService = /** @class */ (function () {
            function RssService(environmentConfig, documentLocationService, routes, $q) {
                var _this = this;
                this.environmentConfig = environmentConfig;
                this.documentLocationService = documentLocationService;
                this.routes = routes;
                this.$q = $q;
                this.goToRssFeed = function (locationId) {
                    var rssLink = _this.getRssLink(locationId);
                    if (angular.isDefined(rssLink)) {
                        _this.documentLocationService.goToHref(rssLink);
                    }
                };
                this.injectRssData = function () {
                    var rssLinkArray = [
                        _this.getRssLink(_this.rssHomeClosuresKey),
                        _this.getRssLink(_this.rssHomeNewsKey),
                        _this.getRssLink(_this.rssMajorClosuresKey),
                        _this.getRssLink(_this.rssLatestNewsKey)
                    ];
                    return _this.$q(function (fulfill) {
                        fulfill(rssLinkArray);
                    });
                };
                this.rssHomeClosuresKey = "inHomeClosures";
                this.rssHomeNewsKey = "inHomeNews";
                this.rssMajorClosuresKey = "inMajorClosures";
                this.rssLatestNewsKey = "inLatestNews";
                this.getRssLink = function (locationId) {
                    var rssConfig = _this.environmentConfig.rssConfig;
                    for (var rssLink in rssConfig) {
                        if (rssConfig.hasOwnProperty(rssLink)) {
                            if (rssConfig[rssLink].Locations.indexOf(locationId) !== -1) {
                                return _this.routes.rssFeed + rssLink;
                            }
                        }
                    }
                };
            }
            RssService.$inject = ["environmentConfig", "documentLocationService", "routes", "$q"];
            return RssService;
        }());
        Service.RssService = RssService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("rssService", HCTRA.Service.RssService);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('safariPrivateService', ['errorDisplayService',
        function (errorDisplayService) {
            var dataFactory = {};
            dataFactory.checkIfSafariPrivateMode = function () {
                if ((!navigator.cookieEnabled) || (!sessionStorage)) {
                    errorDisplayService.displayToasts(['Current browser configuration is not supported. Both cookies and local storage need to be enabled to use this site'], 'Error');
                }
            };
            return dataFactory;
        }]);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        "use strict";
        var SaveBillingService = /** @class */ (function () {
            function SaveBillingService(genericRepo, responseErrorService, modalService, $state) {
                var _this = this;
                this.genericRepo = genericRepo;
                this.responseErrorService = responseErrorService;
                this.modalService = modalService;
                this.$state = $state;
                this.createSaveRequest = function (scope) {
                    var billingInfoCopy = angular.copy(scope.billingInfo);
                    return scope.billingType === "CREDIT" ?
                        (scope.billingInfo.cards[0].primary = true, _this.createCreditCardSaveRequest(billingInfoCopy)) :
                        _this.createEftSaveRequest(billingInfoCopy);
                };
                this.createEftSaveRequest = function (billingInfo) {
                    angular.extend(billingInfo, {
                        cards: null,
                        billingTypeCode: "E",
                        billingTypeDisplay: "EFT"
                    });
                    return {
                        billingInfo: billingInfo,
                        cards: null
                    };
                };
                this.getDate = function (year, month) {
                    var dateString = angular.toJson(new Date(Number(year), Number(month)));
                    return (dateString.slice(0, 1) === '"' && dateString.slice(-1) === '"') ?
                        dateString.slice(1, -1) :
                        dateString;
                };
                this.createCreditCardSaveRequest = function (billingInfo) {
                    billingInfo.cards[0].primary = true;
                    angular.forEach(billingInfo.cards, function (card) {
                        var zip = card.zip, international = card.international, cardExpiresDate = card.cardExpiresDate, country = card.country, selectedYear = card.selectedYear, expMonth = card.expMonth;
                        angular.extend(card, {
                            zipCode: zip,
                            country: international === false ? "USA" : country,
                            cardExpiresDate: angular.isString(card.cardExpiresDate) && card.cardExpiresDate !== "" ? cardExpiresDate : _this.getDate(selectedYear, expMonth)
                        });
                    });
                    angular.extend(billingInfo, {
                        eft: null,
                        billingTypeCode: "C",
                        billingTypeDisplay: "CREDIT"
                    });
                    return {
                        billingInfo: billingInfo,
                        cards: billingInfo.cards,
                        eft: null
                    };
                };
                this.saveCardOrEft = function (request, nextState) {
                    return _this.genericRepo.dataFactory.saveBillingInformation(request).then(function (response) {
                        return _this.processSaveResponse(response, nextState);
                    });
                };
                this.saveCreditCard = this.saveCardOrEft;
                this.saveEFT = this.saveCardOrEft;
                this.isErrorFree = function (response) { return !response.errors || response.errors.length === 0 ? true : (_this.responseErrorService.displayErrorsFromResponse(response), false); };
                this.processSaveResponse = function (response, nextState) {
                    if (_this.isErrorFree(response)) {
                        _this.responseErrorService.displayAlertsFromResponse(response, true);
                        _this.modalService.showUpdateSuccessModal("Billing Information Update", "billing information");
                        return _this.$state.go(nextState, {}, { reload: true });
                    }
                    return false;
                };
            }
            SaveBillingService.$inject = ["genericRepo", "responseErrorService", "modalService", "$state"];
            return SaveBillingService;
        }());
        Service.SaveBillingService = SaveBillingService;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("saveBillingService", HCTRA.Service.SaveBillingService);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').factory("stacktraceService", function () {
        // "StackTrace" is a global object.
        return ({
            //get: StackTrace.get,
            //fromError: StackTrace.fromError,
            //deinstrument : StackTrace.deinstrument,
            //instrument: StackTrace.instrument,
            //generateArtificially: StackTrace.generateArtificially,
            //report: StackTrace.report
            print: printStackTrace
        });
    });
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('stateStackMemoryService', [
        function () {
            var MAXIMUM_STATES_ON_STACK = 10;
            var newStateObject = function (stateName, type) {
                var o = {};
                o.name = stateName;
                o.type = type;
                o.time = new Date();
                return o;
            };
            // closure to keep track of the state stack and restrict its size
            var stateStack = (function () {
                var stack = [];
                return {
                    maxStates: MAXIMUM_STATES_ON_STACK,
                    addState: function (st) {
                        stack.push(st);
                        if (stack.length > this.maxStates) {
                            //remove the oldest state
                            stack = stack.slice(1);
                        }
                    },
                    getStates: function () {
                        return stack;
                    },
                    getLastState: function () {
                        return stack[stack.length - 1];
                    },
                    popState: function () {
                        return stack.pop();
                    }
                };
            }());
            var serviceFactory = {};
            serviceFactory.addStateToStackMemory = function (inState, type) {
                stateStack.addState(newStateObject(inState, type));
                //using session storage directly to prevent a circular reference in angularLogger
                sessionStorage.setItem && sessionStorage.setItem('stateStack', angular.toJson(stateStack.getStates()));
            };
            serviceFactory.getStateStack = function () {
                var stack1 = stateStack.getStates();
                if (sessionStorage) {
                    var stack2 = angular.fromJson(sessionStorage.getItem('stateStack'));
                    if (angular.isString(stack2)) {
                        stack2 = angular.fromJson(stack2);
                    }
                    if (angular.isArray(stack2) && (stack2.length > stack1.length)) {
                        stack1 = stack2;
                    }
                }
                return stack1;
            };
            serviceFactory.getLastState = function () {
                return stateStack.getLastState() || { name: "" };
            };
            serviceFactory.printStack = function () {
                var str = '';
                var stack = this.getStateStack();
                if (stack !== null) {
                    for (var x = 0; x < stack.length; x++) {
                        str += '(' + stack[x].name + ' :: ';
                        if (angular.isString(stack[x].time)) {
                            str += stack[x].time + ') ';
                        }
                        else {
                            str += (stack[x].time.getMonth() + 1) +
                                '/' + stack[x].time.getDate() + '/' + stack[x].time.getFullYear() +
                                "  " + stack[x].time.getHours() + ':' + stack[x].time.getMinutes() +
                                ':' + stack[x].time.getSeconds() + ') ';
                        }
                    }
                }
                return str;
            };
            serviceFactory.popState = function () {
                return stateStack.popState();
            };
            return serviceFactory;
        }
    ]);
}());
var HCTRA;
(function (HCTRA) {
    var Storefront;
    (function (Storefront) {
        var Service;
        (function (Service) {
            var StorefrontEventService = /** @class */ (function () {
                function StorefrontEventService(angularElementFunction, $window, $interval, documentLocationService, $q, $location, $timeout, storefrontService, storefrontModalService, $state, stateNames, $rootScope, errorDisplayService, genericRepo, maintenanceService, environmentConfig, $transitions //doh!
                ) {
                    var _this = this;
                    this.angularElementFunction = angularElementFunction;
                    this.$window = $window;
                    this.$interval = $interval;
                    this.documentLocationService = documentLocationService;
                    this.$q = $q;
                    this.$location = $location;
                    this.$timeout = $timeout;
                    this.storefrontService = storefrontService;
                    this.storefrontModalService = storefrontModalService;
                    this.$state = $state;
                    this.stateNames = stateNames;
                    this.$rootScope = $rootScope;
                    this.errorDisplayService = errorDisplayService;
                    this.genericRepo = genericRepo;
                    this.maintenanceService = maintenanceService;
                    this.environmentConfig = environmentConfig;
                    this.$transitions = $transitions;
                    this.windows = [];
                    this.isInMainenanceMode = false;
                    //tracks timestamp since last user interaction
                    this.activityTimestamp = StorefrontEventService.newTimestamp();
                    //flag for defering activity checks. used when the inactivity modal has opened and count down should start.
                    this.disableActivityCheck = false;
                    this.prtMsg = "\n<style>\n@media screen {\n    .prntMsg {\n        display: block;\n        width: 400px;\n        height: 400px;\n        background-color: white;\n        position: absolute;\n        top: 0px;\n        left: 0px;\n    }\n}\n@media print {\n    .prntMsg {\n        display: none;\n    }\n}\n</style>\n<div class='prntMsg'>Document sent to printer.</div>\n";
                    this.stripLinks = function (element) {
                        if (!_this.storefrontService.isEnabled()) {
                            return;
                        }
                        var elms = _this.angularElementFunction(element).find(":not(eft-ach-disclaimer *)>a[href]:not([href^='#']):not([href='']),a[ng-click].disable-for-storefront");
                        //stop listening for dom changes for a moment
                        _this.observer.disconnect();
                        /* tslint:disable-next-line */
                        for (var i = 0; i < elms.length; i++) {
                            var elm = _this.angularElementFunction(elms[i]);
                            elm.removeAttr('target');
                            if (!_this.possiblePdf(elm.attr('href')) && !_this.storefrontService.fullSiteMode) {
                                //strip anchors
                                elm.replaceWith(elm.contents());
                            }
                        }
                        //ok, start listening again
                        _this.observer.observe(element, {
                            childList: true,
                            subtree: true
                        });
                    };
                    //disables scrolling of main window
                    this.disableWindowScroll = function (evt) {
                        _this.angularElementFunction(evt.target).scrollTop(0);
                    };
                    //intercepts anchor(links, 'a') clicks and handles them
                    this.nonUiRouterLinkClickIntercepter = function (evt) {
                        var elm = _this.angularElementFunction(evt.currentTarget);
                        var href = elm.attr('href');
                        var baseURI = (new _this.$window.URL(_this.$location.absUrl())).origin;
                        elm.removeAttr('target');
                        if (angular.isUndefined(href)) {
                            return true;
                        }
                        else if (_this.isExternalLink(href)) {
                            evt.preventDefault();
                            evt.stopPropagation();
                            evt.stopImmediatePropagation();
                            return false;
                        }
                        else if (href !== "") {
                            //pdf first
                            href = href.toLowerCase();
                            if (_this.possiblePdf(href) && !elm.attr('not-pdf')) {
                                _this.storefrontModalService
                                    .showPdf(baseURI + '/' + href).then(function () { }).catch(function () {
                                    elm.attr('not-pdf', '1');
                                    _this.$location.url(href);
                                });
                                evt.preventDefault();
                                evt.stopPropagation();
                                evt.stopImmediatePropagation();
                                return false;
                            }
                        }
                        return true;
                    };
                    //intercepts window.open calls and handles them
                    this.windowDotOpenInterceptor = function (evt, args) {
                        //opening a window to write content into
                        if (args.href === '') {
                            //evt.preventDefault();
                            var win = _this.angularElementFunction(_this.$window);
                            var height = win.height();
                            var width = win.width();
                            //define the type of window storefront will allow
                            args.options = "status=no, toolbar=no, menubar=no, location=no, resizable=no, titlebar=no, directories=no, width=" + width + ", height=" + height;
                            var s_1 = _this;
                            var onOpen = function (newWin) {
                                s_1.windows.push(newWin);
                            };
                            args.onOpen = onOpen;
                        }
                        else if (_this.isExternalLink(args.href)) {
                            evt.preventDefault();
                        }
                        else {
                            evt.preventDefault();
                            //check if content might be a pdf
                            if (_this.possiblePdf(args.href)) {
                                //try to show pdf
                                _this.storefrontModalService
                                    .showPdf(args.href)
                                    .then(function () { })
                                    //if failed, then it wasn't a pdf, then just redirect to it
                                    .catch(function () { return _this.$location.url(args.href); });
                            }
                            else {
                                //just redirect to it.
                                _this.$location.url(args.href);
                            }
                        }
                    };
                    //intercepts document.location.href changes and handles them
                    this.locationHrefChanged = function (evt, arg) {
                        //stop rss links from opening
                        if (/^(\/rss)\/.*/i.test(arg.url)) {
                            evt.preventDefault();
                        }
                    };
                    //update the last time the user interacted with storefront
                    this.updateActivity = function () {
                        //only update activity timestamp if inactivity modal is not open
                        if (!_this.disableActivityCheck) {
                            _this.activityTimestamp = StorefrontEventService.newTimestamp();
                        }
                        //fix for elements appearing transparent
                        //            var doc = this.$window.document;
                        //                var textNode = doc.createTextNode(' ');
                        //                doc.body.appendChild(textNode);
                        //                this.$timeout(() => {
                        //                    textNode.parentNode.removeChild(textNode);
                        //                }, 15);//less then 1 frame at 60hz  
                        _this.angularElementFunction(_this.$window).trigger('resize');
                    };
                    //interval method called to determine if store has timed out
                    this.checkForUserTimeout = function () {
                        if (_this.$state.current.name === _this.stateNames.storefrontHome)
                            return _this.$q.reject();
                        var timeSpan = StorefrontEventService.newTimestamp() - _this.activityTimestamp;
                        //test for warning timelapse
                        if (timeSpan >= _this.environmentConfig.storefrontConfigs.StorefrontInactivityWarning && !_this.disableActivityCheck) {
                            _this.disableActivityCheck = true;
                            //open inactivity modal
                            return _this.storefrontModalService
                                .showInactivity()
                                .then(function () {
                                _this.disableActivityCheck = false;
                                _this.updateActivity();
                            });
                        }
                        return _this.$q.resolve();
                    };
                    //state change handler
                    this.onStateChange = function (transition) {
                        var toState = transition.to();
                        var fromState = transition.from();
                        var transAny = transition;
                        //redirect to store from home if not already there
                        if (!_this.storefrontService.isEnabled()) {
                            return _this.$q.reject();
                        }
                        return _this.storefrontService
                            .checkState(toState)
                            .then(function (result) {
                            var externalState = result.isExternal;
                            return _this.registeredEventHandler.onStartTransition(fromState, toState)
                                .then(function () {
                                if (externalState && !_this.storefrontModalService.isExternalTaskModalOpen()) {
                                    return _this.storefrontModalService
                                        .showExternalTask()
                                        .then(function () { return transAny.router.stateService.target(fromState.name); });
                                    //.then(() => this.registeredEventHandler.onEndTransition());
                                }
                            });
                        })
                            .then(function () { return _this.storefrontService.fullSiteMode
                            ? _this.$q.resolve()
                            : _this.$timeout(_this.environmentConfig.storefrontConfigs.StorefrontShortDelay); })
                            .catch(_this.handleCheckStateError);
                    };
                    this.handleCheckStateError = function (error) {
                        if (error.hasWorkItemRedirect && HCTRA.Model.SelectedOptions[error.workItemRedirect]) {
                            var isQueued = _this.storefrontService.isQueued(error.workItemRedirect);
                            if (isQueued) {
                                //we need to go back to this redirect state for some reason!
                                var redirectItem = _this.storefrontService.getWorkItemById(error.workItemRedirect);
                                redirectItem.isCompleted = false;
                            }
                            else {
                                _this.storefrontService.insertWorkItem(error.workItemRedirect);
                            }
                            return _this.storefrontService
                                .skip(error.workItemRedirect, false, false)
                                .then(function (stateName) { return _this.$state.go(stateName); });
                        }
                        if (error.restrictedAbort) {
                            return _this.$q.reject({ storefrontTransitionBlocked: true, storefrontTransitionBlockedStateName: error.restrictedStateName });
                        }
                        return _this.$q.reject(error);
                    };
                    this.onStateChangeSuccess = function (transition) {
                        var fromState = transition.from();
                        var toState = transition.to();
                        if (!_this.storefrontService.isEnabled()) {
                            return;
                        }
                        if (_this.storefrontService.fullSiteMode || !_this.storefrontModalService.isExternalTaskModalOpen()) {
                            _this.registeredEventHandler.onEndTransition();
                        }
                        if (!_this.storefrontService.fullSiteMode && _this.storefrontService.isCmsContent(toState)) {
                            _this.storefrontModalService.showCmsContent(toState, fromState.name);
                        }
                        _this.handleIfSiteEnteredMaintenanceMode();
                    };
                    this.onStateChangeError = function () {
                        _this.registeredEventHandler.onEndTransition();
                        _this.handleIfSiteEnteredMaintenanceMode();
                    };
                    this.handleIfSiteEnteredMaintenanceMode = function () {
                        _this.storefrontService
                            .isInMaintenanceMode()
                            .then(function () {
                            if (_this.isInMainenanceMode) {
                                return;
                            }
                            _this.isInMainenanceMode = true;
                            _this.disableActivityCheck = true;
                            _this.$timeout(function () {
                                _this.storefrontService
                                    .reset()
                                    .finally(function () {
                                    _this.storefrontModalService.showStorefrontMaintenanceMode();
                                    _this.errorDisplayService.clearToasts();
                                    if (_this.maintenanceModeIntervalToken) {
                                        _this.$interval.cancel(_this.maintenanceModeIntervalToken);
                                    }
                                    _this.maintenanceModeIntervalToken = _this.$interval(_this.checkForMaintenanceMode, _this.environmentConfig.storefrontConfigs.StorefrontMaintenanceModeIntervalDelay, 0, false);
                                });
                            }, 1000);
                        })
                            //ignore
                            .catch(function () { });
                    };
                    this.checkForMaintenanceMode = function () {
                        _this.storefrontService
                            .isInMaintenanceMode()
                            .then(function () { }) //ignore
                            .catch(function () {
                            _this.$interval.cancel(_this.maintenanceModeIntervalToken);
                            _this.maintenanceModeIntervalToken = null;
                            _this.disableActivityCheck = false;
                            _this.isInMainenanceMode = false;
                            return _this.storefrontService.reset();
                        })
                            .finally(function () { return _this.errorDisplayService.clearToasts(); });
                    };
                }
                StorefrontEventService.factory = function () {
                    var service = function (angularElementFunction, $window, $interval, documentLocationService, $q, $location, $timeout, storefrontService, storefrontModalService, $state, stateNames, $rootScope, errorDisplayService, genericRepo, maintenanceService, environmentConfig, $transitions) { return new StorefrontEventService(angularElementFunction, $window, $interval, documentLocationService, $q, $location, $timeout, storefrontService, storefrontModalService, $state, stateNames, $rootScope, errorDisplayService, genericRepo, maintenanceService, environmentConfig, $transitions); };
                    service.$inject = ["InjectableAngularElementFunction", "$window", "$interval", "documentLocationService", "$q", "$location", "$timeout", "StorefrontService", "StorefrontModalService", "$state", "stateNames", "$rootScope", "errorDisplayService", "genericRepo", "maintenanceService", "environmentConfig", "$transitions"];
                    return service;
                };
                StorefrontEventService.prototype.startListening = function (storefrontEvents) {
                    var _this = this;
                    if (!this.storefrontService.isEnabled())
                        return;
                    this.registeredEventHandler = storefrontEvents;
                    //ui events
                    this.angularElementFunction(this.$window.document)
                        //wire tracked user events
                        .on(StorefrontEventService.userInactivityEvents, this.updateActivity)
                        //disables the HTML and body tag from scrolling
                        .on(StorefrontEventService.eventName('scroll'), this.disableWindowScroll);
                    //ui events
                    this.angularElementFunction(this.$window.document.body)
                        //hijack links forcing page reload or 'new tab' calls
                        .on(StorefrontEventService.gotoLinkEvents, "a[href]", function (evt) { _this.nonUiRouterLinkClickIntercepter(evt); });
                    //interval to check inactivity time
                    this.intervalToken = this.$interval(this.checkForUserTimeout, this.environmentConfig.storefrontConfigs.StorefrontInactivityIntervalDelay, 0, false);
                    //registers events to the storefront service
                    this.storefrontService.registerEventHandlers(storefrontEvents);
                    //intercept state changes
                    this.deregisterStateSuccessWatcher = this.$transitions.onSuccess({}, this.onStateChangeSuccess);
                    this.deregisterStateErrorWatcher = this.$transitions.onError({}, this.onStateChangeError);
                    this.deregisterStateWatcher = this.$transitions.onStart({}, this.onStateChange);
                    //intercept window.open calls
                    this.deregisterWindowOpener = this.$window.open["listen"](this.windowDotOpenInterceptor);
                    //intercept href changes
                    this.deregisterHrefWatcher = this.documentLocationService.goToHref["listen"](this.locationHrefChanged);
                };
                StorefrontEventService.prototype.addMutationObserver = function (element) {
                    var _this = this;
                    if (this.observer) {
                        this.observer.disconnect();
                        this.observer = null;
                    }
                    if ("MutationObserver" in this.$window) {
                        this.observer = new this.$window["MutationObserver"](function () { return _this.stripLinks(element); });
                        this.observer.observe(element, {
                            childList: true,
                            subtree: true
                        });
                    }
                };
                StorefrontEventService.prototype.stopListening = function () {
                    /* tslint:disable */
                    this.deregisterStateWatcher && this.deregisterStateWatcher();
                    this.deregisterWindowOpener && this.deregisterWindowOpener();
                    this.deregisterHrefWatcher && this.deregisterHrefWatcher();
                    this.deregisterStateSuccessWatcher && this.deregisterStateSuccessWatcher();
                    this.deregisterStateErrorWatcher && this.deregisterStateErrorWatcher();
                    /* tslint:enable */
                    //turn off event listeners
                    this.angularElementFunction(this.$window.document).off(StorefrontEventService.eventNamespace);
                    //turn off inactivity interval
                    this.$interval.cancel(this.intervalToken);
                    //deregister storefront events
                    if (this.maintenanceModeIntervalToken) {
                        this.$interval.cancel(this.maintenanceModeIntervalToken);
                    }
                    if (this.observer) {
                        this.observer.disconnect();
                        this.observer = null;
                    }
                };
                StorefrontEventService.prototype.resetState = function () {
                    this.disableActivityCheck = false;
                    this.updateActivity();
                    this.clearWindows();
                };
                StorefrontEventService.prototype.clearWindows = function () {
                    while (this.windows[0]) {
                        var w = this.windows.pop();
                        try {
                            if (w && !w.closed) {
                                w.close();
                            }
                        }
                        catch (e) {
                            continue;
                        }
                    }
                };
                //try to determine if url is possibly a pdf by the url
                StorefrontEventService.prototype.possiblePdf = function (url) {
                    return (/^(-\/media|sitecore|content|api\/sessions\/pdf|\/api\/sessions\/pdf)\/.*/i.test(url));
                };
                //determine if url is outside orgin
                StorefrontEventService.prototype.isExternalLink = function (url) {
                    //TODO: this needs to update to include api services once they are hosted outside of web project
                    if (/^(http|https):\/\/.*/i.test(url)) {
                        return !url.startsWith(this.$window.location.origin);
                    }
                    else {
                        return false;
                    }
                };
                //namespace used for tracking UI events
                StorefrontEventService.eventNamespace = ".StoreFrontEvents";
                // namespaces user events to track for inactivity
                StorefrontEventService.userInactivityEvents = 'click dblclick keydown keypress keyup mousedown mousemove scroll tap swipe touchstart touchmove touchend'
                    .replace(/(\S+)/g, "$1" + StorefrontEventService.eventNamespace);
                StorefrontEventService.gotoLinkEvents = 'click dblclick keyup tap'
                    .replace(/(\S+)/g, "$1" + StorefrontEventService.eventNamespace);
                //generates a new timestamp
                StorefrontEventService.newTimestamp = function () { return Date.now(); };
                //creates ui event name
                StorefrontEventService.eventName = function (eventName) { return eventName + StorefrontEventService.eventNamespace; };
                return StorefrontEventService;
            }());
            Service.StorefrontEventService = StorefrontEventService;
        })(Service = Storefront.Service || (Storefront.Service = {}));
    })(Storefront = HCTRA.Storefront || (HCTRA.Storefront = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .value("InjectableAngularElementFunction", angular.element)
        .factory("StorefrontEventService", HCTRA.Storefront.Service.StorefrontEventService.factory());
})();
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        //concrete service that implements the storefron modal service interface that wrapps the existing webisite modal service
        var StorefrontModalService = /** @class */ (function () {
            function StorefrontModalService(modalService, $q, storefrontService, stateNames, $state, $timeout, routes, errorDisplayService, storefrontModalServiceModalNames, storefrontMaterialDialogWrapper, homeStates, cavveStates, vehiclesStates, addMissingInformationService) {
                var _this = this;
                this.modalService = modalService;
                this.$q = $q;
                this.storefrontService = storefrontService;
                this.stateNames = stateNames;
                this.$state = $state;
                this.$timeout = $timeout;
                this.routes = routes;
                this.errorDisplayService = errorDisplayService;
                this.storefrontModalServiceModalNames = storefrontModalServiceModalNames;
                this.storefrontMaterialDialogWrapper = storefrontMaterialDialogWrapper;
                this.homeStates = homeStates;
                this.cavveStates = cavveStates;
                this.vehiclesStates = vehiclesStates;
                this.addMissingInformationService = addMissingInformationService;
                //shows a modals saying init has failed
                this.failedToInitMessage = function () {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontServiceInitFailed)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .actions({
                        "Reload": "Reload"
                    })
                        .header("Storefront failed to initialize.")
                        .body("The storefront failed to initialize properly. View logs for more information.")
                        .show(true);
                };
                this.skipTaskMessage = function () {
                    return _this.storefrontService.getCmsItemById(_this.routes.storefrontSkipTaskOrGoBackModal)
                        .then(function (response) {
                        return _this.createWithGenericMediumModal(_this.modalNames.StorefrontSkippTaskMessage)
                            .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                            .actions({
                            "stay": response.buttons["STAY"],
                            "leave": response.buttons["LEAVE"]
                        })
                            .header(response.Title)
                            .body(response.Message)
                            .inject("showModalClose", true)
                            .show(true)
                            .then(function (action) { return action === "leave"; });
                    });
                };
                this.blockModalsInRestrictedState = function (angularEvent, name) {
                    if (!_this.storefrontModalServiceModalNames[name] && _this.storefrontService.stateChangingRestricted) {
                        angularEvent.preventDefault();
                    }
                    return undefined;
                };
            }
            //factor method of creating service
            StorefrontModalService.factory = function () {
                var service = function (modalService, $q, storefrontService, stateNames, $state, $timeout, routes, errorDisplayService, storefrontModalServiceModalNames, storefrontMaterialDialogWrapper, homeStates, cavveStates, vehiclesStates, addMissingInformationService) {
                    return new StorefrontModalService(modalService, $q, storefrontService, stateNames, $state, $timeout, routes, errorDisplayService, storefrontModalServiceModalNames, storefrontMaterialDialogWrapper, homeStates, cavveStates, vehiclesStates, addMissingInformationService);
                };
                service.$inject =
                    ["modalService", "$q", "StorefrontService", "stateNames",
                        "$state", "$timeout", "routes", "errorDisplayService",
                        "StorefrontModalServiceModalNames", "storefrontMaterialDialogWrapper", "homeStates", "cavveStates",
                        "vehiclesStates",
                        "addMissingInformationService"];
                return service;
            };
            Object.defineProperty(StorefrontModalService.prototype, "modalNames", {
                get: function () {
                    return this.storefrontModalServiceModalNames;
                },
                enumerable: true,
                configurable: true
            });
            StorefrontModalService.prototype.setGlobalModalSettings = function () {
                var _this = this;
                this.modalService.clearListeners();
                this.modalService.onOpening(function (evt, name, settings, textOptions) { return _this.onOpening(evt, name, settings, textOptions); });
                this.modalService.onOpening(this.blockModalsInRestrictedState);
            };
            StorefrontModalService.prototype.restoreGlobalModalSettings = function () {
                this.modalService.resetSettings();
                this.modalService.onOpening(this.blockModalsInRestrictedState);
            };
            StorefrontModalService.prototype.create = function (name) {
                return new InternalStorefrontModalBuilder(name, this.modalService, this.$q);
            };
            StorefrontModalService.prototype.createWithGenericMediumModal = function (name) {
                return new InternalStorefrontModalBuilder(name, this.modalService, this.$q)
                    .controller('StorefrontGenericPromptController')
                    .classNames(['mediumModal', 'storefrontGenericPromptWindow']);
            };
            StorefrontModalService.prototype.isExternalTaskModalOpen = function () {
                return this.modalService.isModalOpen(this.modalNames.StorefrontExternalTask);
            };
            StorefrontModalService.prototype.closeExternalTaskModal = function () {
                this.modalService.closeByName(this.modalNames.StorefrontExternalTask);
            };
            StorefrontModalService.prototype.isMaintenanceModalOpen = function () {
                return this.modalService.isModalOpen(this.modalNames.StorefrontMaintenance);
            };
            StorefrontModalService.prototype.closeAll = function (dismiss) {
                this.modalService.closeAll(dismiss);
                this.storefrontMaterialDialogWrapper.closeAll();
                this.errorDisplayService.clearToasts();
            };
            StorefrontModalService.prototype.closeByName = function (name, dismiss) {
                this.modalService.closeByName(name, dismiss);
            };
            StorefrontModalService.prototype.getCmsContent = function (id) {
                return this.storefrontService.getCmsItemById(id);
            };
            StorefrontModalService.prototype.finishAccountSetup = function () {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontfinishAccountSetupModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontFinishAccountSetup)
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .actions({
                        "finish": response.buttons["FINISH"]
                    })
                        .header(response.Title)
                        .body(response.Message)
                        .show(true)
                        .then(function () {
                        var workItemId = HCTRA.Model.SelectedOptions.OACC;
                        return _this.storefrontService.softReset()
                            .then(function () {
                            _this.storefrontService.insertWorkItem(workItemId);
                            return _this.storefrontService.startWorkItems();
                        })
                            .then(function (state) {
                            return _this.$state.go(state);
                        });
                    });
                });
            };
            StorefrontModalService.prototype.showVehicalViolationMessage = function () {
                var _this = this;
                //remove any toasters that are opening or have just started...
                this.errorDisplayService.clearToasts();
                return this.storefrontService.getCmsItemById(this.routes.storefrontVehicleHasViolationModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontVehicalViolations)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .actions({
                        "finish": response.buttons["FINISH"]
                    })
                        .header(response.Title)
                        .body(response.Message)
                        .show(true)
                        .then(function () { return _this.storefrontService.softReset(); })
                        .then(function () { return _this.$state.go(_this.stateNames.storefrontSurvey); });
                });
            };
            StorefrontModalService.prototype.showVehicalViolationSuspendedAccountMessage = function () {
                var _this = this;
                //remove any toasters that are opening or have just started...
                this.errorDisplayService.clearToasts();
                return this.storefrontService.getCmsItemById(this.routes.storefrontVehicleHasViolationSuspendedAccountModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontSuspendedWithVehicalViolations)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .actions({
                        "finish": response.buttons["FINISH"],
                        "notFinished": response.buttons["NOTFINISHED"]
                    })
                        .header(response.Title)
                        .body(response.Message)
                        .show(true)
                        .then(function (action) {
                        if (action === "notFinished") {
                            return _this.doMoreMessage(function () { return _this.showVehicalViolationSuspendedAccountMessage(); });
                        }
                        return _this.$state.go(_this.stateNames.storefrontSurvey);
                    });
                });
            };
            StorefrontModalService.prototype.iDontSeeWhatINeedMessage = function (goBackCallback) {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontOtherOptionsModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontINeedTo)
                        .template("/app/templates/storefront/StorefrontINeedToTemplate.html")
                        .actions({
                        "talkToCsr": response.buttons["CSR"],
                        "fullSite": response.buttons["WEBSITE"],
                        "goback": response.buttons["TASKSELECTION"]
                    })
                        .header(response.Title)
                        .inject("showModalClose", true)
                        .inject("showGoBack", null)
                        .show(true)
                        .then(function (action) {
                        switch (action) {
                            case "talkToCsr":
                                return _this.showGotoCsr()
                                    .then(function (finished) { return finished ? _this.storefrontService.reset() : _this.iDontSeeWhatINeedMessage(function () { return goBackCallback(); }); });
                            case "fullSite":
                                _this.restoreGlobalModalSettings();
                                _this.storefrontService.fullSiteMode = true;
                                return _this.storefrontService
                                    .startNewSession()
                                    .then(function () { return _this.$state.go(_this.homeStates.Frame); });
                            default:
                                return goBackCallback ? goBackCallback() : _this.$q.resolve();
                        }
                    });
                });
            };
            StorefrontModalService.prototype.doMoreMessage = function (goBackCallback) {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontDoMoreModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontDoSomethingElse)
                        .template("/app/templates/storefront/StorefrontINeedToWithMoreTemplate.html")
                        .actions({
                        "anotherTask": response.buttons["ANOTHERTASK"],
                        "talkToCsr": response.buttons["CSR"],
                        "fullSite": response.buttons["FULLWEBSITE"],
                        "finish": response.buttons["FINISH"]
                    })
                        .header(response.Title)
                        .inject("showGoBack", response.buttons["BACK"])
                        .show(true)
                        .then(function (action) {
                        switch (action) {
                            case "anotherTask":
                                _this.modalService.closeAll();
                                return _this.storefrontService
                                    .softReset()
                                    .finally(function () { return _this.$state.go(_this.stateNames.storefrontSelection); });
                            case "talkToCsr":
                                return _this.showGotoCsr()
                                    .then(function (finished) {
                                    if (finished) {
                                        if (_this.storefrontService.isActiveSession()) {
                                            _this.modalService.closeAll();
                                            return _this.$state.go(_this.stateNames.storefrontSurvey);
                                        }
                                        else {
                                            return _this.storefrontService.reset();
                                        }
                                    }
                                    else {
                                        return _this.doMoreMessage(function () { return goBackCallback(); });
                                    }
                                });
                            case "fullSite":
                                _this.restoreGlobalModalSettings();
                                _this.storefrontService.fullSiteMode = true;
                                _this.modalService.closeAll();
                                return _this.$state.go(_this.homeStates.Frame);
                            case "finish":
                                if (_this.storefrontService.isActiveSession()) {
                                    _this.modalService.closeAll();
                                    return _this.$state.go(_this.stateNames.storefrontSurvey);
                                }
                                else {
                                    return _this.storefrontService.reset();
                                }
                            default:
                                return goBackCallback ? goBackCallback() : _this.$q.resolve();
                        }
                    });
                });
            };
            StorefrontModalService.prototype.showCompletionMessage = function (completedWorkItem) {
                var template = completedWorkItem && completedWorkItem.completionModal;
                var state = null;
                var completedItemInitState = this.storefrontService.getWorkItemInitState(completedWorkItem);
                if (this.storefrontService.hasIncompleteWorkItems()) {
                    var item = this.storefrontService.currentWorkItem();
                    state = this.storefrontService.getWorkItemInitState(item);
                }
                switch (template) {
                    case HCTRA.Model.StorefrontModalTemplatesEnum.ThankYouViolationsPayment:
                        //if workitem got signal to complete and the state is actuall the init state
                        if (completedItemInitState === this.$state.current.name) {
                            //.. then the item was ended early but successful, in this case, no violations and no payments
                            return this.handleDefaultTaskComplete(state);
                        }
                        else if (this.cavveStates.Receipt === this.$state.current.name) {
                            //if CAVVE flow then account is created at end of flow so show CAVVE signup modal
                            var removedWorkItem = this.storefrontService.removeWorkItem(HCTRA.Model.SelectedOptions.OACC); //This will remove the create account task if it exists
                            return (removedWorkItem) ? this.postCAVVESignup() : this.postSignup(); //if removedWorkItem is defined, that means it was removed from queue
                        }
                        else {
                            return this.postPaymentUpsale();
                        }
                    case HCTRA.Model.StorefrontModalTemplatesEnum.ThankYouNewAccount:
                        return this.postSignup();
                    case HCTRA.Model.StorefrontModalTemplatesEnum.VehicalViolationSuspendedAccountMessage:
                        return this.showVehicalViolationSuspendedAccountMessage();
                    case HCTRA.Model.StorefrontModalTemplatesEnum.None:
                        return state ? this.$state.go(state) : this.showAllTasksComplete();
                    case HCTRA.Model.StorefrontModalTemplatesEnum.FinishSetup:
                        return this.finishAccountSetup();
                    default:
                        return this.handleDefaultTaskComplete(state);
                }
            };
            StorefrontModalService.prototype.handleDefaultTaskComplete = function (stateName) {
                var _this = this;
                if (this.storefrontService.hasIncompleteWorkItems()) {
                    return this.showTaskComplete()
                        .then(function () { return stateName ? _this.$state.go(stateName) : _this.showAllTasksComplete(); });
                }
                else {
                    return this.showAllTasksComplete();
                }
            };
            StorefrontModalService.prototype.showStorefrontMaintenanceMode = function () {
                return this.createWithGenericMediumModal(this.modalNames.StorefrontMaintenance)
                    .template("/app/templates/storefront/StorefrontMaintenanceTemplate.html")
                    .classNames(['largeModal', 'storefrontGenericPromptWindow'])
                    .image(this.storefrontService.getMaintenanceImg())
                    .show(true);
            };
            StorefrontModalService.prototype.showTaskComplete = function () {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontTaskCompleteModal)
                    .then(function (response) {
                    return _this.create(_this.modalNames.StorefrontWorkitemComplete)
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .controller('StorefrontTaskCompleteController')
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                        "next": response.buttons["NEXT"]
                    })
                        .classNames(["mediumModal", "storefrontGenericPromptWindow"])
                        .show();
                });
            };
            StorefrontModalService.prototype.showAllTasksComplete = function () {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontAllTasksCompleteModal)
                    .then(function (response) {
                    return _this.create(_this.modalNames.StorefrontAllWorkItemsComplete)
                        .header(response.Title)
                        .actions({
                        "finish": response.buttons["FINISH"],
                        "notFinished": response.buttons["NOTFINISHED"]
                    })
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .controller('StorefrontAllTasksCompleteController')
                        .classNames(["mediumModal", "storefrontGenericPromptWindow"])
                        .show()
                        .then(function (action) {
                        if (action === "finish") {
                            return _this.forceGoToSurvey();
                        }
                        return _this.doMoreMessage(function () { return _this.showAllTasksComplete(); });
                    });
                });
            };
            StorefrontModalService.prototype.postPaymentUpsale = function () {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontPaymentViolationsModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontWorkitemCompleteSignup)
                        .template("/app/templates/storefront/StorefrontMissedATollPaymentModalTemplate.html")
                        .image(response.ImageItem)
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                        "signUp": response.buttons["SIGNUP"],
                        "finish": response.buttons["FINISH"]
                    })
                        .show(true)
                        .then(function (action) {
                        if (action === "signUp") {
                            var workItemId = HCTRA.Model.SelectedOptions.OACC;
                            _this.storefrontService.insertWorkItem(workItemId);
                            return _this.storefrontService.skip(workItemId).then(function (funcState) { return _this.$state.go(funcState); });
                        }
                        else {
                            if (_this.storefrontService.hasIncompleteWorkItems()) {
                                var state = _this.storefrontService.getWorkItemInitState(_this.storefrontService.currentWorkItem());
                                return state ? _this.$state.go(state) : _this.forceGoToSurvey();
                            }
                            else {
                                return _this.forceGoToSurvey();
                            }
                        }
                    });
                });
            };
            StorefrontModalService.prototype.postSignup = function () {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontThankYouNewAccountModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontWorkitemCompleteGoToCsr)
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                        "finish": response.buttons["FINISH"],
                        "notFinished": response.buttons["NOTFINISHED"]
                    })
                        .show(true)
                        .then(function (action) {
                        if (action === "notFinished") {
                            return _this.doMoreMessage(function () { return _this.postSignup(); });
                        }
                        else {
                            return _this.forceGoToSurvey();
                        }
                    });
                });
            };
            StorefrontModalService.prototype.genericPostSignup = function (cmsItemId) {
                var _this = this;
                return this.storefrontService.getCmsItemById(cmsItemId)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontWorkitemCompleteGoToCsr)
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .header(response.Title)
                        .body(response.Message)
                        .actions(__assign({ "finish": response.buttons["FINISH"] }, (response.buttons["NOTFINISHED"] ? { "notFinished": response.buttons["NOTFINISHED"] } : {})))
                        .show(true)
                        .then(function (action) {
                        if (action === "notFinished") {
                            return _this.doMoreMessage(function () { return _this.postSignup(); });
                        }
                        else {
                            return _this.forceGoToSurvey();
                        }
                    });
                });
            };
            StorefrontModalService.prototype.postCAVVESignup = function () {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontThankYouCAVVEModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontWorkitemCompleteCAVVE)
                        .template("/app/templates/storefront/StorefrontGenericPromptTemplate.html")
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                        "finish": response.buttons["FINISH"],
                        "notFinished": response.buttons["NOTFINISHED"]
                    })
                        .show(true)
                        .then(function (action) {
                        if (action === "notFinished") {
                            return _this.doMoreMessage(function () { return _this.postCAVVESignup(); });
                        }
                        else {
                            return _this.forceGoToSurvey();
                        }
                    });
                });
            };
            StorefrontModalService.prototype.showInactivity = function () {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontSessionTimeoutModal)
                    .then(function (response) {
                    return _this.create(_this.modalNames.StorefrontInactivity)
                        .template("/app/templates/storefront/StorefrontInactivityTemplate.html")
                        .controller("StorefrontInactivityController")
                        .classNames(['mediumModal', 'storefrontGenericPromptWindow'])
                        .header(response.Title)
                        .body(response.Message)
                        .actions({
                        "ok": response.buttons["OK"]
                    })
                        .show();
                });
            };
            StorefrontModalService.prototype.showGotoCsr = function () {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontAdditionalHelpModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontSeeCSR)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .header(response.Title)
                        .actions({
                        "finish": response.buttons["FINISH"]
                    })
                        .inject("showGoBack", response.buttons["BACK"])
                        .show(true)
                        .then(function (action) { return action === "finish"; });
                });
            };
            //show a modal with a rendered pdf
            StorefrontModalService.prototype.showPdf = function (href) {
                return this.create(this.modalNames.StorefrontPdfViewer)
                    .template('/app/templates/storefront/StorefrontPdfViewerTemplate.html')
                    .controller('StorefrontPdfViewerController')
                    .classNames(['largeModal', 'storefrontPdfWindow'])
                    .inject("pdfHref", href)
                    .show()
                    //This catch is very important: when modals are 'closed', the promises are resolved,
                    //however when modals are 'dismissed' they are rejected. If this method returns a rejected
                    //promise, the callee assumes the pdf didn't load, not that the modal was dismissed, like when
                    //the app is inactive. This catch allows the dismiss rejection to be ignored, allowing pdf modals
                    //to be dismissed without resulting in a url redirection.
                    .catch(function () { })
                    .then(function (e) {
                    if (e && e.name && e.name === "InvalidPDFException") {
                        throw e;
                    }
                });
            };
            //open modal for external task. promise resolves when closed, rejects when dismissed
            //return state is state to redirect to when closed/dismissed
            StorefrontModalService.prototype.showExternalTask = function () {
                return this.create(this.modalNames.StorefrontExternalTask)
                    .template('/app/templates/storefront/StorefrontExternalTaskModalTemplate.html')
                    .controller('StorefrontExternalTaskModalController')
                    .classNames(['largeModal', 'storefrontModalWindow'])
                    .show();
            };
            StorefrontModalService.prototype.skippedTasksMessage = function (workItem) {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontSkippedTasksModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontIncompleteWorkitemsWhileSkipping)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .actions({
                        "notFinished": response.buttons["NOTFINISHED"],
                        "finish": response.buttons["FINISH"]
                    })
                        .header(response.Title)
                        .body(response.Message)
                        .inject("showModalClose", true)
                        .show(true)
                        .then(function (action) {
                        if (action === "notFinished") {
                            _this.storefrontService.setCurrentWorkItem(workItem);
                            return workItem;
                        }
                        else {
                            return null;
                        }
                    });
                });
            };
            StorefrontModalService.prototype.exit = function () {
                var _this = this;
                return this.storefrontService.getCmsItemById(this.routes.storefrontExitSessionModal)
                    .then(function (response) {
                    return _this.createWithGenericMediumModal(_this.modalNames.StorefrontExitSession)
                        .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                        .actions({
                        "exit": response.buttons["EXIT"],
                        "stay": response.buttons["STAY"]
                    })
                        .header(response.Title)
                        .body(response.Message)
                        .inject("showModalClose", true)
                        .show(true)
                        .then(function (action) {
                        if (action === "exit" && _this.storefrontService.fullSiteMode) {
                            return _this.$q
                                .when(_this.storefrontService.isActiveSession() ||
                                _this.storefrontService.startNewSession())
                                .then(function () {
                                _this.storefrontService.fullSiteMode = false;
                                return _this.forceGoToSurvey();
                            });
                        }
                        if (action === "exit") {
                            if (_this.storefrontService.isActiveSession()) {
                                return _this.forceGoToSurvey();
                            }
                            else {
                                return _this.storefrontService.reset();
                            }
                        }
                        else {
                            return _this.$q.resolve();
                        }
                    });
                });
            };
            StorefrontModalService.prototype.showCmsContent = function (state, returnStateName) {
                var _this = this;
                return this.create(this.modalNames.StorefrontCmsContent)
                    .template('/app/templates/storefront/StorefrontCmsModalTemplate.html')
                    .controller("StorefrontCmsModalController")
                    .inject("controllerName", state.controller)
                    .inject("template", state.templateUrl)
                    .classNames(['largeModal', 'storefrontGenericPromptWindow'])
                    .show()
                    .then(function () { return _this.$state.go(returnStateName); });
            };
            StorefrontModalService.prototype.closeCmsContent = function () {
                this.modalService.closeByName(this.modalNames.StorefrontCmsContent, true);
            };
            StorefrontModalService.prototype.noViolationsFound = function (title, body) {
                var _this = this;
                return this.createWithGenericMediumModal(this.modalNames.StorefrontNoViolationsFound)
                    .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                    .actions({
                    "proceed": "Proceed",
                    "anotherPlate": "Try another plate"
                })
                    .header(title)
                    .body(body)
                    .show(true)
                    .then(function (action) {
                    if (action === "proceed") {
                        return _this.storefrontService.completeWorkItem();
                    }
                    else {
                        return _this.$q.resolve(null);
                    }
                });
            };
            StorefrontModalService.prototype.noViolationsWithInvoiceFound = function (title, body) {
                var _this = this;
                return this.createWithGenericMediumModal(this.modalNames.StorefrontNoViolationsWithInvoiceFound)
                    .template('/app/templates/storefront/StorefrontGenericPromptTemplate.html')
                    .actions({
                    "proceed": "Proceed",
                    "tryagain": "Try another plate or invoice number"
                })
                    .header(title)
                    .body(body)
                    .show(true)
                    .then(function (action) {
                    if (action === "proceed") {
                        return _this.storefrontService.completeWorkItem();
                    }
                    else {
                        return _this.$q.resolve(null);
                    }
                });
            };
            //overrides settings when opening modals
            StorefrontModalService.prototype.onOpening = function (angularEvent, name, modalSettings, modalTextOptions) {
                var _a;
                var leaveUnModified = (_a = {},
                    _a[this.modalService.modalNames.PaymentModal] = "paymentModal storefrontModalWindow",
                    _a[this.modalService.modalNames.VehicleInfoSlidingPanel] = "side-drawer",
                    _a[this.modalService.modalNames.CancelSlidingPanel] = "side-drawer",
                    _a[this.modalService.modalNames.MailingAddressInfoSlidingPanel] = "side-drawer",
                    _a[this.modalService.modalNames.InvoiceListSlidingPanel] = "side-drawer",
                    _a[this.modalService.modalNames.PhoneEmailInfoSlidingPanel] = "side-drawer",
                    _a[this.modalService.modalNames.EditBillingInfoSlidingPanel] = "side-drawer",
                    _a);
                if ((!name || !this.modalNames[name]) && !leaveUnModified[name]) {
                    var template = (modalSettings.templateUrl === "/app/templates/common/modalAlert.html")
                        ? "/app/templates/storefront/StorefrontModalAlertReplacementTemplate.html"
                        : "/app/templates/storefront/StorefrontModalReplacementTemplate.html";
                    angular.extend(modalSettings, {
                        backdrop: true,
                        keyboard: true,
                        modalFade: true,
                        templateUrl: template,
                        controller: 'StorefrontModalReplacementController',
                        windowClass: 'mediumModal storefrontModalWindow'
                    });
                }
                if (leaveUnModified[name]) {
                    angular.extend(modalSettings, {
                        backdrop: "static",
                        keyboard: true,
                        modalFade: true,
                        windowClass: leaveUnModified[name]
                    });
                }
                //add content overrides for specific modals by name
                switch (name) {
                    case this.modalService.modalNames.ViolationsCannotAddVehicle:
                        angularEvent.preventDefault();
                        var currentScope = angularEvent.currentScope;
                        if (currentScope.currentUser.acctActivity === "S") {
                            return this.showVehicalViolationSuspendedAccountMessage();
                        }
                        else {
                            return this.showVehicalViolationMessage();
                        }
                    case this.modalService.modalNames.ViolationsNoViolationFound:
                        angularEvent.preventDefault();
                        return this.noViolationsFound(modalTextOptions.headerText, modalTextOptions.bodyText);
                    case this.modalService.modalNames.ViolationsNoViolationFoundWithInvoice:
                        angularEvent.preventDefault();
                        return this.noViolationsWithInvoiceFound(modalTextOptions.headerText, modalTextOptions.bodyText);
                    case this.modalService.modalNames.CreditCardPrompt:
                        modalSettings.templateUrl = "/app/templates/storefront/StorefrontCreditCardPromptTemplate.html";
                        modalSettings.backdrop = "static";
                        break;
                    //disabled modals...
                    case this.modalService.modalNames.Maintenance:
                    case this.modalService.modalNames.UpdateSuccess:
                    case this.modalService.modalNames.InvoicePayment:
                    case this.modalService.modalNames.ViolationsLandingLogin:
                        angularEvent.preventDefault();
                        break;
                    default:
                        break;
                }
            };
            StorefrontModalService.prototype.forceGoToSurvey = function () {
                var _this = this;
                this.addMissingInformationService.destroyMissingInformationFlags();
                return this.storefrontService.lockStateChanging(function () { return _this.$state.go(_this.stateNames.storefrontSurvey); });
            };
            return StorefrontModalService;
        }());
        Service.StorefrontModalService = StorefrontModalService;
        //internal class defining a modal build, no need to export
        var InternalStorefrontModalBuilder = /** @class */ (function () {
            function InternalStorefrontModalBuilder(name, modalService, $q) {
                this.name = name;
                this.modalService = modalService;
                this.$q = $q;
                this.additionalResolves = {};
            }
            InternalStorefrontModalBuilder.prototype.actions = function (actions) {
                this.injectedActions = this.$q.when(actions);
                return this;
            };
            InternalStorefrontModalBuilder.prototype.header = function (text) {
                this.headerPromise = this.$q.when(text);
                return this;
            };
            InternalStorefrontModalBuilder.prototype.body = function (text) {
                this.bodyPromise = this.$q.when(text);
                return this;
            };
            InternalStorefrontModalBuilder.prototype.image = function (data) {
                this.imagePromise = this.$q.when(data);
                return this;
            };
            InternalStorefrontModalBuilder.prototype.template = function (templateLocation) {
                this.templateLocation = templateLocation;
                return this;
            };
            InternalStorefrontModalBuilder.prototype.controller = function (controllerDef) {
                this.controllerDef = controllerDef;
                return this;
            };
            InternalStorefrontModalBuilder.prototype.classNames = function (classNames) {
                this.classes = (classNames || []).filter(function (c) { return c; }).join(" ");
                return this;
            };
            InternalStorefrontModalBuilder.prototype.inject = function (key, obj) {
                this.additionalResolves[key] = function () { return obj; };
                return this;
            };
            InternalStorefrontModalBuilder.prototype.show = function (isGeneric) {
                var _this = this;
                if (isGeneric === void 0) { isGeneric = false; }
                return this.$q.all([this.headerPromise, this.bodyPromise, this.imagePromise, this.injectedActions]).then(function (promises) {
                    var headerText = promises[0];
                    var bodyText = promises[1];
                    var image = promises[2];
                    var actions = promises[3];
                    _this.additionalResolves["actions"] = function () { return actions; }; //TODO:investigate why having "actions after image and other additional resolves causes issues"
                    _this.additionalResolves["imageData"] = function () { return (image) ? image : null; };
                    if (isGeneric) {
                        _this.additionalResolves["showModalClose"] = (_this.additionalResolves["showModalClose"]) ? _this.additionalResolves["showModalClose"] : null;
                        _this.additionalResolves["showGoBack"] = (_this.additionalResolves["showGoBack"]) ? _this.additionalResolves["showGoBack"] : null;
                    }
                    return _this.modalService.showModal({
                        backdrop: true,
                        keyboard: true,
                        modalFade: true,
                        templateUrl: _this.templateLocation,
                        controller: _this.controllerDef,
                        windowClass: _this.classes,
                        //these will be passed to modal's contructor
                        resolve: _this.additionalResolves
                    }, _this.internalOptions ||
                        {
                            headerText: headerText,
                            actionButtonText: null,
                            bodyText: bodyText,
                            closeButtonText: null,
                            subText: null
                        }, _this.name);
                });
            };
            return InternalStorefrontModalBuilder;
        }());
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .factory("StorefrontModalService", HCTRA.Service.StorefrontModalService.factory())
        .constant("StorefrontModalServiceModalNames", {
        "StorefrontFinishAccountSetup": "StorefrontFinishAccountSetup",
        "StorefrontVehicalViolations": "StorefrontVehicalViolations",
        "StorefrontSuspendedWithVehicalViolations": "StorefrontSuspendedWithVehicalViolations",
        "StorefrontINeedTo": "StorefrontINeedTo",
        "StorefrontDoSomethingElse": "StorefrontDoSomethingElse",
        "StorefrontMaintenance": "StorefrontMaintenance",
        "StorefrontWorkitemComplete": "StorefrontWorkitemComplete",
        "StorefrontAllWorkItemsComplete": "StorefrontAllWorkItemsComplete",
        "StorefrontWorkitemCompleteSignup": "StorefrontWorkitemCompleteSignup",
        "StorefrontWorkitemCompleteGoToCsr": "StorefrontWorkitemCompleteGoToCsr",
        "StorefrontWorkitemCompleteCAVVE": "StorefrontWorkitemCompleteCAVVE",
        "StorefrontInactivity": "StorefrontInactivity",
        "StorefrontSeeCSR": "StorefrontSeeCSR",
        "StorefrontPdfViewer": "StorefrontPdfViewer",
        "StorefrontExternalTask": "StorefrontExternalTask",
        "StorefrontServiceInitFailed": "StorefrontServiceInitFailed",
        "StorefrontSkippTaskMessage": "StorefrontSkippTaskMessage",
        "StorefrontIncompleteWorkitemsWhileSkipping": "StorefrontIncompleteWorkitemsWhileSkipping",
        "StorefrontExitSession": "StorefrontExitSession",
        "StorefrontCmsContent": "StorefrontCmsContent",
        "StorefrontNoViolationsFound": "StorefrontNoViolationsFound",
        "StorefrontNoViolationsWithInvoiceFound": "StorefrontNoViolationsWithInvoiceFound"
    });
})();
var HCTRA;
(function (HCTRA) {
    var Storefront;
    (function (Storefront) {
        var Service;
        (function (Service) {
            //defines the concrete implementation of the store front service. Manages workflow of selected work items, cms related data, and
            //other storefront related activities. Please review the IStorefrontService for information concerning member usage.
            var StorefrontService = /** @class */ (function () {
                function StorefrontService($http, $rootScope, stateNames, missedATollStates, $q, genericRepo, routes, cmsUtilService, authService, webStorage, storefrontUtilityService, stringUtilsService, suspendedAccountService, angularEnvironment, environmentConfig, addMissingInformationService, violationsStateNames, violatorStateNames, loginStates, makePaymentStates, profileStates, cavveStates, vehiclesStates, suspendedAccountWithoutViolationStateNames, $window) {
                    var _a;
                    var _this = this;
                    this.$http = $http;
                    this.$rootScope = $rootScope;
                    this.stateNames = stateNames;
                    this.missedATollStates = missedATollStates;
                    this.$q = $q;
                    this.genericRepo = genericRepo;
                    this.routes = routes;
                    this.cmsUtilService = cmsUtilService;
                    this.authService = authService;
                    this.webStorage = webStorage;
                    this.storefrontUtilityService = storefrontUtilityService;
                    this.stringUtilsService = stringUtilsService;
                    this.suspendedAccountService = suspendedAccountService;
                    this.angularEnvironment = angularEnvironment;
                    this.environmentConfig = environmentConfig;
                    this.addMissingInformationService = addMissingInformationService;
                    this.violationsStateNames = violationsStateNames;
                    this.violatorStateNames = violatorStateNames;
                    this.loginStates = loginStates;
                    this.makePaymentStates = makePaymentStates;
                    this.profileStates = profileStates;
                    this.cavveStates = cavveStates;
                    this.vehiclesStates = vehiclesStates;
                    this.suspendedAccountWithoutViolationStateNames = suspendedAccountWithoutViolationStateNames;
                    this.$window = $window;
                    //index of currently executing work item
                    this.workFlowIndex = null;
                    //index that current shadow item is standing in for
                    this.shadowItemIndex = null;
                    //regex to parse guid
                    this.guidRegex = /[0-9A-F]{8}[-]?(?:[0-9A-F]{4}[-]?){3}[0-9A-F]{12}/ig;
                    this.isFullSiteMode = false;
                    this.workItemStateNames = (_a = {},
                        _a[HCTRA.Model.SelectedOptions.MTOLL] = [
                            this.missedATollStates.Landing,
                            this.missedATollStates.Grid,
                            this.missedATollStates.Billing,
                            this.missedATollStates.Confirm,
                            this.missedATollStates.Receipt
                        ],
                        _a[HCTRA.Model.SelectedOptions.GINV] = [
                            this.violationsStateNames.Landing,
                            this.violationsStateNames.Grid,
                            this.violationsStateNames.MakePayment,
                            this.violationsStateNames.Confirm,
                            this.violationsStateNames.Receipt,
                            this.cavveStates.Offer,
                            this.cavveStates.Root,
                            this.cavveStates.Billing,
                            this.cavveStates.Personal,
                            this.cavveStates.Receipt,
                            this.cavveStates.Confirm,
                            this.violationsStateNames.Grid,
                            this.violationsStateNames.MakePayment,
                            this.violationsStateNames.Confirm,
                            this.violationsStateNames.Receipt
                        ],
                        _a[HCTRA.Model.SelectedOptions.OACC] = this.createAccountStates(),
                        _a[HCTRA.Model.SelectedOptions.UBI] = [
                            this.stateNames.managePayment,
                            this.stateNames.updateBillingInformation,
                            this.stateNames.addSecondaryCreditCard,
                            this.stateNames.updateSecondaryCreditCard,
                            this.stateNames.saveBillingInformation,
                            this.profileStates.UpdateBillingInformation,
                            this.stateNames.editCreditCardInformation,
                            this.stateNames.editBankAccountInformation,
                            this.stateNames.editCreditCardAddress,
                            this.stateNames.addCreditCardInformation,
                            this.stateNames.addBankAccountInformation,
                            this.stateNames.makePaymentMethodPrimary
                        ],
                        _a[HCTRA.Model.SelectedOptions.UCI] = [
                            this.profileStates.UpdateContactInformation
                        ],
                        _a[HCTRA.Model.SelectedOptions.UAC] = [
                            this.profileStates.UpdateAuthorizedContacts
                        ],
                        _a[HCTRA.Model.SelectedOptions.URAMT] = [
                            this.profileStates.UpdateReplenishmentAmount,
                            this.profileStates.UpdateFlexpayBillingInformation
                        ],
                        _a[HCTRA.Model.SelectedOptions.ARTAG] = [
                            this.vehiclesStates.Root,
                            this.vehiclesStates.AddTag,
                            this.vehiclesStates.AddEzPlate,
                            this.vehiclesStates.PlateVehicleInformation,
                            this.vehiclesStates.PlateReviewOrder,
                            this.vehiclesStates.PlateReceipt,
                            this.vehiclesStates.TagVehicleInformation,
                            this.vehiclesStates.TagCart,
                            this.vehiclesStates.TagDeliveryMethod,
                            this.vehiclesStates.TagReviewOrder,
                            this.vehiclesStates.TagReceipt,
                            this.vehiclesStates.Replacement,
                            this.vehiclesStates.ReplacementDeliveryMethod,
                            this.vehiclesStates.ReplacementReviewOrder,
                            this.vehiclesStates.ReplacementReceipt,
                            this.stateNames.activateEzTag,
                            this.stateNames.activateEzTagConfirm,
                            this.stateNames.activateEzTagCompletion
                        ],
                        _a[HCTRA.Model.SelectedOptions.MKPAY] = [
                            this.makePaymentStates.Landing,
                            this.makePaymentStates.Root,
                            this.makePaymentStates.Checkout,
                            this.makePaymentStates.Receipt
                        ],
                        _a[HCTRA.Model.SelectedOptions.EO] = [
                            this.violatorStateNames.Landing,
                            this.violatorStateNames.Grid,
                            this.violatorStateNames.MakePayment,
                            this.violatorStateNames.Confirm,
                            this.violatorStateNames.Receipt,
                            this.cavveStates.Offer,
                            this.cavveStates.Root,
                            this.cavveStates.Billing,
                            this.cavveStates.Personal,
                            this.cavveStates.Receipt,
                            this.cavveStates.Confirm
                        ],
                        _a);
                    if (this.storefrontUtilityService.isRunningAsKiosk) {
                        this.serviceInitialized = this
                            .clearNamedCaches()
                            .then(function () { return _this.getCmsItemsAndBuildWorkItems(); });
                    }
                    else {
                        this.serviceInitialized = this.$q.resolve();
                    }
                }
                Object.defineProperty(StorefrontService.prototype, "workItems", {
                    //all available workitems
                    get: function () {
                        return this.internalWorkItems;
                    },
                    enumerable: true,
                    configurable: true
                });
                //factory method for instanciating service
                StorefrontService.factory = function () {
                    var service = function ($http, $rootScope, stateNames, missedATollStates, $q, genericRepo, routes, cmsUtilService, authService, webStorage, storefrontUtilityService, stringUtilsService, suspendedAccountService, angularEnvironment, environmentConfig, addMissingInformationService, violationsStateNames, violatorStateNames, loginStates, makePaymentStates, profileStates, cavveStates, vehiclesStates, suspendedAccountWithoutViolationStateNames, $window) {
                        return new StorefrontService($http, $rootScope, stateNames, missedATollStates, $q, genericRepo, routes, cmsUtilService, authService, webStorage, storefrontUtilityService, stringUtilsService, suspendedAccountService, angularEnvironment, environmentConfig, addMissingInformationService, violationsStateNames, violatorStateNames, loginStates, makePaymentStates, profileStates, cavveStates, vehiclesStates, suspendedAccountWithoutViolationStateNames, $window);
                    };
                    service.$inject = [
                        "$http", "$rootScope", "stateNames", "missedATollStates", "$q", "genericRepo",
                        "routes", "cmsUtilService", "AuthService", "webStorage",
                        "StorefrontUtilityService", "stringUtilsService", "suspendedAccountService", "angularEnvironment",
                        "environmentConfig", "addMissingInformationService", "violationsStateNames", "violatorStateNames",
                        "loginStates", "makePaymentStates", "profileStates", "cavveStates", "vehiclesStates", "suspendedAccountWithoutViolationStateNames",
                        "$window"
                    ];
                    return service;
                };
                StorefrontService.prototype.createAccountStates = function () {
                    if (this.environmentConfig.createAccountRefresh) {
                        return [
                            //  this.stateNames.NewAccount,
                            this.stateNames.Login,
                            this.stateNames.VehicleInfo,
                            this.stateNames.Cart,
                            this.stateNames.PaymentInfo,
                            this.stateNames.DeliveryMethod,
                            this.stateNames.Review,
                            this.stateNames.Receipt
                        ];
                    }
                    else {
                        return [
                            this.stateNames.createAccount,
                            this.stateNames.newAccount,
                            this.stateNames.createAccountDetails,
                            this.stateNames.addEZTag,
                            this.stateNames.vehicleInformation,
                            this.stateNames.addAdditionalVehicle,
                            this.stateNames.paymentMaster,
                            this.stateNames.choosePaymentMethod,
                            this.stateNames.enterBankAccount,
                            this.stateNames.creditCardEntry,
                            this.stateNames.createAccountSummary,
                            this.stateNames.checkout,
                            this.stateNames.createAccountReceipt,
                        ];
                    }
                };
                StorefrontService.prototype.clearNamedCaches = function () {
                    var _this = this;
                    return this.$window.caches
                        .keys()
                        .then(function (names) { return Promise.all(names.map(function (name) { return _this.$window.caches.delete(name); })); });
                };
                StorefrontService.prototype.registerEventHandlers = function (eventHandlers) {
                    this.eventHandlers = eventHandlers;
                };
                StorefrontService.prototype.getStorefrontLogo = function () {
                    return this.storefrontLogo;
                };
                StorefrontService.prototype.getBackArrowImg = function () {
                    return this.backArrowImg;
                };
                StorefrontService.prototype.getCloseModalImg = function () {
                    return this.closeModalImg;
                };
                StorefrontService.prototype.getMaintenanceImg = function () {
                    return this.maintenanceImg;
                };
                StorefrontService.prototype.getTaskCompleteIcon = function () {
                    return this.taskCompleteIcon;
                };
                StorefrontService.prototype.getTaskNotCompleteIcon = function () {
                    return this.taskNotCompleteIcon;
                };
                StorefrontService.prototype.getLocation = function () {
                    return this.storefrontUtilityService.storefrontLocation;
                };
                Object.defineProperty(StorefrontService.prototype, "fullSiteMode", {
                    get: function () {
                        return this.isFullSiteMode;
                    },
                    set: function (val) {
                        this.isFullSiteMode = val;
                        this.saveToStorage();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StorefrontService.prototype, "isShellAccountInitialized", {
                    get: function () {
                        return this.shellUserInitialized;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StorefrontService.prototype, "machineName", {
                    get: function () {
                        return this.storefrontUtilityService.machineName;
                    },
                    enumerable: true,
                    configurable: true
                });
                StorefrontService.prototype.isAuthenticated = function () { return this.authService.isAuthenticated(); };
                StorefrontService.prototype.isInMaintenanceMode = function () {
                    var _this = this;
                    return this.genericRepo.dataFactory
                        .getMaintenanceDetails()
                        .then(function (response) {
                        var flags = response.featureStates.reduce(function (acc, v) {
                            acc[v.feature] = v.inMaintenance;
                            return acc;
                        }, {});
                        var kioskShouldBeInMaintenanceMode = flags[HCTRA.Model.MaintenanceFeature.Account] ||
                            flags[HCTRA.Model.MaintenanceFeature.Violations];
                        return kioskShouldBeInMaintenanceMode ? _this.$q.resolve() : _this.$q.reject();
                    });
                };
                StorefrontService.prototype.isActiveSession = function () {
                    // session is active if session id is truthy
                    return !!this.sessionId;
                };
                StorefrontService.prototype.currentWorkItem = function (useShadowIndex) {
                    if (useShadowIndex === void 0) { useShadowIndex = false; }
                    if (this.workFlowIndex === null) {
                        return null;
                    }
                    return this.internalWorkItems[useShadowIndex && this.shadowItemIndex ? this.shadowItemIndex : this.workFlowIndex];
                };
                StorefrontService.prototype.getCmsMediaItem = function (itemId) {
                    return this.genericRepo.dataFactory.getCmsPageById({
                        ItemId: itemId,
                        Fields: ""
                    })
                        .then(function (res) {
                        var obj = angular.fromJson(res.cmsResponse);
                        if (!obj.Url) {
                            obj.Url = obj.ItemMedialUrl;
                        }
                        return obj;
                    });
                };
                StorefrontService.prototype.getCmsItemById = function (itemId) {
                    var _this = this;
                    return this.genericRepo.dataFactory
                        .getCmsPageById({
                        ItemId: itemId,
                        Fields: ""
                    })
                        .then(function (res) {
                        var item = angular.fromJson(res.cmsResponse);
                        if (item.Image) {
                            item.ImageItem = _this.convertToMediaItem(item.Image);
                        }
                        item.maxCommentCharacters = (item.maxCommentCharacters) ? Number(item.maxCommentCharacters) : null;
                        item.badRatingIconSelected = (item.badRatingIconSelected) ? _this.convertToMediaItem(item.badRatingIconSelected) : null;
                        item.badRatingIconUnselected = (item.badRatingIconUnselected) ? _this.convertToMediaItem(item.badRatingIconUnselected) : null;
                        item.neutralRatingIconSelected = (item.neutralRatingIconSelected) ? _this.convertToMediaItem(item.neutralRatingIconSelected) : null;
                        item.neutralRatingIconUnselected = (item.neutralRatingIconUnselected) ? _this.convertToMediaItem(item.neutralRatingIconUnselected) : null;
                        item.goodRatingIconSelected = (item.goodRatingIconSelected) ? _this.convertToMediaItem(item.goodRatingIconSelected) : null;
                        item.goodRatingIconUnselected = (item.goodRatingIconUnselected) ? _this.convertToMediaItem(item.goodRatingIconUnselected) : null;
                        item.buttons = (item.buttons) ? _this.stringUtilsService.getParameterObject(item.buttons) : null;
                        return item;
                    });
                };
                StorefrontService.prototype.convertToMediaItem = function (imageString) {
                    return this.cmsUtilService.parseAllImageAttributes(imageString);
                };
                StorefrontService.prototype.isEnabled = function () {
                    return this.storefrontUtilityService.isRunningAsKiosk;
                };
                StorefrontService.prototype.getWorkItemInitState = function (workItem) {
                    if (workItem.isShadowItem && (!workItem.states || workItem.states.length < 1)) {
                        return null;
                    }
                    return workItem.states[0];
                };
                StorefrontService.prototype.isInitStateOfSelectedWorkItem = function (stateName) {
                    return this.internalWorkItems
                        .filter(function (item) { return item.isSelected && !item.isCompleted; })
                        .map(this.getWorkItemInitState)
                        .filter(function (state) { return state; })
                        .indexOf(stateName) >= 0;
                };
                StorefrontService.prototype.isInternalStorefrontState = function (stateName) {
                    return stateName === this.stateNames.storefrontHome ||
                        stateName === this.stateNames.storefrontSelection ||
                        stateName === this.stateNames.storefrontSurvey ||
                        stateName === this.stateNames.storefrontSuppression;
                };
                StorefrontService.prototype.checkState = function (toState) {
                    var _this = this;
                    var toStateName = toState.name;
                    if (this.stateChangingRestricted && (!this.isInternalStorefrontState(toStateName) || this.stateChangingRestricted.all)) {
                        return this.$q.reject({
                            hasWorkItemRedirect: false,
                            restrictedAbort: true,
                            restrictedStateName: toStateName,
                            workItemRedirect: null
                        });
                    }
                    if (this.fullSiteMode || !this.isWorkflowActive() || this.isInternalStorefrontState(toStateName) || this.isCmsContent(toState)) {
                        return this.$q.resolve({
                            isExternal: false
                        });
                    }
                    var current = this.currentWorkItem();
                    var toWorkItem = this.isWorkitemState(current, toStateName);
                    var currentUser = this.$rootScope.currentUser;
                    var isSuspendedAccount = this.authService.isAuthenticated() && currentUser.acctActivity === "S";
                    var isMissingInformation = this.authService.isAuthenticated() && (this.addMissingInformationService.isMissingInfo(currentUser.passwordNeedsReset, currentUser.emailIsMissing, currentUser.securityQuestionIsMissing));
                    var isNotFinishedWithSetup = this.authService.isAuthenticated() &&
                        currentUser.newAccountStep &&
                        !currentUser.newAccountStep.accountComplete &&
                        current.id !== HCTRA.Model.SelectedOptions.OACC;
                    var requiresAuthentication = current.isShadowItem
                        ? this.currentWorkItem(true).requiresAuthentication && !this.authService.isAuthenticated()
                        : current.requiresAuthentication && !this.authService.isAuthenticated();
                    var callback = function (isSuspendedWithViolations) {
                        var redirections = [
                            { condition: requiresAuthentication, id: HCTRA.Model.SelectedOptions.LOGIN },
                            { condition: isSuspendedWithViolations, id: HCTRA.Model.SelectedOptions.SUSVIOL },
                            { condition: isMissingInformation, id: HCTRA.Model.SelectedOptions.MISSINFO },
                            { condition: isSuspendedAccount, id: HCTRA.Model.SelectedOptions.SUSACCT },
                            { condition: isNotFinishedWithSetup, id: HCTRA.Model.SelectedOptions.FINISHSETUP }
                        ];
                        for (var _i = 0, redirections_1 = redirections; _i < redirections_1.length; _i++) {
                            var check = redirections_1[_i];
                            if (check.condition) {
                                if (current.id === check.id) {
                                    break;
                                }
                                return _this.$q.reject({
                                    hasWorkItemRedirect: true,
                                    restrictedAbort: false,
                                    workItemRedirect: check.id
                                });
                            }
                        }
                        return _this.$q.resolve({
                            isExternal: !toWorkItem
                        });
                    };
                    if (this.authService.isAuthenticated()) {
                        return this.suspendedAccountService
                            .getSuspendedAccountTypeInformation()
                            .then(function (response) { return callback(response.violationFlag); });
                    }
                    else {
                        return callback(false);
                    }
                };
                StorefrontService.prototype.isWorkflowActive = function () {
                    if (!this.isEnabled() || this.workFlowIndex === null) {
                        return false;
                    }
                    return this.hasIncompleteWorkItems();
                };
                StorefrontService.prototype.startWorkItems = function () {
                    var _this = this;
                    if (!this.isEnabled()) {
                        return this.$q.reject(null);
                    }
                    //get next workitem..
                    return this.next()
                        .then(function (workItem) {
                        //if null, there are no more left, done
                        if (workItem === null) {
                            return null;
                        }
                        return _this.startNewSession()
                            .then(function () { return _this.getWorkItemInitState(workItem); });
                    });
                };
                StorefrontService.prototype.startNewSession = function (endExistingSession) {
                    var _this = this;
                    if (endExistingSession === void 0) { endExistingSession = false; }
                    //otherwise start a db session
                    var selectedOptions = this.getSelectedWorkitems().map(function (x) { return HCTRA.Model.SelectedOptions[x.id]; });
                    if (this.fullSiteMode) {
                        selectedOptions = [HCTRA.Model.SelectedOptions[HCTRA.Model.SelectedOptions.WEBST]];
                    }
                    if (endExistingSession) {
                        var endSessionRequest = {
                            logOffType: HCTRA.Model.StorefrontLogOffType.Forced.toString(),
                            storefrontSessionID: this.sessionId
                        };
                        this.genericRepo.dataFactory.EndStorefrontDBSession(endSessionRequest);
                    }
                    var startSessionRequest = {
                        location: HCTRA.Model.StoreLocations[this.storefrontUtilityService.storefrontLocation].toString(),
                        selectedOptions: (selectedOptions.length > 0 ? selectedOptions : [HCTRA.Model.SelectedOptions[HCTRA.Model.SelectedOptions.Unknown]]).join(',')
                    };
                    return this.genericRepo.dataFactory.StartStorefrontDBSession(startSessionRequest)
                        .then(function (response) {
                        _this.sessionId = response.dbResponse;
                        _this.saveToStorage();
                    });
                };
                StorefrontService.prototype.insertWorkItem = function (workItemId) {
                    // check if not already a workitem
                    var workItem = this.internalWorkItems.filter(function (w) { return w.id === workItemId && !w.isSelected && !w.isUnavailable; })[0];
                    if (workItem) {
                        workItem.isSelected = true;
                    }
                    return workItem;
                };
                StorefrontService.prototype.isQueued = function (workItemId) {
                    return this.internalWorkItems.some(function (w) { return w.id === workItemId && w.isSelected; });
                };
                StorefrontService.prototype.getWorkItemById = function (workItemId) {
                    return this.internalWorkItems.filter(function (x) { return x.id === workItemId; })[0];
                };
                StorefrontService.prototype.removeWorkItem = function (workItemId) {
                    var workItem = this.internalWorkItems.filter(function (w) { return w.id === workItemId && w.isSelected; })[0];
                    if (workItem) {
                        workItem.isSelected = false;
                    }
                    return workItem;
                };
                Object.defineProperty(StorefrontService.prototype, "stateChangingRestricted", {
                    //flag indicating that any state changes should be denied
                    get: function () {
                        return this.storefrontUtilityService.stateChangingRestricted;
                    },
                    enumerable: true,
                    configurable: true
                });
                StorefrontService.prototype.lockStateChanging = function (action) {
                    return this.storefrontUtilityService.lockStateChanging(action);
                };
                StorefrontService.prototype.reset = function (logOffType) {
                    var _this = this;
                    if (logOffType === void 0) { logOffType = HCTRA.Model.StorefrontLogOffType.Manual; }
                    var endSessionRequest = {
                        logOffType: HCTRA.Model.StorefrontLogOffType[logOffType].toString(),
                        storefrontSessionID: this.sessionId
                    };
                    //reset internals 
                    this.fullSiteMode = false;
                    this.sessionId = null;
                    this.workFlowIndex = null;
                    this.shadowItemIndex = null;
                    for (var _i = 0, _a = this.internalWorkItems; _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.isSelected = false;
                        item.isUnavailable = false;
                        item.isCompleted = false;
                        item.isUnsaved = false;
                    }
                    this.saveToStorage();
                    this.addMissingInformationService.destroyMissingInformationFlags();
                    return this.lockStateChanging(function () {
                        return _this.eventHandlers.onResetting()
                            .then(function () { return _this.clearUserSession(endSessionRequest); })
                            .then(function () { return _this.eventHandlers.onResetComplete(logOffType === HCTRA.Model.StorefrontLogOffType.Forced); });
                    });
                };
                StorefrontService.prototype.clearUserSession = function (endSessionRequest) {
                    var _this = this;
                    return this.$q
                        .when(endSessionRequest.storefrontSessionID > 0 &&
                        this.genericRepo.dataFactory.EndStorefrontDBSession(endSessionRequest))
                        .catch(function () { })
                        .then(function () { return _this.authService.isAuthenticated() && _this.authService.logout(); })
                        .catch(function () { })
                        .then(function () { return _this.clearSession(); });
                };
                StorefrontService.prototype.hardReset = function () {
                    return this.reset(HCTRA.Model.StorefrontLogOffType.Forced);
                };
                StorefrontService.prototype.softReset = function () {
                    for (var _i = 0, _a = this.internalWorkItems; _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.isSelected = false;
                        item.isUnavailable = false;
                        item.isCompleted = false;
                        item.isUnsaved = false;
                    }
                    this.workFlowIndex = null;
                    this.saveToStorage();
                    if (this.authService.isAuthenticated()) {
                        //force update to user profile
                        return this.authService.profile({});
                    }
                    return this.$q.resolve();
                };
                Object.defineProperty(StorefrontService.prototype, "onInitialized", {
                    get: function () {
                        return this.serviceInitialized;
                    },
                    enumerable: true,
                    configurable: true
                });
                StorefrontService.prototype.skip = function (workItemId, markCompleted, markUnsaved) {
                    var _this = this;
                    if (markCompleted === void 0) { markCompleted = false; }
                    if (markUnsaved === void 0) { markUnsaved = true; }
                    var currentItem = this.currentWorkItem();
                    //if skipping to a specific workitem...
                    if (angular.isNumber(workItemId)) {
                        //you can't skip to the current work item
                        if (currentItem && workItemId === currentItem.id) {
                            return this.$q.reject(currentItem);
                        }
                        //determine if you can go there
                        var destinationWorkItem = this.getWorkitemById(workItemId);
                        if (!destinationWorkItem || destinationWorkItem.isCompleted || !destinationWorkItem.isSelected) {
                            return this.$q.reject(currentItem);
                        }
                        //is it even real
                        var index = this.internalWorkItems.indexOf(destinationWorkItem);
                        if (index < 0) {
                            return this.$q.reject(currentItem);
                        }
                        //only can skipp if skippable or destination item is a shadow item
                        if (currentItem && !currentItem.isSkippable && !destinationWorkItem.isShadowItem) {
                            return this.$q.reject(currentItem);
                        }
                        //set to current and return init state
                        if (currentItem) {
                            currentItem.isUnsaved = markUnsaved;
                            currentItem.isCompleted = markCompleted;
                            if (!currentItem.isShadowItem && destinationWorkItem.isShadowItem) {
                                this.shadowItemIndex = this.workFlowIndex;
                            }
                            else if (currentItem.isShadowItem && !destinationWorkItem.isShadowItem) {
                                this.shadowItemIndex = null;
                            }
                        }
                        this.workFlowIndex = index;
                        this.saveToStorage();
                        var initState = this.getWorkItemInitState(destinationWorkItem);
                        if (initState) {
                            return this.$q.resolve(initState);
                        }
                        else {
                            return this.next(true).then(function (nextItem) { return _this.getWorkItemInitState(nextItem); });
                        }
                    }
                    else {
                        //only skippable workitems can skip
                        if (currentItem && !currentItem.isSkippable) {
                            return this.$q.reject(currentItem);
                        }
                        //..otherwise go to the next work item and return the initial state
                        return this.next(markCompleted, markUnsaved).then(function (nextItem) { return nextItem && _this.getWorkItemInitState(nextItem); });
                    }
                };
                StorefrontService.prototype.completeWorkItem = function () {
                    var _this = this;
                    var currentItem = this.currentWorkItem();
                    //resolve with null if no more workitem are left
                    if (!currentItem) {
                        return this.$q.resolve(null);
                    }
                    //otherwise go to the next one and return it's init state
                    return this.next(true).then(function (nextItem) { return nextItem && _this.getWorkItemInitState(nextItem); });
                };
                StorefrontService.prototype.saveSurveyResponse = function (experience, comments) {
                    var request = new HCTRA.Model.StorefrontSurveyRequest();
                    request.storefrontSessionID = this.sessionId;
                    request.experienceValue = experience;
                    request.comments = comments;
                    return this.genericRepo.dataFactory.SaveSurveyToStorefrontDB(request);
                };
                StorefrontService.prototype.prefetchContent = function (urls) {
                    var _this = this;
                    //perform a get on all urls and resolve when all are complete.
                    return this.$q.all(urls.map(function (url) { return _this.$http.get(url); }));
                };
                //determines based on state if the menu is visible
                StorefrontService.prototype.showMenu = function (state) {
                    //only show the menu when not home, survey or selection screen
                    switch (state.name) {
                        case this.stateNames.storefrontHome:
                        case this.stateNames.storefrontSelection:
                        case this.stateNames.storefrontSurvey:
                            return false;
                        default:
                            return true;
                    }
                };
                //determine if there are incompleted workitems remaining
                StorefrontService.prototype.hasIncompleteWorkItems = function () {
                    var remaining = this.internalWorkItems.filter(function (item) { return item.isSelected && !item.isCompleted; });
                    return remaining.length > 0;
                };
                StorefrontService.prototype.isCmsContent = function (state) {
                    var toController = state.controller;
                    return toController === "GenericNonSectionalCmsController" ||
                        toController === "GenericSectionalCmsController";
                };
                //determine if a given state is valid state for the given work item
                StorefrontService.prototype.isWorkitemState = function (item, state) {
                    for (var _i = 0, _a = item.states; _i < _a.length; _i++) {
                        var s = _a[_i];
                        if (s === state) {
                            return true;
                        }
                    }
                    return false;
                };
                StorefrontService.prototype.getSuspendedStates = function () {
                    return this.suspendedAccountWithoutViolationStateNames;
                };
                //find workitem by it's id
                StorefrontService.prototype.getWorkitemById = function (id) {
                    var query = this.internalWorkItems.filter(function (item) { return item.id === id; });
                    return query.length > 0 ? query[0] : null;
                };
                //gets all selected workitems
                StorefrontService.prototype.getSelectedWorkitems = function () {
                    return this.internalWorkItems.filter(function (x) { return x.isSelected && !x.isShadowItem; });
                };
                StorefrontService.prototype.clearSession = function () {
                    this.webStorage.removeEntry("StorefrontService");
                };
                //save service data to web storage
                StorefrontService.prototype.saveToStorage = function () {
                    var workItem = this.currentWorkItem(true);
                    var data = {
                        sessionId: this.sessionId,
                        currentItemName: workItem ? workItem.storefrontDisplayName : null,
                        currentItemId: workItem ? workItem.id : null,
                        selectedItemIds: this.getSelectedWorkitems().map(function (item) { return item.id; }),
                        fullSiteMode: this.isFullSiteMode,
                        completedItemIds: this.getSelectedWorkitems().filter(function (item) { return item.isCompleted; }).map(function (item) { return item.id; }),
                        shellUserInitialized: this.shellUserInitialized,
                        kioskToken: this.kioskToken
                    };
                    this.webStorage.setKeyValue("StorefrontService", data);
                };
                //restore service data from web storage
                StorefrontService.prototype.restoreFromStorage = function () {
                    var data = this.webStorage.getValue("StorefrontService");
                    if (data) {
                        this.sessionId = data.sessionId;
                        this.internalWorkItems
                            .filter(function (item) { return data.selectedItemIds.reduce(function (found, id) { return found || (item.id === id); }, false); })
                            .forEach(function (item) { return item.isSelected = true; });
                        this.internalWorkItems
                            .filter(function (item) { return data.completedItemIds.reduce(function (found, id) { return found || (item.id === id); }, false); })
                            .forEach(function (item) { return item.isCompleted = true; });
                        this.workFlowIndex =
                            angular.isNumber(data.currentItemId) && data.currentItemId >= 0
                                ? this.internalWorkItems.map(function (item) { return item.id; }).indexOf(data.currentItemId)
                                : null;
                        this.shadowItemIndex = null;
                        this.kioskToken = data.kioskToken;
                        this.isFullSiteMode = data.fullSiteMode;
                        this.shellUserInitialized = data.shellUserInitialized;
                    }
                };
                StorefrontService.prototype.abortWorkflow = function () {
                    var currentItem = this.currentWorkItem();
                    if (currentItem) {
                        this.internalWorkItems.filter(function (item) { return item.isSelected && item.id !== currentItem.id; }).forEach(function (item) { return item.isCompleted = true; });
                    }
                };
                //increments the workflow to the next required work item.
                //markAsCompleted lets the service know if the task it's leaving was completed or not
                StorefrontService.prototype.next = function (markAsCompleted, markUnsaved) {
                    var _this = this;
                    if (markAsCompleted === void 0) { markAsCompleted = true; }
                    if (markUnsaved === void 0) { markUnsaved = false; }
                    var previousItem;
                    if (!this.isWorkflowActive()) {
                        this.workFlowIndex = 0;
                        previousItem = null;
                    }
                    else {
                        previousItem = this.currentWorkItem();
                        previousItem.isCompleted = markAsCompleted;
                        previousItem.isUnsaved = markUnsaved;
                        this.workFlowIndex++;
                    }
                    //mark it complete or unsaved
                    var item = null;
                    //find the next selected workitem available
                    while (this.workFlowIndex < this.internalWorkItems.length) {
                        item = this.internalWorkItems[this.workFlowIndex];
                        if (item && item.isSelected && !item.isCompleted) {
                            break;
                        }
                        else {
                            this.workFlowIndex++;
                            item = null;
                        }
                    }
                    this.saveToStorage();
                    //if at the end of the flow but there's incomplete tasks..
                    if (!item && this.hasIncompleteWorkItems()) {
                        //oops! there should always be a registered handler
                        if (!this.eventHandlers || !this.eventHandlers.onIncompleteWorkItem) {
                            return this.$q.reject("incomplete workitem event not handled.");
                        }
                        //go to the top of the list, the first one incompleted
                        for (var _i = 0, _a = this.internalWorkItems; _i < _a.length; _i++) {
                            var workItem = _a[_i];
                            //only consider selected items that are not complete that actually have states to go through
                            if (workItem && workItem.isSelected && !workItem.isCompleted && workItem.states && workItem.states.length > 0) {
                                item = workItem;
                                break;
                            }
                        }
                        //let listener handle event
                        return this.eventHandlers.onIncompleteWorkItem(item);
                    }
                    else {
                        //you are done, signal it
                        if (!previousItem && !item) {
                            return this.$q.resolve(null);
                        }
                        if (previousItem && item) {
                            if (!previousItem.isShadowItem && item.isShadowItem) {
                                this.shadowItemIndex = this.workFlowIndex;
                            }
                            else if (previousItem.isShadowItem && !item.isShadowItem) {
                                this.shadowItemIndex = null;
                            }
                        }
                        return this.eventHandlers
                            //invoke with complete item and next one inline
                            .onCompletedWorkItem(previousItem, item || null)
                            .then(function () {
                            if (item && item.isAbortItem) {
                                _this.abortWorkflow();
                            }
                            if (item && (!item.states || item.states.length < 1 || item.isSelected === false)) {
                                //no states to go to, then mark it complete and go to next
                                return _this.next(true);
                            }
                            else {
                                return item || null;
                            }
                        });
                    }
                };
                StorefrontService.prototype.getFirstAvailableId = function () {
                    for (var _i = 0, _a = this.internalWorkItems; _i < _a.length; _i++) {
                        var workItem = _a[_i];
                        if (workItem && workItem.isSelected && !workItem.isCompleted && !workItem.isShadowItem) {
                            return workItem.id;
                        }
                    }
                    return null;
                };
                StorefrontService.prototype.setCurrentWorkItem = function (workItem) {
                    if (this.isEnabled() && this.isWorkflowActive() && workItem && workItem.isSelected && !workItem.isCompleted) {
                        var index = this.internalWorkItems.indexOf(workItem);
                        if (index >= 0) {
                            this.workFlowIndex = index;
                            this.saveToStorage();
                            return true;
                        }
                    }
                    return false;
                };
                StorefrontService.prototype.authenticateShellAccount = function () {
                    var _this = this;
                    //preflight check: is the machine a default config?
                    var machineName = this.storefrontUtilityService.machineName;
                    var defaultMachineName = this.storefrontUtilityService.defaultMachineName;
                    if (machineName === defaultMachineName) {
                        this.shellUserInitialized = true;
                        this.saveToStorage();
                        return this.$q.resolve();
                    }
                    else {
                        return this.genericRepo.dataFactory
                            .StorefrontInitialize()
                            .then(function (res) {
                            _this.kioskToken = res.token;
                            _this.shellUserInitialized = true;
                            _this.saveToStorage();
                        });
                    }
                };
                //get ids for workitems in cms
                StorefrontService.prototype.getCmsDbIds = function () {
                    return this.genericRepo.dataFactory
                        .getCmsPageById({
                        ItemId: this.routes.storefrontDBIdsId,
                        Fields: ""
                    })
                        .then(function (res) { return angular.fromJson(res.cmsResponse).Children; });
                };
                //get work item definitions in cms
                StorefrontService.prototype.getCmsWorkItems = function () {
                    return this.genericRepo.dataFactory
                        .getCmsPageById({
                        ItemId: this.routes.storefrontWorkItemSelectionParentId,
                        Fields: ""
                    })
                        .then(function (res) { return angular.fromJson(res.cmsResponse).Children; });
                };
                StorefrontService.prototype.getStorefrontLogoItem = function () {
                    var _this = this;
                    return this.getCmsMediaItem(this.routes.storefrontHCTRALogoId)
                        .then(function (response) {
                        _this.storefrontLogo = response;
                    });
                };
                StorefrontService.prototype.getStorefrontBackArrowImg = function () {
                    var _this = this;
                    return this.getCmsMediaItem(this.routes.storefrontBackArrowImgId)
                        .then(function (response) {
                        _this.backArrowImg = response;
                    });
                };
                StorefrontService.prototype.getStorefrontCloseModalButtonImg = function () {
                    var _this = this;
                    return this.getCmsMediaItem(this.routes.storefrontCloseModalImgId)
                        .then(function (response) {
                        _this.closeModalImg = response;
                    });
                };
                StorefrontService.prototype.getStorefrontMaintenanceImg = function () {
                    var _this = this;
                    return this.getCmsMediaItem(this.routes.storefrontMaintenanceImgId)
                        .then(function (response) {
                        _this.maintenanceImg = {
                            alt: response.Alt || response.alt,
                            image: response.image || response.Url || response.ItemMediaUrl
                        };
                    });
                };
                StorefrontService.prototype.getStorefrontTaskNotCompleteIcon = function () {
                    var _this = this;
                    return this.getCmsMediaItem(this.routes.storefrontTaskNotCompleteIconId)
                        .then(function (response) {
                        _this.taskNotCompleteIcon = response;
                    });
                };
                StorefrontService.prototype.getStorefrontTaskCompleteIcon = function () {
                    var _this = this;
                    return this.getCmsMediaItem(this.routes.storefrontTaskCompleteIconId)
                        .then(function (response) {
                        _this.taskCompleteIcon = response;
                    });
                };
                //builds the work item definitions
                StorefrontService.prototype.getCmsItemsAndBuildWorkItems = function () {
                    var _this = this;
                    var promises = [
                        this.getCmsDbIds(), this.getCmsWorkItems(),
                        this.getStorefrontLogoItem(), this.getStorefrontBackArrowImg(),
                        this.getStorefrontCloseModalButtonImg(), this.getStorefrontMaintenanceImg(),
                        this.getStorefrontTaskNotCompleteIcon(), this.getStorefrontTaskCompleteIcon()
                    ];
                    return this.$q.all(promises).then(function (results) {
                        var dbIds = results[0] || [];
                        var cmsWorkItems = results[1] || [];
                        //construct workitem definitions
                        cmsWorkItems.forEach(function (item) {
                            item.id = HCTRA.Model.SelectedOptions[item.dbId];
                            var definedStates = _this.workItemStateNames[item.id];
                            //setting acceptable states with some corner cases
                            switch (HCTRA.Model.SelectedOptions[item.dbId]) {
                                case HCTRA.Model.SelectedOptions.UBI:
                                    item.states = definedStates.filter(function (state) {
                                        var manageBillingInformationState = state.startsWith(_this.profileStates.UpdateBillingInformation);
                                        return _this.environmentConfig.billingInformation.UseUpdatedPage
                                            ? manageBillingInformationState
                                            : !manageBillingInformationState;
                                    });
                                    break;
                                case HCTRA.Model.SelectedOptions.MTOLL:
                                case HCTRA.Model.SelectedOptions.GINV:
                                    item.states = _this.environmentConfig.isMergeMATandVioOn ? _this.workItemStateNames[HCTRA.Model.SelectedOptions.EO] : definedStates;
                                    break;
                                default:
                                    item.states = definedStates;
                                    break;
                            }
                            item.unavailableWhenSelected =
                                _this.getListFromCmsMultilist(item.cmsUnavailableWhenSelected, HCTRA.Model.SelectedOptions, dbIds);
                            item.uiOrder = item.uiOrder;
                            item.isSkippable = item.isSkippable.toString() === "1";
                            item.requiresAuthentication = item.requiresAuthentication.toString() === "1";
                            item.unselectedIcon = _this.cmsUtilService.parseAllImageAttributes(item.cmsUnselectedIcon);
                            item.selectedIcon = _this.cmsUtilService.parseAllImageAttributes(item.cmsSelectedIcon);
                            item.completionModal = item.completionModal ? HCTRA.Model.StorefrontModalTemplatesEnum[item.completionModal] : null;
                            item.isShadowItem = false;
                        });
                        _this.addShadowItems(cmsWorkItems);
                        _this.internalWorkItems = cmsWorkItems.sort(function (w1, w2) { return w1.uiOrder - w2.uiOrder; });
                        _this.restoreFromStorage();
                    });
                };
                StorefrontService.prototype.addShadowItems = function (existingItems) {
                    existingItems.push(this.createShadowWorkItem("Suspended Account", HCTRA.Model.SelectedOptions.SUSACCT, this.getSuspendedStates(), true, HCTRA.Model.StorefrontModalTemplatesEnum.None, false));
                    existingItems.push(this.createShadowWorkItem("Suspended Account with Violations", HCTRA.Model.SelectedOptions.SUSVIOL, [], true, HCTRA.Model.StorefrontModalTemplatesEnum.VehicalViolationSuspendedAccountMessage, true));
                    existingItems.push(this.createShadowWorkItem("Add Missing Information", HCTRA.Model.SelectedOptions.MISSINFO, [this.loginStates.AddMissingInformation], true, HCTRA.Model.StorefrontModalTemplatesEnum.None, false));
                    existingItems.push(this.createShadowWorkItem("Login", HCTRA.Model.SelectedOptions.LOGIN, [this.loginStates.Login], false, HCTRA.Model.StorefrontModalTemplatesEnum.None, false));
                    existingItems.push(this.createShadowWorkItem("Not Finished With Account Setup", HCTRA.Model.SelectedOptions.FINISHSETUP, [], true, HCTRA.Model.StorefrontModalTemplatesEnum.FinishSetup, false));
                };
                StorefrontService.prototype.createShadowWorkItem = function (name, id, states, requiresAuthentication, completionModel, abortWhenComplete) {
                    return {
                        id: id,
                        states: states,
                        unavailableWhenSelected: [],
                        uiOrder: 0,
                        isSkippable: false,
                        requiresAuthentication: requiresAuthentication,
                        isShadowItem: true,
                        isSelected: false,
                        isUnavailable: false,
                        cmsUnavailableWhenSelected: "",
                        isCompleted: false,
                        isUnsaved: false,
                        storefrontDisplayName: name,
                        cmsStates: "",
                        dbId: "",
                        completionModal: completionModel,
                        isAbortItem: abortWhenComplete
                    };
                };
                //extract values from string
                StorefrontService.prototype.getListFromCmsMultilist = function (multiListString, listToSearch, enumToUse) {
                    //build lookup dictionary from array
                    // ReSharper disable once InconsistentNaming
                    var dict = enumToUse.reduce(function (acc, r) {
                        acc[r.ItemID.toLocaleUpperCase()] = r.name;
                        return acc;
                    }, {});
                    //extract guids..
                    return ((multiListString || "").match(this.guidRegex) || [])
                        //translate from lookup table
                        .map(function (val) { return listToSearch[dict[val.toLocaleUpperCase()]]; })
                        //filter out undefined values
                        .filter(function (obj) { return angular.isDefined(obj); });
                };
                return StorefrontService;
            }());
            Service.StorefrontService = StorefrontService;
        })(Service = Storefront.Service || (Storefront.Service = {}));
    })(Storefront = HCTRA.Storefront || (HCTRA.Storefront = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .factory("StorefrontService", HCTRA.Storefront.Service.StorefrontService.factory());
})();
var HCTRA;
(function (HCTRA) {
    var Storefront;
    (function (Storefront) {
        var Service;
        (function (Service) {
            var ReadonlyStorefrontWebStorage = /** @class */ (function () {
                function ReadonlyStorefrontWebStorage(innerData) {
                    this.innerData = innerData;
                }
                Object.defineProperty(ReadonlyStorefrontWebStorage.prototype, "kioskToken", {
                    get: function () { return this.innerData.kioskToken; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReadonlyStorefrontWebStorage.prototype, "sessionId", {
                    get: function () { return this.innerData.sessionId; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReadonlyStorefrontWebStorage.prototype, "selectedItemIds", {
                    get: function () { return this.innerData.selectedItemIds.slice(0); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReadonlyStorefrontWebStorage.prototype, "currentItemName", {
                    get: function () { return this.innerData.currentItemName; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReadonlyStorefrontWebStorage.prototype, "currentItemId", {
                    get: function () { return this.innerData.currentItemId; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReadonlyStorefrontWebStorage.prototype, "fullSiteMode", {
                    get: function () { return this.innerData.fullSiteMode; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReadonlyStorefrontWebStorage.prototype, "completedItemIds", {
                    get: function () { return this.innerData.completedItemIds.slice(0); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ReadonlyStorefrontWebStorage.prototype, "shellUserInitialized", {
                    get: function () { return this.innerData.shellUserInitialized; },
                    enumerable: true,
                    configurable: true
                });
                return ReadonlyStorefrontWebStorage;
            }());
            var StorefrontUtilityService = /** @class */ (function () {
                function StorefrontUtilityService(userAgent, $window, webStorage, storefrontUtilityInitializer, environmentConfig) {
                    this.userAgent = userAgent;
                    this.$window = $window;
                    this.webStorage = webStorage;
                    this.storefrontUtilityInitializer = storefrontUtilityInitializer;
                    this.environmentConfig = environmentConfig;
                    //regex to extract physical store location from user agent string
                    this.storeLocationRegex = /\(.*HCTRA\.Storefront\s([^;\)\s]+)(?:\s([^;\)\s]+))?.*\)/ig;
                    //flag indicating that any state changes should be denied
                    this.stateChangingRestricted = null;
                    storefrontUtilityInitializer(this, userAgent);
                }
                StorefrontUtilityService.factory = function () {
                    var service = function ($window, webStorage, init, environmentConfig) {
                        return new StorefrontUtilityService($window.navigator.userAgent, $window, webStorage, init, environmentConfig);
                    };
                    service.$inject = ["$window", "webStorage", "StorefrontUtilityInitializer", "environmentConfig"];
                    return service;
                };
                StorefrontUtilityService.configure = function (base, userAgent) {
                    if (base.webStorage.getValue("StorefrontUtilityService.TEST")) {
                        //angular.extend(base, base.webStorage.getValue("StorefrontUtilityService.TEST") || {});
                        console.error('StorefrontUtilityService.TEST is no longer supported.');
                    }
                    base.machineNameOverride = null;
                    var storeLocationMatch = base.storeLocationRegex.exec(userAgent);
                    if (storeLocationMatch && storeLocationMatch[1]) {
                        base.isRunningInKioskMode = true;
                        base.storeLocation = HCTRA.Model.StoreLocations[storeLocationMatch[1]];
                        base.machineNameOverride = storeLocationMatch[2] || null;
                    }
                };
                Object.defineProperty(StorefrontUtilityService.prototype, "isRunningAsKiosk", {
                    get: function () { return this.isRunningInKioskMode; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StorefrontUtilityService.prototype, "storefrontLocation", {
                    get: function () { return this.storeLocation; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StorefrontUtilityService.prototype, "accountLoggedInWorkItemIds", {
                    get: function () {
                        return [HCTRA.Model.SelectedOptions.UBI, HCTRA.Model.SelectedOptions.UCI, HCTRA.Model.SelectedOptions.UAC, HCTRA.Model.SelectedOptions.URAMT, HCTRA.Model.SelectedOptions.ARTAG, HCTRA.Model.SelectedOptions.MKPAY];
                    },
                    enumerable: true,
                    configurable: true
                });
                StorefrontUtilityService.prototype.lockStateChanging = function (action, all) {
                    var _this = this;
                    if (all === void 0) { all = false; }
                    var currentRestrictionState = this.stateChangingRestricted;
                    var setAll = currentRestrictionState ? currentRestrictionState.all : false;
                    this.stateChangingRestricted = { all: setAll || all };
                    return action().finally(function () { return _this.stateChangingRestricted = currentRestrictionState; });
                };
                Object.defineProperty(StorefrontUtilityService.prototype, "machineName", {
                    get: function () {
                        if (this.machineNameOverride && this.machineNameOverride.toLowerCase() === "-kapi") {
                            if ("KioApp" in this.$window && "DoUrlSubstitution" in this.$window["KioApp"]) {
                                return this.$window["KioApp"]["DoUrlSubstitution"]("$$KIO_COMPUTERNAME$$", 0);
                            }
                            else if ("external" in this.$window && "getKioProperty" in this.$window["external"]) {
                                var getKioProperty = this.$window["external"]["getKioProperty"];
                                var kioskName = getKioProperty("Kiosk") || "";
                                var unitName = getKioProperty("Unit") || "";
                                //handles situation if kiosk name was configured in the unit name
                                return (unitName.toUpperCase() === "HCTRA" ? null : unitName)
                                    || (kioskName.toUpperCase() === "HCTRA" ? null : kioskName)
                                    || this.machineNameOverride;
                            }
                            else {
                                return this.environmentConfig.storefrontConfigs.DefaultMachineName;
                            }
                        }
                        return this.machineNameOverride || this.environmentConfig.storefrontConfigs.DefaultMachineName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StorefrontUtilityService.prototype, "defaultMachineName", {
                    get: function () {
                        return this.environmentConfig.storefrontConfigs.DefaultMachineName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StorefrontUtilityService.prototype, "webStoreData", {
                    get: function () {
                        var storage = this.webStorage.getValue("StorefrontService");
                        return storage ? new ReadonlyStorefrontWebStorage(storage) : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StorefrontUtilityService.prototype, "delay", {
                    get: function () {
                        var shortDelay = this.environmentConfig.storefrontConfigs.StorefrontShortDelay;
                        return {
                            short: shortDelay,
                            medium: shortDelay * 4,
                            long: shortDelay * 10
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return StorefrontUtilityService;
            }());
            Service.StorefrontUtilityService = StorefrontUtilityService;
        })(Service = Storefront.Service || (Storefront.Service = {}));
    })(Storefront = HCTRA.Storefront || (HCTRA.Storefront = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .factory("StorefrontUtilityService", HCTRA.Storefront.Service.StorefrontUtilityService.factory())
        .factory("StorefrontUtilityInitializer", function () { return HCTRA.Storefront.Service.StorefrontUtilityService.configure; });
})();
(function () {
    "use strict";
    // angular.module("HCTRAModule").service("stringUtils", HCTRA.Service.StringUtils);
}());
var HCTRA;
(function (HCTRA) {
    var Service;
    (function (Service) {
        var TemplateCacheHelper = /** @class */ (function () {
            function TemplateCacheHelper($templateCache, $state) {
                var _this = this;
                this.$templateCache = $templateCache;
                this.$state = $state;
                this.clearList = [];
                this.constructUncachedList = function () {
                    var fromSitecoreRegex = /sitecore\/.*/;
                    var allStates = _this.$state.get();
                    var sitecoreStates = allStates.filter(function (s) { return fromSitecoreRegex.test(s.templateUrl); });
                    _this.clearList = sitecoreStates.map(function (s) { return s.templateUrl; }); // list of urls that should not be cached
                };
                this.removeUncachedFromCache = function () {
                    for (var _i = 0, _a = _this.clearList; _i < _a.length; _i++) {
                        var url = _a[_i];
                        _this.$templateCache.remove(url);
                    }
                };
            }
            TemplateCacheHelper.$inject = ['$templateCache', '$state'];
            return TemplateCacheHelper;
        }());
        Service.TemplateCacheHelper = TemplateCacheHelper;
    })(Service = HCTRA.Service || (HCTRA.Service = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    "use strict";
    angular.module("HCTRAModule").service("templateCacheHelper", HCTRA.Service.TemplateCacheHelper);
}());
/*
module HCTRA.Service {

    export interface IToggleButtonsService {

        disableButtonsGlobal(): void;
        enableButtonsGlobal(): void;
        disableUntilResolved(inProm: ng.IPromise<any>): ng.IPromise<any>;
    }

    export class ToggleButtonsService implements IToggleButtonsService {

        static $inject = ["hctraSpinnerService", "$document"]

        constructor(private hctraSpinnerService: HCTRA.Service.IHctraSpinnerService, private $document) { }

        private static locked: boolean = false;

        //this is not exposed through the interface, it is for testing only
        public resetLock = (): void => {
            ToggleButtonsService.locked = false;
        }

        public disableButtonsGlobal = (): void => {

            if (!ToggleButtonsService.locked) {
                this.disableButtons();
            }
        };

        public enableButtonsGlobal = (): void => {

            if (!ToggleButtonsService.locked) {
                this.enableButtons();
            }
        };

        public disableUntilResolved = (inProm: ng.IPromise<any>): ng.IPromise<any> => {

            ToggleButtonsService.locked = true;
            this.disableButtons();
            return inProm.finally(() => {
                ToggleButtonsService.locked = false;
                this.enableButtons();
            });
        };

        public disableButtons = (): void => {

            this.hctraSpinnerService.startSpinner();
            angular.element("button:not(#nav-expander):not(.exclude-global-disable)").prop("disabled", true);
            angular.forEach(this.$document[0].getElementsByClassName("disable-on-api-call"), toDisable => angular.element(toDisable).addClass("disabled"));
        };

        public enableButtons = (): void => {

            this.hctraSpinnerService.stopSpinner();
            angular.element("button:not(.exclude-global-disable)").prop("disabled", false);
            angular.element("disable-on-api-call").prop("disabled", false);
            angular.forEach(this.$document[0].getElementsByClassName("disable-on-api-call"), toDisable => angular.element(toDisable).removeClass("disabled"));

        };
    }
}

(function () {

    "use strict";

    angular.module("HCTRAModule").service("toggleButtonsService", HCTRA.Service.ToggleButtonsService);
}());
 */ 
// declare var LitlePayPage: any;
// module HCTRA.Service {
//     import VantivTriPosConfiguration = Model.VantivTriPosConfiguration;
//     import VantivTriPosCreateOmniTokenResponse = Model.VantivTriPosCreateOmniTokenResponse;
//     export interface IVantivPayment {
//         /** */
//         vantivPay(creditCardNumber: string): angular.IPromise<any>;
//         getTokenizedCreditCardData(config: VantivTriPosConfiguration, invokeManualEntry: boolean): angular.IPromise<Model.VantivTriPosCreateOmniTokenResponse>;
//     }
//     export class VantivPaymentService implements IVantivPayment {
//     //CreditCardType is convereted to enum in Angular
//         static $inject = ["$q",
//             "errorDisplayService",
//             "genericRepo",
//             "responseErrorService",
//             "environmentConfig",
//             "siteVerbiage",
//             "$http", "creditCardTypes", "StorefrontUtilityService"];
//         private static idCounter = 0;
//         private timeoutData: HCTRA.Model.VantivResponseLog;
//         constructor(private $q: ng.IQService,
//             private errorDisplayService: HCTRA.Service.IErrorDisplayService,
//             private genericRepo: HCTRA.Service.IGenericRepo,
//             private responseErrorService: HCTRA.Service.IResponseErrorService,
//             private envConfig: any,
//             private siteVerbiage: any,
//             private $http: angular.IHttpService,
//             private creditCardTypes,
//             private storefrontUtilityService: HCTRA.Storefront.Service.IStorefrontUtilityService) { }
//         private logVantivData = (logObj: HCTRA.Model.VantivRequestLog | HCTRA.Model.VantivResponseLog, isError: boolean) => {
//             if ((this.envConfig.vantivConfig.ErrorToggle && isError) || this.envConfig.vantivConfig.InfoToggle) {
//                 const logRequest = angular.copy(logObj);
//                 if (this.isVantivRequestLog(logRequest)) {
//                     this.genericRepo.dataFactory.LogVantivRequest(logRequest);
//                 } else {
//                     logRequest.isError = isError;
//                     this.genericRepo.dataFactory.LogVantivResponse(logRequest);
//                 }
//             }
//         };
//         private isVantivRequestLog = (log: any): log is HCTRA.Model.VantivRequestLog => {
//             return angular.isDefined((log as HCTRA.Model.VantivRequestLog).requestId);
//         };
//         public vantivPay = (creditCardNumber: string) : angular.IPromise<any> => {
//             const paypageId = this.envConfig.vantivConfig.PayPageID;
//             const reportGroup = this.envConfig.vantivConfig.ReportGroup;
//             const now = new Date();
//             const orderIdNbr = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getMilliseconds());
//             const mTxnID = "T" + orderIdNbr.toString();
//             const litleRequest = {
//                 "paypageId": paypageId,
//                 "reportGroup": reportGroup,
//                 "orderId": orderIdNbr,
//                 "id": mTxnID,
//                 "url": this.envConfig.vantivConfig.PayPageUrl // "https://request-prelive.np-securepaypage-litle.com"//vantivRequest.url
//             };
//             // Right before sending to Vantiv, inject the input element and populate the value with credit card number as in memory
//             const ccElementId = this.generateElementId();
//             angular.element("body").append('<input id="' + ccElementId + '" type="hidden" value="' + creditCardNumber + '" />');
//             const injectedCreditCardElement = angular.element("body>input#" + ccElementId)[0];
//             const formFields = {
//                 "accountNum": injectedCreditCardElement,
//                 "cvv2": "",
//                 "paypageRegistrationId": "",
//                 "bin": ""
//             };
//             const deferred = this.$q.defer();
//             this.logVantivData(this.vantivRequestObjectForLogging(litleRequest), false);
//             new LitlePayPage().sendToLitle(litleRequest, formFields, deferred.resolve,
//                 deferred.reject, this.timeoutOnLitle, this.envConfig.vantivConfig.TimeoutMilliSeconds);
//             // TODO: inject hidden input vantivCreditCard field in current html with no value
//             // Right before sending to Vantiv, inject the input element and populate the value with credit card number as in memory
//             return deferred.promise.then((response: HCTRA.Model.VantivResponse) => {
//                 this.logVantivData(this.vantivResponseObjectForLogging(response), false);
//                 // Only return the useful properties
//                 const vantivDto = new HCTRA.Model.VantivDto(response.lastFour, response.paypageRegistrationId);
//                 return vantivDto;
//             }).catch((err: any) => {
//                 const errorMessage = this.onErrorAfterLitle(err);
//                 this.errorDisplayService.displayToasts(errorMessage);
//                 return this.$q.reject(errorMessage);
//             }).finally(() => {
//                 injectedCreditCardElement.remove();
//             });
//         };
//         public getTokenizedCreditCardData = (config: VantivTriPosConfiguration, invokeManualEntry: boolean): angular.IPromise<Model.VantivTriPosCreateOmniTokenResponse> => {
//             if (config.errors && config.errors.length > 0) {
//                 return this.$q.reject(config);
//             }
//             const url = config.url.replace(/\/$/, "") + "/token/omni";
//             //create header object scoped to this method
//             const header = {
//                 "appname": () => null,
//                 "version": () => null,                
//                 "tp-application-id": config.applicationId,
//                 "tp-application-name": config.applicationName,
//                 "tp-application-version": config.applicationVersion,
//                 "tp-authorization": config.authorization,
//                 "tp-express-acceptor-id": config.acceptorId,
//                 "tp-express-account-id": config.accountId,
//                 "tp-express-account-token": config.accountToken,
//                 "tp-request-id": config.requestId,
//                 "tp-return-logs": true
//             };
//             const data = {
//                 laneId: config.laneId,
//                 vaultId: config.vaultId,
//                 invokeManualEntry: invokeManualEntry
//             };
//             //destroy credentials
//             delete config.applicationId;
//             delete config.applicationName;
//             delete config.applicationVersion;
//             delete config.authorization;
//             delete config.acceptorId;
//             delete config.accountId;
//             delete config.accountToken;
//             delete config.url;
//             delete config.laneId;
//             delete config.vaultId;
//             return this.$http
//                     .post(url, data, {
//                         headers: header,
//                         withCredentials: false
//                     })
//                     .catch(e => {
//                         //in the rare case where an exception comes up, we still want to capture it
//                         const log = {
//                             isError: true,
//                             message: 'A error occured when contacting Vantivs API',
//                             machineName: this.storefrontUtilityService.machineName,
//                             rawData: JSON.stringify(e)
//                         };
//                         this.genericRepo
//                             .dataFactory
//                             .TriPosLog(log);
//                         return this.$q.reject(e);
//                     })
//                     .then(response => {
//                         const log = this.buildRequestObjForLogging(response);
//                         let responseData = response.data as Model.VantivTriPosCreateOmniTokenResponse;
//                         if (!responseData) {
//                             const xhrStatusError = (response.xhrStatus || '').toLowerCase() === 'error';
//                             log.isError = true;
//                             log.message = xhrStatusError 
//                                 ? 'Vantiv responded with no data with error status. This may be a possible CORS error.'
//                                 : 'Vantiv responded with no data and no error status.';
//                             responseData = { errors:[], _errors: [], cardLogo: '' } as any;
//                         }
//                         const wasCancelled = log.isError && 
//                                 responseData['_errors'].some(e => (e.exceptionMessage || '').indexOf("cancelled response") > -1);
//                         responseData.cancelledByUser = wasCancelled;
//                         if (wasCancelled) {
//                             log.isError = false;
//                         }
//                         if (responseData.cardLogo && !this.creditCardTypes[responseData.cardLogo.toLowerCase()]) {
//                             log.message = `Kiosk does not support '${responseData.cardLogo}' cards`;
//                             log.isError = true;
//                         }
//                         console.log(log);
//                         this.genericRepo
//                             .dataFactory
//                             .TriPosLog(log);
//                         return log.isError ? this.$q.reject(responseData) : this.$q.resolve(responseData);
//                     });
//         };
//         public buildRequestObjForLogging = (responseObject) => {
//             const { config, data, status } = responseObject;
//             const cleanHeaders = { ...config.headers, 'tp-express-account-token': '****' };
//             const cleanConfig = { data: config.data, headers: cleanHeaders, method: config.method, url: config.url  };
//             const cleanData = data ? { ...data, binValue: '****', expirationMonth: '**', expirationYear: '**', tokenId: '****', _processor: null } : {};
//             const cleanResponse = { config: cleanConfig, data: cleanData, status };
//             const message = (responseObject.data && responseObject.data.exceptionMessage) || (cleanData._errors || [])
//                 .map(x => x.exceptionMessage)
//                 .join(' ## ');
//             return {
//                 message,
//                 isError: (responseObject.data && responseObject.data._hasErrors) || (((responseObject.data && responseObject.data.errors) || []).length > 0),
//                 machineName: this.storefrontUtilityService.machineName,
//                 rawData: JSON.stringify(cleanResponse)
//             };
//         }
//         public vantivRequestObjectForLogging = (litleRequest): HCTRA.Model.VantivRequestLog => {
//             const ret = {
//                 orderId: litleRequest.orderId,
//                 requestId: litleRequest.id,
//                 paypageId: litleRequest.paypageId,
//                 reportGroup: litleRequest.reportGroup,
//                 url: litleRequest.url
//             } as HCTRA.Model.VantivRequestLog;
//             this.timeoutData = {
//                 orderId: litleRequest.orderId,
//                 reportGroup: litleRequest.reportGroup,
//                 violationsData: null
//             } as HCTRA.Model.VantivResponseLog;
//             return ret;
//         };
//         public vantivResponseObjectForLogging = (response): HCTRA.Model.VantivResponseLog => {
//             const ret = {
//                 orderId: response.orderId,
//                 message: response.message,
//                 response: response.response,
//                 paypageRegistrationId: response.paypageRegistrationId,
//                 litleTxnId: response.litleTxnId,
//                 responseTime: response.responseTime,
//                 targetServer: response.targetServer,
//                 type: response.type,
//                 id: response.id,
//                 reportGroup: response.reportGroup,
//                 violationsData: null
//             } as HCTRA.Model.VantivResponseLog;
//             return ret;
//         };
//         private timeoutOnLitle = () => {
//             const timeoutResponse = angular.copy(this.timeoutData);
//             timeoutResponse.customLogMessage = "Vantiv timeout error";
//             this.logVantivData(timeoutResponse, true);
//             this.responseErrorService.displayToast(this.siteVerbiage.genericErrorMsg, "error", false);
//         };
//         private onErrorAfterLitle = (response: any): string => {
//             var outMessage;
//             if (response.response === '871') {
//                 outMessage = "Invalid card number. Check and retry. (Not Mod10)";
//             }
//             else if (response.response === '872') {
//                 outMessage = "Invalid card number. Check and retry. (Too short)";
//             }
//             else if (response.response === '873') {
//                 outMessage = "Invalid card number. Check and retry. (Too long)";
//             }
//             else if (response.response === '874') {
//                 outMessage = "Invalid card number. Check and retry. (Not a number)";
//             }
//             else if (response.response === '875') {
//                 outMessage = this.siteVerbiage.genericErrorMsg;
//             }
//             else if (response.response === '876') {
//                 outMessage = "Invalid card number. Check and retry. (Failure from Server)";
//             }
//             else if (response.response === '881') {
//                 outMessage = "Invalid card validation code. Check and retry. (Not a number)";
//             }
//             else if (response.response === '882') {
//                 outMessage = "Invalid card validation code. Check and retry. (Too short)";
//             }
//             else if (response.response === '883') {
//                 outMessage = "Invalid card validation code. Check and retry. (Too long)";
//             }
//             else if (response.response === '889') {
//                 outMessage = this.siteVerbiage.genericErrorMsg;
//             }
//             // Log the Vantiv error
//             this.logVantivData({
//                 orderId: response.orderId,
//                 message: response.message,
//                 response: response.response,
//                 responseTime: response.responseTime,
//                 id: response.id,
//                 reportGroup: response.reportGroup,
//                 customLogMessage: outMessage,
//                 violationsData: null
//             } as HCTRA.Model.VantivResponseLog, true);
//             return outMessage;
//         };
//         private generateElementId = () => {
//             return "vantivRequiredCardElement" + VantivPaymentService.idCounter++;
//         };
//     }
// }
(function () {
    'use strict';
    // angular.module('HCTRAModule').service('vantivPaymentService', HCTRA.Service.VantivPaymentService);
}());
(function () {
    'use strict';
    angular.module('HCTRAModule').factory('violationSortService', [
        function () {
            var violationSort = {};
            violationSort.sortViolationInvoices = function (inInvoices, onField) {
                var arr;
                for (var agencies in inInvoices) {
                    arr = inInvoices[agencies];
                    arr.sort(function (obj1, obj2) {
                        if (obj1[onField] < obj2[onField]) {
                            return -1;
                        }
                        else if (obj1[onField] === obj2[onField]) {
                            return 0;
                        }
                        else {
                            return 1;
                        }
                    });
                    inInvoices[agencies] = arr;
                }
            };
            return violationSort;
        }
    ]);
}());
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines the all tasks complete modal
        var StorefrontAllTasksCompleteController = /** @class */ (function () {
            function StorefrontAllTasksCompleteController($scope, $uibModalInstance, modalOptions, storefrontService, storefrontModalService, actions) {
                this.$scope = $scope;
                this.$uibModalInstance = $uibModalInstance;
                this.modalOptions = modalOptions;
                this.storefrontService = storefrontService;
                this.storefrontModalService = storefrontModalService;
                this.actions = actions;
                $scope.header = modalOptions.headerText;
                $scope.body = modalOptions.bodyText;
                $scope.call = function (action) { return $uibModalInstance.close(action); };
                $scope.actionText = function (action) { return actions[action]; };
                $scope.actions = actions;
            }
            StorefrontAllTasksCompleteController.$inject = [
                "$scope", "$uibModalInstance", "modalOptions", "StorefrontService", "StorefrontModalService", "actions"
            ];
            return StorefrontAllTasksCompleteController;
        }());
        Controller.StorefrontAllTasksCompleteController = StorefrontAllTasksCompleteController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontAllTasksCompleteController", HCTRA.Controller.StorefrontAllTasksCompleteController);
})();
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines a generic prompt
        var StorefrontCmsModalController = /** @class */ (function () {
            function StorefrontCmsModalController($scope, $uibModalInstance, controllerName, template) {
                this.$scope = $scope;
                this.$uibModalInstance = $uibModalInstance;
                this.controllerName = controllerName;
                this.template = template;
                $scope.cmsController = controllerName;
                $scope.cmsTemplate = template;
                $scope.exit = function () { return $uibModalInstance.close(); };
            }
            StorefrontCmsModalController.$inject = ["$scope", "$uibModalInstance", "controllerName", "template"];
            return StorefrontCmsModalController;
        }());
        Controller.StorefrontCmsModalController = StorefrontCmsModalController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule')
        .controller("StorefrontCmsModalController", HCTRA.Controller.StorefrontCmsModalController)
        .directive("storefrontDynamicController", ['$compile', '$parse', function ($compile, $parse) {
            return {
                restrict: 'A',
                terminal: true,
                priority: 100000,
                link: function (scope, elem) {
                    var name = $parse(elem.attr('storefront-dynamic-controller'))(scope);
                    elem.removeAttr('storefront-dynamic-controller');
                    elem.attr('ng-controller', name);
                    $compile(elem)(scope);
                }
            };
        }]);
})();
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines root storefront controller that wires up service calls, state redirects, and other events  
        var StorefrontController = /** @class */ (function () {
            function StorefrontController(storefrontService, $scope, $q, $state, stateNames, router, storefrontModalService, storefrontEventService, $window, routes, errorDisplayService, loginStates, storefrontCmsIds) {
                var _this = this;
                this.storefrontService = storefrontService;
                this.$scope = $scope;
                this.$q = $q;
                this.$state = $state;
                this.stateNames = stateNames;
                this.router = router;
                this.storefrontModalService = storefrontModalService;
                this.storefrontEventService = storefrontEventService;
                this.$window = $window;
                this.routes = routes;
                this.errorDisplayService = errorDisplayService;
                this.loginStates = loginStates;
                this.storefrontCmsIds = storefrontCmsIds;
                //flag for tracking when the store front is ready for use
                this.readyToUse = false;
                this.getBackgroundImage = function (currentState) {
                    var canStateUseBackground = _this.canShowBackgroundImage(currentState);
                    if (canStateUseBackground) {
                        var id = _this.storefrontCmsIds.LandingPage;
                        if (id) {
                            return _this.storefrontService
                                .getCmsItemById(id)
                                .then(function (response) { return _this.backgroundImage = response.ImageItem; });
                        }
                    }
                    return _this.$q.resolve(null);
                };
                //builds list of urls to give to service to pre-cache
                this.prefetchAllContent = function () {
                    //get all storefront templates used in workitems
                    var urlsToPrefetch = [];
                    //build a lookup for all available routes' template paths
                    var routeMap = _this.buildRouteLookup(_this.router);
                    //for each workitem
                    _this.storefrontService.workItems
                        //get all states
                        .map(function (item) { return item.states; })
                        //smoosh them together
                        .reduce(function (a, b) { return a.concat(b); }, [])
                        //add a few extras
                        .concat([_this.stateNames.storefrontSelection, _this.stateNames.storefrontSurvey, _this.loginStates.Login, _this.loginStates.AddMissingInformation])
                        //then for all those states
                        .forEach(function (state) {
                        //lookup there template path and add to array
                        if (!angular.isArray(routeMap[state])) {
                            urlsToPrefetch.push(routeMap[state]);
                        }
                        else {
                            urlsToPrefetch.push.apply(urlsToPrefetch, routeMap[state]);
                        }
                    });
                    //add workitem image content
                    _this.storefrontService.workItems
                        .forEach(function (workItem) {
                        if (workItem.selectedIcon && workItem.unselectedIcon) {
                            urlsToPrefetch.push(workItem.selectedIcon.image);
                            urlsToPrefetch.push(workItem.unselectedIcon.image);
                        }
                    });
                    //send all defined urls to be prefetched!
                    return _this.storefrontService.prefetchContent(urlsToPrefetch.filter(function (url) { return angular.isDefined(url); }));
                };
                //determine if a ui-view directive should use the default '' view template or if a storefront view is available for display
                this.templateInUse = function () {
                    if (_this.storefrontService.fullSiteMode || !_this.$state.current.views || !_this.$state.current.views["storefront"]) {
                        return "";
                    }
                    else {
                        return "storefront";
                    }
                };
                //redirects to workitem's start state or if null, go to survey
                this.goToWorkItem = function (item) {
                    //don't go to workitem if in fullsite mode!
                    if (_this.storefrontService.fullSiteMode)
                        return _this.$q.resolve();
                    var initState = item ? _this.storefrontService.getWorkItemInitState(item) : _this.stateNames.storefrontSurvey;
                    if (initState) {
                        return _this.$state.go(initState);
                    }
                    return _this.$q.resolve();
                };
                this.canShowBackgroundImage = function (currentState) {
                    currentState = currentState || _this.$state.current;
                    return currentState &&
                        (currentState.name === '' ||
                            currentState.name === _this.stateNames.storefrontHome ||
                            currentState.name === _this.stateNames.storefrontSelection);
                };
                //set up scope variables
                this.initialUrl = this.$window.location.origin + this.routes.storefrontHome;
                $scope.hasStarted = function () { return _this.hasStarted(); };
                $scope.isWorkflowActive = function () { return _this.storefrontService.isWorkflowActive(); };
                $scope.showWorkflowFunctions = function () { return (_this.storefrontService.fullSiteMode || _this.hasStarted()) &&
                    _this.$state.current.name !== _this.stateNames.storefrontSurvey; };
                $scope.showTranslationSelect = function () {
                    return _this.hasStarted() && !_this.storefrontService.fullSiteMode;
                };
                $scope.finish = function () { return _this.finish(); };
                $scope.isFullSiteViewActive = function () { return _this.storefrontService.fullSiteMode; };
                $scope.showMenu = function () { return _this.storefrontService.showMenu(_this.$state.current); };
                $scope.showMainView = function () {
                    var currentItem = _this.storefrontService.currentWorkItem();
                    var hasStates = currentItem && currentItem.states && currentItem.states.length > 0;
                    return !_this.isExternalTaskModalOpen() && (!currentItem || hasStates);
                };
                $scope.templateToUse = function () { return _this.templateInUse(); };
                $scope.isCmsContentView = function () { return _this.storefrontService.isCmsContent(_this.$state.current) && !_this.storefrontService.fullSiteMode; };
                $scope.closeCmsContentView = function () { return _this.storefrontModalService.closeCmsContent(); };
                $scope.isReadyToUse = function () { return _this.readyToUse; };
                $scope.externalModalOpen = function () { return _this.storefrontModalService.isExternalTaskModalOpen(); };
                $scope.transitioningState = false;
                $scope.transitionSubView = false;
                $scope.machineName = this.storefrontService.machineName;
                $scope.host = this.$window.location.origin;
                $scope.resetTaps = 0;
                $scope.hardReset = function () {
                    $scope.resetTaps++;
                    if ($scope.resetTaps >= 10) {
                        $scope.resetTaps = 0;
                        _this.storefrontService.reset(HCTRA.Model.StorefrontLogOffType.Forced);
                    }
                };
                //initial modal settings
                storefrontModalService.setGlobalModalSettings();
                this.onInitialized =
                    //when store front servcie is ready..
                    storefrontService.onInitialized
                        //init shell user
                        .then(function () { return _this.initShellUser(); })
                        //prefetch content
                        .then(function () { return _this.prefetchAllContent(); })
                        .then(function () { return _this.getBackgroundImage(_this.$state.get(_this.stateNames.storefrontHome)); })
                        .then(function () {
                        _this.$scope.backgroundImage = _this.backgroundImage;
                        $scope.showBackgroundImage = _this.canShowBackgroundImage(_this.$state.current);
                    })
                        .then(function () {
                        //logo
                        _this.$scope.storefrontLogo = _this.storefrontService.getStorefrontLogo();
                        //wire up events
                        _this.storefrontEventService.startListening(_this);
                        //clean up...
                        _this.$scope.$on("$destroy", function () { return _this.storefrontEventService.stopListening(); });
                    })
                        //flag ready to use
                        .then(function () {
                        _this.readyToUse = storefrontService.isEnabled();
                    })
                        .catch(function (e) {
                        //in case something bad happened, so a failure to init message
                        _this.$window.console.log(e);
                        return _this.storefrontModalService
                            .failedToInitMessage().then(function () {
                            _this.onResetComplete(true);
                        });
                    })
                        //regardless, resolves with instance of this controller
                        .then(function () { return _this; });
            }
            /****************************Start IStorefrontEventHandlers*****************************************************************/
            StorefrontController.prototype.onIncompleteWorkItem = function (workItem) {
                return this.storefrontModalService.skippedTasksMessage(workItem).then(this.goToWorkItem);
            };
            StorefrontController.prototype.onCompletedWorkItem = function (completedWorkItem, nextWorkItem) {
                var _this = this;
                if (completedWorkItem) {
                    return this.storefrontModalService
                        .showCompletionMessage(completedWorkItem)
                        .then(function () {
                        if (nextWorkItem && nextWorkItem.isSelected) {
                            return _this.goToWorkItem(nextWorkItem).catch(function () { return _this.$q.resolve(); });
                        }
                        else if (nextWorkItem && !nextWorkItem.isSelected) {
                            return _this.$q.reject("no");
                        }
                        return _this.$q.resolve();
                    });
                }
                else {
                    //starting...
                    return this.$q.resolve();
                }
            };
            StorefrontController.prototype.onResetting = function () {
                this.storefrontModalService.setGlobalModalSettings();
                this.storefrontModalService.closeAll(true);
                this.storefrontEventService.resetState();
                return this.$state.go(this.stateNames.storefrontHome);
            };
            StorefrontController.prototype.onStartTransition = function (fromState, toState) {
                this.$scope.resetTaps = 0;
                if (!this.storefrontService.fullSiteMode) {
                    this.$scope.transitionSubView =
                        this.storefrontService.showMenu(toState) &&
                            this.storefrontService.showMenu(fromState);
                    this.$scope.transitioningState = true;
                }
                this.$scope.showBackgroundImage = this.canShowBackgroundImage(toState);
                if (this.$scope.showBackgroundImage) {
                    this.$scope.backgroundImage = this.backgroundImage;
                }
                return this.$q.resolve();
            };
            StorefrontController.prototype.onEndTransition = function () {
                this.$scope.transitioningState = false;
                if (!this.$scope.showBackgroundImage) {
                    this.$scope.backgroundImage = null;
                }
            };
            StorefrontController.prototype.onResetComplete = function (hard) {
                this.errorDisplayService.clearToasts();
                if (hard) {
                    this.$window.location.href = this.initialUrl;
                    return this.$q.resolve();
                }
                return this.$q.resolve();
            };
            /****************************End IStorefrontEventHandlers**********************************************************************/
            StorefrontController.prototype.initShellUser = function () {
                var _this = this;
                if (this.storefrontService.isShellAccountInitialized) {
                    return this.$q.resolve();
                }
                return this.storefrontService
                    .authenticateShellAccount()
                    .then(function () { return _this.$window.location.reload(); });
            };
            //builds a reverse lookup by statename from the routes
            StorefrontController.prototype.buildRouteLookup = function (routeConfigs) {
                return routeConfigs.reduce(function (acc, route) {
                    if (route.config && route.config.templateUrl) {
                        if (!angular.isFunction(route.config.templateUrl)) {
                            acc[route.name] = route.config.templateUrl;
                        }
                    }
                    else if (route.config && route.config.views) {
                        acc[route.name] = acc[route.name] || [];
                        for (var viewName in route.config.views) {
                            if (route.config.views.hasOwnProperty(viewName)) {
                                var view = route.config.views[viewName];
                                if (view && view.templateUrl && !angular.isFunction(view.templateUrl)) {
                                    acc[route.name].push(view.templateUrl);
                                }
                            }
                        }
                    }
                    return acc;
                }, {});
            };
            //true if user not at home screen has started
            StorefrontController.prototype.hasStarted = function () {
                return this.$state.current.name !== this.stateNames.storefrontHome;
            };
            //true if a modal was opened to show an external task
            StorefrontController.prototype.isExternalTaskModalOpen = function () {
                return this.storefrontModalService.isExternalTaskModalOpen();
            };
            //exits everything
            StorefrontController.prototype.finish = function () {
                this.storefrontModalService.exit();
            };
            StorefrontController.$inject = [
                "StorefrontService", "$scope", "$q",
                "$state", "stateNames", "router", "StorefrontModalService", "StorefrontEventService", "$window", "routes",
                "errorDisplayService", "loginStates", "storefrontCmsIds"
            ];
            return StorefrontController;
        }());
        Controller.StorefrontController = StorefrontController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontController", HCTRA.Controller.StorefrontController);
})();
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines a generic prompt
        var StorefrontExternalTaskModalController = /** @class */ (function () {
            function StorefrontExternalTaskModalController($scope, $uibModalInstance) {
                this.$scope = $scope;
                this.$uibModalInstance = $uibModalInstance;
                $scope.exit = function () {
                    $scope.show = false;
                    $uibModalInstance.close();
                };
                $scope.show = true;
            }
            StorefrontExternalTaskModalController.$inject = ["$scope", "$uibModalInstance"];
            return StorefrontExternalTaskModalController;
        }());
        Controller.StorefrontExternalTaskModalController = StorefrontExternalTaskModalController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontExternalTaskModalController", HCTRA.Controller.StorefrontExternalTaskModalController);
})();
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines a generic prompt
        var StorefrontGenericPromptController = /** @class */ (function () {
            function StorefrontGenericPromptController($scope, $uibModalInstance, modalOptions, storefrontService, storefrontModalService, actions, showModalClose, showGoBack, imageData) {
                if (showModalClose === void 0) { showModalClose = false; }
                this.$scope = $scope;
                this.$uibModalInstance = $uibModalInstance;
                this.modalOptions = modalOptions;
                this.storefrontService = storefrontService;
                this.storefrontModalService = storefrontModalService;
                this.actions = actions;
                this.showModalClose = showModalClose;
                this.showGoBack = showGoBack;
                this.imageData = imageData;
                $scope.header = modalOptions.headerText;
                $scope.body = modalOptions.bodyText;
                $scope.image = imageData;
                $scope.actions = actions;
                $scope.showModalClose = showModalClose;
                $scope.showGoBack = showGoBack;
                $scope.actionText = function (action) { return actions && actions[action]; };
                $scope.call = function (action) { return $uibModalInstance.close(action); };
                $scope.dismiss = function () { return $uibModalInstance.dismiss(); };
            }
            StorefrontGenericPromptController.$inject = ["$scope", "$uibModalInstance", "modalOptions", "StorefrontService", "StorefrontModalService", "actions", "showModalClose", "showGoBack", "imageData"];
            return StorefrontGenericPromptController;
        }());
        Controller.StorefrontGenericPromptController = StorefrontGenericPromptController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontGenericPromptController", HCTRA.Controller.StorefrontGenericPromptController);
})();
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines controller for handling a prompt to continue seesion.
        var StorefrontInactivityController = /** @class */ (function () {
            function StorefrontInactivityController($scope, $uibModalInstance, environmentConfig, modalOptions, $interval, storefrontService, actions, cmsTextInsertionService) {
                var _this = this;
                this.$scope = $scope;
                this.$uibModalInstance = $uibModalInstance;
                this.environmentConfig = environmentConfig;
                this.modalOptions = modalOptions;
                this.$interval = $interval;
                this.storefrontService = storefrontService;
                this.actions = actions;
                this.cmsTextInsertionService = cmsTextInsertionService;
                //the initial amount of time before session resets
                $scope.timeLeftAfterWarningInMinutesStatic = (environmentConfig.storefrontConfigs.StorefrontInactivityReset - environmentConfig.storefrontConfigs.StorefrontInactivityWarning) / 60000 | 0;
                //the remaining time left until the session resets. this will update every second.
                $scope.timeLeftTillResetInSeconds = (environmentConfig.storefrontConfigs.StorefrontInactivityReset - environmentConfig.storefrontConfigs.StorefrontInactivityWarning) / 1000 | 0;
                //sets up interval to count down time left
                var intervalCancel = $interval(function () {
                    $scope.timeLeftTillResetInSeconds--;
                    if ($scope.timeLeftTillResetInSeconds <= 0) {
                        $interval.cancel(intervalCancel);
                        _this.storefrontService.reset(HCTRA.Model.StorefrontLogOffType.Auto);
                    }
                }, 1000);
                var insertionValues = {
                    timeLeftAfterWarningInMinutesStatic: $scope.timeLeftAfterWarningInMinutesStatic
                };
                $scope.call = function (action) { return $uibModalInstance.close(action); };
                $scope.actionText = function (action) { return actions[action]; };
                $scope.headerText = this.cmsTextInsertionService.insertValues(insertionValues, modalOptions.headerText);
                $scope.bodyText = modalOptions.bodyText;
                //clean up
                $scope.$on("$destroy", function () { return $interval.cancel(intervalCancel); });
            }
            StorefrontInactivityController.$inject = ["$scope", "$uibModalInstance", "environmentConfig", "modalOptions", "$interval", "StorefrontService", "actions", "cmsTextInsertionService"];
            return StorefrontInactivityController;
        }());
        Controller.StorefrontInactivityController = StorefrontInactivityController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontInactivityController", HCTRA.Controller.StorefrontInactivityController);
})();
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines a replacement controller to use for all default modals within store front
        var StorefrontModalReplacementController = /** @class */ (function () {
            function StorefrontModalReplacementController($scope, $uibModalInstance, modalOptions) {
                this.$scope = $scope;
                this.$uibModalInstance = $uibModalInstance;
                this.modalOptions = modalOptions;
                $scope.header = modalOptions.headerText;
                $scope.closeButtonText = modalOptions.closeButtonText;
                $scope.actionButtonText = modalOptions.actionButtonText;
                $scope.body = modalOptions.bodyText;
                $scope.subText = modalOptions.subText;
                $scope.action = function () {
                    $uibModalInstance.close();
                };
                $scope.dismiss = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            }
            StorefrontModalReplacementController.$inject = ["$scope", "$uibModalInstance", "modalOptions"];
            return StorefrontModalReplacementController;
        }());
        Controller.StorefrontModalReplacementController = StorefrontModalReplacementController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontModalReplacementController", HCTRA.Controller.StorefrontModalReplacementController);
})();
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //define work item selection logic
        var StorefrontOptionSelectionController = /** @class */ (function () {
            function StorefrontOptionSelectionController(storefrontService, $scope, $state, homeStates, storefrontModalService, $q) {
                var _this = this;
                this.storefrontService = storefrontService;
                this.$scope = $scope;
                this.$state = $state;
                this.homeStates = homeStates;
                this.storefrontModalService = storefrontModalService;
                this.$q = $q;
                this.startWorkItems = function () {
                    if (!_this.isProceeding) {
                        _this.isProceeding = true;
                        _this.storefrontService.startWorkItems()
                            .then(function (initState) {
                            if (initState) {
                                _this.$state.go(initState);
                            }
                        })
                            .catch(function () {
                            _this.isProceeding = false;
                        });
                    }
                };
                this.keyPressed = function (event) {
                    if (!_this.$scope.noTasksSelected && event.keyCode === 13) {
                        event.preventDefault();
                        event.stopPropagation();
                        _this.startWorkItems();
                    }
                };
                this.toggleWorkItem = function (workItem) {
                    if (workItem.isUnavailable || !workItem.states || workItem.states.length === 0)
                        return;
                    workItem.isSelected = !workItem.isSelected;
                    _this.setUnavailbleSettings();
                    _this.setCanProceed();
                };
                this.setCanProceed = function () {
                    _this.$scope.noTasksSelected = _this.storefrontService.workItems.reduce(function (acc, item) { return !item.isSelected && acc; }, true);
                };
                this.foreachWorkItem = function (func) { return _this.storefrontService.workItems.forEach(func); };
                this.getSelectionIcon = function (item, isHovering) {
                    var imageData = {
                        alt: null,
                        url: null
                    };
                    if (item.isUnavailable) {
                        imageData.url = _this.defaultIcon.ItemMedialUrl;
                        imageData.alt = "unavailable";
                    }
                    else if (item.isSelected) {
                        imageData.url = _this.selectedIcon.ItemMedialUrl;
                        imageData.alt = "selected";
                    }
                    else if (isHovering) {
                        imageData.url = _this.hoverIcon.ItemMedialUrl;
                        imageData.alt = "hover";
                    }
                    else {
                        imageData.url = _this.defaultIcon.ItemMedialUrl;
                        imageData.alt = "none";
                    }
                    return imageData;
                };
                this.getContentFromState = function (name) {
                    return _this.storefrontService.getCmsItemById(_this.$state.current["cms"][name]);
                };
                //go home is store front not enabled
                if (!storefrontService.isEnabled()) {
                    $state.go(this.homeStates.Frame);
                    return;
                }
                this.isProceeding = false;
                //opens storefront in full site mode
                $scope.dontSeeWantIneed = function () {
                    _this.storefrontModalService.iDontSeeWhatINeedMessage(null);
                };
                $scope.getSelectionIcon = this.getSelectionIcon;
                this.setUnavailbleSettings();
                this.setCanProceed();
                var contentIds = ["selectedIconId", "hoverIconId", "defaultIconId", "taskSelectionPageId"]
                    .reduce(function (acc, key) { return (acc[key] = _this.getContentFromState(key), acc); }, {});
                this.$q.all(contentIds).then(function (content) {
                    _this.$scope.cmsContent = content.taskSelectionPageId;
                    _this.defaultIcon = content.defaultIconId;
                    _this.hoverIcon = content.hoverIconId;
                    _this.selectedIcon = content.selectedIconId;
                    _this.$scope.uiSortedWorkItems = _this.storefrontService.workItems.filter(function (item) { return !item.isShadowItem; });
                    _this.$scope.startWorkItems = _this.startWorkItems;
                    _this.$scope.toggleWorkItem = _this.toggleWorkItem;
                    _this.$scope.keyPressed = _this.keyPressed;
                });
            }
            StorefrontOptionSelectionController.prototype.setUnavailbleSettings = function () {
                var set = {};
                this.foreachWorkItem(function (item) {
                    if (item.isSelected && item.unavailableWhenSelected) {
                        for (var _i = 0, _a = item.unavailableWhenSelected; _i < _a.length; _i++) {
                            var id = _a[_i];
                            set[id] = true;
                        }
                    }
                });
                if (this.storefrontService.isAuthenticated()) {
                    set[HCTRA.Model.SelectedOptions.OACC] = true;
                }
                this.foreachWorkItem(function (item) {
                    item.isUnavailable = set[item.id];
                    if (set[item.id]) {
                        item.isSelected = false;
                    }
                });
            };
            StorefrontOptionSelectionController.$inject = ["StorefrontService", "$scope", "$state", "homeStates", "StorefrontModalService", "$q"];
            return StorefrontOptionSelectionController;
        }());
        Controller.StorefrontOptionSelectionController = StorefrontOptionSelectionController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontOptionSelectionController", HCTRA.Controller.StorefrontOptionSelectionController);
})();
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines contoller for viewing a js rendered pdf file
        var StorefrontPdfViewerController = /** @class */ (function () {
            function StorefrontPdfViewerController($window, $scope, $timeout, $uibModalInstance, pdfHref) {
                var _this = this;
                this.$window = $window;
                this.$scope = $scope;
                this.$timeout = $timeout;
                this.$uibModalInstance = $uibModalInstance;
                this.pdfHref = pdfHref;
                this.styleHeader = "\n    @page {\n        size: A4;   \n        margin: 0cm;  \n\n        @bottom-left {\n            content: \"\";\n            font-size: 0;\n            margin: 0;\n        }    \n\n        @bottom-right {\n            content: \"\";\n            font-size: 0;\n            margin: 0;\n        }    \n\n        @top-left {\n            content: \"\";\n            font-size: 0;\n            margin: 0;\n        }    \n\n        @top-right {\n            content: \"\";\n            font-size: 0;\n            margin: 0;\n        }    \n    }\n\n    html, body, img {\n        padding: 0;\n    }\n\n    img {\n        display: block;\n        page-break-before:avoid;\n        page-break-after: avoid;\n        page-break-inside:avoid; \n        margin: 0 auto;\n    }\n";
                var maxAttempts = 15;
                var currentAttempt = 0;
                var pdfDataRaw = null;
                //placeholder loading message
                $scope.message = "Loading...";
                $scope.close = function () {
                    $uibModalInstance.close();
                };
                //print pdf in new window
                $scope.print = function () {
                    //only print if the raw pdf image data is loaded
                    if (!pdfDataRaw)
                        return;
                    var header = _this.styleHeader;
                    var newWin = _this.$window.open('', '');
                    newWin.document.open();
                    //insert raw image tags into new window to be printed
                    var page = "\n<!DOCTYPE html>\n<html>\n    <head>\n        <meta http- equiv=\"X-UA-Compatible\" content= \"IE=Edge\" />\n        <style type=\"text/css\" media= \"print\" > " + header + " </style>\n    </head>\n    <body>" + pdfDataRaw + "</body>\n</html>";
                    newWin.document.write(page);
                    newWin.document.close();
                    //wait a bit before trying to print, to ensure raw image tags have loaded
                    var c = _this;
                    c.$timeout(500)
                        .then(function () { return newWin.print(); })
                        .then(function () { return c.$timeout(10000); })
                        .then(function () {
                        if (!newWin.closed) {
                            newWin.close();
                        }
                    });
                };
                //passthrough errors from pdf renderer
                $scope.error = function (e) {
                    if (angular.isDefined(e.status) && e.status >= 400 && currentAttempt < maxAttempts) {
                        //retry
                        currentAttempt++;
                        pdfDataRaw = null;
                        _this.$timeout(function () { return $scope.pdfRequest = { url: pdfHref }; }, 1000);
                    }
                    else if (angular.isDefined(e.status) && e.status >= 400) {
                        $scope.message = "Could not load PDF document at this time.";
                    }
                    else {
                        $uibModalInstance.close(e);
                    }
                };
                //translate the raw rendered pdf pages into image tags and store into a string
                $scope.loaded = function (pdfData) {
                    //width: 8.27 in;
                    //max - height: 11.69 in;
                    pdfDataRaw = pdfData.reduce(function (acc, d) {
                        if (!d.width || !d.height)
                            return acc + '';
                        var width, height;
                        var ratio = d.height / d.width;
                        if (ratio > Math.SQRT2) { // height is max
                            height = 1100;
                            width = 1100 / ratio;
                        }
                        else if (ratio < Math.SQRT2 && ratio > Math.SQRT1_2) {
                            if (d.width > d.height) {
                                height = 850;
                                width = 850 * ratio;
                            }
                            else {
                                width = 850;
                                height = 850 * ratio;
                            }
                        }
                        else { // width is max
                            width = 1100;
                            height = 1100 / ratio;
                        }
                        width = (width | 0) / 100;
                        height = (height | 0) / 100;
                        return acc + ("<img src=\"" + d.data + "\" style=\"width:" + width + "in;height:" + height + "in;\" />");
                    }, "");
                };
                //variable to pass pdf location to pdf viewer directive
                $scope.pdfRequest = { url: pdfHref };
            }
            StorefrontPdfViewerController.$inject = ["$window", "$scope", "$timeout", "$uibModalInstance", "pdfHref"];
            return StorefrontPdfViewerController;
        }());
        Controller.StorefrontPdfViewerController = StorefrontPdfViewerController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontPdfViewerController", HCTRA.Controller.StorefrontPdfViewerController);
})();
//Migrated
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines suppression controller with fail safe reboot if
        //app enters a invalid state.
        var StorefrontSuppressionController = /** @class */ (function () {
            function StorefrontSuppressionController($scope, storefrontService, $timeout) {
                this.$scope = $scope;
                this.storefrontService = storefrontService;
                this.$timeout = $timeout;
                //if this controller becomes active for more than 
                //15 seconds, something maybe wrong and force a hard
                //reset of application
                var performReset = true;
                var timeoutPromise = $timeout(15000);
                timeoutPromise.then(function () {
                    if (performReset) {
                        storefrontService.hardReset();
                    }
                });
                //however, if controller is being unloaded before the
                //timeout, don't perform hard reset
                $scope.$on('$destroy', function () {
                    $timeout.cancel(timeoutPromise);
                    performReset = false;
                });
            }
            StorefrontSuppressionController.$inject = ["$scope", "StorefrontService", "$timeout"];
            return StorefrontSuppressionController;
        }());
        Controller.StorefrontSuppressionController = StorefrontSuppressionController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontSuppressionController", HCTRA.Controller.StorefrontSuppressionController);
})();
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines the survey controller
        var StorefrontSurveyController = /** @class */ (function () {
            function StorefrontSurveyController($scope, storefrontService, $state, stateNames, $q) {
                var _this = this;
                this.$scope = $scope;
                this.storefrontService = storefrontService;
                this.$state = $state;
                this.stateNames = stateNames;
                this.$q = $q;
                this.done = function () {
                    _this.storefrontService
                        .reset()
                        .finally(function () { return _this.$state.go(_this.stateNames.storefrontHome); });
                };
                this.submit = function () {
                    //"submit" survey
                    _this.$scope.isSubmitting = true;
                    _this.storefrontService.saveSurveyResponse(_this.$scope.survey.selection, _this.$scope.survey.comments)
                        .finally(function () {
                        _this.$scope.isSubmitting = false;
                        _this.$scope.isSubmitted = true;
                    });
                };
                this.getCmsContent = function (id) {
                    return _this.storefrontService.getCmsItemById(_this.$state.current["cms"][id]);
                };
                if (this.storefrontService.isEnabled() && this.storefrontService.fullSiteMode) {
                    this.storefrontService.fullSiteMode = false;
                }
                $scope.done = this.done;
                $scope.submit = this.submit;
                $scope.survey = {
                    comments: null,
                    selection: null
                };
                $scope.isSubmitted = false;
                $scope.isSubmitting = false;
                $scope.canSubmitt = function (modelValue) { return (modelValue !== null); };
                this.getCmsContent("surveyId").then(function (res) {
                    $scope.surveyContent = res;
                    $scope.maxCommentsChars = res.maxCommentCharacters;
                    $scope.options = [
                        {
                            name: res.goodRatingText,
                            color: "rating-good",
                            selectedImageUrl: res.goodRatingIconSelected.image,
                            unSelectedImageUrl: res.goodRatingIconUnselected.image,
                            value: 1
                        },
                        {
                            name: res.neutralRatingText,
                            color: "rating-neutral",
                            selectedImageUrl: res.neutralRatingIconSelected.image,
                            unSelectedImageUrl: res.neutralRatingIconUnselected.image,
                            value: 0
                        },
                        {
                            name: res.badRatingText,
                            color: "rating-bad",
                            selectedImageUrl: res.badRatingIconSelected.image,
                            unSelectedImageUrl: res.badRatingIconUnselected.image,
                            value: -1
                        }
                    ];
                    _this.getCmsContent("surveyThankYouModalId").then(function (thankYouRes) {
                        $scope.thankYouMessage = thankYouRes.Title;
                        $scope.buttons = thankYouRes.buttons;
                    });
                    $scope.maxCharsReached = function () {
                        var chars = ($scope.survey.comments) ? ($scope.survey.comments.length >= ($scope.maxCommentsChars - 1)) : false;
                        return chars;
                    };
                    $scope.charRemaining = function () {
                        var remaining = ($scope.survey.comments) ? ($scope.maxCommentsChars - $scope.survey.comments.length) : $scope.maxCommentsChars;
                        return remaining;
                    };
                });
            }
            StorefrontSurveyController.$inject = ["$scope", "StorefrontService", "$state", "stateNames", "$q"];
            return StorefrontSurveyController;
        }());
        Controller.StorefrontSurveyController = StorefrontSurveyController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontSurveyController", HCTRA.Controller.StorefrontSurveyController);
})();
var HCTRA;
(function (HCTRA) {
    var Controller;
    (function (Controller) {
        //defines the task complete modal
        var StorefrontTaskCompleteController = /** @class */ (function () {
            function StorefrontTaskCompleteController($scope, $uibModalInstance, modalOptions, storefrontService, storefrontModalService, actions, cmsTextInsertionService) {
                this.$scope = $scope;
                this.$uibModalInstance = $uibModalInstance;
                this.modalOptions = modalOptions;
                this.storefrontService = storefrontService;
                this.storefrontModalService = storefrontModalService;
                this.actions = actions;
                this.cmsTextInsertionService = cmsTextInsertionService;
                $scope.completeTaskCount = storefrontService.workItems.filter(function (x) { return x.isSelected && x.isCompleted && !x.isShadowItem; }).length;
                $scope.selectedTaskCount = storefrontService.workItems.filter(function (x) { return x.isSelected && !x.isShadowItem; }).length;
                var insertionValues = {
                    completeTaskCount: $scope.completeTaskCount,
                    selectedTaskCount: $scope.selectedTaskCount
                };
                $scope.body = this.cmsTextInsertionService.insertValues(insertionValues, modalOptions.bodyText);
                $scope.header = modalOptions.headerText;
                $scope.actionText = function (action) { return actions && actions[action]; };
                $scope.call = function (action) { return $uibModalInstance.close(action); };
                $scope.actions = actions;
                $scope.addWorkItem = function (workItemIdAsString) {
                    var workItemId = HCTRA.Model.SelectedOptions[workItemIdAsString];
                    var workItem = storefrontService.insertWorkItem(workItemId);
                    storefrontService
                        .skip(workItemId)
                        .then(function () { return $uibModalInstance.close(workItem); });
                };
            }
            StorefrontTaskCompleteController.$inject = [
                "$scope", "$uibModalInstance", "modalOptions", "StorefrontService", "StorefrontModalService", "actions", "cmsTextInsertionService"
            ];
            return StorefrontTaskCompleteController;
        }());
        Controller.StorefrontTaskCompleteController = StorefrontTaskCompleteController;
    })(Controller = HCTRA.Controller || (HCTRA.Controller = {}));
})(HCTRA || (HCTRA = {}));
(function () {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontTaskCompleteController", HCTRA.Controller.StorefrontTaskCompleteController);
})();
//# sourceMappingURL=appBundle.js.map