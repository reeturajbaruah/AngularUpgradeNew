import { Component } from '@angular/core';

import { SiteCoreItem } from 'cms/cms.module';
import { DialogRef } from 'common/services';
import { CmsUtilService } from 'cms/services';

export interface CmsInvoiceExampleData {
    pageData: SiteCoreItem;
}

interface SectionData {
    message: string;
    url: string;
}

@Component({
    selector: 'violations-invoice-example',
    templateUrl: './invoiceExample.html',
    styleUrls: ['./invoiceExample.less']
})
export class InvoiceExampleComponent {

    public header: string;
    public invoiceExampleSection: SectionData;

    constructor(
        private dialogRef: DialogRef<CmsInvoiceExampleData>,
        private cmsUtilityService: CmsUtilService
    ) {
        const pageData = dialogRef.data.pageData;
        this.header = pageData.ShortDescription;

        this.invoiceExampleSection =  {
                message: pageData.Children[0].ShortDescription,
                url: cmsUtilityService.generateFileSrc(pageData.Children[0].Image)
            };
    }
}
