module HCTRA.Service {
   
    export class LitelStrategy implements ICreditCardInputStrategy {

        static $inject = ["pciInfoService", "vantivPaymentService", "creditCardConversionService", "$q"];

        constructor(
            private pciInfoService: Service.IPciInfoService,
            private vantivPaymentService: Service.IVantivPayment,
            private creditCardConversionService: any,
            private $q: ng.IQService
        ) { }

        canUse(): angular.IPromise<any> {
            return this.$q(resolve => resolve());
        }

        setup($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any> {
            return this.$q(res => {
                angular.extend($scope, {
                    visaImage: "../../../Content/icons/visa.png",
                    mastercardImage: "../../../Content/icons/mastercard.png",
                    amexImage: "../../../Content/icons/amex.png",
                    discoverImage: "../../../Content/icons/discover.png",
                    strategyUsed: Model.CreditCardInputStrategyEnum.Litel,
                    creditCardNameDisabled: false,
                    creditCardNumberDisabled: false,
                    creditCardExpYearDisabled: false,
                    creditCardExpMothDisabled: false
                });

                let unwatchCreditCard = $scope.$watch("creditCard", (creditCard: any) => {
                    if (!creditCard) {
                        return;
                    }

                    if ($scope.creditCard.expMonth === null) {
                        $scope.creditCard.expMonth = 1;
                        $scope.creditCard.selectedYear = new Date().getFullYear();
                    }
                    unwatchCreditCard();
                });

                $scope.$watch("creditCard.cardCode", (cardCode: string) => {
                    if (cardCode) {
                        $scope.isVisa = $scope.creditCard.cardCode === "V";
                        $scope.isMastercard = $scope.creditCard.cardCode === "M";
                        $scope.isDiscover = $scope.creditCard.cardCode === "D";
                        $scope.isAmex = $scope.creditCard.cardCode === "A";
                    }
                });

                if ($scope.creditCard.cardNbr) {
                    $scope.creditCard.cardNbr = "************-" + $scope.creditCard.cardNbr.slice(-4);
                }
                res();
            });
        }

        update(): ng.IPromise<any> {
            return this.$q(resolve => resolve());
        }

        submit($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any> {
            return this.$q((resolve, reject) => {
                if (this.pciInfoService.isMasked($scope.creditCard.cardNbr)) {                    
                    resolve();
                } else {
                    this.vantivPaymentService.vantivPay($scope.creditCard.cardNbr)
                        .then((response: Model.VantivResponse) => {

                            angular.extend($scope.creditCard, {
                                cardNbr: "************-" + response.lastFour,
                                paypageRegistrationId: response.paypageRegistrationId,
                                cardTypeDisplay: this.creditCardConversionService.convertCodeToString($scope.creditCard.cardCode),
                                isNewCard: true
                            });
                            resolve();
                        })
                        .catch(reject);
                }
            });
        }
    }

}

(() => {
    "use strict";

    angular.module("HCTRAModule")
        .service("litelStrategy", HCTRA.Service.LitelStrategy);
})();