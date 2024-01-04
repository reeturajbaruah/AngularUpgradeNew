import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { ForgotPasswordFrameComponent } from '../frame/frame.component';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { ForgotPasswordAccountSearchRequest, ForgotPasswordAccountSearchResponse } from '../interfaces';
import { WebApiService } from '../services/webApi.service';
import { WebStorageConst } from '../../constants/webstorage.constants';
import { ENVIRON_CONFIG, WindowRef } from '../../common/module';
import { StateConfigOrName } from 'common/interfaces';

import { NgForm } from '@angular/forms';
import { ForgotPasswordService } from '../services/forgotPassword.service';
import { 
    Channel, TwoFactorAuthSendRequest,
    AccountSearchData, FindAccountCmsData, 
    AccountIdentificationOption, LoginResetOption
} from '2FA/interfaces';
import { AccountSearchComponent } from '2FA/components/accountSearch/accountSearch.component';


@Component({
    selector: 'forgot-password-landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.less']
})
export class ForgotPasswordLandingComponent implements OnInit {
    
    @Input() public cmsData: FindAccountCmsData;
    @ViewChild(NgForm) searchAccountForm: NgForm;

    public data: AccountSearchData = {} as AccountSearchData;

    constructor(
        private parent: ForgotPasswordFrameComponent,
        private state: StateService,
        private webApi: WebApiService,
        private forgotPasswordService: ForgotPasswordService,
        protected webStorageConst: WebStorageConst,
        @Inject(WindowRef) private window: Window,
        private uiRouterGlobals: UIRouterGlobals,
        @Inject(ENVIRON_CONFIG) private environmentConfig
    ) {
     }

    public get moreInfoNeeded(): boolean {
        return this.forceRequireMoreInfo || this.data.moreInfoNeeded;
    }

    public get forceRequireMoreInfo(): boolean {
        return this.environmentConfig?.twoFactorAuth?.forgotPasswordRequireMoreInfo;
    }

     async ngOnInit() {
         this.data.loginResetOption = this.uiRouterGlobals.params.resetOption;
    }

    public clearValidations() {
        //force form to 'forget' it was submitted        
        (this.searchAccountForm as { submitted: boolean }).submitted = false;
    }

    public async submit(state: StateConfigOrName) {

        if (!this.data.loginResetOption) {
            return;
        }

        const acct = await this.searchAccount();

        if (acct.hasError) {
            return;
        }

        if (acct.multipleAccountsFound) {
            this.data.moreInfoNeeded = true;
            this.clearValidations();
            return;
        }

        if (this.data.loginResetOption === LoginResetOption.Email) {

            const res = await this.sendEmailCode(acct);

            if (res && res.verificationSent) {

                await this.state.go(state, {
                    phoneNumber: null,
                    email: this.data.to,
                    acctId: acct.acctId,
                    loginId: acct.loginId,
                    dbSessionId: acct.dbSessionId,
                    channel: Channel.Email,
                    isMissingEmail: acct.isMissingEmail
                });

            }           
        }
        else if (this.data.loginResetOption === LoginResetOption.Phone) {

            await this.state.go(state, {
                phoneNumber: this.data.to,
                acctId: acct.acctId,
                loginId: acct.loginId,
                dbSessionId: acct.dbSessionId,
                isMissingEmail: acct.isMissingEmail
            }, { custom: { isExplicitlyAllowedTransition: true}});

        }
        
    }

    async searchAccount() {
        
        const emailAddress = this.data.loginResetOption === LoginResetOption.Email ? this.data.to : null;
        const phoneNumber = this.data.loginResetOption === LoginResetOption.Phone ? this.data.to : null;

        const tagNumber = 
            this.moreInfoNeeded && this.data.accountIdentificationOption === AccountIdentificationOption.EzTagNumber
                    ? this.data.ezTagNumber
                    : null;

        const eztagAgency = 
            this.moreInfoNeeded && this.data.accountIdentificationOption === AccountIdentificationOption.EzTagNumber
                    ? this.data.selectedAgency
                    : null;

        const accountNumber = 
            this.moreInfoNeeded && this.data.accountIdentificationOption === AccountIdentificationOption.AccountNumber
                ? this.data.accountNumber
                : null;

        const data: ForgotPasswordAccountSearchRequest = {
            emailAddress,
            phoneNumber,
            tagNumber,
            eztagAgency,
            accountNumber
        };

        return await this.webApi.forgotPasswordAccountSearch(data);
    }

    async sendEmailCode(acct: ForgotPasswordAccountSearchResponse) {
        const data: TwoFactorAuthSendRequest = {
            to: this.data.to,
            language: this.window.localStorage[this.webStorageConst.selectedLanguage],
            accountId: acct.acctId,
            source: this.parent.source,
            channel: Channel.Email
        };

        return await this.forgotPasswordService.sendCode(data);
    }
}
