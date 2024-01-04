import { Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { IMailingInfo } from 'common/models';
import { DialogService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from 'common/ui';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { IDeliveryMethodData } from 'vehicles/interfaces';
import { MailingAddressService, VehiclesManagerService } from 'vehicles/shared';
import { NewBillingAddressModalComponent } from 'common/ui';
import { MvuFrameComponent } from '../frame/frame.component';

@Component({
    selector: 'vehicles-mvu-delivery',
    templateUrl: './deliveryMethod.component.html',
    styleUrls: ['./deliveryMethod.component.less']
})
export class MvuDeliveryMethodComponent implements OnInit {

    deliveryMethod: IDeliveryMethodData;
    public mailingInfo: IMailingInfo;
    allowPickup: boolean;

    selectedDeliveryMethod = '';

    @Input() cmsMvuDeliveryMethod: { [key: string]: any };
    @Input() cancellationModal: SiteCoreItem;

    constructor(
        private parent: MvuFrameComponent,
        private stateService: StateService,
        // private vehicleService: VehicleService,
        private vehiclesManagerService: VehiclesManagerService,
        private dialogService: DialogService,
        private mailingService: MailingAddressService,
        @Inject(ENVIRON_CONFIG) private environmentConfig: any
    ) { }

    async ngOnInit() {
        this.deliveryMethod = this.vehiclesManagerService.getDeliveryMethod();
        this.mailingInfo = await this.mailingService.getMailingAddress();
        this.allowPickup = this.environmentConfig.tagDeliveryConfig.MvuAllowPickup;
    }

    async cancel(state: StateDeclaration): Promise<void> {
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
            // this.vehicleService.destroyMvuDetails();
            await this.stateService.go(state);
        }
    }

    async nextStep(state: StateDeclaration): Promise<void> {

        this.deliveryMethod.deliveryMethod = this.selectedDeliveryMethod;

        this.vehiclesManagerService.setDeliveryMethod(this.deliveryMethod);

        await this.stateService.go(state);
    }

    public async onMailingAddressEdit(option: string) {

        this.mailingService.onMailingAddressEdit(option, this.parent.stateList, this.parent.countryList, NewBillingAddressModalComponent);

    }

    public disable(): boolean {
        return this.selectedDeliveryMethod === 'mail' && this.mailingInfo?.address1 === null;
    }

}
