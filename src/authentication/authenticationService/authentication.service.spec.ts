import { AddMissingInformationService } from 'authentication/addMissingInformationService/addMissingInformation.service';
import { AuthChannelService } from 'authentication/authChannelService/authChannel.service';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { IsInvoicedService, ResponseErrorService } from 'common/services';
import { userRoles } from 'constants/module';
import { } from 'jasmine';
import { of } from 'rxjs';
import { delay, reduce, take } from 'rxjs/operators';
import { SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';


describe('authenticationService', () => {

    let service: AuthenticationService;
    let genericRepo;
    let session;
    let addMissingInformationService: jasmine.SpyObj<AddMissingInformationService>;
    let suspendedAccountService: jasmine.SpyObj<SuspendedAccountService>;
    let isInvoicedService: jasmine.SpyObj<IsInvoicedService>;
    let authChannel: AuthChannelService;
    let currentUser;
    let responseErrorService: ResponseErrorService;
    let translationService;
    let errorDisplayService;
    let stateService;
    let storefrontUtilityService: any;

    beforeEach(() => {

        genericRepo = {
            dataFactory: {
                login: jasmine.createSpy('login'),
                logout: jasmine.createSpy('logout'),
                profile: jasmine.createSpy('profile')
            }
        };
        session = jasmine.createSpyObj('session', ['create', 'destroy']);
        addMissingInformationService = jasmine.createSpyObj('addMissingInformation', [
            'isMissingInfo',
            'setMissingInformation',
            'destroyMissingInformationFlags',
            'setProfileCallHasOccured']);
        suspendedAccountService = jasmine.createSpyObj('suspendedAccountService', ['destroySuspendedWizardInformation']);
        isInvoicedService = jasmine.createSpyObj('isInvoicedService', ['setAccountInvoiced', 'removeAccountInvoiced']);
        authChannel = jasmine.createSpyObj('authChannel', ['logOut']);
        currentUser = jasmine.createSpyObj('currentUser', ['destroyCurrentUser', 'updateCurrentUser']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse']);
        translationService = {
            isReadyEventPromise: true
        };
        storefrontUtilityService = {
            isRunningAsKiosk: false
        };

        service = new AuthenticationService(
            genericRepo,
            session,
            userRoles,
            addMissingInformationService,
            suspendedAccountService,
            isInvoicedService,
            authChannel,
            currentUser,
            responseErrorService,
            translationService,
            errorDisplayService,
            stateService,
            storefrontUtilityService
        );
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('login', () => {

        let fakeResponse;

        beforeEach(() => {

            fakeResponse = {
                errors: [],
                passwordNeedsReset: true,
                emailIsMissing: true,
                securityQuestionIsMissing: true,
                newAccountStep: {
                    currentStep: 'fake step'
                },
                isInvoiced: true,
                acctId: 'fake account id',
                acctActivity: 'fake account activity',
                isFlexPay: true,
                rebillOptIn: false
            };

            addMissingInformationService.isMissingInfo.and.returnValue('fake missing information' as any);
            genericRepo.dataFactory.login.and.returnValue(fakeResponse);
        });

        it('should call api.login with the passed credentials', () => {

            service.login('fake credentials' as any);

            expect(genericRepo.dataFactory.login).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.login).toHaveBeenCalledWith('fake credentials');
        });

        it('should display errors when response has errors', async () => {

            fakeResponse.errors = [1];

            try {
                await service.login('fake credentials' as any);
            } catch { }

            expect(addMissingInformationService.isMissingInfo).toHaveBeenCalledTimes(0);
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledWith(fakeResponse);
        });

        it('should call addMissingInformationService.isMissingInfo when no errors', async () => {

            await service.login('fake credentials' as any);

            expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(0);
            expect(addMissingInformationService.isMissingInfo).toHaveBeenCalledTimes(1);
            expect(addMissingInformationService.isMissingInfo).toHaveBeenCalledWith(
                true,
                true,
                true);
        });

        it('should call isInvoicedService.setAccountInvoiced with response.isInvoiced', async () => {

            await service.login('fake credentials' as any);

            expect(isInvoicedService.setAccountInvoiced).toHaveBeenCalledTimes(1);
            expect(isInvoicedService.setAccountInvoiced).toHaveBeenCalledWith(true);
        });

        it('should call session.create with response.acctId, response.acctActivity, curStep, loginInformationIsMissing', async () => {

            await service.login('fake credentials' as any);

            expect(session.create).toHaveBeenCalledTimes(1);
            expect(session.create).toHaveBeenCalledWith(
                'fake account id',
                'fake account activity',
                'fake step',
                'fake missing information',
                undefined
            );
        });

        it('should call session.create with response.acctId, response.acctActivity, 0, loginInformationIsMissing when newAccountStep null',
            async () => {


                fakeResponse.newAccountStep = null;
                await service.login('fake credentials' as any);

                expect(session.create).toHaveBeenCalledTimes(1);
                expect(session.create).toHaveBeenCalledWith(
                    'fake account id',
                    'fake account activity',
                    0,
                    'fake missing information',
                    undefined
                );
            });

        it('should return response', async () => {

            const result = await service.login('fake credentials' as any);

            expect(result).toBe(fakeResponse);
        });

        it('should include FlexPay data in the response', async () => {
            const result = await service.login('fake credentials' as any);

            expect(result).toBe(fakeResponse);
            expect(result.isFlexPay).withContext('IsFlexPay failed').toBeTrue();
            expect(result.rebillOptIn).withContext('RebillOptIn failed').toBeFalse();
        });
    });

    describe('logout', () => {

        it('should call api.logout', () => {

            genericRepo.dataFactory.logout.and.returnValue(Promise.resolve('fake response'));

            service.logout();

            expect(genericRepo.dataFactory.logout).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.logout).toHaveBeenCalledWith();
        });

        it('should return api.logout response', async () => {

            genericRepo.dataFactory.logout.and.returnValue(Promise.resolve('fake response'));

            const result = await service.logout();

            expect(result).toBe('fake response' as any);
        });

        [
            () => Promise.resolve('fake success'),
            () => Promise.reject('fake error')]
            .forEach(promise => {

                it('should finally call addMissingInformationService.destroyMissingInformationFlags', async () => {

                    genericRepo.dataFactory.logout.and.returnValue(promise());

                    try {
                        await service.logout();
                    } catch { }

                    expect(addMissingInformationService.destroyMissingInformationFlags).toHaveBeenCalledTimes(1);
                    expect(addMissingInformationService.destroyMissingInformationFlags).toHaveBeenCalledWith();
                });
            });

        [
            () => Promise.resolve('fake success'),
            () => Promise.reject('fake error')]
            .forEach(promise => {

                it('should finally call suspendedAccountService.destroySuspendedWizardInformation', async () => {

                    genericRepo.dataFactory.logout.and.returnValue(promise());

                    try {
                        await service.logout();
                    } catch { }

                    expect(suspendedAccountService.destroySuspendedWizardInformation).toHaveBeenCalledTimes(1);
                    expect(suspendedAccountService.destroySuspendedWizardInformation).toHaveBeenCalledWith();
                });
            });

        [
            () => Promise.resolve('fake success'),
            () => Promise.reject('fake error')]
            .forEach(promise => {

                it('should finally call isInvoicedService.removeAccountInvoiced', async () => {

                    genericRepo.dataFactory.logout.and.returnValue(promise());

                    try {
                        await service.logout();
                    } catch { }

                    expect(isInvoicedService.removeAccountInvoiced).toHaveBeenCalledTimes(1);
                    expect(isInvoicedService.removeAccountInvoiced).toHaveBeenCalledWith();
                });
            });

        [
            () => Promise.resolve('fake success'),
            () => Promise.reject('fake error')]
            .forEach(promise => {

                it('should finally call session.destroy', async () => {

                    genericRepo.dataFactory.logout.and.returnValue(promise());

                    try {
                        await service.logout();
                    } catch { }

                    expect(session.destroy).toHaveBeenCalledTimes(1);
                    expect(session.destroy).toHaveBeenCalledWith();
                });
            });

        [
            () => Promise.resolve('fake success'),
            () => Promise.reject('fake error')]
            .forEach(promise => {

                it('should finally call currentUser.destroyCurrentUser', async () => {

                    genericRepo.dataFactory.logout.and.returnValue(promise());

                    try {
                        await service.logout();
                    } catch { }

                    expect(currentUser.destroyCurrentUser).toHaveBeenCalledTimes(1);
                    expect(currentUser.destroyCurrentUser).toHaveBeenCalledWith();
                });
            });

        [
            () => Promise.resolve('fake success'),
            () => Promise.reject('fake error')]
            .forEach(promise => {

                it('should finally call authChannel.logOut', async () => {

                    genericRepo.dataFactory.logout.and.returnValue(promise());

                    try {
                        await service.logout();
                    } catch { }

                    expect(authChannel.logOut).toHaveBeenCalledTimes(1);
                    expect(authChannel.logOut).toHaveBeenCalledWith();
                });
            });
    });

    describe('login', () => {

        let fakeResponse;

        beforeEach(() => {

            fakeResponse = {
                errors: [],
                passwordNeedsReset: true,
                emailIsMissing: true,
                securityQuestionIsMissing: true,
                isInvoiced: true,
                acctId: 'fake account id',
                acctActivity: 'fake account activity'
            };

            addMissingInformationService.isMissingInfo.and.returnValue(true);
            genericRepo.dataFactory.profile.and.returnValue(fakeResponse);
        });

        it('should call api.profile with the passed request', async () => {

            await service.profile('fake request' as any);
            expect(genericRepo.dataFactory.profile).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.profile).toHaveBeenCalledWith('fake request');
        });

        it('should return api.profile response', async () => {

            const result = await service.profile('fake request' as any);

            expect(result).toBe(fakeResponse);
        });

        it('should call addMissingInformationService.setProfileCallHasOccured', async () => {

            await service.profile('fake request' as any);

            expect(addMissingInformationService.setProfileCallHasOccured).toHaveBeenCalledTimes(1);
            expect(addMissingInformationService.setProfileCallHasOccured).toHaveBeenCalledWith(true);
        });

        it('should call addMissingInformationService.isMissingInfo', async () => {

            await service.profile('fake request' as any);

            expect(addMissingInformationService.isMissingInfo).toHaveBeenCalledTimes(1);
            expect(addMissingInformationService.isMissingInfo).toHaveBeenCalledWith(
                true,
                true,
                true);
        });

        it('should call addMissingInformationService.setMissingInformation', async () => {

            await service.profile('fake request' as any);

            expect(addMissingInformationService.setMissingInformation).toHaveBeenCalledTimes(1);
            expect(addMissingInformationService.setMissingInformation).toHaveBeenCalledWith(
                true,
                true,
                true);
        });

        it('should call session.create', async () => {

            await service.profile('fake request' as any);

            expect(session.create).toHaveBeenCalledTimes(1);
            expect(session.create).toHaveBeenCalledWith(
                'fake account id',
                'fake account activity',
                null,
                true,
                undefined);
        });

        it('should call currentUser.updateCurrentUser', async () => {

            await service.profile('fake request' as any);

            expect(currentUser.updateCurrentUser).toHaveBeenCalledTimes(1);
            expect(currentUser.updateCurrentUser).toHaveBeenCalledWith(fakeResponse);
        });

        it('should call isInvoicedService.setAccountInvoiced', async () => {

            await service.profile('fake request' as any);

            expect(isInvoicedService.setAccountInvoiced).toHaveBeenCalledTimes(1);
            expect(isInvoicedService.setAccountInvoiced).toHaveBeenCalledWith(true);
        });
    });

    describe('isAuthenticated', () => {

        [
            userRoles.active,
            userRoles.anonymous,
            userRoles.incomplete,
            userRoles.missingRequiredInformation,
            userRoles.pendingClosure,
            userRoles.suspended
        ].forEach(userRole => {
            [1, 2, 3, 4, 999, 1234].forEach(acctId => {

                it('should return true', () => {

                    session.userRole = userRole;
                    session.acctId = acctId;

                    expect(service.isAuthenticated()).toBe(true);
                });
            });
        });

        [
            { userRole: userRoles.active, acctId: 0 },
            { userRole: userRoles.anonymous, acctId: 0 },
            { userRole: userRoles.incomplete, acctId: 0 },
            { userRole: userRoles.missingRequiredInformation, acctId: 0 },
            { userRole: userRoles.pendingClosure, acctId: 0 },
            { userRole: userRoles.suspended, acctId: 0 },
            { userRole: userRoles.notAuthenticated, acctId: 2 },
            { userRole: userRoles.notAuthenticated, acctId: 959 },
            { userRole: userRoles.notAuthenticated, acctId: 0 },
            { userRole: userRoles.notAuthenticatedMf, acctId: 0 }

        ].forEach(({ userRole, acctId }) => {

            it('should return false', () => {

                session.userRole = userRole;
                session.acctId = acctId;

                expect(service.isAuthenticated()).toBe(false);
            });
        });
    });

    describe('isMfaAuthOnly', () => {

        [
            userRoles.active,
            userRoles.anonymous,
            userRoles.incomplete,
            userRoles.missingRequiredInformation,
            userRoles.pendingClosure,
            userRoles.suspended,
            userRoles.notAuthenticated
        ].forEach(userRole => {
            [1, 2, 3, 4, 999, 1234, 0].forEach(acctId => {

                it('should return false', () => {

                    session.userRole = userRole;
                    session.acctId = acctId;

                    expect(service.isMfaAuthOnly()).toBe(false);
                });
            });
        });

        [
            
            { userRole: userRoles.notAuthenticatedMf, acctId: 0 }

        ].forEach(({ userRole, acctId }) => {

            it('should return true', () => {

                session.userRole = userRole;
                session.acctId = acctId;

                expect(service.isMfaAuthOnly()).toBe(true);
            });
        });
    });

    describe('isAuthorized', () => {

        [
            'fake authorized',
            ['fake authorized'],
            ['fake authorized', 'fake unauthorized']
        ].forEach(authorizedRoles => {

            it('should return true', () => {

                session.userRole = 'fake authorized';

                expect(service.isAuthorized(authorizedRoles)).toBe(true);
            });
        });

        [
            null,
            '',
            'fake unauthorized',
            ['fake unauthorized'],
            ['fake unauthorized', 'fake unauthorized b'],
        ].forEach(authorizedRoles => {

            it('should return false', () => {

                session.userRole = 'fake authorized';

                expect(service.isAuthorized(authorizedRoles)).toBe(false);
            });
        });
    });

    describe('isAuthenticated$', () => {

        let isAuthenticatedSpy;

        beforeEach(() => {

            isAuthenticatedSpy = spyOn(service, 'isAuthenticated');
            isAuthenticatedSpy.and.returnValues('fake first' as any, false, true);
            (currentUser as any).authorizationChange$ = of(1, 2, 3).pipe(delay(10));
        });

        it('should emit isAuthenticated at least once', async () => {

            expect(
                await service.isAuthenticated$.pipe(take(1)).toPromise()
            ).toBe('fake first' as any);
        });

        it('should emit isAuthenticated multiple times', async () => {

            expect(
                await service.isAuthenticated$.pipe(
                    take(3),
                    reduce((acc, curr) => [...acc, curr], [])).toPromise()
            ).toEqual(['fake first' as any, false, true]);
        });
    });
});
