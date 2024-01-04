module HCTRA.Controller {

    //defines controller for handling a prompt to continue seesion.
    export class StorefrontInactivityController {
        static $inject = ["$scope", "$uibModalInstance", "environmentConfig", "modalOptions", "$interval", "StorefrontService", "actions", "cmsTextInsertionService"];

        constructor(
            private $scope: angular.IScope | any,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private environmentConfig: HCTRA.Constant.IEnvironmentConfig,
            private modalOptions: Model.ModalTextOptions,
            private $interval: angular.IIntervalService,
            private storefrontService: Storefront.Service.IStorefrontService,
            private actions: { [key: string]: string },
            private cmsTextInsertionService: any
        ) {        
            //the initial amount of time before session resets
            $scope.timeLeftAfterWarningInMinutesStatic = (environmentConfig.storefrontConfigs.StorefrontInactivityReset - environmentConfig.storefrontConfigs.StorefrontInactivityWarning) / 60000 | 0;

            //the remaining time left until the session resets. this will update every second.
            $scope.timeLeftTillResetInSeconds = (environmentConfig.storefrontConfigs.StorefrontInactivityReset - environmentConfig.storefrontConfigs.StorefrontInactivityWarning) / 1000 | 0;

            //sets up interval to count down time left
            var intervalCancel = $interval(() => {
                $scope.timeLeftTillResetInSeconds--;
                if ($scope.timeLeftTillResetInSeconds <= 0) {
                    $interval.cancel(intervalCancel);
                    this.storefrontService.reset(Model.StorefrontLogOffType.Auto);
                }
            }, 1000);
            
            var insertionValues = {
                timeLeftAfterWarningInMinutesStatic: $scope.timeLeftAfterWarningInMinutesStatic
            }

            $scope.call = (action: string) => $uibModalInstance.close(action);
            $scope.actionText = (action: string) => actions[action];

            $scope.headerText = this.cmsTextInsertionService.insertValues(insertionValues, modalOptions.headerText);
            $scope.bodyText = modalOptions.bodyText;

            //clean up
            $scope.$on("$destroy", () => $interval.cancel(intervalCancel));
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontInactivityController", HCTRA.Controller.StorefrontInactivityController);
})();