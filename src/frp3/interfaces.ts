import { BankDetails, CreditCardDetails, AddressInfo, BillingType } from 'common/models';
//import { Selectable } from './detailsRefresh';
import { IInvoiceOverPaymentCmsData } from '../violationsCommon/interfaces/invoiceOverpaymentCmsdata.interface';
import { IAcctSearchResponse } from '../violationsCommon/services/webapi/interfaces/webapi.interface';

export interface BillingMethod {
    eftPaymentMethod: BankDetails;
    creditCardPaymentMethod: CreditCardDetails;
    address: AddressInfo;
    billingType?: BillingType;
    isInternational?: boolean;
}

export interface EOViolationPlateContainer extends IAcctSearchResponse {
    partialPayments: boolean;
    eftPaymentMethod: BankDetails;
    creditCardPaymentMethod: CreditCardDetails & AddressInfo;
    isCreditCard: boolean;
    email: string;
    paymentAmount: number;
    remainingBalance: number;
    violationsFlowName?: string;
    assocPlatesPaymentAmount?: number;
    assocPlatesRemainingAmount?: number;
}

export interface EOViolation {
    agencyId: number;
    agencyName: string;
    mobileAgencyName: string;
    violationDate: string;
    location: string;
    tollAmount: number;
    originalTollAmount: number;
    violationId: number;
    paymentAmount: number;
    isInvoice?: boolean;
}

export interface EOViolationInvoice {
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
    violations: EOViolation[];
    paymentAmount: number;
    excusalAmt: number;
    hasCAOFineEstimate: boolean;
    caoFineEstimate: number;
    isInvoice?: boolean;
}

export interface EOViolationPlate {
    agencies: EOAgencyInformation[];
    previouslyPaidInvoices: EOViolationInvoice[];
    invoices: EOViolationInvoice[];
    uninvoicedViolations: EOViolation[];
    invoicesAndViolations: (EOViolationInvoice | EOViolation)[];
    discountProgramCode: number;
    violatorID: number;
    totalFeesDiscounted: number;
    serviceFee: number;
    plateDueAfterDiscount: number;
    plateDueBeforeDiscount: number;
    isNewEzTagAccountEligibile: boolean;
    newEzTagAccountDiscount: number;
    newEzTagAccountStartingBalance: number;
    newEzTagAccountEZTagFee: number;
    newEzTagAccountPlateTotal: number;
    hasPaymentPlan: boolean;
    licensePlate: string;
    licenseState: string;
    totalPaymentAmount: number;
    totalUninvoicedAmount: number;
    totalInvoicedAmount: number;
    accountVehicleId: number;
    totalSelected?: number;
    remainingBalance?: number;
    hasCAOFineEstimates: boolean;
}

export interface EOAgencyInformation {
    agencyName: string;
    mobileAgencyName: string;
    agencyID: number;
    discountTotal: number;
    totalDueBeforeDiscount: number;
    totalDueAfterDiscount: number;
    discountProgram: string;
    excusalCode: string;
    programFees: number;
    paymentAmount: number;
}

export interface EOCreateAccountFromViolationsTotals {
    totalFeesDiscountedDontCreateAccount: number;
    createAccountDiscount: number;
    createAccountStartingBalance: number;
    createAccountEZTagFee: number;
    createAccountPlateTotal: number;
    dontCreateAccountPlateTotal: number;
    totalUninvoicedAmount: number;
    totalViolationsDue: number;
    serviceFee: number;
}

//Ensures the object is in acceptable format for the API call in Sumamry Page.
interface AddViolatorBillingInfoRequest {
    creditCardPaymentMethod: (CreditCardDetails & AddressInfo); //API Obj Type: CreditCardDetails 
    eftPaymentMethod: (BankDetails & AddressInfo); //API Obj Type: BankAccountDetailsWithNameAndAddress
    isCreditCard: boolean;
}

export interface BillingMethod {
    eftPaymentMethod: BankDetails;
    creditCardPaymentMethod: CreditCardDetails;
    address: AddressInfo;
    billingType?: BillingType;
    autoPay?: boolean;
    isInternational?: boolean;
}

//export interface SelectableViolationPlate extends ViolationPlate, Selectable {
//    invoices: (ViolationInvoice & Selectable)[];
//    uninvoicedViolations: (Violation & Selectable)[];
//    invoicesAndViolaltions: ((Violation | ViolationInvoice) & Selectable)[];
//}

export interface FrameCmsData {
    Step1: string;
    Step2: string;
    Step3: string;
    Step4: string;
    Title: string;
}

export interface LandingPageCmsData {
    Title: string;
    ShortDescription: string;
    Children: any[];
}

export interface CloseImageCMSData {
    Image: string;
}

export interface PaymentCmsContent {
    Title: string;
    ShortDescription: string;
    PaymentMethodHeader: string;
    BillingAddressHeader: string;
}

export interface IPlate {
    // eslint-disable-next-line id-blacklist
    number: string;
    state: string;
}

export interface PrevPaidInvoicesData {
    previouslyPaidInvoices: EOViolationInvoice[];
    plate: IPlate;
}

export interface InjectionValues {
    invoiced: EOViolationInvoice;
    plate: IPlate;
    isPreviousPaid: boolean;
}

export interface CmsChild {
    DISCOUNT_ENUM: string;
    DISCOUNT_STRING: string;
    ItemName: string;
}

export interface GridDiscountCmsData extends CmsChild {
    ItemName: string;
    Title: string;
    LongDescription: string;
    ShortDescription: string;
    SUMMARY_HEADER: string;
    DISCOUNT_INVOICE_HEADER: string;
    DISCOUNT_VIOLATIONS_HEADER: string;
    DISCOUNT_OUTSTANDING_HEADER: string;
    IMPORTANT_REMINDER: string;
    Children?: any;
    PAYMENT_SUMMARY_INFO?: string;

}

export interface SummaryCmsData extends CmsChild {
    ShortDescription: string;
    LongDescription: string;
    SUMMARY_HEADER: string;
    LABEL_TOTAL: string;
    LABEL_SELECTED: string;
    LABEL_REMAINING: string;
    LABEL_ADMIN_FEE: string;
    LABEL_DISCOUNT: string;
}

export interface PrevPaidCmsData extends CmsChild {
    ShortDescription: string;
    LongDescription: string;
    SUMMARY_HEADER: string;
    LABEL_REMAINING_BALANCE: string;
    LABEL_TOTAL_PAYMENT: string;
    NO_INVOICES: string;
    HEADER: string;
}

export interface GridPageCmsData extends IInvoiceOverPaymentCmsData {
    Title: string;
    LongDescription: string;
    ShortDescription: string;
    LABEL_ORIGINAL_DUE: string;
    LABEL_DISCOUNT: string;
    LABEL_ADMIN_FEE: string;
    LABEL_TOTAL_DUE: string;
    LABEL_SELECTED_AMT: string;
    LABEL_DISCOUNT_TOOLTIP: string;
    TOAST_NO_INVOICES_SELECTED: string;
    PREVIOUSLY_PAID_HEADER: string;
    PAGE_HEADER: string;
    IMPORTANT_REMINDER_HEADER: string;
    CAO_FEE_INFO: string;
    CAO_TOOL_TIP: string;
    LABEL_REMAINING_BALANCE: string;
    LABEL_TOTAL_PAYMENT: string;
    Children: (GridDiscountCmsData | SummaryCmsData | PrevPaidCmsData)[];
    CAF_TOOL_TIP_TITLE: string;
    ASSOCIATED_PLATES_HEADER: string;
    ASSOCIATED_PLATES_DESC: string;
}

export interface PaymentPlanToolTip {
    PAY_PLAN_TOOLTIP_TEXT: string;
    PAY_PLAN_TOOLTIP_LINK: string;
    PAY_PLAN_TOOLTIP_KIOSK_TEXT: string;
}

export interface ConfirmPageCmsData {
    Title: string;
    EMAIL_TITLE: string;
    EMAIL_INSTRUCTION: string;
    BILLING_INFO_HEADER: string;
    EMAIL_HEADER: string;
    TOTAL_PAYMENT: string;
}

export interface VeriTransCmsData extends CmsChild {
    ShortDescription: string;
    LongDescription: string;
}
