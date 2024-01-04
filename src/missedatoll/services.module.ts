import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
    StateNames, CmsIds, Routes,
    stateNames, cmsIds, urlPaths
} from './constants';

import { MissedATollService, WebApiService } from './services';


@NgModule({
    providers: [
        { provide: StateNames, useValue: stateNames },
        { provide: CmsIds, useValue: cmsIds },
        { provide: Routes, useValue: urlPaths },
        MissedATollService,
        WebApiService
    ]
})
export class MissedATollServicesModule {

    constructor(@Optional() @SkipSelf() module?: MissedATollServicesModule) {
        if (module) {
            throw new Error(
                'MissedATollServicesModule is already loaded in a root module. Import it only once in the root module.');
        }
    }
}