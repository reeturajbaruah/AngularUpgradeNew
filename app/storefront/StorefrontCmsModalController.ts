module HCTRA.Controller {

    //defines a generic prompt
    export class StorefrontCmsModalController {
        static $inject = ["$scope", "$uibModalInstance", "controllerName", "template"];

        constructor(
            private $scope: angular.IScope | any,
            private $uibModalInstance: angular.ui.bootstrap.IModalInstanceService,
            private controllerName: string,
            private template: string
        ) {
            $scope.cmsController = controllerName;
            $scope.cmsTemplate = template;
            $scope.exit = () => $uibModalInstance.close();
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .controller("StorefrontCmsModalController", HCTRA.Controller.StorefrontCmsModalController)
        .directive("storefrontDynamicController", ['$compile', '$parse', ($compile, $parse) => {
            return {
                restrict: 'A',
                terminal: true,
                priority: 100000,
                link: (scope, elem) => {
                    var name = $parse(elem.attr('storefront-dynamic-controller'))(scope);
                    elem.removeAttr('storefront-dynamic-controller');
                    elem.attr('ng-controller', name);
                    $compile(elem)(scope);
                }
            };
        }]);
})();