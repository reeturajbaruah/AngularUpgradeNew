(function () {

    'use strict';

    angular.module('HCTRAModule').filter('insertion', ['cmsTextInsertionService', 'environments', function (cmsTextInsertionService, environments) {

        return function (input: string, insertionValues: object, optional?: boolean) {

            if (!environments.isSitecore) {
                if (optional) {
                    return input ? cmsTextInsertionService.checkOptional(insertionValues, input) : '';
                }
                else {
                    return input ? cmsTextInsertionService.insertValues(insertionValues, input) : '';
                }
            }
            else {
                return input || ''; // do not go through insertion service if in Sitecore
            }
        };
    }]);
}());