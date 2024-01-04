(function () {
    'use strict';

    beforeEach(angular.mock.module('$$angularJSTestingModule'));
    
    //includes state provider
    beforeEach(angular.mock.module('ui.router'));
    

    beforeEach(angular.mock.module(function ($provide) {
        // Needed injected services because of index.cshtml
        $provide.constant('environmentConfig', hctraMocks.environmentConfig());
        
        $provide.value('loggingService', hctraMocks.loggingService());
        
        $provide.value('errorInterceptorService', hctraMocks.errorInterceptorService());
        $provide.value('perfToggle', hctraMocks.perfToggle());
        $provide.value('serverConstants', hctraMocks.serverConstants());
                
        $provide.value('sitecoreNameGuids', {});
        $provide.value('sitecoreApiParams', {});

        //use this if you need to test something 'thenable' but doesn't need to worry about digest cycles.
        $provide.factory("replacementQService", ["$window", function ($window) {
            var nativePromise = $window["Promise"] || Promise;

            var qService = function (f) { return new nativePromise(f); };
            qService.resolve = function(v) {return nativePromise.resolve(v);};
            qService.reject = function(v) {return nativePromise.reject(v);};
            qService.when = function(v) {return nativePromise.resolve(v);};
            qService.all = function(v) {return nativePromise.all(v);};
            qService.defer = function() {
                var defer = {
                    reject: null,
                    resolve: null,
                    promise: null
                };

                defer.promise = new nativePromise(function(a, b) {
                    defer.reject = b;
                    defer.resolve = a;
                });

                return defer;
            };

            return qService;
        }]);
    }));

}());

(function (global) {
    'use strict';

    global.parent.hctraGlobalFromIndexCshtml = {
        omnitureEnv: '@uiConfig.OmnitureEnvironment'
    };

})(window);