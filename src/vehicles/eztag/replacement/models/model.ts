import { SiteCoreItem } from 'cms/cms.module';
import { IErrorMessage } from 'vehicles/shared';

export interface IReplacementApiRequest {
    licPlate: string;
    motorCycleFlag: boolean;
    deliveryMethod: string;
    reason: string;
    licState: string;
    action: 'REPLACEMENT';
    tagId: string;
    accountVehicleId: number;
}

export interface IReplacementApiResponse {
    successStatus: boolean;
    errors?: IErrorMessage[];
}

export interface IReviewOrderCms extends SiteCoreItem {
    DeliveryMethodTitle: string;
    PaymentSummaryTitle: string;
    PaymentContext: string;
    TagInfo: string;
    TagInfoModalLink: string;
    RebillToolTip: string;
    ReplenishmentAmtDesc: string;
    OrderSummaryTitle: string;
    OrderSummaryDesc: string;
    OrderSummaryDetailsTitle: string;
    DeliveryMethodHeader: string;
    MotorcycleTextForOptInRep: string;
    MotorcycleTextForOptOutRep: string;
}




