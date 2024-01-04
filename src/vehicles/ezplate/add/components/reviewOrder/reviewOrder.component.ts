import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { VehiclesManagerService } from 'vehicles/shared';
import {
    IPaymentInfoData,
    IEZTag,
    IEzTagResponse
} from 'vehicles/interfaces';
import { CmsReplacementService } from 'cms/services';
import { DialogService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { Action, IDeliveryMethod, IOrder, IPaymentSummary, IReviewOrder, ReviewOrderService } from 'vehicles/common';
import { IReviewOrderCms } from 'vehicles/shared';
import { AddPlateFrameComponent } from '../frame/frame.component';
import { State } from 'common/models';


@Component({
    selector: 'vehicles-addPlate-review-component',
    templateUrl: './reviewOrder.html',
    styleUrls: ['./reviewOrder.less']
})
export class AddPlateReviewComponent implements OnInit, OnDestroy {

    @Input() pageCms: IReviewOrderCms;
    @Input() editModalCms: SiteCoreItem;
    @Input() replenishmentAmtModalCms: SiteCoreItem;
    @Input() cancellationModal: SiteCoreItem;
    @Input() stateList: State[];

    public cartTags: IEzTagResponse[];
    public paymentDueInfo: IPaymentInfoData = {} as IPaymentInfoData;
    public currentBalance: number;
    public currentUser: any;

    reviewData: IReviewOrder;

    constructor(
        private frame: AddPlateFrameComponent,
        private state: StateService,
        private manager: VehiclesManagerService,
        private cmsReplacementService: CmsReplacementService,
        private dialogService: DialogService,
        private reviewOrderService: ReviewOrderService

    ) { }

    async ngOnInit() {
        this.frame.showStepper = true;

        this.paymentDueInfo = await this.manager.getPaymentInfo();

        this.cartTags = this.manager.getVehicleInfoList();

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
                    title: 'EZ PLATES REQUESTED',
                    tags: this.cartTags ? [this.cartTags[0]] : [],
                    isPlate: true
                }
            ],
            operations: {
                isEditable: true,
                isRemoveable: false,
                editContent: this.editModalCms,
            },
            stateList: this.stateList

        } as IOrder;

    }

    private mapDeliveryMethod() {

        return {
            display: false
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
            tagInfo: {
                display: false,
            },
            paymentDueInfo: {
                tagSalesAmt: this.paymentDueInfo.tagSalesAmt,
                totalAmt: this.paymentDueInfo.totalAmt,
                rebillTooltip: this.pageCms.RebillToolTip
            }
        } as IPaymentSummary;

    }

    private subscribeEvents() {

        this.reviewOrderService.subscribe(event => {
            if (event.action === Action.Edit) {

                if (event.source === 'order-summary') {
                    this.editVehicle(event.data.vehicleEdited, event.data.index);
                }
            }

        });

    }

    public async addEzPlateReceiptClick(nextState: StateDeclaration) {
        const res = await this.manager.submitOrder();

        if (res) {
            await this.state.go(nextState);
        }
    }

    public editVehicle(editVehicle: IEZTag, index: number) {
        this.manager.editVehicleInfoItem(editVehicle, index);
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
