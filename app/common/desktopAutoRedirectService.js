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