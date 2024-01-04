import { Injectable } from '@angular/core';
import { IResolver } from '../model';

@Injectable()
export class VanticResolverService implements IResolver {

    async resolve() {
        const { VantivIFrameStrategyComponent } = await import('../../../strategies');

        return {
            type: VantivIFrameStrategyComponent,
            data: null
        };
    }

}
