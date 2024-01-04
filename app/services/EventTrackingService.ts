module HCTRA.Service {
    // export interface IEventTrackingService {
    //     violationsTrackViolationCounts: (paidInvoices: HCTRA.Model.ViolationsData[]) => void;
    //     suspendedAccountTrackViolationCounts: (request: HCTRA.Model.FullUnsuspensionPaymentRequest, response: HCTRA.Model.FullUnsuspensionPaymentResponse) => void;
    //     frpTrackViolationCounts: (invoicedViolations, uninvoicedViolations) => void;
    //     matTrackViolationCounts: (violations) => void;
    //     initGlobalEventTracking: () => void;
    //     getPathname(initDate: Date, urlHistoryArray: UrlHistoryArray, sensitivity: number): string;
    // }
}

module HCTRA.Service {

    // export type UrlHistoryArray = { oldUrl: string, newUrl: string, date: Date }[];

    // export class EventTrackingService implements IEventTrackingService {

    //     static readonly $inject = ['browserExtensionHandlerService', 'violationsUtilService', 'arrayUtilService', 'domUtilService', 'environmentConfig', '$rootScope', 'momentjs'];

    //     private urlHistoryArray: UrlHistoryArray = [];
    //     private readonly pathnameSensitivity = 1000; // milliseconds, the distance in the past it will consider history entries as viable "last page" candidates
    //     private readonly historyEntryMax = 5;

        
    //     constructor(private browserExtensionHandlerService: HCTRA.Service.IBrowserExtensionHandlerService, private violationsUtilService: HCTRA.Service.IViolationsUtilService, private arrayUtilService: HCTRA.Service.IArrayUtilService, private domUtilService: HCTRA.Service.IDomUtilService, private environmentConfig: HCTRA.Constant.IEnvironmentConfig, private $rootScope: ng.IRootScopeService, private momentjs: moment.MomentStatic) {
    //     }

    //     public initGlobalEventTracking = this.runOnce(() => {

    //         const config = this.environmentConfig.eventTrackingConfig;

    //         if (config.EventTrackingEnabled) {

    //             this.domUtilService.documentAddClickEventListener(e => {

    //                 const elem: any = e.target;

    //                 // TODO: MAKE EVERYTHING PAST HERE ASYNC SO THE SLOW REGEXES DON'T BRING EVERYTHING TO A HALT
    //                 //  we want the click to succeed no matter what, and in good time

    //                 const rawIdList = this.domUtilService.getDomElementIdChain(elem); // id list of all elements up parent chain (null if no id)
    //                 const clickedElementId = rawIdList[0]; // grabs direct click id (null if no id)
    //                 const idList = rawIdList.filter(u => angular.isDefined(u) && u !== null); // removes null and undefined from list

    //                 //const eventSummary = this.trackEvents(clickedElementId, idList, config.Rules);
    //                 this.trackEvents(clickedElementId, idList, config.Rules);
    //             });
    //         }

    //         this.$rootScope.$on('$locationChangeStart', (e, newUrl, oldUrl) => {

    //             this.urlHistoryArray.unshift({
    //                 oldUrl: this.domUtilService.parseUrl(oldUrl).pathname,
    //                 newUrl: this.domUtilService.parseUrl(newUrl).pathname,
    //                 date: new Date()
    //             });

    //             while (this.urlHistoryArray.length > this.historyEntryMax) {
    //                 this.urlHistoryArray.pop();
    //             }
    //         });
    //     });

    //     public violationsTrackViolationCounts = (paidInvoices: HCTRA.Model.ViolationsData[]) => {

    //         const numInvoicesPaid = paidInvoices.length;
    //         const numInvoicesWithCollectionFee = this.violationsUtilService.getNumInvoicesWithCollectionFee(paidInvoices);
    //         const numNonCollectionInvoices = numInvoicesPaid - numInvoicesWithCollectionFee;

    //         if (numInvoicesWithCollectionFee > 0) {

    //             this.browserExtensionHandlerService.sendEvent("violations", "violations_payment", "collections-invoices", numInvoicesWithCollectionFee); // send number of invoices with collections fees
    //         }

    //         if (numNonCollectionInvoices > 0) {

    //             this.browserExtensionHandlerService.sendEvent("violations", "violations_payment", "non-collections-invoices", numNonCollectionInvoices); // send number of non-collections invoices
    //         }
    //     };

    //     public suspendedAccountTrackViolationCounts = (request: HCTRA.Model.FullUnsuspensionPaymentRequest, response: HCTRA.Model.FullUnsuspensionPaymentResponse) => {

    //         const equalityPredicate = (u: HCTRA.Model.FrpChargesByPlate, v: HCTRA.Model.UnsuspensionPaymentResult) => `${u.licensePlateState}-${u.licensePlateNumber}` === `${v.label}`;

    //         // TODO: Assumption is being made that the presence of plate in "successfulPayments" means all invoces were successful; this is not entirely correct.
    //         //  All it means is that at least one was successful. It's impossible, with the current API, to determine which invoices were successful and which weren't.
    //         //  Same below.
    //         const successfulFrpChargesByPlate = this.arrayUtilService.intersect(request.frpChargesByPlateList, response.successfulPayments, equalityPredicate);

    //         // TODO: Assumption is being made that the presence of plate in "successfulPayments" means all invoces were successful; this is not entirely correct.
    //         //  All it means is that at least one was successful. It's impossible, with the current API, to determine which invoices were successful and which weren't.
    //         //  Same above.
    //         const successfulIneligibleChargesByPlate = this.arrayUtilService.intersect(request.ineligibleChargesByPlateList, response.successfulPayments, equalityPredicate);

    //         const numFrpInvoicesPaid = successfulFrpChargesByPlate.reduce((prev, cur) => prev + cur.frpCheckEligibilityResult.invoices.length, 0); // sums up number of invoices paid under each eligible plate
    //         const numFrpViolationsPaid = successfulFrpChargesByPlate.reduce((prev, cur) => prev + cur.frpCheckEligibilityResult.violations.length, 0); // sums up number of uninvoiced violations paid under each eligible plate
    //         const numIneligibleInvoicesPaid = successfulIneligibleChargesByPlate.reduce((prev, cur) => prev + cur.frpCheckEligibilityResult.invoices.length, 0); // sums up number of invoices paid under each ineligible plate

    //         if (numFrpInvoicesPaid > 0) {
    //             // track invoices paid under each eligible plate
    //             this.browserExtensionHandlerService.sendEvent("violations", "suspended_payment", "frp-eligible-plate-invoices", numFrpInvoicesPaid);
    //         }

    //         if (numFrpViolationsPaid > 0) {
    //             // track uninvoiced violations paid under each eligible plate
    //             this.browserExtensionHandlerService.sendEvent("violations", "suspended_payment", "frp-eligible-plate-violations", numFrpViolationsPaid);
    //         }

    //         if (numIneligibleInvoicesPaid > 0) {
    //             // track invoices paid under each ineligible plate
    //             this.browserExtensionHandlerService.sendEvent("violations", "suspended_payment", "frp-ineligible-plate-invoices", numIneligibleInvoicesPaid);
    //         }
    //     };

    //     public frpTrackViolationCounts = (invoicedViolations, uninvoicedViolations) => {

    //         const numInvoicesPaid = invoicedViolations.hData.length +
    //             invoicedViolations.fData.length +
    //             invoicedViolations.mData.length;

    //         const numViolationsPaid = uninvoicedViolations.invoices.hData.length +
    //             uninvoicedViolations.invoices.fData.length +
    //             uninvoicedViolations.invoices.mData.length;

    //         if (numInvoicesPaid > 0) {

    //             this.browserExtensionHandlerService.sendEvent("violations", "frp_payment", "frp-invoices", numInvoicesPaid);
    //         }

    //         if (numViolationsPaid > 0) {

    //             this.browserExtensionHandlerService.sendEvent("violations", "frp_payment", "frp-violations", numViolationsPaid);
    //         }
    //     };

    //     public matTrackViolationCounts = (violations) => {

    //         const numViolations = violations.length;

    //         if (numViolations > 0) {

    //             this.browserExtensionHandlerService.sendEvent("violations", "mat_payment", "mat-violations", numViolations);
    //         }
    //     };

        

    //     private trackEvents(clickedElementId: string, idList: string[], rules: HCTRA.Constant.EventTrackingRule[]): void {

    //         const pathname = this.getPathname(new Date(), this.urlHistoryArray, this.pathnameSensitivity);
    //         let anEventHasBeenTracked = false;

    //         // TODO: improve performance; these loops can be exited early on certain conditions
    //         for (const id of idList) {

    //             for (const rule of rules) {

    //                 //const ruleIdWithHash = rule.id ? '#' + rule.id : rule.id;
    //                 const ruleIdWithHash = rule.Id;

    //                 const pageMatches = (!rule.Page && !rule.PageRegex) || (rule.Page && rule.Page === pathname) || (rule.PageRegex && (new RegExp(rule.PageRegex)).test(pathname));
    //                 const idMatches = (ruleIdWithHash && ruleIdWithHash === id) || (rule.IdRegex && (new RegExp(rule.IdRegex)).test(id));

    //                 if (pageMatches && idMatches) {

    //                     const trackData: HCTRA.Model.EventTrackingData = {
    //                         name: rule.Name,
    //                         id,
    //                         pathname
    //                     };

    //                     if (rule.TriggerIf === 'DIRECT') {

    //                         if (id === clickedElementId) {

    //                             this.trackEvent(trackData);
    //                             anEventHasBeenTracked = true;
    //                         }
    //                     }
    //                     else if (rule.TriggerIf === 'EARLIEST') {

    //                         if (!anEventHasBeenTracked) {

    //                             this.trackEvent(trackData);
    //                             anEventHasBeenTracked = true;
    //                         }
    //                     }
    //                     else if (rule.TriggerIf === 'HAS_PREDECESSOR') {

    //                         if (anEventHasBeenTracked) {

    //                             this.trackEvent(trackData);
    //                         }
    //                     }
    //                     else { // DEFAULT is to track no matter the order in the hierarchy

    //                         this.trackEvent(trackData);
    //                         anEventHasBeenTracked = true;
    //                     }
    //                 }
    //             }
    //         }
    //     }

    //     private trackEvent(data: HCTRA.Model.EventTrackingData) {

    //         this.browserExtensionHandlerService.sendEvent(data.pathname, `click-${data.name}`, data.id);
    //     }

    //     private runOnce(cb: any) {

    //         let hasRun = false;

    //         return () => {

    //             if (!hasRun) {

    //                 cb();
    //                 hasRun = true;
    //             }
    //         };
    //     }

    //     // The following is somewhat complex code designed to overcome an issue with location.pathname;
    //     //  the problem is that the page URL often changes before the "click" event listener fires, meaning a
    //     //  call to location.pathname in an event listener will return the NEW page name, when I want the OLD one.
    //     //  So I've written code to track history of page navigation and try to determine what the likeliest origin
    //     //  of the "click" event was by looking at the last 1000 milliseconds and deciding which page the user was
    //     //  on the longest, figuring that that is probably the source of the click
    //     public getPathname(initDate: Date, urlHistoryArray: UrlHistoryArray, sensitivity: number): string {

    //         let historyUrl = '';

    //         if (urlHistoryArray.length > 1) {

    //             const recentHistory = urlHistoryArray;

    //             const durationArray = [];
    //             let nextDate = initDate;
    //             let longestDurationIndex = 0;
    //             let durationSum = 0;
    //             for (let i = 0; i < recentHistory.length; i++) {

    //                 durationArray[i] = this.momentjs.duration(this.momentjs(nextDate).diff(recentHistory[i].date)).asMilliseconds();
    //                 nextDate = recentHistory[i].date;

    //                 if (durationArray[i] > durationArray[longestDurationIndex]) {

    //                     longestDurationIndex = i;
    //                 }

    //                 durationSum += durationArray[i];

    //                 if (durationSum >= sensitivity) {

    //                     break;
    //                 }
    //             }

    //             historyUrl = recentHistory[longestDurationIndex].newUrl;
    //         }
    //         else {

    //             historyUrl = urlHistoryArray[0].newUrl;
    //         }

    //         return historyUrl;
    //     }
    // }
}

(function () {

    'use strict';

    // angular.module('HCTRAModule').service('eventTrackingService', HCTRA.Service.EventTrackingService);

}());