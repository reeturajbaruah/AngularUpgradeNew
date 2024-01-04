import {
    Component, Inject, Input, OnInit
} from '@angular/core';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames as accountDashboardStates } from 'accountDashboard/constants';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { StateConfig } from 'common/interfaces';
import { BillingType } from 'common/models';
import { WindowRef } from 'common/providers';
import { CurrentUserService, GenericRepoService, ResponseErrorService } from 'common/services';
import { WebStorageConst } from 'constants/module';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { FrameComponent } from '../frame/frame.component';


interface CmsContent {
    Title: string;
    billingInfoHeader: string;
    ezTagRequestedHeader: string;
}

interface CmsSectionThankYou {
    Title: string;
    paymentDetails: string;
    paymentDisclaimer: string;
    accountCreatedText: string;
    accountNumText: string;
}


@Component({
    selector: 'cavve-receipt-component',
    templateUrl: './receipt.html',
    styleUrls: ['./receipt.less']
})
export class ReceiptComponent implements OnInit {
    constructor(
        private webStorage: WebStorageService,
        private responseErrorService: ResponseErrorService,
        private genericRepo: GenericRepoService,
        @Inject(WindowRef) private window: Window,
        private parent: FrameComponent,
        private authService: AuthenticationService,
        private uiRouterGlobals: UIRouterGlobals,
        private webStorageConst: WebStorageConst,
        private state: StateService,
        private currentUserService: CurrentUserService
    ) { }

    @Input() cmsContent: CmsContent;
    @Input() cmsSectionThankYou: CmsSectionThankYou;

    public paymentDetails: string;
    public paymentDisclaimer: string;
    public BillingType = BillingType;

    // Payment
    public totalPaid: number;
    public billingInfo: any;
    public vehicleInfo: any;
    public createAccountFromViolationsTotals: any;
    public paymentDetailsParams = {};
    currentUser: any = {};

    ngOnInit() {
        this.createAccountFromViolationsTotals =
            this.webStorage.getValue(this.webStorageConst.createAccountFromViolationsTotals) || {};
        this.createAccountFromViolationsTotals.totalViolationsDue =
            this.webStorage.getValue(this.webStorageConst.remainingPlateTotalBeforeDiscount);
        this.createAccountFromViolationsTotals.serviceFee =
            this.webStorage.getValue(this.webStorageConst.serviceFee);
        this.totalPaid = this.createAccountFromViolationsTotals.createAccountPlateTotal;
        this.currentUser = this.currentUserService.getCurrentUser();

        this.setUpPage();
    }

    public print() {
        this.window.print();
    }

    private get dateNow() {
        return new Date();
    }

    private setUpPage = async () => {
        this.parent.stepNum = 4;
        this.parent.showAccountDetailsHeader = true;
        this.populateCMSContent();

        await this.authService.profile({});
        await this.setAccountData();
    };

    private populateCMSContent = () => {

        this.parent.setFrameTitle(this.cmsContent.Title);
        this.paymentDetailsParams = {
            current_date: this.dateNow,
            total_paid: this.totalPaid
        };
    };

    private setAccountData = async () => {

        // if desired attributes are not null, then use what is given through $state.params.
        if (this.uiRouterGlobals.params.billingInfo && this.uiRouterGlobals.params.vehicleInfo) {
            this.billingInfo = this.uiRouterGlobals.params.billingInfo;
            this.vehicleInfo = this.uiRouterGlobals.params.vehicleInfo;
        } else {
            await this.getVehicleInfo();
            await this.getBillingInfo();
        }
    };

    private getVehicleInfo = async () => {
        const apiResponse = await this.genericRepo.dataFactory.getEZTagInfo();

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            this.vehicleInfo = apiResponse.accountTags;
        }
    };

    private getBillingInfo = async () => {
        const apiResponse = await this.genericRepo.dataFactory.oneTimePaymentGetBillingInfo();

        if (this.responseErrorService.isErrorFree(apiResponse)) {
            this.billingInfo = apiResponse.billingInfo;
        }
    };

    public goToAccountOverviewOrLoginPage() {

        this.state.go(accountDashboardStates.Frame);
    }

    public async nextTask(nextState: StateConfig) {
        await this.state.go(nextState);
    }
}
