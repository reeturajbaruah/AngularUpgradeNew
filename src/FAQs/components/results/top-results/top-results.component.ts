import { Component, Input, OnInit } from '@angular/core';
import { IFaqCms, IResult } from 'FAQs/models';
import { FaqSharedService } from 'FAQs/services/faq-shared/faq-shared.service';
import { IAccordionItem } from 'shared/ui/display/accordion/models/accordion.models';
import { AccordionService } from 'shared/ui/display/accordion/services/accordion.service';

@Component({
    selector: 'top-faq-results',
    templateUrl: './top-results.component.html',
    styleUrls: ['top-results.component.less']
})

export class TopResultsComponent implements OnInit {
    @Input() cmsContent: IFaqCms;
    @Input() topSearchResults: IResult[];

    topFaqItems: IAccordionItem[];
    isOpen: boolean;

    constructor(
        private accordionService: AccordionService,
        private sharedService: FaqSharedService
    ) { }

    ngOnInit() {
        this.sharedService.isTopResultAccordionOpen$.subscribe(value => { this.isOpen = value; });
        const customAccordionKeys = ['title', 'categoryName', 'lastModifiedDate', 'shortDesc'];
        this.topFaqItems = this.accordionService.createAccordionItems(this.topSearchResults, customAccordionKeys);
    }
}
