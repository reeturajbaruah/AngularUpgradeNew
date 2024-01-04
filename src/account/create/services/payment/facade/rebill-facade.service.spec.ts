import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { RebillApiService } from '../api/rebill-api.service';
import { RebillFacadeService } from './rebill-facade.service';

describe('Rebill Facade Service', () => {

    let rebillFacadeService: RebillFacadeService;
    let rebillApiServiceSpy: jasmine.SpyObj<RebillApiService>;

    beforeEach(() => {
        rebillApiServiceSpy = jasmine.createSpyObj('rebillApiServiceSpy', ['updateRebillAmount']);
        rebillApiServiceSpy.updateRebillAmount.and.returnValue(Promise.resolve(true));

        TestBed.configureTestingModule({
            providers: [
                RebillFacadeService,
                { provide: RebillApiService, useFactory: () => rebillApiServiceSpy },
            ]
        });

        rebillFacadeService = TestBed.inject(RebillFacadeService);
    });

    it('should call updateRebillAmount method of Rebill Facade Service', async () => {
        await rebillFacadeService.updateRebillAmount({} as any);
        expect(rebillApiServiceSpy.updateRebillAmount).toHaveBeenCalledTimes(1);
    });
});
