import { Component, OnInit, Input } from '@angular/core';
import { CmsUtilService } from 'cms/services';
import { Color } from '../lynchburgFerry.constants';
import { SiteCoreItem, SiteCoreMediaItem } from 'cms/cms.module';
import * as moment from 'moment';
import { FeatureToggleResolverService } from '../../common/services';

export interface LynchburgFerryCMS extends SiteCoreItem {
    imageInterval: string;
    pageTitle: string;
}

@Component({
    selector: 'lynchburg-ferry-information',
    templateUrl: './lynchburgFerry.component.html',
    styleUrls: ['lynchburgFerry.component.less']
})
export class LynchburgFerryComponent implements OnInit {

    @Input() cmsPage: LynchburgFerryCMS;
    interval: number;
    sliderImages: any;
    statusCode: number;
    operationToggle: boolean;
    statusMessage: string;
    pageTitle: string;
    twoFerryMessage: string;
    oneFerryMessage: string;
    closedFerryMessage: string;

    constructor(
        private featureToggleResolverService: FeatureToggleResolverService,
        private cmsUtilService: CmsUtilService
    ) {
    }

    ngOnInit(): void {
        this.sliderImages = [];
        this.cmsPage.Children.forEach((child) => {
            if (child.TemplateName === 'Slide') {
                this.sliderImages.push({
                    url: this.cmsUtilService.parseAllImageAttributes(child.Image).image,
                    slideURL: (child as SiteCoreMediaItem).SlideURL
                });
            }
        });

        this.pageTitle = this.cmsPage.pageTitle;
        this.interval = parseFloat(this.cmsPage.imageInterval);

        this.featureToggleResolverService.isResolvedFeatureToggle('LynchburgFerryShowOperation').then(response => {
            if (response) {
                this.operationToggle = true;
                const time = moment.utc().utcOffset('-05:00');
                const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][time.day()];
                const hour = time.hours();
                const minutes = time.minutes();
                const totalMinutes = ((hour * 60) + minutes);
                this.statusCode = this.getStatusCode(day, totalMinutes);
            }
            else {
                this.operationToggle = false;
            }
        });

        this.oneFerryMessage = (this.cmsPage.Children.filter(x => x.Title === '1-Ferry')[0] || {}).ShortDescription || '';
        this.twoFerryMessage = (this.cmsPage.Children.filter(x => x.Title === '2-Ferry')[0] || {}).ShortDescription || '';
        this.closedFerryMessage = (this.cmsPage.Children.filter(x => x.Title === 'Closed')[0] || {}).ShortDescription || '';
    }

    getStatusCode(d: string, m: number): number {
        if ((['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(d)) && (0 <= m && m <= 1440)) {
            if ((0 <= m && m < 270) ||
                (1200 <= m && m <= 1440)) {
                return Color.Red;
            }
            else if ((270 <= m && m < 930) ||
                (1110 <= m && m < 1200)) {
                return Color.Yellow;
            }
            else if (930 <= m && m < 1110) {
                return Color.Green;
            }
        } else if ((['Saturday', 'Sunday'].includes(d)) && (0 <= m && m <= 1440)) {
            if ((0 <= m && m < 660) ||
                (1110 <= m && m <= 1440)) {
                return Color.Red;
            }
            else if (660 <= m && m < 1110) {
                return Color.Yellow;
            }
        } else {
            return Color.Error;
        }
    }
}
