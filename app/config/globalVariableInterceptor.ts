module HCTRA.Service {
    export class GlobalVariableInterceptor {
        static $inject = ["CurrentUser", "$rootScope", "webStorage", "webStorageConst", "serverConstants"];

        constructor(
            private CurrentUser: HCTRA.Service.ICurrentUser,
            private $rootScope: HCTRA.Service.IHctraRootScopeService,
            private webStorage: HCTRA.Service.IWebStorageService,
            private webStorageConst: HCTRA.Constant.IWebStorageConst,
            private serverConstants: HCTRA.Constant.ServerConstants
        ) { }
        public response = (response: ng.IHttpPromiseCallbackArg<any>) => {
            if (response.headers(this.serverConstants.latestWebUiVersionHeaderKey)) {
                this.$rootScope.latestWebUiVersion = response.headers(this.serverConstants.latestWebUiVersionHeaderKey);
            }

            //This updates current balance on the menu
            if (angular.isObject(response.data) && response.data.currentBalanceObj && response.data.currentBalanceObj.currentBalance != null) {
                const currentBalance = response.data.currentBalanceObj.currentBalance;
                if (currentBalance) {
                    this.webStorage.setKeyValue(this.webStorageConst.currentBalance, currentBalance);
                    const tempCurrentUser = this.CurrentUser.getCurrentUser();
                    if (angular.isObject(tempCurrentUser) && angular.isObject(tempCurrentUser.currentBalanceObj)
                        && tempCurrentUser.currentBalanceObj.currentBalance !== response.data.currentBalanceObj.currentBalance) {
                        tempCurrentUser.currentBalanceObj.currentBalance = response.data.currentBalanceObj.currentBalance;
                        this.CurrentUser.updateCurrentUser(tempCurrentUser);
                    }
                    this.webStorage.setKeyValue(this.webStorageConst.currentBalance, currentBalance);
                } else {
                    this.webStorage.removeEntry(this.webStorageConst.currentBalance);
                }
                this.$rootScope.currentBalance = currentBalance;
            }

            //This updates payment plan current balance on the menu
            if (angular.isObject(response.data) && response.data.currentPaymentPlanBalanceObj) {
                const currentPaymentPlanBalance = response.data.currentPaymentPlanBalanceObj.currentBalance;
                if (currentPaymentPlanBalance) {
                    this.webStorage.setKeyValue(this.webStorageConst.currentPaymentPlanBalance, currentPaymentPlanBalance);
                } else {
                    this.webStorage.removeEntry(this.webStorageConst.currentPaymentPlanBalance);
                }

                this.CurrentUser.updateCurrentUser(angular.extend({}, this.CurrentUser.getCurrentUser(), { paymentPlanBalance: currentPaymentPlanBalance }));
            }
            return response;
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule')
        .service("GlobalVariableInterceptor", HCTRA.Service.GlobalVariableInterceptor);
})();
