import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DialogRef } from 'common/services';
import { NewBillingAddressModalComponent, NewBillingAddressInjectionValues } from './newBillingAddressModal.component';

import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { TestingModule, createFormWrap } from 'testing';
import { MatSelectModule } from '@angular/material/select';
import { IMailingInfo } from '../../../models';

describe('newBillingAddressModalComponent', () => {

    let fixture: ComponentFixture<NewBillingAddressModalComponent>;
    let component: NewBillingAddressModalComponent;
    let dialogRef: DialogRef<NewBillingAddressInjectionValues>;

    beforeEach(async () => {

        dialogRef = {
            data: {
                mailingInfo: {
                    internationalAddress: '',
                    country: 'USA'
                } as any
            } as NewBillingAddressInjectionValues,
            close: () => { }
        } as DialogRef<NewBillingAddressInjectionValues>;

        await TestBed
            .configureTestingModule({
                declarations: [
                    NewBillingAddressModalComponent
                ],
                imports: [FormsModule, TestingModule, MatSelectModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef}
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(NewBillingAddressModalComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('cancel', () => {
        it('should call dialogRef.close', () => {
            const closeSpy = spyOn(dialogRef, 'close');

            component.cancel();

            expect(closeSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe('submit', () => {

        it('should call close', () => {
            const closeSpy = spyOn(dialogRef, 'close');

            component.submit();

            expect(closeSpy).toHaveBeenCalledTimes(1);
        });

        it('should set internationalAddress to false', () => {
            dialogRef.data.mailingInfo.country = 'USA';

            component.submit();

            expect(dialogRef.data.mailingInfo.internationalAddress).toBe(false);
        });

        it('should set internationalAddress to true', () => {
            dialogRef.data.mailingInfo.country = 'CAN';

            component.submit();

            expect(dialogRef.data.mailingInfo.internationalAddress).toBe(true);
        });

    });
});
