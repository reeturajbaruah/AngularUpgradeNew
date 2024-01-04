import { TwoFAService } from '2FA/services/2FA.service';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AccountService, CurrentUserService, GenericRepoService, HttpService } from 'common/services';
import { MultiFactorAuthenticationService } from './multi-factor-authentication.service';
import { AuthChannelService } from '../../authentication/authChannelService/authChannel.service';
import { AuthenticationService } from '../../authentication/authenticationService/authentication.service';
import { UserRoles } from '../../constants/userRoles.constants';
import { SuspendedAccountService } from '../../suspendedAccountRefresh/services/suspendedAccount.service';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { AddMissingInformationService } from '../../authentication/addMissingInformationService/addMissingInformation.service';
import { stateNames as LoginStates } from 'login/constants';
import { StateService } from '@uirouter/angular';

describe('MultiFactorAuthenticationService', () => {
    let service: MultiFactorAuthenticationService;
    let accountService: jasmine.SpyObj<AccountService>;
    let twoFAService: jasmine.SpyObj<TwoFAService>;
    let genericRepo: any;
    let authenticationService: jasmine.SpyObj<AuthenticationService>;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;
    let userRoles: UserRoles;
    let authChannel: jasmine.SpyObj<AuthChannelService>;
    let suspendedAccountService: jasmine.SpyObj<SuspendedAccountService>;
    let addMissingInformationService: jasmine.SpyObj<AddMissingInformationService>;
    let state: jasmine.SpyObj<StateService>;

    const result: any = {};


    const loginResponse = {
        passwordNeedsReset: false,
        emailIsMissing: false,
        securityQuestionIsMissing: false
    };

    beforeEach(() => {
        accountService = jasmine.createSpyObj('accountService', ['getAccountInformation2fa']);
        twoFAService = jasmine.createSpyObj('TwoFAService', ['sendVerificationCode', 'validateVerificationCode', 'validateSecurityAnswer']);
        authenticationService = jasmine.createSpyObj('AuthenticationService', ['profile', 'isAuthorized']);
        currentUserService = jasmine.createSpyObj('currentUserService', ['updateCurrentUser', 'makeSessionActive']);
        authChannel = jasmine.createSpyObj('AuthChannelService', ['logIn']);
        addMissingInformationService = jasmine.createSpyObj('addMissingInformation', [
            'isMissingInfo',
            'setMissingInformation']);
        suspendedAccountService = jasmine.createSpyObj('suspendedAccountService', ['getFirstSuspendedAccountState']);

        twoFAService.sendVerificationCode.and.resolveTo(result);
        twoFAService.validateVerificationCode.and.resolveTo(result);
        userRoles = new UserRoles();
        genericRepo = {
            dataFactory: {
                getSecurityQuestions: jasmine.createSpy('getSecurityQuestions'),
                // validateSecurityAnswer: jasmine.createSpy('validateSecurityAnswer')
            }
        };
        state = jasmine.createSpyObj('stateService', ['go']);
        state.go.and.resolveTo({} as any);

        TestBed.configureTestingModule({
            providers: [
                MultiFactorAuthenticationService,
                { provide: AccountService, useValue: accountService },
                { provide: TwoFAService, useValue: twoFAService },
                { provide: GenericRepoService, useFactory: () => genericRepo },
                { provide: AuthenticationService, useValue: authenticationService },
                { provide: CurrentUserService, useValue: currentUserService },
                { provide: UserRoles, useFactory: () => userRoles },
                { provide: AuthChannelService, useFactory: () => authChannel },
                { provide: AddMissingInformationService, useFactory: () => addMissingInformationService },
                { provide: SuspendedAccountService, useFactory: () => suspendedAccountService },
                { provide: StateService, useFactory: () => state }
            ]
        });
        service = TestBed.inject(MultiFactorAuthenticationService);

        authenticationService.profile.and.returnValue(Promise.resolve(loginResponse));

    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });


    describe('getAccountInfo', () => {
        it('should check getAccountInfo should invoke getAccountInformation2fa from accountService', () => {
            service.getAccountInfo();

            expect(accountService.getAccountInformation2fa).toHaveBeenCalled();
        });
    });

    describe('authenticateUser', () => {
        it('should activate user after completing mfa', async () => {
            await service.authenticateUser();

            expect(authenticationService.profile).toHaveBeenCalled();
            expect(currentUserService.updateCurrentUser).toHaveBeenCalledWith(loginResponse);
            expect(authChannel.logIn).toHaveBeenCalledWith(loginResponse);
        });
    });

    describe('sendCode', () => {
        it('should call sendVerificationCode', waitForAsync(() => {
            service.sendCode({ to: '' } as any).then(res => {
                expect(res).toEqual(result);
            });
        }));
    });

    describe('validateCode', () => {
        it('should call validateCode', waitForAsync(() => {
            service.validateCode({ to: '' } as any).then(res => {
                expect(res).toEqual(result);
            });
        }));
    });

    describe('verifySecurityQuestionResponse', () => {
        it('should call validateSecurityAnswer', waitForAsync(() => {
            twoFAService.validateSecurityAnswer.and.resolveTo(result);

            service.verifySecurityQuestionResponse('test').then(res => {
                expect(res).toEqual(result);
            });
        }));
    });

    describe('handleRedirects', () => {
        it('should call suspendedAccountService.getFirstSuspendedAccountState() and state.go()', async () => {
            authenticationService.isAuthorized.and.returnValue(true);
            suspendedAccountService.getFirstSuspendedAccountState.and.returnValue(Promise.resolve(''));

            await service.handleRedirects({
                passwordNeedsReset: false,
                emailIsMissing: false,
                securityQuestionIsMissing: false,
                invalidAccountSource: false
            });

            expect(suspendedAccountService.getFirstSuspendedAccountState).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledTimes(1);

        });
        it('should not call suspendedAccountService.getFirstSuspendedAccountState() and state.go()', async () => {
            authenticationService.isAuthorized.and.returnValue(false);

            await service.handleRedirects({
                passwordNeedsReset: true,
                emailIsMissing: false,
                securityQuestionIsMissing: false,
                invalidAccountSource: true
            });

            expect(suspendedAccountService.getFirstSuspendedAccountState).toHaveBeenCalledTimes(0);

        });
        it('should call state.go with LoginStates.AddMissingInformation', async () => {
            const apiAuthResponse = {
                passwordNeedsReset: true,
                emailIsMissing: true,
                securityQuestionIsMissing: true,
                invalidAccountSource: false
            };

            await service.handleRedirects(apiAuthResponse);

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(LoginStates.AddMissingInformation);
        });
        it('should call state.go with accountDashboardStates.Frame', async () => {
            const apiAuthResponse = {
                passwordNeedsReset: false,
                emailIsMissing: true,
                securityQuestionIsMissing: true,
                invalidAccountSource: false
            };

            await service.handleRedirects(apiAuthResponse);

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(accountDashboardStates.Frame);
        });

    });
});
