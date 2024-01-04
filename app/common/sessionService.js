(function () {
    'use strict';

    // angular.module('HCTRAModule').service('Session', ['USER_ROLES', 'webStorage', 'stateNames', function (USER_ROLES, webStorage, stateNames) {

    //     this.default = function () {
    //         this.acctId = 0;
    //         this.userRole = USER_ROLES.notAuthenticated;
    //     };

    //     this.create = function (acctId, acctActivity, currentStep, missingInformation, accountStaus = null) {
    //         this.acctId = acctId;

    //         if (sessionStorage) {
    //             sessionStorage.setItem("acctActivity", acctActivity);
    //             this.userRole = mapAcctActivityToUserRole(sessionStorage.getItem("acctActivity"), accountStaus);
    //         }

    //         if (this.userRole == USER_ROLES.incomplete) {
    //             if (sessionStorage && currentStep != null) {
    //                 sessionStorage.setItem("currentStep", currentStep);
    //                 this.currentStep = currentStep;
    //             }
    //         }

    //         if (sessionStorage && missingInformation && acctActivity != null && this.userRole !== USER_ROLES.notAuthenticated) {
    //             this.userRole = USER_ROLES.missingRequiredInformation;
    //         }
    //     };

    //     this.setAcctActivity = function (acctActivity) {
    //         if (sessionStorage && acctActivity != null) {
    //             sessionStorage.setItem("acctActivity", acctActivity);
    //         }

    //         this.userRole = mapAcctActivityToUserRole(sessionStorage.getItem("acctActivity"));
    //     };

    //     this.setCurrentStep = function (currentStep) {
    //         if (sessionStorage && currentStep != null) {
    //             sessionStorage.setItem("currentStep", currentStep);
    //         }

    //         this.currentStep = sessionStorage.getItem("currentStep");
    //     };

    //     this.destroy = function () {
    //         this.acctId = 0;
    //         webStorage.removeEntry("acctActivity");
    //         webStorage.removeEntry("currentStep");
    //         this.userRole = USER_ROLES.notAuthenticated;
    //     };

    //     this.getAcctActivity = function () {
    //         var val = null;
    //         if (sessionStorage) {
    //             val = sessionStorage.getItem("acctActivity");
    //         }
    //         return val;
    //     };

    //     this.getCurrentStep = function () {
    //         var val = null;
    //         if (sessionStorage) {
    //             val = sessionStorage.getItem("currentStep");
    //         }
    //         return val;
    //     };

    //     this.removeCurrentStep = function () {
    //         webStorage.removeEntry("currentStep");
    //     };

    //     this.stepToStateName = function (currentStep) { // Account Creation wizard step to its state name
    //         switch (currentStep) {
    //             case 1:
    //                 return stateNames.createAccount;
    //             case 3:
    //                 return stateNames.vehicleInformation;
    //             case 4:
    //                 return stateNames.choosePaymentMethod;
    //             case 5:
    //                 return stateNames.createAccountSummary;
    //             default:
    //                 return stateNames.createAccount;
    //         }
    //     };

    //     var mapAcctActivityToUserRole = function (acctActivity, accountStaus = null) {

    //         switch (acctActivity) {
    //             case "A":
    //                 if (accountStaus === "PF")
    //                     return USER_ROLES.pendingFunds;
    //                 return USER_ROLES.active;
    //             case "P":
    //                 return USER_ROLES.incomplete;
    //             case "I":
    //                 return USER_ROLES.pendingClosure;
    //             case "S":
    //                 return USER_ROLES.suspended;
    //             default:
    //                 return USER_ROLES.notAuthenticated;
    //         }
    //     };
    // }]);
}());