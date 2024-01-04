module HCTRA.Service {
    export interface IIFrameService {
        getIFrameServiceInstance();
    }
}

module HCTRA.Service {
    export class IFrameService implements IIFrameService {

        static $inject = [
            "$q",
            "responseErrorService",
            "eprotectIframeClientService",
            "environmentConfig",
            "genericRepo",
            "siteVerbiage",
            "$timeout",
            "toggleButtonsService"
        ];       

        constructor(
            private $q: ng.IQService,
            private responseErrorService: IResponseErrorService,
            private eprotectIframeClientService: IEprotectIframeClientService,
            private environmentConfig: any,
            private genericRepo: HCTRA.Service.IGenericRepo,
            private siteVerbiage,
            private $timeout,
            private toggleButtonsService: HCTRA.Service.IToggleButtonsService) {         
        }

        getConfiguration = (style: string, height: string, iFrameDiv: string, existingCreditCardNumber: string, payframeClientCallback, inputsEmptyCallback) => ({
            "paypageId": this.environmentConfig.vantivConfig.PayPageID,
            "reportGroup": this.environmentConfig.vantivConfig.ReportGroup,
            "style": style,
            "height": height,          
            "timeout": this.environmentConfig.vantivConfig.TimeoutMilliSeconds,
            "div": iFrameDiv,
            "callback": payframeClientCallback,
            "inputsEmptyCallback": inputsEmptyCallback,
            "showCvv": false,
            "htmlTimeout": this.environmentConfig.vantivConfig.TimeoutMilliSeconds,
            "placeholderText": {
                "accountNumber": existingCreditCardNumber
            },
            "enhancedUxFeatures": {
                "inlineFieldValidations": true,
                "numericInputsOnly": true
            }
        });

        //Not testable
        generateSeedDate = (): Date => new Date()

        generatePseudoRandomNumber = (seedDate: Date) =>
            Date.UTC(seedDate.getUTCFullYear(), seedDate.getUTCMonth(), seedDate.getUTCDate(), seedDate.getUTCHours(), seedDate.getUTCMinutes(), seedDate.getUTCSeconds(), seedDate.getMilliseconds());

        getMessage = (randomNumber: number): {id:string, orderId:number} => ({
            "id": "T" + randomNumber.toString(),
            "orderId": randomNumber
        })
        
        logRequest = message => {

            if (!this.environmentConfig.vantivConfig.InfoToggle) return;

            this.genericRepo.dataFactory.LogVantivRequest({
                "paypageId": this.environmentConfig.vantivConfig.PayPageID,
                "reportGroup": this.environmentConfig.vantivConfig.ReportGroup,
                "requestId": message.id,
                "orderId": message.orderId,
                "url": this.environmentConfig.vantivConfig.IFrameUrl
            } as any);
        }

        isSuccess = ({ response }: HCTRA.Model.VantivResponse) => response === "870";

        isTimeoutError = (response: HCTRA.Model.VantivResponse): boolean =>
            response.response === "884" || response.timeout || false;

        isResponseToBeLogged = (response: HCTRA.Model.VantivResponse): boolean =>
            this.environmentConfig.vantivConfig.InfoToggle || this.environmentConfig.vantivConfig.ErrorToggle && !this.isSuccess(response) || false;
                
        logResponse = (response: HCTRA.Model.VantivResponse, message) => {
            if (!this.isResponseToBeLogged(response)) return;

            this.genericRepo.dataFactory.LogVantivResponse({
                "id": message.id,
                "orderId": message.orderId,
                "reportGroup": this.environmentConfig.vantivConfig.ReportGroup,
                "response": response.response,
                "message": response.timeout ? "Request for Paypage Registration Id Timed Out" : response.message,
                "responseTime": response.responseTime,
                "vantivTxnId": response.vantivTxnId,
                "paypageRegistrationId": response.paypageRegistrationId,
                "targetServer": response.targetServer,
                "type": response.type,
                "isError": !this.isSuccess(response),
                
                "violationsData": null
            });

        }
        
        getIFrameServiceInstance = () => {           

            const iFrameServiceInstance = {

                isBlocked: true, //blocked before Iframe loaded
                message: {},
                deferGetPaypageRegistrationId: this.$q.defer(), //prevent exception if callback called before the first exectution of getPaypageRegistrationId(payframeClient)() => html iframe load timeout
                deferInputsEmpty: undefined,
                payframeClient: undefined,

                inputsEmptyCallback: ({ allInputsEmpty }) =>
                    iFrameServiceInstance.deferInputsEmpty.resolve(allInputsEmpty),

                creditCardFieldEmpty: () => {

                    if (iFrameServiceInstance.isBlocked) return this.$q.defer().promise;

                    iFrameServiceInstance.deferInputsEmpty = this.$q.defer();

                    iFrameServiceInstance.payframeClient.allInputsEmpty();

                    return iFrameServiceInstance.deferInputsEmpty.promise;
                },

                loadIFrame: (style: string, height: string, iFrameDiv: string, existingCreditCardNumber: string) => {

                    //iframe reload means the previous request for paypage registration will never be resolved, the old iframe window will be discarded so it can't return a message 
                    iFrameServiceInstance.isBlocked = false;
                    const configuration = this.getConfiguration(style, height, iFrameDiv, existingCreditCardNumber, iFrameServiceInstance.callbackWithLogger, iFrameServiceInstance.inputsEmptyCallback);
                    iFrameServiceInstance.payframeClient = new this.eprotectIframeClientService.EprotectIframeClient(configuration);
                },

                callbackWithLogger: (response: HCTRA.Model.VantivResponse) => {

                    this.logResponse(response, iFrameServiceInstance.message);

                    if (this.isTimeoutError(response) || ["875", "889"].indexOf(response.response) > 0) this.responseErrorService.displayToast(this.siteVerbiage.genericErrorMsg, "error", false);

                    if (this.isSuccess(response)) iFrameServiceInstance.deferGetPaypageRegistrationId.resolve(response);
                    else iFrameServiceInstance.deferGetPaypageRegistrationId.reject();

                    iFrameServiceInstance.isBlocked = false;
                },                

                getPaypageRegistrationId:(): ng.IPromise<any> => {

                    if (iFrameServiceInstance.isBlocked) return this.$q.reject();

                    iFrameServiceInstance.isBlocked = true;
                    const seedDate = this.generateSeedDate();
                    const randomNumber = this.generatePseudoRandomNumber(seedDate);
                    iFrameServiceInstance.message = this.getMessage(randomNumber);

                    this.logRequest(iFrameServiceInstance.message);

                    iFrameServiceInstance.payframeClient.getPaypageRegistrationId(angular.copy(iFrameServiceInstance.message));

                    iFrameServiceInstance.deferGetPaypageRegistrationId = this.$q.defer();

                    return this.toggleButtonsService.disableUntilResolved(iFrameServiceInstance.deferGetPaypageRegistrationId.promise);
                }

            }

            return iFrameServiceInstance;
        }
    }
}

(() => {
    'use strict';

    angular.module('HCTRAModule').service('iFrameService', HCTRA.Service.IFrameService);
})();