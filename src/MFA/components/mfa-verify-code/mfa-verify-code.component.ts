import { Channel, VerifyCodeCMS } from '2FA/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { UIRouterGlobals, StateService } from '@uirouter/angular';
import { CmsReplacementService } from 'cms/services';
import { mfaStateNames, source } from 'MFA/constant';
import { MultiFactorAuthenticationService } from '../../services/multi-factor-authentication.service';

@Component({
    selector: 'app-mfa-verify-code',
    templateUrl: './mfa-verify-code.component.html',
    styleUrls: ['./mfa-verify-code.component.less']
})
export class MfaVerifyCodeComponent implements OnInit {

    @Input() cmsData: VerifyCodeCMS;
    isEmail: boolean;
    source = source;

    constructor(
        private state: StateService,
        private cmsReplacementService: CmsReplacementService,
        public uiRouterGlobals: UIRouterGlobals,
        private mfaService: MultiFactorAuthenticationService,
    ) { }

    ngOnInit() {
        this.isEmail = this.uiRouterGlobals.params.channel === Channel.Email;
        this.cmsData.EMAIL_DESC = this.cmsReplacementService.transformTemplate(this.cmsData.EMAIL_DESC, { email: this.uiRouterGlobals.params.email.maskedInfo });
        this.cmsData.PHONE_DESC = this.cmsReplacementService.transformTemplate(this.cmsData.PHONE_DESC, { phoneNumber: this.uiRouterGlobals.params.phoneNumber.maskedInfo });
    }

    async verify() {
        await this.mfaService.authenticateUser();
        const loginApiResponse = this.uiRouterGlobals.params.loginApiResponse;
        this.mfaService.handleRedirects(loginApiResponse);
    }

    async tryAnotherWay() {
        await this.state.go(mfaStateNames.MultiFactorAuthentication, { custom: { isExplicitlyAllowedTransition: true } });
    }

}
