import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AutoReplenishmentComponent } from './autoReplenishment.component';
import { CmsResolverService } from 'cms/services';
import { IAutoReplenishmentContent } from '../models/models';

describe('AutoReplenishmentComponent', () => {
    let component: AutoReplenishmentComponent;
    let fixture: ComponentFixture<AutoReplenishmentComponent>;

    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;

    beforeEach(async () => {
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);

        await TestBed.configureTestingModule({
            declarations: [AutoReplenishmentComponent],
            providers: [
                { provide: CmsResolverService, useValue: cmsResolverService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AutoReplenishmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('canary test', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        // Arrange
        it('should initialize cmsContent and emit autoReplenishmentRadio', async () => {
            const mockCmsContent: IAutoReplenishmentContent = {
                Title: 'Test Title',
                Yes: 'Test Yes Option',
                No: 'Test No Option'
            };

            cmsResolverService.resolve.and.returnValue(Promise.resolve(mockCmsContent));
            spyOn(component.autoReplenishmentStatusChange, 'emit');

            // Act
            await component.ngOnInit();

            // Assert
            expect(cmsResolverService.resolve).toHaveBeenCalled();
            expect(component.cmsContent).toEqual(mockCmsContent);
            expect(component.autoReplenishmentStatusChange.emit).toHaveBeenCalledWith(component.autoReplenishmentRadio);
        });
    });

    describe('onAutoReplenishmentChange', () => {
        it('should emit the current autoReplenishmentRadio value', () => {
            // Arrange
            spyOn(component.autoReplenishmentStatusChange, 'emit');

            // Act
            component.onAutoReplenishmentChange();

            // Assert
            expect(component.autoReplenishmentStatusChange.emit).toHaveBeenCalledWith(component.autoReplenishmentRadio);
        });
    });
});
