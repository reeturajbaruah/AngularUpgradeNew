// declare var LitlePayPage: any;

// module HCTRA.Service {
//     import VantivTriPosConfiguration = Model.VantivTriPosConfiguration;
//     import VantivTriPosCreateOmniTokenResponse = Model.VantivTriPosCreateOmniTokenResponse;

//     export interface IVantivPayment {
//         /** */
//         vantivPay(creditCardNumber: string): angular.IPromise<any>;

//         getTokenizedCreditCardData(config: VantivTriPosConfiguration, invokeManualEntry: boolean): angular.IPromise<Model.VantivTriPosCreateOmniTokenResponse>;
        
//     }
    
//     export class VantivPaymentService implements IVantivPayment {
//     //CreditCardType is convereted to enum in Angular
//         static $inject = ["$q",
//             "errorDisplayService",
//             "genericRepo",
//             "responseErrorService",
//             "environmentConfig",
//             "siteVerbiage",
//             "$http", "creditCardTypes", "StorefrontUtilityService"];

//         private static idCounter = 0;
//         private timeoutData: HCTRA.Model.VantivResponseLog;

//         constructor(private $q: ng.IQService,
//             private errorDisplayService: HCTRA.Service.IErrorDisplayService,
//             private genericRepo: HCTRA.Service.IGenericRepo,
//             private responseErrorService: HCTRA.Service.IResponseErrorService,
//             private envConfig: any,
//             private siteVerbiage: any,
//             private $http: angular.IHttpService,
//             private creditCardTypes,
//             private storefrontUtilityService: HCTRA.Storefront.Service.IStorefrontUtilityService) { }

//         private logVantivData = (logObj: HCTRA.Model.VantivRequestLog | HCTRA.Model.VantivResponseLog, isError: boolean) => {

//             if ((this.envConfig.vantivConfig.ErrorToggle && isError) || this.envConfig.vantivConfig.InfoToggle) {

//                 const logRequest = angular.copy(logObj);

//                 if (this.isVantivRequestLog(logRequest)) {
//                     this.genericRepo.dataFactory.LogVantivRequest(logRequest);
//                 } else {
//                     logRequest.isError = isError;
//                     this.genericRepo.dataFactory.LogVantivResponse(logRequest);
//                 }
//             }
//         };

//         private isVantivRequestLog = (log: any): log is HCTRA.Model.VantivRequestLog => {
//             return angular.isDefined((log as HCTRA.Model.VantivRequestLog).requestId);
//         };

//         public vantivPay = (creditCardNumber: string) : angular.IPromise<any> => {

//             const paypageId = this.envConfig.vantivConfig.PayPageID;

//             const reportGroup = this.envConfig.vantivConfig.ReportGroup;

//             const now = new Date();
//             const orderIdNbr = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getMilliseconds());
//             const mTxnID = "T" + orderIdNbr.toString();
//             const litleRequest = {
//                 "paypageId": paypageId,
//                 "reportGroup": reportGroup,
//                 "orderId": orderIdNbr,
//                 "id": mTxnID,
//                 "url": this.envConfig.vantivConfig.PayPageUrl // "https://request-prelive.np-securepaypage-litle.com"//vantivRequest.url
//             };

//             // Right before sending to Vantiv, inject the input element and populate the value with credit card number as in memory
//             const ccElementId = this.generateElementId();
//             angular.element("body").append('<input id="' + ccElementId + '" type="hidden" value="' + creditCardNumber + '" />');
//             const injectedCreditCardElement = angular.element("body>input#" + ccElementId)[0];

//             const formFields = {
//                 "accountNum": injectedCreditCardElement,
//                 "cvv2": "",
//                 "paypageRegistrationId": "",
//                 "bin": ""
//             };

//             const deferred = this.$q.defer();

//             this.logVantivData(this.vantivRequestObjectForLogging(litleRequest), false);

//             new LitlePayPage().sendToLitle(litleRequest, formFields, deferred.resolve,
//                 deferred.reject, this.timeoutOnLitle, this.envConfig.vantivConfig.TimeoutMilliSeconds);

//             // TODO: inject hidden input vantivCreditCard field in current html with no value
//             // Right before sending to Vantiv, inject the input element and populate the value with credit card number as in memory
//             return deferred.promise.then((response: HCTRA.Model.VantivResponse) => {

//                 this.logVantivData(this.vantivResponseObjectForLogging(response), false);

//                 // Only return the useful properties
//                 const vantivDto = new HCTRA.Model.VantivDto(response.lastFour, response.paypageRegistrationId);

//                 return vantivDto;
//             }).catch((err: any) => {

//                 const errorMessage = this.onErrorAfterLitle(err);
//                 this.errorDisplayService.displayToasts(errorMessage);

//                 return this.$q.reject(errorMessage);
//             }).finally(() => {

//                 injectedCreditCardElement.remove();
//             });
//         };

//         public getTokenizedCreditCardData = (config: VantivTriPosConfiguration, invokeManualEntry: boolean): angular.IPromise<Model.VantivTriPosCreateOmniTokenResponse> => {

//             if (config.errors && config.errors.length > 0) {
//                 return this.$q.reject(config);
//             }

//             const url = config.url.replace(/\/$/, "") + "/token/omni";
            
//             //create header object scoped to this method
//             const header = {
//                 "appname": () => null,
//                 "version": () => null,                
//                 "tp-application-id": config.applicationId,
//                 "tp-application-name": config.applicationName,
//                 "tp-application-version": config.applicationVersion,
//                 "tp-authorization": config.authorization,
//                 "tp-express-acceptor-id": config.acceptorId,
//                 "tp-express-account-id": config.accountId,
//                 "tp-express-account-token": config.accountToken,
//                 "tp-request-id": config.requestId,
//                 "tp-return-logs": true
//             };

//             const data = {
//                 laneId: config.laneId,
//                 vaultId: config.vaultId,
//                 invokeManualEntry: invokeManualEntry
//             };

//             //destroy credentials
//             delete config.applicationId;
//             delete config.applicationName;
//             delete config.applicationVersion;
//             delete config.authorization;
//             delete config.acceptorId;
//             delete config.accountId;
//             delete config.accountToken;
//             delete config.url;
//             delete config.laneId;
//             delete config.vaultId;
            
//             return this.$http
//                     .post(url, data, {
//                         headers: header,
//                         withCredentials: false
//                     })
//                     .catch(e => {
//                         //in the rare case where an exception comes up, we still want to capture it
//                         const log = {
//                             isError: true,
//                             message: 'A error occured when contacting Vantivs API',
//                             machineName: this.storefrontUtilityService.machineName,
//                             rawData: JSON.stringify(e)
//                         };

//                         this.genericRepo
//                             .dataFactory
//                             .TriPosLog(log);

//                         return this.$q.reject(e);
//                     })
//                     .then(response => {

//                         const log = this.buildRequestObjForLogging(response);

//                         let responseData = response.data as Model.VantivTriPosCreateOmniTokenResponse;

//                         if (!responseData) {

//                             const xhrStatusError = (response.xhrStatus || '').toLowerCase() === 'error';

//                             log.isError = true;
//                             log.message = xhrStatusError 
//                                 ? 'Vantiv responded with no data with error status. This may be a possible CORS error.'
//                                 : 'Vantiv responded with no data and no error status.';

//                             responseData = { errors:[], _errors: [], cardLogo: '' } as any;
//                         }

//                         const wasCancelled = log.isError && 
//                                 responseData['_errors'].some(e => (e.exceptionMessage || '').indexOf("cancelled response") > -1);

//                         responseData.cancelledByUser = wasCancelled;

//                         if (wasCancelled) {
//                             log.isError = false;
//                         }
                        
//                         if (responseData.cardLogo && !this.creditCardTypes[responseData.cardLogo.toLowerCase()]) {
//                             log.message = `Kiosk does not support '${responseData.cardLogo}' cards`;
//                             log.isError = true;
//                         }
                        
//                         console.log(log);

//                         this.genericRepo
//                             .dataFactory
//                             .TriPosLog(log);

//                         return log.isError ? this.$q.reject(responseData) : this.$q.resolve(responseData);
//                     });
//         };
        
//         public buildRequestObjForLogging = (responseObject) => {
            
//             const { config, data, status } = responseObject;
//             const cleanHeaders = { ...config.headers, 'tp-express-account-token': '****' };
//             const cleanConfig = { data: config.data, headers: cleanHeaders, method: config.method, url: config.url  };
            
//             const cleanData = data ? { ...data, binValue: '****', expirationMonth: '**', expirationYear: '**', tokenId: '****', _processor: null } : {};
//             const cleanResponse = { config: cleanConfig, data: cleanData, status };

//             const message = (responseObject.data && responseObject.data.exceptionMessage) || (cleanData._errors || [])
//                 .map(x => x.exceptionMessage)
//                 .join(' ## ');

//             return {
//                 message,
//                 isError: (responseObject.data && responseObject.data._hasErrors) || (((responseObject.data && responseObject.data.errors) || []).length > 0),
//                 machineName: this.storefrontUtilityService.machineName,
//                 rawData: JSON.stringify(cleanResponse)
//             };
            
//         }

//         public vantivRequestObjectForLogging = (litleRequest): HCTRA.Model.VantivRequestLog => {

//             const ret = {
//                 orderId: litleRequest.orderId,
//                 requestId: litleRequest.id,
//                 paypageId: litleRequest.paypageId,
//                 reportGroup: litleRequest.reportGroup,
//                 url: litleRequest.url
//             } as HCTRA.Model.VantivRequestLog;

//             this.timeoutData = {
//                 orderId: litleRequest.orderId,
//                 reportGroup: litleRequest.reportGroup,

//                 violationsData: null
//             } as HCTRA.Model.VantivResponseLog;

//             return ret;
//         };

//         public vantivResponseObjectForLogging = (response): HCTRA.Model.VantivResponseLog => {

//             const ret = {
//                 orderId: response.orderId,
//                 message: response.message,
//                 response: response.response,
//                 paypageRegistrationId: response.paypageRegistrationId,
//                 litleTxnId: response.litleTxnId,
//                 responseTime: response.responseTime,
//                 targetServer: response.targetServer,
//                 type: response.type,
//                 id: response.id,
//                 reportGroup: response.reportGroup,

//                 violationsData: null
//             } as HCTRA.Model.VantivResponseLog;

//             return ret;
//         };
        
//         private timeoutOnLitle = () => {

//             const timeoutResponse = angular.copy(this.timeoutData);
//             timeoutResponse.customLogMessage = "Vantiv timeout error";
//             this.logVantivData(timeoutResponse, true);

//             this.responseErrorService.displayToast(this.siteVerbiage.genericErrorMsg, "error", false);
//         };

//         private onErrorAfterLitle = (response: any): string => {

//             var outMessage;

//             if (response.response === '871') {
//                 outMessage = "Invalid card number. Check and retry. (Not Mod10)";
//             }
//             else if (response.response === '872') {
//                 outMessage = "Invalid card number. Check and retry. (Too short)";
//             }
//             else if (response.response === '873') {
//                 outMessage = "Invalid card number. Check and retry. (Too long)";
//             }
//             else if (response.response === '874') {
//                 outMessage = "Invalid card number. Check and retry. (Not a number)";
//             }
//             else if (response.response === '875') {
//                 outMessage = this.siteVerbiage.genericErrorMsg;
//             }
//             else if (response.response === '876') {
//                 outMessage = "Invalid card number. Check and retry. (Failure from Server)";
//             }
//             else if (response.response === '881') {
//                 outMessage = "Invalid card validation code. Check and retry. (Not a number)";
//             }
//             else if (response.response === '882') {
//                 outMessage = "Invalid card validation code. Check and retry. (Too short)";
//             }
//             else if (response.response === '883') {
//                 outMessage = "Invalid card validation code. Check and retry. (Too long)";
//             }
//             else if (response.response === '889') {
//                 outMessage = this.siteVerbiage.genericErrorMsg;
//             }

//             // Log the Vantiv error
//             this.logVantivData({
//                 orderId: response.orderId,
//                 message: response.message,
//                 response: response.response,
//                 responseTime: response.responseTime,
//                 id: response.id,
//                 reportGroup: response.reportGroup,
//                 customLogMessage: outMessage,

//                 violationsData: null
//             } as HCTRA.Model.VantivResponseLog, true);

//             return outMessage;
//         };

//         private generateElementId = () => {

//             return "vantivRequiredCardElement" + VantivPaymentService.idCounter++;
//         };
//     }
// }

(function () {
    'use strict';
    // angular.module('HCTRAModule').service('vantivPaymentService', HCTRA.Service.VantivPaymentService);
}());
