import { TestBed } from '@angular/core/testing';
import { TriPosStrategyComponent } from 'common/ui/credit-card-strategies/strategies';
import { } from 'jasmine';
import { KioskDataService } from '../data-service/kiosk-data-service';
import { KioskResolverService } from '../kiosk-factory-resolver/kiosk-resolver.service';
import { TriposResolverService } from './tripos-resolver.service';


describe('Tripos Resolver Service', () => {

    let triposResolverService: TriposResolverService;
    let kioskDataServiceSpy: jasmine.SpyObj<KioskDataService>;

    beforeEach(() => {
        kioskDataServiceSpy = jasmine.createSpyObj('kioskDataService', ['getData']);

        TestBed.configureTestingModule({
            providers: [
                TriposResolverService,
                { provide: KioskDataService, useFactory: () => kioskDataServiceSpy },

            ]
        });

        triposResolverService = TestBed.inject(TriposResolverService);

    });

    it('defines the service', () => {
        expect(triposResolverService).toBeDefined();
    });

    it('resolves the component', async () => {
        kioskDataServiceSpy.getData.and.returnValue({} as any);
        const res = await triposResolverService.resolve();
        expect(res.type).toEqual(TriPosStrategyComponent);
    });

});


