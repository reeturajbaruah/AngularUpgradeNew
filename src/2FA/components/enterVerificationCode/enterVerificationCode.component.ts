import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Channel, TwoFactorAuthSendRequest, TwoFactorAuthVerifyRequest, VerifyCodeCMS } from '../../interfaces';
import { WebStorageConst } from '../../../constants/webstorage.constants';
import { WindowRef } from '../../../common/module';
import { TwoFAService } from '../../services/2FA.service';
import { ToasterService } from '../../../common/services';

@Component({
    selector: 'enter-verification-code',
    templateUrl: './enterVerificationCode.component.html',
    styleUrls: ['./enterVerificationCode.component.less']
})
export class EnterVerificationCodeComponent implements OnInit {

    @Input() cmsInfo: VerifyCodeCMS;
    @Input() contactInfo: string;
    @Input() acctId: number;
    @Input() source: string;
    @Input() channel: Channel;
    public verificationCode: string;
    public isEmail: boolean;
    public saveDevice: boolean;
    @Output() tryAnotherWayEmit = new EventEmitter();
    @Output() verifyEmit = new EventEmitter();
    @Input() disableTryAnotherWay = false;
    @Input() disableWarning = true;
    @Input() isRememberDevice = false;

    constructor(
        protected webStorageConst: WebStorageConst,
        @Inject(WindowRef) private window: Window,
        private twoFAService: TwoFAService,
        private toasterService: ToasterService
    ) { }

    ngOnInit() {
        this.isEmail = this.channel === Channel.Email;
        this.saveDevice = false;
    }

    public async resendCode() {
        const data: TwoFactorAuthSendRequest = {
            to: this.contactInfo,
            language: this.window.localStorage[this.webStorageConst.selectedLanguage],
            accountId: this.acctId,
            source: this.source,
            channel: this.channel
        };

        const res = await this.twoFAService.sendVerificationCode(data);

        if (res) {
            if (res.verificationSent) {
                this.toasterService.show('Success', this.cmsInfo.RESEND_SUCCESS);
            }
            else {
                this.toasterService.show('Error', this.cmsInfo.RESEND_FAIL);
            }
        }
    }

    public tryAnotherWay() {
        this.tryAnotherWayEmit.emit();
    }

    public toggleSaveDevice() {
        this.saveDevice = !this.saveDevice;
    }

    public async verify() {
        const res = await this.twoFAService.validateVerificationCode({
            code: this.verificationCode,
            source: this.source
        } as TwoFactorAuthVerifyRequest);

        if (res) {
            if (res.isVerified) {
                if (this.saveDevice) {
                    await this.twoFAService.saveDevice();
                }
                this.verifyEmit.emit();
            }
            else if (res.errors?.length === 0) {
                this.toasterService.show('Error', this.cmsInfo.VERIFY_FAIL);
            }
        }
        else {
            if (!this.disableWarning) {
                this.toasterService.show('Warning', this.isEmail ? this.cmsInfo.SUGGEST_PHONE : this.cmsInfo.SUGGEST_EMAIL);
            }
        }
    }

}
