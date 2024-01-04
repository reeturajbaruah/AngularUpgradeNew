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