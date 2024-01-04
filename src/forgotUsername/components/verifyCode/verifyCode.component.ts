import { Component, Input, OnInit } from '@angular/core';
import { FrameComponent as ParentComponent } from '../frame/frame.component';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { CmsReplacementService } from 'cms/services';
import { VerifyCodeCMS } from '2FA/interfaces';
import { ForgotUsernameStateNames } from 'forgotUsername/forgotUsername.constants';
import { WebApiService } from 'forgotUsername/services/webApi/webApi.service';

@Component({
  selector: 'forgot-username-verify-code',
  templateUrl: './verifyCode.component.html',
  styleUrls: ['./verifyCode.component.less']
})
export class VerifyCodeComponent implements OnInit {

  public source = ParentComponent.source;

  @Input() cmsData: VerifyCodeCMS;

  constructor(
    private stateService: StateService,
    private cmsReplacementService: CmsReplacementService,
    public uiRouterGlobals: UIRouterGlobals,
    private webApiService: WebApiService
  ) { }

  ngOnInit() {
    this.cmsData.EMAIL_DESC = this.cmsReplacementService.transformTemplate(this.cmsData.EMAIL_DESC, { email: this.uiRouterGlobals.params.email });
  }

  public async verify(): Promise<void> {
    const res = await this.webApiService.forgotUsernameGetAccount({
      emailAddress: this.uiRouterGlobals.params.email,
      phoneNumber: null,
      tagNumber: null,
      eztagAgency: null,
      accountNumber: this.uiRouterGlobals.params.acctId
    });

    if (!res.hasError) {
      const params = {
        ...this.uiRouterGlobals.params,
        loginId: res.loginId
      };

      await this.stateService.go(ForgotUsernameStateNames.IdentityConfirmed, params, { custom: { isExplicitlyAllowedTransition: true } });
    }
  }

}
