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
}

export interface ITagInfo {
    contextDesc: string;
    display: boolean;
    link: ILinkInfo;
    motorcycleText: string;
}

export interface IPaymentDueInfo {
    totalAmtLabel?: string;
    totalAmt: number;
    tagSalesAmt: number;
    rebillTooltip: string;
    displayReplinishmentAmtSection?: boolean;
}

