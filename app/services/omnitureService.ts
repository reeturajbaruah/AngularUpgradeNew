module HCTRA.Service {
    export interface IOmnitureService {
        sendTag(toState: angular.ui.IState, suffix: string): void;
    }
}

module HCTRA.Service {

    export class OmnitureService implements IOmnitureService {
        static $inject = ['$analytics', '$location'];

        constructor(public $analytics: any, public $location: ng.ILocationService) {
        }

        sendTag = (toState: angular.ui.IState, suffix: string): void => {
            let path = this.$location.absUrl();
            if (path != "/") { // $routeChangeSuccess calls on url "/" at login
                let trackTag = toState.name + "_" + path;
                if (suffix)
                    trackTag += "[" + suffix + "]"
                this.$analytics.pageTrack(trackTag);
            }
        }

    }
}

(function () {

    'use strict';

    angular.module('HCTRAModule').service('omnitureService', HCTRA.Service.OmnitureService)

} ());