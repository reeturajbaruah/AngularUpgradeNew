import { Component, Inject, OnInit } from '@angular/core';
import { GenericRepoService } from '../../../services';

interface CmsContent {
    Title: string;
    ShortDescription: string;
}

@Component({
    selector: 'error-message-pop-up-modal',
    templateUrl: './errorMessagePopUpModal.html',
    styleUrls: ['./errorMessagePopUpModal.less']
})

export class ErrorMessagePopUpModalComponent implements OnInit {
    constructor(
        private genericRepoService: GenericRepoService
    ) { }

    cmsContent = {} as CmsContent;

    async ngOnInit() {
        this.cmsContent = await this.getCmsContent();
    }

    private async getCmsContent() {
        const cmsResponse = await this.genericRepoService.dataFactory.getCmsPageById({
            ItemId: 'E202A91D-9519-4493-8051-951691609D2A'
        });

        return (cmsResponse.errors.length === 0)
            ? JSON.parse(cmsResponse.cmsResponse)
            : {};
    }
}
