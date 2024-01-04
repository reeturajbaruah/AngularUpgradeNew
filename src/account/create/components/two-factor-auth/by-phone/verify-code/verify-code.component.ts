import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';

import { Channel, LoginResetOption, VerifyCodeCMS } from '2FA/interfaces';
import { FrameComponent } from 'account/create/components/frame/frame.component';
import { CmsReplacementService } from 'cms/services';
import { States } from 'account/create/states';
import { ToasterService } from 'common/services';
import { TwoFactorAuthManagerService } from 'account/create/services/two-factor-auth/manager/manager.service';
import { ITwoFactorAuthConfig } from 'account/create/models/two-factor-auth-config.model';

@Component({
    selector: 'ca-verify-code',
    templateUrl: './verify-code.component.html',
    styleUrls: ['./verify-code.component.less']
})
export class CAVerifyCodeComponent implements OnInit {

    @Input() cmsData: VerifyCodeCMS;
    public isEmail: boolean;
    config: ITwoFactorAuthConfig;


    constructor(
        public parent: FrameComponent,
        private state: StateService,
        private cmsReplacementService: CmsReplacementService,
        public uiRouterGlobals: UIRouterGlobals,
        private toasterService: ToasterService,
        private twoFactorManagerService: TwoFactorAuthManagerService
    ) { }

    async ngOnInit() {
        this.isEmail = this.uiRouterGlobals.params.channel === Channel.Email;

        this.config = await this.twoFactorManagerService.getConfig(this.uiRouterGlobals.params);

        this.cmsData.EMAIL_DESC = this.cmsReplacementService.transformTemplate(this.cmsData.EMAIL_DESC, { email: this.uiRouterGlobals.params.email });
        this.cmsData.PHONE_DESC = this.cmsReplacementService.transformTemplate(this.cmsData.PHONE_DESC,
            { phoneNumber: this.config.phoneNumber });
    }

    async tryAnotherWay() {
        await this.state.go(States.PhoneValidation);
    }

    async verify() {

        this.twoFactorManagerService.clean();
        await this.toasterService.show('Success', 'Verification is successful');
        await this.state.go(this.config.validationSuccessState);

    }
}
