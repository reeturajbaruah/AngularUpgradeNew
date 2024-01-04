import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentEntryComponent } from './paymentEntry.component';
import { ResponseErrorService } from 'common/services';
import { WebApisService as ValidationApis } from 'validation/services/webApis.service';
import { FormsModule, NgForm } from '@angular/forms';
import { BankAccountType, BillingType } from 'common/models';
import { BaseResponse } from 'common/interfaces';

describe('component: payment entry', () => {

    let fixture: ComponentFixture<PaymentEntryComponent>;
    let component: PaymentEntryComponent;

    const validationApis: ValidationApis = jasmine.createSpyObj('validationApis', ['validateRoutingNumber']);
    const responseErrorService: ResponseErrorService = jasmine.createSpyObj('responseErrorService', ['displayAlertsFromResponse']);


    beforeEach(async () => {
        await TestBed
            .configureTestingModule({
                declarations: [
                    PaymentEntryComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule],
                providers: [
                    NgForm,
                    { provide: ValidationApis, useFactory: () => validationApis },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService }]
            })
            .compileComponents();


        fixture = TestBed.createComponent(PaymentEntryComponent);
        component = fixture.debugElement.componentInstance;

    });

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should check if payment is ready for EFT', async () => {
        component.billingInfo = {
            credit: null,
            eft: {
                accountType: BankAccountType.Personal,
                name: 'test',
                routingNumber: '',
                accountNumber: '',
                city: '',
                country: '',
                address1: ''
            },
            billingType: BillingType.Eft
        };

        const response = {} as BaseResponse;
        response.alerts = [];

        (validationApis.validateRoutingNumber as jasmine.Spy)
            .and.resolveTo(response);

        await component.getStatus();
        expect(validationApis.validateRoutingNumber).toHaveBeenCalled();
    });

    it('should check if payment is not ready for EFT', async () => {
        component.billingInfo = {
            credit: null,
            eft: {
                accountType: BankAccountType.Personal,
                name: 'test',
                routingNumber: '',
                accountNumber: '',
                city: '',
                country: '',
                address1: ''
            },
            billingType: BillingType.Eft
        };

        const response = {} as BaseResponse;
        response.alerts = [{ alertId: 123, alertMsg: 'error', importance: 1 }];

        (validationApis.validateRoutingNumber as jasmine.Spy)
            .and.resolveTo(response);



        await component.getStatus();
        expect(validationApis.validateRoutingNumber).toHaveBeenCalled();
        expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();

    });

});
