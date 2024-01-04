import { Injectable } from '@angular/core';
import { CmsIds } from '../../constants';
import { IContactUsCms } from 'helpAndSupport/models/contact-us.models';
import { ITopFaqCms } from 'helpAndSupport/models/top-faq.models';
import { IFrameCms, IHelpAndSupportCms } from 'helpAndSupport/models/frame.models';
import { IDocumentsCms } from 'helpAndSupport/models/documents.models';
import { IStoreLocatorCms } from 'helpAndSupport/models/store-locator.models';

@Injectable()
export class HelpAndSupportManagerService {
    private frameCms: IFrameCms;
    private contactUsCms: IContactUsCms;
    private topFaqCms: ITopFaqCms;
    private documentsCms: IDocumentsCms;
    private storeLocatorCms: IStoreLocatorCms;

    findChildById(cmsContent: { Children: any[] }, itemId: string) {
        return cmsContent.Children.find(child => child.ItemID.toUpperCase() === itemId.toUpperCase());
    }

    loadCmsData(cmsContent: IHelpAndSupportCms) {
        this.parseMainCmsData(cmsContent);
        this.parseChildCmsData();
    }

    private parseMainCmsData(cmsContent: IHelpAndSupportCms) {
        this.frameCms = this.findChildById(cmsContent, CmsIds.Frame);
        this.contactUsCms = this.findChildById(cmsContent, CmsIds.ContactUsPage);
        this.topFaqCms = this.findChildById(cmsContent, CmsIds.TopFaqPage);
        this.documentsCms = this.findChildById(cmsContent, CmsIds.DocumentsPage);
        this.storeLocatorCms = this.findChildById(cmsContent, CmsIds.StoreLocatorPage);
    };

    private parseChildCmsData() {
        this.parseContactUsCmsData();
    };

    private parseContactUsCmsData() {
        const [emailUsCms, customerServiceCms, roadsideAssistanceCms] = this.contactUsCms.Children;

        this.contactUsCms = {
            ...this.contactUsCms,
            emailUsCms,
            customerServiceCms,
            roadsideAssistanceCms
        };
    }

    getFrameCms(): IFrameCms {
        return { ...this.frameCms };
    }

    getContactUsCms(): IContactUsCms {
        return { ...this.contactUsCms };
    }

    getTopFaqCms(): ITopFaqCms {
        return { ...this.topFaqCms };
    }

    getDocumentsCms(): IDocumentsCms {
        return { ...this.documentsCms };
    }

    getStoreLocatorCms(): IStoreLocatorCms {
        return { ...this.storeLocatorCms };
    }
}
