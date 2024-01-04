module HCTRA.Controller {

    //defines a replacement controller to use for all default modals within store front
    export class StorefrontModalReplacementController {
        static $inject = ["$scope", "$uibModalInstance", "modalOptions"];

        constructor(
            private $scope: angular.IScope | any,
            private $uibModalInstance: angular.ui.bootstrap.IModalInstanceService,
            private modalOptions: Model.ModalTextOptions
        ) {
            $scope.header = modalOptions.headerText;
            $scope.closeButtonText = modalOptions.closeButtonText;
            $scope.actionButtonText = modalOptions.actionButtonText;
            $scope.body = modalOptions.bodyText;
            $scope.subText = modalOptions.subText;

            $scope.action = () => {
                $uibModalInstance.close();
            };
            $scope.dismiss = () => {
                $uibModalInstance.dismiss('cancel');
            };
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontModalReplacementController", HCTRA.Controller.StorefrontModalReplacementController);
})();