import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { TweetRetrievalService } from 'home/services/tweetRetrieval/tweetRetrieval.service';

const PADDING_MARGIN_EXTRA_WIDTH = 100; // Value to adjust iframe width

@Component({
    selector: 'tweet-carousel',
    templateUrl: './tweetCarousel.component.html',
    styleUrls: ['./tweetCarousel.component.less'],
})
export class TweetCarouselComponent implements AfterViewInit, OnDestroy {
    constructor(private renderer: Renderer2) { }

    @Input() color: ThemePalette = 'accent';
    @Input() imageSliderArrow: any;

    @ViewChild('containerRef') containerRef: ElementRef<HTMLElement>;
    @ViewChild('tweetsOverlayRef') tweetsOverlayRef: ElementRef;

    currentSlide = 0;
    observer: MutationObserver;
    slides?: HTMLCollection;
    TweetRetrievalService = TweetRetrievalService;

    ngAfterViewInit() {
        this.slides = this.containerRef.nativeElement.children;
        this.refreshSlides();

        this.observer = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    this.adjustTweetsMinWidth();
                    this.refreshSlides();
                }
            }
        });

        const config = { attributes: true, childList: true, subtree: true };
        this.observer.observe(this.containerRef.nativeElement, config);
    }

    ngOnDestroy() {
        this.observer.disconnect();
    }

    @HostListener('window:resize')
    onResize() {
        this.adjustIframeWidth();
    }

    adjustIframeWidth() {
        const tweetsContainerWidth = this.containerRef.nativeElement.clientWidth;

        this.containerRef.nativeElement.querySelectorAll('iframe')
        .forEach((iframeElement) => {
            const iframeElementWidth = Number(iframeElement.style.width.split('px')[0]);

            // Set the default width to min possible value
            iframeElement.style.maxWidth = '100%';

            // Expand the iframe width if possible
            if (tweetsContainerWidth + PADDING_MARGIN_EXTRA_WIDTH > iframeElementWidth) {
                iframeElement.style.width = '550px';
            }
        });

        this.adjustTweetsOverlayWidth();
    }

    adjustTweetsOverlayWidth() {
        let containerWidth = this.containerRef.nativeElement.clientWidth;
        if (!this.containerRef.nativeElement.classList.contains('lt-md')) {
            containerWidth -= 40;
        }
        this.renderer.setStyle(this.tweetsOverlayRef.nativeElement, 'width', `${containerWidth}px`);
    }

    adjustTweetsMinWidth() {
        this.containerRef.nativeElement.querySelectorAll('.twitter-tweet.twitter-tweet-rendered')
        .forEach((divElement: any) => {
            divElement.style.minWidth = '300px';
            divElement.style.justifyContent = 'center';
        });
    }

    refreshSlides() {
        if (this.slides) {
            Array.from(this.slides).forEach((slide, i) => {
                if (i === this.currentSlide) {
                    slide.removeAttribute('hidden');
                }
                else {
                    slide.setAttribute('hidden', 'true');
                }
            });
        }
        this.adjustIframeWidth();
    }

    previous() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.refreshSlides();
        }
    }

    next() {
        if (this.currentSlide < this.slides.length - 1) {
            this.currentSlide++;
            this.refreshSlides();
        }
    }
}
