import { Input, Component, Injectable, Inject, OnInit } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { CreateLoginAccountInfo, CreateLoginInfo } from 'common/models';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { PasswordValidationInfo } from 'common/interfaces';
import { SyncRiteToggles } from 'shared/interfaces/toggles/sync-rite-toggles.interface';
@Component({
    selector: 'create-account-form-entry',
    templateUrl: './createAccount.html',
    styleUrls: ['./createAccount.less'],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ]
})

export class CreateAccountComponent implements OnInit {

    constructor(
        private form: NgForm,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }
    //Binding
    @Input() hasInitialLoginInfo: boolean;
    @Input() accLoginInfo: CreateLoginAccountInfo;
    @Input() sercurityInfo: CreateLoginInfo;
    @Input() securityQuestions: { securityQuestion: string; securityQuestionID: number }[];
    @Input() passwordValidationCMS: PasswordValidationInfo;
    @Input() securityQuestion: string;
    @Input() isShowPassword: boolean;
    @Input() isShowSecurityAnswer: boolean;
    @Input() isShowEmail = true;
    @Input() isShowPrimaryPhone = true;
    
    @Input() statesList: any[] = [];

    syncRiteToggles: SyncRiteToggles;
    @Input() phoneALertsOptInCMS: string;

    get submitted(): boolean {
        return this.form.submitted;
    }

    get staticQuestion(): string {
        return (this.securityQuestions && this.accLoginInfo
            ? this.securityQuestions.find(x => x.securityQuestionID === this.accLoginInfo.securityQuestionID).securityQuestion
            : '');
    }

    ngOnInit() {
        this.syncRiteToggles = this.environmentConfig.syncRiteToggles;
        if(this.syncRiteToggles.SyncRitePhoneOptIn) {
            this.accLoginInfo.smsAlertsOptIn = true;
        }
    }
}
