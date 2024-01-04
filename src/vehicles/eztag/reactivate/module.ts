import { NgModule } from '@angular/core';
import {
    TagReactivateApiService, TagReactivateFacadeService,
    TagReactivateManagerService
} from './services/index';

@NgModule({
    providers: [
        TagReactivateFacadeService,
        TagReactivateApiService,
        TagReactivateManagerService
    ]
})
export class TagReactivateModule {

}

