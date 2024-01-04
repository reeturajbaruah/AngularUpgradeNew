import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { ShipChannelBridgeFacadeService } from 'shipChannelBridge/services/ship-channel-bridge-facade-api/ship-channel-bridge-facade.service';
import { CmsDisplay, DynamicDisplay } from 'shipChannelBridge/ship-channel-bridge.model';
import { SCBTabsComponent } from './SCBTabs/scb-tabs.component';

type OrderedSiteCoreItem = SiteCoreItem & { order: number};
type SectionChild = { Section: string } & SiteCoreItem;


@Component({
    selector: 'ship-channel-bridge',
    templateUrl: './ship-channel-bridge.component.html',
    styleUrls: ['./ship-channel-bridge.component.less'],
})
export class ShipChannelBridgeComponent implements OnInit {
    @ViewChild('scbTabs', {static:false}) public scbTabs: SCBTabsComponent;
    @Input() scbPageContent: SiteCoreItem;
    public section: {[key: string]: OrderedSiteCoreItem };
    imageSliderArrow: string;
    showCaurosel = true;
    bannerImage: string;
    carousel;
    cmsData;
    tabs;
    contactUsSuccessMsg: string;
    dynamicDisplays: DynamicDisplay[];

    constructor(
        private scbFcade: ShipChannelBridgeFacadeService
    ) {}

    ngOnInit() {
        this.contactUsSuccessMsg = this.scbPageContent?.ShortDescription || 'Success!';
        this.scbFcade.getData().subscribe(async data => {
            this.cmsData = await data;
            this.bannerImage = this.cmsData.banner.Image;
            this.carousel = this.cmsData.carousel as SectionChild[];
            this.tabs = this.cmsData.tabs as SectionChild[];
            this.formTabDisplayData();
        });
        this.imageSliderArrow = 'mat-imageSliderArrow';    
    }

    disableCaurosel(param) {
        this.showCaurosel = param;
    }

    formTabDisplayData() {
        this.dynamicDisplays = (this.tabs.Children as CmsDisplay[])
        .filter((dis) => (dis.Parameters.split('&')[1] === 'isActive=1'))
        .sort((a, b) => {
            const x = a.Parameters.split('&')[0];
            const y = b.Parameters.split('&')[0];
            return (x > y) ? 1 : (x < y) ? -1 : 0;
        }).map((item) => {
            const data: DynamicDisplay = {
                title: item.Title,
                longDescription: item.LongDescription,
                shortDescription: item.ShortDescription || ''
            };
            return data;
        });
    }

    changeTab(e) {
        const selectDis = this.dynamicDisplays.filter(dis => dis.title === e);
        this.scbTabs.selectedDisplay = selectDis[0];
        const hideCarouselFlag = (e === 'Home') ? true: false;
        this.disableCaurosel(hideCarouselFlag);
    }

}
