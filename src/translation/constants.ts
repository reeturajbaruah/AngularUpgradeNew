import { Injectable } from '@angular/core';


@Injectable()
export class CmsIds {
    LanguageDropDown = 'E4A47BF1-DF30-4301-AEC7-79A11D3E2CB4';
    TranslationDisclaimer = 'E7EEF689-4781-4CCA-AD88-922068A44733';
}

@Injectable()
export class StateNames {
    TranslationDisclaimer = 'TranslationDisclaimer';
}

@Injectable()
export class Routes {
    TranslationDisclaimer = '/TranslationDisclaimer';
}

export const cmsIds = new CmsIds();
export const stateNames = new StateNames();
export const urlPaths = new Routes();
