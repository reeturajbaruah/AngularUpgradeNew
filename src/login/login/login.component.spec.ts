import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StateRegistry, StateService } from '@uirouter/angular';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticateRedirectService } from 'authentication/authenticateRedirectService/authenticateRedirect.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { AccountService, CurrentUserService, DialogService, OperatingSystemSnifferService, ResponseErrorService, StringUtilsService, SessionService } from 'common/services';
import { GenericCmsModalComponent, WizardComponent, WizardStateResolverFactory } from 'common/ui';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { StateNames as CoreStateNames } from 'constants/stateNames.constants';
import { UserRoles } from 'constants/userRoles.constants';
import { } from 'jasmine';
import { stateNames as loginStates } from 'login/constants';
import { stateNames as FirstTimeLoginStates } from 'firstTimeLogin/constants';
import { PipesModule } from 'pipes/module';
import { SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { LoginComponent } from './login.component';
import { FeaturesStates } from 'shared/states';
import { UrlPaths } from 'constants/routes.constants';
import { ForgotUsernameStateNames } from 'forgotUsername/forgotUsername.constants';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';
import { StorefrontModalService } from '../../storefront/services/modal.service';


describe('component: login-frame', () => {

    let fixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    let form: NgForm;
    let responseErrorService: jasmine.SpyObj<any>;
    let authChannel: jasmine.SpyObj<AuthChannelService>;
    let operatingSystemSnifferService: jasmine.SpyObj<OperatingSystemSnifferService>;
    let dialogService: jasmine.SpyObj<any>;
    let state: StateService;
    let coreStateNames: CoreStateNames;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let addMissingInformationService: jasmine.SpyObj<AddMissingInformationService>;
    let suspendedAccountService: jasmine.SpyObj<SuspendedAccountService>;
    let userRoles: UserRoles;
    let authenticateRedirectService: AuthenticateRedirectService;
    let stringUtils: jasmine.SpyObj<StringUtilsService>;
    let storefrontUtilityService;
    let wizard: WizardComponent;
    let stateRegistry: StateRegistry;
    let storefrontModalService: any;
    let legacyStorefrontModalService: any;
    let environmentConfig: {
        twoFactorAuth:
        { enableForgotPassword: boolean; enableFirstTimeLogin: boolean; forgotUsername: boolean };
        createAccountRefresh: boolean;
        storefrontConfigs: any;
    };
    let cmsItemId: UrlPaths;
    let currentUserServiceSpy: jasmine.SpyObj<CurrentUserService>;
    let accountServiceSpy: jasmine.SpyObj<AccountService>;
    let session: SessionService;

    beforeEach(async () => {
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);
        (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
        authChannel = jasmine.createSpyObj('authChannel', ['logIn']);
        operatingSystemSnifferService = jasmine.createSpyObj('operatingSystemSnifferService', ['getDeviceFull', 'getOsFull']);
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);
        addMissingInformationService = jasmine.createSpyObj('addMissingInformation', [
            'isMissingInfo',
            'setMissingInformation']);
        suspendedAccountService = jasmine.createSpyObj('suspendedAccountService', ['getFirstSuspendedAccountState']);
        userRoles = new UserRoles();
        authService = jasmine.createSpyObj('authService', ['login', 'isAuthorized', 'logout']);
        state = jasmine.createSpyObj('state', ['go']);
        authenticateRedirectService = jasmine.createSpyObj('authenticateRedirectService',
            ['redirectLoginAndDeleteSavedState'], { hasSavedState: false });
        stringUtils = jasmine.createSpyObj('StringUtilsService', ['getUrlParameter']);
        coreStateNames = new CoreStateNames();
        storefrontUtilityService = jasmine.createSpyObj('storefrontUtilityService', ['isRunningAsKiosk', 'webStoreData']);
        stateRegistry = jasmine.createSpyObj('stateRegistry', ['get']);
        wizard = jasmine.createSpyObj('wizardUi', ['gotoNextState']);
        storefrontModalService = jasmine.createSpyObj('storefrontModalService', ['showGotoCsr']);
        legacyStorefrontModalService = jasmine.createSpyObj('SF_MODAL_SEVICE', ['showGotoCsr']);

        currentUserServiceSpy = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
        accountServiceSpy = jasmine.createSpyObj('accntService', ['getContactInfo']);

        session = jasmine.createSpyObj('session', ['userRole']);

        const wizardStateResolveFactory = jasmine.createSpyObj('wizardStateResolverFactory', ['getService']);
        wizardStateResolveFactory.getService.and.returnValue({});

        environmentConfig = {
            twoFactorAuth: {
                enableForgotPassword: false,
                enableFirstTimeLogin: false,
                forgotUsername: false
            },
            createAccountRefresh: false,
            storefrontConfigs: { version: '2.0.0' }
        };

        cmsItemId = new UrlPaths();

        await TestBed
            .overrideComponent(LoginComponent, {
                set: {
                    providers: [
                        { provide: WizardComponent, useFactory: () => wizard }
                    ]
                }
            });

        await TestBed
            .configureTestingModule({
                declarations: [
                    LoginComponent,
                    WizardComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    PipesModule,
                    FormsModule
                ],
                providers: [
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: OperatingSystemSnifferService, useFactory: () => operatingSystemSnifferService },
                    { provide: StringUtilsService, useFactory: () => stringUtils },
                    { provide: OperatingSystemSnifferService, useFactory: () => operatingSystemSnifferService },
                    { provide: StringUtilsService, useFactory: () => stringUtils },
                    { provide: StorefrontModalService, useFactory: () => storefrontModalService },
                    { provide: AuthChannelService, useFactory: () => authChannel },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: StateService, useFactory: () => state },
                    { provide: CoreStateNames, useFactory: () => coreStateNames },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: AuthenticateRedirectService, useFactory: () => authenticateRedirectService },
                    { provide: AddMissingInformationService, useFactory: () => addMissingInformationService },
                    { provide: SuspendedAccountService, useFactory: () => suspendedAccountService },
                    { provide: UserRoles, useFactory: () => userRoles },
                    { provide: StateRegistry, useFactory: () => stateRegistry },
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolveFactory },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    { provide: UrlPaths, useFactory: () => cmsItemId },
                    { provide: CurrentUserService, useFactory: () => currentUserServiceSpy },
                    { provide: AccountService, useFactory: () => accountServiceSpy },
                    { provide: SessionService, useFactory: () => session },

                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.debugElement.componentInstance;
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;

    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        [
            'MAPP_Login_Android',
            'MAPP_Login_IOS',
            'MAPP_Login_Browser',
            'MAPP_Login_Browser',
            'MAPP_Login_Browser',
            'MAPP_Login_Other',
            'MAPP_Login_Other',
            'MAPP_Login_Other'
        ].forEach(expectedValueOfPopupString => {
            it('should set cmsContent.Popup properties', () => {
                //Assemble
                component.cmsContent = {
                    Title: 'fake title',
                    LoginSectionTitle: 'fake LoginSectionTitle',
                    Popups: {
                    } as any
                };
                stringUtils.getUrlParameter.and.returnValue(expectedValueOfPopupString);

                //Act
                component.ngOnInit();

                //Assert
                expect(component.cmsContent.Popups[expectedValueOfPopupString]).toBe(expectedValueOfPopupString);
            });
        });
    });

    describe('getLogin', () => {
        beforeEach(() => {
            spyOn(component, 'handleLoginInformation').and.returnValue('' as any);
        });

        it('should call authService.login() with correct parameters', async () => {
            //Act
            await component.getLogin({ valid: true } as any, wizard);

            //Assert
            expect(authService.login).toHaveBeenCalledTimes(1);
            expect(authService.login).toHaveBeenCalledWith(component.login);

        });
        it('should not call component.handleLoginInformation() with correct parameters', async () => {
            //Assemble
            responseErrorService.isErrorFree.and.returnValue(false);

            //Assemble
            authService.login.and.returnValue({
                passwordNeedsReset: true,
                emailIsMissing: false,
                securityQuestionIsMissing: false
            } as any);

            //Act
            await component.getLogin({ valid: true } as any, wizard);

            //Assert
            expect(component.handleLoginInformation).toHaveBeenCalledTimes(0);

        });

        it('should throw an error when in kiosk mode', async () => {
            //Assemble
            responseErrorService.isErrorFree.and.returnValue(false);
            storefrontUtilityService.isRunningAsKiosk = true;

            //Assemble
            authService.login.and.throwError('error');

            //Act
            try { await component.getLogin({ valid: true } as any, wizard); }
            catch (error) { return expect(error).toEqual(Error('error')); }

            throw new Error('This unit test has failed. The function should have thrown an exception, but did not.');
        });

        it('should not throw an error when not in kiosk mode', async () => {
            //Assemble
            responseErrorService.isErrorFree.and.returnValue(false);
            storefrontUtilityService.isRunningAsKiosk = false;

            let errorThrown;

            //Assemble
            authService.login.and.throwError('error');

            //Act
            try { await component.getLogin({ valid: true } as any, wizard); }
            catch (error) { errorThrown = error; }

            expect(errorThrown).toBeUndefined();
        });

        [{
            passwordNeedsReset: true,
            emailIsMissing: true,
            securityQuestionIsMissing: true
        },
        {
            passwordNeedsReset: true,
            emailIsMissing: false,
            securityQuestionIsMissing: true
        },
        {
            passwordNeedsReset: true,
            emailIsMissing: false,
            securityQuestionIsMissing: false
        }
        ]
            .forEach(apiResponse => {
                it('should call authService.login() with correct parameters', async () => {
                    //Assemble
                    authService.login.and.returnValue(apiResponse as any);

                    //Act
                    await component.getLogin({ valid: true } as any, wizard);

                    //Assert
                    expect(component.handleLoginInformation).toHaveBeenCalledTimes(1);
                    expect(component.handleLoginInformation).toHaveBeenCalledWith(apiResponse, wizard);

                });

                it('should call component.handleLoginInformation() with correct parameters', async () => {
                    //Assemble
                    authService.login.and.returnValue(apiResponse as any);

                    //Act
                    await component.getLogin({ valid: true } as any, wizard);

                    //Assert
                    expect(component.handleLoginInformation).toHaveBeenCalledTimes(1);
                    expect(component.handleLoginInformation).toHaveBeenCalledWith(apiResponse, wizard);

                });

            });
    });

    describe('handleLoginInformation', () => {
        beforeEach(() => {
            spyOn(component, 'showAccountBlockModal').and.returnValue();
            spyOn(component, 'handleRedirects').and.callFake(() => Promise.resolve('' as any));
        });

        [{
            passwordNeedsReset: true,
            emailIsMissing: true,
            securityQuestionIsMissing: true,
            newAccountStep: { accountComplete: true }
        },
        {
            passwordNeedsReset: true,
            emailIsMissing: false,
            securityQuestionIsMissing: true,
            newAccountStep: { accountComplete: true }

        },
        {
            passwordNeedsReset: true,
            emailIsMissing: false,
            securityQuestionIsMissing: false,
            newAccountStep: { accountComplete: true }

        }
        ]
            .forEach(apiResponse => {
                it('should call addMissingInformationService.isMissingInfo() with correct parameters', async () => {

                    //Act
                    await component.handleLoginInformation(apiResponse, undefined);

                    //Assert
                    expect(addMissingInformationService.isMissingInfo).toHaveBeenCalledTimes(1);
                    expect(addMissingInformationService.isMissingInfo).toHaveBeenCalledWith(
                        apiResponse.passwordNeedsReset, apiResponse.emailIsMissing, apiResponse.securityQuestionIsMissing);

                });

            });
        [{ runningAsKiosk: true, kioskFullSiteMode: false, expectedTimesCalled: 1 },
        { runningAsKiosk: true, kioskFullSiteMode: true, expectedTimesCalled: 0 },
        { runningAsKiosk: false, kioskFullSiteMode: false, expectedTimesCalled: 0 }]
            .forEach(({ runningAsKiosk, kioskFullSiteMode, expectedTimesCalled }) => {
                it(`should call wizard.gotoNextState() ${expectedTimesCalled} times if in kiosk is ${runningAsKiosk} and kioskFullSiteMode is ${kioskFullSiteMode}`,
                    async () => {
                        //Assemble
                        authService.isAuthorized.and.returnValue(false);
                        storefrontUtilityService.isRunningAsKiosk = runningAsKiosk;
                        storefrontUtilityService.webStoreData.fullSiteMode = kioskFullSiteMode;

                        //Act
                        await component.handleLoginInformation({
                            passwordNeedsReset: true,
                            emailIsMissing: false,
                            securityQuestionIsMissing: false,
                            newAccountStep: { accountComplete: true },
                            invalidAccountSource: false
                        }, wizard);

                        //Assert
                        expect(wizard.gotoNextState).toHaveBeenCalledTimes(expectedTimesCalled);

                    });
            });



        [{ runningAsKiosk: true, kioskFullSiteMode: false, wizardRef: undefined, expectedTimesCalled: 0 },
        { runningAsKiosk: true, kioskFullSiteMode: true, wizardRef: undefined, expectedTimesCalled: 1 },
        { runningAsKiosk: false, kioskFullSiteMode: false, wizardRef: undefined, expectedTimesCalled: 1 },
        { runningAsKiosk: false, kioskFullSiteMode: true, wizardRef: undefined, expectedTimesCalled: 1 },
        { runningAsKiosk: true, kioskFullSiteMode: false, wizardRef: wizard, expectedTimesCalled: 0 },
        { runningAsKiosk: true, kioskFullSiteMode: true, wizardRef: wizard, expectedTimesCalled: 1 },
        { runningAsKiosk: false, kioskFullSiteMode: false, wizardRef: wizard, expectedTimesCalled: 1 },
        { runningAsKiosk: false, kioskFullSiteMode: true, wizardRef: wizard, expectedTimesCalled: 1 }]
            .forEach(({ runningAsKiosk, kioskFullSiteMode, wizardRef, expectedTimesCalled }) => {
                it(`should call handleRedirects() ${expectedTimesCalled} if not missing info and runningAsKiosk is ${runningAsKiosk},
kioskFullSiteMode is ${kioskFullSiteMode}, and wizard is ${wizardRef !== undefined}`,
                    async () => {
                        //Assemble
                        authService.isAuthorized.and.returnValue(false);
                        storefrontUtilityService.isRunningAsKiosk = runningAsKiosk;
                        storefrontUtilityService.webStoreData.fullSiteMode = kioskFullSiteMode;

                        //Act
                        await component.handleLoginInformation({
                            passwordNeedsReset: true,
                            emailIsMissing: false,
                            securityQuestionIsMissing: false,
                            newAccountStep: { accountComplete: true },
                            invalidAccountSource: false
                        }, wizardRef);

                        //Assert
                        expect(component.handleRedirects).toHaveBeenCalledTimes(expectedTimesCalled);

                    });

            });

        it('should call authChannel.logIn()', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(false);
            addMissingInformationService.isMissingInfo.and.returnValue(true);
            const apiAuthResponse = {
                passwordNeedsReset: true,
                emailIsMissing: true,
                securityQuestionIsMissing: true,
                newAccountStep: { accountComplete: true },
                invalidAccountSource: false
            };

            //Act
            await component.handleLoginInformation(apiAuthResponse, wizard);

            //Assert
            expect(authChannel.logIn).toHaveBeenCalledTimes(1);
            expect(addMissingInformationService.setMissingInformation).toHaveBeenCalledTimes(1);
            expect(addMissingInformationService.setMissingInformation).toHaveBeenCalledWith(
                apiAuthResponse.passwordNeedsReset,
                apiAuthResponse.emailIsMissing,
                apiAuthResponse.securityQuestionIsMissing);

        });

        it('should call state.go() with loginStates.AddMissingInformation if missinginformation and not in kiosk mode',
            async () => {
                //Assemble
                authService.isAuthorized.and.returnValue(false);
                addMissingInformationService.isMissingInfo.and.returnValue(true);
                storefrontUtilityService.isRunningAsKiosk = false;

                const apiAuthResponse = {
                    passwordNeedsReset: true,
                    emailIsMissing: true,
                    securityQuestionIsMissing: true,
                    newAccountStep: { accountComplete: true },
                    invalidAccountSource: false
                };

                //Act
                await component.handleLoginInformation(apiAuthResponse, wizard);

                //Assert
                expect(state.go).toHaveBeenCalledOnceWith(loginStates.AddMissingInformation);
            });

        it('should not call state.go() if missinginformation and in kiosk mode', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(false);
            addMissingInformationService.isMissingInfo.and.returnValue(true);
            storefrontUtilityService.isRunningAsKiosk = true;

            const apiAuthResponse = {
                passwordNeedsReset: true,
                emailIsMissing: true,
                securityQuestionIsMissing: true,
                newAccountStep: { accountComplete: true },
                invalidAccountSource: false
            };

            //Act
            await component.handleLoginInformation(apiAuthResponse, wizard);

            //Assert
            expect(state.go).not.toHaveBeenCalled();
        });

        it('should call showAccountBlockModal() and NOT authChannel.login() (due to return)', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(false);
            addMissingInformationService.isMissingInfo.and.returnValue(true);
            const apiAuthResponse = {
                passwordNeedsReset: true,
                emailIsMissing: true,
                securityQuestionIsMissing: true,
                newAccountStep: { accountComplete: true },
                invalidAccountSource: true
            };

            //Act
            await component.handleLoginInformation(apiAuthResponse, wizard);

            //Assert
            expect(component.showAccountBlockModal).toHaveBeenCalledTimes(1);
            expect(authChannel.logIn).not.toHaveBeenCalled();
        });

    });

    describe('handleRedirects', () => {
        it('should call suspendedAccountService.getFirstSuspendedAccountState() and state.go()', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(true);
            suspendedAccountService.getFirstSuspendedAccountState.and.returnValue(Promise.resolve(''));

            //Act
            await component.handleRedirects({
                passwordNeedsReset: true,
                emailIsMissing: false,
                securityQuestionIsMissing: false,
                newAccountStep: { accountComplete: true },
                invalidAccountSource: false
            });

            //Assert
            expect(suspendedAccountService.getFirstSuspendedAccountState).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledTimes(1);

        });
        it('should not call suspendedAccountService.getFirstSuspendedAccountState() and state.go()', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(false);

            //Act
            await component.handleRedirects({
                passwordNeedsReset: true,
                emailIsMissing: false,
                securityQuestionIsMissing: false,
                newAccountStep: { accountComplete: true },
                invalidAccountSource: true
            });

            //Assert
            expect(suspendedAccountService.getFirstSuspendedAccountState).toHaveBeenCalledTimes(0);

        });
        it('should call authService.isAuthorized()', async () => {
            //Assemble
            const apiAuthResponse = {
                passwordNeedsReset: true,
                emailIsMissing: true,
                securityQuestionIsMissing: true,
                newAccountStep: { accountComplete: true },
                invalidAccountSource: false
            };

            //Act
            await component.handleRedirects(apiAuthResponse);

            //Assert
            expect(authService.isAuthorized).toHaveBeenCalledTimes(1);
        });
        it('should call this.authenticateRedirectService.redirectLoginAndDeleteSavedState()', async () => {
            //Assemble
            authService.isAuthorized.and.returnValue(false);

            (Object.getOwnPropertyDescriptor(authenticateRedirectService, 'hasSavedState').get as jasmine.Spy).and.returnValue(true);

            const apiAuthResponse = {
                passwordNeedsReset: true,
                emailIsMissing: true,
                securityQuestionIsMissing: true,
                newAccountStep: { accountComplete: true },
                invalidAccountSource: false
            };

            //Act
            await component.handleRedirects(apiAuthResponse);

            //Assert
            expect(authenticateRedirectService.redirectLoginAndDeleteSavedState).toHaveBeenCalledTimes(1);
        });

        it('should call state.go with accountDashboardStates.Frame', async () => {
            //Assemble
            authenticateRedirectService['redirectedStateValue'] = null;

            const apiAuthResponse = {
                passwordNeedsReset: true,
                emailIsMissing: true,
                securityQuestionIsMissing: true,
                newAccountStep: { accountComplete: true },
                invalidAccountSource: false
            };

            //Act
            await component.handleRedirects(apiAuthResponse);

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(accountDashboardStates.Frame);

        });
        // it('should call state.go with coreStateNames.newAccount', async () => {
        //     //Assemble
        //     authService.isAuthorized.and.returnValue(false);

        //     const apiAuthResponse = {
        //         passwordNeedsReset: true,
        //         emailIsMissing: true,
        //         securityQuestionIsMissing: true,
        //         newAccountStep: { accountComplete: false },
        //         invalidAccountSource: false
        //     };

        //     //Act
        //     await component.handleRedirects(apiAuthResponse);

        //     //Assert
        //     expect(state.go).toHaveBeenCalledTimes(1);
        //     expect(state.go).toHaveBeenCalledWith(coreStateNames.newAccount);
        // });

    });

    describe('showAccountBlockModal', () => {

        beforeEach(() => {

            component.cmsContent = {
                Title: 'fake title',
                LoginSectionTitle: 'fake LoginSectionTitle',
                Popups: {
                    MAPP_Login_Android: 'MAPP_Login_Android',
                    MAPP_Login_IOS: 'MAPP_Login_IOS',
                    MAPP_Login_Other: 'MAPP_Login_Other',
                    MAPP_Login_Browser: 'MAPP_Login_Browser',
                    MAPP_Login_Modal_Title: 'MAPP_Login_Modal_Title'
                }
            };
        });

        [
            { currentOs: 'android', popUpMessage: 'MAPP_Login_Android', currentDevice: 'Unknown' },
            { currentOs: 'ios', popUpMessage: 'MAPP_Login_IOS', currentDevice: 'Unknown' },
            { currentOs: 'windows', popUpMessage: 'MAPP_Login_Browser', currentDevice: 'Unknown' },
            { currentOs: 'macos', popUpMessage: 'MAPP_Login_Browser', currentDevice: 'Unknown' },
            { currentOs: 'linux', popUpMessage: 'MAPP_Login_Browser', currentDevice: 'Unknown' },
            { currentOs: 'windows', popUpMessage: 'MAPP_Login_Other', currentDevice: 'NOT Unknown' },
            { currentOs: 'macos', popUpMessage: 'MAPP_Login_Other', currentDevice: 'NOT Unknown' },
            { currentOs: 'linux', popUpMessage: 'MAPP_Login_Other', currentDevice: 'NOT Unknown' }
        ].forEach(({ currentOs, popUpMessage, currentDevice }) => {
            it('should call dialogService.openGenericModal with correct args', () => {
                //Assemble
                stringUtils.getUrlParameter.and.returnValue(popUpMessage);

                (operatingSystemSnifferService.getOsFull as jasmine.Spy).and.returnValue(currentOs);
                (operatingSystemSnifferService.getDeviceFull as jasmine.Spy).and.returnValue(currentDevice);

                //Act
                component['showAccountBlockModal']();

                //Assert
                expect(dialogService.openGenericModal).toHaveBeenCalledTimes(1);
                expect(dialogService.openGenericModal).toHaveBeenCalledWith(
                    GenericCmsModalComponent,
                    {
                        cmsContent: {
                            Title: component.cmsContent.Popups.MAPP_Login_Modal_Title,
                            AcceptBtn: 'CLOSE',
                            PrimaryContent: popUpMessage
                        }
                    }
                );
            });
        });
    });
    describe('goToForgotPasswordPage', () => {

        it('should call storefrontModalService.showGotoCsr() if running as kiosk and not fullwebsitemode', async () => {
            //Assemble
            storefrontUtilityService.webStoreData.fullSiteMode = false;
            storefrontUtilityService.isRunningAsKiosk = true;

            //Act
            await component.goToForgotPasswordPage();

            //Assert
            expect(storefrontModalService.showGotoCsr).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledTimes(0);
        });

        it('should call state.go with storefrontSurvey state if storefrontModalService.showGotoCsr() returns true', async () => {
            //Assemble
            storefrontUtilityService.webStoreData.fullSiteMode = false;
            storefrontUtilityService.isRunningAsKiosk = true;
            storefrontModalService.showGotoCsr.and.returnValue(true); //user is "done"

            //Act
            await component.goToForgotPasswordPage();

            //Assert
            expect(storefrontModalService.showGotoCsr).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledOnceWith(coreStateNames.storefrontSurvey);
        });

        it('should not call state.go with storefrontSurvey state if storefrontModalService.showGotoCsr() returns false', async () => {
            //Assemble
            storefrontUtilityService.webStoreData.fullSiteMode = false;
            storefrontUtilityService.isRunningAsKiosk = true;
            storefrontModalService.showGotoCsr.and.returnValue(false); //user is "not done"

            //Act
            await component.goToForgotPasswordPage();

            //Assert
            expect(storefrontModalService.showGotoCsr).toHaveBeenCalledTimes(1);
            expect(state.go).not.toHaveBeenCalled();
        });

        [{ runningAsKiosk: true, kioskFullSiteMode: true },
        { runningAsKiosk: false, kioskFullSiteMode: false },
        { runningAsKiosk: false, kioskFullSiteMode: true },
        { runningAsKiosk: true, kioskFullSiteMode: true },
        { runningAsKiosk: false, kioskFullSiteMode: false },
        { runningAsKiosk: false, kioskFullSiteMode: true }]
            .forEach(({ runningAsKiosk, kioskFullSiteMode, }) => {
                it(`should call state.go with forgotpassword state if runningAsKiosk is ${runningAsKiosk} and
kioskFullSiteMode is ${kioskFullSiteMode}}`,
                    async () => {
                        //Assemble
                        storefrontUtilityService.webStoreData.fullSiteMode = kioskFullSiteMode;
                        storefrontUtilityService.isRunningAsKiosk = runningAsKiosk;

                        //Act
                        await component.goToForgotPasswordPage();

                        //Assert
                        expect(storefrontModalService.showGotoCsr).toHaveBeenCalledTimes(0);
                        expect(state.go).toHaveBeenCalledTimes(1);
                        expect(state.go).toHaveBeenCalledWith(coreStateNames.forgotPassword);
                    });

            });
    });
    describe('goToFirstTimeLoginPage', () => {

        it('should call state.go with correct state toggle off', async () => {

            environmentConfig.twoFactorAuth.enableFirstTimeLogin = false;

            //Act
            await component.goToFirstTimeLoginPage();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(coreStateNames.setupOnlineAccessLoginInfo);
        });

        it('should call state.go with correct state toggle on', async () => {

            environmentConfig.twoFactorAuth.enableFirstTimeLogin = true;

            //Act
            await component.goToFirstTimeLoginPage();

            //Assert
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(FirstTimeLoginStates.FindAccount);
        });
    });
    describe('goToSignUpPage', () => {

        // it('should call state.go with correct state when create account refresh is true', async () => {
        //     environmentConfig.createAccountRefresh = true;
        //     await component.goToSignUpPage();


        //     expect(state.go).toHaveBeenCalledTimes(1);
        //     expect(state.go).toHaveBeenCalledWith(FeaturesStates.Login);

        // });

        it('should call state.go with correct state when create account refresh is false', async () => {
            environmentConfig.createAccountRefresh = false;
            await component.goToSignUpPage();

            expect(state.go).toHaveBeenCalledWith(coreStateNames.createAccount);
        });
    });

    describe('goToForgotUsernamePage', () => {
        it('should call state.go with storefrontSurvey state', waitForAsync(() => {
            storefrontUtilityService.webStoreData.fullSiteMode = false;
            storefrontUtilityService.isRunningAsKiosk = true;
            storefrontModalService.showGotoCsr.and.returnValue(true);

            component.goToForgotUsernamePage().then(() => {
                expect(storefrontModalService.showGotoCsr).toHaveBeenCalledTimes(1);
                expect(state.go).toHaveBeenCalledOnceWith(coreStateNames.storefrontSurvey);
            });
        }));

        it('should call state.go with param', waitForAsync(() => {
            storefrontUtilityService.webStoreData.fullSiteMode = true;
            storefrontUtilityService.isRunningAsKiosk = false;

            component.goToForgotUsernamePage().then(() => {
                expect(state.go).toHaveBeenCalledWith(ForgotUsernameStateNames.InputEmail);
            });
        }));
    });
});

