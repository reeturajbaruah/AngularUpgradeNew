module HCTRA.Directive {

    //define directive to hide transculded content if storefront is enabled
    export class StorefrontHideIfEnabledDirective implements angular.IDirective {
        restrict = "A";
        scope = {
            storefrontHideIfEnabled : '='
        };
        transclude = true;
        template = "<div ng-transclude></div>";

        link = (scope: angular.IScope | any, element) => {            
            const disableForAll = angular.isDefined(scope.storefrontHideIfEnabled) && scope.storefrontHideIfEnabled;
            if (this.storefrontService.isEnabled() && (!this.storefrontService.fullSiteMode || disableForAll)) {
                angular.element(element).remove();
            }
        };

        constructor(
            private storefrontService: Storefront.Service.IStorefrontService
        ) { }

        static factory(): ng.IDirectiveFactory {
            const directive = (storefrontService) => new StorefrontHideIfEnabledDirective(storefrontService);
            directive.$inject = ["StorefrontService"];
            return directive;
        }
    }

    //define directive to hide transculded content if storefront is enabled
    export class StorefrontShowIfEnabledDirective implements angular.IDirective {
        restrict = "A";
        scope = {
            storefrontShowIfEnabled: '='
        };
        transclude = true;
        template = "<div ng-transclude></div>";

        link = (scope: angular.IScope | any, element) => {            
            const enableForAll = angular.isDefined(scope.storefrontShowIfEnabled) && scope.storefrontShowIfEnabled;
            if (!this.storefrontService.isEnabled() || (this.storefrontService.fullSiteMode && !enableForAll)) {
                angular.element(element).remove();
            }
        };

        constructor(
            private storefrontService: Storefront.Service.IStorefrontService
        ) { }

        static factory(): ng.IDirectiveFactory {
            const directive = (storefrontService) => new StorefrontShowIfEnabledDirective(storefrontService);
            directive.$inject = ["StorefrontService"];
            return directive;
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .directive("storefrontHideIfEnabled", HCTRA.Directive.StorefrontHideIfEnabledDirective.factory())
        .directive("storefrontShowIfEnabled", HCTRA.Directive.StorefrontShowIfEnabledDirective.factory());
})();
