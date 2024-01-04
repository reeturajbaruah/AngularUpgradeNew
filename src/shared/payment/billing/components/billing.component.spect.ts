import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BillingComponent } from './billing.component';
import { DialogService } from 'common/services';
import { BillingInfo } from 'common/models';
import { IBillingContent } from '../models/models';

describe('BillingComponent', () => {
    let component: BillingComponent;
    let fixture: ComponentFixture<BillingComponent>;

    let dialogService: jasmine.SpyObj<DialogService>;

    beforeEach(async () => {
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered']);

        await TestBed.configureTestingModule({
            declarations: [BillingComponent],
            providers: [
                { provide: DialogService, useValue: dialogService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BillingComponent);
        component = fixture.componentInstance;

        component.content = {
            billingInfo: {} as BillingInfo,
            states: [],
            countries: []
        } as IBillingContent;
        fixture.detectChanges();
    });

    describe('canary test', () => {
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should initialize billingInfo from content', () => {
            // Arrange & Act
            component.ngOnInit();

            // Assert
            expect(component.billingInfo).toBe(component.content.billingInfo);
        });
    });

    describe('openEditBillingModal', () => {
        it('should emit editBillingResult$ if redirectToPaymentOnEdit is true', async () => {
            // Arrange
            spyOn(component.editBillingResult$, 'emit');
            component.content.redirectToPaymentOnEdit = true;

            // Act
            await component.openEditBillingModal();

            // Assert
            expect(component.editBillingResult$.emit).toHaveBeenCalled();
        });

        it('should open the billing modal and emit result on success', async () => {
            // Arrange
            dialogService.openSliderCentered.and.returnValue(Promise.resolve(true));
            spyOn(component.editBillingResult$, 'emit');

            // Act
            await component.openEditBillingModal();

            // Assert
            expect(dialogService.openSliderCentered).toHaveBeenCalled();
            expect(component.editBillingResult$.emit).toHaveBeenCalledWith(true);
        });
    });
});
