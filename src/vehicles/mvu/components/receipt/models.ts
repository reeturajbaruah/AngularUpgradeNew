import { SiteCoreItem } from 'cms/cms.module';

export interface IMvuReceiptContentCms extends SiteCoreItem {
    paymentReceivedOn: string;
    paymentAmount: string;
    replenishAmt: string;
    accountInfo: string;
    accountName: string;
    accountNumber: string;
    billingInfo: string;
    tagsOrdered: string;
    tagsRequested: string;
    accountDashboard: string;
    manageMyVehicles: string;
    InactivationTitle: string;
    InactivationSubtitle: string;
}

