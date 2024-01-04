import { TestBed } from '@angular/core/testing';
import { IMailingInfo } from 'common/models';
import { AccountService } from 'common/services';
import { } from 'jasmine';
import { lastValueFrom, of } from 'rxjs';
import { DeliveryMethodService } from './delivery-method.service';


describe('Delivery method Service', () => {

    let deliveryMethodService: DeliveryMethodService;
    let accountServiceSpy: jasmine.SpyObj<AccountService>;
    const mailingInfo = {} as IMailingInfo;

    beforeEach(() => {

        accountServiceSpy = jasmine.createSpyObj('accountService', ['getMailingInfo']);

        const ob = of(mailingInfo);
        const promise = lastValueFrom<IMailingInfo>(ob);

        accountServiceSpy.getMailingInfo.and.returnValue(promise);

        TestBed.configureTestingModule({
            providers: [
                DeliveryMethodService,
                { provide: AccountService, useFactory: () => accountServiceSpy }
            ]
        });

        deliveryMethodService = TestBed.inject(DeliveryMethodService);

    });

    it('checks if the service is initialized', async () => {
        expect(deliveryMethodService).toBeDefined();
    });

    it('gets the mailing info', async () => {

        const res = await deliveryMethodService.getMailingInfo();
        expect(res).toEqual(mailingInfo);
        expect(accountServiceSpy.getMailingInfo).toHaveBeenCalled();
    });

});