import { HttpClient, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { AuthInterceptor } from './auth.interceptor';
import { stateNames as LoginStates } from 'login/constants';
import { SessionService } from '../../../services/session/session.service';
import { CurrentUserService } from '../../../services/currentUserService/currentUser.service';
import { AuthChannelService } from '../../../../authentication/authChannelService/authChannel.service';
import { AUTH_EVENTS } from '../../../upgrades';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

describe('AuthInterceptorInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;
    let sessionService: jasmine.SpyObj<SessionService>;
    let stateService: jasmine.SpyObj<StateService>;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;
    let authChannelService: jasmine.SpyObj<AuthChannelService>;
    const authEvents = {
        sessionTimedOut: 'sessionTimedOut',
        securityIssue: 'securityIssue'
    };
    let mockStorefrontUtility: any;
    let mockRootScope: any;

    beforeEach(() => {
        sessionService = jasmine.createSpyObj('sessionService', ['destroy']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        currentUserService = jasmine.createSpyObj('currentUserService', ['destroyCurrentUser']);
        authChannelService = jasmine.createSpyObj('authChannelService', ['logOut']);
        mockStorefrontUtility = {
            isRunningAsKiosk: true,
        };
        mockRootScope = {
            $broadcast: jasmine.createSpy('$broadcast')
        };

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                },
                {
                    provide: '$rootScope',
                    useValue: mockRootScope
                },
                {
                    provide: SessionService,
                    useFactory: () => sessionService
                },
                {
                    provide: StateService,
                    useFactory: () => stateService
                },
                {
                    provide: CurrentUserService,
                    useFactory: () => currentUserService
                },
                {
                    provide: AuthChannelService,
                    useFactory: () => authChannelService
                },
                {
                    provide: AUTH_EVENTS,
                    useValue: authEvents
                },
                {
                    provide: StorefrontUtilityService,
                    useValue: mockStorefrontUtility
                }
            ],
        });

        client = TestBed.inject(HttpClient);
        controller = TestBed.inject(HttpTestingController);
    });

    it('should be defined', () => {
        expect(AuthInterceptor).toBeDefined();
    });

    it('should call broadcast with sessionTimedOut', (done) => {
        const body = { sessionTimedOut: true };

        client.get('/test').subscribe(
            response => {
                expect(mockRootScope.$broadcast).toHaveBeenCalledWith(authEvents.sessionTimedOut);
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should call broadcast with securityIssue', (done) => {
        const body = { securityIssue: true };

        client.get('/test').subscribe(
            response => {
                expect(mockRootScope.$broadcast).toHaveBeenCalledWith(authEvents.securityIssue);
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should not call broadcast with sessionTimeOut and securityIssue', (done) => {
        const body = { sessionTimedOut: true };

        client.get('/test').subscribe(
            response => {
                expect(sessionService.destroy).toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should not call broadcast with sessionTimeOut and securityIssue', (done) => {
        const body = { sessionTimedOut: true };
        mockStorefrontUtility.isRunningAsKiosk = false;

        client.get('/test').subscribe(
            response => {
                expect(sessionService.destroy).toHaveBeenCalled();
                expect(currentUserService.destroyCurrentUser).toHaveBeenCalled();
                expect(authChannelService.logOut).toHaveBeenCalled();
                expect(stateService.go).toHaveBeenCalledWith(LoginStates.Login);
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });
});
