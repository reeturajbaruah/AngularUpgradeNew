import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { MailingAddressService, VehiclesManagerService } from 'vehicles/shared';
import {
    IPaymentInfoData,
    IDeliveryMethodData,
    IEZTag
} from 'vehicles/interfaces';
import { CmsReplacementService } from 'cms/services';
import { DialogService, ToasterService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { VehicleCartBase } from 'vehicles/vehicleCartBase/vehicleCartBase';
import { Action, IDeliveryMethod, IOrder, IPaymentSummary, IReviewOrder, ITagInfo, ReviewOrderService } from 'vehicles/common';
import { IMailingInfo, State } from 'common/models';
import { AddTagFrameComponent } from '../frame/frame.component';
import { States as VehicleStates } from '../../states';
import { IReviewOrderCms } from 'vehicles/shared';

@Component({
    selector: 'vehicles-addTag-review-component',
    templateUrl: './reviewOrder.html',
    styleUrls: ['./reviewOrder.less']
})
export class AddTagReviewOrderComponent extends VehicleCartBase implements OnInit, OnDestroy {

    @Input() pageCms: IReviewOrderCms;
    @Input() deleteModalCms: SiteCoreItem;
    @Input() editModalCms: SiteCoreItem;
    @Input() replenishmentAmtModalCms: SiteCoreItem;
    @Input() tagInfoModalCms: SiteCoreItem;
    @Input() cancellationModal: SiteCoreItem;
    @Input() stateList: State[];

    public addVehicle: IEZTag;
    public addingAdditionalVehicle: boolean;
    public deliveryMethod: IDeliveryMethodData = {} as IDeliveryMethodData;
    public paymentDueInfo: IPaymentInfoData = {} as IPaymentInfoData;
    public currentBalance: number;
    public currentUser: any;

    reviewData: IReviewOrder;
    public mailingInfo: IMailingInfo;

    constructor(
        private parent: AddTagFrameComponent,
        private state: StateService,
        private manager: VehiclesManagerService,
        private cmsReplacementService: CmsReplacementService,
        private dialogService: DialogService,
        protected toasterService: ToasterService,
        private reviewOrderService: ReviewOrderService,
        private mailingService: MailingAddressService
    ) {
        super(toasterService);
    }

    async ngOnInit() {

        this.parent.showStepper = true;
        this.mailingInfo = await this.mailingService.getMailingAddress();
        this.paymentDueInfo = await this.manager.getPaymentInfo();
        this.cartTags = this.manager.getVehicleInfoList();
        this.deliveryMethod = this.manager.getDeliveryMethod();
        this.currentBalance = this.manager.getCurrentBalance();
        this.currentUser = this.manager.getCurrentUser();
        const insertValues = {
            currentBalAmt: this.currentBalance,
            minReqAmt: this.paymentDueInfo.depositAmt,
            totalAmt: this.paymentDueInfo.totalAmt
        };
        this.pageCms.RebillToolTip = this.cmsReplacementService.transformTemplate(this.pageCms.RebillToolTip, insertValues);

        this.setupReviewOrderData();
        this.subscribeEvents();

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
                    title: 'EZ TAGS REQUESTED',
                    tags: this.cartTags,
                    isPlate: false
                }
            ],
            operations: {
                isEditable: true,
                isRemoveable: true,
                editContent: this.editModalCms,
                removeContent: this.deleteModalCms
            },
            stateList: this.stateList

        } as IOrder;

    }

    private mapDeliveryMethod() {

        return {
            display: true,
            header: this.pageCms.DeliveryMethodTitle,
            type: this.deliveryMethod.deliveryMethod,
            operations: [
                {
                    label: 'Edit',
                    display: true,
                    action: Action.Edit,
                    source: 'delivery-method'
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
                isOptIn: this.currentUser.rebillOptIn
            },
            tagInfo: this.mapPaymentSummTagInfo(),
            paymentDueInfo: {
                tagSalesAmt: this.paymentDueInfo.tagSalesAmt,
                totalAmt: this.paymentDueInfo.totalAmt,
                rebillTooltip: this.pageCms.RebillToolTip
            }
        } as IPaymentSummary;
    }

    private mapPaymentSummTagInfo(): ITagInfo {
        let hasMotorCycle = false;

        this.cartTags.forEach(tag => {
            if (tag.motorcycle) {
                hasMotorCycle = true;
                return;
            }
        });

        const motorcycleText = this.currentUser.rebillOptIn ? this.pageCms.MotorcycleTextForOptInRep :
            this.pageCms.MotorcycleTextForOptOutRep;

        return {
            display: true,
            contextDesc: this.pageCms.TagInfo,
            link: {
                linkDesc: this.pageCms.TagInfoModalLink,
                onClickContent: this.tagInfoModalCms
            },
            motorcycleText: hasMotorCycle ? motorcycleText : null

        };

    }

    private subscribeEvents() {

        this.reviewOrderService.subscribe(async event => {
            if (event.action === Action.Edit) {
                if (event.source === 'delivery-method') {
                    this.editDeliveryMethod();
                }
                if (event.source === 'order-summary') {
                    await this.editVehicle(event.data.vehicleEdited, event.data.index);
                    this.setupReviewOrderData();
                }
            }
            if (event.action === Action.Remove) {
                if (event.source === 'order-summary') {
                    await this.removeVehicle(event.data.index);
                    this.setupReviewOrderData();
                }
            }

        });

    }


    public async addEzTagReceiptClick(nextState: StateDeclaration) {

        const updated = await this.mailingService.setMailingAddressOnAcctLevel();

        if (updated) {
            const res = await this.manager.submitOrder();

            if (res) {
                // this.reviewOrderService.unsubscribe();
                await this.state.go(nextState);
            }
        }

    }

    async removeVehicle(index: number) {
        await this.manager.removeVehicleInfoItem(index);
    }

    async editVehicle(editVehicle: IEZTag, index: number) {
        const selectedEzTag: IEZTag = this.cartTags[index];

        //This check is to check that if the plate has changed; checks for both state and plate number against plates currently in the cart
        if (selectedEzTag.licPlate !== editVehicle.licPlate || selectedEzTag.licState !== editVehicle.licState) {
            if (!this.checkIfLicExistsInCart(editVehicle.licPlate, editVehicle.licState)) {
                await this.manager.editVehicleInfoItem(editVehicle, index);
            }
        } else {
            await this.manager.editVehicleInfoItem(editVehicle, index);
        }
    }

    editDeliveryMethod() {
        this.state.go(VehicleStates.TagDeliveryMethod);
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
            this.manager.clearData();
            await this.state.go(state);
        }
    }

    ngOnDestroy() {
        this.reviewOrderService.unsubscribe();
    }

}
