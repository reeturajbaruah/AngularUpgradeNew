module HCTRA.Decorator {

    export class GenericRepoVantivDecorator {

        static $inject = ["$delegate", "webStorage", "webStorageConst"];

        constructor(private $delegate: HCTRA.Service.IGenericRepo,
            private webStorage: HCTRA.Service.IWebStorageService,
            private webStorageConst: HCTRA.Constant.IWebStorageConst) {

            // VantivLog/LogVantivRequestData
            const LogVantivRequestFn: (data: HCTRA.Model.VantivRequestLog) => angular.IPromise<HCTRA.Model.IBaseResponse> = $delegate.dataFactory.LogVantivRequest;
            const newLogVantivRequestFn: (data: HCTRA.Model.VantivRequestLog) => angular.IPromise<HCTRA.Model.IBaseResponse> = (data) => {
                // Get violations data from webStorage and set in data
                data.violationsData = this.webStorage.getValue(this.webStorageConst.violationsLogData) as HCTRA.Model.CoreViolationsData;
                return LogVantivRequestFn.call($delegate, data);
            }
            $delegate.dataFactory.LogVantivRequest = newLogVantivRequestFn;


            // VantivLog/LogVantivResponseData
            const LogVantivResponseFn: (data: HCTRA.Model.VantivRequestLog) => angular.IPromise<HCTRA.Model.IBaseResponse> = $delegate.dataFactory.LogVantivResponse;
            const newLogVantivResponseFn: (data: HCTRA.Model.VantivResponseLog) => angular.IPromise<HCTRA.Model.IBaseResponse> = (data) => {
                // Get violations data from webStorage and set in data
                data.violationsData = this.webStorage.getValue(this.webStorageConst.violationsLogData) as HCTRA.Model.CoreViolationsData;
                return LogVantivResponseFn.call($delegate, data);
            }
            $delegate.dataFactory.LogVantivResponse = newLogVantivResponseFn;

            return ($delegate as any) as GenericRepoVantivDecorator;
        }
    }

}

(function () {
    "use strict";
    angular.module("HCTRAModule").decorator("genericRepo", HCTRA.Decorator.GenericRepoVantivDecorator);
}());