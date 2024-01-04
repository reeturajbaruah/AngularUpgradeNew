import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import {
    NewBillingAddressModalComponent,
    NewBillingAddressInjectionValues
} from 'common/ui/modals/newBillingAddressModal/newBillingAddressModal.component';

import { IMailingInfo, State, Country } from 'common/models';
import { DialogService } from '../../services';
import { isUndefined } from 'common/utilities';
import { cloneDeep } from 'common/utilities';


export enum INewAddressFlag {
    Empty = 0,
    Updated = 1
}
export enum IAddressCheckBoxFlag {
    Default = 'Default',
    New = 'New'
}

@Component({
    selector: 'select-billing-address',
    templateUrl: './selectBillingAddress.html',
    styleUrls: ['./selectBillingAddress.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class SelectBillingAddressComponent {

    constructor(
        public form: NgForm,
        private dialogService: DialogService
    ) { }

    @Input() billingTitle: string;
    @Input() defaultAddress: IMailingInfo;
    @Input() newAddress: IMailingInfo;
    @Input() checkBoxFlag: IAddressCheckBoxFlag;
    @Input() newAddressFlag: INewAddressFlag;
    @Input() statesList: State[];
    @Input() countriesList: Country[];

    @Output() newAddressChange: EventEmitter<IMailingInfo> = new EventEmitter<IMailingInfo>();
    @Output() checkBoxFlagChange: EventEmitter<IAddressCheckBoxFlag> = new EventEmitter<IAddressCheckBoxFlag>();

    public newAddressProcessing: boolean;

    get submitted(): boolean {
        return this.form.submitted;
    }

    public defaultAddressUpdate() {
        if (this.checkBoxFlag === IAddressCheckBoxFlag.New) {
            this.checkBoxFlag = IAddressCheckBoxFlag.Default;
            this.checkBoxFlagChange.emit(this.checkBoxFlag);
        }
    }

    public newAddressUpdate() {
        if (this.newAddressFlag === INewAddressFlag.Empty) {
            this.openBillingAddressModal();
        }
    }

    public editNewAddress() {
        if (!this.newAddressProcessing) {
            this.newAddressProcessing = true;
            
            const tempNewAddress = cloneDeep(this.newAddress);
            const data: NewBillingAddressInjectionValues = {
                mailingInfo: this.newAddress,
                stateList: this.statesList,
                countryList: this.countriesList,
                isShowPersonalInfo: false,
                addressTitle: isUndefined(this.billingTitle) ? 'Billing Address' : this.billingTitle
            };

            return this.dialogService.openSliderCentered(NewBillingAddressModalComponent, data, {
                title: 'Enter New Address'
            }).then((result) => {
                if (result) {
                    this.newAddress = result.mailingInfo;
                    this.newAddressChange.emit(this.newAddress);
                }
                else if (isUndefined(result)) {
                    this.newAddress = tempNewAddress;
                }
                this.newAddressProcessing = false;
            });
        }
    }

    public setNewAddress() {
        if (this.newAddressFlag === INewAddressFlag.Empty) {
            return {
                firstName: null,
                lastName: null,
                internationalAddress: null,
                address1: null,
                address2: null,
                city: null,
                state: 'TX',
                zip: null,
                plus4: null,
                country: 'USA'
            };
        } else {
            return { ...this.newAddress };
        }
    }

    public openBillingAddressModal() {

        if (!this.newAddressProcessing) {

            this.newAddressProcessing = true;
            const newBillingInfo = this.setNewAddress();

            const data: NewBillingAddressInjectionValues = {
                mailingInfo: newBillingInfo,
                stateList: this.statesList,
                countryList: this.countriesList,
                isShowPersonalInfo: false,
                addressTitle: isUndefined(this.billingTitle) ? 'Billing Address' : this.billingTitle
            };

            return this.dialogService.openSliderCentered(NewBillingAddressModalComponent, data, {
                title: 'Enter New Address'
            }).then((result) => {
                if (result) {
                    this.newAddress = result.mailingInfo;
                    this.newAddressChange.emit(this.newAddress);
                    this.newAddressFlag = INewAddressFlag.Updated;
                    this.checkBoxFlagChange.emit(this.checkBoxFlag);
                }
                else if (isUndefined(result)) {
                    this.checkBoxFlag = IAddressCheckBoxFlag.Default;
                }
                this.newAddressProcessing = false;
            });
        }
        
    }

}
