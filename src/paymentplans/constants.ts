import { Injectable } from '@angular/core';

@Injectable()
export class PaymentPlansStateNames {
    Future = 'PaymentPlans.**';
    Root = 'PaymentPlans';
    Landing = 'PaymentPlans.Landing';
    Grid = 'PaymentPlans.Grid';
    MakePayment = 'PaymentPlans.MakePayment';
    Confirm = 'PaymentPlans.Confirm';
    Receipt = 'PaymentPlans.Receipt';

    AccountOverviewFuture = 'AccountOverviewPaymentPlans.**';
    AccountOverview = 'AccountOverviewPaymentPlans';
    AccountOverviewSummary = 'AccountOverviewPaymentPlans.Grid';
    AccountOverviewSelectPayment = 'AccountOverviewPaymentPlans.SelectPayment';
    AccountOverviewConfirm = 'AccountOverviewPaymentPlans.Confirm';
    AccountOverviewReceipt = 'AccountOverviewPaymentPlans.Receipt';
}

@Injectable()
export class PaymentPlanRoutes {

    Future = '/PaymentPlans';
    Landing = '/PaymentPlans';
    Grid = '/PaymentPlansGrid';
    MakePayment = '/PaymentPlansMakePayment';
    Confirm = '/PaymentPlansConfirm';
    Receipt = '/PaymentPlansReceipt';

    AccountOverviewFuture = '/AccountOverviewPaymentPlan';
    accountOverviewSummary = '/AccountOverviewPaymentPlanSummary';
    accountOverviewSelectPayment = '/AccountOverviewPaymentPlanSelectPayment';
    accountOverviewConfirm = '/AccountOverviewPaymentPlanConfirm';
    accountOverviewReceipt = '/AccountOverviewPaymentPlanReceipt';
}

@Injectable()
export class CmsIds {
    Landing = '07440039-6865-4B70-ABD5-33D1E08709B6';
    LandingPopup = '220E9429-A78E-4C82-AF27-1AD3BD93D4DB';
    Summary = 'FDE05A8A-4D7B-425F-AB52-92F460944ED2';
    SelectPayment = '23F7C7A8-135C-4510-B6B3-E5151A39668F';
    ConfirmPayment = '0D2E0E61-FE85-47B3-9731-0E6A4E50B9C7';
    Receipt = 'A85F2691-24FA-47A8-91BA-C6727C4543BE';
    DetailsAlert = 'B43AAFEE-7545-4233-BAAA-CDE0EF981774';

    InvoiceExample = '5935D235-F6E2-4621-AEF9-AD26DC717D39';
}

@Injectable()
export class FeatureToggles {
}

export const stateNames = new PaymentPlansStateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new PaymentPlanRoutes();
export const featureToggles = new FeatureToggles();
