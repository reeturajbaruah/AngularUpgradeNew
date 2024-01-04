import { Inject, Injectable } from '@angular/core';
import { StratetegiesEnum } from 'common/ui/credit-card-strategies/model';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { KioskResolverService } from '../../kiosk/kiosk-factory-resolver/kiosk-resolver.service';
import { SnappayKioskResolverService } from '../../kiosk/snappay-kiosk-resolver/snappay-kiosk-resolver.service';
import { TriposResolverService } from '../../kiosk/tripos-resolver/tripos-resolver.service';
import { LitelResolverService } from '../../litel-resolver/litel-resolver.service';
import { IResolver } from '../../model';
import { SnapPayResolverService } from '../../snap-pay-resolver/snap-pay-resolver.service';
import { VanticResolverService } from '../../vantiv-resolver/vantiv-resolver.service';

@Injectable()
export class StrategeyConfigService {

    constructor(@Inject(ENVIRON_CONFIG) private environmentConfig,
        private kioskResolverService: KioskResolverService,
        private triposResolverService: TriposResolverService,
        private vanticResolverService: VanticResolverService,
        private snapPayResolverService: SnapPayResolverService,
        private litelResolverService: LitelResolverService,
        private snappayKioskResolverService: SnappayKioskResolverService
    ) {

    }

    async canUseStrategey(strategy: StratetegiesEnum) {
        let canUse: boolean;
        let resolver: IResolver;

        switch (strategy) {

            case StratetegiesEnum.Vantiv:
                canUse = this.canUseVantiv();
                resolver = canUse ? this.vanticResolverService : null;
                break;

            case StratetegiesEnum.SnapPayWeb:
                canUse = this.canUseSnapPayWeb();
                resolver = canUse ? this.snapPayResolverService : null;
                break;

            case StratetegiesEnum.SnapPayKiosk:
                canUse = await this.canUseSnapPayKiosk();
                resolver = canUse ? this.snappayKioskResolverService : null;
                break;

            case StratetegiesEnum.Tripos:
                canUse = await this.canUseTripos();
                resolver = canUse ? this.triposResolverService : null;
                break;

            case StratetegiesEnum.Litel:
                canUse = this.canUseLitel();
                resolver = canUse ? this.litelResolverService : null;
                break;

        }

        return {
            canUse,
            resolverService: resolver
        };

    }

    private canUseVantiv() {
        const vantivConfig = this.environmentConfig.vantivConfig;
        if (vantivConfig && vantivConfig.IFrameEnabled) {
            return true;
        } else {
            return false;
        }
    }

    private canUseSnapPayWeb() {

        if (this.environmentConfig.snapPayConfigs && this.environmentConfig.snapPayConfigs.WebEnabled) {
            return true;
        } else {
            return false;
        }

    }

    private async canUseSnapPayKiosk() {
        if ((await this.snappayKioskResolverService.canUseKiosk()).canUse) {
            return true;
        } else {
            return false;
        }

    }

    private async canUseTripos() {
        if ((await this.kioskResolverService.canUseKiosk()).canUse) {
            return true;
        } else {
            return false;
        }

    }

    private canUseLitel() {
        return true;
    }


}
