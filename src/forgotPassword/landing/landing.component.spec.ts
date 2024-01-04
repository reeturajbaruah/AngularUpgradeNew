import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { ForgotPasswordLandingComponent } from './landing.component';
import { ForgotPasswordFrameComponent } from '../frame/frame.component';
import { WebApiService } from 'forgotPassword/services/webApi.service';
import { WebStorageConst } from 'constants/webstorage.constants';
import { WindowRef } from 'common/providers';
import { ForgotPasswordAccountSearchResponse } from 'forgotPassword/interfaces';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountIdentificationOption, LoginResetOption, Channel } from '2FA/interfaces';
import { ForgotPasswordService } from 'forgotPassword/services/forgotPassword.service';
import { ENVIRON_CONFIG } from 'common/upgrades';

describe('ForgotPasswordLandingComponent', () => {

    let fixture: ComponentFixture<ForgotPasswordLandingComponent>;
    let component: ForgotPasswordLandingComponent;
    let state: StateService;
    let parent: ForgotPasswordFrameComponent;
    let webapi: WebApiService;
    let forgotPasswordService: ForgotPasswordService;
    let windowRef: Window;
    const webStorageConst = { selectedLanguage: 'SELECTED_LANGUAGE' } as WebStorageConst;
    let uiRouterGlobals: UIRouterGlobals;
    let form: NgForm;
    let environmentConfig: any;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        webapi = jasmine.createSpyObj('webapi', ['setup', 'forgotPasswordAccountSearch']);
        forgotPasswordService = jasmine.createSpyObj('forgotPasswordService', ['sendCode']);
        windowRef = { localStorage : { [webStorageConst.selectedLanguage]: 'English' } } as Window;
        parent = {} as ForgotPasswordFrameComponent;
        uiRouterGlobals = {
            params: {}
        } as UIRouterGlobals;

        environmentConfig = {
            twoFactorAuth: {
                forgotPasswordRequireMoreInfo: false,
                forgotPasswordForceLogin: false
            }
        };
        
        form = {} as NgForm;

        await TestBed
            .configureTestingModule({
                declarations: [
                    ForgotPasswordLandingComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    FormsModule
                ],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: ForgotPasswordFrameComponent, useFactory: () => parent },
                    { provide: WebApiService, useFactory: () => webapi },
                    { provide: ForgotPasswordService, useFactory: () => forgotPasswordService },
                    { provide: WebStorageConst, useFactory: () => webStorageConst },
                    { provide: WindowRef, useFactory: () => windowRef },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ForgotPasswordLandingComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsData = {
            Title: 'parent',
            Children: [
                { ItemName: 'More Info'}, 
                { ItemName: 'Help Locating Account'}
            ]
        } as any;
        component.searchAccountForm = form;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('submit', () => {

        const nextState = {};
        const acctId = 1234;
        const loginId = 'login';
        const dbSessionId = 'dbsession';

        beforeEach(() => {

            spyOn(component, 'searchAccount');
            spyOn(component, 'sendEmailCode');

        });

        describe('moreInfoNeeded', () => {

            afterEach(() => {
                environmentConfig.twoFactorAuth.forgotPasswordRequireMoreInfo = false;
            });
    
            it('pulls from data if require more info off', async () => {
                await component.ngOnInit();
                component.data.moreInfoNeeded = true;
                expect(component.moreInfoNeeded).toBeTrue();
                component.data.moreInfoNeeded = false;
                expect(component.moreInfoNeeded).toBeFalse();
                
            });
    
            it('pulls from data if require more info on', async () => {
                environmentConfig.twoFactorAuth.forgotPasswordRequireMoreInfo = true;
                await component.ngOnInit();
                component.data.moreInfoNeeded = true;
                expect(component.moreInfoNeeded).toBeTrue();
                component.data.moreInfoNeeded = false;
                expect(component.moreInfoNeeded).toBeTrue();
                
            });
    
        });

        it('can submit email', async () => {

            const resp = { hasError: false, multipleAccountsFound: false, acctId, loginId, dbSessionId, isMissingEmail: true };
            component.data.loginResetOption = LoginResetOption.Email;
            component.data.to = 'email';

            (component.searchAccount as jasmine.Spy)
                .and.resolveTo(resp);

            (component.sendEmailCode as jasmine.Spy)
                .and.resolveTo({ verificationSent: true });

            await component.submit(nextState as any);

            expect(component.searchAccount).toHaveBeenCalled();
            expect(component.sendEmailCode).toHaveBeenCalledWith(resp as any);
            expect(state.go).toHaveBeenCalledWith(nextState, {
                phoneNumber: null,
                email: 'email',
                acctId,
                loginId,
                dbSessionId,
                channel: Channel.Email,
                isMissingEmail: true
            });

        });

        it('can submit phone', async () => {
            const resp = { hasError: false, multipleAccountsFound: false, acctId, loginId, dbSessionId, isMissingEmail: true };
            component.data.loginResetOption = LoginResetOption.Phone;
            component.data.to = 'phone';

            (component.searchAccount as jasmine.Spy)
                .and.resolveTo(resp);

            await component.submit(nextState as any);

            expect(component.searchAccount).toHaveBeenCalled();
            expect(component.sendEmailCode).not.toHaveBeenCalled();
            expect(state.go).toHaveBeenCalledWith(nextState, {
                phoneNumber: 'phone',
                acctId,
                loginId,
                dbSessionId,
                isMissingEmail: true
            }, { custom: { isExplicitlyAllowedTransition: true}});
        });

        it('handles error', async () => {
            const resp = { hasError: true };
            component.data.loginResetOption = LoginResetOption.Phone;
            
            (component.searchAccount as jasmine.Spy)
                .and.resolveTo(resp);

            await component.submit(nextState as any);

            expect(component.searchAccount).toHaveBeenCalled();
            expect(component.sendEmailCode).not.toHaveBeenCalled();
            expect(state.go).not.toHaveBeenCalled();

        });

        it('handles multiple accounts', async () => {
            const resp = { hasError: false, multipleAccountsFound: true };
            component.data.loginResetOption = LoginResetOption.Phone;
            
            (component.searchAccount as jasmine.Spy)
                .and.resolveTo(resp);

            await component.submit(nextState as any);

            expect(component.searchAccount).toHaveBeenCalled();
            expect(component.sendEmailCode).not.toHaveBeenCalled();
            expect(state.go).not.toHaveBeenCalled();

            expect(component.data.moreInfoNeeded).toBeTruthy();
        });
        
        it('handles verification not sent', async () => {

            const resp = { hasError: false, multipleAccountsFound: false, acctId, loginId, dbSessionId };
            component.data.loginResetOption = LoginResetOption.Email;
            component.data.to = 'email';

            (component.searchAccount as jasmine.Spy)
                .and.resolveTo(resp);

            (component.sendEmailCode as jasmine.Spy)
                .and.resolveTo({ verificationSent: false });

            await component.submit(nextState as any);

            expect(component.searchAccount).toHaveBeenCalled();
            expect(component.sendEmailCode).toHaveBeenCalledWith(resp as any);
            expect(state.go).not.toHaveBeenCalled();

        });

    });

    describe('searchAccount', () => {

        afterEach(()=>{
            environmentConfig.twoFactorAuth.forgotPasswordRequireMoreInfo = false;
        });

        [
            [false, LoginResetOption.Email, false, null, {  emailAddress: 'to', phoneNumber: null, tagNumber: null, eztagAgency: null, accountNumber: null }],
            [false, LoginResetOption.Phone, false, null, {  emailAddress: null, phoneNumber: 'to', tagNumber: null, eztagAgency: null, accountNumber: null }],
            [false, LoginResetOption.Email, true, AccountIdentificationOption.AccountNumber, {  emailAddress: 'to', phoneNumber: null, tagNumber: null, eztagAgency: null, accountNumber: '1234' }],
            [false, LoginResetOption.Phone, true, AccountIdentificationOption.AccountNumber, {  emailAddress: null, phoneNumber: 'to', tagNumber: null, eztagAgency: null, accountNumber: '1234' }],
            [false, LoginResetOption.Email, true, AccountIdentificationOption.EzTagNumber, {  emailAddress: 'to', phoneNumber: null, tagNumber: 'eztag', eztagAgency: 'agency', accountNumber: null }],
            [false, LoginResetOption.Phone, true, AccountIdentificationOption.EzTagNumber, {  emailAddress: null, phoneNumber: 'to', tagNumber: 'eztag', eztagAgency: 'agency', accountNumber: null }],

            [true, LoginResetOption.Email, false, AccountIdentificationOption.AccountNumber, {  emailAddress: 'to', phoneNumber: null, tagNumber: null, eztagAgency: null, accountNumber: '1234' }],
            [true, LoginResetOption.Phone, false, AccountIdentificationOption.AccountNumber, {  emailAddress: null, phoneNumber: 'to', tagNumber: null, eztagAgency: null, accountNumber: '1234' }],
            [true, LoginResetOption.Email, false, AccountIdentificationOption.EzTagNumber, {  emailAddress: 'to', phoneNumber: null, tagNumber: 'eztag', eztagAgency: 'agency', accountNumber: null }],
            [true, LoginResetOption.Phone, false, AccountIdentificationOption.EzTagNumber, {  emailAddress: null, phoneNumber: 'to', tagNumber: 'eztag', eztagAgency: 'agency', accountNumber: null }],
        
            [true, LoginResetOption.Email, true, AccountIdentificationOption.AccountNumber, {  emailAddress: 'to', phoneNumber: null, tagNumber: null, eztagAgency: null, accountNumber: '1234' }],
            [true, LoginResetOption.Phone, true, AccountIdentificationOption.AccountNumber, {  emailAddress: null, phoneNumber: 'to', tagNumber: null, eztagAgency: null, accountNumber: '1234' }],
            [true, LoginResetOption.Email, true, AccountIdentificationOption.EzTagNumber, {  emailAddress: 'to', phoneNumber: null, tagNumber: 'eztag', eztagAgency: 'agency', accountNumber: null }],
            [true, LoginResetOption.Phone, true, AccountIdentificationOption.EzTagNumber, {  emailAddress: null, phoneNumber: 'to', tagNumber: 'eztag', eztagAgency: 'agency', accountNumber: null }]
        ].forEach(([additionalSec, resetOption, moreInfo, idOption, arg]: [boolean, LoginResetOption, boolean, AccountIdentificationOption, any])=> {

            it(`can search account with ${resetOption}, ${moreInfo ? 'moreInfo' : 'no more info'}, and ${idOption}`, async () => {

                environmentConfig.twoFactorAuth.forgotPasswordRequireMoreInfo = additionalSec;

                component.data.loginResetOption = resetOption;
                component.data.moreInfoNeeded = moreInfo;
                component.data.accountIdentificationOption = idOption;

                component.data.to = 'to';
                component.data.ezTagNumber = 'eztag';
                component.data.selectedAgency = 'agency';
                component.data.accountNumber = '1234';
                
                (webapi.forgotPasswordAccountSearch as jasmine.Spy).and.resolveTo({});

                await component['searchAccount']();

                expect(webapi.forgotPasswordAccountSearch).toHaveBeenCalledOnceWith(arg);

            });

        });

    });

    describe('sendEmailCode', () => {

        it('can send for code', async () => {

            (forgotPasswordService.sendCode as jasmine.Spy).and.resolveTo({});

            parent.source = 'source';

            window.localStorage[webStorageConst.selectedLanguage] = 'English';

            component.data.to = 'to';

            await component['sendEmailCode']({ acctId: 1234 } as ForgotPasswordAccountSearchResponse);

            expect(forgotPasswordService.sendCode).toHaveBeenCalledWith({
                to: 'to',
                accountId: 1234,
                language: 'English',
                source: 'source',
                channel: Channel.Email
            });

        });

    });

    describe('clearValidations', () => {

        it('can clear submitted state', () => {

            (form as any).submitted = true;

            component.clearValidations();

            expect(form.submitted).toBeFalsy();

        });

    });

});
