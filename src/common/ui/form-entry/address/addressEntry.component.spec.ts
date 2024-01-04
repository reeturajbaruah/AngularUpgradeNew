import { } from 'jasmine';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CommonModule as HctraCommonModule } from 'common/module';

import { ValidationModule } from 'validation/module';
import { PipesModule } from 'pipes/module';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';

import { AddressEntryComponent } from './addressEntry.component';
import { AddressInfo } from 'common/models';

import { TestingModule, createFormWrap, changesStable } from 'testing';

import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { CountryConversionService } from 'common/conversions';
import { BillingInfoUtilitiesService } from '../../../billing/billingInfoUtilities.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { AccountService } from 'common/services';

describe('address-entry component', () => {

    let billingInfoUtilitiesService: jasmine.SpyObj<BillingInfoUtilitiesService>;
    let countryConversionService: CountryConversionService;
    let authenticationService: jasmine.SpyObj<AuthenticationService>;

    let form: NgForm;
    let address: FormGroup;
    let fixture: ComponentFixture<any>;
    let component: AddressEntryComponent;
    let accountService: jasmine.SpyObj<AccountService>;

    beforeEach(async () => {

        billingInfoUtilitiesService = jasmine.createSpyObj('billingInfoUtilitiesService', ['isInternationalAddress']);
        countryConversionService = jasmine.createSpyObj('countryConversionService', ['countryCodeToName', 'countryNameToCode']);
        authenticationService = jasmine.createSpyObj('AuthenticationService', ['isAuthenticated']);
        accountService = jasmine.createSpyObj('AccountService', ['getMailingInfo']);

        TestBed
            .configureTestingModule({
                declarations: [AddressEntryComponent],
                imports: [PipesModule, FormsModule, TestingModule, MatSelectModule],
                providers: [
                    { provide: BillingInfoUtilitiesService, useFactory: () => billingInfoUtilitiesService },
                    { provide: CountryConversionService, useFactory: () => countryConversionService },
                    { provide: AuthenticationService, useFactory: () => authenticationService },
                    { provide: AccountService, useFactory: () => accountService }
                ],

                //this will allow for nested components to be ignored. 
                //use when you don't need to interact with the sub component in the tests
                schemas: [NO_ERRORS_SCHEMA]
            })
            .overrideModule(BrowserDynamicTestingModule, {
                set: {
                    entryComponents: [AddressEntryComponent]
                }
            })   
            .compileComponents();

        const constuct = await createFormWrap(AddressEntryComponent, c => {
            c.validate = true;
            c.stateList = [{ stateCode: 'AR' }, { stateCode: 'TX' }];
            c.countryList = [{ countryCode: 'USA', countryName: 'USA' }, { countryCode: 'UGY', countryName: 'URAGUAY'}];

            c.address = {
                address1: '',
                country: 'USA',
                city: '',
                international: false
            };
        });
        
        component = constuct.component;
        form = constuct.form;
        fixture = constuct.fixture;        
        address = form.controls.address as FormGroup;
    });

    describe('ngOnInit', () => {
        it('should go through international flow', () => {
            billingInfoUtilitiesService.isInternationalAddress.and.returnValue(true);
            component.address.country = 'Country Name';
            (countryConversionService.countryNameToCode as jasmine.Spy).and.returnValue('New Country Name');
            (countryConversionService.countryCodeToName as jasmine.Spy).and.returnValue('Country Display Name');

            component.ngOnInit();

            expect(component.address.country).toBe('New Country Name');
            expect(component.address.displayCountry).toBe('Country Display Name');
            expect(component.address.international).toBe(true);
        });

        it('should set country to same name if countryNameToCode returns nothing', () => {
            billingInfoUtilitiesService.isInternationalAddress.and.returnValue(true);
            component.address.country = 'Country Name';
            (countryConversionService.countryNameToCode as jasmine.Spy).and.returnValue(null);
            (countryConversionService.countryCodeToName as jasmine.Spy).and.returnValue('Country Display Name');

            component.ngOnInit();

            expect(component.address.country).toBe('Country Name');
        });

        it('should not go through international flow if country list is empty', () => {
            billingInfoUtilitiesService.isInternationalAddress.and.returnValue(true);
            component.countryList = null;
            component.address.country = 'Country Name';
            (countryConversionService.countryNameToCode as jasmine.Spy).and.returnValue('New Country Name');
            (countryConversionService.countryCodeToName as jasmine.Spy).and.returnValue('Country Display Name');

            component.ngOnInit();

            expect(countryConversionService.countryCodeToName).not.toHaveBeenCalled();
            expect(countryConversionService.countryNameToCode).not.toHaveBeenCalled();
        });

    });
    describe('refresh validation', () => {
        it('should accept valid address1', async () => {
            component.international = true;

            await changesStable(fixture);

            component.address.address1 = `123 Test Ln#.:'-,`;

            await changesStable(fixture);

            expect(address.controls.addressLine1.valid).toBeTruthy();
        });

        it('should reject invalid address1', async () => {
            component.international = true;

            await changesStable(fixture);

            component.address.address1 = '';

            await changesStable(fixture);

            expect(address.controls.addressLine1.valid).toBeFalsy();

            component.address.address1 = '!@#$%^&*';

            await changesStable(fixture);

            expect(address.controls.addressLine1.valid).toBeFalsy();
        });

        it('should accept valid address2', async () => {
            component.international = true;

            await changesStable(fixture);

            component.address.address2 = `123 Test Ln#.:'-,`;

            await changesStable(fixture);

            expect(address.controls.addressLine2.valid).toBeTruthy();
        });

        it('should reject invalid address2', async () => {
            component.international = true;

            await changesStable(fixture);

            component.address.address2 = '!@#$%^&*';

            await changesStable(fixture);

            expect(address.controls.addressLine2.valid).toBeFalsy();
        });

        it('should accept valid city', async () => {
            component.international = true;

            await changesStable(fixture);

            component.address.city = '123 abc ABC .';

            await changesStable(fixture);

            expect(address.controls.city.valid).toBeTruthy();
        });

        it('should reject invalid city', async () => {
            component.international = true;

            await changesStable(fixture);

            component.address.city = '*^&$%#@';

            await changesStable(fixture);

            expect(address.controls.city.valid).toBeFalsy();

            component.address.city = '';

            await changesStable(fixture);

            expect(address.controls.city.valid).toBeFalsy();
        });

        it('should accept valid international state', async () => {
            component.international = true;

            await changesStable(fixture);

            component.address.state = 'ABC';

            await changesStable(fixture);

            expect(address.controls.state.valid).toBeTruthy();

            component.address.state = 'AB';

            await changesStable(fixture);

            expect(address.controls.state.valid).toBeTruthy();
        });

        it('should reject invalid international state', async () => {
            component.international = true;

            await changesStable(fixture);

            component.address.state = '*&#';

            await changesStable(fixture);

            expect(address.controls.state.valid).toBeFalsy();

            component.address.state = '1234';

            await changesStable(fixture);

            expect(address.controls.state.valid).toBeFalsy();

            component.address.state = '1';

            await changesStable(fixture);

            expect(address.controls.state.valid).toBeFalsy();

            component.address.state = '';

            await changesStable(fixture);

            expect(address.controls.state.valid).toBeFalsy();

        });

        it('should accept valid zip', async () => {
            component.international = true;

            await changesStable(fixture);

            component.address.zip = '12345asd';

            await changesStable(fixture);

            expect(address.controls.zipCode.valid).toBeTruthy();
        });

        it('should reject invalid zip', async () => {
            component.international = true;

            await changesStable(fixture);

            component.address.zip = '!@#$%^&*';

            await changesStable(fixture);

            expect(address.controls.zipCode.valid).toBeFalsy();

            component.address.zip = '1234';

            await changesStable(fixture);

            expect(address.controls.zipCode.valid).toBeFalsy();

            component.address.zip = '123456789';

            await changesStable(fixture);

            expect(address.controls.zipCode.valid).toBeFalsy();

            component.address.zip = '';

            await changesStable(fixture);

            expect(address.controls.zipCode.valid).toBeFalsy();
        });

        it('should accept valid plus4', async () => {
            component.international = false;

            await changesStable(fixture);

            component.address.plus4 = '1234';

            await changesStable(fixture);

            expect(address.controls.plus4.valid).toBeTruthy();
        });

        it('should reject invalid plus4', async () => {
            component.international = false;

            await changesStable(fixture);

            component.address.plus4 = '!@#$%^&*';

            await changesStable(fixture);

            expect(address.controls.plus4.valid).toBeFalsy();

            component.address.plus4 = '123';

            await changesStable(fixture);

            expect(address.controls.plus4.valid).toBeFalsy();

            component.address.plus4 = '12345';

            await changesStable(fixture);

            expect(address.controls.plus4.valid).toBeFalsy();
        });

        it('should not have plus4 when international', async () => {
            component.international = true;

            await changesStable(fixture);

            expect(address.controls.plus4).toBeUndefined();
        });

        it('should change state to TX when going from international country to USA', async () => {
            component.international = true;
            component.address.state = '';

            (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(false);
            (countryConversionService.countryCodeToName as jasmine.Spy).and.returnValue('ctrycode');

            component.countryChanged();

            expect(component.address.state).toEqual('TX');
            expect(component.address.international).toEqual(false);
        });

        it('should change state to blank when going from USA to international country', async () => {
            component.international = false;
            component.address.state = 'TX';

            (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(true);
            (countryConversionService.countryCodeToName as jasmine.Spy).and.returnValue('ctrycode');

            component.countryChanged();

            expect(component.address.state).toEqual('');
            expect(component.address.international).toEqual(true);
        });

        it('should set state when billing type changes and is not international', async () => {
            component.address.state = null;
            component.legacy = false;
            (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(false);

            component.ngOnChanges({
                billingType: new SimpleChange(null, 'new billing type', false)
            });
            fixture.detectChanges();

            expect(component.address.state).toBe('TX');
        });

        it('should not set state when billing type changes and is international', async () => {
            component.address.state = null;
            component.legacy = false;
            (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(true);

            component.ngOnChanges({
                billingType: new SimpleChange(null, 'new billing type', false)
            });
            fixture.detectChanges();

            expect(component.address.state).toBe(null);
        });

        it('should not set state when billing type changes and already has value', async () => {
            component.address.state = 'UT';
            component.legacy = false;
            (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(false);

            component.ngOnChanges({
                billingType: new SimpleChange(null, 'new billing type', false)
            });
            fixture.detectChanges();

            expect(component.address.state).toBe('UT');
        });
    });

    describe('legacy validation', () => {
        it('should accept valid address1', async () => {

            component.address.address1 = `123 Test Ln#.:'-,`;

            await changesStable(fixture);

            expect(address.controls.addressLine1.valid).toBeTruthy();
        });

        it('should reject invalid address1', async () => {

            component.address.address1 = '';

            await changesStable(fixture);

            expect(address.controls.addressLine1.valid).toBeFalsy();

            component.address.address1 = '!@#$%^&*';

            await changesStable(fixture);

            expect(address.controls.addressLine1.valid).toBeFalsy();
        });

        it('should accept valid address2', async () => {

            component.address.address2 = `123 Test Ln#.:'-,`;

            await changesStable(fixture);

            expect(address.controls.addressLine2.valid).toBeTruthy();
        });

        it('should reject invalid address2', async () => {
            component.address.address2 = '!@#$%^&*';

            await changesStable(fixture);

            expect(address.controls.addressLine2.valid).toBeFalsy();
        });

        it('should accept valid city', async () => {
            component.address.city = '123 abc ABC .';

            await changesStable(fixture);

            expect(address.controls.city.valid).toBeTruthy();
        });

        it('should reject invalid city', async () => {
            component.address.city = '*^&$%#@';

            await changesStable(fixture);

            expect(address.controls.city.valid).toBeFalsy();

            component.address.city = '';

            await changesStable(fixture);

            expect(address.controls.city.valid).toBeFalsy();
        });

        it('should accept valid zip', async () => {
            component.address.zip = '12345';

            await changesStable(fixture);

            expect(address.controls.zipCode.valid).toBeTruthy();
        });

        it('should reject invalid zip', async () => {
            component.address.zip = '!@#$%^&*';

            await changesStable(fixture);

            expect(address.controls.zipCode.valid).toBeFalsy();

            component.address.zip = '1234';

            await changesStable(fixture);

            expect(address.controls.zipCode.valid).toBeFalsy();

            component.address.zip = '123456';

            await changesStable(fixture);

            expect(address.controls.zipCode.valid).toBeFalsy();

            component.address.zip = '';

            await changesStable(fixture);

            expect(address.controls.zipCode.valid).toBeFalsy();
        });

        it('should accept valid plus4', async () => {
            component.address.plus4 = '1234';

            await changesStable(fixture);

            expect(address.controls.plus4.valid).toBeTruthy();
        });

        it('should reject invalid plus4', async () => {

            component.address.plus4 = '!@#$%^&*';

            await changesStable(fixture);

            expect(address.controls.plus4.valid).toBeFalsy();

            component.address.plus4 = '123';

            await changesStable(fixture);

            expect(address.controls.plus4.valid).toBeFalsy();

            component.address.plus4 = '12345';

            await changesStable(fixture);

            expect(address.controls.plus4.valid).toBeFalsy();
        });
    });

    it('should update international flag', async () => {
        component.mailingAddress = {} as AddressInfo;

        await changesStable(fixture);

        component.checkInternationalBox(false);

        expect(component.international).toBeFalsy();

        component.checkInternationalBox(true);

        expect(component.international).toBeTruthy();
    });

    it('should update sameAddress flag', async () => {
        component.mailingAddress = {} as AddressInfo;

        await changesStable(fixture);

        component.checkSameAddress(false);

        expect(component.checkStatus).toBeFalsy();

        component.checkSameAddress(true);

        expect(component.checkStatus).toBeTruthy();
    });

    it('should set state onInit when state is null', async () => {
        component.address.state = null;
        component.legacy = true;

        component.ngOnInit();
        await changesStable(fixture);

        expect(component.address.state).toBe('TX');
    });

    it('mailingAddress ngOnChanges should set checkStatus to true', () => {
        component.address = {
            address1: '',
            address2: '',
            address3: null,
            address4: null,
            country: 'USA',
            city: '',
            international: false
        };
        component.legacy = false;

        (billingInfoUtilitiesService.isInternationalAddress as jasmine.Spy).and.returnValue(false);

        component.ngOnChanges({
            mailingAddress: new SimpleChange(null, {
                address1: '',
                address2: '',
                address3: null,
                address4: null,
                country: 'USA',
                city: '',
                international: false
            }, false)
        });

        fixture.detectChanges();

        expect(component.checkStatus).toBeTrue();
    });
});
