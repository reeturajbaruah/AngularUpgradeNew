import { Component, Input } from '@angular/core';
import { Tab } from '../tabs/tabs.component';

export interface CmsContent {
    Title: string;
    ShortDescription: string;
    LongDescription: string;
    transactionsTab: string;
    statementsTab: string;
    yearlyTab: string;
    receiptsTab: string;
    invoicesTab: string;
}

@Component({
    selector: 'account-activity-frame',
    templateUrl: './frame.html',
    styleUrls: ['./frame.less']
})
export class FrameComponent {

    @Input() cmsContent: CmsContent;

    @Input() selectedState: Tab;

    constructor(
    ) { }

}


