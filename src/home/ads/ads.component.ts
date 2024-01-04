import {
    Component, Input, OnInit,
    ViewEncapsulation, OnDestroy
} from '@angular/core';
import { SiteCoreItem } from '../../cms/cms.module';
import { CmsUtilService } from 'cms/services';

import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

type CmsAdItem = SiteCoreItem & { Description: string; isActive: string; isMobile: string; sort: string };

export interface AdSlide {
    image: string;
    content: string;   
    sort: number;
    isMobile: boolean;
    isActive: boolean;
}

@Component({
    selector: 'ads-component',
    templateUrl: './ads.html',
    styleUrls: ['./ads.less'],
    //to allow this style sheet to style the ad HTML, we need to set ViewEncapsulation to none
    encapsulation: ViewEncapsulation.None
})
export class AdsComponent implements OnInit, OnDestroy {

    constructor(        
        private cmsUtilService: CmsUtilService,
        private mediaObserver: MediaObserver
    ) { }

    //TODO: Cast actual Type to variable
    @Input() cmsData: SiteCoreItem;
    @Input() imageSliderArrow: any;
    public ads: AdSlide[];
    public allAds: AdSlide[];

    private mediaUnsubscribe: Subscription;
   
    public isMobile: boolean;

    setAds(isMobile: boolean) {
        this.isMobile = isMobile;
        this.ads = this.allAds
            .filter(x => x.isActive && x.isMobile === isMobile)
            .sort((a, b) => a.sort - b.sort);
    }

    ngOnInit() {

        this.allAds = this.cmsData.Children
            .map((x: CmsAdItem) => {
                const imageAttributes = this.cmsUtilService.parseAllImageAttributes(x.Image);
                
                return {
                    image: imageAttributes.image,                    
                    content: x.Description,
                    isActive: !!('isActive' in x ? +x.isActive : false),
                    isMobile: !!('isMobile' in x ? +x.isMobile : false),
                    sort: +x.sort
                };
            });

        this.mediaUnsubscribe = this.mediaObserver.media$
            .subscribe(() => this.setAds(this.mediaObserver.isActive('lt-md')));

        const isMobile = this.mediaObserver.isActive('lt-md');
        this.setAds(isMobile);
    }

    ngOnDestroy() {
        if (this.mediaUnsubscribe) {
            this.mediaUnsubscribe.unsubscribe();
        }
    }
}
