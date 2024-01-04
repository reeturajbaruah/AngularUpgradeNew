import { Injectable } from '@angular/core';
import { IResolver } from '../model';


@Injectable()
export class SnapPayResolverService implements IResolver {

    async resolve() {

        const { SnapPayIframeStrategyComponent } = await import('../../../strategies');

        return {
            type: SnapPayIframeStrategyComponent,
            data: null
        };

    }
}
