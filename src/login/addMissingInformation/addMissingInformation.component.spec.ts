import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { By } from '@angular/platform-browser';
import { StateRegistry, StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WindowRef } from 'common/providers';
import { AccountService, IsInvoicedService, ResponseErrorService } from 'common/services';
import { WizardComponent, WizardStateResolverFactory } from 'common/ui';
import { StateNames as CoreStateNames } from 'constants/stateNames.constants';
import { UserRoles } from 'constants/userRoles.constants';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { AddMissingInformationComponent } from './addMissingInformation.component';
import { CurrentUserService } from 'common/services';
import { SessionService } from 'common/services/session/session.service';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

describe('component: add-missing-information', () => {

    let fixture: ComponentFixture<AddMissingInformationComponent>;
    let component: AddMissingInformationComponent;
    let windowRef: Window;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let accountService: any;
    let session: jasmine.SpyObj<SessionService>;
    let authChannel: AuthChannelService;
    let state: StateService;
    let isInvoicedService: jasmine.SpyObj<IsInvoicedService>;
    let addMissingInformationService: jasmine.SpyObj<AddMissingInformationService>;
    let suspendedAccountService: jasmine.SpyObj<SuspendedAccountService>;
    let userRoles: UserRoles;
    let coreStateNames: CoreStateNames;
    let authService: jasmine.SpyObj<AuthenticationService>;
    let form: NgForm;
    let storefrontUtilityService;
    let wizard: WizardComponent;
    let stateRegistry: StateRegistry;
    let currentUser: CurrentUserService;

    beforeEach(async () => {

        windowRef = jasmine.createSpyObj('window', ['addEventListener']);

        //ResponseErrorService Mock
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'formatErrorMessages']);
        responseErrorService.isErrorFree.and.returnValue(true);

        //StateService Mock
        state = jasmine.createSpyObj('state', ['go']);

        //accountService Mock
        accountService = jasmine.createSpyObj('accountService', ['saveInformation', 'getSecurityQuestions']);

        //other mocks
        authChannel = jasmine.createSpyObj('authChannel', ['logIn']);
        session = jasmine.createSpyObj('session', ['create']);
        isInvoicedService = jasmine.createSpyObj('isInvoicedService', ['setAccountInvoiced']);
        addMissingInformationService = jasmine.createSpyObj('addMissingInformation', [
            'destroyMissingInformationFlags',
            'returnMissingInformation']);
        suspendedAccountService = jasmine.createSpyObj('suspendedAccountService', ['getFirstSuspendedAccountState']);
        userRoles = new UserRoles();

        coreStateNames = new CoreStateNames();
        authService = jasmine.createSpyObj('authService', ['isAuthorized']);
        storefrontUtilityService = {};
        stateRegistry = jasmine.createSpyObj('stateRegistry', ['get']);
        wizard = jasmine.createSpyObj('wizardUi', ['gotoNextState']);
        currentUser = jasmine.createSpyObj('currentUser', ['getCurrentUser']);

        const wizardStateResolveFactory = jasmine.createSpyObj('wizardStateResolverFactory', ['getService']);
        wizardStateResolveFactory.getService.and.returnValue({});

        await TestBed
            .overrideComponent(AddMissingInformationComponent, {
                set: {
                    providers: [
                        { provide: WizardComponent, useFactory: () => wizard }
                    ]
                }
            });

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddMissingInformationComponent,
                    WizardComponent
                ],
                schemas: [
                    NO_ERRORS_SCHEMA
                ],
                imports: [
                    CommonModule,
                    PipesModule,
                    FormsModule,
                    FlexLayoutModule,

                    MatDividerModule
                ],
                providers: [
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: SessionService, useFactory: () => session },
                    { provide: IsInvoicedService, useFactory: () => isInvoicedService },
                    { provide: WindowRef, useFactory: () => windowRef },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },

                    { provide: AccountService, useValue: accountService },
                    { provide: AuthChannelService, useFactory: () => authChannel },
                    { provide: AddMissingInformationService, useFactory: () => addMissingInformationService },
                    { provide: AuthenticationService, useFactory: () => authService },
                    { provide: SuspendedAccountService, useFactory: () => suspendedAccountService },
                    { provide: UserRoles, useFactory: () => userRoles },
                    { provide: StateService, useFactory: () => state },
                    { provide: CoreStateNames, useFactory: () => coreStateNames },
                    { provide: StateRegistry, useFactory: () => stateRegistry },
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolveFactory },
                    { provide: UIRouterGlobals, useFactory: () => ({}) },
                    { provide: CurrentUserService, useFactory: () => currentUser },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddMissingInformationComponent);
        component = fixture.debugElement.componentInstance;
        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;
    });

    beforeEach(async () => {
        spyOn(component as any, 'setSecurityQuestions');
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        [{
            passwordNeedsReset: true,
            emailIsMissing: false,
            securityQuestionIsMissing: true,
            profileCallHasOccured: false
        },
        {
            passwordNeedsReset: true,
            emailIsMissing: true,
            securityQuestionIsMissing: false,
            profileCallHasOccured: false
        },
        {
            passwordNeedsReset: true,
            emailIsMissing: true,
            securityQuestionIsMissing: true,
            profileCallHasOccured: false
        },
        {
            passwordNeedsReset: false,
            emailIsMissing: true,
            securityQuestionIsMissing: true,
            profileCallHasOccured: false
        },
        {
            passwordNeedsReset: false,
            emailIsMissing: false,
            securityQuestionIsMissing: true,
            profileCallHasOccured: false
        }].forEach(missingInfo => {
            it('should set missingInformationFlags with result of addMissingInformationService.returnMissingInformation()',
                () => {
                    //Assemble
                    addMissingInformationService.returnMissingInformation.and.returnValue(missingInfo);

                    //Act
                    component.ngOnInit();

                    //Assert
                    expect(component.missingInformationFlags).toEqual(missingInfo);
                    expect(addMissingInformationService.returnMissingInformation).toHaveBeenCalledTimes(1);
                });
        });

        it('should call setSecurityQuestions()',
            () => {
                //Act
                component.ngOnInit();

                //Assert
                expect((component as any).setSecurityQuestions).toHaveBeenCalledTimes(1);
            });

        it('should call window.addEventListener() with "beforeunload"',
            () => {
                //Assemble
                (windowRef.addEventListener as jasmine.Spy).and.callThrough();

                //Act
                component.ngOnInit();

                //Assert
                expect(windowRef.addEventListener).toHaveBeenCalledOnceWith('beforeunload', jasmine.any(Function));
            });
    });


    describe('saveInformation', () => {
        beforeEach(async () => {

            accountService.saveInformation.and.returnValue({
                accountStatus: 'fake accountStatus',
                accountActivity: 'fake acctActivity',
                accountId: 111,
                alerts: [],
                emailIsMissing: false,
                errors: [],
                firstName: 'fake firstName',
                lastName: 'fake lastName',
                newAccountStep: { currentStep: 100, accountComplete: 101 },
                passwordNeedsReset: false,
                securityQuestionIsMissing: false,
                sessionTimedOut: false,
                driverLic: 'fake dl',
                driverLicState: 'fake dlState',
                companyName: 'fake companyName',
                isInvoiced: true
            });
        });

        it('should call api.saveInformation', async () => {
            //Assemble
            (component as any).addMissingInformation = {
                currentPassword: '1',
                newPassword: '2',
                securityAnswer: '3',
                securityQuestionID: '5',
                email: '5'
            };
            responseErrorService.isErrorFree.and.returnValue(false);
            const expectedApiRequest =
            {
                currentPassword: '1',
                password: '2', //This is what is different from component.addMissingInformation (it is not 'new'-password)
                securityAnswer: '3',
                securityQuestionID: '5',
                email: '5'
            };

            //Act
            await component.saveInformation(wizard);

            //Assert
            expect(accountService.saveInformation).toHaveBeenCalledOnceWith(expectedApiRequest);
        });

        it('should not call additional functions if api.saveInformation returns with errors', async () => {
            //Assemble
            (component as any).addMissingInformation = 'fake missing info 321';
            responseErrorService.isErrorFree.and.returnValue(false);

            //Act
            await component.saveInformation(wizard);

            //Assert
            expect(addMissingInformationService.destroyMissingInformationFlags).not.toHaveBeenCalled();
            expect(session.create).not.toHaveBeenCalled();
            expect(isInvoicedService.setAccountInvoiced).not.toHaveBeenCalled();
            expect(authChannel.logIn).not.toHaveBeenCalled();
        });

        it('should call authChannel.logIn() if api.saveInformation returns with no errors', async () => {
            //Assemble
            (component as any).addMissingInformation = 'fake missing info 321';
            responseErrorService.isErrorFree.and.returnValue(true);

            //Act
            await component.saveInformation(wizard);

            //Assert
            expect(authChannel.logIn).toHaveBeenCalledTimes(1);
        });

        it('should call wizard.gotoNextState() if api.saveInformation returns with no errors and is in kiosk mode',
            async () => {
                //Assemble
                (component as any).addMissingInformation = 'fake missing info 321';
                responseErrorService.isErrorFree.and.returnValue(true);
                storefrontUtilityService.isRunningAsKiosk = true;

                //Act
                await component.saveInformation(wizard);

                //Assert
                expect(wizard.gotoNextState).toHaveBeenCalledTimes(1);
                expect(state.go).not.toHaveBeenCalled();
            });

        it('should not call wizard.gotoNextState() if api.saveInformation returns with no errors and is not in kiosk mode',
            async () => {
                //Assemble
                (component as any).addMissingInformation = 'fake missing info 321';
                responseErrorService.isErrorFree.and.returnValue(true);
                storefrontUtilityService.isRunningAsKiosk = false;

                //Act
                await component.saveInformation(wizard);

                //Assert
                expect(wizard.gotoNextState).not.toHaveBeenCalled();
                expect(state.go).toHaveBeenCalled();
            });
        it('should call additional functions if api.saveInformation returns with 0 errors', async () => {
            //Act
            await component.saveInformation(wizard);

            //Assert
            expect(addMissingInformationService.destroyMissingInformationFlags).toHaveBeenCalledTimes(1);
            expect(session.create).toHaveBeenCalledOnceWith(111, 'fake acctActivity', null, false);
            expect(isInvoicedService.setAccountInvoiced).toHaveBeenCalledOnceWith(true);
            expect(authChannel.logIn).toHaveBeenCalledOnceWith({
                accountStatus: 'fake acctActivity',
                acctActivity: 'fake acctActivity',
                acctId: 111,
                alerts: [],
                emailIsMissing: false,
                errors: [],
                firstName: 'fake firstName',
                lastName: 'fake lastName',
                passwordNeedsReset: false,
                securityQuestionIsMissing: false,
                sessionTimedOut: false,
                driverLic: 'fake dl',
                driverLicState: 'fake dlState',
                companyName: 'fake companyName'
            });
        });

        it('should call authService.isAuthorized with userroles.suspended',
            async () => {
                //Act
                await component.saveInformation(wizard);

                //Assert
                expect(authService.isAuthorized).toHaveBeenCalledOnceWith(userRoles.suspended);
            });

        it('should call suspendedAccountService.getFirstSuspendedAccountState() and state.go() if authService.isAuthorized returns true',
            async () => {
                //Assemble
                authService.isAuthorized.and.returnValue(true);
                suspendedAccountService.getFirstSuspendedAccountState.and.returnValue(Promise.resolve(''));

                //Act
                await component.saveInformation(wizard);

                //Assert
                expect(suspendedAccountService.getFirstSuspendedAccountState).toHaveBeenCalledTimes(1);
                expect(state.go).toHaveBeenCalledTimes(1);
            });
        it('should call state.go with accountdashboard route if authService.isAuthorized returns false and newaccountstep.accountComplete is true',
            async () => {
                //Assemble
                authService.isAuthorized.and.returnValue(false);

                //Act
                await component.saveInformation(wizard);

                //Assert
                expect(state.go).toHaveBeenCalledOnceWith(accountDashboardStates.Frame);
            });
        it('should call state.go with corestatenames.newAccount',
            async () => {
                //Assemble
                authService.isAuthorized.and.returnValue(false);
                accountService.saveInformation.and.returnValue({
                    newAccountStep: { currentStep: 100, accountComplete: false }
                });

                //Act
                await component.saveInformation(wizard);

                //Assert
                expect(state.go).toHaveBeenCalledOnceWith(coreStateNames.newAccount);
            });
    });

    describe('setSecurityQuestions', () => {
        const apiResponse = {
            securityQuestions: [
                { prop: 'hello' },
                { prop: 'bye bye' }
            ]
        };

        beforeEach(async () => {
            accountService.getSecurityQuestions.and.returnValue(apiResponse);
            ((component as any).setSecurityQuestions).and.callThrough();

        });

        it('should set component.securityQuestions with apiResponse if apiResponse returns with 0 errors',
            async () => {
                //Act
                await component['setSecurityQuestions']();

                //Assert
                expect(component.securityQuestions).toEqual(apiResponse.securityQuestions as any);

            });

        it('should not set component.securityQuestions with apiResponse if apiResponse returns with errors',
            async () => {
                //Assemble
                responseErrorService.isErrorFree.and.returnValue(false);

                //Act
                await component['setSecurityQuestions']();

                //Assert
                expect(component.securityQuestions).toBeUndefined();

            });
    });
});
