import { IViolation } from '../components/violationsDetails/interfaces/violation.interface';

export interface IViolationInvoice {
    openAdminFeesDue: number;
    openTollAmountDue: number;
    openCollectionFeesDue: number;
    openOtherFeesDue: number;
    agencyId: number;
    agencyName: string;
    mobileAgencyName: string;
    mailedDate: string;
    dueDate: string;
    status: string;
    invoiceId: string;
    invoiceNum: string;
    invoiceDueAfterDiscount: number;
    invoiceDueBeforeDiscount: number;
    invoiceLevelDiscount: number;
    originalTollAmount: number;
    originalAdminFees: number;
    originalCollectionFees: number;
    originalOtherFees: number;
    originalInvoiceTotal: number;
    previouslyPaid: number;
    newEzTagAccountInvoiceDiscountAmt: number;
    newEzTagAccountInvoiceDueAfterDiscountAmt: number;
    violations: IViolation[];
    paymentAmount: number;
    excusalAmt: number;
    hasCAOFineEstimate: boolean;
    caoFineEstimate: number;
    isInvoice?: boolean;
    accountId?: number;
    isPartialPay?: boolean;
}
