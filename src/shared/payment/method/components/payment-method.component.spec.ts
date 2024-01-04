import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DialogService } from 'common/services';
import { PaymentMethodComponent } from './payment-method.component';
import { CmsResolverService } from 'cms/services';
import { IPaymentMethodContent } from './models/models';
import { cloneDeep } from 'lodash';
import { BillingInfo, BillingType } from 'common/models';
import { ITagInfoInjectionValues, ITagInfoModalSCI, TagInfoModalComponent } from 'common/ui';

const mockCmsContent = {
    ShortDescription: 'Short description'
} as IPaymentMethodContent;

const mockTagInfoModalCms = {
    FIRST_REG_TAGS_DESC: 'Test',
    FIRST_REG_TAGS_FEE: 'Test',
    MORE_THAN_TAGS_DESC: 'Test',
    MORE_THAN_TAGS_FEE: 'Test',
    MOTO_TAGS_DESC: 'Test',
    MOTO_TAGS_FEE: 'Test',
} as ITagInfoModalSCI;

describe('component: shared-payment-method', () => {
    let component: PaymentMethodComponent;
    let fixture: ComponentFixture<PaymentMethodComponent>;

    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;
    let dialogService: jasmine.SpyObj<DialogService>;

    beforeEach(async () => {
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered']);

		await TestBed.configureTestingModule({
			declarations: [
                PaymentMethodComponent
            ],
            imports: [ FormsModule ],
            schemas: [ NO_ERRORS_SCHEMA ],
			providers: [
                { provide: CmsResolverService, useFactory: () => cmsResolverService },
                { provide: DialogService, useFactory: () => dialogService }
            ]
		})
        .compileComponents();
	});

    beforeEach(() => {
		fixture = TestBed.createComponent(PaymentMethodComponent);
        component = fixture.debugElement.componentInstance;

        component.billingInfo = { 
            cmsPaymentInfo: {
                tagInfoModalCms: cloneDeep(mockTagInfoModalCms)
            } as any
        } as any;
	});

    describe('canary', () => {
        it('should create', async () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should initialize the component', async () => {
            // Arrange
            cmsResolverService.resolve.and.returnValue(Promise.resolve(cloneDeep(mockCmsContent)));

            // Act
            await component.ngOnInit();

            // Assert
            expect(cmsResolverService.resolve).toHaveBeenCalled();
            expect(component.paymentMethodContent).toEqual(mockCmsContent);
        });
    });

    describe('submit method', () => {
        it('should call creditEntry.submit() and return its response when billingType is Credit', async () => {
            // Arrange
            component.creditEntry = jasmine.createSpyObj('creditEntry', ['submit']);
            component.billingInfo = { billingType: BillingType.Credit } as BillingInfo;
            (component.creditEntry.submit as jasmine.Spy).and.returnValue(Promise.resolve(true));
    
            // Act
            const result = await component.submit();
    
            // Assert
            expect(component.creditEntry.submit).toHaveBeenCalled();
            expect(result).toEqual(true);
        });
    
        it('should return undefined when billingType is not Credit', async () => {
            // Arrange
            component.billingInfo = { billingType: BillingType.Eft } as BillingInfo;

            // Act
            const result = await component.submit();
    
            // Assert
            expect(result).toBeUndefined();
        });
    
        it('should return undefined when creditEntry is not defined', async () => {
            // Arrange
            component.billingInfo = { billingType: BillingType.Credit } as BillingInfo;
            component.creditEntry = undefined;
    
            // Act
            const result = await component.submit();
    
            // Assert
            expect(result).toBeUndefined();
        });
    
        it('should return undefined when submitResponse from creditEntry.submit is false', async () => {
            // Arrange
            component.creditEntry = jasmine.createSpyObj('creditEntry', ['submit']);
            component.billingInfo = { billingType: BillingType.Credit } as BillingInfo;
            (component.creditEntry.submit as jasmine.Spy).and.returnValue(Promise.resolve(false));
    
            // Act
            const result = await component.submit();
    
            // Assert
            expect(component.creditEntry.submit).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
    });

    describe('onAutoReplenishmentSelection', () => {
        it('should set autoReplenishmentStatus and savePaymentStatus to true if checked', () => {
            const mockEvent = { target: { checked: true } };

            component.onAutoReplenishmentSelection(mockEvent as any);

            expect(component.billingInfo.autoReplenishmentStatus).toBeTrue();
            expect(component.billingInfo.savePaymentStatus).toBeTrue();
        });

        it('should set autoReplenishmentStatus to false if unchecked', () => {
            const mockEvent = { target: { checked: false } };

            component.onAutoReplenishmentSelection(mockEvent as any);

            expect(component.billingInfo.autoReplenishmentStatus).toBeFalse();
        });
    });

    describe('onSavePaymentMethodSelection', () => {
        it('should set savePaymentStatus to true if checked', () => {
            const mockEvent = { target: { checked: true } };

            component.onSavePaymentMethodSelection(mockEvent as any);

            expect(component.billingInfo.savePaymentStatus).toBeTrue();
        });

        it('should set savePaymentStatus to false if unchecked', () => {
            const mockEvent = { target: { checked: false } };

            component.onSavePaymentMethodSelection(mockEvent as any);

            expect(component.billingInfo.savePaymentStatus).toBeFalse();
        });
    });

    describe('onBillingTypeSelection', () => {
        it('should set autoReplenishmentStatus and savePaymentStatus to true for non-Cash billing types', () => {
            component.onBillingTypeSelection(BillingType.Credit);

            expect(component.billingInfo.autoReplenishmentStatus).toBeTrue();
            expect(component.billingInfo.savePaymentStatus).toBeTrue();
        });

        it('should set autoReplenishmentStatus and savePaymentStatus to false for Cash billing type', () => {
            component.onBillingTypeSelection(BillingType.Cash);

            expect(component.billingInfo.autoReplenishmentStatus).toBeFalse();
            expect(component.billingInfo.savePaymentStatus).toBeFalse();
        });
    });

    describe('onClickTagInfo', () => {
        it('should open TagInfo Modal', async () => {
            // Arrange
            const mockData = {
                modalCms: cloneDeep(mockTagInfoModalCms)
            } as ITagInfoInjectionValues;

            // Act
            await component.onClickTagInfo();

            // Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalledWith(TagInfoModalComponent, mockData);
        });
    });
});
