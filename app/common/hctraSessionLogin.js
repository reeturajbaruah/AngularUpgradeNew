(function () {
    'use strict';

    angular.module('HCTRAModule').service('hctraSessionLogin', ['SessionService', function (SessionService) {
        this.login = function (acctId, acctActivity, currentStep) {

            SessionService.create(acctId, acctActivity, currentStep, false);
        };
    }]);
}());