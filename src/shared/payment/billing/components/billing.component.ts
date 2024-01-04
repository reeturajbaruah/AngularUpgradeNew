import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BillingInfo, BillingType } from 'common/models';
import { DialogContent, DialogService } from 'common/services';
import { BillingModalComponent, InjectionValues as BillingInjectionValues } from 'common/ui';
import { cloneDeep } from 'common/utilities';
import { IBillingContent } from '../models/models';

@Component({
    selector: 'payment-billing',
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.less']
})
export class BillingComponent implements OnInit {

    @Input() content: IBillingContent;
    BillingType = BillingType;
    billingInfo: BillingInfo;
    @Output() editBillingResult$ = new EventEmitter<any>();
    @Input() cashDisplaytext: string;
    @Input() flexPayRebillToggle?: boolean;

    constructor(private dialogService: DialogService) { }

    ngOnInit() {
        this.billingInfo = this.content.billingInfo;
    }

    async openEditBillingModal() {
        if (this.content.redirectToPaymentOnEdit) {
            this.editBillingResult$.emit();
            return;
        }

        const data: BillingInjectionValues = {
            billingInformation: {
                credit: cloneDeep(this.billingInfo.credit),
                eft: cloneDeep(this.billingInfo.eft)
            },
            billingType: cloneDeep(this.billingInfo.billingType),
            stateList: cloneDeep(this.content.states),
            countryList: cloneDeep(this.content.countries),
            hideForEFT: true
        };

        const result = await this.dialogService.openSliderCentered(
            BillingModalComponent, data, { title: 'Edit Payment Method' } as DialogContent);
        if (result) {
            this.editBillingResult$.emit(result);
        }
    }
}
