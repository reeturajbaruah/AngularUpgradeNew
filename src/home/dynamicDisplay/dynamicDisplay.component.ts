import { Component, Input, OnInit, Inject } from '@angular/core';
import { CmsUtilService } from 'cms/services';
import { SiteCoreItem } from 'cms/cms.module';
import { DialogService } from 'common/services';
import { VimeoPlayerModalComponent, VimeoSettings } from 'common/ui';

export interface DynamicDisplay {
    title: string;
    image: string;
    mobileImage: string;
    mediaUrl: string;
    mediaType: 'Image' | 'GIF' | 'Video';
    content: string;
    tabTitle: string;
    DescriptionForImage: string;
    MobileDescriptionForImage: string;
}

interface media {
    MediaURL: string;
    MediaType: string;
    MobileImage: string;
}

interface MetaInfo {
    sort: string;
    isActive: string;
    sliderHeight: string;
}

export interface DynamicDisplaySiteCoreItem extends SiteCoreItem {
    DescriptionForImage: string;
    MobileDescriptionForImage: string;
}

export type CmsDisplay = DynamicDisplaySiteCoreItem & MetaInfo & media;

@Component({
    selector: 'dynamic-display-component',
    templateUrl: './dynamicDisplay.html',
    styleUrls: ['./dynamicDisplay.less']
})
export class DynamicDisplayComponent implements OnInit {

    constructor(
        private cmsUtilService: CmsUtilService,
        private dialogService: DialogService
    ) {
    }

    @Input() cmsData: CmsDisplay;

    public selectedDisplay: DynamicDisplay;
    public dynamicDisplays: DynamicDisplay[];

    ngOnInit() {

        this.dynamicDisplays = (this.cmsData.Children as CmsDisplay[])
            .filter(item => +(item.isActive || 0))
            .sort((a,b) => (+(a.sort || 0)) - (+(b.sort || 0)))
            .map(item => {

                const imageAttributes = this.cmsUtilService.parseAllImageAttributes(item.Image);
                const mobileImageAttributes = this.cmsUtilService.parseAllImageAttributes(item.MobileImage);

                return {
                    title: item.Title,
                    image: imageAttributes.image,
                    mobileImage: mobileImageAttributes.image,
                    content: item.LongDescription,
                    mediaType: item.MediaType,
                    mediaUrl: item.MediaURL,
                    tabTitle: item.ShortDescription,
                    DescriptionForImage: item.DescriptionForImage,
                    MobileDescriptionForImage: item.MobileDescriptionForImage
                } as DynamicDisplay;

            });
            
        this.selectedDisplay = this.dynamicDisplays[0];

    }

    setSelectedDisplay(newDisplay: DynamicDisplay) {
        this.selectedDisplay = newDisplay;
    }

    get isInteractive(): boolean {
        return this.selectedDisplay && this.selectedDisplay.mediaType === 'Video';
    }
     
    interact() {
        if (!this.selectedDisplay) {
            return;
        }

        if (this.selectedDisplay.mediaType === 'Video') {
            
            this.dialogService.openFloater(VimeoPlayerModalComponent, {
                mediaUrl: this.selectedDisplay.mediaUrl
            } as VimeoSettings);
        }

    }

    public getHeightFromCMS(): string {
        return this.cmsData.sliderHeight;
    }
}
