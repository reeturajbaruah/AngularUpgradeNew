import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { CmsUtilService } from 'cms/services';
import { BREAKPOINTS, BreakPoint } from '@angular/flex-layout';

import { DynamicDisplayComponent, DynamicDisplay, CmsDisplay } from './dynamicDisplay.component';
import { DialogService } from '../../common/services';
import { VimeoPlayerModalComponent } from '../../common/ui';

describe('component: dynamic display', () => {

    let fixture: ComponentFixture<DynamicDisplayComponent>;
    let component: DynamicDisplayComponent;
    let dialogService: DialogService;
    let cmsUtil: CmsUtilService;

    beforeEach(async () => {

        cmsUtil = jasmine.createSpyObj('CmsUtilService', ['parseAllImageAttributes']);
        dialogService = jasmine.createSpyObj('DialogService', ['openFloater']);

        (cmsUtil.parseAllImageAttributes as jasmine.Spy).and.callFake(p => ({ image : p}));

        await TestBed
            .configureTestingModule({
                declarations: [
                    DynamicDisplayComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CmsUtilService, useFactory: () => cmsUtil },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: BREAKPOINTS, useFactory: () => ([{ alias: 'lt-md', mediaQuery: 'screen' }] as BreakPoint[]) }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(DynamicDisplayComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', async () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        beforeEach(async () => {

            component.cmsData = {
                Children: [
                    {
                        MediaType: 'Video',
                        MediaURL: 'link',
                        Image: 'image4',
                        MobileImage: 'mobileImage4',
                        sort: '3',
                        isActive: '0',
                        ShortDescription: 'tab4',
                        LongDescription: 'content4',
                        Title: 'title4',
                        DescriptionForImage: 'test',
                        MobileDescriptionForImage: 'mob test'
                    } as any,
                    {
                        MediaType: 'Video',
                        MediaURL: 'link',
                        Image: 'image3',
                        MobileImage: 'mobileImage3',
                        sort: '3',
                        isActive: '1',
                        ShortDescription: 'tab3',
                        LongDescription: 'content3',
                        Title: 'title3',
                        DescriptionForImage: 'test',
                        MobileDescriptionForImage: 'mob test'
                    } as any,
                    {
                        MediaType: 'Gif',
                        Image: 'image2',
                        MobileImage: 'mobileImage2',
                        sort: '2',
                        isActive: '1',
                        ShortDescription: 'tab2',
                        LongDescription: 'content2',
                        Title: 'title2',
                        DescriptionForImage: 'test',
                        MobileDescriptionForImage: 'mob test'
                    } as any,
                    {
                        MediaType: 'Image',
                        Image: 'image1',
                        MobileImage: 'mobileImage1',
                        sort: '1',
                        isActive: '1',
                        ShortDescription: 'tab1',
                        LongDescription: 'content1',
                        Title: 'title1',
                        DescriptionForImage: 'test',
                        MobileDescriptionForImage: 'mob test'
                    } as any
                ] as any[]
            } as CmsDisplay;

            await changesStable(fixture);
        });

        it('populates cms data', () => {

            expect(component.dynamicDisplays).toEqual([
                {
                    title: 'title1',
                    image: 'image1',
                    mobileImage: 'mobileImage1',                    
                    mediaType: 'Image',
                    mediaUrl: undefined,
                    content: 'content1',
                    tabTitle: 'tab1',
                    DescriptionForImage: 'test',
                    MobileDescriptionForImage: 'mob test'
                } as any,
                {
                    title: 'title2',
                    image: 'image2',
                    mobileImage: 'mobileImage2',
                    mediaType: 'Gif',
                    mediaUrl: undefined,
                    content: 'content2',
                    tabTitle: 'tab2',
                    DescriptionForImage: 'test',
                    MobileDescriptionForImage: 'mob test'
                } as any,
                {
                    title: 'title3',
                    image: 'image3',
                    mobileImage: 'mobileImage3',
                    mediaType: 'Video',
                    mediaUrl: 'link',
                    content: 'content3',
                    tabTitle: 'tab3',
                    DescriptionForImage: 'test',
                    MobileDescriptionForImage: 'mob test'
                } as any               
            ]);

        });

        it('selects first display as selected display', () => {
            expect(component.selectedDisplay).toBeDefined();
            expect(component.selectedDisplay).toEqual({
                title: 'title1',
                image: 'image1',
                mobileImage: 'mobileImage1',
                mediaType: 'Image',
                mediaUrl: undefined,
                content: 'content1',
                tabTitle: 'tab1',
                DescriptionForImage: 'test',
                MobileDescriptionForImage: 'mob test'
            } as any);
        });
        it('test', () => { });
    });

    describe('rendering', () => {
        it('is not visible if no items are found', async () => {
            component.cmsData = {
                Children: []
            } as CmsDisplay;

            await changesStable(fixture);

            const mainElem = fixture.debugElement.query(elm => 'display' in elm.classes);
            expect(mainElem).toBeFalsy();
        });

        it('is visible if items are found', async () => {
            component.cmsData = {
                Children: [{ isActive: '1' } as any]
            } as CmsDisplay;

            await changesStable(fixture);

            const mainElem = fixture.debugElement.query(elm => 'display' in elm.classes);
            expect(mainElem).toBeTruthy();
        });

    });

    describe('interactive stuff', () => {

        it('can select display', () => {

            const display = {} as DynamicDisplay;
            expect(component.selectedDisplay).not.toBe(display);
            component.setSelectedDisplay(display);
            expect(component.selectedDisplay).toBe(display);

        });

        it('can only interact if display selected', () => {

            component.selectedDisplay = null;
            component.interact();
            expect(dialogService.openFloater).not.toHaveBeenCalled();

        });

        it('opens link in new window if media type is video', () => {
            component.selectedDisplay = {
                mediaType: 'Video',
                mediaUrl: 'link'
            } as DynamicDisplay;

            component.interact();

            expect(dialogService.openFloater).toHaveBeenCalledWith(VimeoPlayerModalComponent, { mediaUrl: 'link' });
        });

        it('does not open link if media type is not video', () => {

            component.selectedDisplay = {
                mediaType: 'Image'
            } as DynamicDisplay;

            component.interact();

            expect(dialogService.openFloater).not.toHaveBeenCalled();

        });

        [
            {
                isInteractive: false,
                display: {
                    mediaType: 'Image'
                } as DynamicDisplay
            },
            {
                isInteractive: false,
                display: {
                    mediaType: 'GIF'
                } as DynamicDisplay
            },
            {
                isInteractive: true,
                display: {
                    mediaType: 'Video'
                } as DynamicDisplay
            },
            {
                isInteractive: false,
                display: undefined
            },
        ].forEach(({ isInteractive, display }) => {

            it(`${isInteractive ? 'is' : 'is not'} interactive when display media type is ${display ? display.mediaType : 'not defined'}`, () => {
                component.setSelectedDisplay(display);
                expect(!!component.isInteractive).toBe(isInteractive);
            });

        });

    });
});
