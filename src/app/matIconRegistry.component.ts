import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SiteCoreMediaItem } from 'cms/cms.module';
import { commonCmsIds } from 'cms/constants';
import { GenericRepoService } from '../common/services';

export interface ICmsResponses {
    responses: ICmsResponse[];
}

export interface ICmsResponse {
    cmsResponse: string;
}

export interface ImatIcon {
    svgCmsId: string;
    svgIcon: string;
    rawCmsContent: SiteCoreMediaItem;
}

@Component({
    selector: 'mat-icon-registry',
    template: '<div></div>'
})
export class MatIconRegistryComponent implements OnInit {

    private commonIcons: ImatIcon[] = [
        // Informational Icons
        { svgCmsId: commonCmsIds.alertSvg, svgIcon: 'alert', rawCmsContent: null },
        { svgCmsId: commonCmsIds.checkmarkSvg, svgIcon: 'checkmark', rawCmsContent: null },
        { svgCmsId: commonCmsIds.infoSvg, svgIcon: 'information', rawCmsContent: null },

        // Help and Support Icons
        { svgCmsId: commonCmsIds.emailUsSvg, svgIcon: 'email-us', rawCmsContent: null },
        { svgCmsId: commonCmsIds.roadsideAssistanceSvg, svgIcon: 'roadside-assistance', rawCmsContent: null },
        { svgCmsId: commonCmsIds.csrPhoneSvg, svgIcon: 'csr-phone', rawCmsContent: null },
        { svgCmsId: commonCmsIds.caretDownSvg, svgIcon: 'caret-down', rawCmsContent: null },

        // Auto-Replenishment Icons
        { svgCmsId: commonCmsIds.autoReplenishmentOnSvg, svgIcon: 'auto-replenishment-on', rawCmsContent: null },
        { svgCmsId: commonCmsIds.autoReplenishmentOffSvg, svgIcon: 'auto-replenishment-off', rawCmsContent: null },

        // Action & Navigational Icons
        { svgCmsId: commonCmsIds.previousArrowSvg, svgIcon: 'previous-arrow', rawCmsContent: null },
        { svgCmsId: commonCmsIds.backArrowSvg, svgIcon: 'back-arrow', rawCmsContent: null }, // slightly thicker than previous-arrow, should probably figure out how to use stroke-width CSS
        { svgCmsId: commonCmsIds.closeSvg, svgIcon: 'close-x', rawCmsContent: null },
        { svgCmsId: commonCmsIds.imageSliderArrow, svgIcon: 'mat-imageSliderArrow', rawCmsContent: null },
        { svgCmsId: commonCmsIds.firstPageIconSvg, svgIcon: 'mat-first-page', rawCmsContent: null },
        { svgCmsId: commonCmsIds.lastPageIconSvg, svgIcon: 'mat-last-page', rawCmsContent: null }
    ];

    // TODO: singleUseIcons should be refactored to be not front-loaded but still registered with MatIconRegistry
    private singleUseIcons: ImatIcon[] = [
        // Menu Icons
        { svgCmsId: commonCmsIds.accountIconSvg, svgIcon: 'account-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.hctraLogoSvg, svgIcon: 'hctra-logo', rawCmsContent: null },
        { svgCmsId: commonCmsIds.hamburgerMenuSvg, svgIcon: 'hamburger-menu', rawCmsContent: null },
        { svgCmsId: commonCmsIds.facebookIconSvg, svgIcon: 'facebook-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.twitterIconSvg, svgIcon: 'twitter-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.instagramIconSvg, svgIcon: 'instagram-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.linkedinIconSvg, svgIcon: 'linkedin-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.youtubeIconSvg, svgIcon: 'youtube-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.searchIconSvg, svgIcon: 'search-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.closeMenuIconSvg, svgIcon: 'close-menu-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.rightArrowSvg, svgIcon: 'right-arrow', rawCmsContent: null },

        // Other Icons
        { svgCmsId: commonCmsIds.noAuthContacts, svgIcon: 'no-auth-contacts', rawCmsContent: null },
        { svgCmsId: commonCmsIds.noInvoicesFound, svgIcon: 'no-invoices-found', rawCmsContent: null },
        { svgCmsId: commonCmsIds.downArrowSvg, svgIcon: 'home-down-arrow', rawCmsContent: null },
        { svgCmsId: commonCmsIds.downArrowWhiteSvg, svgIcon: 'white-down-arrow', rawCmsContent: null },
        { svgCmsId: commonCmsIds.noGraphDataAvailable, svgIcon: 'no-graph-data', rawCmsContent: null },
        { svgCmsId: commonCmsIds.vehicleIconSvg, svgIcon: 'vehicles-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.barChartSvg, svgIcon: 'bar-chart-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.ccSvg, svgIcon: 'cc-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.trashIconSvg, svgIcon: 'trash-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.addIconSvg, svgIcon: 'add-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.undoIconSvg, svgIcon: 'undo-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.minusIconSvg, svgIcon: 'minus-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.plusIconSvg, svgIcon: 'plus-icon', rawCmsContent: null },
        { svgCmsId: commonCmsIds.clockIconSvg, svgIcon: 'clock', rawCmsContent: null }
    ];

    // Should be part of the app.component.ts but that will come after migration of app.js
    constructor(
        private genericRepo: GenericRepoService,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) { }

    ngOnInit() {

        this.registerIconsFromCMS(this.commonIcons);

        this.registerIconsFromCMS(this.singleUseIcons);
    }

    private async registerIconsFromCMS(iconsArray: ImatIcon[]) {
        const cmsResponse: ICmsResponses = await this.genericRepo.dataFactory.getCmsPagesByIds({ requests: iconsArray.map(itemId => ({ itemId: itemId.svgCmsId })) });

        const parsedCMSContent: ImatIcon[] = this.parseCmsContent(iconsArray, cmsResponse.responses);

        parsedCMSContent.forEach(svgObj => this.tryAddSvgIcon(svgObj));
    }

    private parseCmsContent(iconsArray: ImatIcon[], responses: ICmsResponse[]) {
        return responses
            .map(({ cmsResponse }) => JSON.parse(cmsResponse))
            .map((rawCmsContent, index) =>
            ({
                svgCmsId: iconsArray[index].svgCmsId,
                svgIcon: iconsArray[index].svgIcon,
                rawCmsContent
            })
            );
    }

    private async tryAddSvgIcon(matIcon: ImatIcon) {
        const itemUrl = matIcon.rawCmsContent.ItemMedialUrl;
        if (itemUrl) {
            this.matIconRegistry.addSvgIcon(matIcon.svgIcon, this.domSanitizer.bypassSecurityTrustResourceUrl(itemUrl));
        }
    }

}

@NgModule({
    declarations: [MatIconRegistryComponent],
    exports: [MatIconRegistryComponent]
})
export class MatIconRegistryModule {

}
