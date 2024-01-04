import { Component, OnInit, Inject, Input } from '@angular/core';
import { StateService } from '@uirouter/core';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { CloseAccountFrameComponent } from '../closeAccountFrame/frame.component';

export interface CloseAccountAgreementCms {
    accountClosureAgreement: string;
    TitlePretext: string;
    TitleAgreement: string;
    BtnAccept: string;
    BtnDecline: string;
    ShortDescription: string;
}

@Component({
    selector: 'close-account-agreement',
    templateUrl: './closeAccountAgreement.html',
    styleUrls: ['./closeAccountAgreement.less']
})
export class CloseAccountAgreementComponent implements OnInit {
    constructor(
        private parent: CloseAccountFrameComponent,
        private stateService: StateService,
        private webStorage: WebStorageService
    ) { }
    @Input() public cmsContent: CloseAccountAgreementCms;

    ngOnInit() {
        this.webStorage.removeEntry('closeAgreed');
        this.cmsContent.accountClosureAgreement = this.cmsContent.ShortDescription;
        this.parent.stepNum = 1;

    }

    onAccept(state) {
        this.webStorage.setKeyValue('closeAgreed', true);

        if (this.parent.closeAccountRefund.currentBalance === 0) {
            this.parent.onCloseContinue();
            return;
        }
        this.stateService.go(state.name);
    }

    onDecline(state) {
        this.stateService.go(state.name);
    }
}
