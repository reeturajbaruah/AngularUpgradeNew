module HCTRA.Service {
    export interface IManageBillingInformationResolver {
        resolveManagePayment();
        resolveUpdateBillingInformation();
    }
}

(() => {
    "use strict";

    const manageBillingInformationResolver = (
        environmentConfig: HCTRA.Constant.IEnvironmentConfig,
        $q: angular.IQService,
        $state: angular.ui.IStateService,
        stateNames: HCTRA.Constant.IStateNames,
        $location: angular.ILocationService,
        profileStates): HCTRA.Service.IManageBillingInformationResolver => {

        const resolve = (alternateStateName, valid) => {

            const replaceLocation = $state.current.url !== $location.url();

            return valid
                ? $q.resolve()
                : $q.reject().catch(() =>
                    $state.go(
                        alternateStateName,
                        null, 
                        replaceLocation
                            ? { location: 'replace' }
                            : {}));
        }

        return {
            resolveManagePayment: () => {

                return resolve(profileStates.UpdateBillingInformation, !environmentConfig.billingInformation.UseUpdatedPage);
            },
            resolveUpdateBillingInformation: () => {

                return resolve(stateNames.managePayment, environmentConfig.billingInformation.UseUpdatedPage);
            }
        };
    }

    angular.module("HCTRAModule").factory("manageBillingInformationResolver", [
        "environmentConfig",
        "$q",
        "$state",
        "stateNames",
        "$location",
        "profileStates",
        manageBillingInformationResolver
    ])
})();