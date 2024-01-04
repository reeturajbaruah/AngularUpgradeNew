(function () {
    'use strict';

    angular.module('HCTRAModule').filter('cmsTextInsert', ['cmsTextInsertionService',
        function (cmsTextInsertionService) {
            return function (cmsString: string, insertionValues: {[key: string]: string}) {

                if (!cmsString) { return ''; }

                return cmsTextInsertionService.insertValues(insertionValues, cmsString);
            };
        }]);
}());