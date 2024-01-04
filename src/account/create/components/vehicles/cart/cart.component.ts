import { Component, OnInit, Input, OnDestroy, HostListener, AfterViewInit } from '@angular/core';
import { VehicleOperationService } from 'account/create/services/vehicles/operations/service/vehicle-operation-service';
import { DialogService, ToasterService } from 'common/services';
import { Event, IEZTag, IVehicleConfig, IVehicleOperationEvent, IVehiclesCartList } from 'shared/vehicle-info';
import * as _ from 'lodash';
import { StateService } from '@uirouter/core';
import { States } from 'account/create/states';
import { VehiclesOperationHelper } from 'account/create/services/vehicles/operations/helper/operation-helper';
import { Prop } from 'account/create/models/current-step.model';
import { StoreService } from 'account/create/services/store/store.service';
import { SiteCoreItem } from 'cms/cms.module';
import { ICartCms } from 'account/create/models/add-vehicle.models';
import { FrameComponent } from '../../frame/frame.component';
import { Urls } from 'storefront/constants';
import { StateDeclaration } from '@uirouter/angular';
import { WizardComponent } from 'common/ui';
import { StateNames as Home } from 'home/constants';
import { NavigationService } from 'account/create/services/navigation/navigation.service';
import { TagType } from '../../../../../common/models';
import { CampaignEventName, IPageEvent } from 'account/create/models/campaign-models';
import { ComponentManagerService } from 'account/create/services/manager/component-manager-service';
import { IToggles } from 'account/create/models/toggles.models';

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.less']
})
export class VehiclesCartComponent implements OnInit {

    vehicles: IEZTag[];
    @Input() cartListData: IVehiclesCartList;
    @Input() cms: ICartCms;
    submitBtnText: string;
    skipDeliveryStep = false;
    navigationLinks = { prev: null, next: null };
    pageName = 'Cart';
    toggles: IToggles;

    constructor(private opsService: VehicleOperationService,
        private toasterService: ToasterService,
        private stateService: StateService,
        private opsHelper: VehiclesOperationHelper,
        private store: StoreService,
        private parent: FrameComponent,
        private navigation: NavigationService,
        private manager: ComponentManagerService
    ) {

    }

    async ngOnInit() {
        this.toggles = await this.manager.getToggles();
        await this.parent.campaignInit(this.pageName);

        this.parent.showHeader = false;
        this.vehicles = this.cartListData.ezTags;
        await this.tagsProcessor();
        this.navigationLinks = this.navigation.navigation(States.VehicleInfo);
    }

    private async tagsProcessor() {

        if (this.toggles.EzTagOption) {
            this.checkVehiclesTags();
            await this.skipNextStepCheck();
            this.setNextBtnText();
        } else {
            this.setNextBtnText();
        }

    }

    private setNextBtnText() {
        this.submitBtnText = this.parent.nextButtonText(States.VehicleInfo, this.skipDeliveryStep);
    }

    private checkVehiclesTags() {
        this.vehicles.forEach(v => {
            if (v.tagId === TagType.NoTag) {
                v.tagInfo = { hasTag: false, desc: this.cms.tagNotOrdered };
            } else {
                v.tagInfo = { hasTag: true, desc: this.cms.tagOrdered };
            }
        });

    }

    private async skipNextStepCheck() {

        this.skipDeliveryStep = await this.parent.skipDeliveryStep();
        this.navigationLinks = this.navigation.navigation(States.VehicleInfo);


    }

    async next(event) {

        await this.manager.campaign({ pageEvent: IPageEvent.Submit, pageName: this.pageName });
        this.stateService.go(this.navigationLinks.next.name);
    }

    async cancel(state: StateDeclaration, wizardUi: WizardComponent) {
        return await this.parent.cancel(this.cartListData.modalContent.cancel, wizardUi);

    }

    async listenToVehiclesOperations(event: IVehicleOperationEvent) {

        switch (event.name) {

            case Event.Edit:
                await this.edit(event.data.vehicle, event.data.index);
                this.tagsProcessor();
                break;

            case Event.Remove:
                await this.remove(event.data.index);
                this.tagsProcessor();
                break;

            case Event.Add:
                await this.add(event.data.vehicle);
                this.tagsProcessor();
                break;

        }

    }


    async add(vehicle?: IEZTag) {
        const vehicleExists = this.vehicles.filter(v =>
            v.licPlate.toUpperCase() === vehicle.licPlate.toUpperCase() &&
            v.licState.toUpperCase() === vehicle.licState.toUpperCase()
        );

        if (vehicleExists.length > 0) {
            this.toasterService.show('Error', this.cms.vehicleExists);
        } else {

            // todo: move it to helper
            const ezTagOptionConfig = this.cartListData.config?.ezTagOptionConfig;
            if (ezTagOptionConfig && !ezTagOptionConfig.ezTagOrder.flag) {
                vehicle.tagTypeCode = 'NOTAG';
            }

            const res = await this.opsService.add(vehicle);
            if (res) {
                this.vehicles.push(res);
                this.store.dispatch(Prop.Vehicles, this.vehicles);
            }
        }
    }

    async edit(newVehicle: IEZTag, index: number) {
        await this.opsHelper.edit(newVehicle, index, this.vehicles, this.cms.vehicleExists);
    }

    async remove(index: number) {
        await this.opsHelper.remove(index, this.vehicles);
    }

    @HostListener('window:popstate', ['$event'])
    onBrowserBackNav(event) {
        this.stateService.go(new Home().Frame);
    }
}
