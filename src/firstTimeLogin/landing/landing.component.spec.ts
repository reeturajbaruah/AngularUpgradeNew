import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { FirstTimeLoginLandingComponent } from './landing.component';
import { FirstTimeLoginFrameComponent } from '../frame/frame.component';
import { FormsModule, NgForm } from '@angular/forms';
import { FirstTimeLoginService } from 'firstTimeLogin/services/firstTimeLogin.service';
import { WebStorageConst } from 'constants/webstorage.constants';
import { WindowRef } from 'common/providers';
import { AccountIdentificationOption, LoginResetOption, Channel } from '2FA/interfaces';
import { AccountSearchResponse } from 'firstTimeLogin/interfaces';
import { ENVIRON_CONFIG } from 'common/upgrades';

describe('FirstTimeLoginLandingComponent', () => {

    let fixture: ComponentFixture<FirstTimeLoginLandingComponent>;
    let component: FirstTimeLoginLandingComponent;
    let state: StateService;
    let parent: FirstTimeLoginFrameComponent;
    let firstTimeLoginService: FirstTimeLoginService;
    let windowRef: Window;
    const webStorageConst = { selectedLanguage: 'SELECTED_LANGUAGE' } as WebStorageConst;
    let uiRouterGlobals: UIRouterGlobals;
    let form: NgForm;
    let environmentConfig: any;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);        
        firstTimeLoginService = jasmine.createSpyObj('firstTimeLoginService', ['sendCode', 'getSearchData', 'accountSearch']);
        windowRef = { localStorage : { [webStorageConst.selectedLanguage]: 'English' } } as Window;
        parent = {} as FirstTimeLoginFrameComponent;
        uiRouterGlobals = {
            params: {}
        } as UIRouterGlobals;

        form = {} as NgForm;

        environmentConfig = {
            twoFactorAuth: {
                firstTimeloginRequireMoreInfo: false
            }
        };

        await TestBed
            .configureTestingModule({
                declarations: [
                    FirstTimeLoginLandingComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    FormsModule
                ],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: FirstTimeLoginFrameComponent, useFactory: () => parent },
                    { provide: FirstTimeLoginService, useFactory: () => firstTimeLoginService },
                    { provide: WebStorageConst, useFactory: () => webStorageConst },
                    { provide: WindowRef, useFactory: () => windowRef },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FirstTimeLoginLandingComponent);
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

        it('can submit email', async () => {

            const resp = { hasError: false, multipleAccountsFound: false, acctId, loginId, dbSessionId };
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
                channel: Channel.Email
            });

        });

        it('can submit phone', async () => {
            const resp = { hasError: false, multipleAccountsFound: false, acctId, loginId, dbSessionId };
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
                dbSessionId
            });
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

        [
            [LoginResetOption.Email, false, null, {  emailAddress: 'to', phoneNumber: null, tagNumber: null, eztagAgency: null, accountNumber: null }],
            [LoginResetOption.Phone, false, null, {  emailAddress: null, phoneNumber: 'to', tagNumber: null, eztagAgency: null, accountNumber: null }],
            [LoginResetOption.Email, true, AccountIdentificationOption.AccountNumber, {  emailAddress: 'to', phoneNumber: null, tagNumber: null, eztagAgency: null, accountNumber: '1234' }],
            [LoginResetOption.Phone, true, AccountIdentificationOption.AccountNumber, {  emailAddress: null, phoneNumber: 'to', tagNumber: null, eztagAgency: null, accountNumber: '1234' }],
            [LoginResetOption.Email, true, AccountIdentificationOption.EzTagNumber, {  emailAddress: 'to', phoneNumber: null, tagNumber: 'eztag', eztagAgency: 'agency', accountNumber: null }],
            [LoginResetOption.Phone, true, AccountIdentificationOption.EzTagNumber, {  emailAddress: null, phoneNumber: 'to', tagNumber: 'eztag', eztagAgency: 'agency', accountNumber: null }]
        ].forEach(([resetOption, moreInfo, idOption, arg]: [LoginResetOption, boolean, AccountIdentificationOption, any])=> {

            it(`can search account with ${resetOption}, ${moreInfo ? 'moreInfo' : 'no more info'}, and ${idOption}`, async () => {

                component.data.loginResetOption = resetOption;
                component.data.moreInfoNeeded = moreInfo;
                component.data.accountIdentificationOption = idOption;

                component.data.to = 'to';
                component.data.ezTagNumber = 'eztag';
                component.data.selectedAgency = 'agency';
                component.data.accountNumber = '1234';
                
                (firstTimeLoginService.accountSearch as jasmine.Spy).and.resolveTo({});

                await component['searchAccount']();

                expect(firstTimeLoginService.accountSearch).toHaveBeenCalledOnceWith(arg);

            });

        });

    });

    describe('sendEmailCode', () => {

        it('can send for code', async () => {

            (firstTimeLoginService.sendCode as jasmine.Spy).and.resolveTo({});

            parent.source = 'source';

            window.localStorage[webStorageConst.selectedLanguage] = 'English';

            component.data.to = 'to';

            await component['sendEmailCode']({ acctId: 1234 } as AccountSearchResponse);

            expect(firstTimeLoginService.sendCode).toHaveBeenCalledWith({
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
