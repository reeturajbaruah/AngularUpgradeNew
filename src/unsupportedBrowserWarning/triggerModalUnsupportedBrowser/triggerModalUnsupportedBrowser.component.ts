import {
    Component, OnInit, Inject
} from '@angular/core';
import { UnsupportedBrowserModalComponent, InjectionValues } from 'unsupportedBrowserWarning/unsupportedBrowserModal/unsupportedBrowserModal.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { isEmpty } from 'lodash';
import * as bowser from 'bowser';
import { GenericRepoService } from '../../common/services';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

export interface CmsContent {
    Title: string;
    ShortDescription: string;
}

@Component({
    selector: 'trigger-modal-unsupported-browser',
    template: ''
})


export class TriggerModalUnsupportedBrowserComponent implements OnInit {

    constructor(
        private genericRepoService: GenericRepoService,
        private storefrontUtilityService: StorefrontUtilityService,
        private matDialog: MatDialog
    ) { }


    ngOnInit() {
        const userAgent = this.getUserAgent();
        const parser = bowser.getParser(userAgent);

        const conditions: bowser.Parser.checkTree = {
            chrome: '>5',
            safari: '>7',
            firefox: '>12',
            'internet explorer': '<0', //No versions of internet explorer version are supported
            'microsoft edge': '>10',
            opera: '>20',
        };

        if (!this.storefrontUtilityService.isRunningAsKiosk && parser != null && !parser.satisfies(conditions) ) {
            this.showBrowserEndSupportModal();
        }
    }

    private getUserAgent(): any {
        return window.navigator.userAgent;
    }

    private async showBrowserEndSupportModal() {
        const cmsContent = await this.getCmsContent();

        if (!isEmpty(cmsContent)) {
            const settings: MatDialogConfig<InjectionValues> = {
                data: {
                    ModalHeader: cmsContent.Title,
                    ModalBodyText: cmsContent.ShortDescription
                },
                maxWidth: '400px'
            };

            this.matDialog
                .open<UnsupportedBrowserModalComponent, InjectionValues>(UnsupportedBrowserModalComponent, settings);
        }
    }

    private async getCmsContent() {
        const cmsResponse = await this.genericRepoService.dataFactory
            .getCmsPageById({
                ItemId: 'DAC02AE0-896C-4647-A4FB-90AF07B1E6CF'
            });

        return (cmsResponse.errors.length === 0)
            ? JSON.parse(cmsResponse.cmsResponse)
            : {};
    }
}
