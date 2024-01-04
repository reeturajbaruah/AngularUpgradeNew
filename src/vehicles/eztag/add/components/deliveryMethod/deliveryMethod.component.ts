import { Component, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import {
    IMailingInfo
} from 'common/models';
import { MailingAddressService, VehiclesManagerService } from 'vehicles/shared';
import { Observable } from 'rxjs';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { SiteCoreItem } from 'cms/cms.module';
import { DialogService } from 'common/services';
import { AddTagFrameComponent } from '../frame/frame.component';
import { IDeliveryMethodData } from 'vehicles/interfaces';
import { NewBillingAddressModalComponent } from 'common/ui';

@Component({
    selector: 'vehicles-addTag-delivery-component',
    templateUrl: './deliveryMethod.html',
    styleUrls: ['./deliveryMethod.less']
})
export class AddTagDeliveryMethodComponent implements OnInit {

    public deliveryMethod: IDeliveryMethodData;
    public selectedDeliveryMethod = '';
    public mailingInfo?: IMailingInfo;

    constructor(
        private parent: AddTagFrameComponent,
        private state: StateService,
        private manager: VehiclesManagerService,
        private dialogService: DialogService,
        private mailingService: MailingAddressService
    ) { }

    @Input() public cmsAddTagDeliveryMethod: { [key: string]: any };
    @Input() cancellationModal: SiteCoreItem;

    async ngOnInit() {

        this.deliveryMethod = this.manager.getDeliveryMethod();
        this.mailingInfo = await this.mailingService.getMailingAddress();

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

    public async nextStep(state: StateDeclaration) {

        this.deliveryMethod.deliveryMethod = this.selectedDeliveryMethod;

        this.manager.setDeliveryMethod(this.deliveryMethod);

        await this.state.go(state);
    }

    public async onMailingAddressEdit(option: string) {

        this.mailingService.onMailingAddressEdit(option, this.parent.stateList, this.parent.countryList, NewBillingAddressModalComponent);

    }

    public disable(): boolean {
        return this.selectedDeliveryMethod === 'mail' && this.mailingInfo?.address1 === null;
    }
}
