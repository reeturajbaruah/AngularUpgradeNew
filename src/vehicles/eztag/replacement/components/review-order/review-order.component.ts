import { Component, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/core';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsReplacementService } from 'cms/services';
import { DeliveryMethodType, State, IMailingInfo } from 'common/models';
import { CurrentUserService, ToasterService } from 'common/services';
import { Action, IReviewOrder, ITagInfo, ReviewOrderService } from 'vehicles/common';
import { IEZTag, IPaymentInfoData } from 'vehicles/interfaces';
import { ReplacementStateService } from 'vehicles/eztag/replacement/services';
import { VehiclesReplacementFacadeService } from 'vehicles/eztag/replacement/services/facade/vehicles-replacement-facade.service';
import { ReplacementHelperService } from 'vehicles/eztag/replacement/services/helper/helper-service';
import { States } from 'vehicles/eztag/replacement/states';
import { MailingAddressService, PaymentInfoService } from 'vehicles/shared';
import { IReviewOrderCms } from '../../models/model';

@Component({
    selector: 'replacement-review-order',
    templateUrl: './review-order.component.html',
    styleUrls: ['./review-order.component.less']
})
export class ReviewOrderComponent implements OnInit {

    @Input() pageCms: IReviewOrderCms;
    @Input() replenishmentAmtModalCms: SiteCoreItem;
    @Input() tagInfoModalCms: SiteCoreItem;
    @Input() states: State[];
    data: IReviewOrder;
    public paymentDueInfo: IPaymentInfoData = {} as IPaymentInfoData;
    public currentBalance: number;
    public mailingInfo: IMailingInfo;
    tags: IEZTag;
    @Input() cancelContent: SiteCoreItem;

    constructor(private stateService: StateService,
        private replacementStateService: ReplacementStateService,
        private cmsReplacementService: CmsReplacementService,
        private paymentInfoService: PaymentInfoService,
        private reviewOrderService: ReviewOrderService,
        private helperService: ReplacementHelperService,
        private facade: VehiclesReplacementFacadeService,
        private toaster: ToasterService,
        private mailingService: MailingAddressService,
        private currentUserService: CurrentUserService

    ) { }

    async ngOnInit() {

        this.tags = this.replacementStateService.getState().replaceTag;
        this.paymentDueInfo = await this.paymentInfoService.getPaymentInfo([this.tags]);
        this.currentBalance = this.paymentInfoService.getCurrentBalance();
        this.mailingInfo = await this.mailingService.getMailingAddress();

        const insertValues = {
            currentBalAmt: this.currentBalance,
            minReqAmt: this.paymentDueInfo.depositAmt,
            totalAmt: this.paymentDueInfo.totalAmt
        };
        this.pageCms.RebillToolTip = this.cmsReplacementService.transformTemplate(this.pageCms.RebillToolTip, insertValues);

        this.setupData();
        this.subscribeEvents();
    }

    private setupData() {
        this.data = {
            deliveryMethod: {
                display: true,
                header: this.pageCms.DeliveryMethodHeader,
                operations: [
                    {
                        action: Action.Edit,
                        display: true,
                        label: 'Edit',
                        source: 'delivery-method'

                    }
                ],
                type: this.replacementStateService.getState().deliveryMethod
            },
            orderSummary: {
                display: true,
                summary: {
                    title: this.pageCms.OrderSummaryTitle,
                    description: this.pageCms.OrderSummaryDesc
                },
                details: [
                    {
                        tags: [this.tags],
                        title: this.pageCms.OrderSummaryDetailsTitle,
                        isPlate: false
                    }
                ],
                operations: {
                    isEditable: false,
                    isRemoveable: false
                },
                stateList: this.states
            },
            paymentSummary: this.mapPaymentSummary()

        };
    }

    private mapPaymentSummary() {
        return {
            header: this.pageCms.PaymentSummaryTitle,
            paymentContext: this.pageCms.PaymentContext,
            replenishmentAmt: {
                link: {
                    linkDesc: this.pageCms.ReplenishmentAmtDesc,
                    onClickContent: this.replenishmentAmtModalCms
                },
                isOptIn: this.currentUserService.getCurrentUser().rebillOptIn
            },
            tagInfo: this.mapPaymentSummTagInfo(),
            paymentDueInfo: {
                tagSalesAmt: this.paymentDueInfo.tagSalesAmt,
                totalAmt: this.paymentDueInfo.totalAmt,
                rebillTooltip: this.pageCms.RebillToolTip
            }
        };
    }

    private mapPaymentSummTagInfo(): ITagInfo {

        const rebillOptIn = this.currentUserService.getCurrentUser().rebillOptIn;
        const motorcycleText = rebillOptIn ? this.pageCms.MotorcycleTextForOptInRep :
            this.pageCms.MotorcycleTextForOptOutRep;

        return {
            display: true,
            contextDesc: this.pageCms.TagInfo,
            link: {
                linkDesc: this.pageCms.TagInfoModalLink,
                onClickContent: this.tagInfoModalCms
            },
            motorcycleText: this.tags.motorcycle ? motorcycleText : null
        };
    }

    private subscribeEvents() {

        this.reviewOrderService.subscribe(event => {
            if (event.action === Action.Edit) {
                if (event.source === 'delivery-method') {
                    this.editDeliveryMethod();
                }
            }

        });

    }

    private editDeliveryMethod() {
        this.stateService.go(States.ReplacementDeliveryMethod);
    }

    async placeOrder(state: StateDeclaration) {

        const updated = await this.mailingService.setMailingAddressOnAcctLevel();

        if (updated) {
            const res = await this.facade.replace();
            if (res.successStatus) {
                const oldState = this.replacementStateService.getState();
                this.replacementStateService.setState(
                    {
                        ...oldState,
                        amount: this.paymentDueInfo.totalAmt
                    }
                );

                await this.stateService.go(state);

            }
            else {
                this.toaster.show('Error', res.errors[0].message);
            }
        }

    }

    async cancel(state: StateDeclaration) {
        await this.helperService.cancel(this.cancelContent, state);

    }
}
