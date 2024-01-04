import { InjectionToken, NgModule } from '@angular/core';
import { ThirdPartyDowngrades } from '../common/thirdPartyDowngrades';

export const Sniffr = new InjectionToken('sniffrjs');
export const Bowser = new InjectionToken('bowserjs');
export const Moment = new InjectionToken('momentjs');
export const Vimeo = new InjectionToken('vimeoPlayer');

export const THIRD_PARTY_PROVIDERS = (() => {
    const provideThirdPartyService = (token: string) => (thirdPartyDowngrades: ThirdPartyDowngrades) => thirdPartyDowngrades[token];

    const providers = [
        { provide: Sniffr, useFactory: provideThirdPartyService('Sniffr'), deps: [ThirdPartyDowngrades] },
        { provide: Bowser, useFactory: provideThirdPartyService('Bowser'), deps: [ThirdPartyDowngrades] },
        { provide: Moment, useFactory: provideThirdPartyService('Moment'), deps: [ThirdPartyDowngrades] },
        { provide: Vimeo, useFactory: provideThirdPartyService('Vimeo'), deps: [ThirdPartyDowngrades] },
    ];

    return providers;
})();

@NgModule({
    imports: [
        // Add modules if needed
    ],
    exports: [
       
    ],
    declarations: [
        // Add components, directives, pipes if needed
    ],
    providers: [
        THIRD_PARTY_PROVIDERS,
        // Add other Angular services here
    ],
    bootstrap: [
        // Add your root component if needed
    ],
})
 export class HCTRAModule {
    constructor() {
    }
}
