import { Component, Inject, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CreditCardTypeService, ExpirationDateService } from 'common/billing';
import { CreditCardDetails } from 'common/models';
import * as moment from 'moment';

@Component({
    selector: 'credit-card-entry-expire-only',
    templateUrl: './creditCardEntryExpireOnly.html',
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class CreditCardEntryExpireOnlyComponent {

    static idSequence = 0;

    @Input() public creditCard: CreditCardDetails;
    @Input() public disableValidation: boolean;

    @Input() public creditReadOnlyDesc: string;

    @Input() public cmsImage: string;

    private id: number;

    public get nameSuffix(): string {
        return '_entry_' + this.id;
    }

    public yearList: number[];
    public monthsList: string[];

    constructor(
        public form: NgForm,
        private expirationDateService: ExpirationDateService,
        private cardTypeService: CreditCardTypeService //needed for CardType pipe
    ) {
        this.id = CreditCardEntryExpireOnlyComponent.idSequence++;

        this.monthsList = moment.months();
        this.yearList = this.expirationDateService.getExpirationYearList(null, 20);
    }

    get isValidExpirationDate(): boolean {
        return this.expirationDateService.isMonthValid(this.creditCard.expMonth, this.creditCard.expYear)
            && this.expirationDateService.isYearValid(this.creditCard.expYear)
            && !this.disableValidation;
    }

}
