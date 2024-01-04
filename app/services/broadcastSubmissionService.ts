module HCTRA.Service {
    export interface IBroadcastSubmissionService {
        broadcast(submissionIdentifier: string);
    }
}

module HCTRA.Service {
    export class BroadcastSubmissionService implements IBroadcastSubmissionService {

        static $inject = ["$q", "$rootScope"];
        
        constructor(
            private $q: ng.IQService,
            private $rootScope: angular.IRootScopeService) {
        }
        

        broadcast = (submissionIdentifier: string) => {
            const deferred = this.$q.defer();

            this.$rootScope.$broadcast(submissionIdentifier, deferred);

            return deferred.promise;
        }
    }
}
(() => {
    'use strict';

    angular.module('HCTRAModule').service('broadcastSubmissionService', HCTRA.Service.BroadcastSubmissionService);
})();