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