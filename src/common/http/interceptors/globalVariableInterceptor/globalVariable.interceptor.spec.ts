import { HttpClient, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { stateNames as LoginStates } from 'login/constants';
import { GlobalVariableInterceptor } from './globalVariable.interceptor';
import { WebStorageConst } from '../../../../constants/webstorage.constants';
import { SERVER_CONSTANTS } from '../../../upgrades';
import { BehaviorSubject } from 'rxjs';
import {
    GlobalVariableService,
    CurrentUserService,
    WebStorageService
} from '../../../services';

describe('GlobalVariableInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;
    let mockGlobalVariableService: any;
    let mockWebStorageConst: any;
    let mockWebStorage: any;
    const mockServerConstants = {
        latestWebUiVersionHeaderKey: 'key'
    };

    beforeEach(() => {
        currentUserService = jasmine.createSpyObj('currentUserService', ['updateCurrentUser', 'getCurrentUser']);
        mockGlobalVariableService = {
            currentBalance: new BehaviorSubject<any>(undefined)
        };
        mockWebStorageConst = {
            currentBalance: 'currentBalance',
            currentPaymentPlanBalance: 'currentPaymentPlanBalance'
        };
        mockWebStorage = {
            setKeyValue: jasmine.createSpy('setKeyValue'),
            removeEntry: jasmine.createSpy('removeEntry')
        };

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: GlobalVariableInterceptor,
                    multi: true
                },
                {
                    provide: CurrentUserService,
                    useFactory: () => currentUserService
                },
                {
                    provide: WebStorageConst,
                    useFactory: () => mockWebStorageConst
                },
                {
                    provide: GlobalVariableService,
                    useFactory: () => mockGlobalVariableService
                },
                {
                    provide: WebStorageService,
                    useValue: mockWebStorage
                },
                {
                    provide: SERVER_CONSTANTS,
                    useValue: mockServerConstants
                }
            ],
        });

        client = TestBed.inject(HttpClient);
        controller = TestBed.inject(HttpTestingController);
    });

    it('should be defined', () => {
        expect(GlobalVariableInterceptor).toBeDefined();
    });

    it('should not perform side-effects', (done) => {
        const body = {};

        client.get('/test').subscribe(
            response => {
                expect(mockWebStorage.setKeyValue).not.toHaveBeenCalled();
                expect(mockWebStorage.removeEntry).not.toHaveBeenCalled();
                expect(currentUserService.updateCurrentUser).not.toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should not perform side-effects', (done) => {
        const body = { currentBalanceObj: 'test' };

        client.get('/test').subscribe(
            response => {
                expect(mockWebStorage.setKeyValue).not.toHaveBeenCalled();
                expect(mockWebStorage.removeEntry).not.toHaveBeenCalled();
                expect(currentUserService.updateCurrentUser).not.toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should not call removeEntry', (done) => {
        const body = {
            currentBalanceObj: {
                currentBalance: null
            }
        };

        client.get('/test').subscribe(
            response => {
                expect(mockWebStorage.setKeyValue).not.toHaveBeenCalled();
                expect(mockWebStorage.removeEntry).not.toHaveBeenCalled();
                expect(currentUserService.updateCurrentUser).not.toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should call removeEntry', (done) => {
        const body = {
            currentBalanceObj: {
                currentBalance: undefined
            }
        };

        client.get('/test').subscribe(
            response => {
                expect(mockWebStorage.setKeyValue).not.toHaveBeenCalled();
                expect(mockWebStorage.removeEntry).not.toHaveBeenCalled();
                expect(currentUserService.updateCurrentUser).not.toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should update current balance but not current user', (done) => {
        const body = {
            currentBalanceObj: {
                currentBalance: '2000'
            }
        };

        currentUserService.getCurrentUser.and.returnValue(undefined);

        client.get('/test').subscribe(
            response => {
                mockGlobalVariableService.currentBalance.subscribe((data) => {
                    expect(data).toEqual('2000');
                });
                expect(mockWebStorage.setKeyValue).toHaveBeenCalled();
                expect(mockWebStorage.removeEntry).not.toHaveBeenCalled();
                expect(currentUserService.getCurrentUser).toHaveBeenCalled();
                expect(currentUserService.updateCurrentUser).not.toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should update current balance but not current user', (done) => {
        const body = {
            currentBalanceObj: {
                currentBalance: '2000'
            }
        };

        currentUserService.getCurrentUser.and.returnValue({
            currentBalanceObj: {
                currentBalance: '2000'
            }
        });

        client.get('/test').subscribe(
            response => {
                mockGlobalVariableService.currentBalance.subscribe((data) => {
                    expect(data).toEqual('2000');
                });
                expect(mockWebStorage.setKeyValue).toHaveBeenCalled();
                expect(mockWebStorage.removeEntry).not.toHaveBeenCalled();
                expect(currentUserService.getCurrentUser).toHaveBeenCalled();
                expect(currentUserService.updateCurrentUser).not.toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should update current balance and current user', (done) => {
        const body = {
            currentBalanceObj: {
                currentBalance: '3000'
            }
        };

        currentUserService.getCurrentUser.and.returnValue({
            currentBalanceObj: {
                currentBalance: '2000'
            }
        });

        client.get('/test').subscribe(
            response => {
                mockGlobalVariableService.currentBalance.subscribe((data) => {
                    expect(data).toEqual('3000');
                });
                expect(mockWebStorage.setKeyValue).toHaveBeenCalled();
                expect(mockWebStorage.removeEntry).not.toHaveBeenCalled();
                expect(currentUserService.getCurrentUser).toHaveBeenCalled();
                expect(currentUserService.updateCurrentUser).toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should call webStorage.removeEntry and update current user', (done) => {
        const body = {
            currentPaymentPlanBalanceObj: {
                currentBalance: undefined
            }
        };

        client.get('/test').subscribe(
            response => {
                expect(mockWebStorage.setKeyValue).not.toHaveBeenCalled();
                expect(mockWebStorage.removeEntry).toHaveBeenCalledWith(mockWebStorageConst.currentPaymentPlanBalance);
                expect(currentUserService.updateCurrentUser).toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });

    it('should call webStorage.setKeyValue and update current user', (done) => {
        const body = {
            currentPaymentPlanBalanceObj: {
                currentBalance: '2000'
            }
        };

        client.get('/test').subscribe(
            response => {
                expect(mockWebStorage.setKeyValue).toHaveBeenCalledWith(mockWebStorageConst.currentPaymentPlanBalance, '2000');
                expect(mockWebStorage.removeEntry).not.toHaveBeenCalled();
                expect(currentUserService.updateCurrentUser).toHaveBeenCalled();
                done();
            }
        );

        const request = controller.expectOne('/test');
        request.flush(body, { status: 200, statusText: 'Ok' });
    });
});
