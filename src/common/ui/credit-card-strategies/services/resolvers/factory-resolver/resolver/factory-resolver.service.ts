import {Injectable } from '@angular/core';
import { StrategiesExecutionOrder, StratetegiesEnum } from '../../../../model';
import { IResolver } from '../../model';
import { StrategeyConfigService } from '../config/config-service';

@Injectable()
export class FactoryResolverService {

    constructor(private strategeyConfigService: StrategeyConfigService) { }

    async resolve() {

        let resolver: IResolver;
        let cofigResult: { canUse: boolean; resolverService: IResolver };

        for (const executionOrder of StrategiesExecutionOrder) {

            if (executionOrder.strategy === StratetegiesEnum.Vantiv) {
                cofigResult = await this.strategeyConfigService.canUseStrategey(StratetegiesEnum.Vantiv);
                if (cofigResult && cofigResult.canUse) {
                    break;
                }
            }

            if (executionOrder.strategy === StratetegiesEnum.Tripos) {
                cofigResult = await this.strategeyConfigService.canUseStrategey(StratetegiesEnum.Tripos);
                if (cofigResult && cofigResult.canUse) {
                    break;
                }
            }

            if (executionOrder.strategy === StratetegiesEnum.Litel) {
                cofigResult = await this.strategeyConfigService.canUseStrategey(StratetegiesEnum.Litel);
                if (cofigResult && cofigResult.canUse) {
                    break;
                }
            }

            if (executionOrder.strategy === StratetegiesEnum.SnapPayWeb) {
                cofigResult = await this.strategeyConfigService.canUseStrategey(StratetegiesEnum.SnapPayWeb);
                if (cofigResult && cofigResult.canUse) {
                    break;
                }
            }

            if (executionOrder.strategy === StratetegiesEnum.SnapPayKiosk) {
                cofigResult = await this.strategeyConfigService.canUseStrategey(StratetegiesEnum.SnapPayKiosk);
                if (cofigResult && cofigResult.canUse) {
                    break;
                }
            }
        }

        if (cofigResult && cofigResult.canUse) {
            resolver = cofigResult.resolverService;
            if (resolver) {
                return await resolver.resolve();
            }
        }
    }
}

