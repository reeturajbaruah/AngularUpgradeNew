import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { TwoFactorAuthSendRequest, Channel, PhoneVerificationCMS } from '2FA/interfaces';
import { WindowRef } from 'common/module';
import { WebStorageConst } from 'constants/module';
import { CmsReplacementService } from 'cms/services';
import { FrameComponent } from 'account/create/components/frame/frame.component';
import { TwoFactorAuthManagerService } from 'account/create/services/two-factor-auth/manager/manager.service';
import { ITwoFactorAuthConfig } from 'account/create/models/two-factor-auth-config.model';
import { SiteCoreItem } from 'cms/cms.module';
import { WizardComponent } from 'common/ui';

@Component({
    selector: 'ca-phone-verification',
    templateUrl: './phone-verification.component.html',
    styleUrls: ['./phone-verification.component.less']
})
export class CAPhoneVerificationComponent implements OnInit {

    @Input() cmsData: PhoneVerificationCMS;
    public isText: boolean;
    config: ITwoFactorAuthConfig;
    @Input() cancelContent: SiteCoreItem;

    constructor(
        private state: StateService,
        private parent: FrameComponent,
        protected webStorageConst: WebStorageConst,
        @Inject(WindowRef) private window: Window,
        private cmsReplacementService: CmsReplacementService,
        private uiRouterGlobals: UIRouterGlobals,
        private twoFactorManagerService: TwoFactorAuthManagerService
    ) { }

    async ngOnInit() {
        this.isText = true;

        this.config = await this.twoFactorManagerService.getConfig(this.uiRouterGlobals.params);

        this.cmsData.LongDescription = this.cmsReplacementService.transformTemplate(this.cmsData.LongDescription,
            { phoneNumber: this.config.phoneNumber });
    }

    async sendCode(state: StateDeclaration) {


        const request: TwoFactorAuthSendRequest = {
            to: this.config.phoneNumber,
            language: this.window.localStorage[this.webStorageConst.selectedLanguage],
            accountId: this.config.acctId,
            source: this.parent.source,
            channel: this.isText ? Channel.Sms : Channel.Phone
        };

        const res = this.twoFactorManagerService.sendCode(request);

        if (res) {
            this.state.go(state, {
                email: null,
                channel: request.channel,
            }, { custom: { isExplicitlyAllowedTransition: true } });
        }
    }

    async cancel(event, wizardUi: WizardComponent) {
        this.twoFactorManagerService.clean();
        await this.parent.cancel(this.cancelContent, wizardUi);
    }
}
