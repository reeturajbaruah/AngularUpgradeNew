import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';
import { ValidationModule } from 'validation/module';
import { PaymentConfirmationComponent } from './paymentConfirmation.component';
import { IPaymentConfirmConfig } from './paymentConfirmation.interface';
import { BillingInfo, BillingType } from 'common/models';

describe('PaymentConfirmationComponent', () => {
    let fixture: ComponentFixture<PaymentConfirmationComponent>;
    let component: PaymentConfirmationComponent;
    const paymentConfirmConfig = {
        header: '',
        paymentDetails: {
            header: {
                label: '',
                showEditLink: false
            },
            showAccountNumber: false
        },
        totalPaymentAmt: 0
    } as IPaymentConfirmConfig;
    const billingInfo = {
        credit: {},
        eft: {}
    } as BillingInfo;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PaymentConfirmationComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [PipesModule, FormsModule, ValidationModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentConfirmationComponent);
        component = fixture.componentInstance;
        component.paymentConfirmConfig = paymentConfirmConfig;
        component.billingInfo = billingInfo;
        fixture.detectChanges();
    });

    it('should create payment confirm comp', () => {
        expect(component).toBeDefined();
    });

    it('should return nameOnBankAccount ', () => {
        component.billingInfo.billingType = BillingType.Eft;
        component.bankDetails.nameOnBankAccount = 'Test';
        const name = component.name;
        expect(name).toEqual('Test');
    });

    it('should return nameOnCard', () => {
        component.billingInfo.billingType = BillingType.Credit;
        component.creditCardDetails.nameOnCard = 'Test';
        const name = component.name;
        expect(name).toEqual('Test');
    });

    describe('getDate', () => {
        it('should return instance of Date', () => {
            const date = component.getDate();

            expect(date).toBeInstanceOf(Date);
        });
    });

    describe('editable', () => {
        it('should invoke edit.emit()', () => {
            spyOn(component.edit, 'emit');
            component.editable();

            expect(component.edit.emit).toHaveBeenCalled();
        });
    });
});