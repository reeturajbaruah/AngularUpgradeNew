import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { SiteCoreItem } from 'cms/cms.module';
import { Country, DeliveryMethodType, IMailingInfo, State } from 'common/models';
import { IOrder } from 'vehicles/common';
import { IEZTag } from 'vehicles/interfaces';
import { ReplacementStateService } from 'vehicles/eztag/replacement/services';
import { ReplacementHelperService } from 'vehicles/eztag/replacement/services/helper/helper-service';
import { IDeliveryMethodContent } from './model';
import { NewBillingAddressModalComponent } from 'common/ui';
import { MailingAddressService, States } from 'vehicles/shared';

@Component({
    selector: 'delivery-method',
    templateUrl: './delivery-method.component.html',
    styleUrls: ['./delivery-method.component.less']
})
export class DeliveryMethodComponent implements OnInit {

    selectedDeliveryMethod = '';
    tag: IEZTag;
    data: IOrder;
    @Input() stateList: State[];
    @Input() countryList: Country[];
    @Input() cancelContent: SiteCoreItem;
    selectedReason = '';
    @Input() cmsContent: IDeliveryMethodContent;
    public mailingInfo?: IMailingInfo;

    constructor(private state: StateService,
        private replacementStateService: ReplacementStateService,
        private uiRouterGlobals: UIRouterGlobals,
        private helperService: ReplacementHelperService,
        private mailingService: MailingAddressService
    ) {
    }

    async ngOnInit() {
        if (this.uiRouterGlobals.params && this.uiRouterGlobals.params.vehicle) {
            const vehicle: IEZTag = this.uiRouterGlobals.params.vehicle;
            this.tag = vehicle;
        } else {
            const state = this.replacementStateService.getState();
            if (state.replaceTag && state.reason && state.deliveryMethod) {
                this.tag = state.replaceTag;
                this.selectedReason = state.reason;
                this.selectedDeliveryMethod = state.deliveryMethod.toString();
            } else {
                await this.state.go(States.Root);
            }
        }

        this.mailingInfo = await this.mailingService.getMailingAddress();

        this.setupData();
        this.selectedReason = JSON.parse(this.cmsContent.reasons)[0].key;
    }

    private setupData() {

        this.data = {
            display: true,
            summary: {
                title: this.cmsContent.summaryTitle,
                description: this.cmsContent.summaryDescription
            },
            details: [
                {
                    tags: [this.tag],
                    title: this.cmsContent.detailsTitle,
                    isPlate: false
                }
            ],
            operations: {
                isEditable: false,
                isRemoveable: false
            },
            stateList: this.stateList
        };

    }

    async nextStep(state: StateDeclaration) {

        this.replacementStateService.setState({
            deliveryMethod: this.selectedDeliveryMethod === DeliveryMethodType.Mail ?
                DeliveryMethodType.Mail : DeliveryMethodType.Store,
            reason: this.selectedReason,
            replaceTag: this.tag
        });

        await this.state.go(state);
    }

    public async onMailingAddressEdit(option: string) {

        this.mailingService.onMailingAddressEdit(option, this.stateList, this.countryList, NewBillingAddressModalComponent);

    }


    async cancel(state: StateDeclaration) {
        await this.helperService.cancel(this.cancelContent, state);
    }

    public disable(): boolean {
        return this.selectedDeliveryMethod === 'mail' && this.mailingInfo?.address1 === null;
    }
}

