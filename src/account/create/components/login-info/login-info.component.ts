import { Component, Input, OnDestroy, OnInit, Inject, HostListener, AfterViewInit } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { LoginFacadeService } from 'account/create/services/login/facade/facade-service';
import { IContactInfoCmsData, ICreateAccountContactInfo, ICreateAccountLoginInfo, ILoginInfo, State } from '../../../../common/models';
import { AccountService, CurrentUser, CurrentUserService, ResponseErrorService } from '../../../../common/services';
import { PasswordValidationInfo } from 'common/interfaces';
import { ComponentManagerService } from 'account/create/services/manager/component-manager-service';
import { LoginFacadeApiService } from 'account/create/services/login/api/facade-api.service';
import { IWizardCmsData } from 'account/create/models/wizard-data.models';
import { FrameComponent } from '../frame/frame.component';
import { States } from 'account/create/states';
import { SiteCoreItem } from 'cms/cms.module';
import { WizardComponent } from 'common/ui';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { kioskRouter, webuiRouter } from 'account/create/create-acct-router.function';
import { WebStorageService } from '../../../../common/services/webStorageService/webStorage.service';
import { CampaignEventName, IPageEvent } from 'account/create/models/campaign-models';
import { Subscription } from 'rxjs';
import { campaignEnableLocalStorage } from 'account/create/constants';
import { IToggles } from 'account/create/models/toggles.models';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

@Component({
    selector: 'login-info',
    templateUrl: './login-info.component.html',
    styleUrls: ['./login-info.component.less'],
    providers: [
        LoginFacadeService,
        LoginFacadeApiService,
    ]
})
export class LoginInfoComponent implements OnInit, OnDestroy {

    @Input() stateList: any[];
    @Input() countryList: any[];
    @Input() personalInfoPage: IWizardCmsData & IContactInfoCmsData;
    @Input() pwCmsData: PasswordValidationInfo;
    @Input() cmsFrame;
    subTitleDesc: string;
    loginAndPersonalAcctInfo: ICreateAccountContactInfo & ICreateAccountLoginInfo & IContactInfoCmsData;
    loginInfo: ICreateAccountLoginInfo;
    submitBtnText: string;
    @Input() cancellationModal: SiteCoreItem;
    display = false;
    pageName = 'LoginInfo';
    subscriptions: Subscription[] = [];
    toggles: IToggles;

    constructor(
        private accountService: AccountService,
        private responseErrorService: ResponseErrorService,
        private stateService: StateService,
        public facade: LoginFacadeService,
        private parent: FrameComponent,
        private currentUserService: CurrentUserService,
        private webStorage: WebStorageService,
        private storefrontUtilityService: StorefrontUtilityService,
        private manager: ComponentManagerService,
        private uiRouterGlobals: UIRouterGlobals,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    private async campaign() {

        this.manager.campaignClear();

        const params = this.uiRouterGlobals.params;
        const isCampaignEnable = this.manager.isCampaignEnable(this.toggles, params);

        if (isCampaignEnable) {

            await this.parent.campaignInit(this.pageName);

            this.subscriptions.push(this.manager.getCampaignBanner(params).subscribe(async data => {
                const bannerInfo = await data;
                this.parent.campaignBanner = {
                    display: true,
                    img: bannerInfo?.Image
                };
            }));
        }
    }

    async ngOnInit() {

        this.toggles = await this.manager.getToggles();
        await this.campaign();
        this.parent.showHeader = true;
        this.setSubTitleDesc();
        this.init();
        await this.render();
    }

    private setSubTitleDesc() {
        const isKiosk = this.storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;
        if (!isKiosk) {
            this.subTitleDesc = this.cmsFrame.ShortDescription;
        }
        else {
            this.subTitleDesc = this.cmsFrame.LongDescription;
        }
    }

    private init() {

        this.loginInfo = {
            password: '',
            securityAnswer: ''
        };

        this.loginAndPersonalAcctInfo = {} as (ICreateAccountContactInfo & ICreateAccountLoginInfo & IContactInfoCmsData);
        this.loginAndPersonalAcctInfo.stateList = this.stateList;
        this.loginAndPersonalAcctInfo.countryList = this.countryList;
        this.loginAndPersonalAcctInfo.isShowSaveMailingAddressCheck = this.toggles?.IsFlexPay && this.toggles?.IsMailingAddressOptional ? true : false;
        this.loginAndPersonalAcctInfo.isSaveMailingAddressChecked = true;
        if (this.loginAndPersonalAcctInfo.isShowSaveMailingAddressCheck) {
            this.loginAndPersonalAcctInfo.saveMailingAddressDescription = this.personalInfoPage?.saveMailingAddressDescription;
        }
        this.loginAndPersonalAcctInfo.phoneAlertsOptInDesc = this.personalInfoPage?.phoneAlertsOptInDesc;
        this.submitBtnText = this.parent.nextButtonText(States.Login);
    }

    private async render() {
        const currentUser = this.currentUserService.getCurrentUser();
        const currentStep = this.webStorage.getValue('currentStep');
        const acctActivity = currentUser.acctActivity;

        if (currentStep === null) {
            this.display = true;
            this.manager.clearStore();
            await this.firstTimeLoginRender();
        }
        if (acctActivity === 'P' && currentUser.firstName !== null && currentUser.lastName !== null) {
            this.display = false;
            let route = this.parent.isKiosk ? kioskRouter(currentStep) : webuiRouter(currentStep);

            route = currentStep === null ? States.VehicleInfo : route;

            const contactInfo = await this.accountService.getContactInfo();
            await this.route(contactInfo.homePhoNbr, route);


        }
    }

    private async firstTimeLoginRender() {
        this.facade.isUserLoggedIn = false;
        this.setSecurityQuestions();
    }

    private async setSecurityQuestions() {
        const res = await this.accountService.getSecurityQuestions();
        if (this.responseErrorService.isErrorFree(res)) {
            this.loginAndPersonalAcctInfo.securityQuestions = res.securityQuestions;
        }
    }

    async submit(state: StateDeclaration) {

        await this.manager.campaign({ pageEvent: IPageEvent.Submit, pageName: this.pageName });

        this.loginAndPersonalAcctInfo.password = this.loginInfo.password;
        this.loginAndPersonalAcctInfo.securityAnswer = this.loginInfo.securityAnswer;

        const res = await this.facade.setupAccount(this.loginAndPersonalAcctInfo, this.toggles.IsFlexPay);
        if (res) {
            this.facade.isUserLoggedIn = true;
            await this.route(this.loginAndPersonalAcctInfo.primaryPhone, States.VehicleInfo);
        }
    }

    private async route(phone: string, nextState: string) {
        if (!this.parent.isKiosk && this.environmentConfig.enableWebCreateAccount2FA) {
            await this.twoFactorAuthenticate(nextState, phone);
        } else {
            await this.stateService.go(nextState);

        }
    }

    private async twoFactorAuthenticate(validationSuccessState, phoneNumber) {
        await this.stateService.go(States.PhoneValidation, {
            phoneNumber,
            acctId: this.currentUserService.getCurrentUser().acctId,
            validationSuccessState
        });
    }

    ngOnDestroy() {
        this.facade.isUserLoggedIn = false;
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    async cancel(state: StateDeclaration, wizardUi: WizardComponent) {
        return await this.parent.cancel(this.cancellationModal, wizardUi);
    }
}
