// declare var hctraMocks: any;

// (function () {
//     "use strict";

//     describe("ViolationsCalcService", function () {

//         beforeEach(angular.mock.module("HCTRAModule"));

//         var service: HCTRA.Service.IViolationsCalcService,
//             hctra = "harrisData",
//             mctra = "montData",
//             fbctra = "fortData";

//         var data = <{ [K: string]: HCTRA.Model.ViolationsData[] }>{};

//         beforeEach(() => {

//             data[hctra] = [];
//             data[mctra] = [];
//             data[fbctra] = [];
//         });
		
//         beforeEach(angular.mock.inject(function ($injector: angular.auto.IInjectorService) {
//             service = $injector.get<HCTRA.Service.IViolationsCalcService>("violationsCalcService");
//         }));

//         it("should correctly calculate for two invoices", function () {

//             // first invoice in payment (only relevant info included)
//             data[hctra].push(<HCTRA.Model.ViolationsData>{
//                 payNow: 3,
//                 invoiceDue: 80,
//                 pastPayments: 5
//             });

//             // second invoice in payment (only relevant info included)
//             data[mctra].push(<HCTRA.Model.ViolationsData>{
//                 payNow: 5,
//                 invoiceDue: 60,
//                 pastPayments: 1
//             });

//             var summary = service.calculateAllInvoicesSummary(data, 200, 10);

//             expect(summary.amountBeingPaidNow).toBe(8); // amount being paid across all invoices

//             expect(summary.originalAmountOwedForAll.invoices).toBe(200);
//             expect(summary.originalAmountOwedForAll.selectedInvoices).toBe(140);
//             expect(summary.originalAmountOwedForAll.unselectedInvoices).toBe(60);

//             expect(summary.amountOwed.beforePaymentForAll.invoices).toBe(190);
//             expect(summary.amountOwed.beforePaymentForAll.selectedInvoices).toBe(134);
//             expect(summary.amountOwed.beforePaymentForAll.unselectedInvoices).toBe(56);

//             expect(summary.amountPreviouslyPaidForAll.invoices).toBe(10);
//             expect(summary.amountPreviouslyPaidForAll.selectedInvoices).toBe(6);
//             expect(summary.amountPreviouslyPaidForAll.unselectedInvoices).toBe(4);

//             expect(summary.amountOwed.afterPaymentForAll.invoices).toBe(182);
//             expect(summary.amountOwed.afterPaymentForAll.selectedInvoices).toBe(126);
//             expect(summary.amountOwed.afterPaymentForAll.unselectedInvoices).toBe(56);
//         });
//     });
// } ());