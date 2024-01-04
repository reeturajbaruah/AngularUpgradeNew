import { Component, Input, Host, Inject } from '@angular/core';

import { NgForm, ControlContainer } from '@angular/forms';

import { BankDetails, BankAccountType } from 'common/models';

import { UrlPaths } from 'constants/module';

import { LinkLookupService } from 'cms/services';

import { WindowRef } from 'common/providers';

import { DialogService } from 'common/services';
import { EftModalComponent } from 'common/ui/form-entry/bankAccount/eftModal.component'; 
import { ENVIRON_CONFIG } from 'common/upgrades';

@Component({
    selector: 'bank-account-entry',
    templateUrl: './bankAccountEntry.html',
    styleUrls:['./bankAccountEntry.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})
export class BankAccountEntryComponent {
    showRoutingNumberValidationMsg = false;
    isValid = false;

    //@host decorator was removed for form due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(        
        private form: NgForm,
        @Inject(WindowRef) private window: Window,
        private routes: UrlPaths,
        private linkLookupService: LinkLookupService,
        private dialogService: DialogService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
    ) { 
        this.isValid = environmentConfig?.useUiRoutingValidation;
    }

    @Input() name: string;
    @Input() showName: boolean;
    @Input() bankDetails: BankDetails = {} as BankDetails;
    @Input() validate: boolean;
    @Input() legacy?: boolean;

    get accountNumbersMatch(): boolean {
        return this.bankDetails.accountNumber === this.bankDetails.account2;
    }

    get submitted(): boolean {
        return this.form.submitted;
    }

    public readonly BankAccountType = BankAccountType;
    
    clickedHelp = () => {
        this.window.open(this.linkLookupService.articleLookupById(this.routes.eftHelp));
    };

    public openModal() {

        const data = {};

        this.dialogService.openSliderCentered(EftModalComponent, data, { title: '', hasBack: true, hasClose: false });
    }

    public accountNumberChange(accNumber: any )
    {
        if (accNumber.includes('*')){
            this.bankDetails.accountNumber = '';
            this.bankDetails.account2 = '';
        }
    }

    checkRoutingNumberValid(routingNumber) {
        if (!routingNumber) { //all 0's is technically a valid routing number, but it's inactive
          return false;
        }
      
        const routing = routingNumber.toString();
      
        //gotta be 9  digits
        const match = routing.match('^\\d{9}$');
        if (!match) {
          return false;
        }
      
        //The first two digits of the nine digit RTN must be in the ranges 00 through 12, 21 through 32, 61 through 72, or 80.
        //https://en.wikipedia.org/wiki/Routing_transit_number
        const firstTwo = Number(routing.substring(0, 2));
        const firstTwoValid =  (0 <= firstTwo && firstTwo <= 12)
                            || (21 <= firstTwo && firstTwo <= 32)
                            || (61 <= firstTwo && firstTwo <= 72)
                            || firstTwo === 80;
        if (!firstTwoValid) {
          return false;
        }
      
        //this is the checksum
        //http://www.siccolo.com/Articles/SQLScripts/how-to-create-sql-to-calculate-routing-check-digit.html
        const weights = [3, 7 ,1];
        let sum = 0;
        for (let i=0 ; i<8; i++) {
          sum += Number(routing[i]) * weights[i % 3];
        }
      
        return (10 - (sum % 10)) % 10 === Number(routing[8]);
    }

    validatingRoutingNumber() {
        if (!this.checkRoutingNumberValid(this.bankDetails.routingNumber)) {
            this.showRoutingNumberValidationMsg = true;
            (this.form?.controls?.bankAccount as any)?.controls?.routing?.setErrors({ pattern: true });
        } else {
            this.showRoutingNumberValidationMsg = false;
            (this.form?.controls?.bankAccount as any)?.controls?.routing?.setErrors(null);
        }
    }

}
