import { NgModule, Optional, SkipSelf } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { environment } from 'environments/environment';
import { CommonModule as HctraCommonModule } from 'common/module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { StorefrontModule } from 'storefront/module';
import { PipesModule } from 'pipes/module';
import { ValidationModule } from 'validation/module';
import { HybridModule } from 'hybrid/module';
import { MatIconModule } from '@angular/material/icon';

import { NgxEchartsModule } from 'ngx-echarts';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, LinesChart } from 'echarts/charts';
import { TooltipComponent, TitleComponent, GridComponent, LegendComponent } from 'echarts/components';
import * as echarts from 'echarts/core';

echarts.use([CanvasRenderer, LineChart, LinesChart, TooltipComponent, TitleComponent, GridComponent, LegendComponent]);

//components
import { GraphComponent } from './displayCards/tollUsageHistory/graph/graph.component';
import { CurrentBalanceComponent } from './displayCards/currentBalance/currentBalance.component';
import { FrameComponent } from './frame/frame.component';
import { RecentTransactionsComponent } from './displayCards/recentTransactions/recentTransactions.component';
import { TollUsageHistoryComponent } from './displayCards/tollUsageHistory/tollUsageHistory.component';
import { VehiclesComponent } from './displayCards/vehicles/vehicles.component';
import { AccountPendingComponent } from './displayCards/account-pending-funds/account-pending-funds.component';

import { AccountDashboardService } from './services';

import { routes } from './routing';
import {
    stateNames, urlPaths, StateNames, Routes
} from './constants';
export * from './constants';
import { AccountPendingFundsModule } from 'account/pending-funds';
import { UsernameComponent } from './displayCards/currentBalance/username/username.component';
import { AlertBoxModule } from 'shared/ui/display/alert-box/alert-box.module';


@NgModule({
    declarations: [
        CurrentBalanceComponent,
        FrameComponent,
        RecentTransactionsComponent,
        TollUsageHistoryComponent,
        VehiclesComponent,
        GraphComponent,
        AccountPendingComponent,
        UsernameComponent
    ],
    imports: [
        HctraCommonModule,
        UIRouterModule.forChild({ states: routes }),
        CommonModule,
        PipesModule,
        HybridModule,
        ValidationModule,
        FormsModule,
        FlexLayoutModule,
        MatDividerModule,
        MatSelectModule,
        MatFormFieldModule,
        StorefrontModule,
        MatIconModule,
        NgxEchartsModule.forRoot({
            echarts
        }),
        AlertBoxModule,
        AccountPendingFundsModule
    ]
})
export class AccountDashboardModule {
}

