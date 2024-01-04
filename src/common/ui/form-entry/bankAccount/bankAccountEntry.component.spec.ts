import { } from 'jasmine';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { By } from '@angular/platform-browser';

import { TestBed, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule as HctraCommonModule, ENVIRON_CONFIG } from 'common/module';

import { LinkLookupService } from 'cms/services';

import { ValidationModule } from 'validation/module';
import { PipesModule } from 'pipes/module';
import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';

import { BankAccountEntryComponent } from './bankAccountEntry.component';
import { UrlPaths } from 'constants/module';

import { TestingModule, createFormWrap, changesStable } from 'testing';

import { WindowRef } from 'common/providers';

import { DialogService } from 'common/services';

describe('bank-account-entry component', () => {

    let form: NgForm;
    let fixture: ComponentFixture<any>;
    let component: BankAccountEntryComponent;
    let bankAccount: FormGroup;

    let linkLookupService;
    let windowMock;

    let dialogueService: DialogService;
    let environmentConfig: {
        useUiRoutingValidation: boolean;
    };

    beforeEach(async () => {

        linkLookupService = jasmine.createSpyObj('linkLookupService', ['articleLookupById']);
        windowMock = jasmine.createSpyObj('window', ['open']);


        dialogueService = jasmine.createSpyObj('dialogueService', ['openSliderCentered']);

        TestBed
            .configureTestingModule({
                declarations: [BankAccountEntryComponent],
                imports: [PipesModule, FormsModule, TestingModule, MatSelectModule, FlexLayoutModule, MatFormFieldModule],
                providers: [
                    { provide: WindowRef, useFactory: () => windowMock },
                    { provide: UrlPaths, useFactory: () => new UrlPaths() },
                    { provide: LinkLookupService, useFactory: () => linkLookupService },
                    { provide: DialogService, useFactory: () => dialogueService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                ],
                //this will allow for nested components to be ignored. 
                //use when you don't need to interact with the sub component in the tests
                schemas: [NO_ERRORS_SCHEMA]
            })
            .overrideModule(BrowserDynamicTestingModule, {
                set: {
                    entryComponents: [BankAccountEntryComponent]
                }
            })
            .compileComponents();
    });

    [true, false].forEach((legacy) => {

        describe(`no bank details`, async () => {

            it('should not throw exception when no bank account', async () => {
                try {
                    const construct = await createFormWrap(BankAccountEntryComponent, c => {
                        c.showName = true;
                        c.legacy = legacy;
                    });

                    fixture = construct.fixture;
                    component = construct.component;
                    form = construct.form;
                    bankAccount = form.controls.bankAccount as FormGroup;

                    await changesStable(fixture);
                } catch (e) {
                    expect(e).toBe('There should be no error thrown.');
                }
                expect(true).toBe(true);
            });
        });

        describe(`${legacy ? 'legacy' : 'refresh'}`, async () => {

            beforeEach(async () => {
                const constuct = await createFormWrap(BankAccountEntryComponent, c => {
                    c.bankDetails = {
                        accountNumber: '',
                        accountType: null,
                        name: null,
                        routingNumber: null
                    };
                    c.showName = true;
                    c.legacy = legacy;
                });

                fixture = constuct.fixture;
                component = constuct.component;
                form = constuct.form;
                bankAccount = form.controls.bankAccount as FormGroup;
            });
            it('should accept valid name on bank account', async () => {
                component.bankDetails.name = 'Abi Normal';

                await changesStable(fixture);

                expect(bankAccount.controls.eftName.valid).toBeTruthy();
            });

            it('should reject name on bank account with special characters', async () => {

                component.bankDetails.name = '@bi Normal';

                await changesStable(fixture);

                expect(bankAccount.controls.eftName.valid).toBeFalsy();
            });

            it('should reject name on bank account with only numbers', async () => {
                component.bankDetails.name = '123456';

                await changesStable(fixture);

                expect(bankAccount.controls.eftName.valid).toBeFalsy();
            });

            it('should accept valid routing number', async () => {
                component.bankDetails.routingNumber = '123456789';

                await changesStable(fixture);

                expect(bankAccount.controls.routing.valid).toBeTruthy();
            });

            it('should reject blank routing number', async () => {
                component.bankDetails.routingNumber = '';

                await changesStable(fixture);

                expect(bankAccount.controls.routing.valid).toBeFalsy();
            });

            it('should reject routing number if not 9 digits long', async () => {
                component.bankDetails.routingNumber = '12345678';

                await changesStable(fixture);

                expect(bankAccount.controls.routing.valid).toBeFalsy();

                component.bankDetails.routingNumber = '123456789';

                await changesStable(fixture);

                expect(bankAccount.controls.routing.valid).toBeTruthy();
            });

            it('should accept valid account number', async () => {

                component.bankDetails.accountNumber = '12345678901234567';

                await changesStable(fixture);

                expect(bankAccount.controls.account.valid).toBeTruthy();

                component.bankDetails.accountNumber = '1';

                await changesStable(fixture);

                expect(bankAccount.controls.account.valid).toBeTruthy();
            });

            it('should reject blank account number', async () => {

                component.bankDetails.accountNumber = '';

                await changesStable(fixture);

                expect(bankAccount.controls.account.valid).toBeFalsy();
            });

            it('should reject account number with non-numeric characters', async () => {
                component.bankDetails.accountNumber = '!@#$%^&*';

                await changesStable(fixture);

                expect(bankAccount.controls.account.valid).toBeFalsy();

                component.bankDetails.accountNumber = 'asdiojs5151';

                await changesStable(fixture);

                expect(bankAccount.controls.account.valid).toBeFalsy();
            });

            it('should reject account number longer than 17 digits', async () => {
                component.bankDetails.accountNumber = '123456789012345678';

                await changesStable(fixture);

                expect(bankAccount.controls.account.valid).toBeFalsy();
            });

            it('should be invalid if confirm account number does not match account number', async () => {
                component.bankDetails.accountNumber = '1234567';
                component.bankDetails.account2 = '123456789';

                await changesStable(fixture);

                expect(bankAccount.controls.accountNumberCompare.valid).toBeFalsy();
            });

            it('should be valid if confirm account number matches account number', async () => {
                component.bankDetails.accountNumber = '1234567';
                component.bankDetails.account2 = '1234567';

                await changesStable(fixture);

                expect(bankAccount.controls.accountNumberCompare.valid).toBeTruthy();
            });
        });
    });

    describe('openModal', () => {

        beforeEach(async () => {
            const constuct = await createFormWrap(BankAccountEntryComponent, c => {
                c.bankDetails = {
                    accountNumber: '',
                    accountType: null,
                    name: null,
                    routingNumber: null
                };
                c.showName = true;
                c.legacy = false;
            });

            fixture = constuct.fixture;
            component = constuct.component;
            form = constuct.form;
            bankAccount = form.controls.bankAccount as FormGroup;
        });

        it('should call openModal 1 time', () => {

            //Act
            component.openModal();

            //Assert
            expect(dialogueService.openSliderCentered).toHaveBeenCalledTimes(1);

        });
    });

    describe('validatingRoutingNumber', () => {

        beforeEach(async () => {
            const constuct = await createFormWrap(BankAccountEntryComponent, c => {
                c.bankDetails = {
                    accountNumber: '',
                    accountType: null,
                    name: null,
                    routingNumber: null
                };
                c.showName = true;
                c.legacy = false;
            });

            fixture = constuct.fixture;
            component = constuct.component;
            form = constuct.form;
            bankAccount = form.controls.bankAccount as FormGroup;
        });

        it('should showRoutingNumberValidationMsg is true',  async () => {
            spyOn(component, 'checkRoutingNumberValid').and.returnValue(false);

            await component.validatingRoutingNumber();

            expect(component.showRoutingNumberValidationMsg).toBeTrue();
        });

        it('should check showRoutingNumberValidationMsg is false', async () => {
            spyOn(component, 'checkRoutingNumberValid').and.returnValue(true);

            await component.validatingRoutingNumber();

            expect(component.showRoutingNumberValidationMsg).toBeFalse();
        });
    });

    describe('checkRoutingNumberValid', () => {
        beforeEach(async () => {
            const constuct = await createFormWrap(BankAccountEntryComponent, c => {
                c.bankDetails = {
                    accountNumber: '',
                    accountType: null,
                    name: null,
                    routingNumber: null
                };
                c.showName = true;
                c.legacy = false;
            });

            fixture = constuct.fixture;
            component = constuct.component;
            form = constuct.form;
            bankAccount = form.controls.bankAccount as FormGroup;
        });
        it('should check if the param is not available return false',  fakeAsync(() => {
            const output = component.checkRoutingNumberValid(null);
            tick();
            expect(output).toBeFalse();
        }));

        it('should return false, if pattern doesnt match',  fakeAsync(() => {
            const output = component.checkRoutingNumberValid(123);
            tick();
            expect(output).toBeFalse();
        }));

        it('should return false, if pattern doesnt match',  fakeAsync(() => {
            const output = component.checkRoutingNumberValid(123);
            tick();
            expect(output).toBeFalse();
        }));

        it('should return false, if first two digit doesnt fall under routing num category',  fakeAsync(() => {
            const output = component.checkRoutingNumberValid(883);
            tick();
            expect(output).toBeFalse();
        }));
    });
});
