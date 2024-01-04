import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '@uirouter/angular';
import { stateNames as AccountOverviewStates } from 'accountDashboard/constants';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WindowRef } from 'common/providers';
import { DialogService, ResponseErrorService } from 'common/services';
import { EzTagAppRedirectLinkService } from 'common/services/ezTagAppRedirectLinkService/ezTagAppRedirectLink.service';
import { GenericCmsModalComponent } from 'common/ui';
import { WebStorageConst } from 'constants/module';
import { UserRoles } from 'constants/userRoles.constants';
import { StateNames as HomeStates } from 'home/constants';
import { } from 'jasmine';
import { stateNames as LoginStates } from 'login/constants';
import { WebApiService } from 'login/services/webApi.service';
import { PipesModule } from 'pipes/module';
import { SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { WebStorageService, OperatingSystemSnifferService } from 'common/services';
import { ClaimSessionComponent } from './claimSession.component';



describe('component: claim-session', () => {

    let fixture: ComponentFixture<ClaimSessionComponent>;
    let component: ClaimSessionComponent;
    let form: NgForm;

    let api: jasmine.SpyObj<WebApiService>;
    let responseErrorService: jasmine.SpyObj<any>;
    let webStorage: any;
    let operatingSystemSnifferService: jasmine.SpyObj<OperatingSystemSnifferService>;
    let authChannel: jasmine.SpyObj<AuthChannelService>;
    let webStorageConst: WebStorageConst;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let userRoles: UserRoles;
    let state: StateService;
    let suspendedAccountService: jasmine.SpyObj<SuspendedAccountService>;
    let addMissingInformationService: jasmine.SpyObj<AddMissingInformationService>;
    let route: jasmine.SpyObj<any>;
    let dialogService: jasmine.SpyObj<any>;

    let homeStates: HomeStates;

    let ezTagAppRedirectLinkService: jasmine.SpyObj<EzTagAppRedirectLinkService>;
    let window: Window;

    beforeEach(async () => {
        api = jasmine.createSpyObj('api', ['claimSession']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree']);
        (responseErrorService.isErrorFree as jasmine.Spy).and.returnValue(true);
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue']);
        operatingSystemSnifferService = jasmine.createSpyObj('operatingSystemSnifferService', ['getOsFull']);
        authChannel = jasmine.createSpyObj('authChannel', ['logIn']);
        webStorageConst = new WebStorageConst();
        authService = jasmine.createSpyObj('authenticationService', ['isAuthenticated', 'isAuthorized', 'profile', 'logout','claimSessionLogOut']);
        userRoles = new UserRoles();
        state = jasmine.createSpyObj('state', ['go', 'params']);
        suspendedAccountService = jasmine.createSpyObj('suspendedAccountService', ['getFirstSuspendedAccountState']);
        addMissingInformationService = jasmine.createSpyObj('addMissingInformation', [
            'isMissingInfo',
            'setMissingInformation']);
        route = {
            snapshot: { paramMap: { get: (param: string) => new Date(Date.now() + 1000) } }
        };

        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);

        homeStates = new HomeStates();
        ezTagAppRedirectLinkService = jasmine.createSpyObj('ezTagAppRedirectLinkService', ['getEzTagAppLink']);
        window = jasmine.createSpyObj('window', ['location']);


        await TestBed
            .configureTestingModule({
                declarations: [
                    ClaimSessionComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule],
                providers: [
                    { provide: WebApiService, useValue: api },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: OperatingSystemSnifferService, useFactory: () => operatingSystemSnifferService },
                    { provide: AuthChannelService, useFactory: () => authChannel },
                    { provide: WebStorageConst, useValue: webStorageConst },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: UserRoles, useValue: userRoles },
                    { provide: StateService, useFactory: () => state },
                    { provide: SuspendedAccountService, useFactory: () => suspendedAccountService },
                    { provide: AddMissingInformationService, useFactory: () => addMissingInformationService },
                    { provide: ActivatedRoute, useFactory: () => route },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: EzTagAppRedirectLinkService, useFactory: () => ezTagAppRedirectLinkService },
                    { provide: WindowRef, useFactory: () => window }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ClaimSessionComponent);
        component = fixture.debugElement.componentInstance;
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;

        component.cmsClaimSessionExpirationModal = {
            Title: 'fake titleee',
            AcceptButton: 'fake accept',
            ShortDescription: 'fake short desc',
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            spyOn(component as any, 'triggerShowExpirationModal');
            operatingSystemSnifferService.getOsFull.and.returnValue('ios');
            authService.isAuthenticated.and.returnValue(true);
        });

        it('should call state.go() with HomeStates.Frame and not call triggerShowExpirationModal() if not mobile',
            async () => {
                //Assemble
                operatingSystemSnifferService.getOsFull.and.returnValue('something else');
                authService.isAuthenticated.and.returnValue(false);

                //Act
                component.ngOnInit();

                //Assert
                expect(state.go).toHaveBeenCalledOnceWith(homeStates.Frame);
                expect((component as any).triggerShowExpirationModal).not.toHaveBeenCalled();
            });

        it('should not call state.go(), but should call triggerShowExpirationModal() if is mobile',
            async () => {
                //Act
                component.ngOnInit();

                //Assert
                expect(state.go).not.toHaveBeenCalled();
                expect((component as any).triggerShowExpirationModal).toHaveBeenCalled();
            });

        it('should call authService.isAuthenticated', async () => {
            //Act
            component.ngOnInit();

            //Assert
            expect(authService.isAuthenticated).toHaveBeenCalled();
        });

        [{ calledTimes: 1, isAuth: true, token: 'xyz' },
        { calledTimes: 0, isAuth: false }]
            .forEach(({ calledTimes, isAuth, token }) => {
                it(`should call authService.claimSessionLogOut ${calledTimes} if authService.isAuthenticated is ${isAuth}`,
                    async () => {
                        //Assemble
                        authService.isAuthenticated.and.returnValue(isAuth);
                        state.params.token = token;
                        //Act
                        component.ngOnInit();

                        //Assert
                        expect(authService.claimSessionLogOut).toHaveBeenCalledTimes(calledTimes);
                    });
            });

        [ { calledTimes: 1, isAuth: true}]
            .forEach(({ calledTimes, isAuth}) => {
                it(`should call authService.logout ${calledTimes} if authService.isAuthenticated is ${isAuth}`,
                    async () => {
                        //Assemble
                        authService.isAuthenticated.and.returnValue(isAuth);
                        state.params.token = null;
                        //Act
                        component.ngOnInit();

                        //Assert
                        expect(authService.logout).toHaveBeenCalledTimes(calledTimes);
                    });
            });

        it('should call webStorage.setKeyValue and triggerShowExpirationModal if mobile', async () => {
            //Act
            component.ngOnInit();

            //Assert
            expect(webStorage.setKeyValue).toHaveBeenCalledOnceWith(webStorageConst.mappSessionBeingUsed, true);
            expect((component as any).triggerShowExpirationModal).toHaveBeenCalled();
        });
    });

    describe('triggerShowExpirationModal', () => {
        beforeEach(() => {
            spyOn(component as any, 'showExpirationModal');
        });

        it('should call showExpirationModal()', fakeAsync(() => {
            //Act
            component['triggerShowExpirationModal']();
            tick(1000);

            //Assert
            expect((component as any).showExpirationModal).toHaveBeenCalled();
        }));
    });

    describe('showExpirationModal', () => {

        beforeEach(() => {
            spyOn(component as any, 'returnToApp');
        });

        it('should call dialogService.openGenericModal with correct parameters', () => {
            //Assemble
            const data = {
                cmsContent: {
                    Title: 'fake titleee',
                    AcceptBtn: 'fake accept',
                    PrimaryContent: 'fake short desc'
                }
            };

            //Act
            component['showExpirationModal']();

            //Assert
            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(GenericCmsModalComponent, data);
        });

        it('should call state.go() if returnToApp() throws an error', async () => {
            //Assemble
            ((component as any).returnToApp as jasmine.Spy).and.throwError('ERROR MESSAGE');

            //Act
            await component['showExpirationModal']();

            //Assert
            expect(state.go).toHaveBeenCalledOnceWith(LoginStates.Login);
        });

        it('should not call state.go() if returnToApp() does not throw an error', async () => {
            //Act
            await component['showExpirationModal']();

            //Assert
            expect(state.go).not.toHaveBeenCalledOnceWith(LoginStates.Login);
        });


    });

    describe('returnToApp', () => {
        beforeEach(() => {
            ezTagAppRedirectLinkService.getEzTagAppLink.and.returnValue('wassup');
        });

        it('should call ezTagAppRedirectLinkService.getEzTagAppLink()', () => {
            //Act
            component['returnToApp']();

            //Assert
            expect(ezTagAppRedirectLinkService.getEzTagAppLink).toHaveBeenCalledTimes(1);
        });

        [true, false]
            .forEach(mobileRedirect => {
                it(`should call state.go ${mobileRedirect ? '' : 'not'}  with LoginState if mobileRedirect[currentOs] ${mobileRedirect}`,
                    () => {
                        //Assemble
                        ezTagAppRedirectLinkService.getEzTagAppLink.and.returnValue(mobileRedirect);

                        //Act
                        component['returnToApp']();

                        //Assert
                        if (mobileRedirect) {
                            expect(state.go).not.toHaveBeenCalledOnceWith(LoginStates.Login);
                            expect(window.location.href).toEqual(mobileRedirect as any);
                        }
                        else {
                            expect(state.go).toHaveBeenCalledOnceWith(LoginStates.Login);
                        }
                    });
            });
    });

    describe('submitPinNumber', () => {
        beforeEach(() => {
            spyOn(component as any, 'redirect');
        });

        it('should not call api or iserrorfree if form is not valid', async () => {
            //Act
            await component.submitPinNumber({ valid: false } as NgForm);

            //Assert
            expect(api.claimSession).not.toHaveBeenCalled();
            expect(responseErrorService.isErrorFree).not.toHaveBeenCalled();
        });

        it('should call api or iserrorfree if form is valid', async () => {
            //Act
            await component.submitPinNumber({ valid: true } as NgForm);

            //Assert
            expect(api.claimSession).toHaveBeenCalledOnceWith({
                claimSessionCredential: {
                    token: state.params.token,
                    pin: component.pin
                }
            });
            expect(responseErrorService.isErrorFree).toHaveBeenCalled();
        });

        it('should call authService.profile and redirect() if isErrorFree is true', async () => {
            //Assemble
            authService.profile.and.returnValue(Promise.resolve('authProfileResponse'));

            //Act
            await component.submitPinNumber({ valid: true } as NgForm);

            //Assert
            expect(authService.profile).toHaveBeenCalledOnceWith({});
            expect((component as any).redirect).toHaveBeenCalledOnceWith('authProfileResponse');
        });

        it('should not call authService.profile or redirect() if isErrorFree is false', async () => {
            //Assemble
            responseErrorService.isErrorFree.and.returnValue(false);

            //Act
            await component.submitPinNumber({ valid: true } as NgForm);

            //Assert
            expect(authService.profile).not.toHaveBeenCalled();
            expect((component as any).redirect).not.toHaveBeenCalled();
        });
    });

    describe('loginInformationMissing', () => {

        it('should return false when addMissingInformationService.isMissingInfo returns false', () => {
            //Assemble
            addMissingInformationService.isMissingInfo.and.returnValue(false);

            //Act
            const result = component['loginInformationIsMissing']({
                passwordNeedsReset: 'fake passwordNeedsReset',
                emailIsMissing: 'fake emailIsMissing',
                securityQuestionIsMissing: 'fake securityQuestionIsMissing'
            });

            //Assert
            expect(result).toBeFalsy();
        });

        it(`should return true when addMissingInformationService.isMissingInfo returns true`, () => {

            //Assemble
            addMissingInformationService.isMissingInfo.and.returnValue(true);

            //Act
            const result = component['loginInformationIsMissing']({
                passwordNeedsReset: 'fake passwordNeedsReset',
                emailIsMissing: 'fake emailIsMissing',
                securityQuestionIsMissing: 'fake securityQuestionIsMissing'
            });

            //Assert
            expect(result).toBeTruthy();
        });

        it(`should call addMissingInformationService.isMissingInfo`, () => {
            //Assemble
            addMissingInformationService.isMissingInfo.and.returnValue(false);

            //Act
            component['loginInformationIsMissing']({
                passwordNeedsReset: 'fake passwordNeedsReset',
                emailIsMissing: 'fake emailIsMissing',
                securityQuestionIsMissing: 'fake securityQuestionIsMissing'
            });

            //Assert
            expect(addMissingInformationService.isMissingInfo).toHaveBeenCalledTimes(1);
            expect(addMissingInformationService.isMissingInfo).toHaveBeenCalledWith(
                'fake passwordNeedsReset' as any,
                'fake emailIsMissing' as any,
                'fake securityQuestionIsMissing' as any
            );
        });
    });

    describe('redirect', () => {
        beforeEach(() => {
            spyOn(component as any, 'loginInformationIsMissing');
        });


        it('should call authChannel.logIn', async () => {
            await component['redirect']('response');

            expect(authChannel.logIn).toHaveBeenCalled();
        });

        it('should call loginInformationIsMissing', async () => {

            await component['redirect']('response');

            expect((component as any).loginInformationIsMissing).toHaveBeenCalled();
        });

        it('should call authService.isAuthorized', async () => {

            await component['redirect']('response');

            expect(authService.isAuthorized).toHaveBeenCalled();
        });

        it('should call suspendedAccountService.getFirstSuspendedAccountState if loginInformationIsMissing is false & authService.isAuthorized is true ',
            async () => {
                //Assemble
                ((component as any).loginInformationIsMissing as jasmine.Spy).and.returnValue(false);
                authService.isAuthorized.and.returnValue(true);
                suspendedAccountService.getFirstSuspendedAccountState.and.returnValue(Promise.resolve('fake123'));

                //Act
                await component['redirect']('response');

                //Assert
                expect(suspendedAccountService.getFirstSuspendedAccountState).toHaveBeenCalled();
                expect(state.go).toHaveBeenCalledOnceWith('fake123');
            });

        [true, false]
            .forEach(missing => {
                it(`should ${missing ? '' : 'not'} call state.go with stateAddMissingInfo if loginInfoMissing is ${missing}`,
                    async () => {
                        //Assemble
                        ((component as any).loginInformationIsMissing as jasmine.Spy).and.returnValue(missing);
                        authService.isAuthorized.and.returnValue(missing);

                        //Act
                        await component['redirect']('response');

                        //Assert
                        if (missing) {
                            expect(state.go).toHaveBeenCalledOnceWith(LoginStates.AddMissingInformation);
                        }
                        else {
                            expect(state.go).not.toHaveBeenCalledOnceWith(LoginStates.AddMissingInformation);
                        }
                    });
            });

        [true, false]
            .forEach(conditionValue => {
                it(`should call state.go ${conditionValue ? '' : 'not'}  with AccountOverviewState if other conditions are ${conditionValue}`,
                    async () => {

                        //Assemble
                        ((component as any).loginInformationIsMissing as jasmine.Spy).and.returnValue(conditionValue);
                        authService.isAuthorized.and.returnValue(conditionValue as any);

                        //Act
                        await component['redirect']('response');

                        //Assert
                        if (conditionValue) {
                            expect(state.go).not.toHaveBeenCalledOnceWith(AccountOverviewStates.Frame);
                        }
                        else {
                            expect(state.go).toHaveBeenCalledOnceWith(AccountOverviewStates.Frame);
                        }
                    });
            });
    });
});
