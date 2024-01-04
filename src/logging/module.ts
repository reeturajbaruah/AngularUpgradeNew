import { NgModule } from '@angular/core';

import { LoggingService } from './loggingService/logging.service';
export { LoggingService } from './loggingService/logging.service';


@NgModule({
    declarations: [],
    exports: [],
    imports: [],
    providers: [
        LoggingService
    ],
})
export class LoggingModule {
}
