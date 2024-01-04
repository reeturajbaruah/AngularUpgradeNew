import { AccountSearchComponent } from '2FA/components/accountSearch/accountSearch.component';
import { AccountIdentificationOption, AccountSearchData, AdditionalInfoData, Channel, FindAccountChild, LoginResetOption, TwoFactorAuthSendRequest, TwoFactorAuthSendResponse } from '2FA/interfaces';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { StateConfigOrName } from 'common/interfaces';
import { WindowRef } from 'common/module';
import { DataService } from 'common/services';
import { WebStorageConst } from 'constants/module';
import { AccountSearchResponse } from 'firstTimeLogin/interfaces';
import { ForgotPasswordAccountSearchRequest, ForgotPasswordAccountSearchResponse } from 'forgotPassword/interfaces';
import { ICmsInputEmail } from 'forgotUsername/forgotUsername.interfaces';
import { ForgotUsernameService } from 'forgotUsername/services/forgotUsername/forgotUsername.service';
import { WebApiService } from 'forgotUsername/services/webApi/webApi.service';
import { FrameComponent as ParentComponent } from '../frame/frame.component';

@Component({
  selector: 'forgot-username-inputEmail',
  templateUrl: './inputEmail.component.html',
  styleUrls: ['./inputEmail.component.less']
})
export class InputEmailComponent implements OnInit {

  private childCms: { [key: string]: FindAccountChild };

  public emailAddress: string;
  public agencies: string[];

  public moreInfoNeeded = false;
  public data: AccountSearchData = {} as AccountSearchData;

  @Input() cmsData: ICmsInputEmail;
  @ViewChild(NgForm) form: NgForm;

  constructor(
    private stateService: StateService,
    private webApiService: WebApiService,
    private forgotUsernameService: ForgotUsernameService,
    private dataService: DataService,
    @Inject(WindowRef) private window: Window,
    private webStorageConst: WebStorageConst
  ) { }

  ngOnInit(): void {
    this.childCms = this.cmsData.Children.reduce((acc, item) => ({ ...acc, [item.ItemName]: item }), {});
    this.data.loginResetOption = LoginResetOption.Email;

    this.dataService.getTagAuthorities().then(res => {
      this.agencies = res;

      this.data.selectedAgency = this.agencies.find(x => x === AccountSearchComponent.defaultAgency);
    });
  }

  public get additionalInfoCmsData(): AdditionalInfoData {
    return this.childCms?.[`More Info`] as AdditionalInfoData;
  }

  public get helpLinkCmsData(): SiteCoreItem {
    return this.childCms?.[`Help Locating Account`] as SiteCoreItem;
  }

  public async submit(nextState: StateConfigOrName): Promise<void> {
    if (this.form.invalid) {
      return;
    }

    const acctSearchRes = await this.searchAccount();

    if (acctSearchRes.hasError) {
      return;
    } else if (acctSearchRes.multipleAccountsFound) {
      const currForm = this.form.value;

      this.moreInfoNeeded = true;

      setTimeout(() => {
        this.form.resetForm();
        this.form.reset();

        const control = this.form.controls.primaryEmail_email;

        control.setValue(currForm.primaryEmail_email);
        control.markAsDirty();
        control.updateValueAndValidity();
      });
    } else {
      const twoFaAuthSendRes = await this.sendEmailCode(acctSearchRes);

      if (twoFaAuthSendRes && twoFaAuthSendRes.verificationSent) {
        await this.stateService.go(nextState, {
          phoneNumber: null,
          email: this.emailAddress,
          acctId: acctSearchRes.acctId,
          loginId: acctSearchRes.loginId,
          dbSessionId: acctSearchRes.dbSessionId,
          channel: Channel.Email
        }, { custom: { isExplicitlyAllowedTransition: true } });
      }
    }
  }

  private async searchAccount(): Promise<ForgotPasswordAccountSearchResponse> {
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
      emailAddress: this.emailAddress,
      accountNumber,
      eztagAgency,
      phoneNumber: null,
      tagNumber
    };

    return this.webApiService.forgotPasswordGetAccount(data);
  }

  private async sendEmailCode(acct: AccountSearchResponse): Promise<TwoFactorAuthSendResponse> {
    const data: TwoFactorAuthSendRequest = {
      to: this.emailAddress,
      language: this.window.localStorage[this.webStorageConst.selectedLanguage],
      accountId: acct.acctId,
      source: ParentComponent.source,
      channel: Channel.Email
    };

    return this.forgotUsernameService.sendCode(data);
  }

}
