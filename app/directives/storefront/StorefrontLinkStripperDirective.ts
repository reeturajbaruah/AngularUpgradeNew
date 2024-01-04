module HCTRA.Directive {

    //define navigation for storefront on storefront specific templates that require a custom navigation button
    export class StorefrontLinkStripperDirective implements angular.IDirective {
        restrict = "A";
        transclude = false;

        link = (scope: angular.IScope, element) => {
            this.storefrontEventService.addMutationObserver(element[0]);
        };

        constructor(private storefrontEventService: Storefront.Service.IStorefrontEventService) { }

        static factory(): ng.IDirectiveFactory {
            const directive = (storefrontEventService) => new StorefrontLinkStripperDirective(storefrontEventService);
            directive.$inject = ["StorefrontEventService"];
            return directive;
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontLinkStripper", HCTRA.Directive.StorefrontLinkStripperDirective.factory());
})();
