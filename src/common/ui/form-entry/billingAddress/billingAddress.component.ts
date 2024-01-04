import { Component, Input } from '@angular/core';
import { BillingInfo, BillingType } from 'common/models';

@Component({
    selector: 'billing-address',
    templateUrl: './billingAddress.component.html',
    styleUrls: ['./billingAddress.component.less']
})
export class BillingAddressComponent {

    readonly defaultHeader = 'Billing Address';

    private headerValue = this.defaultHeader;

    BillingType = BillingType;

    @Input() stateList: any[];
    @Input() billingInfo = {} as BillingInfo;
    @Input() validate: boolean;
    @Input() countryList: any[];
    @Input() set header(value: string) {
        this.headerValue = value ?? this.defaultHeader;
    }
    get header(): string { return this.headerValue; }

    constructor() { }

    

}
