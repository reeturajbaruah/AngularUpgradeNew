import { SiteCoreItem } from 'cms/cms.module';

export interface ICmsReceiptContent extends SiteCoreItem {
    paymentReceivedOn: string;
    paymentAmount: string;
    replenishAmt: string;
    accountInfo: string;
    accountName: string;
    accountNumber: string;
    billingInfo: string;
    platesOrdered: string;
    platesRequested: string;
    accountDashboard: string;
    manageMyVehicles: string;
}

