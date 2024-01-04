import { Injectable } from '@angular/core';
import { ITwoFactorAuthConfig } from 'account/create/models/two-factor-auth-config.model';
import { AccountService, CurrentUserService, WebStorageService } from 'common/services';
import { PhoneNumberPipe } from 'pipes/phoneNumber/phoneNumber.pipe';

@Injectable()
export class TwoFactorAuthConfigService {

    private config = {} as ITwoFactorAuthConfig;
    private twoFactorValidationSuccessState = 'NewAcctTwoFactorValidationSuccessState';

    constructor(private webStorageService: WebStorageService,
        private currentUserService: CurrentUserService,
        private accntService: AccountService,
        private phoneNumberPipe: PhoneNumberPipe

    ) {

    }



    async getConfig(params) {

        if (params && params.phoneNumber && params.acctId && params.validationSuccessState) {

            this.config = {
                acctId: params.acctId,
                phoneNumber:  this.formatPhone(params.phoneNumber),
                validationSuccessState: params.validationSuccessState
            };

            this.setWebStorage(this.twoFactorValidationSuccessState, params.validationSuccessState);
        } else {
            if (this.config.acctId === undefined && this.config.phoneNumber === undefined
                && this.config.validationSuccessState === undefined) {

                await this.checkBackEnd();
            }
        }

        return { ...this.config };
    }

    private async checkBackEnd() {
        const acctId = this.currentUserService.getCurrentUser().acctId;
        const validationSuccessState = this.webStorageService.getValue(this.twoFactorValidationSuccessState);
        const phoneNumber = (await this.accntService.getContactInfo()).homePhoNbr;

        this.config = {
            acctId,
            phoneNumber: this.formatPhone(phoneNumber),
            validationSuccessState
        };
    }

    private formatPhone(phoneNumber: string) {
        return this.phoneNumberPipe.transform(phoneNumber);
    }

    private setWebStorage(key, value) {
        this.webStorageService.setKeyValue(key, value);
    }

    clean() {
        this.webStorageService.removeEntry(this.twoFactorValidationSuccessState);
        this.config = {} as ITwoFactorAuthConfig;
    }

}
