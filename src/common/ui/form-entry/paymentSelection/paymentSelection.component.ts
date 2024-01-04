import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm, ControlContainer, NgModelGroup } from '@angular/forms';
import { BillingInfo, BillingType, Country, PaymentMethodOptions, State } from 'common/models';

import {
    BillingModalComponent,
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { DialogContent, DialogService } from 'common/services';

@Component({
    selector: 'payment-selection-component',
    templateUrl: './paymentSelection.html',
    styleUrls: ['./paymentSelection.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class PaymentSelectionComponent {
    
    @Input() name: string;
    @Input() stateList: State[];
    @Input() countryList: Country[];    
    @Input() hideOtherPaymentMethod?: boolean;
    @Input() required: boolean;
    @Input() selectedPaymentMethod: (BillingInfo & PaymentMethodOptions);
    @Input() paymentMethods: (BillingInfo & PaymentMethodOptions)[];

    @Output() otherPaymentMethodSelected = new EventEmitter<void>();
    @Output() selectedPaymentMethodChange = new EventEmitter<(BillingInfo & PaymentMethodOptions)>();

    @ViewChild('group') group: NgModelGroup;

    public BillingType = BillingType;
    public readonly otherMethod = {} as (BillingInfo & PaymentMethodOptions);

    public get submitted(): boolean {
        const form = this.group?.formDirective as NgForm;
        return form ? form.submitted : false;
    }

    public get groupName(): string {
        return this.name || 'paymentSelect';        
    }

    constructor(private dialogService: DialogService) {}

    paymentMethodChanged(newSelection: BillingInfo & PaymentMethodOptions) {

        const prev = this.selectedPaymentMethod;
        this.selectedPaymentMethod = newSelection;

        if (prev !== this.otherMethod && newSelection === this.otherMethod) {
            this.otherPaymentMethodSelected.emit();
        } else if (prev !== newSelection) {
            this.selectedPaymentMethodChange.emit(newSelection);
        }    
    }

    public async addNewPaymentMethod(openEftSlots: number, openCardSlots: number, showMakePrimary: boolean, acctActivity: string) {
        // Set showMakePrimary to false if any payment method object has makePrimary as true, else set it to true
        showMakePrimary = !(this.paymentMethods.some(paymentMethod => paymentMethod?.makePrimary || paymentMethod?.primary)) && acctActivity !== 'I';

        const newBillingInfo = {
            credit: {},
            eft: {},
            billingType: null
        } as BillingInfo & PaymentMethodOptions;

        const data: BillingInjectionValues = {
            billingInformation: newBillingInfo,
            billingType: null,
            stateList: this.stateList,
            countryList: this.countryList,
            hideForEFT: true,
            paymentMethodAvailability: {
                openCardSlots,
                openEftSlots
            },

            uiOptions: {
                isNew: true,
                showMakePrimary
            },
            uiResults: {
                addToPaymentList: acctActivity !== 'I'
            }
        };

        const result = await this.dialogService.openSliderCentered(BillingModalComponent, data,
            { title: 'Other Payment Method' } as DialogContent);

        const oldSelectedMethod = this.selectedPaymentMethod;
            
        if (result) {
            const newPaymentMethod = {
                ...result.billingInformation,
                billingType: result.billingType,
                newMethodAdded: true,
                addToPaymentList: result.uiResults?.addToPaymentList,
                makePrimary: result.uiResults?.makePrimary

            } as BillingInfo & PaymentMethodOptions;

            if (newPaymentMethod.billingType === BillingType.Credit) {
                newPaymentMethod.eft = null;
            } else if (newPaymentMethod.billingType === BillingType.Eft) {
                newPaymentMethod.credit = null;
            }

            this.paymentMethods.push(newPaymentMethod);
            this.selectedPaymentMethod = newPaymentMethod;
            
        } else {
            this.selectedPaymentMethod = null;
        }

        if (oldSelectedMethod !== this.selectedPaymentMethod) {
            this.selectedPaymentMethodChange.emit(this.selectedPaymentMethod);
        }
        
    }
}
