import { TestBed, waitForAsync } from '@angular/core/testing';
import { DeliveryMethodApiService } from './delivery-method-api.service';
import { HttpService, ResponseErrorService, ToasterService } from 'common/services';

describe('DeliveryMethodApiService', () => {
    let service: DeliveryMethodApiService;
    let httpService: jasmine.SpyObj<HttpService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let toasterService: jasmine.SpyObj<ToasterService>;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['post']);
        responseErrorService = jasmine.createSpyObj('ResponseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);
        toasterService = jasmine.createSpyObj('ToasterService', ['show']);

        TestBed.configureTestingModule({
            providers: [
                DeliveryMethodApiService,
                { provide: HttpService, useValue: httpService },
                { provide: ResponseErrorService, useValue: responseErrorService },
                { provide: ToasterService, useValue: toasterService }
            ]
        });

        service = TestBed.inject(DeliveryMethodApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('updateMailingInfo', () => {
        it('should call responseErrorService.displayAlertsFromResponse and return response', waitForAsync(() => {
            const response: any = { response: 'test' };

            httpService.post.and.resolveTo(response);
            responseErrorService.isErrorFree.and.returnValue(true);
            responseErrorService.displayAlertsFromResponse.and.resolveTo([]);

            service.updateMailingInfo({
                internationalAddress: '',
                country: '',
                state: '',
                address1: '',
                address2: '',
                city: '',
                zip: ''
            }).then(res => {
                expect(httpService.post).toHaveBeenCalled();
                expect(responseErrorService.isErrorFree).toHaveBeenCalled();
                expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
                expect(res).toEqual(response);
            });
        }));

        it('should call toasterService.show return nothing', waitForAsync(() => {
            const response: any = { errors: [{ message: 'test' }] };

            httpService.post.and.resolveTo(response);
            responseErrorService.isErrorFree.and.returnValue(false);
            toasterService.show.and.returnValue({} as any);

            service.updateMailingInfo({
                internationalAddress: '',
                country: '',
                state: '',
                address1: '',
                address2: '',
                city: '',
                zip: ''
            }).then(res => {
                expect(httpService.post).toHaveBeenCalled();
                expect(responseErrorService.isErrorFree).toHaveBeenCalled();
                expect(responseErrorService.displayAlertsFromResponse).not.toHaveBeenCalled();
                expect(toasterService.show).toHaveBeenCalled();
                expect(res).toBeUndefined();
            });
        }));
    });
});