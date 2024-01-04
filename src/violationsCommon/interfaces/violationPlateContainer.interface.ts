import { IViolationPlate } from './violationPlate.interface';
import { BankDetails, CreditCardDetails, AddressInfo, BillingType } from 'common/models';

export interface IViolationPlateContainer {
    plate: IViolationPlate;
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
