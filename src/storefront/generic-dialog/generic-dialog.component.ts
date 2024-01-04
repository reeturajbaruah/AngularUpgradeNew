import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/core';
import { modalSlideDown } from 'common/ui/animations/animations';
import { ENVIRON_CONFIG } from '../../common/upgrades';
import { cmsIds } from '../constants';
import { LogOffType, StorefrontService } from '../services/storefront.service';

export type Action = {
    key: string;
    type: 'button' | 'link';
    text: string;
};

export interface IGenericDialogInjectedValues {
    class?: string;
    header?: string;
    body?: string;
    image?: any;
    actions: Action[];
};

@Component({
    selector: 'generic-dialog-component',
    templateUrl: './generic-dialog.component.html',
    styleUrls: ['./generic-dialog.component.less'],
    animations: [modalSlideDown]
})
export class GenericDialogComponent implements OnInit {

    public closeIcon: any;
    public backArrow: any;
    public show = false;
    public minutes: number;
    public seconds: string;
   
    constructor(
        private dialogRef: MatDialogRef<GenericDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: IGenericDialogInjectedValues,
        private storefrontService: StorefrontService,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private stateService: StateService
    ) { }

    public get class(): string {
        return this.injectedData.class;
    }

    public get header(): string {
        return this.injectedData.header;
    }

    public get body(): string {
        return this.injectedData.body;
    }

    public get image(): any {
        return this.injectedData.image;
    }

    public get actions(): Action[] {
        return this.injectedData.actions;
    }

    public async call(key: string) {
        this.show = false;

        //For fade out animation
        await this.storefrontService.delay(300);

        this.dialogRef.close(key);
    }

    public handleInactivity() {
        const ms = this.environmentConfig.storefrontConfigs.StorefrontInactivityWarning;
        this.minutes = Math.floor(ms / 60000);
        let s = ((ms % 60000) / 1000);

        const updateTimer = setInterval(() => {
            s--;
            if (s < 0) {
                if (this.minutes === 0) {
                    this.call('reset');
                    clearInterval(updateTimer);
                }
                s = 59;
                this.minutes--;
            }
            this.seconds = s.toString();
            if (s < 10) {
                this.seconds = '0' + this.seconds;
            }
        }, 1000);
    }

    async ngOnInit() {
        //handle fade in animations
        await this.storefrontService.delay(300);

        if (this.class === 'maintenance-mode') {
            const interval = setInterval(async () => {
                const isMaintenanceMode = await this.storefrontService.isMaintenanceMode();
                if (!isMaintenanceMode) {
                    clearInterval(interval);
                    await this.call('close');
                    const item = await this.storefrontService.restart(true, LogOffType.Forced);
                    await this.stateService.go(item.startStateName);
                }
            }, this.environmentConfig.storefrontConfigs.StorefrontMaintenanceModeIntervalDelay);
        }
        if (this.class === 'inactivity') {
            this.handleInactivity();
        }
        if (['other-options-complete', 'csr'].includes(this.class)) {
            this.backArrow = await this.storefrontService.getCmsItem(cmsIds.BackArrowImgId);
        }
        if (['exit-session', 'skip-task', 'skipped-tasks', 'other-options', 'inactivity'].includes(this.class)) {
            this.closeIcon = await this.storefrontService.getCmsItem(cmsIds.CloseModalImgId);
        }

        this.show = true;
    }

}
