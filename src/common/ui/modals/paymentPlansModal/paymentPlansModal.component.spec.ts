import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { changesStable } from 'testing';
import { PipesModule } from 'pipes/module';
import { PaymentPlansModalComponent, PaymentPlansModalInjectionValues, PaymentPlansModalResult } from './paymentPlansModal.component';
import { PaymentPlansStateNames } from 'paymentPlans/constants';
import { StateService } from '@uirouter/angular';
import { CmsUtilService } from 'cms/services';
import { IAcctSearchResponse } from 'violationsCommon/services/services.index';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

describe('PaymentPlansModal tests', () => {

    let fixture: ComponentFixture<PaymentPlansModalInjectionValues>;
    let component: PaymentPlansModalComponent;
    let dialogData: PaymentPlansModalInjectionValues;
    let state: StateService;
    let dialog: jasmine.SpyObj<MatDialogRef<PaymentPlansModalComponent>>;
    let cmsUtilService: CmsUtilService;
    let paymentPlansStateNames: PaymentPlansStateNames;
    let storefrontUtilityService: any;

    const mockData = {
        plate: {
            licensePlate: 'BZ62429',
            licenseState: 'TX'
        },
        associatedPlates: [
            {
                plateDueBeforeDiscount: 153.5,
                licensePlate: 'DG3P124',
                licenseState: 'TX'
            },
            {
                plateDueBeforeDiscount: 153.5,
                licensePlate: 'DG3P123',
                licenseState: 'TX'
            },
        ],
        hasAssociatedPlates: true
    } as IAcctSearchResponse;
    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
        dialogData = {
            cmsContent: { Title: '', LongDescription: '', AcceptBtn: '', associatedPlatesTitle: '' },
            data: mockData,
            searchedWithInvoice: true
        };
        state = jasmine.createSpyObj('state', ['go', 'href']);
        paymentPlansStateNames = new PaymentPlansStateNames();
        storefrontUtilityService = { isRunningAsKiosk: false };
        await TestBed
            .configureTestingModule({
                declarations: [
                    PaymentPlansModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: dialog, useFactory: () => dialog },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                    { provide: StateService, useFactory: () => state },
                    { provide: PaymentPlansStateNames, useFactory: () => paymentPlansStateNames },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(PaymentPlansModalComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = { Title: '', LongDescription: '', AcceptBtn: '', associatedPlatesTitle: '' };

        await changesStable(fixture);
    });


    it('is a canary test', async () => {
        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        it('should set data to injection values', () => {
            expect(component.cmsContent).toEqual({ Title: '', LongDescription: '', AcceptBtn: '', associatedPlatesTitle: '' });
        });
    });

    describe('acceptButtonClick', () => {
        it('should call dialog.close', async () => {
            await component.acceptButtonClick();
            expect(dialog.close).toHaveBeenCalledOnceWith({
                goToPaymentPlansLanding: true,
                goToPaymentPlansSearch: false
            } as PaymentPlansModalResult);
        });
    });

    describe('cancelButtonClick', () => {
        it('should call dialog.close', async () => {
            await component.cancelButtonClick();
            expect(dialog.close).toHaveBeenCalledOnceWith({
                goToPaymentPlansLanding: false,
                goToPaymentPlansSearch: false
            } as PaymentPlansModalResult);
        });
    });
    describe('goToPaymentPlansGrid', () => {
        it('should call dialog.close', async () => {
            await component.goToPaymentPlansGrid();
            expect(dialog.close).toHaveBeenCalledOnceWith({
                goToPaymentPlansLanding: false,
                goToPaymentPlansSearch: true
            } as PaymentPlansModalResult);
        });
    });

});
