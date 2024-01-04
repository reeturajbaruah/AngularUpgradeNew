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
        .factory('sniffrjs', ['thirdPartyDowngrades', thirdPartyDowngrades => thirdPartyDowngrades.Sniffr])
        .factory('bowserjs', ['thirdPartyDowngrades', thirdPartyDowngrades => thirdPartyDowngrades.Bowser])
        .factory('momentjs', ['thirdPartyDowngrades', thirdPartyDowngrades => thirdPartyDowngrades.Moment])
        .factory('vimeoPlayer', ['thirdPartyDowngrades', thirdPartyDowngrades => thirdPartyDowngrades.Vimeo]);

    // eslint-disable-next-line angular/module-getter
    angularJsModule.config(['$urlServiceProvider', $urlServiceProvider => $urlServiceProvider.deferIntercept()])
    .run(
    ['$rootScope', 'AuthService', 'SessionService',
        'responseErrorService', 'addMissingInformationService', '$state',
        'homeStates', 'APP_LIFECYCLE_EVENTS', 'browserExtensionHandlerService',
        'templateCacheHelper', 'experienceEditorHelper', 'router',
        'eventTrackingService', '$transitions', '$window',
        'sniffrjs', 'StorefrontUtilityService',
        function ($rootScope, AuthService, SessionService,
            responseErrorService, addMissingInformationService, $state,
            homeStates, APP_LIFECYCLE_EVENTS, browserExtensionHandlerService,
            templateCacheHelper, experienceEditorHelper, router,
            eventTrackingService, $transitions, $window,
            sniffrjs, StorefrontUtilityService) {

            //even though 'router' is not used, it needs to be loaded here to initialize the routes!
            if (!router) {
                throw "router provider was not initialized";
            }
            SessionService.default();
            var data = {
                isCurrentBalanceStored: !!sessionStorage.getItem('currentBalance')

            };

            AuthService.profile(data).then(
                function (response) {
                    if (response.errors.length == 0) {
                        var missingInformationFlags = addMissingInformationService.isMissingInfo(response.passwordNeedsReset, response.emailIsMissing, response.securityQuestionIsMissing);
                        addMissingInformationService.setMissingInformation(response.passwordNeedsReset, response.emailIsMissing, response.securityQuestionIsMissing);
                        SessionService.create(response.acctId, response.acctActivity, null, missingInformationFlags);
                        $rootScope.environment = response.environment;
                        $rootScope.$broadcast(APP_LIFECYCLE_EVENTS.restoredUserState, response);
                    } else {
                        responseErrorService.displayErrorsFromResponse(response);
                    }
                }
            );

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
                } else {
                    return operatingSystem.MOBILE;
                }
            };

            var css;
            if (sniffrjs.os.name == "android") {
                css = '.hide-android{display:none;}';
            } else if (sniffrjs.os.name == "ios") {
                css = '.hide-ios{display:none;}';
            }

            var head = $window.document.head || $window.document.getElementsByTagName('head')[0];
            var style = $window.document.createElement('style');
            style.type = 'text/css';
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild($window.document.createTextNode(css));
            }
            head.appendChild(style);

            var os = getOS();
            
            //below triggers on start of new state transition..            
            let angularjsCssLoaded = false;
            var unregisterStateChangeStart = $transitions.onStart({}, function (transition) {
                templateCacheHelper.removeUncachedFromCache();
                experienceEditorHelper.onStateChangeStart();

                if (!angularjsCssLoaded){
                    const toState = transition.to();
                    
                    //...if it is tagged as an angularjs state...
                    if ('angularjs' in toState && toState['angularjs']) {
                                                
                        const $link = $window.document.createElement('link'); 
                        const $link2 = $window.document.createElement('link');
                        $link.setAttribute('rel', 'stylesheet');
                        $link2.setAttribute('rel', 'stylesheet');
                        
                        //..it will lazyly load the legacy CSS at that time, avoiding costly load time
                        //on init page load. Once loaded, it will not attempt to reload CSS again.
                        if ((os === operatingSystem.DESKTOP) || (sessionStorage.getItem('FOOTER_FORCE_DESKTOP_VIEW') === 'true')) {
                            //$link.attr('href', hctraGlobalFromIndexCshtml.bootDesktopcss); 
                            $link.setAttribute('href', hctraGlobalFromIndexCshtml.bootDesktopcss); 
                            $link2.setAttribute('href', hctraGlobalFromIndexCshtml.siteDesktopcss);
                        } else {                       
                            //$link.attr('href', hctraGlobalFromIndexCshtml.bootcss); 
                            $link.setAttribute('href', hctraGlobalFromIndexCshtml.bootcss); 
                            $link2.setAttribute('href', hctraGlobalFromIndexCshtml.sitecss);
                        }

                        const end = $window.document.querySelector('#coreCssLinkId');
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

                    const $link = $window.document.createElement('link');
                    const $link2 = $window.document.createElement('link');
                    $link.setAttribute('rel', 'stylesheet');
                    $link2.setAttribute('rel', 'stylesheet');                    
                    $link.setAttribute('href', hctraGlobalFromIndexCshtml.bootDesktopcss); 
                    $link2.setAttribute('href', hctraGlobalFromIndexCshtml.siteDesktopcss);
                   
                    const end = $window.document.querySelector('#coreCssLinkId');
                    end.insertAdjacentElement('beforebegin', $link2);
                    $link2.insertAdjacentElement('beforebegin', $link);

                    angularjsCssLoaded = true;
                } else {
                    $window.document.body.setAttribute('device-type', 'desktop');
                }
            } else {
                $window.document.body.setAttribute('device-type', 'mobile');               
            }

        }]);
})();