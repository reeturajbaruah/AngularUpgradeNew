module HCTRA.Directive {
    //define the store front modal close directive
    export class StorefrontModalCloseDirective implements angular.IDirective {
        restrict = "A";
        templateUrl = "/app/directives/storefront/storefrontModalCloseTemplate.html";
        scope = {};

        link = (scope: angular.IScope | any) => {            
            scope.modalCloseIcon = this.storefrontService.getCloseModalImg();
        };

        constructor(
            private storefrontService: Storefront.Service.IStorefrontService
        ) { }

        static factory(): ng.IDirectiveFactory {
            const directive = (storefrontService) => new StorefrontModalCloseDirective(storefrontService);
            directive.$inject = ["StorefrontService"];
            return directive;
        }        
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontModalClose", HCTRA.Directive.StorefrontModalCloseDirective.factory());
})();
