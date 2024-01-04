import { SiteCoreItem } from 'cms/cms.module';
import { BaseResponse } from 'common/interfaces';
import { IVehicleInfo, State, IMailingInfo } from 'common/models';
import { IAddPlateVehicleInfoCMSContent } from './shared';
import { GetContactInfoResponse, SetContactInfoRequest } from 'common/services';
//used for Add Plate Frame stepper
export interface IAddPlateFrameCmsContent {
    step1: string;
    step2: string;
    step3: string;
}

//used for Add Tag Frame stepper
export interface IAddTagFrameCmsContent {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
}

//represents tag/plate data associated to a single vehicle
export interface IEZTag extends IVehicleInfo {
    tagId: string;
    fullTagId: string;
    acctTagSeq: number;
    acctTagSeqSepcified: boolean;
    acctTagStatus: string;
    tagStatusDesc: string;
    pbpStartDate: string;
    pbpEndDate: string;
    tagTypeCode: string;
    activePbpTagExist: boolean;
    tagless_Desc: string;
    acctVehicleId: number;
    nicknameHasBeenManuallyCopiedinApiAndIsForDisplayOnly: boolean;
}

//Used for Cart/Review Order and Receipts
export interface IPaymentInfoData {
    transactionId: number;
    depositAmt: number; // New minimum balance (not used in this process so ignore)
    totalAmt: number; // Total amount user will have to pay
    tagSalesAmt: number; // Pre-paid deposit
    tagAmount: number; // Tag cost; Set by the api call of calculateActivationFee
}

//Used for Delivery Method and Receipts
export interface IDeliveryMethodData {
    deliveryMethod: string; // Needed for EZTAG flow
}

//this is for the plate/tag info that is passed from step to step for Add Plate/Tag flow
export interface IStepperData extends IPaymentInfoData, IDeliveryMethodData {
    vehicleList: IEzTagResponse[];
    lastEditIndex: number;
}

export interface IMailingAddressInfo {
    mailingInfo: IMailingInfo;
    requestInfo: SetContactInfoRequest;
    contactInfo: GetContactInfoResponse;
}

//Request for calculating fees for EZTag/EZPlate
export interface IEZTagRequest extends IEZTag {
    transactionId: number;
    tagSalesAmt: number;
    depositAmt: number;
    totalAmt: number;
}

//Request for adding Plate/Tag data to an account
export interface IConfirmTagsRequest {
    transactionId: number;
    tagSalesAmount: number;
    depositAmount: number;
    totalAmount: number;
    tagList: IEZTag[];
    deliveryMethod: string;
}

//Response for Landing Page Grid
export interface IManageEzTagResponse extends BaseResponse {
    accountTags: IEZTag[];
    pbpTags: IEZTag[];
    currentBalance: number;
    acctId: number;
    isSwitchError: boolean;
    multiVehicleAllowed: boolean;
    maxEzPlatesAllowed: number;
    isExpressPlan: boolean;
}

//Request for Landing Page Search
export interface ISearchTagsRequest {
    searchValue: string;
}

//Request for Landing Page Switch Status
export interface ISwitchEzTagStatusRequest {
    tagToSwitch: IEZTag;
}

//MVU data for a single vehicle
export interface IMultiVehicleEZTag extends IEZTag {
    rowNumber: number;
    uploadAction: string;
    action: string;
    ezTagRequired: boolean;
    ezTagEnter: string;
    temporaryLicPlateEnter: string;
}

//MVU Request
export interface IMultiVehicleCheckoutRequest {
    vehicleList: IMultiVehicleEZTag[];
    vehicleAddList: IMultiVehicleEZTag[];
    fileName: string;
}

export interface IEzTagResponse extends IEZTag, BaseResponse, IPaymentInfoData {
    violationExist: boolean;
}

export interface IEditPlateInjectedValues {
    plate: IEZTag;
    header: string;
    cmsContent: IAddPlateVehicleInfoCMSContent;
    showStatus: boolean;
    statesList: State[];
    status: IStatus;
    savePlate?: boolean;
}

export interface IStatus {
    active: string;
    inactive: string;
}

//used for Add Tag Frame stepper
export interface IMvuFrameCmsContent {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
}

export interface IDownInstructCmsContent extends SiteCoreItem {
    SearchTitle: string;
    SearchDescription: string;
}

export interface IMvuResponse extends BaseResponse {
    transactionId: number;
    vehicleList: IMultiVehicleEZTag[];
    depositAmt: number;
    tagSalesAmt: number;
    totalAmt: number;
    inactivationOnly: boolean;
    reportId: number;
    hardErrorCount: number;
    vehicleAddCount: number;
    vehicleInactivateCount: number;
    fileName: string;
}

export interface IMvuReviewOrderCms extends SiteCoreItem {
    DeliveryMethodTitle: string;
    PaymentSummaryTitle: string;
    PaymentContext: string;
    TagInfo: string;
    TagInfoModalLink: string;
    RebillToolTip: string;
    InactivationTitle: string;
    ezTagSubtitle: string;
    InactivationSubtitle: string;
    deliveryMethodDesc: string;
}

export interface IActivateEzTagConfirmCms extends SiteCoreItem {
    ListLabel: string;
    CheckboxLabel: string;
    Agreement: string;
}

export interface IActivateEzTagWizardInfo {
    transactionId: string;
    listOfVehicles: IEZTag[];
}


