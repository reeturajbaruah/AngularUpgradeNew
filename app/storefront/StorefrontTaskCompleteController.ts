module HCTRA.Controller {

    //defines the task complete modal
    export class StorefrontTaskCompleteController {
        static $inject = [
            "$scope", "$uibModalInstance", "modalOptions", "StorefrontService", "StorefrontModalService", "actions", "cmsTextInsertionService"
        ];

        constructor(
            private $scope: angular.IScope | any,
            private $uibModalInstance: angular.ui.bootstrap.IModalInstanceService,
            private modalOptions: Model.ModalTextOptions,
            private storefrontService: Storefront.Service.IStorefrontService,
            private storefrontModalService: Service.IStorefrontModalService,
            private actions: { [key: string]: string },
            private cmsTextInsertionService: any
        ) {
            $scope.completeTaskCount = storefrontService.workItems.filter((x) => x.isSelected && x.isCompleted && !x.isShadowItem).length;
            $scope.selectedTaskCount = storefrontService.workItems.filter((x) => x.isSelected && !x.isShadowItem).length;
            var insertionValues = {
                completeTaskCount: $scope.completeTaskCount,
                selectedTaskCount: $scope.selectedTaskCount
            }

            $scope.body = this.cmsTextInsertionService.insertValues(insertionValues, modalOptions.bodyText);
            $scope.header = modalOptions.headerText;

            $scope.actionText = (action: string) => actions && actions[action]; 
            $scope.call = (action: string) => $uibModalInstance.close(action); 
            $scope.actions = actions;

            $scope.addWorkItem = (workItemIdAsString: string) => {
                var workItemId: number = Model.SelectedOptions[workItemIdAsString];
                var workItem = storefrontService.insertWorkItem(workItemId);
                storefrontService
                    .skip(workItemId)
                    .then(() => $uibModalInstance.close(workItem));
            }
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontTaskCompleteController", HCTRA.Controller.StorefrontTaskCompleteController);
})();