import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { CommonModule as HctraCommonModule } from 'common/module';

import {
    StateNames, CmsIds, Routes, FeatureToggles,
    stateNames, cmsIds, urlPaths, featureToggles
} from './constants';

import { HybridModule, downgrade } from 'hybrid/module';

import { SuspendedAccountService } from './services/suspendedAccount.service';

import { PaymentService } from './services/payment.service';
import { WithoutViolationsPaymentService } from './services/withoutViolationsPayment.service';
import { WithViolationsPaymentService } from './services/withViolationsPayment.service';
import { ConfirmManager } from './confirm/confirm.manager';

downgrade('suspendedAccountService', { service: SuspendedAccountService });
downgrade('suspendedAccountWithoutViolationStateNames', { constant: [
    stateNames.Landing,
    stateNames.RequiredPayment,
    stateNames.Payment,
    stateNames.Confirm,
    stateNames.Receipt
] });

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HctraCommonModule,
        HybridModule
    ],
    exports: [CommonModule, HctraCommonModule],
    providers: [
        { provide: StateNames, useValue: stateNames },
        { provide: CmsIds, useValue: cmsIds },
        { provide: Routes, useValue: urlPaths },
        { provide: FeatureToggles, useValue: featureToggles },
        SuspendedAccountService,
        PaymentService,
        ConfirmManager, WithViolationsPaymentService, WithoutViolationsPaymentService
    ]
})
export class SuspendedAccountSharedModule { }
