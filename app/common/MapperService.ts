module HCTRA.Service {
    "use strict";

    export class MapperService implements IMapperService {

        static $inject = ["releaseToggle", "momentService"];

        constructor(private releaseToggle: any, private momentService: HCTRA.Service.IMomentService) { }

        mapToAccountActivityDTO = (data: HCTRA.Model.UnformattedAccountActivityDTO, vehicleData: any) => {
            var accountActivityDTO: HCTRA.Model.AccountActivityDTO = new HCTRA.Model.AccountActivityDTO();
            accountActivityDTO.page = data.page;
            accountActivityDTO.dateFrom = this.momentService.moment(data.dateFrom).format("L");
            accountActivityDTO.dateTo = this.momentService.moment(data.dateTo).format("L");
            accountActivityDTO.vehicle = vehicleData.text ? vehicleData.text : "";
            accountActivityDTO.vehicleNickNameType = vehicleData.value ? vehicleData.value : "";
            accountActivityDTO.transaction = data.transaction ? data.transaction : "";
            accountActivityDTO.dateRangeType = data.dateRangeType ? data.dateRangeType : "";
            // console.log(accountActivityDTO);
            return accountActivityDTO;
        };

        mapToViolationsData = (invoice, paymentAmount?) => {
            var violationsData: HCTRA.Model.ViolationsData = {
                adjustmentEligible: invoice.adjustmentEligible,
                adminFee: invoice.adminFee,
                agency: invoice.agency,
                alreadyPaid: invoice.alreadyPaid,
                amountAlreadyPaid: invoice.amountAlreadyPaid,
                amountDue: (this.releaseToggle.r2p3_rtvIsActive === "true" ?
                    (invoice.totalDue - invoice.amountAlreadyPaid) :
                    (invoice.totalDue - invoice.amountAlreadyPaid - invoice.paymentsPending)),
                collectionFee: invoice.collectionFee,
                currentAmountDue: invoice.currentAmountDue,
                dueDate: invoice.dueDate,
                finalAmountDue: invoice.finalAmountDue,
                invoiceDate: invoice.invoiceDate,
                invoiceDue: invoice.invoiceDue,
                invoiceId: invoice.invoiceId,
                invoiceNumber: invoice.invoiceId,
                issueDate: invoice.issueDate,
                itemType: invoice.itemType,
                onlineDiscountEligible: invoice.onlineDiscountEligible,
                otherFee: invoice.otherFee,
                pastPayments: invoice.pastPayments,
                payment: parseFloat(invoice.payment ? invoice.payment : paymentAmount),
                paymentsPending: invoice.paymentsPending,
                paymentType: invoice.paymentType ?
                    invoice.paymentType :
                    parseFloat(invoice.currentAmountDue) - parseFloat(invoice.payment) < 0.009 ? "PAY_IN_FULL" : "SPECIFY_AMOUNT",
                payNow: parseFloat(invoice.payment ? invoice.payment : paymentAmount),
                remainingBalance: parseFloat(invoice.currentAmountDue) - parseFloat(invoice.payment),
                totalDue: invoice.totalDue,
                waiverEligible: invoice.waiverEligible,
                invoicePreviousPayment: undefined
            };

            if (violationsData.agency === "HCTRA") {
                violationsData.agency = "h";
            } else if (violationsData.agency === "MCTRA") {
                violationsData.agency = "m";
            } else if (violationsData.agency === "FBGPTRA") {
                violationsData.agency = "f";
            }

            if ("invoicePreviousPayment" in invoice) {
                violationsData.invoicePreviousPayment = invoice.invoicePreviousPayment;
            }

            return violationsData;
        };
    }
}

(function (): void {

    "use strict";

    angular.module("HCTRAModule").service("mapperService", HCTRA.Service.MapperService);
} ());