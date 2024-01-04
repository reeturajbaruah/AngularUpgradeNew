import { SiteCoreItem } from 'cms/cms.module';
import { IEZTag } from 'vehicles/interfaces';

export interface IActivateEzTagConfirmCms extends SiteCoreItem {
    ListLabel: string;
    CheckboxLabel: string;
    Agreement: string;
    ActivateLabel: string;
}

export interface IActivateEzTagCompletionCms extends SiteCoreItem {
    Agreement: string;
    CancelLoggedIn: string;
    CancelNotLoggedIn: string;
    CompletionTitle: string;
    EzTagList: string;
    NextLoggedIn: string;
    NextNotLoggedIn: string;
    VehicleInfoTitle: string;
    NextKiosk: string;
}

export interface IActivateEzTagWizardInfo {
    transactionId: string;
    listOfVehicles: IEZTag[];
}

export interface IActivateTag {
    accountId: any;
    transactionId: string;
    phoneNumber?: string;
    emailAddress?: string;
}
