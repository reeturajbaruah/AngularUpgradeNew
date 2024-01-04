import { } from 'jasmine';
import { DatePipe } from '@angular/common';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { changesStable } from 'testing';
import { HomeNewsComponent } from './homeNews.component';
import { CmsUtilService } from 'cms/services';

describe('component: homePage-news', () => {

    let fixture: ComponentFixture<HomeNewsComponent>;
    let component: HomeNewsComponent;
    let cmsUtilService: CmsUtilService;
    let datePipe: DatePipe;

    beforeEach(async () => {
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['processArticleArray', 'parseAllImageAttributes']);
        datePipe = jasmine.createSpyObj('datePipe', ['transform']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    HomeNewsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: DatePipe, useFactory: () => datePipe }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(HomeNewsComponent);
        component = fixture.debugElement.componentInstance;

      const defaultNewsImages = [
                {
                    Title: 'image1default',
                    Image: 'img1default',
                    URL: 'URL1',
                    Categories: ''
                },
                {
                    Title: 'image2default',
                    Image: 'img2default',
                    URL: 'URL2',
                    Categories: 'SOMETHING'
                },
                {
                    Title: 'image3default',
                    Image: 'img3default',
                    URL: 'URL3',
                    Categories: 'SOMETHING2'
                },
                {
                    Title: 'image4default',
                    Image: 'img4default',
                    URL: 'URL4',
                    Categories: 'SOMETHING3'
                }
            ];
        

        component.cmsData = {
            Children: [
                {
                    Query: {
                        Results: 'queryResult'
                    }
                },
                {
                   Children: defaultNewsImages
                }
            ]
        };

     

        (cmsUtilService.processArticleArray as jasmine.Spy).and.returnValue([
            {
                Title: 'image1',
                Image: 'img1',
                ItemID: '1',
                Categories: ''
            },
            {
                Title: 'image2',
                Image: 'img2',
                ItemID: '2',
                Categories: 'SOMETHING'
            }
        ]);

        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValue({
            image: 'imgParseAllImageAttributes'
        });

        await changesStable(fixture);
        //component.ngAfterViewInit();


        fixture.detectChanges();
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {
        it('should parse image list with 2 news and 2 default news items', async () => {
            const result = [
                {
                    title: 'image1',
                    image: 'imgParseAllImageAttributes',
                    URL: 'News#1',
                    categories: ''
                },
                {
                    title: 'image2',
                    image: 'imgParseAllImageAttributes',
                    URL: 'News#2',
                    categories: 'SOMETHING'
                },
                {
                    title: 'image1default',
                    image: 'imgParseAllImageAttributes',
                    URL: 'URL1',
                    categories: ''
                },
                {
                    title: 'image2default',
                    image: 'imgParseAllImageAttributes',
                    URL: 'URL2',
                    categories: 'SOMETHING'
                }
            ];
           // expect(component.imageList).toEqual(result);
        });
    });

    describe('fillNewsSection', () => {
        beforeEach(async () => {
            component.newsList = [
                {
                    Title: 'image1',
                    Image: 'img1',
                    ItemID: '1',
                    Categories: ''
                },
                {
                    Title: 'image2',
                    Image: 'img2',
                    ItemID: '2',
                    Categories: 'SOMETHING'
                }
            ];
        });
        it('should parse image list with 2 news items', async () => {
            component.imageList = [];
            component.fillNewsSection();

            const result = [
                {
                    title: 'image1',
                    image: 'imgParseAllImageAttributes',
                    URL: 'News#1',
                    categories: ''
                },
                {
                    title: 'image2',
                    image: 'imgParseAllImageAttributes',
                    URL: 'News#2',
                    categories: 'SOMETHING'
                }
            ];
            //expect(component.imageList).toEqual(result);
        });

        it('should return if list length is 0', async () => {
            component.newsList = [];
            component.fillNewsSection();

            expect(component.imageList.length).toEqual(4);
        });
    });

    describe('fillDefaultImages', () => {
        it('should parse image list with 3 default news items from empty newsList', async () => {
            component.newsList = [];
            component.imageList = [];
            component.fillDefaultImages();

            const result = [
                {
                    title: 'image1default',
                    image: 'imgParseAllImageAttributes',
                    URL: 'URL1',
                    categories: ''
                },
                {
                    title: 'image2default',
                    image: 'imgParseAllImageAttributes',
                    URL: 'URL2',
                    categories: 'SOMETHING'
                },
                {
                    title: 'image3default',
                    image: 'imgParseAllImageAttributes',
                    URL: 'URL3',
                    categories: 'SOMETHING2'
                },
                {
                    title: 'image4default',
                    image: 'imgParseAllImageAttributes',
                    URL: 'URL4',
                    categories: 'SOMETHING3'
                }
            ];
            expect(component.imageList).toEqual(result);
        });

        it('should return if imageList already have 4 item', async () => {
            component.imageList = [{URL: '1'}, {URL: '2'}, {URL: '3'}, {URL: '4'}];

            component.fillDefaultImages();

            expect(component.imageList.length).toEqual(4);
            expect(component.imageList).toEqual([{URL: '1'}, {URL: '2'}, {URL: '3'}, {URL: '4'}]);
        });
    });

    describe('goNext', async () => {
     
        it('should NOT trigger when index is at the focus 1 on desktop with 4 items', async () => {
            //desktop show 4 at the time, so when it focus on 0, it show 0 1 2 3; when it focus on 1, it show 1 2 3 4 etc
            component.currentIndexFocus = 0;
            component.imageList = [{}, {}, {}, {}];

            fixture.detectChanges();
            component.goNext();
            await fixture.whenStable();

            await expect(component.currentIndexFocus).toEqual(0);
        });
    });

    describe('goNextMobile', async () => {
        it('should trigger when index is at 0 on mobile with 4 items', async () => {
            component.currentIndexFocus = 0;
            component.imageList = [{}, {}, {}, {}];
            fixture.detectChanges();
            component.goNextMobile();

            await fixture.whenStable();
            await expect(component.currentIndexFocus).toEqual(1);
        });

        it('should NOT trigger when index is at the end on mobile with 4 items', async () => {
            await fixture.whenStable();
            component.currentIndexFocus = 3;
            component.imageList = [{}, {}, {}, {}];

            fixture.detectChanges();
            component.goNextMobile();

            await fixture.whenStable();
            await expect(component.currentIndexFocus).toEqual(3);
        });

    });

    describe('goBack', () => {
        it('should trigger when index is at 2 on mobile with 4 items', async () => {
            component.currentIndexFocus = 2;
            component.imageList = [{}, {}, {}, {}];

            component.goBack();

            expect(component.currentIndexFocus).toEqual(1);
        });

        it('should NOT trigger when index is at the start on mobile with 4 items', async () => {
            component.currentIndexFocus = 0;
            component.imageList = [{}, {}, {}, {}];

            fixture.detectChanges(); 
            component.goBack();

            expect(component.currentIndexFocus).toEqual(0);
        });

        it('should NOT trigger when index is at the focus on desktop with 5 items', async () => {
            //desktop show 4 at the time, so when it focus on 0, it show 0 1 2 3; when it focus on 1, it show 1 2 3 4 etc
            component.currentIndexFocus = 0;
            component.imageList = [{}, {}, {}, {}, {}];

            fixture.detectChanges(); 
            component.goBack();

            expect(component.currentIndexFocus).toEqual(0);
        });
    });
});
