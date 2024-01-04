import type { BillingInfo, PaymentMethodOptions, PaymentMethodInfo } from 'common/models';
import type { BaseResponse } from 'common/interfaces';
import type { SiteCoreItem } from 'cms/cms.module';

export interface FrameCmsContent {
    step1: string;
    step2: string;
    step3: string;
}

export interface CheckoutContent {
    edit: string;
    payment: string;
    paymentDate: string;
    paymentMethodSaved?: string;
}

export interface LandingCmsContent {
    Title: string;
    ShortDescription: string;
    entryTitle: string;
    amountLabel: string;
    selectionTitle: string;
}

export interface Sort {
    primary?: boolean;
}

export interface MakePaymentResponse extends BaseResponse {
    billingInfo: PaymentMethodInfo;
}

export interface PaymentInfo extends BillingInfo {
    amount: number;
}

export type PaymentMethod = BillingInfo & PaymentMethodOptions & Sort;

export type ReceiptCmsContent = SiteCoreItem & {
    thankyou: string;
    paymentAdded: string;
    payment: string;
    paymentAmount: string;
    paymentDate: string;

    paymentReceivedDate: string;
    replenishment: string;
    accountInfo: string;
    accountNumber: string;

    billingInfo: string;
    viewPaymentMethods: string;
    accountDashboard: string;
};

export enum AddToPaymentListEnum {
    Yes = 'Yes',
    No = 'No'
}