import { Inject, Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CreditCardDetails } from 'common/models';
import { CreditCardInputStrategy } from 'common/ui/credit-card-strategies/model';
import { CreditCardStateService } from 'common/ui/credit-card-strategies/services';
import { VantivPaymentService } from 'common/services';
import { PciInfoService } from '../../../../../services/pciInfo/pciInfo.service';

@Component({
    selector: 'litel-strategy',
    templateUrl: './litelStrategy.html',
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class LitelStrategyComponent implements OnInit, CreditCardInputStrategy {

    frameId: string;
    creditCard: CreditCardDetails;
    nameSuffix: string;
    disableValidation: boolean;

    visaImage = '../../../Content/icons/visa.png';
    mastercardImage = '../../../Content/icons/mastercard.png';
    amexImage = '../../../Content/icons/amex.png';
    discoverImage = '../../../Content/icons/discover.png';

    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        private pciInfoService: PciInfoService,
        private vantivPaymentService: VantivPaymentService,
        private creditCardStateService: CreditCardStateService,
        public form: NgForm,
    ) { }

    get isVisa(): boolean {
        return this.creditCard && this.creditCard.cardCode === 'V';
    }

    get isMastercard(): boolean {
        return this.creditCard && this.creditCard.cardCode === 'M';
    }

    get isDiscover(): boolean {
        return this.creditCard && this.creditCard.cardCode === 'D';
    }

    get isAmex(): boolean {
        return this.creditCard && this.creditCard.cardCode === 'A';
    }

    ngOnInit() {
        this.init();
        this.setup();
    }

    private init() {
        const state = this.creditCardStateService.getState();
        this.creditCard = state.creditCard;
        this.nameSuffix = state.nameSuffix;
        this.disableValidation = state.disableValidation;

    }


    setup = (): Promise<any> => {
        if (this.creditCard.cardNbr) {
            this.creditCard.cardNbr = '************-' + this.creditCard.cardNbr.slice(-4);
        }

        return Promise.resolve();
    };

    tokenize = (): Promise<boolean> => {
        if (this.pciInfoService.isMasked(this.creditCard.cardNbr)) {
            return Promise.resolve(true);
        } else {
            return this.vantivPaymentService.vantivPay(this.creditCard.cardNbr)
                .then(response => {
                    this.creditCard.cardNbr = '************-' + response.lastFour;
                    this.creditCard.paypageRegistrationId = response.paypageRegistrationId;
                    this.creditCard.isNewCard = true;
                    return true;
                });
        }
    };

    submit = (): Promise<boolean> => Promise.resolve(true);

}
