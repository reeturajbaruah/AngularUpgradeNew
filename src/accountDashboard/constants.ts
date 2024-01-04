import { Injectable } from '@angular/core';

@Injectable()
export class StateNames {
    Future = 'AccountOverview.**';
    Frame = 'AccountOverview';
}

@Injectable()
export class Routes {
    Future = '/AccountOverview';
    Frame = '/AccountOverview';
}

@Injectable()
export class CmsIds {
    Root = '78D0EA38-81FC-49F8-B1FD-CF401E1252CB';
    TollUsageHistoryNoData = 'E9074736-AA4F-469E-8F5B-448AE788623D';
    VehiclesNoData = 'A4432F92-5914-4D52-935B-E6D25896F07D';
    BillingNoData = '969BA325-F57B-42EB-B955-003038229EDE';
    RecentTransactionsNoData = 'C30432D9-A7D3-4808-BD57-CD8484F2C6FF';
    CurrentBalanceCMS = '53F71DB9-964F-4CED-A7F6-3F96163C5D88';
    AutoReplenishIndicator = '7E373655-06C6-4A67-A2D4-4428021531D7';
    AccountPendingFunds = '3F57DDF6-9BB1-4A62-8066-D710AE593940';
    NorthArea = 'BEE19884-8EC9-4453-9740-9C6224FA0125';
}

@Injectable()
export class FeatureToggles {
}

export const stateNames = new StateNames();
export const cmsIds = new CmsIds();
export const urlPaths = new Routes();
export const featureToggles = new FeatureToggles();
