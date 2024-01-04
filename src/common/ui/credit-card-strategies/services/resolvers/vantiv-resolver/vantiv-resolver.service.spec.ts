import { TestBed } from '@angular/core/testing';
import { VantivIFrameStrategyComponent } from 'common/ui/credit-card-strategies/strategies';
import { } from 'jasmine';
import { VanticResolverService } from './vantiv-resolver.service';


describe('Vantic Resolver Service', () => {

    let vanticResolverService: VanticResolverService;


    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [VanticResolverService]

        });

        vanticResolverService = TestBed.inject(VanticResolverService);

    });

    it('defines the service', () => {
        expect(vanticResolverService).toBeDefined();
    });

    it('resolves the component', async () => {
        const res = await vanticResolverService.resolve();
        expect(res.type).toEqual(VantivIFrameStrategyComponent);
    });


});

