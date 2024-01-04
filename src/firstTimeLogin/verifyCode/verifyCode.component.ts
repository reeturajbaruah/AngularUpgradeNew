import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { FirstTimeLoginFrameComponent } from '../frame/frame.component';
import { CmsReplacementService } from '../../cms/services';
import { stateNames } from '../constants';
import { Channel, LoginResetOption, VerifyCodeCMS } from '2FA/interfaces';

@Component({
    selector: 'first-time-login-verify-code',
    templateUrl: './verifyCode.html',
    styleUrls: ['./verifyCode.less']
})
export class FirstTimeLoginVerifyCodeComponent implements OnInit {

    @Input() cmsData: VerifyCodeCMS;
    public isEmail: boolean;

    constructor(
        public parent: FirstTimeLoginFrameComponent,
        private state: StateService,
        private cmsReplacementService: CmsReplacementService,
        public uiRouterGlobals: UIRouterGlobals,
    ) { }

    ngOnInit() {
        this.isEmail = this.uiRouterGlobals.params.channel === Channel.Email;

        this.cmsData.EMAIL_DESC = this.cmsReplacementService.transformTemplate(this.cmsData.EMAIL_DESC, { email: this.uiRouterGlobals.params.email });
        this.cmsData.PHONE_DESC = this.cmsReplacementService.transformTemplate(this.cmsData.PHONE_DESC, { phoneNumber: this.uiRouterGlobals.params.phoneNumber });
    }

    public tryAnotherWay() {
        this.state.go(stateNames.FindAccount,
            { resetOption: this.isEmail ? LoginResetOption.Phone : LoginResetOption.Email },
            { custom: { isExplicitlyAllowedTransition: true } });
    }

    public async verify() {
        this.state.go(stateNames.SetupOnlineAccess, this.uiRouterGlobals.params, { custom: { isExplicitlyAllowedTransition: true } });
    }
}
