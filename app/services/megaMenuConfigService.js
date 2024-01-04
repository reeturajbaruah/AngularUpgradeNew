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
                if (!megaMenuRouteCache) megaMenuRouteCache = [];
                return megaMenuRouteCache;
            }
        };
    });
}());