import { Injectable } from '@angular/core';
import { IEmailUsPayload } from '../../models/email-us.models';
import { EmailUsApiService } from '../api/emailUs-api.service';


@Injectable()
export class EmailUsFacadeService {

    constructor(
        private emailUsApiService: EmailUsApiService) {
    }

    async getAccountInfo() {
        return await this.emailUsApiService.getAccountInfo();
    }

    async sendHelpAndSupportEmail(request: IEmailUsPayload ) {
        return await this.emailUsApiService.sendHelpAndSupportEmail(request);
    }
}
