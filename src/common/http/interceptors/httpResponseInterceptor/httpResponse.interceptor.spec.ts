import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { HttpService, ResponseErrorService } from 'common/services';
import { ToggleButtonsService } from '../../../services/toggleButtons/toggleButtons.service';
import { HttpResponseInterceptor } from './httpResponse.interceptor';

describe('HttpResponseInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;
    let toggleButtonsService: jasmine.SpyObj<ToggleButtonsService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;

    beforeEach(() => {
        toggleButtonsService = jasmine.createSpyObj('toggleButtonsService', ['enableButtonsGlobal']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['handleMaintenanceErrors']);

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpResponseInterceptor,
                    multi: true
                },
                {
                    provide: ToggleButtonsService,
                    useFactory: () => toggleButtonsService,
                    multi: true
                },
                {
                    provide: ResponseErrorService,
                    useFactory: () => responseErrorService,
                    multi: true
                }
            ],
        });

        client = TestBed.inject(HttpClient);
        controller = TestBed.inject(HttpTestingController);
    });

    it('should be defined', () => {
        expect(HttpResponseInterceptor).toBeDefined();
    });

});
