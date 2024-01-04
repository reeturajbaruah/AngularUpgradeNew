import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TweetCarouselComponent } from './tweetCarousel.component';

const PADDING_MARGIN_EXTRA_WIDTH = 100; // Value to adjust iframe width

const createHTMLCollection = (elements: HTMLElement[]): HTMLCollection => {
    const tempDiv = document.createElement('div');
    elements.forEach((element) => tempDiv.appendChild(element));
    return tempDiv.children;
};

describe('TweetCarouselComponent', () => {
    let component: TweetCarouselComponent;
    let fixture: ComponentFixture<TweetCarouselComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TweetCarouselComponent],
            imports: [BrowserAnimationsModule, MatIconModule, MatButtonModule],
        }).compileComponents();

        fixture = TestBed.createComponent(TweetCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngAfterViewInit', () => {
        it('should call refreshSlides', () => {
            spyOn(component, 'refreshSlides');
            component.ngAfterViewInit();
            expect(component.refreshSlides).toHaveBeenCalled();
        });
    });

    describe('onResize', () => {
        it('should call adjustIframeWidth', () => {
            spyOn(component, 'adjustIframeWidth');
            component.onResize();
            expect(component.adjustIframeWidth).toHaveBeenCalled();
        });
    });

    describe('adjustIframeWidth', () => {
        it('should adjust iframe width based on the container width', () => {
            const iframeElement = document.createElement('iframe');
            iframeElement.style.width = '550px';
            const containerElement = document.createElement('div');
            containerElement.appendChild(iframeElement);
            component.containerRef = { nativeElement: containerElement };

            component.adjustIframeWidth();

            const iframeElementWidth = Number(iframeElement.style.width.split('px')[0]);
            const tweetsContainerWidth = component.containerRef.nativeElement.clientWidth;

            if (tweetsContainerWidth + PADDING_MARGIN_EXTRA_WIDTH > iframeElementWidth) {
                expect(iframeElement.style.width).toBe('550px');
            }
            else {
                expect(iframeElement.style.maxWidth).toBe('100%');
            }
        });
    });

    describe('refreshSlides', () => {
        it('should adjust iframe width and show the current slide while hiding others', () => {
            spyOn(component, 'adjustIframeWidth');
            component.slides = createHTMLCollection([
                document.createElement('div'),
                document.createElement('div'),
                document.createElement('div'),
            ]);

            component.currentSlide = 1;

            component.refreshSlides();

            expect(component.slides[0].hasAttribute('hidden')).toBe(true);
            expect(component.slides[1].hasAttribute('hidden')).toBe(false);
            expect(component.slides[2].hasAttribute('hidden')).toBe(true);
            expect(component.adjustIframeWidth).toHaveBeenCalled();
        });
    });

    describe('previous', () => {
        it('should change currentSlide and call refreshSlides', () => {
            spyOn(component, 'refreshSlides');
            component.slides = createHTMLCollection([
                document.createElement('div'),
                document.createElement('div'),
                document.createElement('div'),
            ]);

            component.currentSlide = 2;

            component.previous();

            expect(component.currentSlide).toBe(1);
            expect(component.refreshSlides).toHaveBeenCalled();
        });
    });

    describe('next', () => {
        it('should change currentSlide and call refreshSlides', () => {
            component.slides = createHTMLCollection([
                document.createElement('div'),
                document.createElement('div'),
                document.createElement('div'),
            ]);

            spyOn(component, 'refreshSlides');
            component.currentSlide = 1;

            component.next();

            expect(component.currentSlide).toBe(2);
            expect(component.refreshSlides).toHaveBeenCalled();
        });
    });
});
