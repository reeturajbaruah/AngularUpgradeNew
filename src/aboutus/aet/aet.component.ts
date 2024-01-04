import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { Accordion, AETSitecore, FAQSection, IContent, IFaq, IHeader, IQueryAet, ISignage } from 'aboutus/interfaces';
import { AetFacadeService } from './services/facade/aet-facade.service';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'aet-component',
    templateUrl: './aet.component.html',
    styleUrls: ['./aet.component.less']
})
export class AETComponent implements OnInit {

    @Input() aetComplexCMS: AETSitecore;

    @Input() faqSectionOverview: FAQSection;
    @Input() faqSectionChanges: FAQSection;
    @Input() faqSectionBenefits: FAQSection;

    isOpenSignageChange = false;
    isOpenTollPolicyRoadWay = false;
    isOpenTempSignage = false;

    public section: { [key: string]: SiteCoreItem };
    tollPolicyRoadWay: IContent;


    constructor(
        private aetFacade: AetFacadeService) { }

    public faqOverviewItems: Accordion[];
    public faqChangesItems: Accordion[];
    public faqBenefitsItems: Accordion[];

    data: IQueryAet;
    header: IHeader;
    breakpoints = Breakpoints;
    signage: ISignage;
    faq: IFaq;

    ngOnInit() {
        this.aetFacade.getData().subscribe(async data => {
            this.data = await data;
            this.header = this.data.header;
            this.signage = this.data.signage;
            this.tollPolicyRoadWay = this.data.tollPolicyRoadWay;
            this.faq = this.data.faq;

            this.faqOverviewItems = this.faqSectionOverview.Children[0].Query.Results;

            this.faqChangesItems = this.faqSectionChanges.Children[0].Query.Results;
    
            this.faqBenefitsItems = this.faqSectionBenefits.Children[0].Query.Results;
        });

     
    }

}

