import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { CmsUtilService } from 'cms/services';
import { HomeHelpAndSupportComponent } from './homeHelpAndSupport.component';

describe('component: homePage-helpAndSupport', () => {

    let fixture: ComponentFixture<HomeHelpAndSupportComponent>;
    let component: HomeHelpAndSupportComponent;
    let cmsUtilService: CmsUtilService;
    let locationService: Location;

    beforeEach(async () => {

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
        locationService = jasmine.createSpyObj('location', ['go']);

        (cmsUtilService.generateFileSrc as jasmine.Spy).and.callFake(x => x);

        await TestBed
            .configureTestingModule({
                declarations: [
                    HomeHelpAndSupportComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: Location, useFactory: () => locationService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(HomeHelpAndSupportComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsData = {
            Children: [
                {
                    Title: 'title3',
                    Image: 'image3',
                    MobileImage: 'mobile3',
                    ShortDescription: 'content3',
                    ButtonText: 'button3',
                    ButtonURL: 'url3',
                    sort: '3'
                },
                {
                    Title: 'title1',
                    Image: 'image1',
                    MobileImage: 'mobile1',
                    ShortDescription: 'content1',
                    ButtonText: 'button1',
                    ButtonURL: 'url1',
                    sort: '1'
                },
                {
                    Title: 'title2',
                    Image: 'image2',
                    MobileImage: 'mobile2',
                    ShortDescription: 'content2',
                    ButtonText: 'button2',
                    ButtonURL: 'url2',
                    sort: '2'
                }
            ]
        } as any;
    });

    describe('canary', () => {
        it('should pass', async () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {
        it('builds panels from cmd data', () => {
            component.ngOnInit();

            expect(component.panels).toEqual([
                {
                    title: 'title1',
                    image: 'image1',
                    mobileImage: 'mobile1',
                    content: 'content1',
                    buttonText: 'button1',
                    url: 'url1'
                },
                {
                    title: 'title2',
                    image: 'image2',
                    mobileImage:'mobile2',
                    content: 'content2',
                    buttonText: 'button2',
                    url: 'url2'
                },
                {
                    title: 'title3',
                    image:'image3',
                    mobileImage: 'mobile3',
                    content: 'content3',
                    buttonText: 'button3',
                    url: 'url3'
                }
            ]);
        });
    });

    describe('invoke', () => {

        it('redirects to panel.url', () => {
            component.invoke({ url: 'url' } as any);

            expect(locationService.go).toHaveBeenCalledWith('url');
        });

    });
});
