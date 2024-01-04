import { AfterViewInit, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { ICartCms } from 'account/create/models/add-vehicle.models';
import { Prop } from 'account/create/models/current-step.model';
import { ComponentManagerService } from 'account/create/services/manager/component-manager-service';
import { StoreService } from 'account/create/services/store/store.service';
import { VehicleOperationService } from 'account/create/services/vehicles/operations/service/vehicle-operation-service';
import { SiteCoreItem } from 'cms/cms.module';
import { State, TagType } from 'common/models';
import { WizardComponent } from 'common/ui';
import { IAddTagVehicleInfoCMSContent, IVehicleConfig, IVehiclesCartList } from 'shared/vehicle-info';
import { IEZTag } from 'shared/vehicle-info';
import { FrameComponent } from '../../frame/frame.component';
import { StateNames as Home } from 'home/constants';
import { CampaignEventName, IPageEvent } from 'account/create/models/campaign-models';
import { IToggles } from 'account/create/models/toggles.models';

@Component({
    selector: 'vehicle-info',
    templateUrl: './vehicle-info.component.html',
    styleUrls: ['./vehicle-info.component.less']
})
export class VehicleInfoComponent implements OnInit {

    @Input() addVehicleCmsContent: IAddTagVehicleInfoCMSContent;
    @Input() statesList: State[];
    @Input() cartCms: ICartCms;
    @Input() deleteModalCms: SiteCoreItem;
    @Input() editModalCms: SiteCoreItem;
    @Input() cancellationModal: SiteCoreItem;

    vehicle: IEZTag;

    vehiclesList: IEZTag[] = [];
    showCart: boolean;
    cartListData: IVehiclesCartList;
    defaultConfig: IVehicleConfig;
    config: IVehicleConfig;
    toggles: IToggles;
    pageName = 'VehicleInfo';

    constructor(private opsService: VehicleOperationService,
        private manager: ComponentManagerService,
        private uiRouterGlobals: UIRouterGlobals,
        private store: StoreService,
        private parent: FrameComponent,
        private stateService: StateService
    ) {
    }

    async ngOnInit() {
        this.toggles = await this.manager.getToggles();
        await this.parent.campaignInit(this.pageName);

        this.parent.showHeader = false;
        const vehicles = await this.manager.select(Prop.Vehicles);

        this.setConfig();

        if (vehicles === undefined) {
            this.renderAddVehicle();
        } else {
            this.renderVehiclesCart(vehicles);
        }

        this.manager.checkUserResumedCreateAcctFlow(this.uiRouterGlobals.params);

    }

    private renderAddVehicle() {
        this.vehicle = {
            licState: 'TX',
            vehicleClassCode: 2,
            motorcycle: false,
            activePbpTagExist: false,
            isMotorcycleDisabled: true,
            tagTypeCode: TagType.Tag,
            acctTagSeq: -1
        } as IEZTag;

    }

    private setConfig() {

        this.defaultConfig = {
            ezTagOptionConfig: this.toggles.IsFlexPay ? (this.toggles.EzTagOption ? {
                ezTagOrder: {
                    flag: true,
                    msgWhenMotorcyleNotOpted: this.addVehicleCmsContent.ezTagMsgWithoutMotorcycle,
                    msgWhenMotorcyleOpted: this.addVehicleCmsContent.ezTagMsgWithMotorcycle,
                    warningDesc: this.addVehicleCmsContent.ezTagWarningMsg
                },
                motorcycle: {
                    message: this.addVehicleCmsContent.motorcycleMsg
                }
            } : null) :
                null
        };

        this.config = { ...this.defaultConfig };
    }

    private renderVehiclesCart(info) {
        this.vehiclesList = info; // todo: type the response
        this.showCart = true;
        this.mapCartData();
    }

    async add(event) {

        await this.manager.campaign({ pageEvent: IPageEvent.Submit, pageName: this.pageName });


        const ezTagOptionConfig = this.config.ezTagOptionConfig;
        if (ezTagOptionConfig && !ezTagOptionConfig.ezTagOrder.flag) {
            this.vehicle.tagId = TagType.NoTag;
            this.vehicle.tagTypeCode = TagType.NoTag;
        }

        const res = await this.opsService.add(this.vehicle);

        if (res) {
            this.vehiclesList.push(res);
            this.store.dispatch(Prop.Vehicles, this.vehiclesList);
            this.showCart = true;
            this.mapCartData();
        }
    }

    private mapCartData() {
        this.cartListData = {
            title: this.cartCms.Title,
            context: this.cartCms.LongDescription,
            vehicleDetailsHeader: this.cartCms.vehicleDetailsHeader,
            ezTags: this.vehiclesList,
            modalContent: {
                edit: this.editModalCms,
                cancel: this.cancellationModal,
                remove: this.deleteModalCms,
                add: this.editModalCms
            },
            states: this.statesList,
            config: { ...this.defaultConfig }
        };
    }

    async cancel(state: StateDeclaration, wizardUi: WizardComponent) {
        return await this.parent.cancel(this.cancellationModal, wizardUi);

    }

    @HostListener('window:popstate', ['$event'])
    onBrowserBackNav(event) {
        this.stateService.go(new Home().Frame);
    }

}

