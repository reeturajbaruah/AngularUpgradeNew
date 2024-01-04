import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { CmsResolverService } from 'cms/services';
import { PaymentRadioStatus } from 'common/models';
import { CmsIds } from '../constants';
import { ISavePaymentMethodContent } from '../models/models';

@Component({
    selector: 'save-payment-method',
    templateUrl: './savePaymentMethod.html',
    styleUrls: ['./savePaymentMethod.less']
})

export class SavePaymentMethodComponent implements OnInit, OnChanges {
    constructor(private cmsResolverService: CmsResolverService) { }

    @Input() defaultSavePaymentStatus: PaymentRadioStatus;
    @Input() autoReplenishmentStatus: PaymentRadioStatus;
    @Output() autoSavePaymentStatusChange = new EventEmitter<PaymentRadioStatus>();

    cmsContent: ISavePaymentMethodContent;
    savePaymentMethodRadio: PaymentRadioStatus;
    PaymentRadioStatus = PaymentRadioStatus;
    required: boolean;


    async ngOnInit() {
        this.savePaymentMethodRadio = this.defaultSavePaymentStatus;

        const cmsContent = await this.cmsResolverService.resolve({
            ItemId: CmsIds.SavePaymentMethodContent,
            mergeParams: true
        }) as ISavePaymentMethodContent;
        this.cmsContent = cmsContent;

        this.autoSavePaymentStatusChange.emit(this.savePaymentMethodRadio);
    }

    ngOnChanges(changes: any) {
        if (changes.autoReplenishmentStatus && changes.autoReplenishmentStatus.currentValue === PaymentRadioStatus.Yes) {
            this.savePaymentMethodRadio = PaymentRadioStatus.Yes;
        }
    }

    onSavePaymentChange() {
        this.autoSavePaymentStatusChange.emit(this.savePaymentMethodRadio);
    }
}
