import { Component, OnInit, Input, Inject } from '@angular/core';

import { DialogService, DialogContent } from 'common/services';
import { IFeeInfo, ITollSummary } from 'cavve/interfaces';
import { TollViolationsModalComponent, InjectionValues } from './tollViolationsModal.component';

import { cloneDeep } from 'common/utilities';

import { FrameComponent } from '../frame/frame.component';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { Decimal } from 'decimal.js-light';

@Component({
    selector: 'cavve-payment-summary',
    templateUrl: './paymentSummary.html',
    styleUrls: ['./paymentSummary.less']
})
export class PaymentSummaryComponent implements OnInit {

    constructor(
        private parent: FrameComponent,
        private dialogService: DialogService,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    public tollSummary: ITollSummary;
    public isFrp3: boolean;
    adjustments: Decimal;

    @Input() fees: IFeeInfo;
    @Input() isCreateAccount: boolean;
    @Input() isConfirmPage: boolean;
    @Input() choiceSelected: string;

    ngOnInit() {
        this.isCreateAccount = this.isCreateAccount || false;
        this.isFrp3 = this.environmentConfig.isMergeMATandVioOn;
        this.tollSummary = {
            totalViolationsDue: this.fees.totalViolationsDue
        };
        this.adjustments = this.isCreateAccount || this.isConfirmPage ? new Decimal(this.fees.createAccountDiscount) : new Decimal(this.fees.totalFeesDiscountedDontCreateAccount);
    }

    public openTollViolationsModal() {

        const data: InjectionValues = {
            tollSummaryDetails: cloneDeep(this.tollSummary),
            plate: this.parent.getPlateContainer().plate
        };

        this.dialogService.openSliderFilled(TollViolationsModalComponent,
            data,
            { title: 'Toll Transactions' } as DialogContent);

    }

    get isAdjustmentsZero() {
        return this.adjustments ? this.adjustments.isZero() : this.adjustments;
    }

}
