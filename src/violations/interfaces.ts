import { BankDetails, CreditCardDetails, AddressInfo, BillingType } from 'common/models';
import { Selectable } from './detailsRefresh';

export interface BillingMethod {
    eftPaymentMethod: BankDetails;
    creditCardPaymentMethod: CreditCardDetails;
    address: AddressInfo;
    billingType?: BillingType;
    isInternational?: boolean;
}

export interface ViolationPlateContainer {
    plate: ViolationPlate;
    invoiceSearchNum: string;
    partialPayments: boolean;
    eftPaymentMethod: BankDetails;
    creditCardPaymentMethod: CreditCardDetails & AddressInfo;
    isCreditCard: boolean;
    email: string;
    paymentAmount: number;
    remainingBalance: number;
    violationsFlowName?: string;
}

export interface Violation {
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

export interface ViolationInvoice {
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
    violations: Violation[];
    paymentAmount: number;
    excusalAmt: number;
    hasCAOFineEstimate: boolean;
    caoFineEstimate: number;
    isInvoice?: boolean;
}

export interface ViolationPlate {
    agencies: AgencyInformation[];
    previouslyPaidInvoices: ViolationInvoice[];
    invoices: ViolationInvoice[];
    uninvoicedViolations: Violation[];
    invoicesAndViolations: (ViolationInvoice | Violation)[];
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

export interface AgencyInformation {
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

export interface CreateAccountFromViolationsTotals {
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

export interface SelectableViolationPlate extends ViolationPlate, Selectable {
    invoices: (ViolationInvoice & Selectable)[];
    uninvoicedViolations: (Violation & Selectable)[];
    invoicesAndViolaltions: ((Violation | ViolationInvoice) & Selectable)[];
}

export interface PrevPaidCmsData {
    DISCOUNT_ENUM: string;
    DISCOUNT_STRING: string;
    ItemName: string;
    ShortDescription: string;
    LongDescription: string;
    SUMMARY_HEADER: string;
    LABEL_REMAINING_BALANCE: string;
    LABEL_TOTAL_PAYMENT: string;
    NO_INVOICES: string;
    HEADER: string;
}
