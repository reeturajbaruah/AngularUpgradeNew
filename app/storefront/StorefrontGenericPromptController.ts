module HCTRA.Controller {
    
    //defines a generic prompt
    export class StorefrontGenericPromptController {
        static $inject = ["$scope", "$uibModalInstance", "modalOptions", "StorefrontService", "StorefrontModalService", "actions", "showModalClose", "showGoBack", "imageData"];

        constructor(
            private $scope: angular.IScope | any,
            private $uibModalInstance: angular.ui.bootstrap.IModalInstanceService,
            private modalOptions: Model.ModalTextOptions,
            private storefrontService: Storefront.Service.IStorefrontService,
            private storefrontModalService: Service.IStorefrontModalService,
            private actions: {[key:string]:string},
            private showModalClose: boolean = false,
            private showGoBack: string,
            private imageData?: Model.ISitecoreMediaItem
        ) {
            
            $scope.header = modalOptions.headerText;
            $scope.body = modalOptions.bodyText;
            $scope.image = imageData;            
            $scope.actions = actions;
            $scope.showModalClose = showModalClose;
            $scope.showGoBack = showGoBack;

            $scope.actionText = (action: string) => actions && actions[action];
            $scope.call = (action: string) => $uibModalInstance.close(action);
            $scope.dismiss = () => $uibModalInstance.dismiss();
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontGenericPromptController", HCTRA.Controller.StorefrontGenericPromptController);
})();