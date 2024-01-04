import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { StorefrontModule } from 'storefront/module';
import { CommonModule as HctraCommonModule } from 'common/module';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { HybridModule } from 'hybrid/module';
import { MatIconModule } from '@angular/material/icon';

//cavve components
import { FrameComponent } from './frame/frame.component';
import { OfferComponent } from './offer/offer.component';
import { PersonalComponent } from './personal/personal.component'; 
import { BillingComponent } from './billing/billing.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { CancelModalComponent } from './frame/cancelModal.component';
import { OfferButtonComponent } from './offer/offerButton.component';
import { PaymentSummaryComponent } from './paymentSummary/paymentSummary.component';

import { TollViolationsModalComponent } from './paymentSummary/tollViolationsModal.component';
import { InvoicedComponent } from './paymentSummary/invoiced/invoiced.component';
import { UnInvoicedComponent } from './paymentSummary/unInvoiced/unInvoiced.component';

import { routes } from './routing';
import {
    stateNames, StateNames
} from './constants';

@NgModule({
    declarations: [
        FrameComponent,
        OfferComponent,
        PersonalComponent,
        BillingComponent,
        ConfirmComponent,
        ReceiptComponent,
        OfferButtonComponent,
        CancelModalComponent,
        PaymentSummaryComponent,
        TollViolationsModalComponent,
        InvoicedComponent,
        UnInvoicedComponent
    ],
    imports: [
        CommonModule,
        UIRouterModule.forChild({ states: routes }),
        HctraCommonModule,
        PipesModule,
        HybridModule,
        ValidationModule,
        FormsModule,
        FlexLayoutModule,
        MatDividerModule,
        MatSelectModule,
        MatFormFieldModule,
        StorefrontModule,
        MatIconModule
    ],
    providers: [
        { provide: StateNames, useValue: stateNames }
    ]
})
export class CAVVEModule {
}
