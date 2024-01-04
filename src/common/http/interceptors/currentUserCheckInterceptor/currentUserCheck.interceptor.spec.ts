import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { WindowRef } from '../../../providers';
import { CurrentUserService } from '../../../services';
import { CurrentUserCheckInterceptor } from './currentUserCheck.interceptor';

describe('CurrentUserCheckInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;
    let currentUserService: jasmine.SpyObj<CurrentUserService>;
    let windowMock: any;

    beforeEach(() => {
        currentUserService = jasmine.createSpyObj('currentUserService', ['currentUserIsInSyncAcrossTabs']);
        windowMock = {
            location: {
                reload: jasmine.createSpy('reload')
            }
        };

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: CurrentUserCheckInterceptor,
                    multi: true
                },
                {
                    provide: CurrentUserService,
                    useFactory: () => currentUserService
                },
                {
                    provide: WindowRef,
                    useValue: windowMock
                }
            ],
        });

        client = TestBed.inject(HttpClient);
        controller = TestBed.inject(HttpTestingController);
    });

    it('should not call window.location.reload', () => {
        currentUserService.currentUserIsInSyncAcrossTabs.and.returnValue(true);
        client.put('/test', {}).toPromise().then(() => {
            expect(windowMock.location.reload).not.toHaveBeenCalled();
        });
    });

    it('should call window.location.reload', () => {
        currentUserService.currentUserIsInSyncAcrossTabs.and.returnValue(false);
        client.put('/test', {}).toPromise().then(() => {
            expect(windowMock.location.reload).toHaveBeenCalled();
        });
    });
});
