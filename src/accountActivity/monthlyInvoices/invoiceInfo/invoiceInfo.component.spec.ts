import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressInfo } from 'common/models';
import { CurrentUserService } from 'common/services';
import { } from 'jasmine';
import { InvoiceInfoComponent } from './invoiceInfo.component';



describe('component: invoiceInfoComponent', () => {
    let currentUserService: jasmine.SpyObj<CurrentUserService>;

    let fixture: ComponentFixture<InvoiceInfoComponent>;
    let component: InvoiceInfoComponent;

    beforeEach(async () => {
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
        currentUserService.getCurrentUser.and.returnValue({ acctId: 123 });

        await TestBed
            .configureTestingModule({
                declarations: [
                    InvoiceInfoComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: CurrentUserService, useFactory: () => currentUserService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(InvoiceInfoComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('checkAddress', () => {
        it('should set showAddress flag', () => {
            const address: AddressInfo = {
                country: 'USA',
                address1: '1 One St',
                address2: 'Apt 1',
                address3: 'Ste 11',
                address4: 'Bldg 111',
                city: 'Surprise',
                plus4: '1661',
                state: 'AZ',
                zip: '88117'
            };
            component.address = address;
            component.checkAddress();
            expect(component.showAddress).toBe(true);
        });

        it('should hide the address if incomplete', () => {
            const address: AddressInfo = {
                country: 'USA',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                city: 'Surprise',
                plus4: '1661',
                state: 'AZ',
                zip: '88117'
            };
            component.address = address;
            component.checkAddress();
            expect(component.showAddress).toBeUndefined();
        });

        it('should set address line 2', () => {
            const address: AddressInfo = {
                country: 'USA',
                address1: '1 One St',
                address2: 'Apt 1',
                address3: 'Ste 11',
                address4: 'Bldg 111',
                city: 'Surprise',
                plus4: '1661',
                state: 'AZ',
                zip: '88117'
            };
            component.address = address;
            component.checkAddress();
            expect(component.showAddress).toBe(true);
        });
    });

    describe('assignPhoneNumber', () => {
        it('should display the work phone number', () => {
            component.workPhone = '1112223333';
            component.assignPhoneNumber();
            expect(component.phoneNumber).toBe('1112223333');
        });

        it('should display the home phone number', () => {
            component.workPhone = '';
            component.homePhone = '1112223333';
            component.assignPhoneNumber();
            expect(component.phoneNumber).toBe('1112223333');
        });

        it('should display the mobile number', () => {
            component.workPhone = '';
            component.homePhone = '';
            component.mobile = '1112223333';
            component.assignPhoneNumber();
            expect(component.mobile).toBe('1112223333');
        });
    });
});
