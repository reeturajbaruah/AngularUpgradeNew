import { Injectable } from '@angular/core';
import { AccountService } from 'common/services';


@Injectable()
export class DeliveryMethodService {

    constructor(private accountService: AccountService
    ) { }

    async getMailingInfo() {
        return await this.accountService.getMailingInfo();

    }
}
