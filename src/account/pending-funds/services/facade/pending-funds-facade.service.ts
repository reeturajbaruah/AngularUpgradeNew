import { Injectable } from '@angular/core';
import { PendingFundsApiService } from '../api/pending-funds-api.service';


@Injectable()
export class PendingFundsFacadeService {

    constructor(private api: PendingFundsApiService) {

    }

    async getRebillAmt(): Promise<number> {
        const res = await this.api.rebillAmt();
        if (res) {
            return res.rebillAmount ? res.rebillAmount : -1;
        }
    }

    async updateAccount() {
        const req = {};
        return await this.api.updateAccount(req);
    }

}
