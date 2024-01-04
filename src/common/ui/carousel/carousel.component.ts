import { animate, style, transition, AnimationBuilder, trigger, state } from '@angular/animations';
import { ListKeyManager } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnDestroy,
    Output,
    PLATFORM_ID,
    QueryList,
    Renderer2,
    ViewChild
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { interval, BehaviorSubject, Observable, Subject, Scheduler, asyncScheduler } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';

import { MatCarousel, Orientation, SvgIconOverrides } from 'common/interfaces';
import { MatCarouselSlideComponent } from './carousel-slide/carousel-slide.component';


enum Direction {
    Left,
    Right,
    Index
}

@Component({
    selector: 'mat-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.less'],
    animations: [
        trigger('selectedImage', [
            state('false', style({
                'background-image': 'linear-gradient(90deg, yellow, yellow 50%, white 0)',
                'background-size': '200% 200%',
                'background-position': '100% 100%'
            })),
            state('true', style({
                'background-image': 'linear-gradient(90deg, yellow, yellow 50%, white 0)',
                'background-size': '200% 200%',
                'background-position': '0% 0%'
            })),
            transition('false => true', [
                animate('{{secondValue}}s ease-out')],
                { params: { secondValue: '5' } })
        ])
    ]
})
export class MatCarouselComponent
    implements AfterContentInit, AfterViewInit, MatCarousel, OnDestroy {
    public intervalInSecond: number;
    @Input() public timings = '250ms ease-in';
    @Input() public svgIconOverrides: SvgIconOverrides;
    @Input() public arrow: any;
    @Input() matIconArrow: string;
    @Input()
    public set autoplay(value: boolean) {
        this.autoplay$.next(value);
        this.autoplayVal = value;
    }

    @Input()
    public set interval(value: number) {
        if (isNaN(value)) {
            this.intervalInSecond = 5;
            this.interval$.next(5000);
        }
        else {
            this.intervalInSecond = value / 1000;
            this.interval$.next(value);
        }

    }

    public get loop(): boolean {
        return this.loopVal;
    }
    @Input()
    public set loop(value: boolean) {
        this.loop$.next(value);
        this.loopVal = value;
    }

    @Input() public hideArrows = true;
    @Input() public hideIndicators = true;
    @Input() public pauseOnHover = true;
    @Input() public color: ThemePalette = 'accent';

    public get maxWidth(): string {
        return this.maxWidthVal;
    }
    @Input()
    public set maxWidth(value: string) {
        this.maxWidthVal = value;
        this.maxWidth$.next(undefined);
    }

    @Input() public maintainAspectRatio = true;
    @Input() public proportion = 25;
    @Input() public slideHeight = '100%';
    @Input() public height: string;
    @Input() public minHeight: string;

    @Input()
    public set slides(value: number) {
        this.slides$.next(value);
    }

    @Input() public useKeyboard = false;
    @Input() public useMouseWheel = false;

    public get orientation(): Orientation {
        return this.orientationVal;
    }
    @Input()
    public set orientation(value: Orientation) {
        this.orientation$.next(value);
        this.orientationVal = value;
    }

    @Output()
    public animationStart: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    public changeIndex: EventEmitter<number> = new EventEmitter<number>();

    public getWidthPercentage(): number {
        return 100 / this.slidesList.length;
    }

    public get currentIndex(): number {
        if (this.listKeyManager) {
            return this.listKeyManager.activeItemIndex;
        }

        return 0;
    }
    public get currentSlide(): MatCarouselSlideComponent {
        if (this.listKeyManager) {
            return this.listKeyManager.activeItem;
        }

        return null;
    }

    @ContentChildren(MatCarouselSlideComponent) public slidesList: QueryList<
        MatCarouselSlideComponent
    >;
    @ViewChild('carouselContainer') private carouselContainer: ElementRef<
        HTMLDivElement
    >;
    @ViewChild('carouselList') private carouselList: ElementRef<HTMLElement>;
    public listKeyManager: ListKeyManager<MatCarouselSlideComponent>;

    private autoplayVal = true;
    private autoplay$ = new Subject<boolean>();

    private interval$ = new BehaviorSubject<number>(5000);
    private slides$ = new BehaviorSubject<number>(null);

    private maxWidthVal = 'auto';
    private maxWidth$ = new Subject<undefined>();

    private loopVal = true;
    private loop$ = new Subject<boolean>();

    private orientationVal: Orientation = 'ltr';
    private orientation$ = new Subject<Orientation>();

    private timer$: Observable<number>;
    private timerStop$ = new Subject<undefined>();

    private destroy$ = new Subject<undefined>();
    private playing = false;

    constructor(
        private animationBuilder: AnimationBuilder,
        private renderer: Renderer2,
        @Inject(PLATFORM_ID) private platformId
    ) { }

    public ngAfterContentInit(): void {
        this.listKeyManager = new ListKeyManager(this.slidesList)
            .withVerticalOrientation(false)
            .withHorizontalOrientation(this.orientationVal)
            .withWrap(this.loopVal);

        this.listKeyManager.updateActiveItem(0);
        this.listKeyManager.change
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.playAnimation());
    }

    public ngAfterViewInit(): void {
        this.autoplay$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.stopTimer();
            this.startTimer(value);
        });

        this.interval$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            this.stopTimer();
            this.resetTimer(value);
            this.startTimer(this.autoplayVal);
        });

        this.maxWidth$
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.slideTo(0));

        this.loop$
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => this.listKeyManager.withWrap(value));

        this.orientation$
            .pipe(takeUntil(this.destroy$))
            .subscribe(value => this.listKeyManager.withHorizontalOrientation(value));

        this.slides$
            .pipe(
                takeUntil(this.destroy$),
                filter(value => value && value < this.slidesList.length)
            )
            .subscribe(value => this.resetSlides(value));
    }

    public ngOnDestroy(): void {
        this.destroy$.next(undefined);
        this.destroy$.complete();
    }

    public next(): void {
        this.goto(Direction.Right);
    }

    public previous(): void {
        this.goto(Direction.Left);
    }

    public slideTo(index: number): void {
        this.goto(Direction.Index, index);
    }

    @HostListener('keyup', ['$event'])
    public onKeyUp(event: KeyboardEvent): void {
        if (this.useKeyboard && !this.playing) {
            this.listKeyManager.onKeydown(event);
        }
    }

    @HostListener('mouseenter')
    public onMouseEnter(): void {
        if (this.pauseOnHover) {
            this.stopTimer();
        }
    }

    @HostListener('mouseleave')
    public onMouseLeave(): void {
        if (this.pauseOnHover) {
            this.startTimer(this.autoplayVal);
        }
    }

    @HostListener('mousewheel', ['$event'])
    public onMouseWheel(event: MouseWheelEvent): void {
        if (this.useMouseWheel) {
            event.preventDefault(); // prevent window to scroll
            const delta = Math.sign(event.deltaY);

            if (delta > 0) {
                this.next();
            } else if (delta < 0) {
                this.previous();
            }
        }
    }

    @HostListener('window:resize', ['$event'])
    public onResize(event: Event): void {
        // Reset carousel when window is resized
        // in order to avoid major glitches.
        this.slideTo(0);
    }

    public onPan(event: any, slideElem: HTMLElement): void {
        // https://github.com/angular/angular/issues/10541#issuecomment-346539242
        // if y velocity is greater, it's a panup/pandown, so ignore.
        if (Math.abs(event.velocityY) > Math.abs(event.velocityX)) {
            return;
        }
        let deltaX = event.deltaX;
        if (this.isOutOfBounds()) {
            deltaX *= 0.2; // decelerate movement;
        }

        this.renderer.setStyle(slideElem, 'cursor', 'grabbing');
        this.renderer.setStyle(
            this.carouselList.nativeElement,
            'transform',
            this.getTranslation(this.getOffset() + deltaX)
        );
    }

    public onPanEnd(event: any, slideElem: HTMLElement): void {
        this.renderer.removeStyle(slideElem, 'cursor');

        if (
            !this.isOutOfBounds() &&
            Math.abs(event.deltaX) > this.getWidth() * 0.25
        ) {
            if (event.deltaX <= 0) {
                this.next();
                return;
            }
            this.previous();
            return;
        }
        this.playAnimation(); // slide back, don't change current index
    }

    private isOutOfBounds(): boolean {
        const sign = this.orientation === 'rtl' ? -1 : 1;
        const left =
            sign *
            (this.carouselList.nativeElement.getBoundingClientRect().left -
                this.carouselList.nativeElement.offsetParent.getBoundingClientRect()
                    .left);
        const lastIndex = this.slidesList.length - 1;
        const width = -this.getWidth() * lastIndex;

        return (
            (this.listKeyManager.activeItemIndex === 0 && left >= 0) ||
            (this.listKeyManager.activeItemIndex === lastIndex && left <= width)
        );
    }

    private isVisible(): boolean {
        if (!isPlatformBrowser(this.platformId)) {
            return false;
        }

        const elem = this.carouselContainer.nativeElement;
        const docViewTop = window.pageYOffset;
        const docViewBottom = docViewTop + window.innerHeight;
        const elemOffset = elem.getBoundingClientRect();
        const elemTop = docViewTop + elemOffset.top;
        const elemBottom = elemTop + elemOffset.height;

        return elemBottom <= docViewBottom || elemTop >= docViewTop;
    }

    private getOffset(): number {
        const offset = this.listKeyManager.activeItemIndex * this.getWidth();
        const sign = this.orientation === 'rtl' ? 1 : -1;
        return sign * offset;
    }

    private getTranslation(offset: number): string {
        return `translateX(${offset}px)`;
    }

    private getWidth(): number {
        return this.carouselContainer.nativeElement.clientWidth;
    }

    private goto(direction: Direction, index?: number): void {
        if (!this.playing) {
            const rtl = this.orientation === 'rtl';

            switch (direction) {
                case Direction.Left:
                    return rtl
                        ? this.listKeyManager.setNextItemActive()
                        : this.listKeyManager.setPreviousItemActive();
                case Direction.Right:
                    return rtl
                        ? this.listKeyManager.setPreviousItemActive()
                        : this.listKeyManager.setNextItemActive();
                case Direction.Index:
                    return this.listKeyManager.setActiveItem(index);
            }
        }
    }

    private playAnimation(): void {
        const translation = this.getTranslation(this.getOffset());
        const factory = this.animationBuilder.build(
            animate(this.timings, style({ transform: translation }))
        );
        const animation = factory.create(this.carouselList.nativeElement);

        animation.onStart(() => {
            this.playing = true;
            this.animationStart.emit(this.currentIndex);
        });
        animation.onDone(() => {
            this.changeIndex.emit(this.currentIndex);
            this.playing = false;
            this.renderer.setStyle(
                this.carouselList.nativeElement,
                'transform',
                translation
            );
            animation.destroy();
        });
        animation.play();
    }

    private resetSlides(slides: number): void {
        this.slidesList.reset(this.slidesList.toArray().slice(0, slides));
    }

    public resetTimer(value: number): void {
        this.timer$ = interval(value);
    }

    public startTimer(autoplay: boolean): void {
        if (!autoplay) {
            return;
        }
        this.listKeyManager.withWrap(true).setPreviousItemActive();
        this.timer$
            .pipe(
                takeUntil(this.timerStop$),
                takeUntil(this.destroy$),
                startWith('a', asyncScheduler),
                filter(() => this.isVisible())
            )
            .subscribe(() => {
                this.listKeyManager.withWrap(true).setNextItemActive();
                this.listKeyManager.withWrap(this.loop);
            });
    }

    public stopTimer(): void {
        this.timerStop$.next(undefined);
    }
}
