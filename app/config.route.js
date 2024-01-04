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
                enabled: true,//!environments.isSitecore,
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