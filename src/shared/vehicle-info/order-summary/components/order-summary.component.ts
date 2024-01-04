import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SiteCoreItem } from 'cms/cms.module';
import { State } from 'common/models';
import { Action, IEvent } from 'vehicles/common';
import { IEZTag } from 'vehicles/interfaces';
import { IOrder, IOrderDetails, IOrderSummary } from '../models';


@Component({
    selector: 'vehicles-order-summary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.less']
})
export class OrderSummaryComponent implements OnInit {

    @Input() data: IOrder;
    summary: IOrderSummary;
    details: IOrderDetails[];
    canEdit: boolean;
    canRemove: boolean;
    @Output() event$ = new EventEmitter<IEvent>();
    orderRemoveContent: SiteCoreItem;
    orderEditContent: SiteCoreItem;
    stateList: State[];

    ngOnInit() {

        this.summary = this.data.summary;
        this.details = this.data.details;

        this.canEdit = this.data.operations.isEditable;
        this.canRemove = this.data.operations.isRemoveable;
        this.orderEditContent = this.data.operations.editContent;
        this.orderRemoveContent = this.data.operations.removeContent;
        this.stateList = this.data.stateList;

    }

    removeVehicle(i: number) {
        this.event$.emit({
            action: Action.Remove,
            source: 'order-summary',
            data: {
                index: i
            }
        });
    }

    editVehicle(editVehicle: IEZTag, i: number) {

        this.event$.emit({
            action: Action.Edit,
            source: 'order-summary',
            data: {
                index: i,
                vehicleEdited: editVehicle
            }
        });

    }
}

