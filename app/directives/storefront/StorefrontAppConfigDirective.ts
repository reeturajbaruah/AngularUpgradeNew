module HCTRA.Directive {

    //define the store front directive, its template and controller
    export class StorefrontAppConfigDirective implements angular.IDirective {
        restrict = "A";

        link = () => {
            if (this.storefrontService.isEnabled()) {
                angular.element("html")
                    .addClass("storefrontView")
                    .removeAttr("storefront-app-config");

                var viewport = angular.element("html > head > meta[name='viewport']");
                viewport.attr("content", "");
            }
        };

        static factory(): ng.IDirectiveFactory {
            const directive = (storefrontService) => new StorefrontAppConfigDirective(storefrontService);
            directive.$inject = ["StorefrontService"];
            return directive;
        }

        constructor(private storefrontService: Storefront.Service.IStorefrontService){}
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontAppConfig", HCTRA.Directive.StorefrontAppConfigDirective.factory());
})();
