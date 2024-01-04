import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from 'vehicles/common';
import { IOrder } from 'vehicles/common/order-summary/models';
import { IMailingInfo } from 'common/models';
import { IReviewOrder } from '../models/review-order.models';
import { ReviewOrderService } from '../services/review-order.service';


@Component({
    selector: 'review-order',
    templateUrl: './review-order.component.html',
    styleUrls: ['./review-order.component.less'],

})
export class ReviewOrderComponent implements OnInit {

    @Input() data: IReviewOrder;
    @Input() ezTagMailingAddress: IMailingInfo;
    @Input() isAddEzTag: boolean;
    order: IOrder;

    constructor(private service: ReviewOrderService) { }

    ngOnInit() {

        this.order = this.data.orderSummary;
    }

    onClickOperation(event: IEvent) {
        this.service.dispatchAction(event);
    }

}
