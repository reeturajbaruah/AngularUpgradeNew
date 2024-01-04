import { Injectable } from '@angular/core';
import { IResolver } from '../model';

@Injectable()
export class LitelResolverService implements IResolver {


    async resolve() {
        const { LitelStrategyComponent } = await import('../../../strategies');

        return {
            type: LitelStrategyComponent,
            data: null
        };
    }

}
