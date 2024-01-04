import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CmsUtilService } from 'cms/services';
import { SiteCoreItem, SiteCoreMediaItem } from 'cms/cms.module';
import Player from '@vimeo/player';
import { MatCarouselComponent } from '../../common/ui/carousel/carousel.component';

export interface WashburnTunnelCMS extends SiteCoreItem {
    pageTitle: string;
    videoTitle: string;
    northEntrance: string;
    southEntrance: string;
    northEntranceURL: string;
    southEntranceURL: string;
    imageInternval: string;
    hasVideo: string;
    videoURL: string;
    imageInterval: string;
}

@Component({
    selector: 'washburn-tunnel',
    templateUrl: './washburnTunnel.component.html',
    styleUrls: ['washburnTunnel.component.less']
})
export class WashburnTunnelComponent implements OnInit, AfterViewInit {

    @Input() cmsPage: WashburnTunnelCMS;
    @ViewChild(MatCarouselComponent) matCarouselComponent;
    interval: number;
    sliderImages: any;
    videoTitle: string;
    pageTitle: string;
    northEntranceURL: string;
    southEntranceURL: string;
    northEntrance: string;
    southEntrance: string;
    iframe: any;
    player: Player;
    videoToggle: string;

    constructor(private cmsUtilService: CmsUtilService) {
    }

    async ngOnInit() {
        this.sliderImages = [];
        this.videoToggle = this.cmsPage.hasVideo;
        if (this.videoToggle === 'true') {
            const videoURL = this.cmsPage.videoURL;
            this.sliderImages.push({
                url: videoURL,
                slideURL: '',
                isVideo: true
            });
        }

        this.cmsPage.Children.forEach((child) => {
            if (child.TemplateName === 'Slide') {
                this.sliderImages.push({
                    url: this.cmsUtilService.parseAllImageAttributes(child.Image).image,
                    slideURL: (child as SiteCoreMediaItem).SlideURL,
                    isVideo: false
                });
            }
        });

        this.pageTitle = this.cmsPage.pageTitle;
        this.videoTitle = this.cmsPage.videoTitle;
        this.northEntrance = this.cmsPage.northEntrance;
        this.southEntrance = this.cmsPage.southEntrance;
        this.northEntranceURL = this.cmsPage.northEntranceURL;
        this.southEntranceURL = this.cmsPage.southEntranceURL;
        this.interval = parseFloat(this.cmsPage.imageInterval);
    }

    ngAfterViewInit() {
        if (this.videoToggle === 'true') {
            this.sliderLoaded();
        }
    }

    public sliderLoaded() {
        const videoFrame = document.getElementById('video-frame');
        this.player = new Player(videoFrame);

        this.player.on('play', () => this.OnPlay());
        this.player.on('pause', () => this.OnPause());
        this.player.on('ended', () => this.OnEnd());

        const content = document.getElementsByTagName('mat-carousel')[0];
        const buttons = content.getElementsByClassName('mat-icon-button');
        for (const button of buttons) {
            button.addEventListener('click', () => {
                this.player.getPaused().then((paused) => {
                    if (!paused) {
                        this.player.pause();
                    }
                });
            });
        }
    }

    OnPlay() {
        this.matCarouselComponent.stopTimer();
    }

    OnPause() {
        this.player.getEnded().then((ended) => { 
            if (!ended) {
                this.matCarouselComponent.startTimer(true);
            }
        });
    }

    OnEnd() {
        this.matCarouselComponent.next();
    }

}
