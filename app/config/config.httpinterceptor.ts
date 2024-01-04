(function () {
    "use strict";

    angular.module("HCTRAModule").config(["$httpProvider",
        function ($httpProvider: angular.IHttpProvider) {

            // Set HTTP interceptors
            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("ServerErrorInterceptor");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("AuthInterceptor");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("HttpMessageInterceptor");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("GlobalVariableInterceptor");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("HttpResponseErrorLogInterceptor");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("HttpResponseErrorNullChecker");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("HtmlTemplateRequestIntercepter");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("SitecoreViewRequestIntercepter");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("CurrentUserCheckIntercepter");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("StorefrontHttpLoggingInterceptor");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("FingerPrintIdInterceptor");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("KioskInterceptor");
                }
            ]);

            $httpProvider.interceptors.push(["$injector",
                function ($injector: angular.auto.IInjectorService) {
                    return $injector.get("CaptchaInterceptor");
                }
            ]);

        }
    ]);

    angular.module("HCTRAModule").factory('FingerPrintIdInterceptor',
        ['environmentConfig', 'fingerPrintIdService', function (environmentConfig, fingerPrintIdService) {
            return {
                request: function ($config) {

                    //only add the fingerprintid to request to this server and
                    //not external servers

                    //get request URL
                    const url = $config.url;
                    if (!url) {
                        return $config;
                    }

                    //get server host
                    const host = window.location.host.toLowerCase();
                    //get request host - if url is relative, it will use base url host.
                    //  if url is absolute, the url's host will override the base url
                    const testHost = (new URL(url, window.location.origin)).host.toLowerCase();

                    //if they mismatch, this is an external request
                    if (host !== testHost) {
                        return $config;
                    }
                   
                    //since they match, this is an internal request, this is ok to add
                    if (environmentConfig.useFingerPrintId) {
                        const fingerPrintId = fingerPrintIdService.getFingerprintId();
                        $config.headers['FingerPrintId'] = fingerPrintId;
                    }
                    return $config;
                }
            }
        }
    ]);

    angular.module("HCTRAModule").factory('KioskInterceptor',
        ['$q', 'StorefrontUtilityService', function ($q, StorefrontUtilityService: HCTRA.Storefront.Service.IStorefrontUtilityService) {
            return {
                request: function ($config) {

                    const url = $config.url;
                    if (!url) {
                        return $config;
                    }

                    const storefrontWebStorage = StorefrontUtilityService.webStoreData;
                    const isKiosk = (StorefrontUtilityService.isRunningAsKiosk && storefrontWebStorage && storefrontWebStorage.sessionId);

                    if (isKiosk) {
                        $config.headers["hctra-kiosk-token"] = storefrontWebStorage.kioskToken;
                    }

                    return $config;
                }
            }
        }
    ]);

    angular.module("HCTRAModule").factory('CaptchaInterceptor',
        ['$q', 'environmentConfig', 'captchaService', function ($q, environmentConfig, captchaService) {
            return {
                request: function ($config) {

                    const url = $config.url;

                    if (!url) {
                        return $config;
                    }

                    const host = window.location.host.toLowerCase();
                    const testUrl = new URL(url, window.location.origin);
                    const testHost = (testUrl).host.toLowerCase();

                    if (host !== testHost) {
                        return $config;
                    }

                    const path = testUrl.pathname;

                    if (environmentConfig.reCaptchaConfig.enabled) {

                        return captchaService
                                .assess(path)
                                .then(assessmentRequest => {
                                    const configured = assessmentRequest.configured;
                                    const token = assessmentRequest.token;
                                    const abort = assessmentRequest.abort;

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
            }
        }
    ]);

    angular.module("HCTRAModule").factory("CurrentUserCheckIntercepter", ["$q", "CurrentUser",
        function ($q: ng.IQService, CurrentUser: HCTRA.Service.ICurrentUser) {
            return {
                request: function (request) {

                    if (!CurrentUser.currentUserIsInSyncAcrossTabs()) {

                        location.reload();
                        return $q.reject();
                    }

                    return request;
                }
            } as angular.IHttpInterceptor;
        }
    ]);

    angular.module("HCTRAModule").factory("SitecoreViewRequestIntercepter", ['environmentConfig', 'sitecoreTemplateMap',
        function (environmentConfig, sitecoreTemplateMap) {
            return {
                request: function (request) {

                    const interceptMatch = request.url.match(/SitecoreViewRequestInterceptor_(.*)/);

                    if (interceptMatch !== null) {

                        const htmlPageKey = interceptMatch[1];
                        const urlContainer = sitecoreTemplateMap[htmlPageKey];

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
            } as angular.IHttpInterceptor;
        }
    ]);


    angular.module("HCTRAModule").factory("HtmlTemplateRequestIntercepter", ["serverConstants",
        function (serverConstants: HCTRA.Constant.ServerConstants) {
            return {
                request: function (request) {
                    if (request.method === "GET"                      // HTML will only be a get
                        && (request.url.indexOf(".htm") !== -1
                            || request.url.indexOf(".cshtml") !== -1) // only care about HTML requests (not API)
                        && request.url.indexOf("/app") !== -1         // only care about custom HTML created by us (problems occur if we do so for 3rd party HTML)
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
            } as angular.IHttpInterceptor;
        }
    ]);


    angular.module("HCTRAModule").factory("ServerErrorInterceptor", ["$q", "serverErrorService", "toggleButtonsService",
        function ($q: angular.IQService, serverErrorService, toggleButtonsService: HCTRA.Service.IToggleButtonsService) {
            return {
                responseError: function (response) {
                    toggleButtonsService.enableButtonsGlobal();
                    serverErrorService.handleServerError();
                    return $q.reject(response);
                }
            } as angular.IHttpInterceptor;
        }
    ]);


    angular.module("HCTRAModule")
        .factory("AuthInterceptor",
            ["$state", "loginStates", "SessionService", "AUTH_EVENTS", "$rootScope", "$q", "StorefrontUtilityService", "authChannel", "CurrentUser",
                ($state: angular.ui.IStateService, loginStates, SessionService, AUTH_EVENTS, $rootScope: angular.IRootScopeService, $q: angular.IQService, StorefrontUtilityService: HCTRA.Storefront.Service.IStorefrontUtilityService, authChannel, CurrentUser) => {
            return {
                response: function (response: ng.IHttpPromiseCallbackArg<any>) {
                    if (response.data) {
                        if (response.data.sessionTimedOut === true || response.data.securityIssue === true) {
                            if (response.data.sessionTimedOut === true)
                                $rootScope.$broadcast(AUTH_EVENTS.sessionTimedOut);
                            if (response.data.securityIssue === true)
                                $rootScope.$broadcast(AUTH_EVENTS.securityIssue);

                            if (StorefrontUtilityService.isRunningAsKiosk) {
                                return StorefrontUtilityService.lockStateChanging(() => {
                                    SessionService.destroy();
                                    return $q.resolve(response);
                                });
                            } else {
                                SessionService.destroy();
                                CurrentUser.destroyCurrentUser();
                                authChannel.logOut();
                                return $state
                                    .go(loginStates.Login)
                                    .catch(() => response)
                                    .then(() => response);
                            }
                        } else {
                            return $q.resolve(response);
                        }
                    } else {
                        return $q.resolve(response);
                    }
                }
            } as angular.IHttpInterceptor;
        }
    ]);


    angular.module("HCTRAModule").factory("HttpMessageInterceptor", ["$state", "loginStates", "SessionService", "AUTH_EVENTS", "$rootScope", "$q",
        function ($state: angular.ui.IStateService, loginStates, SessionService, AUTH_EVENTS, $rootScope: angular.IRootScopeService, $q: angular.IQService) {
            return {
                responseError: function (response) {
                    switch (response.status) {
                        case 401:
                            SessionService.destroy();
                            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                            return $state
                                .go(loginStates.Login)
                                .catch(() => $q.reject(response))
                                .then(() => $q.reject(response));
                            
                        case 403:
                            SessionService.destroy();
                            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                            return $state
                                .go(loginStates.Login)
                                .catch(() => $q.reject(response))
                                .then(() => $q.reject(response));
                        default:
                            return response;
                    }
                }
            } as angular.IHttpInterceptor;
        }
    ]);


    angular.module("HCTRAModule").factory("StorefrontHttpLoggingInterceptor", ["webStorage", "storefrontWhitelist", "StorefrontUtilityService",
        (webStorage: HCTRA.Service.IWebStorageService, storefrontWhitelist, StorefrontUtilityService: HCTRA.Storefront.Service.IStorefrontUtilityService) => ({
            response: function (response: ng.IHttpPromiseCallbackArg<any>) {
                 
                const storefrontWebStorage = StorefrontUtilityService.webStoreData;
                if (!StorefrontUtilityService.isRunningAsKiosk || !storefrontWebStorage || !storefrontWebStorage.sessionId) {
                    return response;
                }

                const path = webStorage.location.path();
                const url = response.config.url;

                if (!(path === "/storefront" || path === "/Storefront/Select") && (whitelistItemSearch(url, storefrontWhitelist.whitelistUrls))) {
                    let violationsObj = new HCTRA.Model.CoreViolationsData();
                    const pushSessionRequest = new HCTRA.Model.PushStorefrontRequest();

                    pushSessionRequest.uRL = url;
                    pushSessionRequest.storefrontSessionID = StorefrontUtilityService.webStoreData.sessionId;
                    pushSessionRequest.alert = toArray(response.data.alerts);
                    pushSessionRequest.error = toArray(response.data.errors);
                    pushSessionRequest.angularState = response.config.params.angularState;

                    const dataObj = response.config.data || false;
                    if (dataObj) {
                        if (angular.isDefined(dataObj["violationsData"])) {
                            violationsObj = dataObj["violationsData"] as HCTRA.Model.CoreViolationsData;
                        }
                        else if (angular.isDefined(angular.fromJson(dataObj)["violationsData"])) {
                            violationsObj = (angular.fromJson(dataObj)["violationsData"]) as HCTRA.Model.CoreViolationsData;
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
                        const violationsLogData = (angular.fromJson(sessionStorage.violationsLogData)) as HCTRA.Model.CoreViolationsData;
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
        }) as angular.IHttpInterceptor
    ]);

    angular.module("HCTRAModule").factory("HttpResponseErrorNullChecker", ["assignNullDataDefaults",
        function (assignNullDataDefaults) {
            return {
                response: assignNullDataDefaults
            } as angular.IHttpInterceptor;
        }
    ]);
    

    function whitelistItemSearch(path, whitelist) {
        for (const item of whitelist) {
            if (path.indexOf(item) >= 0 || item.indexOf(path) >= 0)
                return true;
        }
        return false;
    }

    function toArray(data) {
        return data && data.length && data.length > 0 ? angular.toJson(data) : null;
    }
}());