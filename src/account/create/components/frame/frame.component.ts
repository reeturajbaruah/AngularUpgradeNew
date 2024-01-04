import { Component, Input, Inject, OnInit, HostListener } from '@angular/core';
import { StateDeclaration, StateService } from '@uirouter/core';
import { SiteCoreItem } from 'cms/cms.module';
import { State, Country, TagType } from 'common/models';
import { WindowRef } from 'common/providers';
import { CurrentUserService, DialogService } from 'common/services';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues, StepperStep, WizardComponent } from 'common/ui';
import { wait } from 'common/utilities';

import { States as stateNames, States } from '../../states';
import { StateNames as Home } from 'home/constants';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { StoreService } from 'account/create/services/store/store.service';
import { ComponentManagerService } from 'account/create/services/manager/component-manager-service';
import { Prop } from 'account/create/models/current-step.model';
import { NavigationService } from 'account/create/services/navigation/navigation.service';
import { IPageEvent } from 'account/create/models/campaign-models';
import { IToggles } from 'account/create/models/toggles.models';
import { StorefrontUtilityService } from '../../../../storefront/services/storefrontUtility.service';

type StepKeyValue = { [key: string]: number };


@Component({
    selector: 'create-account-frame',
    templateUrl: './frame.component.html',
    styleUrls: ['./frame.component.less']
})
export class FrameComponent implements OnInit {

    steps: StepperStep[] = [];
    stepMap: StepKeyValue = {};
    @Input() cmsFrame;
    isHidden: boolean;

    showStepper = false;
    showHeader = false;
    isKiosk = false;
    campaignBanner = {
        display: false,
        img: ''
    };

    toggles: IToggles;
    displayStepper = false;

    source = 'CREATE ACCOUNT';

    constructor(
        @Inject(WindowRef) private windowRef: Window,
        private storefrontUtilityService: StorefrontUtilityService,
        private dialogService: DialogService,
        private stateService: StateService,
        private authService: AuthenticationService,
        private manager: ComponentManagerService,
        private navigation: NavigationService
    ) { }

    async ngOnInit() {

        this.manager.subscribeToggles((toggles: IToggles) => {
            this.toggles = toggles;

            this.navigation.setOrder(this.toggles.IsFlexPay);
            if (this.toggles.IsFlexPay) {

                this.steps = [

                    { name: this.cmsFrame.step1, background: 'secondary' },
                    { name: this.cmsFrame.step2, background: 'secondary' },
                    { name: this.cmsFrame.step4, background: 'secondary' },
                    { name: this.cmsFrame.step3, background: 'secondary' },
                    { name: this.cmsFrame.step5, background: 'secondary' },
                    { name: this.cmsFrame.step6, background: 'secondary' }

                ];

                this.stepMap = {
                    [States.Login]: 1,
                    [States.VehicleInfo]: 2,
                    [States.PaymentInfo]: 4,
                    [States.DeliveryMethod]: 3,
                    [States.Review]: 5,
                    [States.Receipt]: 6
                };
            }

            else {
                this.steps = [

                    { name: this.cmsFrame.step1, background: 'secondary' },
                    { name: this.cmsFrame.step2, background: 'secondary' },
                    { name: this.cmsFrame.step3, background: 'secondary' },
                    { name: this.cmsFrame.step4, background: 'secondary' },
                    { name: this.cmsFrame.step5, background: 'secondary' },
                    { name: this.cmsFrame.step6, background: 'secondary' }

                ];

                this.stepMap = {
                    [States.Login]: 1,
                    [States.VehicleInfo]: 2,
                    [States.PaymentInfo]: 3,
                    [States.DeliveryMethod]: 4,
                    [States.Review]: 5,
                    [States.Receipt]: 6
                };
            };

            this.displayStepper = true;
            this.isKiosk = this.
                storefrontUtilityService.isRunningAsKiosk && !this.storefrontUtilityService.webStoreData.fullSiteMode;

        });

    }

    async scrollToTop() {
        this.isHidden = true;

        await wait(20);
        this.windowRef.scrollTo(0, 0);

        this.isHidden = false;
    }

    nextButtonText(state: string, skipNextStep?: boolean) {
        const totalSteps = this.steps.length;
        const nextStepVal = skipNextStep ? this.stepMap[state] + 2 : this.stepMap[state] + 1;

        const nextButtonText = this.cmsFrame.submitButtonText;
        return nextButtonText.replace('{0}', nextStepVal).replace('{1}', totalSteps);
    }

    async cancel(cancellationModal: SiteCoreItem, wizardUi: WizardComponent) {
        if (this.isKiosk && wizardUi) {
            await wizardUi.abortKioskFlow();
            this.manager.clearStore();

            return;
        } else {
            const data: GenericCmsModalInjectionValues = {
                cmsContent: {
                    Title: cancellationModal.Title,
                    PrimaryContent: cancellationModal.LongDescription,
                    AcceptBtn: 'No',
                    CancelBtn: 'Yes'
                }
            };
            const res = await this.dialogService.openGenericModal(GenericCmsModalComponent, data);
            if (!res) {
                await this.authService.logout();
                this.manager.clearStore();
                await this.stateService.go(new Home().Frame);

            }

        }


    }

    skipStep(stepName: string, skip: boolean) {

        const step = this.steps.find(s => s.name === stepName);
        step.isGreyed = false;

        if (skip && step) {
            step.isGreyed = true;
        }
    }

    async skipDeliveryStep() {
        if (this.toggles.IsFlexPay && this.toggles.EzTagOption) {

            const vehicles = await this.manager.select(Prop.Vehicles);

            const countNoTags = vehicles.filter(v => v.tagId === TagType.NoTag).length;
            if (countNoTags === vehicles.length) {

                this.skipStep('Delivery Method', true);
                this.navigation.skipStep(States.DeliveryMethod);

                return true;

            } else {
                this.skipStep('Delivery Method', false);
                this.navigation.addStep(States.DeliveryMethod, States.VehicleInfo);
                return false;

            }
        }
    }

    async campaignInit(pageName: string) {
        this.campaignBanner = {
            display: false,
            img: ''
        };

        await this.manager.campaign({ pageEvent: IPageEvent.OnInit, pageName });

    }


}
