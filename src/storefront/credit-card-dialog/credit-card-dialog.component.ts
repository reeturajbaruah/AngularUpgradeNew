import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { modalSlideDownSmall } from 'common/ui/animations/animations';
import { CmsUtilService } from 'cms/services';
import { CreditCardPromptEnum } from 'common/ui';
import { StorefrontService } from '../services/storefront.service';
import { cmsIds } from '../constants';
import { isObject } from 'lodash';
import { BehaviorSubject } from 'rxjs';

export interface ICreditCardDialogInjectedValues {
    state: CreditCardPromptEnum;
    isSnapPay: boolean;
    cmsData: any;
    closeDialog: BehaviorSubject<boolean>;
};

@Component({
    selector: 'credit-card-dialog-component',
    templateUrl: './credit-card-dialog.component.html',
    styleUrls: ['./credit-card-dialog.component.less'],
    animations: [modalSlideDownSmall]
})
export class CreditCardDialogComponent implements OnInit {

    public show = false;

    constructor(
        private dialogRef: MatDialogRef<CreditCardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private injectedData: ICreditCardDialogInjectedValues,
        private storefrontService: StorefrontService,
        private cmsUtilService: CmsUtilService,
    ) { }

    public get state(): string {
        switch (this.injectedData.state) {
            case CreditCardPromptEnum.Wait:
                return 'wait';
            case CreditCardPromptEnum.Success:
                return 'success';
            case CreditCardPromptEnum.Failure:
                return 'failure';
        }
    }

    public get closeIcon(): any {
        return this.injectedData.cmsData.find(x => x.ItemID === cmsIds.CloseModalImgId.toLowerCase());
    }

    public get promptMessage(): string {
        const item = this.injectedData.cmsData.find(x => x.ItemID === cmsIds.swipePromptId.toLowerCase());
        if(isObject(item) as any) {
            return item.Message;
        }

        return '';
    }

    public get promptImage(): any {
        let item;
        if (this.injectedData.isSnapPay) {
            item = this.injectedData.cmsData.find(x => x.ItemID === cmsIds.SnappayKioskSwipePromptAltId.toLowerCase());
        } else {
            item = this.injectedData.cmsData.find(x => x.ItemID === cmsIds.swipePromptAltId.toLowerCase());
        }
        if (isObject(item) as any) {
            return this.cmsUtilService.parseAllImageAttributes(item.Image);
        }    
    }

    public get successText(): string {
        const item = this.injectedData.cmsData.find(x => x.ItemID === cmsIds.swipeSuccessId.toLowerCase());
        if(isObject(item) as any) {
            return item.Title;
        }

        return '';
    }

    public get failureCms(): any {
        return this.injectedData.cmsData.find(x => x.ItemID === cmsIds.swipeFailureId.toLowerCase());
    }

    public async call(key: string) {
        this.show = false;

        //For fade out animation
        await this.storefrontService.delay(300);

        this.dialogRef.close(key);
    }

    async ngOnInit() {
        this.injectedData.closeDialog.subscribe(async (val) => {
            if (val) {
                await this.call('close');
            }
        });

        //handle fade in animations
        await this.storefrontService.delay(300);
        this.show = true;
    }

}
