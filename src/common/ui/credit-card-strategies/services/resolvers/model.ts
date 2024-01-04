import { Type } from '@angular/core';
import { CreditCardInputStrategy } from '../../model';

export interface IResolver {
    resolve: () => Promise<{ type: Type<CreditCardInputStrategy>; data: any }>;
}
