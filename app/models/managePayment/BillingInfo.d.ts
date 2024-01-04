declare module HCTRA.Model {

    export interface BillingInfo {
        mailingAddress: any; // Address
        billingInfoExists: boolean;
        billingType: number;
        billingTypeCode: string;
        billingTypeDisplay: string;
        cards: any; // AccountCreditCard
        creditCard: boolean;
        eft: any; // AccountEft
        primaryCard: any; // AccountCreditCard
        transactionId: number;
    }
}