import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BillingInfo, BillingType } from 'common/models';
import { CreditCardEntryComponent, ITagInfoInjectionValues, TagInfoModalComponent } from 'common/ui';
import { IPaymentMethodContent } from './models/models';
import { CmsIds } from '../constants';
import { CmsResolverService } from '../../../../cms/services';
import { DialogService } from 'common/services';

@Component({
    selector: 'shared-payment-method',
    templateUrl: './payment-method.component.html',
    styleUrls: ['./payment-method.component.less']
})
export class PaymentMethodComponent implements OnInit {

    constructor(private cmsResolverService: CmsResolverService, private dialogService: DialogService) { }

    @Input() header: string;
    @Input() billingInfo: BillingInfo;
    BillingType = BillingType;
    @ViewChild(CreditCardEntryComponent, { static: false }) creditEntry: CreditCardEntryComponent;
    paymentMethodContent?: IPaymentMethodContent;
    @Output() autoReplenishmentSelection: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() isAutoReplenishmentEnabled?: boolean;
    
    async ngOnInit() {
        const cmsContent = await this.cmsResolverService.resolve({
            ItemId: CmsIds.PaymentMethodContent,
            mergeParams: true
        }) as IPaymentMethodContent;
        this.paymentMethodContent = cmsContent;
    }
   

    async submit() {
        if (this.billingInfo.billingType === BillingType.Credit) {
            if (this.creditEntry) {
                const submitResponse = await this.creditEntry.submit();
                if (!submitResponse) {
                    return;
                }
                return submitResponse;
            }
        }
    }

    onAutoReplenishmentSelection(e) {
        if (e.target.checked) {
            this.billingInfo.autoReplenishmentStatus = true;
            this.billingInfo.savePaymentStatus = true;
        }
        else {
            this.billingInfo.autoReplenishmentStatus = false;
        }
        this.autoReplenishmentSelection.emit(this.billingInfo.autoReplenishmentStatus);
    }

    onSavePaymentMethodSelection(e) {
        this.billingInfo.savePaymentStatus = (e.target.checked) ? true : false;
    }

    onBillingTypeSelection(billingType: BillingType) {
        if (billingType !== BillingType.Cash) {
            this.billingInfo.autoReplenishmentStatus = true;
            this.billingInfo.savePaymentStatus = true;
        }
        else {
            this.billingInfo.autoReplenishmentStatus = false;
            this.billingInfo.savePaymentStatus = false;
        }
    }

    async onClickTagInfo() {
        const data = {
            modalCms: this.billingInfo.cmsPaymentInfo.tagInfoModalCms
        } as ITagInfoInjectionValues;

        await this.dialogService.openSliderCentered(TagInfoModalComponent, data);
    }
}
