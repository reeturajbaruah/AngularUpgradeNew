import { IMailingInfo } from 'common/models';

export interface ICCInfo {
    accountBillingMethodId: number;
    hasSecondaryCard: boolean;
    creditCardNumber: string;
    type: string;
    nameOnCard: string;
    expMonth: number;
    expYear: number;
    paypageRegistrationId: string;
    omniToken: string;
    transactionId: number;
}

export type IPaymentCCRequest = ICCInfo & IMailingInfo;

export interface IBankInfo {
    accountTypeDisplay: string;
    accountNumber: string;
    account2: string;
    routingNumber: string;
    accountType: string;
    transactionId: number;
    nameOnBankAccount: string;
}

