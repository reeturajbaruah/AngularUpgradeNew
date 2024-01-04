import { NgModule } from '@angular/core';
import { PendingFundsApiService } from './services/api/pending-funds-api.service';
import { PendingFundsFacadeService } from './services/facade/pending-funds-facade.service';

@NgModule({
    providers: [
        PendingFundsFacadeService,
        PendingFundsApiService
    ]
})
export class AccountPendingFundsModule {


}
