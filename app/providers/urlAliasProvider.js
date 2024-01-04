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
                { url: '/AccountSummary', redirectTo: '/AccountOverview'},
                { url: '/AccountSummary/', redirectTo: '/AccountOverview'}
            ];
        };

        return {
            $get: aliases
        };
    });
})();