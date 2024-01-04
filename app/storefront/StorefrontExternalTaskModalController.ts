module HCTRA.Controller {

    //defines a generic prompt
    export class StorefrontExternalTaskModalController {
        static $inject = ["$scope", "$uibModalInstance"];

        constructor(
            private $scope: angular.IScope | any,
            private $uibModalInstance: angular.ui.bootstrap.IModalInstanceService
        ) {
            $scope.exit = () => {
                $scope.show = false;
                $uibModalInstance.close();
            };

            $scope.show = true;
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontExternalTaskModalController", HCTRA.Controller.StorefrontExternalTaskModalController);
})();