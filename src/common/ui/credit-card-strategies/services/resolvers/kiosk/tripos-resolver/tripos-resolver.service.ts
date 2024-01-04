import { Injectable } from '@angular/core';
import { IResolver } from '../../model';
import { KioskDataService } from '../data-service/kiosk-data-service';

@Injectable()
export class TriposResolverService implements IResolver {

    constructor(private kioskDataService: KioskDataService

    ) { }

    async resolve() {
        const { TriPosStrategyComponent } = await import('../../../../strategies');

        return {
            type: TriPosStrategyComponent,
            data: this.kioskDataService.getData()
        };
    }

}
