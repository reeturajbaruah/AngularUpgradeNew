import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { SiteCoreItem } from 'cms/cms.module';
import { AccountService, DialogService, ResponseErrorService, SecurityQuestionInfo } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui/modals/genericCmsModal/genericCmsModal.component';
import { MissingInformationFlags } from 'login/interfaces';
import { stateNames as profileStates } from 'profile/constants';


interface CmsContent {
    Title: string;  ///main title
    ShortDescription: string; //"Subtitle", under the main title
    Children: SiteCoreItem[]; //for the modal, after user saves info
}

@Component({
    selector: 'update-security-question',
    templateUrl: './updateSecurityQuestion.html',
    styleUrls: ['./updateSecurityQuestion.less']
})
export class UpdateSecurityQuestionComponent implements OnInit {
    @Input() cmsContent: CmsContent;
    public isShowPassword = false;
    public isShowSecurityAnswer = false;
    public isShowSecurityAnswerConfirm = false;
    public securityQuestions: SecurityQuestionInfo[];

    constructor(
        private responseErrorService: ResponseErrorService,
        private accountService: AccountService,
        private state: StateService,
        private addMissingInformationService: AddMissingInformationService,
        private dialogService: DialogService
    ) { }

    //form fields
    public addMissingInformation: {
        password: string;
        confirmPassword: string;
        email: string;
        confirmEmail: string;
        securityAnswer: string; //used in form
        confirmSecurityAnswer: string; //used in form
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

        this.setSecurityQuestions();
    }

    private async setSecurityQuestions() {
        const apiResponse = await this.accountService.getSecurityQuestions();

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            this.securityQuestions = apiResponse.securityQuestions;
        }
    }

    private async showCompletionModal() {
        const modalCms = this.cmsContent.Children[0];
        const data = {
            cmsContent: {
                Title: modalCms.Title,
                AcceptBtn: 'OKAY',
                PrimaryContent: modalCms.ShortDescription
            }
        };

        await this.dialogService.openGenericModal<GenericCmsModalComponent, GenericCmsModalInjectionValues>(GenericCmsModalComponent, data);
    }

    // Used in the action buttons component.
    public async saveInformation(form: NgForm) {
        if (!form.valid) { return; }

        const apiResponse = await this.accountService.saveInformation(this.addMissingInformation);

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            await this.showCompletionModal();
            await this.state.go(profileStates.AccountDetails);
        }

    }
    // Used in the action buttons component.
    public async cancel() {
        await this.state.go(profileStates.AccountDetails);
    };
}


