

import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { FaqApiService } from './faq-api.service';
import { HttpService, ResponseErrorService } from 'common/services';

describe('Faq pagination event Service', () => {

    let service: FaqApiService;
    let responseErrorServiceSpy: jasmine.SpyObj<ResponseErrorService>;
    let httpServiceSpy: jasmine.SpyObj<HttpService>;

    beforeEach(() => {
        responseErrorServiceSpy = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);
        httpServiceSpy = jasmine.createSpyObj('http', ['post']);


        TestBed.configureTestingModule({
            providers: [
                FaqApiService,
                { provide: ResponseErrorService, useFactory: () => responseErrorServiceSpy },
                { provide: HttpService, useFactory: () => httpServiceSpy },

            ]
        });

        service = TestBed.inject(FaqApiService);

    });

    it('defines the service', () => {
        expect(service).toBeDefined();
    });

    it('call api loadArchivePage', async () => {
        const url = '/api/sessions/Article/LoadArchivePage';
        await service.loadArchivePage({});
        expect(httpServiceSpy.post).toHaveBeenCalledWith(url, {});
    });

    it('call api executeCmsPaging', async () => {
        const url = 'api/sessions/Article/ExecuteCmsPaging';
        await service.executeCmsPaging({});
        expect(httpServiceSpy.post).toHaveBeenCalledWith(url, {});

    });

});
