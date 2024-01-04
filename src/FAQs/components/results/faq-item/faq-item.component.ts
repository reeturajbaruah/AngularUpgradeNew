
import { Component, Input, OnInit } from '@angular/core';
import { IFaqResults, IResult, ISearchResults } from 'FAQs/models';

@Component({
    selector: 'faq-item',
    templateUrl: './faq-item.component.html',
    styleUrls: ['faq-item.component.less']
})
export class FaqItemComponent {

    @Input() item: IResult;


}
