import { Component, } from '@angular/core';

import { SiteCoreItem } from 'cms/cms.module';
import { DialogRef } from 'common/services';
import { CmsUtilService } from 'cms/services';

export interface CmsInvoiceExampleData {
    pageData: SiteCoreItem;
    reverseOrder: boolean;
}

interface SectionData {
    message: string;
    url: string;
    order: number;
}

@Component({
    selector: 'paymentplan-invoice-example',
    templateUrl: './invoiceExample.html',
    styleUrls: ['./invoiceExample.less']
})
export class InvoiceExampleComponent {

    public header: string;
    public sections: SectionData[];

    constructor(
        private dialogRef: DialogRef<CmsInvoiceExampleData>,
        private cmsUtilityService: CmsUtilService
    ) {
        const pageData = dialogRef.data.pageData;
        const reverseOrder = dialogRef.data.reverseOrder;
        this.header = pageData.ShortDescription;

        this.sections = pageData.Children.map(c => ({
                message: c.ShortDescription,
                url: cmsUtilityService.generateFileSrc(c.Image),
                order: c['order']
            })).sort((a, b) => (a.order - b.order) * (reverseOrder ? -1 : 1));
    }
}
