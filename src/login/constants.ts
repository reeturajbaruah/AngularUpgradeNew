import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    Login = 'Login';
    ClaimSession = 'ClaimSession';
    AddMissingInformation = 'AddMissingInformation';
    Frame = 'AccountOverview.Frame';
}

@Injectable()
export class Routes {
    Login = '/Login';
    ClaimSession = '/ClaimSession?token&expires';
    AddMissingInformation = '/AddMissingInformation';
}

@Injectable()
export class CmsIds {
    Login = '71241855-C63E-4540-8879-047F7EF9B86A';
    MissingInformation = '4EB33B6E-94B9-4101-8940-9D41877002DE';
    BlockUserNavigationModal = 'FFCCD5D3-96B9-4C06-B47F-E68D95F108D6';
    ClaimSession = 'B561E773-2C48-41B4-8223-99A1A74051FD';
    ClaimSessionExpirationModal = '54CBBDB6-1B1C-4080-81F3-7DE7B1E1A840';
}

@Injectable()
export class FeatureToggles {
}

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
