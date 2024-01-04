import { Component, Input } from '@angular/core';

import { ViolationDataEntry } from 'missedatoll/interfaces'; 


@Component({
    selector: 'missed-a-toll-violations-details',
    templateUrl: './details.html',
    styleUrls: ['./details.less']
})
export class DetailsComponent {

    constructor() { }

    @Input() uninvoices: ViolationDataEntry[];
    @Input() arePlatesExpanded: boolean;
}
