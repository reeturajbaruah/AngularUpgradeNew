import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CmsResolverService } from 'cms/services';
import { PaymentRadioStatus } from 'common/models';
import { CmsIds } from '../constants';
import { IAutoReplenishmentContent } from '../models/models';

@Component({
    selector: 'auto-replenishment',
    templateUrl: './autoReplenishment.html',
    styleUrls: ['./autoReplenishment.less']
})

export class AutoReplenishmentComponent implements OnInit {
    constructor(private cmsResolverService: CmsResolverService) { }

    @Input() defaultAutoReplenishmentStatus: PaymentRadioStatus;
    @Output() autoReplenishmentStatusChange = new EventEmitter<PaymentRadioStatus>();

    cmsContent: IAutoReplenishmentContent;
    autoReplenishmentRadio: PaymentRadioStatus;
    PaymentRadioStatus = PaymentRadioStatus;
    required: boolean;

    async ngOnInit() {
        this.autoReplenishmentRadio = this.defaultAutoReplenishmentStatus;

        const cmsContent = await this.cmsResolverService.resolve({
            ItemId: CmsIds.AutoReplenishmentContent,
            mergeParams: true
        }) as IAutoReplenishmentContent;
        this.cmsContent = cmsContent;

        this.autoReplenishmentStatusChange.emit(this.autoReplenishmentRadio);
    }

    onAutoReplenishmentChange() {
        this.autoReplenishmentStatusChange.emit(this.autoReplenishmentRadio);
    }
}
