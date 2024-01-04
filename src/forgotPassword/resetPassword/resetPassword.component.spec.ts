import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { ForgotPasswordCms, ForgotPasswordResetPasswordComponent } from './resetPassword.component';
import { ForgotPasswordFrameComponent } from '../frame/frame.component';
import { CmsReplacementService } from '../../cms/services';
import { WebApiService } from '../services/webApi.service';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticateRedirectService } from 'authentication/authenticateRedirectService/authenticateRedirect.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { StateNames as CoreStateNames } from 'constants/stateNames.constants';
import { UserRoles } from 'constants/userRoles.constants';
import { PipesModule } from 'pipes/module';
import { SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { FormsModule } from '@angular/forms';
import { SiteCoreItem } from '../../cms/cms.module';
import { ResetPasswordResponse } from '../interfaces';
import { IsInvoicedService, ToasterService } from 'common/services';
import { SessionService } from 'common/services/session/session.service';

describe('ForgotPasswordResetPasswordComponent', () => {

    let fixture: ComponentFixture<ForgotPasswordResetPasswordComponent>;
    let component: ForgotPasswordResetPasswordComponent;
    let state: StateService;
    let parent: ForgotPasswordFrameComponent;
    let cmsReplacement: jasmine.SpyObj<CmsReplacementService>;
    let webApi: jasmine.SpyObj<WebApiService>;
    let authChannel: jasmine.SpyObj<AuthChannelService>;
    let coreStateNames: CoreStateNames;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let suspendedAccountService: jasmine.SpyObj<SuspendedAccountService>;
    let userRoles: UserRoles;
    let authenticateRedirectService: AuthenticateRedirectService;
    let uiRouterGlobals: UIRouterGlobals;
    let session: jasmine.SpyObj<SessionService>;
    let isInvoicedService: jasmine.SpyObj<IsInvoicedService>;

    let toasterService: ToasterService;
    let environmentConfig: any;

    beforeEach(async () => {

        state = jasmine.createSpyObj('state', ['go']);
        parent = {} as ForgotPasswordFrameComponent;
        webApi = jasmine.createSpyObj('webApi', ['resetPassword']);
        cmsReplacement = jasmine.createSpyObj('cmsReplacementService', ['transformTemplate']);
        authChannel = jasmine.createSpyObj('authChannel', ['logIn']);
        suspendedAccountService = jasmine.createSpyObj('suspendedAccountService', ['getFirstSuspendedAccountState']);
        userRoles = new UserRoles();
        authService = jasmine.createSpyObj('authService', ['login', 'isAuthorized']);
        state = jasmine.createSpyObj('state', ['go']);
        authenticateRedirectService = jasmine.createSpyObj('authenticateRedirectService',
            ['redirectLoginAndDeleteSavedState'], { hasSavedState: false });
        session = jasmine.createSpyObj('session', ['setAcctActivity', 'create']);
        isInvoicedService = jasmine.createSpyObj('isInvoicedService', ['setAccountInvoiced']);
        isInvoicedService.setAccountInvoiced.and.returnValue(null);
        session.create.and.returnValue(null);
        toasterService = jasmine.createSpyObj('toasterService', ['show']);
        environmentConfig = {
            twoFactorAuth: {
                forgotPasswordRequireMoreInfo: false
            }
        };

        coreStateNames = new CoreStateNames();
        uiRouterGlobals = {
            params: {
                email: null,
                acctId: null,
                loginId: null,
                dbSessionId: null
            }
        } as any;

        await TestBed
            .configureTestingModule({
                declarations: [
                    ForgotPasswordResetPasswordComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    PipesModule,
                    FormsModule
                ],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: ForgotPasswordFrameComponent, useFactory: () => parent },
                    { provide: WebApiService, useFactory: () => webApi },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacement },
                    { provide: AuthChannelService, useFactory: () => authChannel },
                    { provide: StateService, useFactory: () => state },
                    { provide: CoreStateNames, useFactory: () => coreStateNames },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: AuthenticateRedirectService, useFactory: () => authenticateRedirectService },
                    { provide: SuspendedAccountService, useFactory: () => suspendedAccountService },
                    { provide: UserRoles, useFactory: () => userRoles },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: SessionService, useFactory: () => session },
                    { provide: IsInvoicedService, useFactory: () => isInvoicedService },
                    { provide: ToasterService, useFactory: ()=> toasterService },
                    { provide: ENVIRON_CONFIG, useFactory: ()=> environmentConfig }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ForgotPasswordResetPasswordComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsData = {
            LongDescription: '',
            resetSuccessful: ''
        } as ForgotPasswordCms;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should update cms text and set variables', async () => {
            cmsReplacement.transformTemplate.and.returnValue('CMS message replaced');

            component.ngOnInit();

            expect(component.isMatch).toBe(true);
            expect(component.cmsData.LongDescription).toBe('CMS message replaced');
        });
    });

    describe('validatePassword', () => {
        [
            { newPassword: 'text', confirmPassword: 'text', result: true },
            { newPassword: 'text', confirmPassword: 'nottext', result: false },
        ]
            .forEach(testCase => {
                it(`should set isMatch to ${testCase.result} when given passwords`, async () => {
                    //Assemble
                    component.newPassword = testCase.newPassword;
                    component.confirmPassword = testCase.confirmPassword;
                    const form = {
                        form: {
                            controls: {
                                newPasswordName: {
                                    pristine: false
                                },
                                confirmPasswordName: {
                                    pristine: false
                                }
                            }
                        }
                    } as any;

                    //Act
                    component.validatePassword(form);

                    //Assert
                    expect(component.isMatch).toBe(testCase.result);
                });
            });
    });

    describe('resetPasswordSubmit - no additional security', () => {
        const nextState = {} as StateDeclaration;

        it('should not call resetPassword, authChannel.logIn, and authService.isAuthorized if isMatch is false', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(false);
            webApi.resetPassword.and.resolveTo({ newAccountStep: { accountComplete: true }} as ResetPasswordResponse);
            component.isMatch = false;

            //Act
            await component.resetPasswordSubmit(nextState);

            //Assert
            expect(authChannel.logIn).not.toHaveBeenCalled();
            expect(webApi.resetPassword).not.toHaveBeenCalled();
            expect(authService.isAuthorized).not.toHaveBeenCalled();
        });

        it('should call resetPassword, authChannel.logIn, and authService.isAuthorized', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(false);
            webApi.resetPassword.and.resolveTo({ newAccountStep: { accountComplete: true } } as ResetPasswordResponse);
            component.isMatch = true;

            //Act
            await component.resetPasswordSubmit(nextState);

            //Assert
            expect(authChannel.logIn).toHaveBeenCalledTimes(1);
            expect(webApi.resetPassword).toHaveBeenCalledTimes(1);
            expect(authService.isAuthorized).toHaveBeenCalledTimes(1);
        });
        
        it('should call suspendedAccountService.getFirstSuspendedAccountState() and state.go()', async () => {
            //Assemble
            webApi.resetPassword.and.resolveTo({ newAccountStep: { accountComplete: true } } as ResetPasswordResponse);
            component.isMatch = true;
            authService.isAuthorized.and.returnValue(true);
            suspendedAccountService.getFirstSuspendedAccountState.and.returnValue(Promise.resolve(''));

            //Act
            await component.resetPasswordSubmit(nextState);

            //Assert
            expect(suspendedAccountService.getFirstSuspendedAccountState).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledTimes(1);
        });

        it('should not call suspendedAccountService.getFirstSuspendedAccountState() and state.go()', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(false);
            webApi.resetPassword.and.resolveTo({ newAccountStep: { accountComplete: true } } as ResetPasswordResponse);
            component.isMatch = true;

            //Act
            await component.resetPasswordSubmit(nextState);

            //Assert
            expect(suspendedAccountService.getFirstSuspendedAccountState).toHaveBeenCalledTimes(0);
        });

        it('should call this.authenticateRedirectService.redirectLoginAndDeleteSavedState()', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(false);
            webApi.resetPassword.and.resolveTo({ newAccountStep: { accountComplete: true } } as ResetPasswordResponse);
            component.isMatch = true;

            (Object.getOwnPropertyDescriptor(authenticateRedirectService, 'hasSavedState').get as jasmine.Spy).and.returnValue(true);

            //Act
            await component.resetPasswordSubmit(nextState);

            //Assert
            expect(authenticateRedirectService.redirectLoginAndDeleteSavedState).toHaveBeenCalledTimes(1);
        });

        it('should call state.go with accountDashboardStates.Frame', async () => {
            //Assemble
            authenticateRedirectService['redirectedStateValue'] = null;
            webApi.resetPassword.and.resolveTo({ newAccountStep: { accountComplete: true } } as ResetPasswordResponse);
            component.isMatch = true;

            //Act
            await component.resetPasswordSubmit(nextState);

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(accountDashboardStates.Frame);
        });

        it('should call state.go with coreStateNames.newAccount', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(false);
            webApi.resetPassword.and.resolveTo({ newAccountStep: { accountComplete: false } } as ResetPasswordResponse);
            component.isMatch = true;

            //Act
            await component.resetPasswordSubmit(nextState);

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(coreStateNames.newAccount);
        });   
    });        

    describe('resetPasswordSubmit - with additional security', () => {
        const nextState = {} as StateDeclaration;

        beforeEach(()=> {
            environmentConfig.twoFactorAuth.forgotPasswordRequireMoreInfo = true;
            environmentConfig.twoFactorAuth.forgotPasswordForceLogin = true;
        });

        afterEach(()=> {
            environmentConfig.twoFactorAuth.forgotPasswordRequireMoreInfo = false;
            environmentConfig.twoFactorAuth.forgotPasswordForceLogin = false;
        });

        it('should not call login related calls', async () => {
            //Assemble
            webApi.resetPassword.and.resolveTo({ newAccountStep: { accountComplete: true }} as ResetPasswordResponse);
            component.isMatch = true;

            //Act
            await component.resetPasswordSubmit(nextState);

            //Assert
            expect(webApi.resetPassword).toHaveBeenCalled();
            expect(toasterService.show).toHaveBeenCalled();
            expect(state.go).toHaveBeenCalledWith(nextState);

            expect(authChannel.logIn).not.toHaveBeenCalled();            
            expect(authService.isAuthorized).not.toHaveBeenCalled();
            expect(suspendedAccountService.getFirstSuspendedAccountState).not.toHaveBeenCalled();            
            expect(authenticateRedirectService.redirectLoginAndDeleteSavedState).not.toHaveBeenCalled();
        });
         
    });

});
