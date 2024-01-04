import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeliveryMethodType, IMailingInfo } from 'common/models';
import { IEvent, IOperation } from 'vehicles/common';
import { IDeliveryMethod } from '../models';
import { DeliveryMethodService } from '../services/delivery-method.service';


@Component({
    selector: 'delivery-method-summary',
    templateUrl: './delivery-method.component.html',
    styleUrls: ['./delivery-method.component.less']
})
export class DeliveryMethodComponent implements OnInit {

    mailingInfo: IMailingInfo;
    @Input() data: IDeliveryMethod;
    type: string;
    isByMail: boolean;
    operations: IOperation[];
    @Output() onClickOperation$ = new EventEmitter<IEvent>();

    constructor(private service: DeliveryMethodService) {

    }

    async ngOnInit() {

        this.mailingInfo = await this.service.getMailingInfo();
        this.setMethodType();

        this.operations = this.data.operations;
    }

    private setMethodType() {

        switch (this.data.type) {

            case DeliveryMethodType.Mail: {
                this.type = 'By Mail';
                this.isByMail = true;
                break;
            }

            case DeliveryMethodType.Store: {
                this.isByMail = false;
                this.type = 'EZ TAG Store Pickup';
                break;
            }

            default:
                break;
        }
    }

    onClickOperation(op: IOperation) {
        this.onClickOperation$.emit({
            action: op.action,
            source: op.source
        });
    }
}


