import { Component, Input, OnInit, Inject } from '@angular/core';
import { CmsUtilService } from 'cms/services';
@Component({
    selector: 'carousel-component-mobile',
    templateUrl: './homePageCarouselMobile.html',
    styleUrls: ['./homePageCarouselMobile.less']
})
export class HomeCarouselMobileComponent implements OnInit {
    constructor(
        private cmsUtilService: CmsUtilService
    ) { }
    //TODO: Cast actual Type to variable
    @Input() cmsData: any;
    @Input() sliderImages: any;
    @Input() imageSliderArrow: any;
    public slides: any;
    public timer: number;
    ngOnInit() {
        this.parseSliderImages(this.sliderImages.Children);
        this.timer = parseInt(this.sliderImages.TimerInMilliseconds, 10);
    }

    public getHeightFromCMS(): string {

       return this.sliderImages.sliderHeightMobile;
    }

    public parseSliderImages = (res: any) => {
        this.slides = [];
        res.forEach(child => {
            this.slides.push(
                {
                    url: this.cmsUtilService.parseAllImageAttributes(child.Image).image,
                    image: this.cmsUtilService.parseAllImageAttributes(child.Image).image
                }
            );
        });

        return;
    };
}
