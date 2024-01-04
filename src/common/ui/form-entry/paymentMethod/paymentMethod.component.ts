import {
    Component, Input, Host, Optional, 
    Output, EventEmitter
} from '@angular/core';

import { NgForm, ControlContainer } from '@angular/forms';
import { BillingType, IPaymentMethodDetails } from 'common/models';

@Component({
    selector: 'payment-method',
    templateUrl: './paymentMethod.html',
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class PaymentMethodComponent {

    //@host decorator was removed for form due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        @Optional() public form: NgForm
    ) { }

    @Input() lockType: boolean;
    @Input() billingType?: BillingType;
    @Input() legacy?: boolean;
    @Input() paymentMethodDetails?: IPaymentMethodDetails;

    @Output() billingTypeChange = new EventEmitter<BillingType>();

    public readonly BillingType = BillingType;

    public updateValue = () => {                        
        this.billingTypeChange.emit(this.billingType);
    };
}
