import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    Frame = 'Home';
    MissedAToll = 'MissedAToll';
    PayInvoice = 'Violations';
    SignUp = 'NewAccount';
    WhatsNew = 'WhatsNew';

}

export enum CallToActionConfig {
    AccountDashboard = 'Account Dashboard',
    SignUp = 'Sign Up EZ TAG',
    Violations = 'Pay Invoice',
    MissedAToll = 'Missed A Toll',
    PayTollsAndInvoices = 'PAY MISSED TOLLS AND INVOICES',
    ActivateEzTag = 'Activate EZ TAG'
}

@Injectable()
export class Routes {
    Frame = '/Home';
    WhatsNew = '/WhatsNew';
}

@Injectable()
export class CmsIds {
    HomePageCMS = '82C3BCF9-9654-4094-8FDF-E483BA3D34C6';
    InvoiceExample = 'A6498EBE-C12C-4DA6-828E-3BBE9A5F8171';
    DefaultNewsImages = '0326EF2E-1563-4DB3-943F-2D86E1E8A624';
    Toasters = 'C763EFDC-328B-49E1-9A49-EB8AE10F9FCF';
    WhatsNewPageCms = 'B2CB2FA1-657C-4144-AA12-B3EACA286C76';
    PaymentPlanModal = 'CBBB1551-F597-468E-93F7-06285AADB185';
    ViolationLoginModal = '76000ACE-4C34-4B88-9B24-AD63FC356BCD';
}

export enum SectionChoices {
    Carousel = 'Carousel Section',
    CarouselDesktop = 'Carousel Desktop',
    CarouselMobile = 'Carousel Mobile',
    Ads = 'Ads Section',
    CallToAction = 'Call To Action Section',
    DynamicSquare = 'Dynamic Square Section',
    HelpAndSupport = 'Help And Support Section',
    HomeNews = 'Home News Section',
    SocialMedia = 'Social Media Section'
}

export enum PageChoices {
    Invoice = 'Invoice Example Page',
    Toasters = 'Home Toasters'
}

@Injectable()
export class FeatureToggles {
}



export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
