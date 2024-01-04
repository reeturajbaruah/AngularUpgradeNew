import { HttpClient, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { HttpMessageInterceptor } from './httpMessage.interceptor';
import { stateNames as LoginStates } from 'login/constants';
import { AUTH_EVENTS } from '../../../upgrades';
import { SessionService } from '../../../services/session/session.service';

describe('HttpMessageInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;
    let sessionService: jasmine.SpyObj<SessionService>;
    let stateService: jasmine.SpyObj<StateService>;
    const authEvents = {
        notAuthenticated: 'notAuthenticated',
        notAuthorized: 'notAuthorized'
    };
    let mockRootScope: any;

    beforeEach(() => {
        sessionService = jasmine.createSpyObj('sessionService', ['destroy']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
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
                    useClass: HttpMessageInterceptor,
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
                    provide: AUTH_EVENTS,
                    useValue: authEvents
                },
            ],
        });

        client = TestBed.inject(HttpClient);
        controller = TestBed.inject(HttpTestingController);
    });

    it('should be defined', () => {
        expect(HttpMessageInterceptor).toBeDefined();
    });

    it('should call broadcast with sessionTimedOut', (done) => {
        const body = {};

        client.get('/test').subscribe({
            error: () => {
                expect(mockRootScope.$broadcast).toHaveBeenCalledWith(authEvents.notAuthenticated);
                expect(sessionService.destroy).toHaveBeenCalled();
                expect(stateService.go).toHaveBeenCalledWith(LoginStates.Login);
                done();
            }
        });

        const request = controller.expectOne('/test');
        request.flush(body, { status: 401, statusText: 'Unauthorized' });
    });

    it('should call broadcast with notAuthorized', (done) => {
        const body = {};

        client.get('/test').subscribe({
            error: () => {
                expect(mockRootScope.$broadcast).toHaveBeenCalledWith(authEvents.notAuthorized);
                expect(sessionService.destroy).toHaveBeenCalled();
                expect(stateService.go).toHaveBeenCalledWith(LoginStates.Login);
                done();
            }
        });

        const request = controller.expectOne('/test');
        request.flush(body, { status: 403, statusText: 'Forbidden' });
    });
});
