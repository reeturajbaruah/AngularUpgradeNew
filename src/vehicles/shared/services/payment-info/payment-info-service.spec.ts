import { TestBed, waitForAsync } from '@angular/core/testing';
import { PaymentInfoService } from './payment-info-service';
import { WebApiService } from '../webapi/webApi.service';
import { WebStorageService } from 'common/services';
import { WebStorageConst } from 'constants/module';

describe('PaymentInfoService', () => {
    let service: PaymentInfoService;
    let webApiService: jasmine.SpyObj<WebApiService>;
    let webStorageService: jasmine.SpyObj<WebStorageService>;
    let webStorageConst: jasmine.SpyObj<WebStorageConst>;
    const result: any = {};

    beforeEach(() => {
        webApiService = jasmine.createSpyObj('WebApiService', ['calculateActivationFee']);
        webStorageService = jasmine.createSpyObj('WebStorageService', ['getValue']);
        webStorageConst = jasmine.createSpyObj('WebStorageConst', null, { currentBalance: null });

        webApiService.calculateActivationFee.and.resolveTo(result);

        TestBed.configureTestingModule({
            providers: [
                PaymentInfoService,
                { provide: WebApiService, useValue: webApiService },
                { provide: WebStorageService, useValue: webStorageService },
                { provide: WebStorageConst, useValue: webStorageConst }
            ]
        });
        service = TestBed.inject(PaymentInfoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getPaymentInfo', () => {
        it('should call calculateActivationFee', waitForAsync(() => {
            webApiService.calculateActivationFee.and.resolveTo({} as any);

            service.getPaymentInfo([]).then(res => {
                expect(webApiService.calculateActivationFee).toHaveBeenCalled();
            });
        }));
    });

    describe('getCurrentBalance', () => {
        it('should return obj', () => {
            webStorageService.getValue.and.returnValue({ test: '' });

            const currBalance = service.getCurrentBalance();

            expect(currBalance).toEqual({ test: '' });
        });
    });
});
