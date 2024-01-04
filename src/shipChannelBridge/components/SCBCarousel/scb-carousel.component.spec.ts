import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { SCBCarouselComponent } from './scb-carousel.component';
import { CmsUtilService } from 'cms/services';

describe('component: homePage-carousel', () => {

    let fixture: ComponentFixture<SCBCarouselComponent>;
    let component: SCBCarouselComponent;
    let cmsUtilService: CmsUtilService;

    beforeEach(async () => {
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        await TestBed
            .configureTestingModule({
                declarations: [
                    SCBCarouselComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CmsUtilService, useFactory: () => cmsUtilService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(SCBCarouselComponent);
        component = fixture.debugElement.componentInstance;

        component.sliderImages = {
            Children: [
                { Image: 'item1' }
            ],
            TimerInMilliseconds: '5000',
            Parameters: 'sliderHeight=400px'
        };
    });

    describe('canary', () => {

        it('should pass', async () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should parse cmsData', async () => {
            (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValue({ image: 'item1' });

            component.ngOnInit();

            expect(component.timer).toEqual(5000);
            expect(cmsUtilService.parseAllImageAttributes).toHaveBeenCalledTimes(2);
        });
    });

    describe('getHeightFromCMS', () => {
        it('should get height from sitecore', () => {
            expect(component.getHeightFromCMS()).toEqual('400px');
        });
    });
});
