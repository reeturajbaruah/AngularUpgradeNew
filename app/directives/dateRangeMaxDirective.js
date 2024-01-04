(function () {
    'use strict';


    angular.module('HCTRAModule').directive("hctraDateRangeMax", ['environmentConfig', 'momentService',
        function (environmentConfig, momentService) {
            return {
                require: "ngModel",
                link: function (scope, element, attributes, ngModel) {
                    var dateToModelName = attributes.hctraDateRangeMax;

                    scope.$watch(dateToModelName, function () {
                        ngModel.$validate();
                    });

                    ngModel.$validators.hctraDateRangeMax = function (modelValue) {
                        var dateToFromModel = scope.$eval(dateToModelName);
                        //return valid for invalid dates to avoid calling toISOString() on a string.
                        //Valid Date validator will catch it later on so it's ok to set to true.
                        if (!dateToFromModel || !angular.isDate(dateToFromModel)) return true;
                        var dateToISOString = dateToFromModel.toISOString().replace(/[\\"]/g, "");
                        var dateFrom = momentService.moment(modelValue);
                        var dateTo = momentService.moment(dateToISOString);
                        var diffDays = dateTo.diff(dateFrom, 'days');
                        return diffDays <= environmentConfig.accountActivityMaxDaysInSearch;
                    };
                }
            };
        }]);

})();