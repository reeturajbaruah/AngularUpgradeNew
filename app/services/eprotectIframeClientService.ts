declare var EprotectIframeClient: any;

module HCTRA.Service {
    export interface IEprotectIframeClientService {
        EprotectIframeClient;
    }
}

module HCTRA.Service {
    export class EprotectIframeClientService implements IEprotectIframeClientService {

        readonly EprotectIframeClient;

        static $inject = [];

        constructor() {

            /*eslint-disable */
            this.EprotectIframeClient = EprotectIframeClient;
            /*eslint-enable */
        }
    }
}

(() => {
    'use strict';
    angular.module('HCTRAModule').service('eprotectIframeClientService', HCTRA.Service.EprotectIframeClientService);
})();