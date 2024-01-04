module HCTRA.Service {

    export function assignNullDataDefaults(response) {
        if (angular.isObject(response) && !response.data)
            response.data = {};

        if (angular.isObject(response.data)) {
            if (!response.data.errors)
                response.data.errors = [];
            if (!response.data.alerts)
                response.data.alerts = [];
        }
        return response;
    }
}

(() => {
    "use strict";

    angular.module("HCTRAModule").factory("assignNullDataDefaults", [() => HCTRA.Service.assignNullDataDefaults]);
})();