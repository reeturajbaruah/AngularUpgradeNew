import { SiteCoreItem } from 'cms/cms.module';

export interface ITollRatesSiteCoreItem extends SiteCoreItem {
    selectLocationTitle: string;
    planRouteText: string;
    selectTollRoadFilterLabel: string;
    selectDirOfTravelFilterLabel: string;
    selectVehicleClassFilterLabel: string;
}