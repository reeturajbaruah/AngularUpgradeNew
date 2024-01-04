import { Component, Input, ViewChild } from '@angular/core';
import { BillingType, BillingInfo } from '../../../models';
import { CreditCardEntryComponent } from '../creditCardEntry/creditCardEntry.component';
import { BaseBankAccountRequest, WebApisService as ValidationApis } from 'validation/services/webApis.service';
import { ResponseErrorService } from 'common/services';
import { ControlContainer, NgForm } from '@angular/forms';


@Component({
    selector: 'payment-entry',
    templateUrl: './paymentEntry.component.html',
    styleUrls: ['./paymentEntry.component.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class PaymentEntryComponent {

    @Input() header: string;
    BillingType = BillingType;

    @Input() billingInfo: BillingInfo;
    @ViewChild(CreditCardEntryComponent, { static: false }) creditEntry: CreditCardEntryComponent;

    constructor(public form: NgForm,

        private validationApis: ValidationApis,
        private responseErrorService: ResponseErrorService) {

    }

    async getStatus(): Promise<boolean> {
        let paymentReady = false;

        if (this.billingInfo.billingType === BillingType.Eft) {
            const eftRequest: BaseBankAccountRequest = {
                accountType: this.billingInfo.eft.accountType,
                routingNumber: this.billingInfo.eft.routingNumber,
                accountNumber: this.billingInfo.eft.accountNumber
            };

            const response = await this.validationApis.validateRoutingNumber(eftRequest);

            if (Array.isArray(response.alerts) && response.alerts.length !== 0) {
                this.responseErrorService.displayAlertsFromResponse(response, true);
            }

            paymentReady = true;
        } else if (this.creditEntry) {
            paymentReady = await this.creditEntry.submit();
        }
        
        return new Promise(resolve => {
            resolve(paymentReady);
        });
    }

}

