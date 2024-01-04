import { Component, Input, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { StateConfig } from 'common/interfaces';
import { BillingInfo, BillingType } from 'common/models';
import { DialogContent, DialogService, EventTrackingService, ResponseErrorService } from 'common/services';
import {
    BillingModalComponent,
    InjectionValues as BillingInjectionValues
} from 'common/ui/modals/billingModal/billingModal.component';
import { WebStorageConst } from 'constants/module';
import { cloneDeep, isEmpty } from 'lodash';
import { FrameComponent } from '../frame/frame.component';
import { MissedATollService, WebApiService } from '../services';
import { WizardComponent } from 'common/ui';
import { ToggleButtonsService } from '../../common/services/toggleButtons/toggleButtons.service';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

interface ConfirmCmsContent {
    reviewInfoHeader: string;
    emailInstructions: string;
    paymentDetailsHeader: string;
    totalPaymentLabel: string;
}

@Component({
    selector: 'confirm-component',
    templateUrl: './confirm.html',
    styleUrls: ['./confirm.less']
})
export class ConfirmComponent implements OnInit, AfterViewInit {

    constructor(
        public parent: FrameComponent,
        private state: StateService,
        private uiRouterGlobals: UIRouterGlobals,
        private webStorage: WebStorageService,
        private responseErrorService: ResponseErrorService,
        private missedATollService: MissedATollService,
        private dialogService: DialogService,
        private missedATollApi: WebApiService,
        private eventTrackingService: EventTrackingService,
        private toggleButtonsService: ToggleButtonsService,
        private webStorageConst: WebStorageConst
    ) {

    }

    public totalPayment: number;

    public BillingType = BillingType;
    public billingInfo: BillingInfo;

    @Input() cmsContent: ConfirmCmsContent;
    @Input() emailAddress: string;

    @ViewChild(WizardComponent) wizardComponent: WizardComponent;

    public get cms(): ConfirmCmsContent {
        return this.cmsContent;
    }

    ngOnInit() {
        this.parent.stepNum = 3;

        this.billingInfo = this.uiRouterGlobals.params.billingInfo || {};
    }

    ngAfterViewInit() {
        return this.billingInfo && this.billingInfo.billingType && !isEmpty(this.billingInfo)
            ? this.setupPage()            
            : this.wizardComponent.gotoPreviousState();
    }

    private setupPage() {
        this.parent.scrollToTop();

        const violationInformation = this.missedATollService.getViolationInformation();
        const formattedViolationData = violationInformation.formattedViolationData;
        this.totalPayment = formattedViolationData.grandTotal;
    }

    public async submit(nextState: StateConfig) {

        this.webStorage.addEmailAddressToViolationsData(this.parent.emailAddress);

        const violationInformation = this.missedATollService.getViolationInformation();

        const request = await this.missedATollService.constructMatPaymentRequest(
            this.billingInfo.billingType,
            this.billingInfo,
            violationInformation,
            violationInformation.formattedViolationData.listOfViolations,
            this.parent.emailAddress
        );

        request.violations = request.violationInfo.violations;
        request.agencyPayments = request.violationInfo.agencyPayments;
        request.violationsData = {
            licenseState: request.violationInfo.jurisdiction,
            licensePlate: request.violationInfo.licPlateNum
        };

        const responsePromise = this.missedATollApi.matMakePayment(request);
        this.toggleButtonsService.disableUntilResolved(responsePromise);
        const response = await responsePromise;

        if (this.responseErrorService.isErrorFree(response)) {
            // Delete violations data from webStorage if successful payment
            this.webStorage.removeEntry(this.webStorageConst.violationsLogData);

            await this.goToNextState(nextState, request.violations);
        }

    }

    private async goToNextState(nextState: StateConfig, violations: any) {

        this.eventTrackingService.matTrackViolationCounts(violations);

        await this.state.go(nextState, { billingInfo: this.billingInfo }, { custom: { isExplicitlyAllowedTransition: true } });
    }

    public async previous(prevState: StateConfig) {
        await this.state.go(prevState, { billingInfo: this.billingInfo });
    }

    public openModal() {

        const data: BillingInjectionValues = {
            billingInformation: cloneDeep(this.billingInfo),
            billingType: this.billingInfo.billingType,
            stateList: this.parent.stateList,
            countryList: this.parent.countryList
        };

        return this.dialogService.openSliderCentered(BillingModalComponent, data,
            { title: 'Edit Payment Method' } as DialogContent)
            .then((result: BillingInjectionValues) => {
                if (result) {
                    this.billingInfo = cloneDeep(result.billingInformation);
                    this.billingInfo.billingType = result.billingType;
                }
            });
    }
}
