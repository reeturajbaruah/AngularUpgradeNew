module HCTRA.Service {
    "use strict";

    export interface IMomentService {
        moment: moment.MomentStatic;
    }

    export class MomentService implements IMomentService {
        public moment: moment.MomentStatic;

        static $inject = ["momentjs"];

        constructor(private momentjs: moment.MomentStatic) {
            this.moment = momentjs;
        }

    }
}

(function (): void {
    "use strict";
    angular.module("HCTRAModule").service("momentService", HCTRA.Service.MomentService);
} ());