import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    Future = 'AccountActivity.**';
    accountActivityFrame = 'AccountActivity';
    accountActivityTransactions = 'AccountActivity.Transactions';
    accountActivityYearly = 'AccountActivity.Yearly';
    accountActivityStatements = 'AccountActivity.Statements';
    accountActivityReceipts = 'AccountActivity.Receipts';
    accountActivityInvoices = 'AccountActivity.Invoices';
}

@Injectable()
export class Routes {
    Future = '/AccountActivity';
    accountActivity = '/AccountActivity';
    accountActivityYearly = '/AccountActivityYearly';
    accountActivityStatements = '/AccountActivityStatements';
    accountActivityReceipts = '/AccountActivityReceipts';
    accountActivityInvoices = '/AccountActivityInvoices';
}

@Injectable()
export class CmsIds {
    Root = '0D6C5A35-6D4C-42C0-B27F-2853DEA1CB1D';
    Transactions = '00167288-101B-4525-B2E1-18934E3E3D82';
    YearlySummary = '9E51DE75-463A-4CBB-A7FE-8A2AD4818185';
    MonthlyStatements = '1149C458-1C53-4256-9D43-450D1BFD2959';
    Receipts = '6C48F92A-FDAA-49DD-88A3-ACED8B351C33';
    MonthlyInvoices = '0931A3AA-9541-4889-81E2-8E8AAE4F34FE';
    SearchTransactions = '283F2797-A3B1-45E2-8A0F-A3B0891F76FC';
}

@Injectable()
export class FeatureToggles {
}


export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();

