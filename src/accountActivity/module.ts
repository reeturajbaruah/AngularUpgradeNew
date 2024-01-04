import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { CommonModule as HctraCommonModule } from 'common/module';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';

import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';

//Components
import { AgencyAndLocationLinkComponent } from 'accountActivity/transactions/agencyAndLocationLink/agencyAndLocationLink.component';
import { FrameComponent } from 'accountActivity/frame/frame.component';
import { TransactionsComponent } from 'accountActivity/transactions/transactions.component';
import { TransactionsTableComponent } from 'accountActivity/transactions/transactionsTable/transactionsTable.component';
import { TransactionDetailsModalComponent } from 'accountActivity/transactions/transactionDetailsModal/transactionDetailsModal.component';
import { ActivityFilterCriteriaComponent } from 'accountActivity/transactions/filterCriteria/filterCriteria.component';
import { MonthlyComponent } from 'accountActivity/monthly/monthly.component';
import { YearlyComponent } from 'accountActivity/yearly/yearly.component';
import { YearTransitionDropdownComponent } from 'accountActivity/yearly/yearTransitionDropdown/yearTransitionDropdown.component';
import { YearlySummaryInfoComponent } from 'accountActivity/yearly/yearlySummaryInfo/yearlySummaryInfo.component';
import { ReceiptsComponent } from 'accountActivity/receipts/receipts.component';
import { ReceiptDetailsComponent } from 'accountActivity/receipts/receiptDetails.component';
import { MonthlyInvoicesComponent } from 'accountActivity/monthlyInvoices/monthlyInvoices.component';
import { BalanceSummaryComponent } from 'accountActivity/monthlyInvoices/balanceSummary/balanceSummary.component';
import { InvoiceDetailsComponent } from 'accountActivity/monthlyInvoices/invoiceDetails/invoiceDetails.component';
import { InvoiceInfoComponent } from 'accountActivity/monthlyInvoices/invoiceInfo/invoiceInfo.component';
import { InvoiceSummaryComponent } from 'accountActivity/monthlyInvoices/invoiceSummary/invoiceSummary.component';
import { OutstandingInvoicesComponent } from 'accountActivity/monthlyInvoices/outstandingInvoices/outstandingInvoices.component';
import { TabsComponent } from 'accountActivity/tabs/tabs.component';

//Other
import { AccountActivityService, WebApisService } from './services';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { routes } from './routing';
import { stateNames, urlPaths, StateNames, Routes } from './constants';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InvoiceDetailsModalComponent } from './monthlyInvoices/invoiceDetailsModal/invoiceDetailsModal.component';
import { SearchTransactionsComponent } from './searchTransactions/searchTransactions.component';
import { TransactionTypeDropdownComponent } from './searchTransactions/transactionTypeDropdown/transactionTypeDropdown.component';
import { TransactionsFilterComponent } from './transactions/filters/transactions/transactionsFilter.component';
import { VehiclesFilterComponent } from './transactions/filters/vehicles/vehiclesFilter.component';
import { DateRangeFilterComponent } from './transactions/filters/dateRange/dateRangeFilter.component';
import { FilterService } from './services/filter/filter.service';
import { TransactionsFilterCriteriaComponent } from './transactions/transactionsFiltersList/transactionsFiltersList.component';
import { TransactionsRecordsComponent } from './transactions/transactionsRecords/transactionsRecords.component';
import { FilterChangeService } from './services/filter/filter-change.service';
import { SortedByDateComponent } from './transactions/sortFilters/date/date.component';
import { OverlayModule } from '@angular/cdk/overlay';

export * from './constants';

const routesWithComponents = routes.map(route => {
    const componentDictionary = {
        [stateNames.accountActivityFrame]: FrameComponent,
        [stateNames.accountActivityTransactions]: TransactionsComponent,
        [stateNames.accountActivityYearly]: YearlyComponent,
        [stateNames.accountActivityStatements]: MonthlyComponent,
        [stateNames.accountActivityReceipts]: ReceiptsComponent,

        [stateNames.accountActivityInvoices]: MonthlyInvoicesComponent

    };

    return {
        ...route,
        component: componentDictionary[route.name]
    };
});

@NgModule({
    declarations: [
        FrameComponent,
        TransactionsComponent,
        TransactionsTableComponent,
        TransactionDetailsModalComponent,
        ActivityFilterCriteriaComponent,
        YearlyComponent,
        MonthlyComponent,
        YearTransitionDropdownComponent,
        YearlySummaryInfoComponent,
        ReceiptsComponent,
        ReceiptDetailsComponent,
        AgencyAndLocationLinkComponent,
        MonthlyInvoicesComponent,
        BalanceSummaryComponent,
        InvoiceDetailsComponent,
        InvoiceInfoComponent,
        InvoiceSummaryComponent,
        OutstandingInvoicesComponent,
        InvoiceDetailsModalComponent,
        SearchTransactionsComponent,
        TransactionTypeDropdownComponent,
        TransactionsFilterComponent,
        VehiclesFilterComponent,
        DateRangeFilterComponent,
        SortedByDateComponent,
        TransactionsFilterCriteriaComponent,
        TabsComponent,
        TransactionsRecordsComponent
    ],
    imports: [
        UIRouterModule.forChild({ states: routesWithComponents }),
        HctraCommonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        PipesModule,
        FlexLayoutModule,
        ValidationModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatAutocompleteModule,
        OverlayModule
    ],
    providers: [
        { provide: StateNames, useValue: stateNames },
        { provide: Routes, useValue: urlPaths },
        WebApisService,
        AccountActivityService,
        DatePipe,
        TitleCasePipe,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        FilterService,
        FilterChangeService
    ]
})

export class AccountActivityModule {
}
