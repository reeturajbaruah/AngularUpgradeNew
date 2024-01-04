import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { changesStable } from 'testing';
import { SCBTabsComponent } from './scb-tabs.component';
import { DialogService } from '../../../common/services';

describe('component: dynamic display', () => {

    let fixture: ComponentFixture<SCBTabsComponent>;
    let component: SCBTabsComponent;
    let dialogService: jasmine.SpyObj<DialogService>;

    beforeEach(async () => {
        dialogService = jasmine.createSpyObj('DialogService', ['openSliderFilled']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    SCBTabsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: DialogService, useValue: dialogService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(SCBTabsComponent);
        component = fixture.debugElement.componentInstance;
        component.dynamicDisplays = [
            {
                title: 'title1',
                longDescription: 'content1',
                shortDescription: ''
            } as any,
            {
                title: 'title2',
                longDescription: 'content2',
                shortDescription: ''

            } as any,
            {
                title: 'title3',
                longDescription: 'content3',
                shortDescription: ''
            } as any
        ];
    });

    describe('canary', () => {
        it('should pass', async () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngOnInit', () => {

        beforeEach(async () => {
            await changesStable(fixture);
        });

        it('populates cms data', () => {

            expect(component.dynamicDisplays).toEqual([
                {
                    title: 'title1',
                    longDescription: 'content1',
                    shortDescription: ''

                } as any,
                {
                    title: 'title2',
                    longDescription: 'content2',
                    shortDescription: ''

                } as any,
                {
                    title: 'title3',
                    longDescription: 'content3',
                    shortDescription: ''
                } as any,
            ]);
            expect(component.selectedDisplay).toEqual(component.dynamicDisplays[0]);
        });
    });

    describe('setSelectedDisplay', () => {
        it('should call hideCarousel.emit with true', () => {
            spyOn(component.hideCarousel, 'emit');

            component.setSelectedDisplay({
                title: 'Home',
                longDescription: 'test long',
                shortDescription: 'test short'
            });

            expect(component.hideCarousel.emit).toHaveBeenCalledWith(true);
        });

        it('should call hideCarousel.emit with false', () => {
            spyOn(component.hideCarousel, 'emit');
            
            component.setSelectedDisplay({
                title: 'Test',
                longDescription: 'test long',
                shortDescription: 'test short'
            });

            expect(component.hideCarousel.emit).toHaveBeenCalledWith(false);
        });

        it('should call hideCarousel.emit with true', () => {
            dialogService.openSliderFilled.and.resolveTo({});
            spyOn(component.hideCarousel, 'emit');

            component.setSelectedDisplay({
                title: 'Contact',
                longDescription: 'test long',
                shortDescription: 'test short'
            });

            expect(component.hideCarousel.emit).toHaveBeenCalledWith(true);
            expect(dialogService.openSliderFilled).toHaveBeenCalled();
        });
    });
});
