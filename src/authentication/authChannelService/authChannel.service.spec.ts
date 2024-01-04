import { } from 'jasmine';
import { authEvents } from 'constants/module';
import { AuthChannelService } from './authChannel.service';
import { CurrentUserService } from 'common/services/currentUserService/currentUser.service';
import { AccountSummaryAlertFilterService } from 'common/services';

describe('authChannelService', () => {

    let service: AuthChannelService;
    let accountSummaryAlertFilterService: jasmine.SpyObj<AccountSummaryAlertFilterService>;
    let currentUserService: CurrentUserService;
   
    beforeEach(() => {
       
        currentUserService = jasmine.createSpyObj('currentUser', ['destroyCurrentUser', 'updateCurrentUser']);
        accountSummaryAlertFilterService = jasmine.createSpyObj('AccountSummaryAlertFilterService', ['removeAccountSummaryAlerts']);
        service = new AuthChannelService(accountSummaryAlertFilterService, currentUserService);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('logIn', () => {

        it(`should call currentUserService.updateCurrentUser() with param passed in `, async () => {
            //Assemble
            const response = { hi: 'there' };

            //Act
            service.logIn(response);

            //Assert
            expect((currentUserService.updateCurrentUser as jasmine.Spy)).toHaveBeenCalledOnceWith(response);
        });

        it(`should set service.authEventStatuses loginSuccess with param passed in and logoutSuccess to false`, async () => {
            //Assemble
            const response = { hi: 'there' };

            //Act
            service.logIn(response);

            //Assert
            service.authEventStatuses[authEvents.loginSuccess].subscribe(loginSuccess =>
                expect(loginSuccess).toEqual(response)
            );
            service.authEventStatuses[authEvents.logoutSuccess].subscribe(logoutSuccess =>
                expect(logoutSuccess).toEqual(false)
            );
        });
    });
    describe('logOut', () => {
        it('should call destroyCurrentUser() 5 times', () => {
            const spy = jasmine.createSpy('destroyCurrentUser');

            [authEvents.logoutSuccess,
            authEvents.sessionTimedOut,
            authEvents.securityIssue,
            authEvents.notAuthorized,
            authEvents.notAuthenticated
            ].forEach(authEvent => {
                service.authEventStatuses[authEvent]
                    .subscribe(spy());
            });
            expect(spy).toHaveBeenCalledTimes(5);
        });

        it(`should set service.authEventStatuses loginSuccess with param passed in and logoutSuccess to true`, async () => {
            //Act
            service.logOut();

            //Assert
            service.authEventStatuses[authEvents.loginSuccess].subscribe(loginSuccess =>
                expect(loginSuccess).toBeUndefined()
            );
            service.authEventStatuses[authEvents.logoutSuccess].subscribe(logoutSuccess =>
                expect(logoutSuccess).toEqual(true)
            );
        });

    });
   
});
