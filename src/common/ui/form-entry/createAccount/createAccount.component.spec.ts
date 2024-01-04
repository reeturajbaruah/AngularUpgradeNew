import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, Injectable, InjectionToken, Provider } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TestingModule, createFormWrap, changesStable } from 'testing';
import { FormsModule, NgForm } from '@angular/forms';
import { CreateAccountComponent } from './createAccount.component';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'pipes/module';
import { By } from '@angular/platform-browser';
import { CreateLoginAccountInfo, CreateLoginInfo } from '../../../models';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { PasswordValidationInfo } from 'common/interfaces';
import { SyncRiteToggles } from 'shared/interfaces/toggles/sync-rite-toggles.interface';
describe('CreateAccountComponent', () => {

    let fixture: ComponentFixture<CreateAccountComponent>;
    let component: CreateAccountComponent;
    let form: NgForm;
    let environmentConfig;
    beforeEach(async () => {
        environmentConfig = {
            syncRiteToggles: {
                MasterToggle: true,
                SyncRitePhoneExt: true,
                SyncRitePhoneOptIn: true
            } as SyncRiteToggles
        };

        await TestBed
            .configureTestingModule({
                declarations: [ CreateAccountComponent ],
                imports: [PipesModule, FormsModule, TestingModule, MatSelectModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    NgForm,
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                ]
            })
            .compileComponents();

        const construct = await createFormWrap(CreateAccountComponent, (c) => {
            c.accLoginInfo = {} as CreateLoginAccountInfo;
            c.sercurityInfo = {} as CreateLoginInfo;
            c.passwordValidationCMS = {} as PasswordValidationInfo;
        });

        fixture = construct.fixture;
        component = construct.component;
        form = construct.form;
    });

    describe('canary', () => {
        it('should pass', async () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit method', () => {
        it('should set smsAlertsOptIn to true when SyncRitePhoneOptIn is true', () => {
            environmentConfig.syncRiteToggles.SyncRitePhoneOptIn = true;

            component.ngOnInit();

            expect(component.accLoginInfo.smsAlertsOptIn).toBe(true);
        });

        it('should not change smsAlertsOptIn when SyncRitePhoneOptIn is false', () => {
            component.accLoginInfo.smsAlertsOptIn = undefined;
            environmentConfig.syncRiteToggles.SyncRitePhoneOptIn = false;

            component.ngOnInit();

            expect(component.accLoginInfo.smsAlertsOptIn).toBeUndefined();
        });
    });

    describe('view component', () => {
        it('should remove DL element form dom', async () => {
            environmentConfig.removeDL = true;
            fixture.detectChanges();
            const element = fixture.debugElement.query(By.css('#dl-info'));
            expect(element).toEqual(null);
        });

        it('should append DL element to dom', async () => {
            const element = fixture.debugElement.query(By.css('#dl-info'));
            expect(element).toBeDefined();
        });
    });

    describe('parent form', () => {
        it('shows when form is submitted', async () => {
            expect(component.submitted).toBeFalsy();
            form.onSubmit(null);
            await changesStable(fixture);
            expect(component.submitted).toBeTruthy();
        });
    });

    describe('static question', () => {
        it('returns empty string when no question or account login info is available', () => {

            component.securityQuestions = null;
            component.accLoginInfo = null;

            expect(component.staticQuestion).toBe('');

            component.securityQuestions = [];
            component.accLoginInfo = null;

            expect(component.staticQuestion).toBe('');

            component.securityQuestions = null;
            component.accLoginInfo = {} as CreateLoginAccountInfo;

            expect(component.staticQuestion).toBe('');
        });

        it('returns account logins full question by id', () => {
            const questionStr ='The Ultimate Question of Life, the Universe, and Everything.';
            component.securityQuestions = [
                {
                    securityQuestion: 'Lorem Ipsum.',
                    securityQuestionID: 1
                },
                {
                    securityQuestion: questionStr,
                    securityQuestionID: 42
                },
                {
                    securityQuestion: 'something else',
                    securityQuestionID: 3141
                }
            ];
            component.accLoginInfo = {
                securityQuestionID : 42
            } as CreateLoginAccountInfo;

            expect(component.staticQuestion).toBe(questionStr);
        });
    });

    describe('DL Validation', () => {
        [
            { state: 'TX', id: '1234567', valid: false},
            { state: 'TX', id: '01234567', valid: true},
            { state: 'TX', id: '11234567', valid: true},
            { state: 'TX', id: '21234567', valid: true },
            { state: 'TX', id: '31234567', valid: true },
            { state: 'TX', id: '41234567', valid: true },
            { state: 'TX', id: '51234567', valid: false },
            { state: 'TX', id: '61234567', valid: false },
            { state: 'TX', id: '71234567', valid: false },
            { state: 'TX', id: '81234567', valid: false },
            { state: 'TX', id: '91234567', valid: false },
            { state: 'ZZ', id: '51234567', valid: true },
            { state: 'ZZ', id: '5123456A', valid: true },
            { state: 'ZZ', id: '0123456789ABCDEFGHIJKLMNO', valid: true },
            { state: 'ZZ', id: '0123456789ABCDEFGHIJKLMNOP', valid: false }
        ].forEach(edgeCase => {
            const { state, id, valid } = edgeCase;

            it(`${state === 'TX' ? 'TX' : 'non-TX'} DL ${id} should ${valid ? '' : 'not'} validate`, async () => {
                component.accLoginInfo.driverLicenseState = state;
                component.accLoginInfo.driverLicenseNumber = id;

                //Assert
                await changesStable(fixture);

                const check = form.controls.dlPlusStateValidationCheck;
                
                if (valid) {
                    expect(check.errors).toBeNull();
                } else {
                    expect('pattern' in check.errors).toBeTruthy();
                }
            });
        });
    });
});
