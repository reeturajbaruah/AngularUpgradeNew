module HCTRA.Service {

    export interface IAsyncActionsProvider {
        register(asyncActionProviderName: string);
    }

    //this provider allows other angularjs providers to register async actions
    //that Angular will wait to complete before completing bootstrapping.
    export class AsyncActionsProvider implements IAsyncActionsProvider {
              
        public $get: any[] = ['$q', ($q, ...promises: any[]) => $q.all(promises)];

        //register a provider; the provider must define it's $get method to return a promise        
        public register(asyncActionProviderName: string) {
            //adds to resolution array
            this.$get.splice(-1, 0, asyncActionProviderName);
        }
    }
}

(function () {
    angular.module('HCTRAModule').provider('asyncActions', HCTRA.Service.AsyncActionsProvider);
})();