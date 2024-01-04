import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames } from '../../login/constants';
import { emailKeys, mfaStateNames, MFATypes, phoneKeys, source } from 'MFA/constant';
import { MultiFactorAuthenticationService } from 'MFA/services/multi-factor-authentication.service';
import { GetAccountInformationResponse } from 'common/services';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WebStorageConst } from 'constants/webstorage.constants';
import { WindowRef } from 'common/providers';
import { Channel, TwoFactorAuthSendRequest } from '2FA/interfaces';

@Component({
  selector: 'app-multi-factor-authentication',
  templateUrl: './multi-factor-authentication.component.html',
  styleUrls: ['./multi-factor-authentication.component.less']
})
export class MultiFactorAuthenticationComponent implements OnInit {
  @Input() mfaPageContent: any;
  selectedClass: string = MFATypes.TEXT;
  selectedInfo: number;
  accountInfo: GetAccountInformationResponse;
  selectedItems = [];
  noDataMsg = '';

  constructor(
    private multiFactorAuthenticationService: MultiFactorAuthenticationService,
    private state: StateService,
    private authService: AuthenticationService,
    protected webStorageConst: WebStorageConst,
    @Inject(WindowRef) private window: Window,
    private uiRouterGlobals: UIRouterGlobals,
  ) { }

  ngOnInit(): void {
    this.multiFactorAuthenticationService.getAccountInfo().then((resp) => {
      this.accountInfo = resp;
      this.selectionChange(this.selectedClass);
    });
  }

  selectionChange(updatedSelection: string): void {
    this.selectedClass = updatedSelection;
    this.selectedItems = [];
    if (updatedSelection === MFATypes.TEXT || updatedSelection === MFATypes.CALL) {
      const phoneArray = phoneKeys;
      this.formSelectedItem(phoneArray, updatedSelection);
      this.noDataMsg = this.mfaPageContent?.Phone_Num_Length_Msg;
    } else {
      const emailArray = emailKeys;
      this.formSelectedItem(emailArray, updatedSelection);
      this.noDataMsg = this.mfaPageContent?.Email_Length_Msg;
    }
    this.selectedInfo = 0;
  }

  formSelectedItem(keys: string[], selection: string): void {
    const contactInfo = this.accountInfo.contactInfo;
    keys.forEach((key, i) => {
      if (contactInfo[key]) {
        this.selectedItems.push({
          id: i,
          label: key,
          value: contactInfo[key],
          maskedInfo: (selection === MFATypes.EMAIL) ? this.getEmailMaskedInfo(contactInfo[key]) : '***-***-' + contactInfo[key].slice(-4)
        });
      }
    });
  }

  getEmailMaskedInfo(email: string): string {
    const splittedMailArr = email.split('@');
    const numberOfAsterisk = splittedMailArr[0].length - 3;
    const asteriskString = '*'.repeat(numberOfAsterisk);
    return splittedMailArr[0].slice(0, 3) + asteriskString + '@' + splittedMailArr[1];
  }

  receiveCodeChange(val) {
    this.selectedInfo = val.id;
  }

  async verify() {
    const payload: TwoFactorAuthSendRequest = {
      to: this.selectedItems[this.selectedInfo].value,
      language: this.window.localStorage[this.webStorageConst.selectedLanguage],
      accountId: this.accountInfo.acctId,
      source,
      channel: (this.selectedClass === MFATypes.TEXT) ? Channel.Sms : (this.selectedClass === MFATypes.CALL) ? Channel.Phone : Channel.Email,
    };
    const res = await this.multiFactorAuthenticationService.sendCode(payload);
     if (res) {
      this.state.go(mfaStateNames.VerifyCode, {
        phoneNumber: this.selectedItems[this.selectedInfo],
        email: this.selectedItems[this.selectedInfo],
        channel: payload.channel,
        acctId: this.accountInfo.acctId,
        loginApiResponse: this.uiRouterGlobals.params.loginApiResponse
      }, { custom: { isExplicitlyAllowedTransition: true } });
    }
  }

  async cancel() {
    await this.authService.logout();
    await this.state.go(stateNames.Login);
  }

  async tryAnotherVerification() {
    await this.state.go(mfaStateNames.SecurityQuestion, {
      securityQuestionID: this.accountInfo.personalInfo.securityQuestionID,
      loginApiResponse: this.uiRouterGlobals.params.loginApiResponse
    }, { custom: { isExplicitlyAllowedTransition: true } });
  }

}
