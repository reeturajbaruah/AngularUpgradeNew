import { IModalCmsContent } from 'common/ui';

export interface IAddTagVehicleInfoCMSContent extends IModalCmsContent {
    Title: string;
    confirmBtn?: string;
    ezTagMsgWithoutMotorcycle?: string;
    ezTagWarningMsg?: string;
    motorcycleMsg?: string;
    ezTagMsgWithMotorcycle?: string;
}
