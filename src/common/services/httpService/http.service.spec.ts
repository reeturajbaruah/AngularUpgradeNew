import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { SERVER_CONSTANTS } from '../../upgrades';
import { HttpService } from './http.service';
import { of, throwError } from 'rxjs';

describe('HttpService', () => {
    let httpService: HttpService;
    let httpClient: jasmine.SpyObj<HttpClient>;
    let stateService: jasmine.SpyObj<StateService>;
    let serverConstants: jasmine.SpyObj<any>;

    beforeEach(() => {
        httpClient = jasmine.createSpyObj('httpClient', ['post', 'get']);
        stateService = jasmine.createSpyObj('StateService', null, { current: { name: 'test' } });
        serverConstants = jasmine.createSpyObj('serverConstants', null, { currentlyDownloadedWebUiVersion: 'test' });

        TestBed.configureTestingModule({
            providers: [
                HttpService,
                {
                    provide: HttpClient,
                    useValue: httpClient
                },
                {
                    provide: StateService,
                    useValue: stateService
                },
                {
                    provide: SERVER_CONSTANTS,
                    useValue: serverConstants
                }
            ]
        });

        httpService = TestBed.inject(HttpService);
    });

    it('should be defined', () => {
        expect(HttpService).toBeDefined();
    });

    describe('post success', () => {
        beforeEach(() => {
            httpClient.post.and.returnValue(of({}));
        });

        it('should call post', waitForAsync(() => {
            httpService.post('/test', {}).then(res => {
                expect(res).toEqual({});
                expect(httpClient.post).toHaveBeenCalled();
            });
        }));
    });

    describe('post error', () => {
        beforeEach(() => {
            httpClient.post.and.returnValue(throwError(() => new Error('error')));
        });

        it('should throw error', waitForAsync(() => {
            httpService.post('/test', {}).then(res => {
                expect(res).toBeUndefined();
            });
        }));
    });

    describe('get success', () => {
        beforeEach(() => {
            httpClient.get.and.returnValue(of({}));
        });

        it('should call get', waitForAsync(() => {
            httpService.get('/test').then(res => {
                expect(res).toEqual({});
                expect(httpClient.get).toHaveBeenCalled();
            });
        }));
    });

    describe('get error', () => {
        beforeEach(() => {
            httpClient.get.and.returnValue(throwError(() => new Error('error')));
        });

        it('should throw error', waitForAsync(() => {
            httpService.get('/test').then(res => {
                expect(res).toBeUndefined();
            });
        }));
    });
});

