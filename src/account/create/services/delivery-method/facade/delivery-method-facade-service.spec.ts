
import { TestBed } from '@angular/core/testing';
import { IMailingInfo } from 'common/models';
import { } from 'jasmine';
import { DeliveryMethodApiService } from '../api/delivery-method-api.service';
import { DeliveryMethodFacadeService } from './delivery-method-facade-service';

describe('Delivery method Facade Service', () => {

    let deliveryMethodFacadeService: DeliveryMethodFacadeService;
    let deliveryMethodApiServiceSpy: jasmine.SpyObj<DeliveryMethodApiService>;


    beforeEach(() => {

        deliveryMethodApiServiceSpy = jasmine.createSpyObj('api', ['updateMailingInfo']);


        TestBed.configureTestingModule({
            providers: [
                DeliveryMethodFacadeService,
                { provide: DeliveryMethodApiService, useFactory: () => deliveryMethodApiServiceSpy },
            ]
        });

        deliveryMethodFacadeService = TestBed.inject(DeliveryMethodFacadeService);

    });

    it('checks if the service is initialized', () => {
        expect(deliveryMethodFacadeService).toBeDefined();
    });

    it('updates mailing info', async () => {
        const mailingInfo = {
            internationalAddress: false,
            country: 'test',
            state: 'test',
            address1: 'test',
            address2: 'test',
            city: 'test',
            zip: 'test'
        } as IMailingInfo;

        await deliveryMethodFacadeService.updateMailingInfo(mailingInfo);
        expect(deliveryMethodApiServiceSpy.updateMailingInfo).toHaveBeenCalled();
        expect(deliveryMethodApiServiceSpy.updateMailingInfo).toHaveBeenCalledWith(mailingInfo);
    });

});

