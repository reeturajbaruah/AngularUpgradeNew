import { Component, Inject, OnInit, Input } from '@angular/core';
import { DialogService, GenericRepoService, ResponseErrorService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { StorefrontUtilityService } from '../../../storefront/services/storefrontUtility.service';

interface CmsContent {
    ShortDescription: string;
    LongDescription?: string;
}
export const shortContentCmsId = 'B940C0F3-8AD4-4A0F-B81E-C0E098CB0B2A';
export const fullContentCmsId = '3C775A4E-74F4-4347-B0F2-E972329214C2';

@Component({
    selector: 'eft-ach-disclaimer',
    templateUrl: './eftAchDisclaimer.html',
    styleUrls: ['./eftAchDisclaimer.less']
})

export class EftAchDisclaimerComponent implements OnInit {

    constructor(
        private genericRepoService: GenericRepoService,
        private responseErrorService: ResponseErrorService,
        private dialogService: DialogService,
        private storefrontUtilityService: StorefrontUtilityService
    ) { }

    public cmsContent: CmsContent = { ShortDescription: '', LongDescription: '' };

    private asModal: boolean;

    async ngOnInit() {

        this.asModal = this.storefrontUtilityService.isRunningAsKiosk;

        const promises = [];
        promises.push(this.genericRepoService.dataFactory.getCmsPageById({ ItemId: shortContentCmsId, Fields: 'ShortDescription' }));

        if (this.asModal) {
            promises.push(this.genericRepoService.dataFactory.getCmsPageById({ ItemId: fullContentCmsId, Fields: 'LongDescription' }));
        }

        const [shortResponse, longResponse] = await Promise.all(promises);

        if (this.responseErrorService.isErrorFree(shortResponse)) {
            const { ShortDescription } = JSON.parse(shortResponse.cmsResponse);
            this.cmsContent.ShortDescription = ShortDescription;
        }

        if (this.asModal && this.responseErrorService.isErrorFree(longResponse)) {
            const { LongDescription } = JSON.parse(longResponse.cmsResponse);
            this.cmsContent.LongDescription = LongDescription;
        }
    }

    public async bubbledClick(event: PointerEvent) {
        if (!this.asModal || !event || !event.target) {
            return;
        }

        const elm = event.target as HTMLAnchorElement;
        const name = (elm.localName || '').toLowerCase();

        if (name !== 'a' || !elm.href) {
            return;
        }

        event.preventDefault();

        await this.dialogService.openGenericModal(GenericCmsModalComponent, {
            cmsContent: {
                Title: elm.innerText,
                PrimaryContent: this.cmsContent.LongDescription,
                AcceptBtn: 'Close'
            }
        } as GenericCmsModalInjectionValues);
    }
}
