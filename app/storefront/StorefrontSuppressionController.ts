module HCTRA.Controller {

    //defines suppression controller with fail safe reboot if
    //app enters a invalid state.
    export class StorefrontSuppressionController {
        static $inject = ["$scope", "StorefrontService", "$timeout"];

        constructor(
            private $scope: angular.IScope,
            private storefrontService: Storefront.Service.IStorefrontService,
            private $timeout: angular.ITimeoutService
        ) {
            //if this controller becomes active for more than 
            //15 seconds, something maybe wrong and force a hard
            //reset of application
            let performReset = true;
            const timeoutPromise = $timeout(15000);
            timeoutPromise.then(() => {
                if (performReset) {
                    storefrontService.hardReset();
                }
            });

            //however, if controller is being unloaded before the
            //timeout, don't perform hard reset
            $scope.$on('$destroy', () => {
                $timeout.cancel(timeoutPromise);
                performReset = false;
            });
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').controller("StorefrontSuppressionController", HCTRA.Controller.StorefrontSuppressionController);
})();
