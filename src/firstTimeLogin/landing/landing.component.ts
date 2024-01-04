import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FirstTimeLoginFrameComponent } from '../frame/frame.component';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { WebStorageConst } from '../../constants/webstorage.constants';
import { ENVIRON_CONFIG, WindowRef } from '../../common/module';
import { StateConfigOrName } from 'common/interfaces';
import { AccountSearchData, FindAccountCmsData, AccountIdentificationOption, LoginResetOption } from '2FA/interfaces';
import { NgForm } from '@angular/forms';
import { TwoFactorAuthSendRequest, Channel } from '2FA/interfaces';
import { FirstTimeLoginService } from 'firstTimeLogin/services/firstTimeLogin.service';
import { AccountSearchRequest, AccountSearchResponse } from 'firstTimeLogin/interfaces';


@Component({
    selector: 'first-time-login-landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.less']
})
export class FirstTimeLoginLandingComponent implements OnInit {
    
    @Input() public cmsData: FindAccountCmsData;
    @ViewChild(NgForm) searchAccountForm: NgForm;
    public agencies: string[];

    public data: AccountSearchData = {} as AccountSearchData;

    constructor(
        private parent: FirstTimeLoginFrameComponent,
        private state: StateService,
        private firstTimeLoginService: FirstTimeLoginService,
        protected webStorageConst: WebStorageConst,
        @Inject(WindowRef) private window: Window,
        private uiRouterGlobals: UIRouterGlobals,
        @Inject(ENVIRON_CONFIG) private environmentConfig: any
    ) {
     }

     async ngOnInit() {
        this.data.loginResetOption = this.uiRouterGlobals.params.resetOption;
   }

   public clearValidations() {
       //force form to 'forget' it was submitted        
       (this.searchAccountForm as { submitted: boolean }).submitted = false;
   }

   public get moreInfoNeeded(): boolean {
        return this.forceRequireMoreInfo || this.data.moreInfoNeeded;
   }

   public get forceRequireMoreInfo(): boolean {
        return this.environmentConfig.twoFactorAuth.firstTimeloginRequireMoreInfo;
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
                   channel: Channel.Email
               });

           }           
       }
       else if (this.data.loginResetOption === LoginResetOption.Phone) {

           await this.state.go(state, {
               phoneNumber: this.data.to,
               acctId: acct.acctId,
               loginId: acct.loginId,
               dbSessionId: acct.dbSessionId
           });

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

       const data: AccountSearchRequest = {
           emailAddress,
           phoneNumber,
           tagNumber,
           eztagAgency,
           accountNumber
       };

       return await this.firstTimeLoginService.accountSearch(data);
   }

   async sendEmailCode(acct: AccountSearchResponse) {
       const data: TwoFactorAuthSendRequest = {
           to: this.data.to,
           language: this.window.localStorage[this.webStorageConst.selectedLanguage],
           accountId: acct.acctId,
           source: this.parent.source,
           channel: Channel.Email
       };

       return await this.firstTimeLoginService.sendCode(data);
   }
}
