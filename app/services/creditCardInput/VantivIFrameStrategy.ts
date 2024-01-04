module HCTRA.Service {
    
    export class VantivIFrameStrategy implements ICreditCardInputStrategy {

        static $inject = ["$interval", "$document", "creditCardConversionService", "$filter", "environmentConfig", "$q", "iFrameService"];

        constructor(
            private $interval,
            private $document,
            private creditCardConversionService: any,
            private $filter,
            private environmentConfig,
            private $q: ng.IQService,
            private iFrameService: Service.IIFrameService
        ) {
            this.iframeInstance = iFrameService.getIFrameServiceInstance();
        }

        iframePlaceholder: any;
        iframeInstance: any;

        loadNewIframe($scope: Model.ICreditCardEntryDirectiveScope) {

            $scope.creditCard.cardNbr = $scope.creditCard.cardNbr ? $scope.creditCard.cardNbr.slice(-4) : "";
            this.iframePlaceholder = $scope.creditCard.cardNbr ? this.$filter('creditCard')($scope.creditCard.cardNbr, $scope.creditCard.cardCode) : "";
            this.iframeInstance.loadIFrame("focusedplaceholdertransparent", "51", $scope.addSuffix("payframe"), this.iframePlaceholder);
        }

        canUse(): angular.IPromise<any> {
            return this.$q((resolve, reject) => this.environmentConfig.vantivConfig.IFrameEnabled ? resolve() : reject());
        }

        setup($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any> {
            return this.$q(res => {
                angular.extend($scope, {
                    strategyUsed: Model.CreditCardInputStrategyEnum.Iframe,
                    creditCardNameDisabled: false,
                    creditCardNumberDisabled: false,
                    creditCardExpYearDisabled: false,
                    creditCardExpMothDisabled: false
                });
                
                const unwatchCreditCard = $scope.$watch("creditCard", (creditCard: any) => {
                    if (!creditCard) {
                        return;
                    }


                    const emptyCreditCardCheck = this.$interval(() =>
                        this.iframePlaceholder && this.iframeInstance.creditCardFieldEmpty()
                            .then((isEmpty) => $scope.useExistingCard = isEmpty), 100);

                    $scope.$on("$destroy", () => {
                        this.$interval.cancel(emptyCreditCardCheck);
                    });
                    
                    const unwatch = $scope.$watch(() => {

                        if (this.$document[0].getElementById($scope.addSuffix("payframe"))) {
                            this.loadNewIframe($scope);
                            unwatch();
                        }
                        return true;
                    });
                    
                    if ($scope.creditCard.expMonth === null) {
                        $scope.creditCard.expMonth = 1;
                        $scope.creditCard.selectedYear = new Date().getFullYear();
                    }
                    unwatchCreditCard();
                });
                
                res();
            });
        }

        update(): ng.IPromise<any> {
            return this.$q(resolve => resolve());
        }

        submit($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any> {
            return this.$q((resolve, reject) => {
                if ($scope.useExistingCard) {
                    resolve();
                } else {
                    this.iframeInstance.getPaypageRegistrationId()
                        .then((response) => {
                            angular.extend($scope.creditCard, {
                                cardNbr: response.lastFour,
                                paypageRegistrationId: response.paypageRegistrationId,
                                cardCode: response.type.slice(0, 1),
                                isNewCard: true
                            });

                            $scope.creditCard.cardTypeDisplay = this.creditCardConversionService.convertCodeToString($scope.creditCard.cardCode);

                            this.loadNewIframe($scope);

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
        .service("vantivIFrameStrategy", HCTRA.Service.VantivIFrameStrategy);
})();