import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CreditCardInputStrategy, StratetegiesEnum } from 'common/ui/credit-card-strategies/model';
import { LitelStrategyComponent, TriPosStrategyComponent, VantivIFrameStrategyComponent } from 'common/ui/credit-card-strategies/strategies';
import { } from 'jasmine';
import { IResolver } from '../../model';
import { StrategeyConfigService } from '../config/config-service';
import { FactoryResolverService } from './factory-resolver.service';

class VantivResolverServiceMock implements IResolver {

    async resolve() {
        return {
            type: VantivIFrameStrategyComponent,
            data: null
        };
    }
}

class TripostResolverServiceMock implements IResolver {

    async resolve() {
        return {
            type: TriPosStrategyComponent,
            data: null
        };
    }
}

class LiteltResolverServiceMock implements IResolver {

    async resolve() {
        return {
            type: LitelStrategyComponent,
            data: null
        };
    }
}




describe('Credit Card Factory Resolver Service', () => {

    let factoryResolverService: FactoryResolverService;
    let strategeyConfigServiceSpy: jasmine.SpyObj<StrategeyConfigService>;


    beforeEach(() => {
        strategeyConfigServiceSpy = jasmine.createSpyObj('strategeyConfigService', ['canUseStrategey']);

        TestBed.configureTestingModule({
            providers: [
                FactoryResolverService,
                { provide: StrategeyConfigService, useFactory: () => strategeyConfigServiceSpy }

            ]
        });

        factoryResolverService = TestBed.inject(FactoryResolverService);

    });

    it('defines the service', () => {
        expect(factoryResolverService).toBeDefined();
    });

    it('checks if strategy used is Vantiv', async () => {

        strategeyConfigServiceSpy.canUseStrategey.and.callFake(async (strategy: StratetegiesEnum) => {
            if (strategy === StratetegiesEnum.Vantiv) {
                return {
                    canUse: true,
                    resolverService: new VantivResolverServiceMock()
                };
            } else {
                return {
                    canUse: false,
                    resolverService: null
                };
            }
        });


        const res = await factoryResolverService.resolve();
        expect(res.type).toEqual(VantivIFrameStrategyComponent);
    });

    it('checks if strategy used is tripos', async () => {

        strategeyConfigServiceSpy.canUseStrategey.and.callFake(async (strategy: StratetegiesEnum) => {
            if (strategy === StratetegiesEnum.Tripos) {
                return {
                    canUse: true,
                    resolverService: new TripostResolverServiceMock()
                };
            } else {
                return {
                    canUse: false,
                    resolverService: null
                };
            }
        });


        const res = await factoryResolverService.resolve();
        expect(res.type).toEqual(TriPosStrategyComponent);
    });

    it('checks if strategy used is Litel', async () => {

        strategeyConfigServiceSpy.canUseStrategey.and.callFake(async (strategy: StratetegiesEnum) => {
            if (strategy === StratetegiesEnum.Tripos) {
                return {
                    canUse: true,
                    resolverService: new LiteltResolverServiceMock()
                };
            } else {
                return {
                    canUse: false,
                    resolverService: null
                };
            }
        });

        const res = await factoryResolverService.resolve();
        expect(res.type).toEqual(LitelStrategyComponent);
    });
});
