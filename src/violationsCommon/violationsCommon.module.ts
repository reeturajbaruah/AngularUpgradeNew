import { NgModule } from '@angular/core';
import { InvoicedDetailsComponent } from './components/violationsDetails/invoiced/invoicedDetails/invoicedDetails.component';
import { ViolationsInvoicedComponent } from './components/violationsDetails/invoiced/invoiced.component';
import { OverpaymentComponent } from './components/violationsDetails/invoiced/overpayment/overpayment.component';
import { ViolationsUnInvoicedComponent } from './components/violationsDetails/uninvoiced/uninvoiced.component';
import { ViolationsDetailsComponent } from './components/violationsDetails/violationsDetails.component';
import { ViolationsPlateComponent } from './components/violationsPlate/violationsPlate.component';
import { InvoiceExampleComponent } from './components/invoiceExample.component';

import { CommonModule } from '@angular/common';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule as HctraCommonModule } from 'common/module';
import { PipesModule } from 'pipes/module';

import { StorefrontModule } from 'storefront/module';
import { ValidationModule } from 'validation/module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { HybridModule } from 'hybrid/module';

import { WebApisService, ViolationsService } from './services/services.index';
import { ViolationsDataService } from './services/violationsService/violationsData.service';

import { PlateDataService, WebApiService, StateService as PaymentPlanStateService } from 'paymentplans/services';

import { PaymentPlansStateNames, stateNames } from 'paymentplans/constants';
import { ViolationLoginPopUpModalComponent } from 'common/ui';

@NgModule({
    declarations: [
        ViolationsPlateComponent,
        ViolationsDetailsComponent,
        ViolationsInvoicedComponent,
        InvoicedDetailsComponent,
        OverpaymentComponent,
        ViolationsUnInvoicedComponent,
        InvoiceExampleComponent,
        ViolationLoginPopUpModalComponent
    ],
    exports: [
        ViolationsPlateComponent,
        ViolationsDetailsComponent,
        InvoiceExampleComponent,
        ViolationLoginPopUpModalComponent
    ],
    providers: [
        WebApisService,
        ViolationsService,
        ViolationsDataService,
        PlateDataService,
        WebApiService,
        PaymentPlanStateService,
        { provide: PaymentPlansStateNames, useValue: stateNames },
    ],
    imports: [
        PipesModule, CommonModule,
        HctraCommonModule, StorefrontModule,
        HybridModule,
        ValidationModule,
        FormsModule,
        FlexLayoutModule,
        MatDividerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatIconModule,
        UIRouterModule
    ]
})
export class ViolationsCommonModule {


}
