import { SiteCoreItem } from 'cms/cms.module';

export interface IPaymentSummary {
    header: string;
    paymentContext: string;
    replenishmentAmt: IReplenishmentAmt;
    paymentDueInfo: IPaymentDueInfo;
    tagInfo: ITagInfo;
}

export interface ILinkInfo {
    linkDesc: string;
    onClickContent: SiteCoreItem;
}

export interface IReplenishmentAmt {
    link: ILinkInfo;
    isOptIn?: boolean;
}

export interface ITagInfo {
    contextDesc: string;
    display: boolean;
    link: ILinkInfo;
    motorcycleText?: string;
}

export interface IPaymentDueInfo {
    totalAmt: number;
    tagSalesAmt: number;
    rebillTooltip: string;
}

