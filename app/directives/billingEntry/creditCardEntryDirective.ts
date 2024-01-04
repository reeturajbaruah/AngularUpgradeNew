module HCTRA.Directive {
    
    export class CreditCardEntry {

        static $inject = ["validationService", "expirationDateService", "monthListService","creditCardInputService"];
        
        constructor(
            private validationService: any,
            private expirationDateService: Service.IExpirationDateService,
            private monthListService,
            private creditCardInputService: Service.ICreditCardInputService
        ) { 
        }
        
        templateUrl = "/app/directives/billingEntry/creditCardEntryTemplate.html";

        scope = {
            creditCard: "=",
            paymentsform: "=",
            nameSuffix: "=",
            useExistingCard: "=?",
            disableValidation: "=?"
        };
        
        link = ($scope: Model.ICreditCardEntryDirectiveScope | any, element: any, attr: any) => {
            let updateValidity = (property: string, criteria: string, valid: boolean) =>
                $scope.paymentsform[$scope.addSuffix(property)].$setValidity(criteria, valid);

            let validateAndUpdateExpirationDate = () => {
                updateValidity("expMonth", "required", this.expirationDateService.isMonthValid($scope.creditCard.expMonth, $scope.creditCard.selectedYear));
                updateValidity("expYear", "required", this.expirationDateService.isYearValid($scope.creditCard.selectedYear));
                $scope.creditCard.cardExpires = $scope.creditCard.expMonth + "/" + $scope.creditCard.selectedYear;
            };
            
            angular.extend($scope, {
                toasterVisible: false,
                useExistingCard: null,
                months: this.monthListService.months,
                addSuffix: (cardItem: string) => cardItem + $scope.nameSuffix,
                update: () => this.creditCardInputService.update($scope),
                strategyUsed: 17,
                strategies: Model.CreditCardInputStrategyEnum,
                autoUpdate: angular.isDefined(attr.autoUpdate),
                creditCardNameDisabled: true,
                creditCardNumberDisabled: true,
                creditCardExpYearDisabled: true,
                creditCardExpMothDisabled: true
            });

            this.creditCardInputService.setup($scope);

            $scope.$watch("creditCard.expMonth", (expMonth) => {
                expMonth && validateAndUpdateExpirationDate();
            });

            $scope.$watch("creditCard.selectedYear", (selectedYear: number) => {
                $scope.yearList = this.expirationDateService.getExpirationYearList(selectedYear, 20);
                selectedYear && validateAndUpdateExpirationDate();
            });

            $scope.$on($scope.nameSuffix, (event, deferred) => {
                this.creditCardInputService
                    .submit($scope)
                    .then(() => deferred.resolve())
                    .catch(() => deferred.reject());
            });

            $scope.validation = this.validationService($scope.paymentsform);
        }
    }
}

(() => {
    "use strict";

    function genericDirectiveFactory(functionConstructor): ng.IDirectiveFactory{
        const directive = (...args) => new (functionConstructor.bind(null, ...args))();
        directive.$inject = functionConstructor.$inject;
        return directive;
    }

    angular.module("HCTRAModule")
        .directive("creditCardEntry", genericDirectiveFactory(HCTRA.Directive.CreditCardEntry));
})();