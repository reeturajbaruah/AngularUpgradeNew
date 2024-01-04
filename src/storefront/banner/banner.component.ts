import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { LogOffType, StorefrontService, WorkflowStateId } from 'storefront/services/storefront.service';
import { cmsIds } from '../constants';
import { StorefrontModalService } from '../services/modal.service';

@Component({
    selector: 'storefront-banner',
    templateUrl: './banner.component.html',
    styleUrls: [
        './banner.component.less'
    ]
})
export class BannerComponent implements OnInit {
    @Input() desktopMode: boolean;
    isReady = false;
    public HCTRALogo: any;
    public clickCount = 0;
    public isModalActive: boolean;

    constructor(
        private storefrontService: StorefrontService,
        private modalService: StorefrontModalService,
        private stateService: StateService,
        private window: Window
    ) {
    }

    ngOnInit() {
        this.storefrontService.getCmsItem(cmsIds.HCTRALogoId).then((response) => {
            this.HCTRALogo = response;
            this.isReady = true;
        });
    }

    public async exit(): Promise<void> {
        if (this.isModalActive) {
            return;
        }

        this.isModalActive = true;

        const done = await this.modalService.exit();

        this.isModalActive = false;

        if (done) {
            if (this.storefrontService.desktopMode) {
                const item = await this.storefrontService.goToSurvey();
                await this.stateService.go(item.startStateName);
            } else {
                if (this.storefrontService.currentWorkItem.id === WorkflowStateId.SELECT) {
                    this.storefrontService.hideSelectionWorkItem = true;
                    await this.storefrontService.delay(500);
                }
                if (this.storefrontService.isActiveSession) {
                    const item = await this.storefrontService.goToSurvey();
                    await this.stateService.go(item.startStateName);
                } else {
                    const item = await this.storefrontService.restart();
                    this.stateService.go(item.startStateName);
                }
            }
        }
    }

    public async hardReset() {
        this.clickCount++;
        if (this.clickCount === 10) {
            //
            await this.storefrontService.restart(true, LogOffType.Forced);
            this.window.location.reload();
            this.clickCount = 0;
        }
    }

    public showExitBtn(): boolean {
        const item = this.storefrontService.currentWorkItem;
        return item ? item.id !== WorkflowStateId.START && item.id !== WorkflowStateId.SURVEY : false;
    }

    public showLanguageSelect(): boolean {
        const item = this.storefrontService.currentWorkItem;
        return item ? item.id !== WorkflowStateId.START : false;
    }
}
