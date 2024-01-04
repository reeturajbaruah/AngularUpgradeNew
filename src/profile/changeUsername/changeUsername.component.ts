import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { MissingInformationFlags } from 'login/interfaces';
import { stateNames as profileStates } from 'profile/constants';


interface CmsContent {
    Title: string;  ///main title
    ShortDescription: string; //"Subtitle", under the main title
    LongDescription: string; //Primary content with SVG
    completionModalTitle: string; //for the modal, after user saves info
    completionModalBody: string; //for the modal, after user saves info
}

@Component({
    selector: 'change-username',
    templateUrl: './changeUsername.html',
    styleUrls: ['./changeUsername.less']
})
export class ChangeUsernameComponent implements OnInit {
    @Input() cmsContent: CmsContent;
    public isShowPassword = false;

    constructor(
        private genericRepoService: GenericRepoService,
        private responseErrorService: ResponseErrorService,
        private state: StateService,
        private addMissingInformationService: AddMissingInformationService,
        private dialogService: DialogService
    ) { }

    //form fields
    public addMissingInformation: {
        password: string;
        confirmPassword: string; //used in form
        username: string;
        email: string;
        confirmEmail: string;
        securityAnswer: string;
        confirmSecurityAnswer: string;
        securityQuestionID: string;
        currentPassword: string; //used in form
        newUsername: string;
        missingInformationFlags: MissingInformationFlags;
    };

    ngOnInit() {
        this.addMissingInformation = {
            password: '',
            confirmPassword: '',
            username: '',
            email: '',
            confirmEmail: '',
            securityAnswer: '',
            confirmSecurityAnswer: '',
            securityQuestionID: '',
            currentPassword: '',
            newUsername: '',
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

        const apiResponse = await this.genericRepoService.dataFactory.updateLoginID(this.addMissingInformation);

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            this.showCompletionModal();
        }

    }
    // Used in the action buttons component.
    public async cancel() {
        await this.state.go(profileStates.AccountDetails);
    };
}


