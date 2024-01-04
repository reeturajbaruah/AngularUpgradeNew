module HCTRA.Directive {
    //define the store front modal close directive
    export class StorefrontModalGoBackDirective implements angular.IDirective {
        restrict = "A";
        templateUrl = "/app/directives/storefront/storefrontModalGoBackTemplate.html";
        scope = {
            storefrontModalGoBack: "="
        };

        link = (scope: angular.IScope | any) => {            
            scope.modalBackIcon = this.storefrontService.getBackArrowImg();
        };

        constructor(
            private storefrontService: Storefront.Service.IStorefrontService
        ) { }

        static factory(): ng.IDirectiveFactory {
            const directive = (storefrontService) => new StorefrontModalGoBackDirective(storefrontService);
            directive.$inject = ["StorefrontService"];
            return directive;
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontModalGoBack", HCTRA.Directive.StorefrontModalGoBackDirective.factory());
})();
