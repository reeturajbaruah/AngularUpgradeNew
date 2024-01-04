import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { PendingFundsApiService } from '../api/pending-funds-api.service';
import { PendingFundsFacadeService } from './pending-funds-facade.service';

describe('PendingFunds Facade Service', () => {

    let pendingFundsFacadeService: PendingFundsFacadeService;
    let pendingFundsApiServiceSpy: jasmine.SpyObj<PendingFundsApiService>;

    beforeEach(() => {
        pendingFundsApiServiceSpy = jasmine.createSpyObj('pendingFundsApiServiceSpy', ['rebillAmt','updateAccount']);

        TestBed.configureTestingModule({
            providers: [
                PendingFundsFacadeService,
                { provide: PendingFundsApiService, useFactory: () => pendingFundsApiServiceSpy },
            ]
        });

        pendingFundsFacadeService = TestBed.inject(PendingFundsFacadeService);
    });

    it('should call getRebillAmt method of Rebill Facade Service', async () => {
        pendingFundsApiServiceSpy.rebillAmt.and.returnValue(Promise.resolve({ rebillAmount: 10} as any));
        await pendingFundsFacadeService.getRebillAmt();
        expect(pendingFundsApiServiceSpy.rebillAmt).toHaveBeenCalledTimes(1);
    });

    it('should call updateAccount method of Rebill Facade Service', async () => {
        pendingFundsApiServiceSpy.rebillAmt.and.returnValue(Promise.resolve(true));
        await pendingFundsFacadeService.updateAccount();
        expect(pendingFundsApiServiceSpy.updateAccount).toHaveBeenCalledTimes(1);
    });

});
