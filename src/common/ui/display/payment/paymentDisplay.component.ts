import {
    Component, Input, Inject,
    Output, EventEmitter, AfterViewInit, OnInit
} from '@angular/core';

import { BillingType, BankDetails, CreditCardDetails, PaymentRadioStatus } from 'common/models';
import { CreditCardTypeService } from 'common/billing';
import { UrlPaths } from 'constants/routes.constants';
import { CmsUtilService } from 'cms/services';

interface IconCms {
    ItemName: string;
    Image: string;
}

export interface PaymentDetailsCms {
    Children: IconCms[];
}

@Component({
    selector: 'payment-display',
    templateUrl: './paymentDisplay.component.html',
    styleUrls: ['./paymentDisplay.less']
})

export class PaymentDisplayComponent implements OnInit{

    constructor(
        private creditCardTypes: CreditCardTypeService,
        private routes: UrlPaths,
        private cmsUtilService: CmsUtilService
    ) { }

    @Input() billingType: BillingType;
    @Input() title: string;
    @Input() bankDetails: BankDetails;
    @Input() creditCard: CreditCardDetails;
    @Input() showAccountNumber: boolean;
    @Input() showNameOnCard: boolean;
    @Input() hideTitle: boolean;
    @Input() hideEdit: boolean;
    @Input() legacy?: boolean;
    @Input() icons?: PaymentDetailsCms;
    @Input() showLabels?: boolean;
    @Input() savePaymentStatus?: boolean;
    @Input() flexPayRebillToggle?: boolean;


    @Output() edit = new EventEmitter<any>();

    public cmsImage: string;
    public readonly BillingType = BillingType;
    PaymentRadioStatus = PaymentRadioStatus;

    ngOnInit() {
        this.cmsImage = this.getIconImage();
    }
    

    editClicked = () => {
        this.edit.emit();
    };

    private getIconImage = (): string => {
        if (!this.icons) {
            return '';
        }

        const iconDict = this.icons.Children.reduce((acc, curr) => ({ ...acc, [curr.ItemName]: curr.Image }), {});
        const cardCodes = {
            a: 'AMEX',
            m: 'MasterCard', 
            d: 'Discover',
            v: 'Visa'
        };

        const childName = this.billingType === BillingType.Eft
            ? 'Bank' 
            : cardCodes[(this.creditCard.cardCode || '').toLowerCase()] || '';

        return this.cmsUtilService.generateFileSrc(iconDict[childName] || '');
        
    };

    // TODO: Convert to pipe
    get maskedAccountNumber(): string {
        return '**** ' + (this.bankDetails.accountNumber || '****').slice(-4);
    }

    // TODO: Convert to pipe and make adaptable to non-supported card types as well
    get maskedCreditCardNumber(): string {
        const code = this.creditCard.cardCode || '';
        const value = (this.creditCard.cardNbr || '').slice(-4);

        switch (code.toLowerCase()) {
            case 'v':
            case 'm':
            case 'd':
            case 'a':
                return '**** ' + value;
            default:
                return;
        }
    }

    get cardExpires(): string {
        return this.creditCard.expMonth + '/' + this.creditCard.expYear;
    }

    get name(): string {
        
        if (this.billingType === BillingType.Credit) {
            return this.creditCard.nameOnCard;
        } else if (this.billingType === BillingType.Eft) {
            return this.bankDetails.nameOnBankAccount || this.bankDetails.name;
        }

        return null;
    }
}

