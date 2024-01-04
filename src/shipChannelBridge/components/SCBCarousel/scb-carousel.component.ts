import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CmsUtilService } from 'cms/services';
import { Slide } from 'shipChannelBridge/ship-channel-bridge.model';
import { MediaObserver } from '@angular/flex-layout';
import { map, Observable } from 'rxjs';

@Component({
    selector: 'scb-carousel-component',
    templateUrl: './scb-carousel.component.html',
    styleUrls: ['./scb-carousel.component.less']
})
export class SCBCarouselComponent implements OnInit {
    constructor(
        private cmsUtilService: CmsUtilService,
        private mediaObserver: MediaObserver
    ) { }
    
    @Input() cmsData: any;
    @Input() sliderImages: any;
    @Input() imageSliderArrow: any;
    @Output() changeToInternalTab: EventEmitter<string> = new EventEmitter();

    public slides: Slide[];
    public timer: number;
    public isMobile$: Observable<boolean>;
    
    ngOnInit() {
        this.parseSliderImages(this.sliderImages.Children);
        this.timer = parseInt(this.sliderImages.TimerInMilliseconds, 10);
        this.isMobile$ =        
            this.mediaObserver
                .asObservable()
                .pipe(map(() => this.mediaObserver.isActive('xs')));
    }

    public getHeightFromCMS(): string {

        return this.sliderImages.Parameters.split('=')[1];
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

    goToInternalTab(event) {
        this.changeToInternalTab.emit(event);
    }

}
