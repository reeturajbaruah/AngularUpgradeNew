import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { AccountService, DialogService, ResponseErrorService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { MissingInformationFlags } from 'login/interfaces';
import { stateNames as profileStates } from 'profile/constants';
import { PasswordValidationInfo } from 'common/interfaces';


interface CmsContent {
    Title: string;  ///main title
    ShortDescription: string; //"Subtitle", under the main title
    completionModalTitle: string; //for the modal, after user saves info
    LongDescription: string; //for the modal, after user saves info (Modal Body), Primary content with SVG
}

@Component({
    selector: 'change-password',
    templateUrl: './changePassword.html',
    styleUrls: ['./changePassword.less']
})

export class ChangePasswordComponent implements OnInit {
    @Input() cmsContent: CmsContent;
    @Input() pwCmsData: PasswordValidationInfo;
    public isShowCurrentPassword = false;
    public isShowNewPassword = false;

    constructor(
        private responseErrorService: ResponseErrorService,
        private accountService: AccountService,
        private state: StateService,
        private addMissingInformationService: AddMissingInformationService,
        private dialogService: DialogService
    ) { }

    //form fields
    public addMissingInformation: {
        password: string; //new password, used in form
        confirmPassword: string; //confirm new password, used in form
        email: string;
        confirmEmail: string;
        securityAnswer: string;
        confirmSecurityAnswer: string;
        securityQuestionID: string;
        currentPassword: string; //used in form
        missingInformationFlags: MissingInformationFlags;
    };

    ngOnInit() {
        this.addMissingInformation = {
            password: '',
            confirmPassword: '',
            email: '',
            confirmEmail: '',
            securityAnswer: '',
            confirmSecurityAnswer: '',
            securityQuestionID: '',
            currentPassword: '',
            missingInformationFlags: this.addMissingInformationService.returnMissingInformation()
        };
    }

    private async showCompletionModal() {
        const data: GenericCmsModalInjectionValues = {
            cmsContent: {
                Title: this.cmsContent.completionModalTitle,
                AcceptBtn: 'OKAY',
                PrimaryContent: this.cmsContent.LongDescription
            }
        };

        await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);
        await this.state.go(profileStates.AccountDetails);
    }

    // Used in the action buttons component.
    public async saveInformation(form: NgForm) {
        if (!form.valid) { return; }

        this.addMissingInformation.securityAnswer = null;
        const apiResponse = await this.accountService.saveInformation(this.addMissingInformation);

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            this.showCompletionModal();
        }
    }

    // Used in the action buttons component.
    public async cancel() {
        await this.state.go(profileStates.AccountDetails);
    };
}
