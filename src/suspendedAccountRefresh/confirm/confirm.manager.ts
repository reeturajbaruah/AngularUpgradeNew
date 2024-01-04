import { Injectable } from '@angular/core';
import { ISuspendedPaymentInfo } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { ISuspendedStatus } from 'suspendedAccountRefresh/services/webapi.service';
import { WithoutViolationsPaymentService } from 'suspendedAccountRefresh/services/withoutViolationsPayment.service';
import { WithViolationsPaymentService } from 'suspendedAccountRefresh/services/withViolationsPayment.service';

@Injectable()
export class ConfirmManager {

    constructor(private withoutViolationsService: WithoutViolationsPaymentService,
        private withViolationsService: WithViolationsPaymentService) { }

    async submitPayment(hasViolations: boolean, paymentInfo: ISuspendedPaymentInfo): Promise<ISuspendedStatus> {

        if (hasViolations) {
            return (await this.withViolationsService.submitPayment(paymentInfo)) as ISuspendedStatus;
        } else {
            return (await this.withoutViolationsService.submitPayment(paymentInfo)) as ISuspendedStatus;
        }
    }

}