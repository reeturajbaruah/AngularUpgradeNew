import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DialogContent } from 'common/services';
import { IReplenishmentInfoInjectionValues, ITagInfoInjectionValues, ReplenishmentInfoModalComponent, TagInfoModalComponent } from 'common/ui';
import { IPaymentSummary, ITagInfo } from '../models';

@Component({
    selector: 'payment-summary',
    templateUrl: './payment-summary.component.html',
    styleUrls: ['./payment-summary.component.less']
})
export class PaymentSummaryComponent {

    @Input() data: IPaymentSummary;

    constructor(private dialogService: DialogService) {

    }

    async onClickReplenishmentLink() {

        const data = {
            modalCms: this.data.replenishmentAmt.link.onClickContent
        } as IReplenishmentInfoInjectionValues;

        await this.dialogService.openSliderCentered(ReplenishmentInfoModalComponent,
            data, { title: 'Replenishment Amounts' } as DialogContent);
    }

    async onClickTagInfo() {
        const data = {
            modalCms: this.data.tagInfo.link.onClickContent
        } as ITagInfoInjectionValues;

        await this.dialogService.openSliderCentered(TagInfoModalComponent, data);
    }

}
