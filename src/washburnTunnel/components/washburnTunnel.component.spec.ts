import { WashburnTunnelComponent } from './wasburnTunnel.component';
import { CmsUtilService } from '../../cms/services';
import { PipesModule } from '../../pipes/module';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SiteCoreMediaItem } from 'cms/cms.module';

describe('WashburnTunnelComponent', () => {
    let component: WashburnTunnelComponent;
    let fixture: ComponentFixture<WashburnTunnelComponent>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;

    beforeEach(async () => {
        cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['parseAllImageAttributes']);
        cmsUtilService.parseAllImageAttributes.and.returnValue({ image: 'url' } as any);

        await TestBed.configureTestingModule({
            declarations: [WashburnTunnelComponent],
            providers: [
                { provide: CmsUtilService, useValue: cmsUtilService }
            ],
            imports: [
                PipesModule
            ]
        }).compileComponents();

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WashburnTunnelComponent);
        component = fixture.componentInstance;
        component.cmsPage = {
            Children: [
                {
                    Children: [
                        {} as any
                    ]
                } as any,
            ],
            hasVideo: undefined
        } as any;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            component.cmsPage.hasVideo = 'true';
            component.cmsPage.videoURL = 'url';
            component.cmsPage.Children[0].TemplateName = 'Slide';
            (component.cmsPage.Children[0] as SiteCoreMediaItem).SlideURL = 'Slide';
        });

        it('sliderImages count should be 2', () => {
            component.ngOnInit();

            expect(component.sliderImages.length).toEqual(2);
        });
    });

    describe('ngAfterViewInit', () => {
        beforeEach(() => {
            component.videoToggle = 'true';
        });

        it('player should be defined', () => {
            const parentElement = document.createElement('div');
            const matCarElement = document.createElement('mat-carousel');
            const childElement = document.createElement('div');

            childElement.classList.add('mat-icon-button');
            matCarElement.appendChild(childElement);
            parentElement.appendChild(matCarElement);

            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(document.createElement('video'));
            spyOn(document, 'getElementsByTagName').and.returnValue(parentElement.getElementsByTagName('mat-carousel'));

            component.ngAfterViewInit();

            expect(component.player).toBeDefined();
        });
    });

    describe('OnPlay', () => {
        beforeEach(() => {
            component.matCarouselComponent = { stopTimer: () => { } };
            spyOn(component.matCarouselComponent, 'stopTimer').and.callFake(() => { });
        });

        it('should call stopTimer()', () => {
            component.OnPlay();

            expect(component.matCarouselComponent.stopTimer).toHaveBeenCalled();
        });
    });

    describe('OnEnd', () => {
        beforeEach(() => {
            component.matCarouselComponent = { next: () => { } };
            spyOn(component.matCarouselComponent, 'next').and.callFake(() => { });
        });

        it('should call next()', () => {
            component.OnEnd();

            expect(component.matCarouselComponent.next).toHaveBeenCalled();
        });
    });

    describe('OnPause', () => {
        beforeEach(() => {
            component.matCarouselComponent = { startTimer: () => { } };
            component.player = { getEnded: () => Promise.resolve() };
            spyOn(component.matCarouselComponent, 'startTimer').and.callFake(() => { });
            spyOn(component.player, 'getEnded').and.resolveTo(null);
        });

        it('should call startTimer()', fakeAsync(() => {
            component.OnPause();
            tick();
            expect(component.matCarouselComponent.startTimer).toHaveBeenCalled();
        }));
    });
});
