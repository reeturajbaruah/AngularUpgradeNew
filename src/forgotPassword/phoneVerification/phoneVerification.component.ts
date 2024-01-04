import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { ForgotPasswordFrameComponent } from '../frame/frame.component';
import { WebStorageConst } from '../../constants/webstorage.constants';
import { TwoFactorAuthSendRequest, Channel, PhoneVerificationCMS } from '2FA/interfaces';
import { WindowRef } from '../../common/module';
import { CmsReplacementService } from '../../cms/services';
import { ForgotPasswordService } from '../services/forgotPassword.service';

@Component({
    selector: 'phone-verification',
    templateUrl: './phoneVerification.html',
    styleUrls: ['./phoneVerification.less']
})
export class ForgotPasswordPhoneVerificationComponent implements OnInit{

    @Input() cmsData: PhoneVerificationCMS;
    public isText: boolean;

    constructor(
        private parent: ForgotPasswordFrameComponent,
        private state: StateService,
        private forgotPasswordService: ForgotPasswordService,
        protected webStorageConst: WebStorageConst,
        @Inject(WindowRef) private window: Window,
        private cmsReplacementService: CmsReplacementService,
        private uiRouterGlobals: UIRouterGlobals
    ) { }

    ngOnInit() {
        this.isText = true;

        this.cmsData.LongDescription = this.cmsReplacementService.transformTemplate(this.cmsData.LongDescription, { phoneNumber: this.uiRouterGlobals.params.phoneNumber });
    }

    public async sendCode(state: StateDeclaration) {
        const data: TwoFactorAuthSendRequest = {
            to: this.uiRouterGlobals.params.phoneNumber,
            language: this.window.localStorage[this.webStorageConst.selectedLanguage],
            accountId: this.uiRouterGlobals.params.acctId,
            source: this.parent.source,
            channel: this.isText ? Channel.Sms : Channel.Phone 
        };

        const res = await this.forgotPasswordService.sendCode(data);

        if (res) {
            this.state.go(state, {
                phoneNumber: data.to,
                email: null,
                acctId: this.uiRouterGlobals.params.acctId,
                loginId: this.uiRouterGlobals.params.loginId,
                dbSessionId: this.uiRouterGlobals.params.dbSessionId,
                channel: data.channel,
                isMissingEmail: this.uiRouterGlobals.params.isMissingEmail
            }, { custom: { isExplicitlyAllowedTransition: true } });
        }
    }
}
