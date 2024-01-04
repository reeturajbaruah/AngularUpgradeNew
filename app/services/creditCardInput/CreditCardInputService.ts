module HCTRA.Service {
   
    export interface ICreditCardInputService {
        setup($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any>;
        update($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any>;
        submit($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any>;
    }

    export interface ICreditCardInputStrategy {
        canUse($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any>;
        setup($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any>;
        update($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any>;
        submit($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any>;
    }
    
    export class CreditCardInputService implements ICreditCardInputService {

        static $inject = ["$q", "vantivIFrameStrategy", "litelStrategy", "triPosStrategy"];

        constructor(
            private $q: ng.IQService,
            private vantivIFrameStrategy: ICreditCardInputStrategy,
            private litelStrategy: ICreditCardInputStrategy,
            private triPosStrategy: ICreditCardInputStrategy
        ) {
            //don't ever ever change this. order is super important!!!
            this.chainOfResponsibility = [triPosStrategy, vantivIFrameStrategy, litelStrategy];
        }

        chainOfResponsibility: ICreditCardInputStrategy[];
        seletedInputStrategy: ICreditCardInputStrategy;

        getStrategy = ($scope: Model.ICreditCardEntryDirectiveScope, strategies: ICreditCardInputStrategy[]): ng.IPromise<ICreditCardInputStrategy> => {
            return this.$q((resolve, reject) => {
                const strat = strategies[0];

                if (strat) {
                    strat
                        .canUse($scope)
                        .then(() => strat)
                        .catch(() => this.getStrategy($scope, strategies.slice(1)))
                        .then(resolve, reject);
                } else {
                    reject();
                }
            });
        };

        setup($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any> {
            return this.getStrategy($scope, this.chainOfResponsibility)
                .then(strategy => (this.seletedInputStrategy = strategy).setup($scope))
                .then(() => $scope.autoUpdate && this.seletedInputStrategy.update($scope));
        }

        update($scope: Model.ICreditCardEntryDirectiveScope): angular.IPromise<any> {
            return this.seletedInputStrategy ? this.seletedInputStrategy.update($scope) : this.$q.reject();
        }

        submit($scope: Model.ICreditCardEntryDirectiveScope): angular.IPromise<any> {
            return this.seletedInputStrategy ? this.seletedInputStrategy.submit($scope) : this.$q.reject();
        }
    }
    
}

(() => {
    "use strict";
    
    angular.module("HCTRAModule")
        .service("creditCardInputService", HCTRA.Service.CreditCardInputService);
})();