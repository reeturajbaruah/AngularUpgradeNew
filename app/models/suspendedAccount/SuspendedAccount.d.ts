declare module HCTRA.Model {

    export interface SuspendedAccountTypeInfo {

        acctActivity: string;
        violationFlag: boolean;
        suspensionFlag: boolean;
        balanceAmt: number;
    }

    export interface CheckAccountSalEligibilityRequest {
        accountId: number;
    }

    export interface CheckSalEligibilityType {
        invoiceNum: string;
        jurisdiction: string;
        licPlateNum: string;
    }

    export interface CheckAccountSalEligibilityResponse extends IBaseResponse {
        isEligible: boolean;
        frpChargesByPlateList: FrpChargesByPlate[];
        ineligibleChargesByPlateList: FrpChargesByPlate[];
        totalAmountDueBeforeFeeReduction: number;
        totalFeesBeingReduced: number;
        totalFrpServiceFee: number;
        totalFeeReducedAmountDue: number;
        accountLevelBalance: number;
        rebillAmount: number;
        finalAmountOwed: number;
        numberOfEligiblePlatesWithInvoices: number;
        serviceFeePerPlate: number
    }

    // TODO: replace CheckAccountSalEligibilityResponse with this and remove 'PinkLetter'
    export interface CheckAccountEligibilityResponse extends IBaseResponse, CheckAccountSalEligibilityResponse {
        cfdpChargesByPlateList: FrpChargesByPlate[];
        numberOfEligibleCfdpPlatesWithInvoices: number;
        numberOfEligibleFrpPlatesWithInvoices: number;
        totalCfpdFeesReduced: number;
        totalFrpFeesReduced: number;
    }

    export interface FrpChargesByPlate {
        licensePlateState: string;
        licensePlateNumber: string;
        frpCheckEligibilityResult: FrpCheckEligibilityResult;
    }

    export interface FrpCheckEligibilityResult {
        violations: MissedATollViolation[];
        invoices: ViolationInvoiceNewHeader[];
        //ineligibleInvoices: ViolationInvoiceNewHeader[];
        isEligible: boolean;
        lastSalPerformedDate: Date;
        serviceFee: number;
        allInvoiceLevelFees: number;
        totalInvoicedAmount: number;
        totalUninvoicedAmount: number;
        finalAmountOwed: number;
    }

    export interface MissedATollViolation {
        agency: string;
        agencyId: number;
        balance: number;
        eventDateTime: string;
        eventLocation: string;
        inPayment: boolean;
        violationId: number;
    }

    export interface ViolationInvoiceNewHeader {
        invoiceNumber: string;
        dueDate: Date;
        invoiceDate: Date;
        amountDue: number;
        remainingBalance: number;
        invoiceId: string;
        invoiceDue: number;
        amountAlreadyPaid: number;
        paymentsPending: number;
        adminFee: number;
        onlineDiscountEligible: boolean;
        pastPayments: number;
        payment: number;
        waiverEligible: boolean;
        adjustmentEligible: boolean;
        agency: string;
        collectionFee: number;
        otherFee: number;
        totalDue: number;
        alreadyPaid: number;
        currentAmountDue: number;
        finalAmountDue: number;
        inPayment: boolean;
        waveFees: boolean
        addServiceFee: boolean;
        issueDate: Date;
        itemType: string;
        violationDocId: number;
        status: string;
        violations: ViolationListing[];
    }

    export interface ViolationListing {
        amount: number;
        date: Date;
        location: string;
    }

    export interface SuspendedAccountViolationSummaryControllerScope extends ng.IScope {
        frpChargesByPlateList: FrpChargesByPlate[];
        ineligibleChargesByPlateList: FrpChargesByPlate[];
        totalAmountDueBeforeFeeReduction: number;
        totalFeesBeingReduced: number;
        totalFrpServiceFee: number;
        totalFeeReducedAmountDue: number;
        accountLevelBalance: number;
        rebillAmount: number;
        finalAmountOwed: number;
        numberOfEligiblePlatesWithInvoices: number;
        serviceFeePerPlate: number;
        negativeBalanceToolTipPrimary: string;
        negativeBalanceToolTipSecondary: string;
        gridIsLoading: boolean;

        combinedChargesByPlateList: FrpChargesByPlate[];
    }

    export interface FullUnsuspensionPaymentRequest {
        accountNumber: string;
        accountType: string;
        acctId: number;
        address1: string;
        address2: string;
        cardNumber: string;
        cardType: string;
        city: string;
        country: string;
        expMonth: string;
        expYear: string;
        name: string;
        paypageRegistrationId: string;
        omniToken: string;

        payType: string;
        plus4: string;
        routingNumber: string;
        state: string;
        zip: string;
        frpChargesByPlateList: FrpChargesByPlate[];
        ineligibleChargesByPlateList: FrpChargesByPlate[];
        outstandingAccountBalance: number;
        replenishmentAmount: number;
        isEligible: boolean;
    }

    // TODO: replace FullUnsuspensionPaymentRequest with this and remove 'PinkLetter'
    export interface FullUnsuspensionPaymentPinkLetterRequest {
        accountNumber: string;
        accountType: string;
        acctId: number;
        address1: string;
        address2: string;
        cardNumber: string;
        cardType: string;
        city: string;
        country: string;
        expMonth: string;
        expYear: string;
        name: string;
        paypageRegistrationId: string;
        omniToken: string;

        payType: string;
        plus4: string;
        routingNumber: string;
        state: string;
        zip: string;
        cfdpChargesByPlateList: FrpChargesByPlate[];
        frpChargesByPlateList: FrpChargesByPlate[];
        ineligibleChargesByPlateList: FrpChargesByPlate[];
        outstandingAccountBalance: number;
        replenishmentAmount: number;
        isEligible: boolean;
    }

    export interface FullUnsuspensionPaymentResponse extends IBaseResponse {
        successfulPayments: UnsuspensionPaymentResult[];
        failedPayments: UnsuspensionPaymentResult[];
        paymentsWereSuccessful: boolean;
        totalAmountPaid: number;
        totalAmountStillOwed: number;
        paymentResponse: HCTRA.Model.PaymentResponse;
    }

    export interface UnsuspensionPaymentResult {
        label: string;
        amount: number;
        paymentWasSuccessful: boolean;
    }

    export interface PaymentResponse extends IBaseResponse {
        acctId: number;
        companyName: string;
        currentBalanceObj: CurrentBalanceObj;
        driverLic: string;
        driverLicState: string;
        firstName: string;
        isInvoiced: boolean;
        lastName: string;
        suspensionFlag: boolean;
    }

    export interface CurrentBalanceObj {
        currentBalance: number;
    }

    export interface SuspendedAccountGetReceiptDataResponse extends IBaseResponse {
        billingInfo: BillingInfo;
        ezTags: Vehicle;
        ezPlates: Vehicle;
    }

    export interface SuspendedAccountReceiptModalContent {
        modalParentCmsContent: string;
        billingInfoSectionCmsContent: string;
        vehiclesSectionCmsContent: string;
        paymentMethodsCmsContnet: string;
    }

    export interface SuspendedAccountProcessedCmsContent {
        modalParentCmsContent: HCTRA.Model.ModalParentCmsContentDeserialized;
        billingInfoSectionCmsContent: HCTRA.Model.BillingInfoSectionCmsContentDeserialized;
        vehiclesSectionCmsContent: HCTRA.Model.VehiclesSectionCmsContentDeserialized;
        paymentMethods: HCTRA.Model.PaymentMethodsList;
    }

    export interface GetViolationSummaryCmsContentResponse extends IBaseResponse {
        cmsContent: SuspendedAccountViolationSummaryCmsContent
    }

    export interface SuspendedAccountViolationSummaryCmsContent {
        adminFeeInformation: string;
        adminFee: string;
        outstandingAccountInformation: string;
        feeReductionInformation: string;
        feeReductionProgram: string;
        collectionFeeDiscountProgram: string;
        paymentSummaryPinkLetter: string;
        paymentSummarySentALetter: string;
        paymentSummaryCombination: string;
        paymentSummaryIneligible: string;
        paymentSummary: string;
    }

    export type ModalParentCmsContentDeserialized = { Title: string, Parameters: { [key: string]: string } };
    export type BillingInfoSectionCmsContentDeserialized = { Title: string };
    export type VehiclesSectionCmsContentDeserialized = { Title: string, ShortDescription: string, LongDescription: string };
    export type PaymentMethodsList = { Label: string, Image: string }[];
}