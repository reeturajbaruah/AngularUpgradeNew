import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DialogContent } from 'common/services';
import { IViolation } from 'violationsCommon/components/violationsDetails/interfaces/violation.interface';
import { ViolationDataEntry } from 'missedatoll/interfaces';
import { UninvoicedDetailsModalComponent, InjectionValues } from 'missedatoll/details/uninvoiced/uninvoicedDetailsModal.component';

@Component({
    selector: 'cavve-violations-uninvoiced',
    templateUrl: './unInvoiced.html',
    styleUrls: ['./unInvoiced.less']
})
export class UnInvoicedComponent implements OnInit {

    constructor(private dialogService: DialogService) { }

    @Input() public tollDetailsTitle: string;
    // eslint-disable-next-line id-blacklist
    @Input() plate: { number: string; state: string };
    @Input() unInvoiced: IViolation;

    public violationNumber: string | number;

    ngOnInit() {
    this.violationNumber = this.unInvoiced.violationId;
    }

    public openTollDetailsModal() {
        const uninvoicedData = {
            agencyCode: this.unInvoiced.agencyName,
            amountDue: this.unInvoiced.tollAmount,
            location: this.unInvoiced.location,
            violationDate: this.unInvoiced.violationDate,
            violationNumber: this.unInvoiced.violationId.toString()
        } as ViolationDataEntry;

        this.dialogService.openSliderFilled(UninvoicedDetailsModalComponent,
            { uninvoicedDetails: uninvoicedData } as InjectionValues,
            { title: 'Transaction Details', hasBack: true, hasClose: false} as DialogContent);
    }
}
