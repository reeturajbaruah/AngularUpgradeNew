module HCTRA.Service {
    "use strict";

    export interface ISaveBillingService {
        createSaveRequest(scope): any;
        saveCreditCard(request: any, nextState: string): angular.IPromise<any>;
        saveEFT(request: any, nextState: string): angular.IPromise<any>;
    }

    export class SaveBillingService implements ISaveBillingService {

        static $inject = ["genericRepo", "responseErrorService", "modalService", "$state"];

        constructor(
            private genericRepo: HCTRA.Service.IGenericRepo,
            private responseErrorService: HCTRA.Service.IResponseErrorService,
            private modalService: HCTRA.Service.IModalService,
            private $state: angular.ui.IStateService) { }


        public createSaveRequest = (scope) => {

            let billingInfoCopy = angular.copy(scope.billingInfo);

            return scope.billingType === "CREDIT" ?
                (scope.billingInfo.cards[0].primary = true, this.createCreditCardSaveRequest(billingInfoCopy)) :
                this.createEftSaveRequest(billingInfoCopy);
        };

        createEftSaveRequest = (billingInfo) => {

            angular.extend(billingInfo, {
                cards: null,
                billingTypeCode: "E",
                billingTypeDisplay: "EFT"
            });
            
            return {
                billingInfo: billingInfo,
                cards: null
            }
        }

        getDate = (year, month) => {

            const dateString = angular.toJson(new Date(Number(year), Number(month)));

            return (dateString.slice(0, 1) === '"' && dateString.slice(- 1) === '"') ?
                dateString.slice(1, -1) :
                dateString;
                
        }

        createCreditCardSaveRequest = (billingInfo) => {

            billingInfo.cards[0].primary = true;

            angular.forEach(billingInfo.cards, (card) => {

                const { zip, international, cardExpiresDate, country, selectedYear, expMonth } = card;

                angular.extend(card, {
                    zipCode: zip,
                    country: international === false ? "USA" : country,
                    cardExpiresDate: angular.isString(card.cardExpiresDate) && card.cardExpiresDate !== "" ? cardExpiresDate : this.getDate(selectedYear, expMonth)
                }); 
            });

            angular.extend(billingInfo, {
                eft: null,
                billingTypeCode: "C",
                billingTypeDisplay: "CREDIT"
            });
            
            return {
                billingInfo: billingInfo,
                cards: billingInfo.cards, // TODO: Investigate where the request.cards are still used in Angular and delete
                eft: null
            }
        }

        saveCardOrEft = (request: any, nextState: string) => {
            return this.genericRepo.dataFactory.saveBillingInformation(request).then((response: HCTRA.Model.IBaseResponse) => {
                return this.processSaveResponse(response, nextState);
            });
        }

        public saveCreditCard = this.saveCardOrEft

        public saveEFT = this.saveCardOrEft


        isErrorFree = (response) => !response.errors || response.errors.length === 0 ? true : (this.responseErrorService.displayErrorsFromResponse(response), false);

        processSaveResponse = (response: HCTRA.Model.IBaseResponse, nextState: string) => {
            if (this.isErrorFree(response)) {
                this.responseErrorService.displayAlertsFromResponse(response, true);
                this.modalService.showUpdateSuccessModal("Billing Information Update", "billing information");

                return this.$state.go(nextState, {}, { reload: true });
            } 

            return false;
        }
    }
}

(function () {
    "use strict";
    angular.module("HCTRAModule").service("saveBillingService", HCTRA.Service.SaveBillingService);
}());