import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    Future = 'MakeOneTimePayment.**';
    Root = 'MakeOneTimePayment';
    Landing = 'MakeOneTimePayment.EnterAmount';
    Checkout = 'MakeOneTimePayment.OneTimeCheckout';
    Receipt = 'MakeOneTimePayment.OneTimeReceipt';
}

@Injectable()
export class Routes {
    Future = '/MakeOneTimePayment';
    Root = '/MakeOneTimePayment';
    Landing = '/EnterAmount';
    Checkout = '/Checkout';
    Receipt = '/Receipt';
}

@Injectable()
export class CmsIds {
    BaseContent = '2B42BD2F-A7CC-4F17-BA7B-6B7A5DF1DDB3';
    Landing = '15E67047-79B3-4170-A117-38FFCDAD4284';
    Checkout = '028B1840-2A99-4240-B92E-8EC9B32C728A';
    Receipt = 'B0DC4190-632D-4CCB-9325-19191DC0A110';
}

@Injectable()
export class FeatureToggles {
}

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
