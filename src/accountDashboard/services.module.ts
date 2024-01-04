import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AccountDashboardService } from './services/accountDashboard.service';

@NgModule({
    providers: [
        AccountDashboardService
    ]
})
export class AccountDashboardServicesModule {

    constructor(@Optional() @SkipSelf() module?: AccountDashboardServicesModule) {
        if (module) {
            throw new Error(
                'AccountDashboardServicesModule is already loaded in a root module. Import it only once in the root module.');
        }
    }

}
