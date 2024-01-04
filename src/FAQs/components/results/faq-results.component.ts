import { Component, Input, OnInit } from '@angular/core';
import { IFaqCms, IFaqResults, IResult, ISearchResults } from 'FAQs/models';

@Component({
    selector: 'faq-results',
    templateUrl: './faq-results.component.html',
    styleUrls: ['faq-results.component.less']
})
export class FaqResultsComponent {
    @Input() cmsContent: IFaqCms;
    @Input() topSearchResults: IResult[];
    @Input() searchResults: ISearchResults;
}

