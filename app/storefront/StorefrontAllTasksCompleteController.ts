module HCTRA.Controller {

    //defines the all tasks complete modal
    export class StorefrontAllTasksCompleteController {
        static $inject = [
            "$scope", "$uibModalInstance", "modalOptions", "StorefrontService", "StorefrontModalService", "actions"
        ];

        constructor(
            private $scope: angular.IScope | any,
            private $uibModalInstance: angular.ui.bootstrap.IModalInstanceService,
            private modalOptions: Model.ModalTextOptions,
            private storefrontService: Storefront.Service.IStorefrontService,
            private storefrontModalService: Service.IStorefrontModalService,
            private actions: {[key: string]: string}
        ) {
            $scope.header = modalOptions.headerText;
            $scope.body = modalOptions.bodyText;
            
            $scope.call = (action: string) => $uibModalInstance.close(action);
            $scope.actionText = (action: string) => actions[action];
            $scope.actions = actions;
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontAllTasksCompleteController", HCTRA.Controller.StorefrontAllTasksCompleteController);
})();