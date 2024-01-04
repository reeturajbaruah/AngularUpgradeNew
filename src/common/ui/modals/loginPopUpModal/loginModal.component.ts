import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/angular'; 
import { stateNames as loginStateNames } from 'login/constants';
import { CmsImage } from 'common/interfaces';
import { CmsUtilService } from 'cms/services';

export interface CmsContent {
    Title: string;
    PrimaryContent: string;
    AcceptButton: string;
    RejectButton: string;
}

export interface CloseImage {
    Image: string;
}

export interface LoginPopUpInjectionValues {
    cmsContent: CmsContent;
    closeImage: CloseImage;
}

@Component({
    selector: 'login-modal-component',
    templateUrl: './loginModal.html',
    styleUrls: ['./loginModal.less']
})
export class LoginModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<LoginModalComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: LoginPopUpInjectionValues,
        private state: StateService,
        private cmsUtilService: CmsUtilService
    ) { }

    public cmsContent: CmsContent;
    public closeImage: CloseImage;
    public cmsImage: CmsImage;

    ngOnInit() {
        this.cmsContent = this.injectedData.cmsContent;
        this.cmsImage = this.cmsUtilService.parseAllImageAttributes((this.injectedData.closeImage || {}).Image);
    }

    public acceptButtonClick() {
        this.state.go(loginStateNames.Login);
        this.dialogRef.close();
    }

    public close() {
        this.dialogRef.close();
    }

}
