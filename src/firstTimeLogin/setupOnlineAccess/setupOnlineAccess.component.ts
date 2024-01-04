import { Component, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { PasswordValidationInfo, StateConfigOrName } from 'common/interfaces';
import { OnlineAccessLoginInfo, SetupAccessCms } from 'firstTimeLogin/interfaces';
import { FirstTimeLoginService } from 'firstTimeLogin/services/firstTimeLogin.service';
import { DialogService, SecurityQuestionInfo } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from '../../common/ui';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'setup-access',
    templateUrl: './setupOnlineAccess.html',
    styleUrls: ['./setupOnlineAccess.less']
})
export class FirstTimeLoginSetupAccessComponent implements OnInit {

    @Input() cmsData: SetupAccessCms;
    @Input() public pwCmsData: PasswordValidationInfo;

    public username: string;
    public password: string;
    public confirmPassword: string;
    public emailAddress: string;
    public confirmEmailAddress: string;
    public altEmailAddress: string;
    public confirmAltEmailAddress: string;
    public securityQuestionID: string;
    public securityAnswer: string;
    public confirmSecurityAnswer: string;

    public showNewSecurityAnswer: boolean;
    public showConfirmSecurityAnswer: boolean;
    public showNewPassword: boolean;
    public showConfirmPassword: boolean;

    public doPasswordsMatch: boolean;
    public doEmailsMatch: boolean;
    public doAltEmailsMatch: boolean;
    public doSQsMatch: boolean;

    public securityQuestions: SecurityQuestionInfo[];

    constructor(
        private state: StateService,
        private firstTimeLoginService: FirstTimeLoginService,
        private uiRouterGlobals: UIRouterGlobals,
        private dialogService: DialogService
    ) { }

    async ngOnInit() {
        this.securityQuestions = await this.firstTimeLoginService.getSecurityQuestions();

        this.doPasswordsMatch = true;
        this.doAltEmailsMatch = true;
        this.doEmailsMatch = true;
        this.doSQsMatch = true;
    }

    public validateMatchingPassword(form: NgForm) {
        if (!form.form.controls.password.pristine && !form.form.controls.confirmPassword.pristine) {
            this.doPasswordsMatch = this.password === this.confirmPassword;
        }
    }

    public validateMatchingEmail(form: NgForm) {
        if (!form.form.controls.primaryEmail_email.pristine && !form.form.controls.confirmPrimaryEmail_email.pristine) {
            this.doEmailsMatch = this.emailAddress === this.confirmEmailAddress;
        }
    }

    public validateMatchingAltEmail(form: NgForm) {
        if (!form.form.controls.altEmail_email.pristine && !form.form.controls.confirmAltEmail_email.pristine) {
            this.doAltEmailsMatch = this.altEmailAddress === this.confirmAltEmailAddress;
        }
    }

    public validateMatchingSQ(form: NgForm) {
        if (!form.form.controls.answer.pristine && !form.form.controls.confirmAnswer.pristine) {
            this.doSQsMatch = this.securityAnswer === this.confirmSecurityAnswer;
        }
    }

    public async submit(isValid: boolean, nextState: StateConfigOrName) {
        
        if (!isValid) {
            return;
        }

        if (!this.doPasswordsMatch || !this.doEmailsMatch || !this.doAltEmailsMatch || !this.doSQsMatch) {
            return;
        }

        const accountInfo = {
            username: this.username,
            password: this.password,
            email: this.emailAddress,
            securityQuestionID: this.securityQuestionID,
            securityQuestionAnswer: this.securityAnswer,
            alternateEmail: this.altEmailAddress,
            acctId: this.uiRouterGlobals.params.acctId,
            dbSessionId: this.uiRouterGlobals.params.dbSessionId
        } as OnlineAccessLoginInfo;

        const accountUpdated = await this.firstTimeLoginService.setupAccount(accountInfo);
        
        if (accountUpdated) {
            await this.state.go(nextState);
        }
    }

    public async cancel(state: StateDeclaration) {
        const data: GenericCmsModalInjectionValues = {
            cmsContent: {
                Title: this.cmsData.CANCEL_TITLE,
                PrimaryContent: this.cmsData.CANCEL_CONTEXT,
                AcceptBtn: 'Yes',
                CancelBtn: 'Close'
            }
        };

        const res = await this.dialogService.openGenericModal(GenericCmsModalComponent, data);

        if (res) {
            await this.state.go(state);
        }
    }
}
