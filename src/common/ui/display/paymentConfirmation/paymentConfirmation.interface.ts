
export interface ConfirmContent {
    paymentDetails: string;
}

export interface IPaymentConfirmConfig {
    header: string;
    paymentDetails: IPaymentDetails;
    totalPaymentAmt: number;
}

export interface IPaymentDetails {
    header: { label: string; showEditLink: boolean };
    labels: Labels;
    showAccountNumber: boolean;
}

export enum Labels {
    name = 'Name',
    paymentMethod = 'Payment Method',
    cardNumber = 'Card Number',
    expirationDate = 'Expiration Date',
    routingNumber = 'Routing Number',
    accountNumber = 'Account Number',
    address = 'Address',
    totalPaymentAmt = 'Total Payment Amount',
    paymentDate = 'Payment Date'
}
