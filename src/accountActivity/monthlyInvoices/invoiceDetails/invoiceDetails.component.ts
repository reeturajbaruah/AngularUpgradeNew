import { Component, Input, OnChanges } from '@angular/core';
import { TransactionRecord } from 'accountDashboard/services/accountDashboard.service';
import { DialogContent, DialogService } from 'common/services';
import { groupBy } from 'lodash';
import { InvoiceDetailsModalComponent } from '../invoiceDetailsModal/invoiceDetailsModal.component';

export interface InjectionModel {
    details: TransactionRecord[];
    selectedInvoice: {
        plateTagId: string;
        amount: number;
    };
}

@Component({
    selector: 'invoice-details',
    templateUrl: './invoiceDetails.html',
    styleUrls: ['./invoiceDetails.less']
})
export class InvoiceDetailsComponent implements OnChanges {
    constructor(private dialogService: DialogService) { }

    @Input() details: TransactionRecord[];
    private detailsGrouped: { [k: string]: TransactionRecord[] } = {};
    public plateTagIdAndAmount: { plateTagId: string; amount: number }[] = [];

    ngOnChanges() {
        this.groupIntoDisplayArray();
    }

    private groupIntoDisplayArray() {
        this.detailsGrouped = groupBy(this.details, 'customKey');

        this.plateTagIdAndAmount = [];
        Object.keys(this.detailsGrouped).forEach(plateTagId => {
            this.plateTagIdAndAmount.push({
                plateTagId,
                amount: this.detailsGrouped[plateTagId].reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0)
            });
        });
    }

    public getInvoiceDetails(invoiceDetail: { plateTagId: string; amount: number }) {
        this.dialogService.openSliderFilled(
            InvoiceDetailsModalComponent,
            { details: this.detailsGrouped[invoiceDetail.plateTagId], selectedInvoice: invoiceDetail } as InjectionModel,
            { title: 'Invoice Details' } as DialogContent
        );
    }
}
