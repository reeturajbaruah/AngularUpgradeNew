module HCTRA.Service {
    export interface IApiDateStringToJsObjectService {
        convertApiDateToJsObject(obj, propName, newPropName);
    }
}

module HCTRA.Service {
    export class ApiDateStringToJsObjectService implements IApiDateStringToJsObjectService {
        static $inject = ["$filter"];

        constructor(private $filter: angular.IFilterService | any) { }

        convertApiDateToJsObject = (records, propIn, propOut) => {

            angular.forEach(records, record => {
                if (angular.isString(record[propIn])) {
                    record[propOut] = this.$filter("dateWithTimeZone")(record[propIn], "dateTimeFull");
                }
            });

            return records;
        }
    }
}

(() => {
    "use strict";

    angular.module("HCTRAModule").service("apiDateStringToJsObjectService", HCTRA.Service.ApiDateStringToJsObjectService);
})();