import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { MediaObserver } from '@angular/flex-layout';
import { AdsComponent } from './ads.component';
import { CmsUtilService } from 'cms/services';
import { Subject } from 'rxjs';
import { SiteCoreItem } from '../../cms/cms.module';

describe('component: homePage-ads', () => {

    let fixture: ComponentFixture<AdsComponent>;
    let component: AdsComponent;
    let mediaObserver;
    let cmsUtilService;

    beforeEach(async () => {

        mediaObserver = jasmine.createSpyObj('MediaObserver', ['isActive']);
        cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['parseAllImageAttributes']);

        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValue({
            image: ''
        });

        mediaObserver.media$ = new Subject();
        
        spyOn(mediaObserver.media$, 'subscribe').and.callThrough();

        await TestBed
            .configureTestingModule({
                declarations: [
                    AdsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: MediaObserver, useFactory: () => mediaObserver },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(AdsComponent);
        component = fixture.debugElement.componentInstance;

        const children = [
            {
                isActive: '0',
                isMobile: '0',
                sort: '1',
                Description: 'a'
            },
            {
                isActive: '0',
                isMobile: '1',
                sort: '1',
                Description: 'b'
            },
            {
                isActive: '1',
                isMobile: '0',
                sort: '2',
                Description: 'c'
            },
            {
                isActive: '1',
                isMobile: '1',
                sort: '2',
                Description: 'd'
            },
            {
                isActive: '1',
                isMobile: '0',
                sort: '1',
                Description: 'e'
            },
            {
                isActive: '1',
                isMobile: '1',
                sort: '1',
                Description: 'f'
            },
        ] as (SiteCoreItem & { isActive: string; isMobile: string; sort: string; Description: string })[];

        component.cmsData = {
            Children: children as SiteCoreItem[]
        } as SiteCoreItem;
    });

    describe('canary', () => {

        it('should pass', async () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        it('defines all ads from CMS', () => {

            component.ngOnInit();

            expect(component.allAds).toEqual([
                {
                    image: '',
                    isActive: false,
                    isMobile: false,
                    sort: 1,
                    content: 'a'
                },
                {
                    image: '',
                    isActive: false,
                    isMobile: true,
                    sort: 1,
                    content: 'b'
                },
                {
                    image: '',
                    isActive: true,
                    isMobile: false,
                    sort: 2,
                    content: 'c'
                },
                {
                    image: '',
                    isActive: true,
                    isMobile: true,
                    sort: 2,
                    content: 'd'
                },
                {
                    image: '',
                    isActive: true,
                    isMobile: false,
                    sort: 1,
                    content: 'e'
                },
                {
                    image: '',
                    isActive: true,
                    isMobile: true,
                    sort: 1,
                    content: 'f'
                }
            ]);

        });

        it('subscribes to media observer', () => {
            spyOn(component, 'setAds');

            component.ngOnInit();

            expect(mediaObserver.media$.subscribe).toHaveBeenCalled();

            expect(component.setAds).toHaveBeenCalledTimes(1);

            mediaObserver.media$.next();

            expect(component.setAds).toHaveBeenCalledTimes(2);
        });

        it('sets ads on init', () => {
            spyOn(component, 'setAds');

            component.ngOnInit();

            expect(component.setAds).toHaveBeenCalledTimes(1);

        });

    });

    describe('setAds', () => {
        [
            { isMobile: true, ads: [{ sort: 1, content: 'f' }, { sort: 2, content: 'd'}] },
            { isMobile: false, ads: [{ sort: 1, content: 'e' }, { sort: 2, content: 'c' }] }
        ].forEach(({ isMobile, ads }) => {
            it(`sets ads when isMobile is ${isMobile ? 'true' : 'false'}`, () => {

                component.ngOnInit();

                component.setAds(isMobile);

                expect(component.ads).toEqual(
                    ads.map(ad => ({
                        image: '',
                        isActive: true,
                        isMobile,
                        sort: ad.sort,
                        content: ad.content
                    })));

            });
        });

    });

});
