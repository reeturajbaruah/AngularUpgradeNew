import { Component, Input, OnInit, Inject } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { MailingAddressService, VehiclesManagerService, WebApiService } from 'vehicles/shared';
import {
    IPaymentInfoData,
    IDeliveryMethodData
} from 'vehicles/interfaces';
import { CmsReplacementService } from 'cms/services';
import { CurrentUserService, DialogService, IVehicleClass, ToasterService, WebStorageService } from 'common/services';

import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { VehicleCartBase } from 'vehicles/vehicleCartBase/vehicleCartBase';
import { IMvuReviewOrderCms, IMultiVehicleCheckoutRequest } from 'vehicles/interfaces';
import { VehicleService } from 'common/services';
import { IEzTagResponse } from 'vehicles/interfaces';
import { IDeliveryMethod, IOrder, IPaymentSummary, IReviewOrder } from 'vehicles/common';
import { IMailingInfo, State } from 'common/models';
import { MvuFrameComponent } from '../frame/frame.component';

@Component({
    selector: 'vehicles-mvu-review',
    templateUrl: './reviewOrder.component.html',
    styleUrls: ['./reviewOrder.component.less']
})

export class MvuReviewOrderComponent extends VehicleCartBase implements OnInit {

    @Input() pageCms: IMvuReviewOrderCms;
    @Input() replenishmentAmtModalCms: SiteCoreItem;
    @Input() tagInfoModalCms: SiteCoreItem;
    @Input() cancellationModal: SiteCoreItem;
    @Input() stateList: State[];

    public deliveryMethod: IDeliveryMethodData = {} as IDeliveryMethodData;
    public paymentDueInfo: IPaymentInfoData = {} as IPaymentInfoData;
    public currentBalance: number;
    public mvuDetails: any;
    public inactiveTags: IEzTagResponse[];
    reviewData: IReviewOrder;
    public mailingInfo: IMailingInfo;
    vehicleClassDescList: IVehicleClass[];

    constructor(
        private parent: MvuFrameComponent,
        private state: StateService,
        private vehiclesManagerService: VehiclesManagerService,
        private cmsReplacementService: CmsReplacementService,
        private dialogService: DialogService,
        protected toasterService: ToasterService,
        private webStorage: WebStorageService,
        private vehicleService: VehicleService,
        private checkoutWebApiService: WebApiService,
        private mailingService: MailingAddressService,
        private currentUser: CurrentUserService
    ) {
        super(toasterService);
    }

    async ngOnInit() {
        this.mvuDetails = this.webStorage.getValue('MVU_DETAILS');
        this.parent.showStepper = true;
        this.paymentDueInfo = await this.vehiclesManagerService.getPaymentInfo();
        this.cartTags = this.mvuDetails?.vehicleList?.filter(vehicle => vehicle.action.toUpperCase() === 'ADD');
        this.inactiveTags = this.mvuDetails?.vehicleList?.filter(vehicle => vehicle.action.toUpperCase() === 'INACTIVATE');
        const vehicleInformation = await this.vehicleService.getVehicleInformation();
        this.vehicleClassDescList = vehicleInformation?.classes;
        this.setClassDesc();
        this.deliveryMethod = this.vehiclesManagerService.getDeliveryMethod();
        this.currentBalance = this.vehiclesManagerService.getCurrentBalance();
        this.mailingInfo = await this.mailingService.getMailingAddress();

        const insertValues = {
            currentBalAmt: this.currentBalance,
            minReqAmt: this.paymentDueInfo.depositAmt,
            totalAmt: this.paymentDueInfo.totalAmt
        };

        this.pageCms.RebillToolTip = this.cmsReplacementService.transformTemplate(this.pageCms.RebillToolTip, insertValues);
        this.setupReviewOrderData();
    }

    private setupReviewOrderData() {
        const order = this.mapOrderSummary();
        const delivery = this.mapDeliveryMethod();
        const payment = this.mapPaymentSummary();

        this.reviewData = {
            orderSummary: order,
            deliveryMethod: delivery,
            paymentSummary: payment
        } as IReviewOrder;
    }

    private mapOrderSummary() {

        return {
            display: true,
            summary: {
                title: this.pageCms.Title,
                description: this.pageCms.LongDescription
            },
            details: [
                {
                    title: this.pageCms.ezTagSubtitle,
                    tags: this.cartTags,
                    isPlate: false
                },
                {
                    title: this.pageCms.InactivationSubtitle,
                    tags: this.inactiveTags,
                    isPlate: false
                }
            ]
            ,
            operations: {
                isEditable: false,
                isRemoveable: false,
                removeAllOrders: false
            },
            stateList: this.stateList

        } as IOrder;

    }

    private mapDeliveryMethod() {

        return {
            display: true,
            header: this.pageCms.DeliveryMethodTitle,
            context: this.pageCms.deliveryMethodDesc,
            type: this.deliveryMethod.deliveryMethod,
            operations: [
                {
                    label: 'Edit',
                    display: false
                }
            ]
        } as IDeliveryMethod;

    }

    private mapPaymentSummary() {

        return {
            header: this.pageCms.PaymentSummaryTitle,
            paymentContext: this.pageCms.PaymentContext,
            replenishmentAmt: {
                link: {
                    linkDesc: 'Learn more about Replenishment amounts',
                    onClickContent: this.replenishmentAmtModalCms
                },
                isOptIn: this.currentUser.getCurrentUser().rebillOptIn
            },
            tagInfo: {
                display: true,
                contextDesc: this.pageCms.TagInfo,
                link: {
                    linkDesc: this.pageCms.TagInfoModalLink,
                    onClickContent: this.tagInfoModalCms
                }
            },
            paymentDueInfo: {
                tagSalesAmt: this.paymentDueInfo.tagSalesAmt,
                totalAmt: this.paymentDueInfo.totalAmt,
                rebillTooltip: this.pageCms.RebillToolTip
            }
        } as IPaymentSummary;

    }


    public async setClassDesc() {
        this.cartTags.forEach((vehicle) => {
            vehicle.vehicleClassDesc = this.getVehicleClassDesc(vehicle.vehicleClassCode);
        });
        this.inactiveTags.forEach((vehicle) => {
            vehicle.vehicleClassDesc = this.getVehicleClassDesc(vehicle.vehicleClassCode);
        });
    }

    public getVehicleClassDesc(code) {
        const filteredVehicleClassInfo = this.vehicleClassDescList?.filter(info => info.value?.toString() === code?.toString());
        return (filteredVehicleClassInfo.length > 0) ? filteredVehicleClassInfo[0].label : null;
    }

    public async submit(nextState: StateDeclaration) {

        const updated = await this.mailingService.setMailingAddressOnAcctLevel();

        if (updated) {
            const res = await this.checkoutWebApiService.mvuCheckout({
                vehicleList: this.mvuDetails?.vehicleList,
                vehicleAddList: this.mvuDetails?.vehicleList?.filter(vehicle => vehicle.action.toUpperCase() === 'ADD'),
                fileName: this.mvuDetails?.fileName
            } as IMultiVehicleCheckoutRequest);

            if (res) {
                await this.state.go(nextState);
            }
        }
    }

    public async cancel(state: StateDeclaration) {
        const data: GenericCmsModalInjectionValues = {
            cmsContent: {
                Title: this.cancellationModal.Title,
                PrimaryContent: this.cancellationModal.LongDescription,
                AcceptBtn: 'No',
                CancelBtn: 'Yes'
            }
        };

        const res = await this.dialogService.openGenericModal(GenericCmsModalComponent, data);

        if (!res) {
            this.vehiclesManagerService.clearData();
            this.vehicleService.destroyMvuDetails();
            await this.state.go(state);
        }
    }

}
