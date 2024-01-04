import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, Renderer2 } from '@angular/core';
import { ICashPaymentSummaryContent } from 'account/create/models/review.models';
import { BillingType } from 'common/models';
import { DialogService, DialogContent } from 'common/services';
import { IReplenishmentInfoInjectionValues, ITagInfoInjectionValues, ReplenishmentInfoModalComponent, TagInfoModalComponent } from 'common/ui';
import { IPaymentSummary } from '../models';

@Component({
    selector: 'payment-summary-review',
    templateUrl: './payment-summary.component.html',
    styleUrls: ['./payment-summary.component.less']
})
export class PaymentSummaryComponent implements OnChanges, AfterViewInit {

    @Input() data: IPaymentSummary;
    @Input() rebillStatus?: boolean;
    @Input() cashPaymentSummaryModalCms?: ICashPaymentSummaryContent;
    @Input() pendingCashPaymentAmt?: number;
    @Input() billingType?: BillingType;
    @Output() addFundsEvent = new EventEmitter<void>();
    
    cashPaymentSummary?: string;
    BillingType = BillingType;

    constructor(
        private dialogService: DialogService,
        private elementRef: ElementRef,
        private renderer: Renderer2
        ) { }

    ngOnChanges() {
        this.cashPaymentSummary = this.cashPaymentSummaryModalCms.ShortDescription.replace('{pendingCashPaymentAmt}', this.pendingCashPaymentAmt?.toString());
    }

    ngAfterViewInit() {
        const addFundsLink = this.elementRef.nativeElement.querySelector('#addFunds');
        if (addFundsLink) {
            this.renderer.listen(addFundsLink, 'click', (event) => {
                event.preventDefault();
                this.addFundsEvent.emit();
              });
        }
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
