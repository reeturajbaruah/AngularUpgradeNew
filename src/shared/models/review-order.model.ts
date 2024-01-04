import { SiteCoreItem } from 'cms/cms.module';

export interface IReviewOrderCms extends SiteCoreItem {
    DeliveryMethodTitle: string;
    PaymentSummaryTitle: string;
    PaymentContext: string;
    TagInfo: string;
    TagInfoModalLink: string;
    RebillToolTip: string;
    vehicleExsts: string;
    ezTagsContextDesc: string;
    replenishmentAmtLinkDesc: string;
    totalAmtLabel: string;
    billingInfoHeader: string;
    billingInfoEditLink: string;
    ezTagsSummaryTitle: string;
    ezTagsDetailsTitle: string;
    cashPaymentMethodDesc: string;
    ezTagNotOrdered: string;
    ezTagOrdered: string;
    motorcycleTextForOptInRep: string;
    motorcycleTextForOptOutRep: string;
    deliveryMethodTextForOptOutRep: string;
    deliveryMethodEdit: string;
}

export interface IPaymentInfoData {
    transactionId: number;
    depositAmt: number; // New minimum balance (not used in this process so ignore)
    totalAmt: number; // Total amount user will have to pay
    tagSalesAmt: number; // Pre-paid deposit
    tagAmount: number; // Tag cost; Set by the api call of calculateActivationFee
}
