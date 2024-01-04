declare var hctraMocks: any;

(function () {
    'use strict';

    // describe('EventTrackingService', function () {

    //     beforeEach(angular.mock.module("HCTRAModule"));

    //     let service: HCTRA.Service.EventTrackingService;
    //     const getNumInvoicesWithCollectionFeeOut = { value: 0 };
    //     const mockViolationsUtilService = {
    //             getNumInvoicesWithCollectionFee: function () {
    //                 return getNumInvoicesWithCollectionFeeOut.value;
    //             }
    //         };
    //     const mockBrowserExtensionHandlerService = {
    //             sendEvent: () => { }
    //         };
    //         //clickEventListener = null,
    //     const mockDomUtilService = {
    //             //documentAddClickEventListener: cb => clickEventListener = cb
    //             documentAddClickEventListener: cb => cb
    //         };

    //     beforeEach(angular.mock.module(function ($provide: angular.auto.IProvideService) {

    //         spyOn(mockBrowserExtensionHandlerService, 'sendEvent');

    //         $provide.value("browserExtensionHandlerService", mockBrowserExtensionHandlerService);
    //         $provide.value("violationsUtilService", mockViolationsUtilService);

    //         $provide.value("domUtilService", mockDomUtilService);
    //     }));

    //     beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {

    //         service = $injector.get<HCTRA.Service.EventTrackingService>("eventTrackingService");
    //     }));

    //     describe('violationsTrackViolationsCounts method', function () {

    //         it('should not track if no invoices', function () {
    //             getNumInvoicesWithCollectionFeeOut.value = 0;
    //             service.violationsTrackViolationCounts([]);

    //             expect(mockBrowserExtensionHandlerService.sendEvent).not.toHaveBeenCalled();
    //         });

    //         it('should track collection invoices', function () {
    //             getNumInvoicesWithCollectionFeeOut.value = 3;
    //             service.violationsTrackViolationCounts([null, null, null]);

    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(1);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'violations_payment', 'collections-invoices', 3);
    //         });

    //         it('should track non-collection invoices', function () {
    //             getNumInvoicesWithCollectionFeeOut.value = 0;
    //             service.violationsTrackViolationCounts([null, null, null]);

    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(1);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'violations_payment', 'non-collections-invoices', 3);
    //         });

    //         it('should track collection and non-collection invoices together', function () {
    //             getNumInvoicesWithCollectionFeeOut.value = 3;
    //             service.violationsTrackViolationCounts([null, null, null, null, null, null]);

    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(2);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'violations_payment', 'collections-invoices', 3);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'violations_payment', 'non-collections-invoices', 3);
    //         });
    //     });

    //     describe('suspendedAccountTrackViolationCounts method', function () {

    //         describe('FRP eligible', function () {

    //             it('should track successful FRP eligible payments if all succeed', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [
    //                         chargesByPlateFactory('AB', '1234', [null], [null]),
    //                         chargesByPlateFactory('CD', '5678', [null, null], [null, null]),
    //                         chargesByPlateFactory('EF', '9012', [null, null, null], [null, null, null])
    //                     ],
    //                     ineligibleChargesByPlateList: []
    //                 };

    //                 const response: any = {
    //                     successfulPayments: [
    //                         { label: 'AB-1234' },
    //                         { label: 'CD-5678' },
    //                         { label: 'EF-9012' }
    //                     ]
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(2);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-eligible-plate-invoices', 6);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-eligible-plate-violations', 6);
    //             });

    //             it('should track successful FRP eligible payments even if some fail', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [
    //                         chargesByPlateFactory('AB', '1234', [null], [null]),
    //                         chargesByPlateFactory('CD', '5678', [null, null], [null, null]),
    //                         chargesByPlateFactory('EF', '9012', [null, null, null], [null, null, null])
    //                     ],
    //                     ineligibleChargesByPlateList: []
    //                 };

    //                 const response: any = {
    //                     successfulPayments: [
    //                         { label: 'CD-5678' }
    //                     ]
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(2);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-eligible-plate-invoices', 2);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-eligible-plate-violations', 2);
    //             });

    //             it('should not track FRP eligible payments if none succeed', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [
    //                         chargesByPlateFactory('AB', '1234', [null], [null]),
    //                         chargesByPlateFactory('CD', '5678', [null, null], [null, null]),
    //                         chargesByPlateFactory('EF', '9012', [null, null, null], [null, null, null])
    //                     ],
    //                     ineligibleChargesByPlateList: []
    //                 };

    //                 const response: any = {
    //                     successfulPayments: []
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).not.toHaveBeenCalled();
    //             });

    //             it('should track successful FRP eligible payments for invoices w/ no violations', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [
    //                         chargesByPlateFactory('CD', '5678', [null, null], [])
    //                     ],
    //                     ineligibleChargesByPlateList: []
    //                 };

    //                 const response: any = {
    //                     successfulPayments: [
    //                         { label: 'CD-5678' }
    //                     ]
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(1);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-eligible-plate-invoices', 2);
    //             });

    //             it('should track successful FRP eligible payments for invoices w/ no violations', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [
    //                         chargesByPlateFactory('CD', '5678', [], [null, null])
    //                     ],
    //                     ineligibleChargesByPlateList: []
    //                 };

    //                 const response: any = {
    //                     successfulPayments: [
    //                         { label: 'CD-5678' }
    //                     ]
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(1);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-eligible-plate-violations', 2);
    //             });
    //         });

    //         describe('FRP ineligible', function () {

    //             it('should track successful FRP inligible payments if all succeed', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [],
    //                     ineligibleChargesByPlateList: [
    //                         chargesByPlateFactory('AB', '1234', [null], []),
    //                         chargesByPlateFactory('CD', '5678', [null, null], []),
    //                         chargesByPlateFactory('EF', '9012', [null, null, null], [])
    //                     ]
    //                 };

    //                 const response: any = {
    //                     successfulPayments: [
    //                         { label: 'AB-1234' },
    //                         { label: 'CD-5678' },
    //                         { label: 'EF-9012' }
    //                     ]
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(1);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-ineligible-plate-invoices', 6);
    //             });

    //             it('should track successful FRP inligible payments even if some fail', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [],
    //                     ineligibleChargesByPlateList: [
    //                         chargesByPlateFactory('AB', '1234', [null], []),
    //                         chargesByPlateFactory('CD', '5678', [null, null], []),
    //                         chargesByPlateFactory('EF', '9012', [null, null, null], [])
    //                     ]
    //                 };

    //                 const response: any = {
    //                     successfulPayments: [
    //                         { label: 'CD-5678' }
    //                     ]
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(1);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-ineligible-plate-invoices', 2);
    //             });

    //             it('should not track FRP ineligible payments if none succeed', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [],
    //                     ineligibleChargesByPlateList: [
    //                         chargesByPlateFactory('AB', '1234', [null], [null]),
    //                         chargesByPlateFactory('CD', '5678', [null, null], [null, null]),
    //                         chargesByPlateFactory('EF', '9012', [null, null, null], [null, null, null])
    //                     ]
    //                 };

    //                 const response: any = {
    //                     successfulPayments: []
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).not.toHaveBeenCalled();
    //             });

    //             it('should track successful FRP ineligible payments for invoices w/ no violations', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [],
    //                     ineligibleChargesByPlateList: [
    //                         chargesByPlateFactory('CD', '5678', [null, null], [])
    //                     ]
    //                 };

    //                 const response: any = {
    //                     successfulPayments: [
    //                         { label: 'CD-5678' }
    //                     ]
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(1);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-ineligible-plate-invoices', 2);
    //             });

    //             it('should not track FRP ineligible payments for violations w/ no invoices because this situation should not exist', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [],
    //                     ineligibleChargesByPlateList: [
    //                         chargesByPlateFactory('CD', '5678', [], [null, null])
    //                     ]
    //                 };

    //                 const response: any = {
    //                     successfulPayments: [
    //                         { label: 'CD-5678' }
    //                     ]
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).not.toHaveBeenCalled();
    //             });
    //         });

    //         describe('FRP eligible and FRP ineligible together', function () {

    //             it('should track all three if successful', function () {

    //                 const request: any = {
    //                     frpChargesByPlateList: [
    //                         chargesByPlateFactory('AB', '1234', [null, null], [null])
    //                     ],
    //                     ineligibleChargesByPlateList: [
    //                         chargesByPlateFactory('CD', '5678', [null, null, null], [])
    //                     ]
    //                 };

    //                 const response: any = {
    //                     successfulPayments: [
    //                         { label: 'AB-1234' },
    //                         { label: 'CD-5678' }
    //                     ]
    //                 };

    //                 service.suspendedAccountTrackViolationCounts(request, response);

    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(3);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-eligible-plate-invoices', 2);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-eligible-plate-violations', 1);
    //                 expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'suspended_payment', 'frp-ineligible-plate-invoices', 3);
    //             });
    //         });

    //         function chargesByPlateFactory(licensePlateState: string, licensePlateNumber: string, invoices: any[], violations: any[]) {
    //             return { licensePlateState, licensePlateNumber, frpCheckEligibilityResult: { invoices, violations } };
    //         }
    //     });

    //     describe('frpTrackViolationCounts method', function () {

    //         it('should track FRP violations and invoices if both present', function () {

    //             service.frpTrackViolationCounts(invoicedViolationsFactory(4, 2, 1), uninvoicedViolationsFactory(4, 2, 1));
    //             service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 1), uninvoicedViolationsFactory(0, 0, 1));
    //             service.frpTrackViolationCounts(invoicedViolationsFactory(0, 2, 0), uninvoicedViolationsFactory(0, 2, 0));
    //             service.frpTrackViolationCounts(invoicedViolationsFactory(4, 0, 0), uninvoicedViolationsFactory(4, 0, 0));

    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(8);

    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 7);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 1);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 2);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 4);

    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 7);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 1);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 2);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 4);
    //         });

    //         it('should track FRP invoices', function () {

    //             service.frpTrackViolationCounts(invoicedViolationsFactory(4, 2, 1), uninvoicedViolationsFactory(0, 0, 0));
    //             service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 1), uninvoicedViolationsFactory(0, 0, 0));
    //             service.frpTrackViolationCounts(invoicedViolationsFactory(0, 2, 0), uninvoicedViolationsFactory(0, 0, 0));
    //             service.frpTrackViolationCounts(invoicedViolationsFactory(4, 0, 0), uninvoicedViolationsFactory(0, 0, 0));

    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(4);

    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 7);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 1);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 2);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-invoices', 4);
    //         });

    //         it('should track FRP violations', function () {

    //             service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 0), uninvoicedViolationsFactory(4, 2, 1));
    //             service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 0), uninvoicedViolationsFactory(0, 0, 1));
    //             service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 0), uninvoicedViolationsFactory(0, 2, 0));
    //             service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 0), uninvoicedViolationsFactory(4, 0, 0));

    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(4);

    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 7);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 1);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 2);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'frp_payment', 'frp-violations', 4);
    //         });

    //         it('should not track if no invoices or violations; should not occur', function () {

    //             service.frpTrackViolationCounts(invoicedViolationsFactory(0, 0, 0), uninvoicedViolationsFactory(0, 0, 0));

    //             expect(mockBrowserExtensionHandlerService.sendEvent).not.toHaveBeenCalled();
    //         });

    //         function invoicedViolationsFactory(numHData: number, numFData: number, numMData: number) {

    //             return {
    //                 hData: genNullArray(numHData),
    //                 fData: genNullArray(numFData),
    //                 mData: genNullArray(numMData)
    //             };
    //         }

    //         function uninvoicedViolationsFactory(numHData: number, numFData: number, numMData: number) {

    //             return {
    //                 invoices: {
    //                     hData: genNullArray(numHData),
    //                     fData: genNullArray(numFData),
    //                     mData: genNullArray(numMData)
    //                 }
    //             };
    //         }

    //         function genNullArray(nullCount: number) {

    //             const outArr: null[] = [];
    //             for (let i = 0; i < nullCount; i++) {
    //                 outArr.push(null);
    //             }

    //             return outArr;
    //         }
    //     });

    //     describe('matTrackViolationCounts method', function () {

    //         it('should track successful MAT violation payments', function () {

    //             service.matTrackViolationCounts([null, null]);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledTimes(1);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).toHaveBeenCalledWith('violations', 'mat_payment', 'mat-violations', 2);
    //         });

    //         it('should not track unsuccessful MAT violation payments', function () {

    //             service.matTrackViolationCounts([]);
    //             expect(mockBrowserExtensionHandlerService.sendEvent).not.toHaveBeenCalled();
    //         });
    //     });

    //     describe('getPathname method', function () {

    //         it('should return the first history entry url if only one history entry exists', function () {

    //             const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 999), [
    //                 { oldUrl: 'old_url', newUrl: 'new_url', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
    //             ], 1000);

    //             expect(pathname).toBe('new_url');

    //             const pathname2 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 1000), [
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
    //             ], 1000);

    //             expect(pathname2).toBe('new_url2');

    //             const pathname3 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 1001), [
    //                 { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
    //             ], 1000);

    //             expect(pathname3).toBe('new_url3');
    //         });

    //         it('should return the second history entry url if the first entry is less than the sensitivity and less than the second', function () {

    //             const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 1000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 501) }, // on this page for less time
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // on this page for more time
    //             ], 1000);

    //             expect(pathname).toBe('new_url2');
    //         });

    //         it('should return the first history entry url if the first entry is longer duration than the the second', function () {

    //             const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 1000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 499) }, // on this page for more time
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // on this page for less time
    //             ], 1000);

    //             expect(pathname).toBe('new_url1');
    //         });

    //         it('should return the first history entry url if the first entry exceeds the sensitivity, even if the second is longer duration', function () {

    //             const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 1999) }, // on this page past the sensitivity
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // on this page for more time
    //             ], 1000);

    //             expect(pathname).toBe('new_url1');

    //             const pathname2 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2000) }, // on this page within sensitivity
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // on this page for more time
    //             ], 1000);

    //             expect(pathname2).toBe('new_url1');
    //         });

    //         it('should return the second history entry url if the first entry does not exceed the sensitivity, even if the second causes the sum to exceed', function () {

    //             const pathname2 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2001) }, // on this page within sensitivity
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // on this page for more time
    //             ], 1000);

    //             expect(pathname2).toBe('new_url2');
    //         });

    //         it('should return the later history entry urls if the first are lower duration and don\'t exceed the sensitivity', function () {

    //             const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2500) },
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2001) },
    //                 { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
    //             ], 1000);

    //             expect(pathname).toBe('new_url3');

    //             const pathname2 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2999) },
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2998) },
    //                 { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
    //             ], 1000);

    //             expect(pathname2).toBe('new_url3');

    //             const pathname3 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2999) },
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2998) },
    //                 { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 2997) },
    //                 { oldUrl: 'old_url4', newUrl: 'new_url4', date: new Date(2000, 5, 8, 0, 0, 0, 2996) },
    //                 { oldUrl: 'old_url5', newUrl: 'new_url5', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
    //             ], 1000);

    //             expect(pathname3).toBe('new_url5');
    //         });

    //         it('should select middle entry if it has the longest duration', function () {

    //             const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2999) },
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2998) },
    //                 { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 2500) },
    //                 { oldUrl: 'old_url4', newUrl: 'new_url4', date: new Date(2000, 5, 8, 0, 0, 0, 2499) },
    //                 { oldUrl: 'old_url5', newUrl: 'new_url5', date: new Date(2000, 5, 8, 0, 0, 0, 2498) }
    //             ], 1000);

    //             expect(pathname).toBe('new_url3');
    //         });

    //         it('should not consider entries beyond the sensitivity, even if they are longer in duration', function () {

    //             const pathname = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2999) },
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2998) },
    //                 { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 2000) }, // duration of 1999, pushes out of sensitivity
    //                 { oldUrl: 'old_url4', newUrl: 'new_url4', date: new Date(2000, 5, 8, 0, 0, 0, 0) } // duration of 2000, outside sensitivity
    //             ], 1000);

    //             expect(pathname).toBe('new_url3');

    //             const pathname2 = service.getPathname(new Date(2000, 5, 8, 0, 0, 0, 3000), [
    //                 { oldUrl: 'old_url1', newUrl: 'new_url1', date: new Date(2000, 5, 8, 0, 0, 0, 2999) },
    //                 { oldUrl: 'old_url2', newUrl: 'new_url2', date: new Date(2000, 5, 8, 0, 0, 0, 2998) },
    //                 { oldUrl: 'old_url3', newUrl: 'new_url3', date: new Date(2000, 5, 8, 0, 0, 0, 2000) },
    //                 { oldUrl: 'old_url4', newUrl: 'new_url4', date: new Date(2000, 5, 8, 0, 0, 0, 2000) },
    //                 { oldUrl: 'old_url5', newUrl: 'new_url5', date: new Date(2000, 5, 8, 0, 0, 0, 0) }
    //             ], 1000);

    //             expect(pathname2).toBe('new_url3');
    //         });
    //     });
    // });
}());