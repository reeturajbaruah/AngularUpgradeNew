import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StateService } from '@uirouter/core';
import { MailingAddressService } from 'vehicles/shared';
import { CloseAccountFrameComponent } from '../closeAccountFrame/frame.component';

export interface CloseAccountReviewCms {
    ShortDescription: string;
    TitlePretext: string;
    TitleReview: string;
    BtnContinue: string;
}

@Component({
    selector: 'close-account-review',
    templateUrl: './closeAccountReview.html',
    styleUrls: ['./closeAccountReview.less']
})
export class CloseAccountReviewComponent implements OnInit, OnDestroy {
    constructor(
        private stateService: StateService,
        private parent: CloseAccountFrameComponent,
        private mailingAddressService: MailingAddressService
    ) { }
    @Input() cmsContent: CloseAccountReviewCms;

    ngOnInit() {
        this.parent.stepNum = 3;
    }

    ngOnDestroy(): void {
        this.mailingAddressService.clearData();
    }

    public async nextState(state) {
        await this.stateService.go(state.name);
    };
}
