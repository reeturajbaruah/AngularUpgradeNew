import {
    Component, OnInit, Input
} from '@angular/core';

import { StateService } from '@uirouter/core';
import { StateConfig, Toast } from 'common/interfaces';
import { RowContainerType } from 'common/ui/containers/row/row.component';
import { WebApiService, ISuspendedSummary } from '../services/webapi.service';
import { FrameComponent } from '../frame/frame.component';
import { SiteCoreItem } from 'cms/cms.module';
import { CurrentUserService, ResponseErrorService, ToasterService } from 'common/services';
import { ISuspendedPaymentInfo, SuspendedAccountService } from 'suspendedAccountRefresh/services/suspendedAccount.service';
import { BillingInfo } from 'common/models';
import { IViolationPlate } from 'violationsCommon/interfaces';
import { collapseTrigger } from 'animations/collapse';

type AgencyDiscount = { name: string; mobileName: string; amount: number };
type AgencyDiscountMap = { [key: number]: AgencyDiscount };

interface IViolationLandingCmsContent extends SiteCoreItem {
    ViolationsDueAmount: string;
    TollViolationsFeeReduction: string;
    OutstandingAccountBalance: string;
    ReplenishmentAmount: string;
    TotalPaymentAmount: string;
    PaymentSummary: string;
    AgreeToWarning: string;
    CAO_TOOL_TIP: string;
    ReplenishmentAmountTextOptOut: string;
}

@Component({
    selector: 'suspended-violations-landing-component',
    templateUrl: './violationsLanding.component.html',
    styleUrls: ['./violationsLanding.component.less'],
    animations: [
        collapseTrigger,
    ]
})
export class ViolationsLandingComponent implements OnInit {

    constructor(
        private stateService: StateService,
        private frameComponent: FrameComponent,
        private webApiService: WebApiService,
        private responseErrorService: ResponseErrorService,
        private suspendedAccountService: SuspendedAccountService,
        private toasterService: ToasterService
    ) {
    }

    public RowContainerType = RowContainerType;


    public dataReady: boolean;
    public plates: { plate: IViolationPlate; collapsed: boolean }[];//IViolationPlate
    public summary: ISuspendedSummary;

    public discounts: AgencyDiscountMap;

    public agreeToTerms: boolean;

    @Input() cmsContent: IViolationLandingCmsContent;
    public paymentTerms: string;
    public outstandingBalance: string;

    private agreeToToast: Toast;
    replenishmentAmtText: string;

    async ngOnInit() {

        this.agreeToTerms = false;

        this.frameComponent.title = 'Account Suspended';
        this.frameComponent.bannerContent = this.cmsContent.Purpose;
        this.frameComponent.showStepper = false;
        this.frameComponent.showTitleBanner = true;

        this.dataReady = false;

        this.paymentTerms = this.cmsContent.Children[0].ShortDescription;
        this.outstandingBalance = this.cmsContent.Children[1].ShortDescription;

        const { plates, ...summary } = await this.webApiService.getSuspendedAccountData();

        if (!this.responseErrorService.isErrorFree(summary)) {
            this.responseErrorService.displayErrorsFromResponse(summary);
            return;
        }

        this.plates = plates.map(plate => ({ plate, collapsed: true }));

        this.discounts = plates
            .reduce((acc, { agencies }) => ([...acc, ...agencies]), [])
            .reduce((acc, { agencyID, agencyName, mobileAgencyName, discountTotal }) => {
                if (agencyID in acc) {
                    acc[agencyID].amount += discountTotal;
                } else {
                    acc[agencyID] = {
                        name: agencyName,
                        mobileName: mobileAgencyName,
                        amount: discountTotal
                    };
                }
                return acc;
            }, {} as AgencyDiscountMap);

        this.summary = summary;
        this.dataReady = true;

        this.replenishmentAmtText = this.suspendedAccountService.getReplenishmentAmtText(this.cmsContent.ReplenishmentAmount,
            this.cmsContent.ReplenishmentAmountTextOptOut);

    }

    async nextStep(state: StateConfig) {
        if (this.agreeToTerms) {

            this.suspendedAccountService.paymentInfo = {
                amount: this.summary.totalUnsuspensionPaymentAmount,
                eft: {
                    accountType: null,
                    name: null,
                    routingNumber: null,
                    accountNumber: null,
                    address1: null,
                    city: null,
                    state: null,
                    zip: null,
                    plus4: null,
                    country: 'USA',
                    displayCountry: 'USA',
                    international: false,
                    primary: true
                },
                credit: {
                    cardCode: null,
                    cardNbr: null,
                    expMonth: null,
                    expYear: null,
                    nameOnCard: null,
                    address1: null,
                    city: null,
                    state: null,
                    zip: null,
                    plus4: null,
                    country: 'USA',
                    displayCountry: 'USA',
                    international: false,
                    primary: true
                },
                billingType: null,
                makePrimary: true
            } as ISuspendedPaymentInfo;

            await this.stateService.go(state);
        } else {

            await this.frameComponent.scrollToTop({ wait: false, fade: false });

            if (!this.toasterService.isShowing(this.agreeToToast)) {
                this.agreeToToast = this.toasterService.show('Error', this.cmsContent.AgreeToWarning);
            }

        }
    }

}
