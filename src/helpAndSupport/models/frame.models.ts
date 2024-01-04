import { IContactUsCms } from './contact-us.models';
import { ITopFaqCms } from './top-faq.models';

export interface IHelpAndSupportCms {
    Children: any[];
    frameCms: IFrameCms;
    contactUsCms: IContactUsCms;
    topFaqCms: ITopFaqCms;
}

export interface IFrameCms {
    Title: string;
    contactUsTab: string;
    topFiveFaqTab: string;
    documentsTab: string;
    storeLocatorTab: string;
}
