module HCTRA.Directive {

    //define the store front directive, its template and controller
    export class StorefrontUiDirective implements angular.IDirective {
        restrict = "AE";
        controller = "StorefrontController";
        templateUrl = "/app/directives/storefront/storefrontUiTemplate.html";
        //transclude = true;
        scope = false;
        priority = 400;
        
        static factory(): ng.IDirectiveFactory {
            const directive = () => new StorefrontUiDirective();
            directive.$inject = [];
            return directive;
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontUi", HCTRA.Directive.StorefrontUiDirective.factory());
})();
