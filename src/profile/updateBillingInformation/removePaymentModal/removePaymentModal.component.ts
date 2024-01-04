import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { NgForm, ControlContainer, NgModelGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CmsUtilService } from 'cms/services';
import { BillingType } from 'common/models';
import { PaymentMethod } from 'profile/updateBillingInformation/updateBillingInformation.component';
import { BillingCardPaymentDetailsCms } from 'profile/updateBillingInformation/paymentMethods/paymentMethods.component';

export interface RemovePaymentModalContent {
    Title: string;
    MainContent: string;
    NewPrimaryContent: string;
    NonPrimaryAcceptBtn: string;
    PrimaryAcceptBtn: string;
    removeFlexPay: string;
    CancelBtn?: string;
    isPrimary: boolean;
    isFlexPay: boolean;
    isOnlyPayment: boolean;
    isOptIn: boolean;
    otherMethods: PaymentMethod[];
    paymentMethodImages: BillingCardPaymentDetailsCms;
    ConfirmBtn: string;
}

export interface RemovePaymentModalInjectionValues {
    cmsContent: RemovePaymentModalContent;
}

export interface RemovePaymentModalResultInjectionValues {
    newPrimaryMethod?: PaymentMethod;
    isRemoveOnly?: boolean;
    optOut?: boolean;
}

@Component({
    selector: 'remove-payment-modal-component',
    templateUrl: './removePaymentModal.html',
    styleUrls: ['./removePaymentModal.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class RemovePaymentModalComponent implements OnInit {

    @ViewChild('group') group: NgModelGroup;

    constructor(
        private cmsUtilService: CmsUtilService,
        private dialogRef: MatDialogRef<RemovePaymentModalComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: RemovePaymentModalInjectionValues,
    ) { }

    public BillingType = BillingType;

    public cmsContent: RemovePaymentModalContent; 

    public isPrimaryMethod: boolean;

    public showNewPrimarySelect: boolean;

    public otherMethods: PaymentMethod[];

    public selectedPaymentMethod: PaymentMethod;

    public paymentMethodImages: BillingCardPaymentDetailsCms;

    public cmsImage: string;

    public results = {} as RemovePaymentModalResultInjectionValues;

    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
        this.otherMethods = this.cmsContent.otherMethods;
        this.isPrimaryMethod = this.cmsContent.isPrimary;
        this.showNewPrimarySelect = false;
        this.paymentMethodImages = this.cmsContent.paymentMethodImages;
    }

    public acceptButtonClick() {

        if (this.isPrimaryMethod && !this.cmsContent.isOnlyPayment) {
            this.results.newPrimaryMethod = this.selectedPaymentMethod;
            this.results.isRemoveOnly = false;
            this.results.optOut = false;
        }
        else if (this.cmsContent.isOnlyPayment && this.cmsContent.isOptIn && this.cmsContent.isFlexPay) {
            this.results.isRemoveOnly = false;
            this.results.optOut = true;
        }
        else {
            this.results.isRemoveOnly = true;
            this.results.optOut = false;
        }
        this.dialogRef.close(this.results);
    }

    public cancelButtonClick() {
        this.dialogRef.close(false);
    }

    paymentMethodChanged(newSelection: PaymentMethod) {

        this.selectedPaymentMethod = newSelection;

    }

    public getIconImage = (paymentMethod: PaymentMethod): string => {
        if (!this.paymentMethodImages) {
            return '';
        }

        const iconDict = this.paymentMethodImages.Children.reduce((acc, curr) => ({ ...acc, [curr.ItemName]: curr.Image }), {});

        const childName = this.getPaymentType(paymentMethod);

        return this.cmsUtilService.generateFileSrc(iconDict[childName] || '');
    };

    private getPaymentType(paymentMethod: PaymentMethod) {
        const cardCodes = {
            a: 'AMEX',
            m: 'MasterCard',
            d: 'Discover',
            v: 'Visa'
        };

        return paymentMethod.billingType === BillingType.Eft
            ? 'Bank'
            : cardCodes[(paymentMethod.credit.cardCode || '').toLowerCase()] || '';
    }
}
