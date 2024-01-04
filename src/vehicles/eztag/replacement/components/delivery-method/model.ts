import { SiteCoreItem } from 'cms/cms.module';

export interface IDeliveryMethodContent extends SiteCoreItem {
    summaryTitle: string;
    summaryDescription: string;
    reasons: string;
    detailsTitle: string;
}
