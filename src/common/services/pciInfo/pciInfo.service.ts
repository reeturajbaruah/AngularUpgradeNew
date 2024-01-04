import { Injectable } from '@angular/core';
import { VantivDto } from '../../models';
import * as _ from 'lodash';
import { VantivPaymentService } from '../vantivPayment/vantivPayment.service';

export interface IPciInfoService {
    registerCard(cardNum: string): Promise<VantivDto>;
    registerCard(cardNum: string[]): Promise<VantivDto[]>;
    isMasked(cardNum: string): boolean;
}

@Injectable()
export class PciInfoService {

    constructor(
        private vantivPaymentService: VantivPaymentService
    ) { }

    public registerCard<T extends string | string[], T2 extends VantivDto | VantivDto[]>(cardNum: any): Promise<any> {
        let cards: string[];
        if (Array.isArray(cardNum)) { 
            cards = _.cloneDeep(cardNum as any);
        }
        else {
            cards = [cardNum as any];
        }

        const promises = [] as Promise<VantivDto>[];

        for (const card of cards) {
            if (!card) {
                promises.push(Promise.resolve(null));
            }
            else if (this.isMasked(card) || card.length === 4) {

                const vantivDto = this.processMaskedCard(card);
                promises.push(Promise.resolve(vantivDto));
            }
            else {
                const dtoPromise = this.vantivPaymentService.vantivPay(card).then(response => ({
                        paypageRegistrationId: response.paypageRegistrationId,
                        lastFour: response.lastFour
                    } as VantivDto)
                );
                promises.push(dtoPromise);
            }
        }

        if (promises && promises.length > 0) {
            let outPromise;
            if (promises.length > 1 || Array.isArray(cardNum)) {
                outPromise = Promise.all(promises) as Promise<VantivDto[]>;
            }
            else if (promises.length === 1) {
                outPromise = promises[0];
            }
            else {
                outPromise = Promise.resolve(null);
            }

            return outPromise;
        }
    }

    public isMasked(cardNum: string): boolean {
        return cardNum.indexOf('************') > -1;
    };

    private processMaskedCard(cardNum: string): VantivDto {
        const lastFour = cardNum.substr(-4);
        return { lastFour, paypageRegistrationId: null } as VantivDto;
    };
}
