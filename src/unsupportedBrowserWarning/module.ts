import { NgModule } from '@angular/core';
import { PipesModule } from 'pipes/module';
import { downgrade } from 'hybrid/module';

import { TriggerModalUnsupportedBrowserComponent } from 'unsupportedBrowserWarning/triggerModalUnsupportedBrowser/triggerModalUnsupportedBrowser.component';
import { UnsupportedBrowserModalComponent } from 'unsupportedBrowserWarning/unsupportedBrowserModal/unsupportedBrowserModal.component';

downgrade('triggerModalUnsupportedBrowser', { component: TriggerModalUnsupportedBrowserComponent });

@NgModule({
    declarations: [UnsupportedBrowserModalComponent, TriggerModalUnsupportedBrowserComponent],
    exports: [TriggerModalUnsupportedBrowserComponent],
    imports: [PipesModule],
    providers: []
})
export class UnsupportedBrowserModule {
}
