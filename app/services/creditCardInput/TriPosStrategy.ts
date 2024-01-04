module HCTRA.Service {
    
    export class TriPosStrategy implements ICreditCardInputStrategy {

        static $inject = ["vantivPaymentService", "$q", "StorefrontUtilityService", "modalService", "responseErrorService", "genericRepo", "$timeout", "routes", "environmentConfig", "creditCardConversionService"];

        constructor(
            private vantivPaymentService: Service.IVantivPayment,
            private $q: angular.IQService,
            private storefrontUtilityService: Storefront.Service.IStorefrontUtilityService,
            private modalService: Service.IModalService,
            private responseErrorService: IResponseErrorService,
            private genericRepo: Service.IGenericRepo,
            private $timeout: angular.ITimeoutService,
            private routes: Constant.IRoutes,
            private environmentConfig: HCTRA.Constant.IEnvironmentConfig,
            private creditCardConversionService: any,
        ) { }

        isActive: boolean;
        allowCcInput: boolean;
        getCardNameFromTriPos: boolean;

        inUse: boolean;

        canUse(): angular.IPromise<any> {
            return this.$q((resolve, reject) => {

                //this logic will need to be updated if we allow cc input devices at machines other than kiosks
                if (!this.storefrontUtilityService.isRunningAsKiosk) {
                    reject();
                    return;
                }

                //if this is a default config machine
                if (this.storefrontUtilityService.machineName === this.storefrontUtilityService.defaultMachineName) {
                   
                    const config =
                        this.environmentConfig.storefrontConfigs.KioskConfigs[this.storefrontUtilityService.defaultMachineName];

                    this.isActive = false;
                    this.allowCcInput = config.AllowCreditCardInputWhenDeviceDisabled;
                    this.getCardNameFromTriPos = false;

                    this.allowCcInput ? reject() : resolve();
                    
                    return;
                }

                this.genericRepo.dataFactory
                    .TriPosStatus(this.storefrontUtilityService.machineName || this.environmentConfig.storefrontConfigs.DefaultMachineName)
                    .then((vantiveConfig: Model.VantivTriPosStatus) => {
                        this.isActive = vantiveConfig.active;
                        this.allowCcInput = vantiveConfig.allowCreditCardInputWhenDeviceDisabled;
                        this.getCardNameFromTriPos = vantiveConfig.getCardNameFromTriPos;

                        !vantiveConfig.active && vantiveConfig.allowCreditCardInputWhenDeviceDisabled ? reject() : resolve();
                    });
            });
        }

        setup($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any> {
            return this.$q(res => {
                angular.extend($scope,
                    {
                        strategyUsed: Model.CreditCardInputStrategyEnum.Tripos,
                        creditCardNameDisabled: false,
                        creditCardNumberDisabled: true,
                        creditCardExpYearDisabled: true,
                        creditCardExpMothDisabled: true,
                        editPencilId: this.routes.triposEditCreditCardId,

                        useExistingCard: true,

                        detectedCreditCardNameChange: false
                    });

                //detects pre-swipe change in name to not allow tripos response to override it
                const cancelNameWatcher = $scope.$watch("creditCard.nameOnCard", (newValue, oldValue) => {
                    if (newValue !== oldValue) {
                        $scope.detectedCreditCardNameChange = true;
                        cancelNameWatcher();
                    }
                });

                //detect change in card number to signal card has changed to the scope
                const cancelCcNumberWatcher = $scope.$watch("creditCard.cardNbr", (newValue, oldValue) => {
                    if (newValue !== oldValue) {
                        $scope.useExistingCard = false;
                        cancelCcNumberWatcher();
                    }
                });
                
                if (!this.isActive && !this.allowCcInput) {
                    this.responseErrorService.displayToast("Credit card input is disabled", "warning", false);
                }

                this.inUse = false;

                res();
            });
        }

        update($scope: Model.ICreditCardEntryDirectiveScope): ng.IPromise<any> {
            
            return this.$q((resolve, reject) => {
                if (!this.isActive) {
                    this.inUse = false;
                    this.responseErrorService.displayToast("Terminal cannot accept credit card info at this time", "warning", false);
                    reject();
                    return;
                }

                if (this.inUse) {
                    reject();
                    return;
                }

                this.inUse = true;

                let modalTimeoutPromise = null;

                const modalScope: any = this.modalService.newModalScope({
                    readerState: Model.CreditCardPromptEnum.Wait,
                    successId: this.routes.triposCreditCardSwipeSuccessId,
                    failureId: this.routes.triposCreditCardSwipeFailId,
                    promptId: this.routes.triposCreditCardSwipePromptId,
                    promptAltId: this.routes.triposCreditCardSwipePromptAltId,
                    creditCardPromptStates: Model.CreditCardPromptEnum,
                    close: () => {
                        this.inUse = false;
                        if (modalTimeoutPromise) {
                            this.$timeout.cancel(modalTimeoutPromise);
                            modalTimeoutPromise = null;
                        }
                        this.modalService.closeByName(this.modalService.modalNames.CreditCardPrompt);
                    },
                    tryAgain: () => {
                        this.inUse = false;
                        this.modalService.closeByName(this.modalService.modalNames.CreditCardPrompt);
                        this.$timeout(() => {
                            this.update($scope);
                        }, 250);
                    }
                });

                this.modalService.creditCardPromptModal(modalScope);
                
                this.genericRepo.dataFactory
                    .TriPosConfiguration(this.storefrontUtilityService.machineName ||
                        this.environmentConfig.storefrontConfigs.DefaultMachineName)
                    .then(config => this.vantivPaymentService.getTokenizedCreditCardData(config, false))
                    .then((response) => {
                        
                        //if modal is closed before swipe is completed, throw away result
                        if (!this.modalService.isModalOpen(this.modalService.modalNames.CreditCardPrompt)) {
                            resolve();
                            return;
                        }

                        if (response.cancelledByUser) {
                            resolve();
                            if (modalTimeoutPromise) {
                                this.$timeout.cancel(modalTimeoutPromise);
                                modalTimeoutPromise = null;
                            }
                            this.modalService.closeByName(this.modalService.modalNames.CreditCardPrompt);
                            return;
                        }

                        modalScope.readerState = Model.CreditCardPromptEnum.Success;

                        //splits the lastname/firstname input from vantiv and reverses order
                        const cardName = this.getCardNameFromTriPos
                            ? (response.cardHolderName || "").split(/[\/\\]+/).reverse().join(" ")
                            : "";

                        angular.extend($scope.creditCard,
                            {
                                omniToken: response.tokenId,
                                cardNbr: response.accountNumber,
                                cardCode: response.cardLogo.toUpperCase().slice(0, 1),
                                cardTypeDisplay: this.creditCardConversionService.convertCodeToString(response.cardLogo.toUpperCase().slice(0, 1)),
                                isNewCard: true,
                                expMonth: +response.expirationMonth,
                                selectedYear: (response.expirationYear.length === 2 ? '20' : '').concat(
                                    '' + response.expirationYear)
                            });

                        if (!$scope.detectedCreditCardNameChange) {
                            $scope.creditCard.nameOnCard = cardName;
                        }

                        //$scope.creditCardNameDisabled = (response.entryMode || "").toLowerCase() !== "keyed";
                        resolve();
                        modalTimeoutPromise =
                            this.$timeout(
                            () => this.modalService.closeByName(this.modalService.modalNames.CreditCardPrompt),
                            this.storefrontUtilityService.delay.long);
                    })
                    .catch((e) => {
                        modalScope.readerState = Model.CreditCardPromptEnum.Failure;
                        reject();
                    })
                    .finally(() => this.inUse = false);
            });

        }

        submit(): ng.IPromise<any> {
            return this.$q((resolve, reject) => this.isActive ? resolve() : reject("terminal cannot accept credit card info at this time"));
        }
    }

}

(() => {
    "use strict";

    angular.module("HCTRAModule")
        .service("triPosStrategy", HCTRA.Service.TriPosStrategy);
})();