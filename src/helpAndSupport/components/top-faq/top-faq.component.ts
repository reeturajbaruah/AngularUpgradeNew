import { Component, OnInit } from '@angular/core';
import { ITopFaqCms } from 'helpAndSupport/models/top-faq.models';
import { HelpAndSupportManagerService } from 'helpAndSupport/services/manager/help-and-support-manager.service';
import { IAccordionItem } from 'shared/ui/display/accordion/models/accordion.models';
import { AccordionService } from 'shared/ui/display/accordion/services/accordion.service';

@Component({
    selector: 'help-and-support-top-faq',
    templateUrl: './top-faq.component.html',
    styleUrls: ['top-faq.component.less']
})

export class TopFaqComponent implements OnInit {
    topFaqCms: ITopFaqCms;
    topFaqItems: IAccordionItem[];

    constructor(
        private manager: HelpAndSupportManagerService,
        private accordionService: AccordionService
    ) { }

    ngOnInit() {
        this.topFaqCms = this.manager.getTopFaqCms();
        this.topFaqItems = this.accordionService.createAccordionItems(this.topFaqCms.Children);
    }
}
