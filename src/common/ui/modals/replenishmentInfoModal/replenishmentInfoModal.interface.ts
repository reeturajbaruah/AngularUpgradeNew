import { SiteCoreItem } from 'cms/cms.module';

export interface IReplenishmentInfoInjectionValues {
    modalCms: IReplenishmentTableItemSCI;
}

export interface IReplenishmentTableItem {
    numVehicles: string;
    rebillAmt: string;
    rebillMin: string;
}

export interface IReplenishmentTableItemSCI extends SiteCoreItem {
    ONE_TWO_VEHICLE_REBILL: string;
    ONE_TWO_VEHICLE_LB: string;
    THREE_FOUR_VEHICLE_REBILL: string;
    THREE_FOUR_VEHICLE_LB: string;
    FIVE_SIX_VEHICLE_REBILL: string;
    FIVE_SIX_VEHICLE_LB: string;
    SEVEN_EIGHT_VEHICLE_REBILL: string;
    SEVEN_EIGHT_VEHICLE_LB: string;
    MORE_THAN_EIGHT_VEHICLE_REBILL: string;
    MORE_THAN_EIGHT_VEHICLE_LB: string;
}
