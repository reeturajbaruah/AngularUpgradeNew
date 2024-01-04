import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { Prop } from 'account/create/models/current-step.model';
import { IDeliveryMethodInfo } from 'account/create/models/delivery-method.model';
import { IWizardCmsData } from 'account/create/models/wizard-data.models';
import { ComponentManagerService } from 'account/create/services/manager/component-manager-service';
import { NavigationService } from 'account/create/services/navigation/navigation.service';
import { StoreService } from 'account/create/services/store/store.service';
import { States } from 'account/create/states';
import { SiteCoreItem } from 'cms/cms.module';
import { NewBillingAddressInjectionValues, WizardComponent } from 'common/ui';
import { StateConfig } from '../../../../common/interfaces';
import { FrameComponent } from '../frame/frame.component';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { MailingAddressService } from 'vehicles/shared';
import { NewBillingAddressModalComponent } from 'common/ui';
import { Country, DeliveryMethodType, IMailingInfo, State } from 'common/models';
import { DialogService } from 'common/services';
import { DeliveryMethodFacadeService } from 'account/create/services/delivery-method/facade/delivery-method-facade-service';
import { DeliveryMethodApiService } from 'account/create/services/delivery-method/api/delivery-method-api.service';
import { CampaignEventName, IPageEvent } from 'account/create/models/campaign-models';
import { IToggles } from 'account/create/models/toggles.models';
import { StorefrontService } from '../../../../storefront/services/storefront.service';

@Component({
    selector: 'delivery-method',
    templateUrl: './delivery-method.component.html',
    styleUrls: ['./delivery-method.component.less'],
    providers: [
        DeliveryMethodApiService,
        DeliveryMethodFacadeService,
    ]
})
export class DeliveryMethodComponent implements OnInit {
    @Input() cancellationModal: SiteCoreItem;
    @Input() countryList: Country[];
    @Input() deliveryMethodInfoPage: IWizardCmsData;
    @Input() stateList: State[];

    delieveryMethodInfo = {} as IDeliveryMethodInfo;
    ezTagOption: boolean;
    isFlexPay: boolean;
    mailingInfo: IMailingInfo;
    navigationLinks = { prev: null, next: null };
    submitBtnText: string;
    pageName = 'DeliveryMethod';
    toggles: IToggles;

    constructor(
        @Inject(ENVIRON_CONFIG) public config,
        private facade: DeliveryMethodFacadeService,
        private stateService: StateService,
        private manager: ComponentManagerService,
        private uiRouterGlobals: UIRouterGlobals,
        private store: StoreService,
        private parent: FrameComponent,
        private mailingService: MailingAddressService,
        private dialogService: DialogService,
        private navigation: NavigationService,
        private storefrontService: StorefrontService
    ) { }


    async ngOnInit() {
        this.toggles = await this.manager.getToggles();
        await this.parent.campaignInit(this.pageName);
        await this.fetchStoreData();
        this.checkUserFlow();
        this.setupNavigation();
        this.isFlexPay = this.toggles.IsFlexPay;
    }

    private async fetchStoreData() {
        const storeData: IDeliveryMethodInfo = await this.manager.select(Prop.DeliveryMethod);
        this.delieveryMethodInfo.addressInfo = storeData.addressInfo;
        this.setDeliveryMethod(storeData?.selectedDeliveryMethod);
    }

    private setDeliveryMethod(selectedDeliveryMethod) {
        //isEnabled is a reference to storefrontUtility.isRunningAsKiosk
        if (!selectedDeliveryMethod && !this.storefrontService?.isEnabled) {
            this.delieveryMethodInfo.selectedDeliveryMethod = DeliveryMethodType.Mail;
        }
        else if (!selectedDeliveryMethod) {
            this.delieveryMethodInfo.selectedDeliveryMethod = DeliveryMethodType.Store;
        }
        else {
            this.delieveryMethodInfo.selectedDeliveryMethod = selectedDeliveryMethod;
        }
    }

    private checkUserFlow() {
        this.manager.checkUserResumedCreateAcctFlow(this.uiRouterGlobals.params);
    }

    private setupNavigation() {
        this.submitBtnText = this.parent.nextButtonText(States.DeliveryMethod);
        this.navigationLinks = this.navigation.navigation(States.DeliveryMethod);
    }

    async next(nextState: StateConfig) {
        await this.manager.campaign({ pageEvent: IPageEvent.Submit, pageName: this.pageName });

        this.dispatchDeliveryMethod();
        await this.stateService.go(this.navigationLinks.next.name);
    }

    async cancel(state: StateDeclaration, wizardUi: WizardComponent) {
        return await this.parent.cancel(this.cancellationModal, wizardUi);

    }

    async previous(state: StateDeclaration) {
        await this.stateService.go(this.navigationLinks.prev.name);
    }

    async onMailingAddressEdit(option: string) {
        const dialogData = await this.getMailingAddressDialogData();
        const result = await this.dialogService.openSliderCentered(NewBillingAddressModalComponent, dialogData, { title: option + ' Mailing Address' });

        if (result) {
            await this.updateMailingInfo(result.mailingInfo);
        }
    }

    private async getMailingAddressDialogData(): Promise<NewBillingAddressInjectionValues> {
        return {
            mailingInfo: await this.getMailingInfo(),
            stateList: this.stateList,
            countryList: this.countryList,
            isShowPersonalInfo: false,
            addressTitle: 'Mailing Address'
        };
    }

    private async getMailingInfo(): Promise<IMailingInfo> {
        return Object.assign({}, await this.mailingService.getMailingAddress()) as IMailingInfo;
    }

    private async updateMailingInfo(mailingInfo: IMailingInfo) {
        const res = await this.facade.updateMailingInfo(mailingInfo);

        if (res) {
            this.delieveryMethodInfo.addressInfo = mailingInfo;
            this.dispatchDeliveryMethod();
        }
    }

    private dispatchDeliveryMethod() {
        this.resetDeliveryMethodForKiosk();
        this.store.dispatch(Prop.DeliveryMethod, this.delieveryMethodInfo);
    }

    private resetDeliveryMethodForKiosk() {
        if (this.storefrontService?.isEnabled) {
            this.delieveryMethodInfo.selectedDeliveryMethod = DeliveryMethodType.Store;
        }
    }
}
