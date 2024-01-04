(function () {
    'use strict';
    angular.module('HCTRAModule').filter('trusted', ['$sce',
        function ($sce) {
            return function (html) {
                if (angular.isString(html)) {
                    if (html.startsWith("https"))
                        return $sce.trustAsResourceUrl(html);

                    return $sce.trustAsHtml(html);
                } else {
                    return html;
                }
            };
        }
    ]);
}());
