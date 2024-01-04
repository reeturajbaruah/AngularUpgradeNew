(function () {

    'use strict';

    angular.module('HCTRAModule').factory('serverErrorService', ['errorDisplayService', 'siteVerbiage',
        function (errorDisplayService, siteVerbiage) {
            return {
                handleServerError: function () {
                    var level = 'error';
                    var msgArr = [siteVerbiage.genericErrorMsg];
                    errorDisplayService.displayToasts(msgArr, level);
                }
            };
        }]);
}());