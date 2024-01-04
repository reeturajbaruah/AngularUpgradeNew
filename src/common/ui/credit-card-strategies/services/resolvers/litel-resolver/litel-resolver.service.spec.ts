import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { LitelStrategyComponent } from '../../../strategies';
import { LitelResolverService } from './litel-resolver.service';


describe('Litel Resolver Service', () => {

    let litelResolverService: LitelResolverService;


    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [LitelResolverService]
        });

        litelResolverService = TestBed.inject(LitelResolverService);

    });

    it('defines the service', () => {
        expect(litelResolverService).toBeDefined();
    });

    it('resolves the component', async () => {
        const res = await litelResolverService.resolve();
        expect(res.type).toEqual(LitelStrategyComponent);
    });

});


