import { AddressInfo, BankDetails, CreditCardDetails } from 'common/models';
import { BaseResponse } from 'common/interfaces';
import { PlateApiInformation } from './services';

export interface PaymentRequest {
    eftPaymentMethod: BankDetails | AddressInfo;
    creditCardPaymentMethod: CreditCardDetails | AddressInfo;
    creditCard: boolean;
    paymentPlanId?: number;
    invoiceNumber?: number;
    amount: number;
    email: string;
    licensePlate?: string;
    licenseState?: string;

    accountPayment?: boolean;
    accountPaymentAmount?: number;
}

export interface PaymentResponse extends BaseResponse {
    currentBalanceObj?: number;
    currentPaymentPlanBalanceObj?: number;
    originalRequest: PaymentRequest;
}

export interface PdfCmsContent {
    pdfDownloadText: string;
    pdfDownloadedMessage: string;
    pdfError: string;
    pdfProcessingMesssage: string;
}

export interface CmsGridContent {
    planActiveTitle: string;
    planInactiveTitle: string;
    infoIcon: string;
    settlementAmmountText: string;
    paidAmmountText: string;
    balanceDueText: string;
    paymentPlanTerms: string;
    activePlanToolTipdecription: string;
    defaultedTitle: string;
    defaultedBody: string;

    balanceToolTip: string;
    paymentPlanTermsLink: string;

    paymentLateText: string;
    paymentLatePopup: string;
}

export interface PlateSearchResponse extends BaseResponse {
    plates: PlateApiInformation[];
}

export interface PlateSearchRequest {
    InvoiceNumber?: string;
    LicenseState: string;
    LicensePlate: string;
    PaymentPlanId?: string;
}

export interface StateStackItem {
    name: string;
}
