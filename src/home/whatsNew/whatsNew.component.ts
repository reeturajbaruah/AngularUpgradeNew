import { Component, Inject, Input, OnInit } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsUtilService } from 'cms/services';
import { BREAKPOINTS, BreakPoint } from '@angular/flex-layout';
import { IDynamicDisplay, IMedia, IMetaInfo, IWhatsNewPageCmsContent } from './whatsNew.interface';

type CmsDisplay = SiteCoreItem & IMetaInfo & IMedia;

@Component({
    selector: 'whats-new',
    templateUrl: './whatsNew.component.html',
    styleUrls: ['./whatsNew.component.less']
})
export class WhatsNewComponent implements OnInit {

    bannerTitle: string;
    title: string;
    desc: string;
    public mobileMediaQuery: string;

    @Input() whatsNewPageCmsContent: IWhatsNewPageCmsContent;
    public dynamicDisplays: IDynamicDisplay[];


    constructor(private cmsUtilService: CmsUtilService,
        @Inject(BREAKPOINTS) breakPoints: BreakPoint[]

    ) {
        this.mobileMediaQuery = breakPoints.find(x => x.alias === 'lt-md').mediaQuery;
    }

    async ngOnInit() {
        this.bannerTitle = this.whatsNewPageCmsContent.banner;
        this.title = this.whatsNewPageCmsContent.Title;
        this.desc = this.whatsNewPageCmsContent.LongDescription;

        this.mapDynamicDisplay();

    }

    mapDynamicDisplay() {
        this.dynamicDisplays = (this.whatsNewPageCmsContent.Children as CmsDisplay[])
            .filter(item => +(item.isActive || 0))
            .sort((a, b) => (+(a.sort || 0)) - (+(b.sort || 0)))
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
                    tabTitle: item.ShortDescription
                } as IDynamicDisplay;

            });
    }


}
