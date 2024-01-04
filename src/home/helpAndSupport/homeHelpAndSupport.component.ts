import { Component, Input, OnInit } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { CmsUtilService } from 'cms/services';
import { SiteCoreItem } from 'cms/cms.module';
import { Location } from '@angular/common';

interface Panel {
    title: string;
    content: string;
    buttonText: string;
    url: string;
    image: SafeStyle;
    mobileImage: SafeStyle;
}

type CmsDisplay = SiteCoreItem & { sort: string } & { MobileImage: string; ButtonURL: string; ButtonText: string; mainDivHeight: string };

@Component({
    selector: 'home-help-and-support-component',
    templateUrl: './homeHelpAndSupport.html',
    styleUrls: ['./homeHelpAndSupport.less']
})
export class HomeHelpAndSupportComponent implements OnInit {

    constructor(
        private cmsUtilService: CmsUtilService,
        private location: Location
    ) {}
    
    @Input() cmsData: CmsDisplay;
    public panels: Panel[];

    public get title(): string {
        return this.cmsData.Title;
    }

    public get subtitle(): string {
        return this.cmsData.ShortDescription;
    }

    ngOnInit() {

        this.panels = (this.cmsData.Children as CmsDisplay[])
            .sort((a, b) => (+(a.sort || 0)) - (+(b.sort || 0)))
            .map(item => {

                const image = this.cmsUtilService.generateFileSrc(item.Image);
                const mobileImage = this.cmsUtilService.generateFileSrc(item.MobileImage);

                return {
                    title: item.Title,
                    image, mobileImage,
                    content: item.ShortDescription,
                    buttonText: item.ButtonText,
                    url: item.ButtonURL                    
                } as Panel;

            });
    }

    public invoke(panel: Panel) {
        this.location.go(panel.url);
    }
  
}
