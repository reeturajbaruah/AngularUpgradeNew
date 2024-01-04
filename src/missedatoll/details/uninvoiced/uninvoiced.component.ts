import { Component, Input } from '@angular/core';

import { DialogService, DialogContent } from 'common/services';
import { ViolationDataEntry } from 'missedatoll/interfaces';
import { UninvoicedDetailsModalComponent, InjectionValues } from './uninvoicedDetailsModal.component';


@Component({
    selector: 'missed-a-toll-violations-uninvoiced',
    templateUrl: './uninvoiced.html',
    styleUrls: ['./uninvoiced.less']
})
export class UninvoicedComponent {

    constructor(private dialogService: DialogService) { }

    @Input() public tollDetailsTitle: string;
    @Input() public uninvoiced: ViolationDataEntry;


    public openTollDetailsModal() {
        // TODO: Put into Sitecore
        this.dialogService.openSliderFilled(UninvoicedDetailsModalComponent,
            { uninvoicedDetails: this.uninvoiced } as InjectionValues,
            { title: 'Violation Details' } as DialogContent);
    }
}
