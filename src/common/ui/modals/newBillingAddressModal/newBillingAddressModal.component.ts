import { DialogRef } from 'common/services';
import { IMailingInfo, State, Country } from 'common/models';

import {
    Component
} from '@angular/core';

export interface NewBillingAddressInjectionValues {
    mailingInfo: IMailingInfo;
    stateList: State[];
    countryList: Country[];
    isShowPersonalInfo: boolean;
    addressTitle: string;
}

@Component({
    selector: 'cavve-new-billing-address-modal', // TODO: should probably be renamed if this component is meant to stay in the common folder
    templateUrl: './newBillingAddressModal.html',
    styleUrls: ['./newBillingAddressModal.less']
})
export class NewBillingAddressModalComponent {
    constructor(
        private dialogRef: DialogRef<NewBillingAddressInjectionValues>
    ) {
        this.mailingInfo = dialogRef.data.mailingInfo;
        this.mailingInfo.internationalAddress = this.dialogRef.data.mailingInfo.country === 'USA' ? false : true;
        this.states = dialogRef.data.stateList;
        this.countryList = dialogRef.data.countryList;
        this.isShowPersonalInfo = dialogRef.data.isShowPersonalInfo;
        this.addressTitle = dialogRef.data.addressTitle;
    }

    public states: State[];
    public countryList: Country[];
    public mailingInfo: IMailingInfo;
    public isShowPersonalInfo: boolean;
    public addressTitle: string;

    public cancel() {
        this.dialogRef.close();
    }

    public submit() {
        this.dialogRef.data.mailingInfo.internationalAddress = this.dialogRef.data.mailingInfo.country === 'USA' ? false : true;
        this.dialogRef.close(this.dialogRef.data);
    }
}
