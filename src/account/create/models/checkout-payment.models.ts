import { AddressInfo, BankDetails, BillingType, CreditCardDetails } from 'common/models';

export interface ICheckoutPaymentRes {
    tagSalesAmt: number;
    depositAmt: number;
    totalAmt: number;
    transactionId: number;
    tagCostExists: boolean;
    lowBalanceAmt: number;
    rebillAmt: number;
    isCashPayment?: boolean;
    credit: CreditCardDetails & AddressInfo ;
    eft: BankDetails & AddressInfo;
    selectedBillingType?: BillingType | string;
    isOnetimePayment?: boolean;
   }


export type IMakePaymentReq = {
    transactionId: number;
    deliveryMethod: string;
} & ICheckoutPaymentRes;