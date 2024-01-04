import { InjectionToken } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { VehicleProduct } from 'vehicles/shared/models';

export enum VehicleState {
    active = 'Active',
    inactive = 'Inactive',
    pending = 'Pending',
    pendingActivation = 'Pending Activation',
    expired = 'Expired',
    unknown = 'Unknown',
    lostInMail = 'Lost In Mail'
}

export enum VehicleAction {
    none,
    activate,
    deactivate,
    reactivate,
    replace
}

export interface VehicleFilter {
    product: VehicleProduct;
    isActive: boolean;
    keyword: string;
    visiblePages: number;
}

export interface VehicleCmsContent extends SiteCoreItem {
    eztags: string;
    ezplates: string;
    addEzTag: string;
    addEzPlate: string;
    addMVU: string;
    active: string;
    inactive: string;
    expired: string;
    replace: string;
    pending: string;
    pendingActivation: string;
    ezplateToolTip: string;
    search: string;
    nickname: string;
    yearMakeModel: string;
    licensePlate: string;
    ezTagNumber: string;
    color: string;
    axles: string;
    status: string;
    vehicleLicensePlate: string;
    lostInMail: string;
    reactivate: string;
    tagEditButton: string;
    plateEditButton: string;
    inactivate: string;
}

export interface IVehicleForExcel {
    nickname: string;
    'year/make/model': string;
    'license plate': string;
    'ez tag number'?: string;
    color: string;
    'start date'?: string;
    'end date'?: string;
    axles?: string;
    status: string;
}

//todo: when clean checked in, this needs to be refactored too!
export const MANAGE_VEHICLES_OPTIONS = new InjectionToken('MANAGE_VEHICLES_OPTIONS');
export interface IManageVehiclesOptions {
    pageSize: number;
}

