import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SavePaymentMethodComponent } from './savePaymentMethod.component';
import { CmsResolverService } from 'cms/services';
import { PaymentRadioStatus } from 'common/models';
import { ISavePaymentMethodContent } from '../models/models';

describe('SavePaymentMethodComponent', () => {
    let component: SavePaymentMethodComponent;
    let fixture: ComponentFixture<SavePaymentMethodComponent>;

    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;

    beforeEach(async () => {
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);

        await TestBed.configureTestingModule({
            declarations: [SavePaymentMethodComponent],
            providers: [
                { provide: CmsResolverService, useValue: cmsResolverService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SavePaymentMethodComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('canary test', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should initialize cmsContent and emit savePaymentMethodRadio', async () => {
            // Arrange
            const mockCmsContent: ISavePaymentMethodContent = {
                Title: 'Test Title',
                Yes: 'Test Yes Option',
                No: 'Test No Option',
                ShortDescription: 'Test Short Description'
            };

            cmsResolverService.resolve.and.returnValue(Promise.resolve(mockCmsContent));
            spyOn(component.autoSavePaymentStatusChange, 'emit');

            // Act
            await component.ngOnInit();

            // Assert
            expect(cmsResolverService.resolve).toHaveBeenCalled();
            expect(component.cmsContent).toEqual(mockCmsContent);
            expect(component.autoSavePaymentStatusChange.emit).toHaveBeenCalledWith(component.savePaymentMethodRadio);
        });
    });

    describe('ngOnChanges', () => {
        it('should update savePaymentMethodRadio when autoReplenishmentStatus changes to Yes', () => {
            // Arrange
            const changes = {
                autoReplenishmentStatus: {
                    currentValue: PaymentRadioStatus.Yes
                }
            };

            // Act
            component.ngOnChanges(changes);

            // Assert
            expect(component.savePaymentMethodRadio).toBe(PaymentRadioStatus.Yes);
        });
    });

    describe('onSavePaymentChange', () => {
        it('should emit the current savePaymentMethodRadio value', () => {
            // Arrange
            spyOn(component.autoSavePaymentStatusChange, 'emit');

            // Act
            component.onSavePaymentChange();

            // Assert
            expect(component.autoSavePaymentStatusChange.emit).toHaveBeenCalledWith(component.savePaymentMethodRadio);
        });
    });
});
